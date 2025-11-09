const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const { OpenAI } = require('openai') ;
const { createClient } = require ('@supabase/supabase-js');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;


const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);

// Middleware
app.use(cors());
app.use(express.json());

// AI Chatbot endpoint
// app.post("/api/chat", async (req, res) => {
//   const { message } = req.body;

//   const prompt = `
// You are a knowledgeable and helpful AI chatbot designed to answer questions about B. A. Akith Chandinu... // Prompt continues`;

//   try {
//     const result = await model.generateContent(prompt);
//     res.json(result.response.text());
//     console.log("Response generated successfully.");
//   } catch (error) {
//     console.error("Error generating response:", error);
//     res.status(500).send("Error processing request.");
//   }
// });

app.post('/api/chat', async (req, res) => {
  try {
    const { message, conversationHistory = [] } = req.body;

    // 1. Prepare messages for OpenAI
    const messages = [
      { role: 'system', content: 'You are a helpful AI assistant that answers portfolio-related questions.' },
      ...conversationHistory.map((m) => ({ role: m.role, content: m.content })),
      { role: 'user', content: message },
    ];

    // 2. Get AI response from OpenAI
    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages,
      temperature: 0.7,
    });

    const botResponse = completion.choices[0]?.message?.content || 'Sorry, I have no answer right now.';

    // 3. Save message + response to Supabase
    await supabase.from('chat_messages').insert([
      {
        user_message: message,
        bot_response: botResponse,
        created_at: new Date().toISOString(),
      },
    ]);

    // 4. Send response to frontend
    res.json({
      response: botResponse,
      timestamp: new Date().toISOString(),
    });

  } catch (error) {
    console.error('Chat error:', error);
    res.status(500).json({ error: 'Failed to generate response' });
  }
});

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    
    // Here you would typically send an email or store in a database
    console.log('Contact form submission:', { name, email, message });
    
    res.json({ 
      success: true, 
      message: 'Message received! I will get back to you soon.' 
    });
  } catch (error) {
    console.error('Contact error:', error);
    res.status(500).json({ error: 'Failed to send message' });
  }
});

// Simple AI response generator
async function generateBotResponse(message, history) {
  const lowerMessage = message.toLowerCase();
  
  // Portfolio-specific responses
  const responses = {
    greetings: [
      "Hello! 👋 I'm the AI assistant for this portfolio. How can I help you today?",
      "Hi there! I can tell you about the developer's skills, projects, and experience. What would you like to know?",
      "Welcome! Ask me anything about this portfolio or the developer's work!"
    ],
    skills: [
      "The developer is proficient in Full Stack Development including React, Node.js, Python, and modern web technologies. They specialize in building scalable applications with clean architecture. Would you like to know about specific technologies?",
      "Their tech stack includes: Frontend (React, Vue.js, TypeScript), Backend (Node.js, Python, Express), Databases (MongoDB, PostgreSQL), and DevOps (Docker, AWS, CI/CD). What specific skill interests you?"
    ],
    projects: [
      "There are several impressive projects showcased here, including an E-Commerce Platform, Social Media App, and AI Chatbot Platform. Which project would you like to learn more about?",
      "The featured projects demonstrate expertise in full-stack development, real-time applications, and AI integration. Check out the Projects section to see detailed case studies!"
    ],
    experience: [
      "The developer has extensive experience building modern web applications with a focus on user experience and performance. They've worked on projects ranging from e-commerce platforms to AI-powered applications.",
      "With years of experience in full-stack development, they've delivered solutions for various industries including fintech, healthcare, and e-commerce."
    ],
    contact: [
      "You can reach out through the contact form below, or connect via email and social media. The developer is always open to discussing new opportunities and interesting projects!",
      "Feel free to send a message through the contact section! Response time is typically within 24 hours."
    ],
    default: [
      "That's an interesting question! While I can tell you about the developer's skills, projects, and experience, you might want to reach out directly for more specific information. Is there anything particular about the portfolio you'd like to explore?",
      "I'd love to help! I can provide information about the developer's technical skills, project portfolio, and professional experience. What aspect interests you most?"
    ]
  };

  // Determine response category
  let category = 'default';
  
  if (lowerMessage.match(/hello|hi|hey|greet|good morning|good evening/)) {
    category = 'greetings';
  } else if (lowerMessage.match(/skill|technology|tech stack|programming|language|framework/)) {
    category = 'skills';
  } else if (lowerMessage.match(/project|work|portfolio|built|created|developed/)) {
    category = 'projects';
  } else if (lowerMessage.match(/experience|background|career|job|worked/)) {
    category = 'experience';
  } else if (lowerMessage.match(/contact|email|reach|hire|available|talk/)) {
    category = 'contact';
  }

  // Get random response from category
  const categoryResponses = responses[category];
  const response = categoryResponses[Math.floor(Math.random() * categoryResponses.length)];

  // Simulate AI processing delay
  await new Promise(resolve => setTimeout(resolve, 500 + Math.random() * 1000));

  return response;
}

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Server is running' });
});

app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
  console.log(`🤖 AI Chatbot is ready!`);
});


# 🚀 AI-Powered Portfolio Website

A cutting-edge, fully responsive portfolio website built with **React** and **Node.js**, featuring an integrated **AI Chatbot** for interactive visitor engagement.

## ✨ Features

### 🎨 Modern Design
- **Cyberpunk-inspired theme** with neon colors and glassmorphism
- **Animated particle background** for visual appeal
- **Smooth animations** and transitions throughout
- **Fully responsive** design for all devices

### 🤖 AI Chatbot
- **Interactive AI assistant** that answers questions about your portfolio
- **Real-time responses** about skills, projects, and experience
- **Sleek chat interface** with typing indicators
- **Quick prompts** for easy interaction
- Easily extendable to integrate with OpenAI, Anthropic, or other AI APIs

### 💼 Portfolio Sections
- **Hero Section** - Eye-catching introduction with typing animation
- **About** - Professional background with floating badges
- **Skills** - Comprehensive skill showcase with progress bars
- **Projects** - Filterable project gallery with detailed cards
- **Contact** - Functional contact form with backend integration

### ⚡ Technical Features
- Built with **React 18** and modern hooks
- **Node.js/Express** backend API
- **Framer Motion** for advanced animations
- **Axios** for API communication
- **Canvas-based** particle system
- **Real-time** form validation
- **Smooth scrolling** navigation

## 🛠️ Tech Stack

### Frontend
- React 18
- Framer Motion
- Axios
- React Icons
- Custom CSS with CSS Variables

### Backend
- Node.js
- Express
- CORS
- dotenv

## 📦 Installation

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Setup Instructions

1. **Clone or download this repository**
```bash
cd portfolio
```

2. **Install Backend Dependencies**
```bash
cd backend
npm install
```

3. **Install Frontend Dependencies**
```bash
cd ../frontend
npm install
```

## 🚀 Running the Application

### Development Mode

1. **Start the Backend Server**
```bash
cd backend
npm run dev
# or
npm start
```
The server will run on `http://localhost:5000`

2. **Start the Frontend (in a new terminal)**
```bash
cd frontend
npm start
```
The app will open at `http://localhost:3000`

### Production Build

1. **Build the Frontend**
```bash
cd frontend
npm run build
```

2. **Serve the built files**
You can serve the `frontend/build` folder using the backend server or any static file server.

## 🎨 Customization

### Personal Information
Update the following files with your information:

1. **Frontend Components**:
   - `frontend/src/components/Hero.js` - Name, role, stats
   - `frontend/src/components/About.js` - About text and highlights
   - `frontend/src/components/Skills.js` - Your skills and proficiency
   - `frontend/src/components/Projects.js` - Your projects
   - `frontend/src/components/Contact.js` - Contact information

2. **AI Chatbot Responses**:
   - `backend/server.js` - Customize the `generateBotResponse()` function

### Color Scheme
Edit CSS variables in `frontend/src/index.css`:
```css
:root {
  --primary: #00f5ff;      /* Cyan */
  --secondary: #ff00ff;    /* Magenta */
  --accent: #ffff00;       /* Yellow */
  --dark-1: #0a0a0f;       /* Background */
  --dark-2: #141420;       /* Secondary background */
}
```

### Integrating External AI APIs

To use OpenAI, Anthropic, or other AI services:

1. **Install the SDK**:
```bash
cd backend
npm install openai
# or
npm install @anthropic-ai/sdk
```

2. **Add your API key** to `.env` file:
```bash
OPENAI_API_KEY=your_api_key_here
```

3. **Update** `backend/server.js` to use the API:
```javascript
const OpenAI = require('openai');
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

async function generateBotResponse(message, history) {
  const response = await openai.chat.completions.create({
    model: "gpt-4",
    messages: [
      { role: "system", content: "You are a helpful portfolio assistant..." },
      ...history,
      { role: "user", content: message }
    ]
  });
  return response.choices[0].message.content;
}
```

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:
- 📱 Mobile devices (320px+)
- 📱 Tablets (768px+)
- 💻 Laptops (1024px+)
- 🖥️ Desktops (1440px+)

## 🌟 Key Features Explained

### AI Chatbot
The chatbot is designed to provide information about your portfolio:
- Answers questions about skills and experience
- Provides project details
- Shares contact information
- Context-aware responses based on conversation history

### Particle Background
Dynamic canvas-based particle system that:
- Creates connected particle networks
- Responds to screen size
- Uses minimal resources
- Adds visual depth

### Smooth Animations
- Scroll-triggered fade-in animations
- Hover effects on interactive elements
- Typing animation for hero text
- Loading states and transitions

## 🔧 API Endpoints

### Backend API

#### `POST /api/chat`
Send messages to the AI chatbot
```javascript
{
  "message": "Tell me about your skills",
  "conversationHistory": []
}
```

#### `POST /api/contact`
Submit contact form
```javascript
{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "Hello!"
}
```

#### `GET /api/health`
Check server status

## 📄 License

MIT License - feel free to use this project for your personal portfolio!

## 🤝 Contributing

This is a personal portfolio template. Feel free to fork and customize it for your own use!

## 💡 Tips

1. **Optimize Images**: If you add images, use WebP format and optimize them
2. **SEO**: Update meta tags in `frontend/public/index.html`
3. **Analytics**: Add Google Analytics or similar in the public HTML
4. **Deployment**: Use Vercel/Netlify for frontend, Heroku/Railway for backend

## 🎯 Deployment

### Frontend (Vercel/Netlify)
1. Build the frontend: `npm run build`
2. Deploy the `build` folder
3. Set environment variable for API URL

### Backend (Heroku/Railway)
1. Push backend folder to hosting service
2. Set environment variables
3. Update frontend API calls to use production URL

## 📞 Support

If you have questions or need help customizing this portfolio, feel free to reach out!

---

**Built with ❤️ using React & Node.js**

**Powered by AI 🤖**


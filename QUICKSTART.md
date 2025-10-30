# 🚀 Quick Start Guide

Get your AI-powered portfolio running in 5 minutes!

## Step 1: Install Dependencies

### Backend
```bash
cd backend
npm install
```

### Frontend
```bash
cd frontend
npm install
```

## Step 2: Start the Application

### Terminal 1 - Backend Server
```bash
cd backend
npm start
```
✅ Server running on http://localhost:5000

### Terminal 2 - React Frontend
```bash
cd frontend
npm start
```
✅ App opens at http://localhost:3000

## Step 3: Customize Your Portfolio

### Update Your Information
1. Open `frontend/src/components/Hero.js`
   - Change "Your Name" to your actual name
   - Update the stats (projects, years, etc.)

2. Open `frontend/src/components/About.js`
   - Write your own description
   - Update the highlight cards

3. Open `frontend/src/components/Skills.js`
   - Add/remove skills
   - Adjust proficiency levels

4. Open `frontend/src/components/Projects.js`
   - Replace with your actual projects
   - Update images, descriptions, and links

5. Open `frontend/src/components/Contact.js`
   - Update contact information
   - Change email, phone, location
   - Update social media links

### Customize Colors
Edit `frontend/src/index.css`:
```css
:root {
  --primary: #00f5ff;      /* Your primary color */
  --secondary: #ff00ff;    /* Your secondary color */
  --accent: #ffff00;       /* Your accent color */
}
```

## Step 4: Test the AI Chatbot

1. Click the floating robot button (🤖) in the bottom-right corner
2. Try asking:
   - "Tell me about your skills"
   - "What projects have you built?"
   - "How can I contact you?"

### Enhance the AI (Optional)

To use real AI (OpenAI, Anthropic, etc.):

1. **Get an API key** from OpenAI or Anthropic

2. **Create** `.env` file in backend folder:
```bash
PORT=5000
OPENAI_API_KEY=your_api_key_here
```

3. **Install SDK**:
```bash
cd backend
npm install openai
```

4. **Update** `backend/server.js` (see README.md for details)

## Troubleshooting

### Port Already in Use
If port 5000 or 3000 is taken:
- Backend: Change `PORT` in `backend/.env`
- Frontend: Use `PORT=3001 npm start`

### Dependencies Issues
```bash
rm -rf node_modules package-lock.json
npm install
```

### CORS Errors
Make sure:
1. Backend is running on port 5000
2. Frontend proxy is configured in `frontend/package.json`

## What's Next?

✅ Portfolio is running locally  
✅ Customize content  
✅ Test all features  
✅ Deploy (see README.md)  

## Need Help?

Check the full README.md for:
- Detailed customization guide
- API integration examples
- Deployment instructions
- Feature explanations

---

**Happy coding! 🎉**


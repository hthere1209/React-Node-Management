# 📁 Project Structure

```
portfolio/
│
├── backend/                          # Node.js Backend Server
│   ├── server.js                     # Main server file with AI chatbot logic
│   ├── package.json                  # Backend dependencies
│   └── .env                          # Environment variables (create this)
│
├── frontend/                         # React Frontend Application
│   ├── public/
│   │   └── index.html                # HTML template
│   │
│   ├── src/
│   │   ├── components/               # React Components
│   │   │   ├── Navbar.js             # Navigation bar
│   │   │   ├── Navbar.css
│   │   │   ├── Hero.js               # Hero section with typing effect
│   │   │   ├── Hero.css
│   │   │   ├── About.js              # About section
│   │   │   ├── About.css
│   │   │   ├── Skills.js             # Skills showcase
│   │   │   ├── Skills.css
│   │   │   ├── Projects.js           # Projects gallery
│   │   │   ├── Projects.css
│   │   │   ├── Contact.js            # Contact form
│   │   │   ├── Contact.css
│   │   │   ├── ChatBot.js            # ⭐ AI Chatbot component
│   │   │   ├── ChatBot.css
│   │   │   ├── ParticleBackground.js # Animated background
│   │   │   └── ParticleBackground.css
│   │   │
│   │   ├── App.js                    # Main App component
│   │   ├── App.css                   # App styles
│   │   ├── index.js                  # React entry point
│   │   └── index.css                 # Global styles & CSS variables
│   │
│   └── package.json                  # Frontend dependencies
│
├── README.md                         # Full documentation
├── QUICKSTART.md                     # Quick setup guide
├── PROJECT_STRUCTURE.md              # This file
├── .gitignore                        # Git ignore rules
└── package.json                      # Root package.json for scripts

```

## 🎯 Key Files to Customize

### 1. Personal Information
| File | What to Change |
|------|----------------|
| `frontend/src/components/Hero.js` | Your name, role, statistics |
| `frontend/src/components/About.js` | About text, highlights |
| `frontend/src/components/Skills.js` | Your skills and levels |
| `frontend/src/components/Projects.js` | Your projects |
| `frontend/src/components/Contact.js` | Contact info, social links |

### 2. AI Chatbot
| File | What to Change |
|------|----------------|
| `backend/server.js` | Chatbot responses, AI integration |
| `frontend/src/components/ChatBot.js` | UI, quick prompts |

### 3. Styling
| File | What to Change |
|------|----------------|
| `frontend/src/index.css` | Colors (CSS variables) |
| `frontend/src/App.css` | Global styles |
| Individual `.css` files | Component-specific styles |

### 4. Configuration
| File | What to Change |
|------|----------------|
| `backend/.env` | Port, API keys |
| `frontend/public/index.html` | Meta tags, title |

## 🚀 Component Flow

```
App.js
  ├─ ParticleBackground    (Background animation)
  ├─ Navbar                (Fixed navigation)
  ├─ Hero                  (Landing section)
  ├─ About                 (About section)
  ├─ Skills                (Skills grid)
  ├─ Projects              (Projects gallery)
  ├─ Contact               (Contact form)
  ├─ ChatBot               (AI chatbot modal)
  └─ Footer                (Footer)
```

## 🔄 Data Flow

```
User Types Message
       ↓
ChatBot.js (Frontend)
       ↓
POST /api/chat
       ↓
server.js (Backend)
       ↓
generateBotResponse()
       ↓
AI Response
       ↓
ChatBot.js displays message
```

## 🎨 Styling Architecture

### CSS Variables (index.css)
Define global colors and styles

### Component CSS
Each component has its own CSS file for:
- Layout
- Animations
- Responsive design
- Hover effects

### Responsive Breakpoints
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 📦 Dependencies

### Backend
- `express` - Web server
- `cors` - Cross-origin requests
- `dotenv` - Environment variables

### Frontend
- `react` - UI library
- `react-dom` - React rendering
- `axios` - HTTP requests
- `framer-motion` - Animations
- `react-icons` - Icons

## 🔧 Available Scripts

### Root Directory
```bash
npm run install-all   # Install all dependencies
npm start            # Start both servers (requires concurrently)
```

### Backend
```bash
npm start           # Start production server
npm run dev         # Start with nodemon (auto-reload)
```

### Frontend
```bash
npm start           # Start development server
npm run build       # Build for production
npm test            # Run tests
```

## 💡 Tips

1. **Development**: Run backend and frontend in separate terminals
2. **Testing**: Use the AI chatbot to test backend connectivity
3. **Customization**: Start with Hero and About sections
4. **Colors**: Change CSS variables for instant theme updates
5. **Deployment**: Build frontend, deploy both separately

---

**Need help?** Check README.md for detailed instructions!


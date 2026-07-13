# 🌐 Nandini — Developer Portfolio

A modern, animated personal portfolio website built with **React + Vite**, showcasing skills, projects, and professional experience. Designed with a dark, glassmorphism aesthetic featuring smooth animations powered by Framer Motion.

## 🔗 Live Demo

- 🌍 Portfolio: [funvisit.netlify.app](https://funvisit.netlify.app) *(example live projects)*
- 💼 GitHub: [github.com/NANDINI506](https://github.com/NANDINI506)
- 🔗 LinkedIn: [linkedin.com/in/nandini-9366592a9](https://linkedin.com/in/nandini-9366592a9)

---

## ✨ Portfolio Sections

| Section | Description |
|---|---|
| **Hero** | Animated intro with floating tech icons, avatar, and CTAs |
| **About** | Personal bio with stats — Projects, Technologies, Experience, AI Integrations |
| **Skills** | Bento-grid layout covering Frontend, Backend, AI, Database, Tools & Exploring |
| **Experience** | Timeline of professional journey at MULTIOPS IT SOLUTIONS |
| **Why Hire Me?** | Strength highlights in a bento/mosaic card layout |
| **Projects** | Featured project cards with live demo & GitHub links |
| **Contact** | Message form + social links (GitHub, LinkedIn) |

---

## 🛠️ Tech Stack

### Core
- **React 19** — UI framework
- **Vite 8** — Lightning-fast build tool
- **TailwindCSS 4** — Utility-first styling

### Libraries
- **Framer Motion** — Animations & page transitions
- **Lucide React** — Icon library
- **Three.js / React Three Fiber** — 3D particle background
- **React Router DOM** — Client-side routing

---

## 🗂️ Project Structure

```
Developer-portfolio/
├── public/
│   └── resume.pdf               # Downloadable resume
├── src/
│   ├── assets/
│   │   └── avatar.png           # Profile image
│   ├── components/
│   │   ├── Hero.jsx             # Landing section with avatar & floating cards
│   │   ├── About.jsx            # Bio and stats grid
│   │   ├── Skills.jsx           # Bento-grid skill cards
│   │   ├── Experience.jsx       # Alternating timeline
│   │   ├── WhyHireMe.jsx        # Strengths mosaic layout
│   │   ├── Projects.jsx         # Featured project cards
│   │   ├── Contact.jsx          # Contact form + socials
│   │   ├── Navbar.jsx           # Responsive sticky navigation
│   │   ├── ParticleBackground.jsx # Three.js particle canvas
│   │   ├── ScrollProgress.jsx   # Top scroll progress bar
│   │   └── CustomCursor.jsx     # Custom mouse cursor
│   ├── App.jsx                  # Root component & layout
│   ├── App.css                  # Global component styles
│   ├── index.css                # Base CSS & design tokens
│   └── main.jsx                 # Entry point
├── index.html
├── vite.config.js
├── package.json
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** v18+
- **npm** or **yarn**

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/NANDINI506/Developer-portfolio.git
cd Developer-portfolio

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

The app will be available at `http://localhost:5173`.

### Build for Production

```bash
npm run build
```

Output is generated in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

---

## 🎨 Design Highlights

- **Dark Mode** — Deep `#030014` background with ambient glow blobs
- **Glassmorphism** — Frosted-glass cards with `backdrop-blur`
- **Micro-animations** — Hover effects, floating icons, scroll-triggered reveals
- **Custom Cursor** — Animated cursor following mouse movement
- **Particle Background** — Three.js powered interactive particle canvas
- **Responsive** — Mobile-first layout, adapts across all screen sizes

---

## 📁 Featured Projects

### 🤖 AI-Powered Job Portal
A comprehensive job matching platform integrating FastAPI, MERN stack, and AI/ML technologies. Features intelligent resume analysis, advanced job matching algorithms, and ATS optimization.
- **Tech:** FastAPI, MERN Stack, AI/ML, Python

### 🌍 Tourism Website
Dynamic tourism site with interactive pages and smooth navigation for exploring destinations.
- **Live:** [funvisit.netlify.app](https://funvisit.netlify.app)
- **Tech:** HTML, CSS, JavaScript

### 🍔 Online Food Delivery
Responsive food ordering platform with dynamic menu, cart management, and checkout flow.
- **Live:** [foodycart.netlify.app](https://foodycart.netlify.app)
- **Tech:** HTML, CSS, JavaScript

### 🎉 Event Planning Platform
Full-stack event management site with booking and event listing features using PHP and SQL.
- **Live:** [omegaparty.netlify.app](https://omegaparty.netlify.app)
- **Tech:** HTML, CSS, JavaScript, PHP, SQL

---

## 💼 Professional Experience

**Software Engineer** — MULTIOPS IT SOLUTIONS *(10/2025 – Present)*
- Full-stack development for [Eternal Sikhs](https://eternalsikhs.com) live project
- Performance optimization and UI animations for MultiOps company website
- Frontend development and CMS enhancements for [MultiOps CMS](https://multiopseu.com)

**Full Stack Developer Trainee** — MULTIOPS IT SOLUTIONS *(04/2025 – 09/2025)*
- Built full-stack applications using the MERN stack
- Implemented secure authentication and APIs using JWT and bcrypt
- Developed an AI-Powered Job Portal integrating FastAPI, MERN, and AI/ML
- Hands-on experience in Agile workflows, Git/GitHub, and session management

---

## 🧠 Skills Overview

| Category | Technologies |
|---|---|
| **Frontend** | HTML, CSS, JavaScript, React.js, TypeScript, Redux, JSON |
| **Backend** | Node.js, Express.js, FastAPI, Python, PHP, C/C++, Java, .NET, ASP.NET, REST APIs |
| **Database** | MongoDB, MySQL, SQLite |
| **AI & Integrations** | AI Integrations, Resume Analysis, Intelligent Matching |
| **Tools & DevOps** | Git, GitHub, Docker, Postman, Netlify |
| **Exploring** | AI Agents, RAG Systems, Agentic Workflows, System Design |

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<p align="center">
  Made with ❤️ by <strong>Nandini</strong>
</p>

# 💡 RepoBrain - Brainstorm Your Next Project

A beautiful, interactive web app for brainstorming and organizing ideas for your next repository/project.

![RepoBrain](https://img.shields.io/badge/RepoBrain-Brainstorm-purple?style=for-the-badge)
![React](https://img.shields.io/badge/React-18-blue?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)
![Tailwind](https://img.shields.io/badge/Tailwind-4-38bdf8?style=for-the-badge&logo=tailwindcss)

## ✨ Features

- 🎯 **Add Ideas** - Capture project ideas with title, description, tech stack & tags
- 🗂️ **Categories** - Organize by type (Web App, CLI, Library, API, Game, AI/ML, etc.)
- 🔥 **Voting System** - Vote on your favorite ideas to prioritize them
- 🔍 **Search & Filter** - Find ideas by name, tech, or tags
- ⚡ **Sort Options** - Sort by popularity, date, or priority
- 📊 **Stats Dashboard** - See total ideas, votes, and categories at a glance
- 🎨 **Beautiful UI** - Dark theme with gradient cards and smooth animations

## 🚀 Deploy It Live (FREE!)

### Option 1: Vercel (Recommended - Easiest)
1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click **"Add New Project"** → Import your GitHub repo
4. Click **"Deploy"** — Done! ✅

### Option 2: Netlify
1. Push this repo to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Click **"Add new site"** → **"Import an existing project"**
4. Connect your GitHub repo
5. Click **"Deploy"** — Done! ✅

### Option 3: GitHub Pages
1. Install the gh-pages package:
   ```bash
   npm install -D gh-pages
   ```
2. Add to `package.json` scripts:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d dist"
   ```
3. Run:
   ```bash
   npm run deploy
   ```

### Option 4: Cloudflare Pages
1. Push this repo to GitHub
2. Go to [pages.cloudflare.com](https://pages.cloudflare.com)
3. Click **"Create a project"** → Connect your repo
4. Set build command: `npm run build`
5. Set output directory: `dist`
6. Click **"Save and Deploy"** — Done! ✅

## 🛠️ Local Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
src/
├── App.tsx              # Main app component
├── main.tsx             # Entry point
├── index.css            # Global styles
├── types.ts             # TypeScript types & configs
├── seedData.ts          # Sample ideas
└── components/
    ├── IdeaCard.tsx      # Individual idea card
    ├── AddIdeaModal.tsx  # New idea form modal
    ├── FilterBar.tsx     # Search, filter & sort
    └── StatsBar.tsx      # Statistics display
```

## 🎉 Built With

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Tailwind CSS 4** - Styling
- **Vite** - Build tool

---

Made with 💜 for creative developers

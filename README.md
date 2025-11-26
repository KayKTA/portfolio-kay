# 🌟 Kaniba Keita — Developer Portfolio

**Live website → [https://kay-kta.vercel.app/](https://kay-kta.vercel.app/)**

A retro-poster inspired, fully responsive developer portfolio showcasing my work, skills, and journey as a Fullstack JavaScript developer transitioning towards Data & AI.

This project was designed and developed from scratch using modern React tooling, with a strong focus on visual identity, performance, reusability, and consistency.

---

## 🎨 Concept & Goals

The idea behind this portfolio was to create something bold, memorable, and different from typical developer portfolios.

Instead of minimalism, this design embraces:

* **Retro print aesthetics** (textures, grids, bold typography)
* **Poster-style layouts** with strong color blocks
* **Full-screen slides** with smooth transitions
* **Hand-drawn accents** (post-its, markers, highlights)
* A tone that reflects **my personality**, not just my skills.

Everything in the design is component-driven so the UI can scale while staying consistent.

---

## 🧰 Tech Stack

### **Frontend**

* Next.js (App Router)
* React 18
* TypeScript
* MUI v7
* Framer Motion
* CSS-in-JS with MUI's `sx` API

### **Design System**

* Custom retro grid background
* Poster-style layouts
* Reusable UI components (RetroCard, SimpleChip, LinkBtn, CodeTyper…)

### **Deployment**

* Vercel

---

## 📁 Project Structure

```
src/
 ├─ components/
 │   ├─ layout/       → SlideLayout, page-level wrappers
 │   ├─ common/       → LinkBtn, highlight components, CodeTyper
 │   ├─ ui/           → RetroCard, SimpleChip, LanguageRow
 │   └─ slides/       → Hero, Skills, Experience, Education, Contact
 │
 ├─ styles/           → global styles & theme overrides
 ├─ app/              → Next.js app router pages
 └─ public/           → logos, assets, favicon, fonts
```

Each slide is self-contained but shares a consistent layout system.

---

## 🚀 Features

### ✨ Full-screen slide navigation

* Each section is designed as a visual “poster”
* Adaptive layout for all screen sizes

### 🎯 Custom animated components

* Code typing animation (`CodeTyper`)
* Highlighted text blocks
* Retro-style buttons with variants

### 📦 Clean, reusable UI components

* RetroCard for Skills & Experience
* Chip system (SimpleChip)
* Timeline-ready formation section

### 📱 Fully responsive

* Dynamic typography with `clamp()`
* Tested on desktop + mobile

---

## 🔗 Live Demo

👉 **[https://kay-kta.vercel.app/](https://kay-kta.vercel.app/)**

For the best experience, view it in full-screen.

---

## 🏗️ Running locally

```bash
git clone <your-repo-url>
cd your-portfolio
npm install
npm run dev
```

Open `http://localhost:3000`.

---

## 📝 License

This project is open for inspiration, but the content, design identity, and visual elements should not be reused without permission.

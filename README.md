<div align="center">

# 🤖 Cool AI  
### AI-Powered SaaS Platform for Modern Content Creation  

**Full-Stack Engineering • Scalable APIs • AI Integration • Production-Ready Design**

</div>

---

<div align="center">

A unified AI SaaS platform that enables content creation, image generation, and intelligent resume analysis — built with real-world software engineering principles.

</div>

---

## 📌 Introduction

**Cool AI** is a full-stack, AI-powered SaaS application that brings together multiple AI-driven tools into a single, cohesive system.  
The project is designed to reflect **how production SaaS platforms are engineered**, with emphasis on scalability, maintainability, and clean system design.

Rather than focusing on isolated features, Cool AI demonstrates **end-to-end system ownership** — from frontend user experience to backend APIs and persistent data storage.

---

## 🎯 Project Goals

- Build a real-world AI SaaS platform, not a demo application  
- Apply backend and database engineering best practices  
- Design scalable APIs that integrate external AI services  
- Deliver a smooth, responsive, and intuitive frontend experience  
- Follow clean architecture and separation of concerns  

---

## ✨ Core Features

### 🧠 AI Content Generation
- Article and long-form content generation  
- Blog title and idea generation  
- Resume review with structured and actionable AI feedback  

### 🖼️ AI Image Generation
- Prompt-based AI image creation using third-party APIs  
- Image asset storage with metadata management  
- Publish and unpublish control for generated content  

### 🌍 Community Gallery & Engagement
- Public gallery for AI-generated images  
- Like system with real-time UI feedback  
- Content sharing and visibility control  

### 🔐 User-Centric SaaS Experience
- Persistent user data and generated assets  
- Saved content across sessions  
- Seamless navigation between tools  

---

## 🏗️ System Architecture

The application follows a clear separation of concerns:

- **Frontend Layer**  
  - Component-based UI using React  
  - Client-side routing for smooth multi-tool navigation  
  - Instant UI feedback without full page reloads  

- **Backend Layer**  
  - RESTful APIs built with Node.js and Express.js  
  - Stateless service design suitable for cloud deployment  
  - Secure handling of AI service requests and responses  

- **Data Layer**  
  - PostgreSQL (Neon) for relational data storage  
  - Optimized schemas for users, generated content, and assets  
  - Query structures designed for scalability  

---

## 🔁 Data Flow Overview

1. User interacts with a frontend tool (content, image, or resume feature)  
2. Frontend sends request to backend API  
3. Backend processes request and integrates with AI services  
4. Generated results are stored in PostgreSQL  
5. Frontend receives response and updates UI in real time  

---

## 🧑‍💻 Tech Stack

<div align="center">

**Frontend**  
React · React Router · React Hot Toast  

**Backend**  
Node.js · Express.js  

**AI & External Services**  
OpenAI API · ClipDrop API  

**Database**  
PostgreSQL (Neon)  

</div>

---

## 🛠️ Local Development Setup

```bash
# Clone the repository
git clone https://github.com/arnab25120/AISaaS.git

# Install dependencies
npm install

# Start the development environment
npm run dev

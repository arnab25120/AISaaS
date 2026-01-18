<div align="center">

# 🤖 Cool AI  
### AI-Powered SaaS Platform for Content & Creativity  

**Full-Stack SaaS • Secure Auth • AI APIs • Scalable Backend**

</div>

---

<div align="center">

A modern AI-powered SaaS platform that enables users to generate content, create images, and analyze resumes — built with production-ready engineering practices.

</div>

---

## 📌 Introduction

**Cool AI** is a full-stack AI SaaS application designed to showcase **real-world software engineering**, not just AI prompts.  
It integrates multiple AI-powered tools into a single platform while emphasizing **clean architecture, scalability, security, and user experience**.

The project demonstrates end-to-end ownership — from frontend UI and authentication to backend APIs, database design, and third-party service integration.

---

## 🎯 Project Objectives

- Build a **production-style SaaS application**
- Integrate multiple AI services in a scalable backend
- Implement secure authentication and protected routes
- Design persistent storage for generated assets
- Deliver a smooth, responsive, and intuitive UI
- Follow clean separation of concerns across layers

---

## ✨ Core Features

### 🧠 AI Content Generation
- Long-form article generation  
- Blog title and idea generation  
- Markdown-rendered AI responses  

### 📄 AI Resume Review
- Upload resumes in PDF format  
- Extract text using server-side parsing  
- Generate structured AI feedback and insights  

### 🖼️ AI Image Generation
- Prompt-based AI image creation  
- Image upload and hosting via Cloudinary  
- Save and manage generated images  

### 🌍 Community Gallery
- Public gallery for published AI-generated images  
- Like system with real-time UI feedback  
- Publish / unpublish content control  

### 🔐 Authentication & User Management
- Secure authentication using Clerk  
- Protected routes and user-specific content  
- Persistent user sessions  

---

## 🏗️ System Architecture

### Frontend (Client)
- Built with **React** and **React Router**
- Component-driven UI architecture
- Real-time notifications using React Hot Toast
- Markdown rendering for AI responses
- Clean UX with modern iconography

### Backend (Server)
- RESTful APIs built using **Node.js & Express**
- Stateless service architecture
- Secure middleware-based request handling
- AI orchestration using OpenAI SDK
- File handling and uploads using Multer

### Data & Storage
- **PostgreSQL (Neon)** for persistent relational storage
- Optimized schema for users, content, and assets
- Cloudinary for scalable image storage
- Server-side PDF parsing for resume analysis

---

## 🔁 High-Level Data Flow

1. User authenticates via Clerk  
2. Frontend sends request to backend API  
3. Backend validates user and request  
4. AI service is invoked (OpenAI / Image API)  
5. Generated output is stored in PostgreSQL / Cloudinary  
6. Frontend updates UI with real-time feedback  

---

## 🧑‍💻 Tech Stack

<div align="center">

**Frontend**  
React · React Router · React Hot Toast · React Markdown · Lucide Icons  

**Backend**  
Node.js · Express.js · OpenAI SDK · Multer · PDF-Parse  

**Auth & Storage**  
Clerk · PostgreSQL (Neon) · Cloudinary  

</div>

---

## 🛠️ Local Development Setup

### Prerequisites
- Node.js (v18+ recommended)
- PostgreSQL database (Neon)
- Clerk, OpenAI & Cloudinary accounts

---

### Clone the Repository
```bash
git clone https://github.com/your-username/cool-ai.git
cd cool-ai

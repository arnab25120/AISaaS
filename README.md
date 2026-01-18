<div align="center">

# 🤖 Cool AI  
### AI-Powered SaaS Platform for Content, Images & Resume Intelligence  

**Full-Stack SaaS • Secure Auth • AI Orchestration • Scalable Backend Architecture**

</div>

---

<div align="center">

A production-style AI SaaS platform that combines content generation, image creation, and resume analysis — engineered with scalability, maintainability, and real-world system design in mind.

</div>

---

## 📌 Introduction

**Cool AI** is a full-stack AI-powered SaaS application built to demonstrate **real-world software engineering**, not just AI prompt usage.  
The platform integrates multiple AI-driven tools into a single system while maintaining **clean separation of concerns**, secure authentication, and persistent storage.

This project reflects how modern AI products are designed, engineered, and scaled in production environments.

---

## 🎯 Project Goals

- Design and implement a **production-grade SaaS platform**
- Integrate multiple AI services via a scalable backend
- Implement secure authentication and protected routes
- Build persistent storage for generated content and assets
- Deliver a responsive, intuitive, and maintainable frontend
- Follow clean architecture and modular system design

---

## ✨ Core Features Overview

### 🧠 AI Content Generation
- Long-form article generation
- Blog title and idea generation
- Markdown-based AI responses for rich formatting

### 📄 AI Resume Review
- PDF resume upload
- Server-side text extraction
- Structured AI feedback and suggestions

### 🖼️ AI Image Generation
- Prompt-based AI image creation
- Cloud-based image storage
- Publish / unpublish content workflow

### 🌍 Community Gallery
- Public gallery for AI-generated images
- Like system with instant UI feedback
- Controlled content visibility

### 🔐 Authentication & User Management
- Secure authentication and sessions
- User-specific data isolation
- Protected APIs and routes

---

## 🧱 Frontend Architecture (Client)

The frontend is built using **React** with a strong emphasis on **component reusability, clean state handling, and user experience**.

### 🔹 Core Technologies
- **React** – Component-based UI architecture
- **React Router** – Client-side routing and navigation
- **React Hot Toast** – Non-blocking real-time notifications
- **React Markdown** – Rendering AI-generated markdown responses
- **Lucide Icons** – Clean and modern icon system

---

### 🔹 Key Frontend Components

#### 🧭 Layout Components
- **Navbar** – Global navigation and user actions
- **Sidebar** – Tool-based navigation across AI features
- **ProtectedLayout** – Restricts access to authenticated users

#### 🧠 AI Tools Components
- **ContentGenerator** – Handles article and blog generation
- **ImageGenerator** – Prompt-based image creation UI
- **ResumeAnalyzer** – Resume upload and AI analysis interface

#### 🖼️ Gallery Components
- **GalleryGrid** – Displays community images
- **ImageCard** – Individual image display with like controls
- **PublishToggle** – Manages visibility of generated assets

#### 🔔 UX & Utility Components
- **Loader / Spinner** – Async request handling
- **ToastNotifications** – Success, error, and status feedback
- **MarkdownRenderer** – Rich text display of AI responses

---

### 🔹 Frontend State & Data Flow
- API communication via async requests
- Optimistic UI updates for likes and publishing
- Stateless UI with backend-driven data persistence
- Clear separation between UI logic and API logic

---

## 🧠 Backend Architecture (Server)

The backend is built using **Node.js and Express.js**, following **RESTful design principles** and **stateless service architecture**.

---

### 🔹 Core Backend Technologies
- **Node.js** – Runtime environment
- **Express.js** – REST API framework
- **OpenAI SDK** – AI text and analysis services
- **Multer** – File upload handling
- **PDF-Parse** – Server-side PDF text extraction
- **Cloudinary SDK** – Image storage and delivery

---

### 🔹 API Modules & Responsibilities

#### 🔐 Authentication Middleware
- Verifies authenticated users via Clerk
- Protects private routes and APIs
- Attaches user context to requests

#### 🧠 AI Services Layer
- **Content Service** – Article and blog generation logic
- **Resume Service** – Resume parsing and AI evaluation
- **Image Service** – AI image generation and storage

#### 📦 Controllers
- Handle request validation
- Orchestrate AI service calls
- Manage response formatting

#### 🗄️ Database Layer
- PostgreSQL (Neon) used for relational storage
- Tables for users, generated content, images, and metadata
- Optimized queries for read/write scalability

---

## 🗃️ Database Design Overview

- **Users** – Authenticated user records
- **GeneratedContent** – Articles, titles, resume feedback
- **Images** – Image metadata, visibility state, likes
- **Engagements** – Like tracking and analytics-ready structure

Designed with **future scalability** and **SaaS growth patterns** in mind.

---

## 🔁 High-Level Request Flow

1. User authenticates via Clerk
2. Frontend sends request to protected API
3. Backend validates authentication
4. AI service is invoked (OpenAI / Image API)
5. Output is stored in PostgreSQL / Cloudinary
6. Frontend updates UI with real-time feedback

---

## 🧑‍💻 Tech Stack Summary

<div align="center">

**Frontend**  
React · React Router · React Hot Toast · React Markdown · Lucide  

**Backend**  
Node.js · Express.js · OpenAI SDK · Multer · PDF-Parse  

**Auth & Storage**  
Clerk · PostgreSQL (Neon) · Cloudinary  

</div>

---

## 🛠️ Local Development Setup

### Prerequisites
- Node.js (v18+)
- PostgreSQL (Neon)
- OpenAI, Clerk & Cloudinary accounts

---

### Clone Repository
```bash
git clone https://github.com/arnab25120/AISaaS.git
cd cool-ai

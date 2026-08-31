# OOU Chronicles 📰

OOU Chronicles is a modern university news and information platform built for the **Olabisi Onabanjo University (OOU)** community.

The platform provides students and visitors with a central place to discover university-related news, announcements, stories, categories, and other relevant information. It also includes an administrative dashboard for managing published content.

---

## ✨ Features

### 🌐 Public Website

- Modern responsive homepage
- Latest university news
- Featured news
- News categories
- Individual news/article pages
- Search functionality
- About page
- Contact page
- FAQ section
- Responsive navigation
- Mobile-friendly design

### 🛠️ Admin Dashboard

- Secure admin authentication
- Dashboard overview
- News management
- Create news articles
- Edit news articles
- Delete news articles
- Publish and manage content
- Todo/task management
- AI chat functionality
- Protected dashboard routes

### 🤖 AI Features

The project includes an AI-powered chat feature that allows administrators to interact with an AI assistant directly from the dashboard.

---

## 🧰 Tech Stack

### Frontend

- Vue 3
- Vite
- JavaScript
- HTML5
- CSS3

### State Management

- Pinia

### Routing

- Vue Router

### Backend / Services

- Supabase
- Supabase Authentication
- Supabase Database
- Supabase Edge Functions

### AI

- AI-powered chat through a backend/Edge Function

---

## 📁 Project Structure

```text
oou-chronicles/
│
├── public/
│   ├── images/
│   └── ...
│
├── src/
│   │
│   ├── assets/
│   │
│   ├── components/
│   │   ├── Navbar/
│   │   ├── Footer/
│   │   └── ...
│   │
│   ├── layouts/
│   │   ├── PublicLayout.vue
│   │   └── AppLayout.vue
│   │
│   ├── pages/
│   │   ├── public/
│   │   │   ├── Home.vue
│   │   │   ├── News.vue
│   │   │   ├── SingleNews.vue
│   │   │   ├── Categories.vue
│   │   │   ├── About.vue
│   │   │   ├── Contact.vue
│   │   │   ├── FAQ.vue
│   │   │   └── Search.vue
│   │   │
│   │   └── admin/
│   │       ├── Dashboard.vue
│   │       ├── Todos.vue
│   │       └── AiChat.vue
│   │
│   ├── router/
│   │   └── index.js
│   │
│   ├── stores/
│   │   └── ...
│   │
│   ├── lib/
│   │   └── supabase.js
│   │
│   ├── App.vue
│   └── main.js
│
├── supabase/
│   └── functions/
│
├── .env
├── package.json
├── vite.config.js
└── README.md

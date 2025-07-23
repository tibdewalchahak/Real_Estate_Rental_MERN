# 🏠 Real Estate Rental MERN App

A full-stack **MERN** application for managing rental properties, where users can register, log in, and view available rental listings. Built using **MongoDB**, **Express**, **React**, and **Node.js**, this app demonstrates a typical user-authenticated CRUD application.

---

## ✨ Features

- 🔐 User Registration and Login (JWT-based)
- 🏡 Browse and display rental property listings
- ➕ Add, edit, and delete property details (for owners/admins)
- 🧭 Navigation using React Router
- 💾 MongoDB-based backend storage
- 🧑‍💻 Token-based authentication with role-based logic
- 🔄 Persistent auth using localStorage
- 📦 Organized code structure for frontend and backend separation

---

## 🛠️ Tech Stack

| Layer     | Technology        |
|-----------|-------------------|
| Frontend  | React.js, Axios   |
| Backend   | Node.js, Express  |
| Database  | MongoDB, Mongoose |
| Auth      | JWT               |
| Styling   | CSS, Basic UI     |

---

## 📁 Folder Structure

```bash
├── api                     # Backend (Node.js + Express + Prisma)
│   ├── controllers         # Logic for handling API requests
│   │   ├── auth.controller.js
│   │   ├── chat.controller.js
│   │   ├── message.controller.js
│   │   ├── post.controller.js
│   │   ├── test.controller.js
│   │   └── user.controller.js
│   ├── lib                 # Custom utilities/libraries
│   │   └── prisma.js       # Prisma client setup
│   ├── middleware
│   │   └── verifyToken.js  # JWT middleware
│   ├── prisma
│   │   └── schema.prisma   # Prisma DB schema
│   ├── routes              # Route definitions
│   │   ├── auth.route.js
│   │   ├── chat.route.js
│   │   ├── message.route.js
│   │   ├── post.route.js
│   │   ├── test.route.js
│   │   └── user.route.js
│   ├── app.js              # Main server file
│   ├── package.json
│   └── .gitignore

├── client                  # Frontend (React)
│   ├── public              # Static files
│   ├── src
│   │   ├── components      # Reusable UI components
│   │   │   ├── About
│   │   │   ├── card
│   │   │   ├── chat
│   │   │   ├── Contact
│   │   │   ├── filter
│   │   │   ├── hero
│   │   │   ├── list
│   │   │   ├── map
│   │   │   ├── navbar
│   │   │   ├── pin
│   │   │   ├── searchBar
│   │   │   ├── slider
│   │   │   └── uploadWidget
│   │   ├── context         # React context API logic
│   │   │   ├── AuthContext.jsx
│   │   │   ├── SocketContext.jsx
│   │   ├── lib             # Utility functions
│   │   │   ├── apiRequest.js
│   │   │   ├── dummydata.js
│   │   │   ├── loaders.js
│   │   │   ├── notificationStore.js
│   │   ├── routes         # Frontend routing
│   │   │   ├── homePage
│   │   │   ├── layout
│   │   │   ├── listPage
│   │   │   ├── login
│   │   │   ├── newPostPage
│   │   │   ├── profilePage
│   │   │   ├── profileUpdate
│   │   │   ├── register
│   │   │   ├── singlePage
│   │   ├── App.js
│   │   ├── App.css
│   │   ├── index.js
│   │   ├── index.css
│   │   ├── reportWebVitals.js
│   │   └── responsive.scss
│   ├── package.json
│   └── .gitignore

├── socket                  # Socket.IO server
│   ├── app.js              # WebSocket server logic
│   ├── package.json
│   └── .gitignore
```

## 🚀 Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/tibdewalchahak/Real_Estate_Rental_MERN.git
cd Real_Estate_Rental_MERN
```

### 2. Install Dependencies
# Frontend
```bash
cd "frontend src"
npm install
```
# Backend
```bash
cd ..
npm install
```

### 3. Setup Environment Variables
Create a .env file in the root directory and configure the following:
```bash
MONGO_URI=your-mongodb-uri
JWT_SECRET=your-secret-key
PORT=5000
```

### 4. Run the App
Open two terminals:
```bash
# Terminal 1: Start backend
npm start

# Terminal 2: Start frontend
cd "frontend src"
npm start
```

The app should now be accessible on http://localhost:3000.



# Stunning Full-Stack Developer Portfolio

This is a modern, dynamic, and responsive full-stack personal portfolio designed with Awwwards-level visual aesthetics. It features cinematic animations, a custom dark/light mode toggle, and a beautiful UI built with React.js + Vanilla CSS.

## Project Structure
- `backend/` - Node.js & Express REST API Server with MongoDB integration.
- `frontend/` - React Application structured with Vite, Framer Motion, and CSS styling.

## Features
- **Cinematic Animations**: Built using Framer Motion for smooth scroll effects and micro-interactions.
- **Glassmorphism UI**: Modern aesthetic utilizing backdrop filters and translucent cards.
- **Backend API**: Contact forms and projects data sync with MongoDB.
- **Dark/Light Mode**: Seamless CSS variables switching context.
- **Responsive**: Fully optimized for mobile devices.

---

## 🛠 Prerequisites
- **Node.js**: v18+ recommended.
- **MongoDB**: A local instance or a MongoDB Atlas URI.

---

## 🚀 How to Run Locally

### 1. Setup Backend
1. Open terminal and `cd backend`
2. Install dependencies: `npm install`
3. Make sure MongoDB is running locally on port 27017, or configure `.env` (MONGO_URI) with your own database connection string.
4. Start the backend: `npm run dev`
   - _Optional: Run a POST to `http://localhost:5000/api/seed` using Postman/ThunderClient to seed sample projects/skills._
5. Server will run on `http://localhost:5000`

### 2. Setup Frontend
1. Open a new terminal and `cd frontend`
2. Install dependencies: `npm install`
3. Start the Vite server: `npm run dev`
4. The site will be running on `http://localhost:5173`

---

## 🌐 How to Deploy

### Deploying Frontend to GitHub Pages / Vercel
1. Upload your code to a GitHub repository.
2. Sign up on [Vercel](https://vercel.com/) and click "Add New Project".
3. Import your GitHub repository.
4. Set the Root Directory to `frontend`.
5. Vercel will automatically detect Vite. Click **Deploy**.

### Deploying Backend to Render / Heroku
1. Sign up on [Render](https://render.com/).
2. Create a new "Web Service" and connect your GitHub repository.
3. Set the Root Directory to `backend`.
4. Build Command: `npm install`
5. Start Command: `npm start`
6. Add your Environment Variables: `MONGO_URI` and `PORT`.
7. Once your backend URL is live, update the `useEffect` fetch requests in the frontend React components to point to your deployed URL instead of `http://localhost:5000`.

Enjoy your new stunning Developer Portfolio!

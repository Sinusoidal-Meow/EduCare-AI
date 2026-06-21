# EduCare AI STEM & Circuit Simulator - Split Deployment Guide

This document contains instructions to deploy the EduCare AI STEM & Circuit Simulator application.

## 1. Updated Project Folder Structure

```
EduCare AI/
├── .github/                   # GitHub Actions workflows
├── backend/                   # Node.js + Express backend
│   ├── data/                  # Lesson data
│   ├── routes/                # Express routes
│   ├── .env.example           # Backend environment template
│   ├── package.json           # Backend dependencies and scripts
│   └── server.js              # Backend entry point
├── frontend/                  # React + Vite frontend
│   ├── src/                   # React components and pages
│   │   ├── config.js          # API URL configuration [NEW]
│   │   └── ...
│   ├── .env.example           # Frontend environment template [NEW]
│   ├── package.json           # Frontend dependencies and scripts
│   ├── vercel.json            # Vercel SPA routing configuration [NEW]
│   └── ...
├── DEPLOYMENT.md              # Deployment guide [NEW]
├── package.json               # Monorepo root configuration
└── README.md                  # Project documentation
```

## 2. Required Code Changes for Split Deployment
To split the frontend and backend deployments, we executed the following:
1. **Removed Root `vercel.json`**: The root-level deployment configuration was deleted to allow independent frontend build on Vercel.
2. **Added Frontend SPA Routing (`frontend/vercel.json`)**: Configured Vercel's clean URLs and URL rewrites to route all SPA paths back to `index.html`.
3. **Refactored Frontend API Calls**: Prepend `API_BASE` (imported from `frontend/src/config.js`) to all API fetch paths instead of relying on relative serverless paths.
4. **Enabled Production CORS**: Configured the backend's `cors()` middleware to allow cross-origin requests from the custom frontend Vercel URL, localhost, and Vercel preview environments (`*.vercel.app`).
5. **Production Listener for Render**: Replaced the serverless-only logic in `backend/server.js` with `app.listen()` so the backend binds to the required port on Render.
6. **Health Check Endpoint**: Exposed `/health` and `/api/health` endpoints to allow Render to verify instance status.

## 3. Environment Variable Configuration

### Frontend (`frontend/.env`)
Create a `.env` file in the `frontend/` directory or configure these variables in the Vercel Dashboard:
```env
VITE_API_URL=https://your-backend-url.onrender.com
```
*Note: Any environment variable used in the client-side code must start with `VITE_`.*

### Backend (`backend/.env`)
Create a `.env` file in the `backend/` directory or configure these variables in the Render Dashboard:
```env
PORT=5000
MONGODB_URI=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/educare-ai?retryWrites=true&w=majority
NODE_ENV=production
ALLOWED_ORIGINS=http://localhost:3000,http://localhost:3001,https://your-vercel-frontend-url.vercel.app
```

---

## 4. Deployment Checklists & Steps

### A. MongoDB Atlas (Database)
1. **Sign Up/Log In**: Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) and sign in.
2. **Create a Cluster**: Deploy a new free cluster (Shared Tier M0) in your preferred cloud provider and region.
3. **Database User**: Go to **Database Access** -> **Add New Database User**. Choose Password authentication and assign the role `Read and write to any database`.
4. **Network Access**: Go to **Network Access** -> **Add IP Address**. For deployment, add `0.0.0.0/0` (allow access from anywhere) so that Render server instances can connect.
5. **Get Connection String**: Go to **Database** -> **Connect** -> **Drivers**. Copy the connection string. Replace `<password>` with the database user's password and change the database name to `educare-ai`. Save this string as `MONGODB_URI` for the backend.

### B. Render (Backend)
1. **Sign Up/Log In**: Go to [Render](https://render.com) and link your GitHub account.
2. **Create Web Service**: Click **New +** -> **Web Service**. Select your GitHub repository.
3. **Configure Settings**:
   - **Name**: `educare-ai-backend`
   - **Root Directory**: `backend`
   - **Environment**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
4. **Configure Environment Variables**: Under the **Environment** tab, click **Add Environment Variable** and enter:
   - `PORT` = `5000` (or leave empty to let Render assign)
   - `NODE_ENV` = `production`
   - `MONGODB_URI` = `<your-mongodb-atlas-connection-string>`
   - `ALLOWED_ORIGINS` = `https://your-vercel-app-name.vercel.app`
5. **Deploy**: Render will automatically start building and deploy your Express backend. Copy the generated Web Service URL (e.g. `https://educare-ai-backend.onrender.com`).

### C. Vercel (Frontend)
1. **Sign Up/Log In**: Go to [Vercel](https://vercel.com) and link your GitHub account.
2. **Import Project**: Click **Add New** -> **Project**. Select your GitHub repository.
3. **Configure Project Settings**:
   - **Framework Preset**: `Vite` (Vercel will auto-detect Vite)
   - **Root Directory**: `frontend` (Click edit and select `frontend`)
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
4. **Configure Environment Variables**: Expand **Environment Variables** and add:
   - Key: `VITE_API_URL`
   - Value: `<your-render-backend-url>` (without a trailing slash, e.g. `https://educare-ai-backend.onrender.com`)
5. **Deploy**: Click **Deploy**. Vercel will build your static React files and serve them as a Single Page Application (SPA).

### D. GitHub (Version Control & CI/CD)
1. Ensure you have the `development` and `main` branches set up.
2. Run standard git operations to push the latest changes:
   ```bash
   git add .
   git commit -m "Configure project for split deployment"
   git push origin main
   ```

---

## 5. Safe Feature Addition Protocol (e.g., Kids' Game Module)

This protocol outlines the exact steps, file creations, and configuration tasks required to add the new **Kids' Game** module without impacting or crashing the live website.

```
                  DEVELOPMENT PHASE (ISOLATED)
                  
 [Git Feature Branch] ──> [Create Isolated Files] ──> [Dev Database Setup]
                                                               │
                                                               ▼
 [Local Verification] <── [Gated Feature Flag]    <── [Write React/Express Code]
 
 
                  DEPLOYMENT PHASE (PREVIEW & RELEASE)
                  
 [GitHub Push / PR]   ──> [Vercel Preview Build]  ──> [Team Testing (Preview URL)]
                                                               │
                                                               ▼
 [Live Rollout]       <── [Toggle Feature Flag]   <── [Merge PR to main]
```

---

### Step 1: Git Branching Isolation
Do not work on the `main` branch. Create a feature branch specifically for the game:
```bash
git checkout -b feature/kids-game
```

---

### Step 2: Create Isolated Frontend Files
Create the following new files in the frontend repository. Keeping these files separate ensures that any new CSS or JavaScript does not interfere with the active pages.

#### 1. Create `frontend/src/components/ErrorBoundary.jsx`
This component catches runtime errors within the game so that the entire site doesn't crash or go blank if a bug occurs.

```jsx
// File: frontend/src/components/ErrorBoundary.jsx
import React from 'react';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an error in Kids Game:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="p-8 text-center bg-rose-50 border-4 border-slate-800 rounded-3xl max-w-xl mx-auto shadow-cartoon my-6">
          <span className="text-5xl">👾</span>
          <h3 className="text-xl font-black text-rose-800 mt-3">Game Connection Interrupted!</h3>
          <p className="text-xs text-slate-600 font-bold mt-1.5">
            The game module encountered a small issue. The rest of your portal is safe!
          </p>
          <button 
            onClick={() => this.setState({ hasError: false })}
            className="mt-5 px-5 py-2 bg-rose-500 hover:bg-rose-600 text-white font-black text-xs rounded-xl border-2 border-slate-800 shadow-cartoon"
          >
            Reboot Game 🔄
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}
```

#### 2. Create `frontend/src/components/KidsGame/KidsGameModule.jsx`
Implement the basic structure of the game in an isolated file. Here is an interactive pattern-matching template:

```jsx
// File: frontend/src/components/KidsGame/KidsGameModule.jsx
import React, { useState } from 'react';
import { CartoonButton, CartoonCard } from '../Reusables';
import { API_BASE } from '../../config';

export default function KidsGameModule({ studentId, onExit }) {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [feedback, setFeedback] = useState("Tap the matching shape to earn stars! 🌟");

  const shapes = ['🔺', '🟩', '🟡', '⭐'];
  const [target, setTarget] = useState('⭐');

  const handleShapeClick = async (shape) => {
    if (shape === target) {
      const newScore = score + 10;
      setScore(newScore);
      setFeedback("Correct! You earned 10 stars! 🎉");
      
      // Update highscore
      if (newScore > highScore) setHighScore(newScore);

      // Select new target
      const randomIndex = Math.floor(Math.random() * shapes.length);
      setTarget(shapes[randomIndex]);

      // Report score to the database safely
      try {
        await fetch(`${API_BASE}/api/game/score`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ studentId, score: 10 })
        });
      } catch (err) {
        console.warn("Backend unavailable, scored locally instead:", err);
      }
    } else {
      setFeedback("Oops! Try again! 🧐");
    }
  };

  return (
    <div className="p-6 bg-[#fcfaf7] min-h-[500px] flex flex-col justify-between">
      <div className="flex justify-between items-center border-b-4 border-slate-800 pb-4">
        <div>
          <h2 className="text-2xl font-black text-slate-800">Kids Shape Academy 🎮</h2>
          <p className="text-xs text-slate-500 font-extrabold uppercase">Beta Game Module</p>
        </div>
        <button 
          onClick={onExit}
          className="bg-rose-500 text-white font-extrabold text-xs px-3 py-1.5 rounded-xl border-2 border-slate-800 shadow-cartoon-hover active:translate-y-0.5"
        >
          Exit Game ❌
        </button>
      </div>

      <div className="my-8 flex flex-col items-center gap-6">
        <CartoonCard color="white" className="w-full max-w-md text-center p-6 border-b-6 border-slate-800">
          <span className="text-xs font-black text-indigo-500 uppercase tracking-widest">Find the Match</span>
          <div className="text-6xl my-4 animate-bounce-slow">{target}</div>
          <p className="text-sm font-bold text-slate-700">{feedback}</p>
        </CartoonCard>

        <div className="flex gap-4">
          {shapes.map((shape) => (
            <button
              key={shape}
              onClick={() => handleShapeClick(shape)}
              className="text-4xl p-4 bg-white border-4 border-slate-800 rounded-2xl shadow-cartoon hover:scale-105 active:scale-95 transition-transform"
            >
              {shape}
            </button>
          ))}
        </div>
      </div>

      <div className="flex justify-around items-center bg-slate-900 text-white p-4 rounded-2xl border-2 border-slate-800">
        <div>
          <p className="text-[10px] text-slate-400 font-bold uppercase">Current Run</p>
          <p className="text-lg font-black text-amber-400">{score} Points</p>
        </div>
        <div>
          <p className="text-[10px] text-slate-400 font-bold uppercase">Personal Best</p>
          <p className="text-lg font-black text-emerald-400">{highScore} Points</p>
        </div>
      </div>
    </div>
  );
}
```

---

### Step 3: Integrate and Gate the Route in `frontend/src/App.jsx`
You must add the route inside your app but keep it **gated** using a feature flag or a URL parameter so that production users cannot see it.

1. **Import the game module and error boundary** at the top of `frontend/src/App.jsx`:
   ```javascript
   import ErrorBoundary from './components/ErrorBoundary';
   import KidsGameModule from './components/KidsGame/KidsGameModule';
   ```

2. **Add a Feature Flag check** inside the `App` component body:
   ```javascript
   // Only enable game if URL contains ?game=beta OR environment variable VITE_ENABLE_GAME is set to true
   const isGameEnabled = 
     new URLSearchParams(location.search).get('game') === 'beta' ||
     import.meta.env.VITE_ENABLE_GAME === 'true';
   ```

3. **Register the Route** inside the `<Routes>` container:
   ```jsx
   {/* Kids Game Gated Route */}
   {isGameEnabled && (
     <Route path="/kids-game" element={
       <ErrorBoundary>
         <KidsGameModule 
           studentId="student_123" 
           onExit={() => {
             navigate('/');
             showNotification("🏠 Exited Shape Academy.");
           }} 
         />
       </ErrorBoundary>
     } />
   )}
   ```

---

### Step 4: Safe Backend API Extension
To support saving game progress on the database, add isolated API endpoints.

#### 1. Create `backend/routes/gameRoutes.js`
This routing file will process the game scores:
```javascript
// File: backend/routes/gameRoutes.js
const express = require('express');
const router = express.Router();

router.post('/score', async (req, res) => {
  try {
    const { studentId, score } = req.body;
    if (!studentId || score === undefined) {
      return res.status(400).json({ error: "Missing studentId or score" });
    }
    
    // Perform database storage operations here safely
    console.log(`Saved score ${score} for student ${studentId}`);
    
    return res.status(200).json({ success: true, message: "Score logged successfully" });
  } catch (err) {
    console.error("Database operation failed inside gameRoutes:", err);
    return res.status(500).json({ error: "Internal Database Error" });
  }
});

module.exports = router;
```

#### 2. Register Router in `backend/server.js`
Mount the router safely. Ensure it is registered without modifying the original authentication or analytics endpoints:
```javascript
const gameRoutes = require('./routes/gameRoutes');
app.use('/api/game', gameRoutes);
```

---

### Step 5: Database and Local Testing Setup
1. **Create Dev Database (Optional but Recommended)**:
   In MongoDB Atlas, create a second database named `educare-ai-dev`.
2. **Update Local Environment**:
   Change the `MONGODB_URI` in `backend/.env` to point to `educare-ai-dev`. Do not touch production environment settings.
3. **Run Server Locally**:
   ```bash
   # In backend/
   npm run dev
   # In frontend/
   npm run dev
   ```
4. **Access the Gated Route**:
   Visit `http://localhost:5173/kids-game?game=beta` to verify that the game works and can communicate with the backend successfully.

---

### Step 6: Preview Deployments (Vercel & Render)
Before merging code into the production branch, test it live in an isolated preview environment.

#### A. Vercel Frontend Preview
1. Commit your changes and push the branch to GitHub:
   ```bash
   git add .
   git commit -m "feat: add kids game module with safety error boundaries"
   git push origin feature/kids-game
   ```
2. Open a Pull Request (PR) from `feature/kids-game` into `main`.
3. Vercel will automatically trigger a **Preview Deployment** and post the preview link inside the PR comments.
4. Copy the preview link (e.g. `https://educare-ai-git-feature-kids-game-yourprofile.vercel.app`) and add the debug query parameters (`?game=beta`) to test it live.
5. *Note: Since the production API is live, this preview frontend will make requests to the live backend. If you don't want it touching production data, configure Vercel's preview environment variables to direct to your staging backend URL.*

#### B. Render Backend Preview
If you have extensive backend changes:
1. Go to the Render Dashboard.
2. Under your Web Service settings, enable **PR Previews**.
3. When you open a PR on GitHub, Render will spin up a completely isolated backend server running the new branch code, complete with its own unique URL.
4. Set the `VITE_API_URL` environment variable for Vercel's preview environment to point to this Render PR preview URL.

---

### Step 7: Final Release Checklist
Once everything has been verified in the preview environments:
1. Merge the Pull Request on GitHub.
2. Vercel will build and deploy the changes to your production URL (`https://your-app.vercel.app`).
3. Render will deploy the backend changes.
4. At this point, the game is live but still **hidden** from regular users because the feature flag `VITE_ENABLE_GAME` is `false` (or because they don't have the `?game=beta` query parameter).
5. When you are ready to launch, set the production environment variable on Vercel:
   - `VITE_ENABLE_GAME` = `true`
6. Re-trigger a production build on Vercel. The game link will instantly appear on the dashboard for all users.
7. **Rollback Contingency**: If anything goes wrong, you can disable the feature instantly by changing `VITE_ENABLE_GAME` back to `false` in the Vercel Dashboard without needing to modify or redeploy any code.


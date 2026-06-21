import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

// Import routers & engines
import stemRouter from './routes/stem.js';
import activityRouter from './modules/physical-activity/routes/activity.js';
import mathRouter from './modules/math/routes/math.js';
import logicRouter from './modules/logic/routes/logic.js';
import { processSparkyQuery } from './modules/sparkyEngine.js';
import gameRoutes from './routes/gameRoutes.js';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const app = express();
const PORT = process.env.PORT || 5000;

// Configure CORS for production environment
const allowedOrigins = process.env.ALLOWED_ORIGINS 
  ? process.env.ALLOWED_ORIGINS.split(',') 
  : ['http://localhost:3000', 'http://localhost:3001'];

app.use(cors({
  origin: (origin, callback) => {
    // Allow requests with no origin (like mobile apps, curl, or server-to-server)
    if (!origin) return callback(null, true);
    
    // Check if origin matches allowed list, ends with .vercel.app (for previews), or if not in production
    if (
      process.env.NODE_ENV !== 'production' || 
      allowedOrigins.includes(origin) || 
      allowedOrigins.includes('*') ||
      origin.endsWith('.vercel.app')
    ) {
      return callback(null, true);
    }
    return callback(new Error('Not allowed by CORS'), false);
  },
  credentials: true
}));

app.use(express.json());

// Global connection state flag for controllers
global.mongoConnected = false;

// Database Connection Handling
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/educare-ai';

console.log('Connecting to MongoDB...');
mongoose.connect(MONGODB_URI, {
  serverSelectionTimeoutMS: 1500 // 1.5 seconds timeout
})
.then(() => {
  console.log('✅ Connected to MongoDB successfully!');
  global.mongoConnected = true;
})
.catch((err) => {
  console.log('⚠️ MongoDB connection failed. Activating local JSON fallback.');
  global.mongoConnected = false;
});

// Mount modular API routers
app.use('/stem', stemRouter);
app.use('/api', stemRouter); // Backwards compatibility mount
app.use('/activity', activityRouter);
app.use('/math', mathRouter);
app.use('/api/math', mathRouter);
app.use('/logic', logicRouter);
app.use('/api/logic', logicRouter);
app.use('/api/game', gameRoutes);

// POST AI TUTOR (Intelligent STEM Simulation Assistant Engine)
app.post('/api/ai/tutor', (req, res) => {
  const { message, grade, context, circuit, performanceScore, errorHistory } = req.body;
  
  const result = processSparkyQuery({ 
    message: message || '', 
    grade, 
    context, 
    circuit, 
    performanceScore, 
    errorHistory 
  });
  
  res.json(result);
});

// Health Check Endpoint for Production Verification
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'ok', environment: process.env.NODE_ENV || 'development' });
});

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok', database: global.mongoConnected ? 'connected' : 'fallback' });
});

// Serve Frontend Static files if built
const frontendBuildPath = path.join(__dirname, '../frontend/dist');
if (fs.existsSync(frontendBuildPath)) {
  app.use(express.static(frontendBuildPath));
  app.get('*', (req, res) => {
    res.sendFile(path.join(frontendBuildPath, 'index.html'));
  });
}

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Modular Server running on port ${PORT}`);
});

export default app;

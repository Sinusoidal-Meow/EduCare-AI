// File: backend/routes/gameRoutes.js
import express from 'express';
import { fileURLToPath } from 'url';
import path from 'path';
import fs from 'fs';
import { ProgressModel } from '../models/Progress.js';

const router = express.Router();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DB_DIR = path.join(__dirname, '../data');
const DB_FILE = path.join(DB_DIR, 'db.json');

// local helper to read/write fallback
const readLocalDB = () => {
  try {
    const data = fs.readFileSync(DB_FILE, 'utf8');
    return JSON.parse(data);
  } catch (err) {
    return {
      studentId: 'default_student',
      grade: 'KG',
      completedLessons: [],
      completedCircuits: [],
      stars: 15,
      level: 1,
      badges: [],
      readinessScore: 0,
      kidsGameHighScore: 0
    };
  }
};

const writeLocalDB = (data) => {
  try {
    if (!fs.existsSync(DB_DIR)) {
      fs.mkdirSync(DB_DIR, { recursive: true });
    }
    fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2));
    return true;
  } catch (err) {
    console.error("Failed to write to local DB file in gameRoutes:", err);
    return false;
  }
};

// GET /api/game/score/:studentId
router.get('/score/:studentId', async (req, res) => {
  try {
    const { studentId } = req.params;
    const useMongoDB = global.mongoConnected === true;

    if (useMongoDB) {
      const progress = await ProgressModel.findOne({ studentId });
      if (progress) {
        return res.status(200).json({ highScore: progress.kidsGameHighScore || 0 });
      } else {
        return res.status(200).json({ highScore: 0 });
      }
    } else {
      const local = readLocalDB();
      return res.status(200).json({ highScore: local.kidsGameHighScore || 0 });
    }
  } catch (err) {
    console.error("Failed to retrieve high score:", err);
    return res.status(500).json({ error: "Internal Server Error" });
  }
});

// POST /api/game/score
router.post('/score', async (req, res) => {
  try {
    const { studentId, score } = req.body;
    if (!studentId || score === undefined) {
      return res.status(400).json({ error: "Missing studentId or score" });
    }

    const useMongoDB = global.mongoConnected === true;
    let currentHighScore = 0;
    let updated = false;

    if (useMongoDB) {
      let progress = await ProgressModel.findOne({ studentId });
      if (!progress) {
        progress = await ProgressModel.create({
          studentId,
          grade: 'KG',
          completedLessons: [],
          completedCircuits: [],
          stars: 15,
          level: 1,
          badges: [],
          readinessScore: 0,
          kidsGameHighScore: score
        });
        currentHighScore = score;
        updated = true;
      } else {
        currentHighScore = progress.kidsGameHighScore || 0;
        if (score > currentHighScore) {
          progress.kidsGameHighScore = score;
          await progress.save();
          currentHighScore = score;
          updated = true;
        }
      }
    } else {
      const local = readLocalDB();
      currentHighScore = local.kidsGameHighScore || 0;
      if (score > currentHighScore) {
        local.kidsGameHighScore = score;
        writeLocalDB(local);
        currentHighScore = score;
        updated = true;
      }
    }

    console.log(`Score update request for ${studentId}: score=${score}, highScore=${currentHighScore}, updated=${updated}`);
    return res.status(200).json({ 
      success: true, 
      highScore: currentHighScore, 
      updated,
      message: updated ? "New high score logged successfully!" : "Score logged, but did not beat high score."
    });
  } catch (err) {
    console.error("Database operation failed inside gameRoutes:", err);
    return res.status(500).json({ error: "Internal Database Error" });
  }
});

export default router;
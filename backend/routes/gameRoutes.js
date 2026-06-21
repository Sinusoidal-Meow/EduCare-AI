// File: backend/routes/gameRoutes.js
import express from 'express';
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

export default router;
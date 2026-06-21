import mongoose from 'mongoose';

const ProgressSchema = new mongoose.Schema({
  studentId: { type: String, default: 'default_student' },
  grade: { type: String, default: 'KG' },
  completedLessons: [String],
  completedCircuits: [String],
  stars: { type: Number, default: 15 },
  level: { type: Number, default: 1 },
  badges: [String],
  readinessScore: { type: Number, default: 0 },
  kidsGameHighScore: { type: Number, default: 0 }
}, { timestamps: true });

export const ProgressModel = mongoose.model('Progress', ProgressSchema);
export default ProgressModel;

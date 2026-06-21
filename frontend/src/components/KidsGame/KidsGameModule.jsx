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
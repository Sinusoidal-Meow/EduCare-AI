// File: frontend/src/components/KidsGame/KidsGameModule.jsx
import React, { useState, useEffect } from 'react';
import { CartoonButton, CartoonCard } from '../Reusables';
import { API_BASE } from '../../config';

export default function KidsGameModule({ studentId, onExit }) {
  const [gameState, setGameState] = useState('idle'); // 'idle' | 'playing' | 'ended'
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(20);
  const [feedback, setFeedback] = useState("Tap the matching shape to earn stars! 🌟");

  const shapes = ['🔺', '🟩', '🟡', '⭐'];
  const [target, setTarget] = useState('⭐');

  // Load high score on mount
  useEffect(() => {
    const fetchHighScore = async () => {
      try {
        const res = await fetch(`${API_BASE}/api/game/score/${studentId}`);
        if (res.ok) {
          const data = await res.json();
          setHighScore(data.highScore || 0);
        }
      } catch (err) {
        console.warn("Failed to fetch high score from backend:", err);
      }
    };
    fetchHighScore();
  }, [studentId]);

  // Timer effect
  useEffect(() => {
    if (gameState !== 'playing') return;

    if (timeLeft <= 0) {
      endGame();
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [gameState, timeLeft]);

  const startGame = () => {
    setScore(0);
    setTimeLeft(20);
    setFeedback("Tap the matching shape to earn stars! 🌟");
    
    // Choose initial target
    const randomIndex = Math.floor(Math.random() * shapes.length);
    setTarget(shapes[randomIndex]);
    
    setGameState('playing');
  };

  const endGame = async () => {
    setGameState('ended');
    const finalScore = score;
    
    // Optimistically update high score locally
    if (finalScore > highScore) {
      setHighScore(finalScore);
    }

    // Save final score to backend
    try {
      const res = await fetch(`${API_BASE}/api/game/score`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ studentId, score: finalScore })
      });
      if (res.ok) {
        const data = await res.json();
        if (data.highScore !== undefined) {
          setHighScore(data.highScore);
        }
      }
    } catch (err) {
      console.warn("Backend unavailable to save score:", err);
    }
  };

  const handleShapeClick = (shape) => {
    if (gameState !== 'playing') return;

    if (shape === target) {
      setScore((prev) => prev + 10);
      setFeedback("Correct! You earned 10 stars! 🎉");

      // Select new target
      const randomIndex = Math.floor(Math.random() * shapes.length);
      setTarget(shapes[randomIndex]);
    } else {
      setFeedback("Oops! Try again! 🧐");
    }
  };

  return (
    <div className="p-6 bg-[#fcfaf7] min-h-[500px] flex flex-col justify-between select-none">
      {/* Header bar */}
      <div className="flex justify-between items-center border-b-4 border-slate-800 pb-4">
        <div>
          <h2 className="text-2xl font-black text-slate-800">Kids Shape Academy 🎮</h2>
          <p className="text-xs text-slate-500 font-extrabold uppercase">Beta Game Module</p>
        </div>
        <button 
          onClick={onExit}
          className="bg-rose-500 hover:bg-rose-600 text-white font-extrabold text-xs px-3.5 py-2 rounded-xl border-2 border-slate-800 shadow-cartoon-hover active:translate-y-0.5 transition-colors"
        >
          Exit Game ❌
        </button>
      </div>

      {/* Main Game Screen Router */}
      <div className="my-8 flex flex-col items-center justify-center flex-1">
        {gameState === 'idle' && (
          <CartoonCard color="white" className="w-full max-w-md text-center p-8 border-b-6 border-slate-800 space-y-6">
            <div>
              <span className="text-5xl animate-bounce-slow inline-block mb-2">⚡</span>
              <h3 className="text-xl font-black text-slate-800">Shape Matching Training</h3>
              <p className="text-sm text-slate-600 font-semibold mt-2">
                Can you match the shapes as fast as possible in 20 seconds? Tap the matching icon to earn points!
              </p>
            </div>

            <div className="bg-slate-100 p-4 rounded-2xl border-2 border-slate-300">
              <p className="text-xs text-slate-500 font-bold uppercase tracking-widest">Personal Best</p>
              <p className="text-2xl font-black text-emerald-600">{highScore} Stars 🌟</p>
            </div>

            <CartoonButton
              color="energy"
              onClick={startGame}
              className="w-full text-white font-black text-sm py-3"
            >
              Start Game 🚀
            </CartoonButton>
          </CartoonCard>
        )}

        {gameState === 'playing' && (
          <div className="w-full max-w-md flex flex-col items-center gap-6">
            {/* Timer and Score Indicators */}
            <div className="w-full flex justify-between items-center px-2">
              <div className="flex items-center gap-1.5 bg-amber-100 border-2 border-amber-300 px-3.5 py-1.5 rounded-full shadow-cartoon">
                <span className="text-sm">🌟</span>
                <span className="font-extrabold text-amber-800 text-sm">{score} Score</span>
              </div>
              <div className={`flex items-center gap-1.5 border-2 px-3.5 py-1.5 rounded-full shadow-cartoon transition-colors ${
                timeLeft <= 5 
                  ? 'bg-rose-100 border-rose-300 text-rose-700 animate-pulse' 
                  : 'bg-indigo-50 border-indigo-200 text-indigo-700'
              }`}>
                <span className="text-sm">⏰</span>
                <span className="font-black text-sm">{timeLeft}s left</span>
              </div>
            </div>

            {/* Target Display */}
            <CartoonCard color="white" className="w-full text-center p-6 border-b-6 border-slate-800 relative">
              <span className="text-xs font-black text-indigo-500 uppercase tracking-widest">Find the Match</span>
              <div className="text-7xl my-5 animate-bounce-slow">{target}</div>
              <p className="text-sm font-bold text-slate-700 h-6">{feedback}</p>
            </CartoonCard>

            {/* Shape selection buttons */}
            <div className="flex gap-4 justify-center w-full">
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
        )}

        {gameState === 'ended' && (
          <CartoonCard color="white" className="w-full max-w-md text-center p-8 border-b-6 border-slate-800 space-y-6">
            <div>
              <span className="text-5xl inline-block mb-2 animate-pulse">🏆</span>
              <h3 className="text-2xl font-black text-slate-800">Time's Up!</h3>
              <p className="text-sm text-slate-500 font-bold uppercase mt-1">Round Ended</p>
            </div>

            {score >= highScore && score > 0 ? (
              <div className="bg-emerald-50 border-2 border-emerald-300 p-4 rounded-2xl animate-bounce-slow">
                <span className="text-xs font-black text-emerald-600 uppercase tracking-widest block">New Best Score! 🎉</span>
                <span className="text-3xl font-black text-emerald-800 block mt-1">{score} Stars</span>
              </div>
            ) : (
              <div className="bg-slate-100 border-2 border-slate-200 p-4 rounded-2xl">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-widest block">Final Score</span>
                <span className="text-3xl font-black text-slate-800 block mt-1">{score} Stars</span>
              </div>
            )}

            <div className="text-sm font-bold text-slate-600">
              Personal Best: <span className="text-emerald-600 font-extrabold">{highScore} Stars</span>
            </div>

            <div className="flex gap-4">
              <CartoonButton
                color="science"
                onClick={startGame}
                className="flex-1 text-white font-black text-xs py-3"
              >
                Play Again 🔄
              </CartoonButton>
              <button
                onClick={onExit}
                className="flex-1 bg-slate-100 hover:bg-slate-250 text-slate-700 font-black text-xs py-3 rounded-2xl border-2 border-slate-800 shadow-cartoon hover:translate-y-[-2px] active:translate-y-[2px] transition-all"
              >
                Back to Hub 🏠
              </button>
            </div>
          </CartoonCard>
        )}
      </div>

      {/* Info Stats footer */}
      <div className="flex justify-around items-center bg-slate-900 text-white p-4 rounded-2xl border-2 border-slate-800">
        <div>
          <p className="text-[10px] text-slate-400 font-bold uppercase">Game Status</p>
          <p className="text-sm font-black text-amber-400 uppercase">
            {gameState === 'idle' ? 'Ready' : gameState === 'playing' ? 'Playing' : 'Finished'}
          </p>
        </div>
        <div>
          <p className="text-[10px] text-slate-400 font-bold uppercase">Personal Best</p>
          <p className="text-sm font-black text-emerald-400">{highScore} Stars 🌟</p>
        </div>
      </div>
    </div>
  );
}
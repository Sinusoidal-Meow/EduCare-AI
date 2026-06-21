import React from 'react';
import { Sparkles, Trophy, Award, Compass, Zap, Play, CheckCircle } from 'lucide-react';
import { CartoonButton, CartoonCard, StarTracker, BadgeItem } from '../components/Reusables';
import AITutorPanel from '../components/AITutorPanel';
import AIRecommendationPanel from '../components/AIRecommendationPanel';

export default function Dashboard({
  selectedGrade = 'KG',
  setSelectedGrade,
  stars = 20,
  badges = [],
  onStartSimulator,
  onStartLesson,
  lessons = []
}) {
  const grades = [
    { id: 'KG', label: 'Grade KG 🐣', color: 'bg-emerald-400 border-emerald-600 text-white' },
    { id: 'Grade 1', label: 'Grade 1 🎒', color: 'bg-science-400 border-science-600 text-white' },
    { id: 'Grade 2', label: 'Grade 2 🦉', color: 'bg-spark-400 border-spark-600 text-slate-800' },
    { id: 'Grade 3', label: 'Grade 3 🦊', color: 'bg-energy-400 border-energy-600 text-white' },
    { id: 'Grade 4', label: 'Grade 4 🦅', color: 'bg-electric-400 border-electric-600 text-white' },
  ];

  // List of badges that are available to earn
  const availableBadges = [
    { id: 'spark_starter', label: 'Spark Starter', icon: '⚡' },
    { id: 'loop_master', label: 'Loop Master', icon: '🔄' },
    { id: 'switch_wizard', label: 'Switch Wizard', icon: '🔌' },
    { id: 'conduct_hero', label: 'Material Hero', icon: '🪙' },
    { id: 'resistor_shield', label: 'Resistor Shield', icon: '🛡️' },
    { id: 'junior_engineer', label: 'Junior Engineer', icon: '🛠️' },
    { id: 'circuit_master', label: 'Circuit Master', icon: '👑' },
    { id: 'stem_explorer', label: 'STEM Explorer', icon: '🌍' }
  ];

  // User levels based on stars
  const getUserRank = () => {
    if (stars >= 50) return "Master of Magnetism 🧙‍♂️";
    if (stars >= 35) return "Circuit Engineer 🛠️";
    if (stars >= 20) return "Junior Explorer 🧭";
    return "Spark Apprentice 🐣";
  };

  return (
    <div className="space-y-8 max-w-7xl mx-auto px-4 py-6">
      
      {/* Welcome & Stats Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Welcome Card */}
        <CartoonCard color="white" className="md:col-span-2 flex flex-col md:flex-row items-center gap-6 bg-gradient-to-r from-indigo-50 to-purple-50">
          <div className="w-20 h-20 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-full flex items-center justify-center border-4 border-slate-700 shadow-cartoon animate-bounce-slow">
            <span className="text-4xl">🤖</span>
          </div>
          <div className="text-center md:text-left space-y-1">
            <h1 className="text-3xl font-black text-slate-800 tracking-wide">
              Hey there, STEM Explorer! 👋
            </h1>
            <p className="text-slate-600 font-bold text-sm">
              Current Rank: <span className="text-purple-600">{getUserRank()}</span>
            </p>
            <div className="flex flex-wrap gap-2 justify-center md:justify-start pt-2">
              <span className="text-xs bg-indigo-100 text-indigo-800 border border-indigo-200 px-2.5 py-1 rounded-full font-bold">
                🚀 Ready for Space Travel
              </span>
              <span className="text-xs bg-amber-100 text-amber-800 border border-amber-200 px-2.5 py-1 rounded-full font-bold">
                🎯 {50 - stars > 0 ? `${50 - stars} stars to next rank!` : 'Top Rank Reached!'}
              </span>
            </div>
          </div>
        </CartoonCard>

        {/* Progress Tracker Card */}
        <CartoonCard color="white" className="flex flex-col justify-between">
          <h3 className="font-extrabold text-lg text-slate-700 flex items-center gap-2 mb-3">
            <Trophy className="w-5 h-5 text-amber-500" /> My Achievements
          </h3>
          
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm font-extrabold text-slate-500">Stars Collected:</span>
            <StarTracker count={stars} />
          </div>

          <div className="border-t border-slate-100 pt-3">
            <span className="text-xs font-extrabold text-slate-500 block mb-2">Unlocked Badges:</span>
            <div className="flex gap-2 overflow-x-auto pb-1">
              {availableBadges.map((badge) => (
                <BadgeItem
                  key={badge.id}
                  id={badge.id}
                  label={badge.label}
                  icon={badge.icon}
                  earned={badges.includes(badge.id)}
                />
              ))}
            </div>
          </div>
        </CartoonCard>
      </div>

      {/* Grade Selector Tabs */}
      <div className="space-y-3">
        <h3 className="font-black text-xl text-slate-800 flex items-center gap-2">
          <Compass className="w-5 h-5 text-indigo-500 animate-spin-slow" /> Choose Your Grade Level
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
          {grades.map((gradeTab) => {
            const isSelected = selectedGrade === gradeTab.id;
            return (
              <button
                key={gradeTab.id}
                onClick={() => setSelectedGrade(gradeTab.id)}
                className={`
                  rounded-2xl py-3.5 px-4 font-bold border-2 transition-all text-sm shadow-cartoon hover:scale-102 active:scale-98
                  ${isSelected 
                    ? `${gradeTab.color} ring-4 ring-slate-800 scale-102` 
                    : 'bg-white hover:bg-slate-50 text-slate-700 border-slate-200'
                  }
                `}
              >
                {gradeTab.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Row: Dashboard Content + AI Tutor */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        
        {/* Lesson List + Sandbox Button */}
        <div className="lg:col-span-2 space-y-6">
          
          {/* Two-Column Quick Actions */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <AIRecommendationPanel 
              grade={selectedGrade}
              stars={stars}
              completedLessons={lessons.filter(l => l.completed).map(l => l.id)}
              onStartLesson={onStartLesson}
            />

            {/* Launch Sandbox Card */}
            <CartoonCard color="spark" className="flex flex-col justify-between border-b-6 border-slate-800 bg-gradient-to-r from-amber-50 to-yellow-50 relative overflow-hidden">
              <div className="absolute right-0 top-0 text-[100px] opacity-10 pointer-events-none select-none">⚡</div>
              <div className="space-y-1">
                <h2 className="text-2xl font-black text-amber-950 flex items-center gap-2">
                  🧪 Sandbox Lab
                </h2>
                <p className="text-slate-600 text-xs font-semibold leading-relaxed">
                  Want to build your own custom electrical loops? Open the simulator canvas and create whatever you imagine!
                </p>
              </div>
              <CartoonButton 
                color="energy" 
                onClick={onStartSimulator}
                className="flex items-center gap-2 text-sm px-4 py-2 mt-4 w-full justify-center"
              >
                Start Circuit Simulator <Play className="w-4 h-4 fill-white" />
              </CartoonButton>
            </CartoonCard>
          </div>


          {/* Lesson Cards Section */}
          <div className="space-y-4">
            <h3 className="font-black text-xl text-slate-800 flex items-center gap-2">
              <Zap className="w-5 h-5 text-amber-500" /> Grade {selectedGrade} Lessons
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {lessons.map((lesson) => {
                const isCompleted = lesson.completed;
                return (
                  <CartoonCard 
                    key={lesson.id} 
                    color="white"
                    className="flex flex-col justify-between min-h-[250px] border-l-8 border-l-science-400 group"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-2xl group-hover:scale-110 transition-transform">{lesson.icon}</span>
                        {isCompleted ? (
                          <span className="flex items-center gap-1 text-xs text-power-600 font-bold bg-power-100 border border-power-300 px-2.5 py-0.5 rounded-full">
                            <CheckCircle className="w-3.5 h-3.5" /> Completed
                          </span>
                        ) : (
                          <span className="text-[10px] bg-slate-100 border text-slate-400 px-2 py-0.5 rounded-full font-bold">
                            ⭐⭐⭐ 3 Stars
                          </span>
                        )}
                      </div>
                      <h4 className="font-extrabold text-base text-slate-800 leading-snug group-hover:text-science-600 transition-colors">
                        {lesson.title}
                      </h4>
                      <p className="text-xs text-slate-500 font-semibold leading-relaxed mt-1 line-clamp-2">
                        {lesson.type === 'quiz' ? lesson.description : lesson.description}
                      </p>
                      {lesson.learningObjective && (
                        <div className="mt-1 bg-indigo-50 border border-indigo-100 rounded-md px-1.5 py-0.5">
                          <p className="text-[9px] text-indigo-900 font-medium leading-tight truncate">{lesson.learningObjective}</p>
                        </div>
                      )}
                    </div>

                    <div className="mt-4 flex justify-between items-center">
                      <span className="text-[11px] text-slate-400 font-bold">Topic: {lesson.topic}</span>
                      <CartoonButton
                        size="sm"
                        color={isCompleted ? 'gray' : 'science'}
                        onClick={() => onStartLesson(lesson)}
                      >
                        {isCompleted ? 'Try Again' : 'Play Now 🚀'}
                      </CartoonButton>
                    </div>
                  </CartoonCard>
                );
              })}
            </div>
          </div>
        </div>

        {/* AI Tutor Companion */}
        <div>
          <AITutorPanel 
            grade={selectedGrade} 
            context="dashboard"
          />
        </div>
      </div>
    </div>
  );
}

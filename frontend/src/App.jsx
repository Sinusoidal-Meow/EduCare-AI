import React, { useState, useEffect } from 'react';
import { Sparkles, Trophy, Settings, GraduationCap, Compass, BookOpen, Star, Award, LogOut, CheckCircle } from 'lucide-react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import STEMModule from './STEMModule';
import PhysicalActivityModule from './PhysicalActivityModule';
import ParentActivityReport from './components/ParentActivityReport';
import TeacherActivityAnalytics from './components/TeacherActivityAnalytics';
import { CartoonButton, CartoonCard } from './components/Reusables';
import { eventBus } from './shared/eventBus';
import { API_BASE } from './config';
import AITutorPanel from './components/AITutorPanel';
import FitFriendPanel from './components/FitFriendPanel';
import CompanionModule from './CompanionModule';
import EnglishAIModule from './EnglishAIModule';
import MathModule from './MathModule';
import MathMentorPanel from './components/MathMentorPanel';
import LogicModule from './LogicModule';
import LogicLeapPanel from './components/LogicLeapPanel';
import StudentLogin from './components/StudentLogin';

export default function App() {
  const navigate = useNavigate();
  const location = useLocation();
  
  // Login State
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return !!localStorage.getItem('educare_student_name');
  });

  // Dashboard view toggle: 'parent' | 'teacher'
  const [dashboardView, setDashboardView] = useState('parent');

  // Active inline lab: null | 'logic' | 'math' | 'stem' | 'english' | 'companion' | 'physical'
  const [inlineActiveLab, setInlineActiveLab] = useState(null);
  const [renderedLab, setRenderedLab] = useState(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    if (inlineActiveLab) {
      setIsTransitioning(true);
      const timer = setTimeout(() => {
        setRenderedLab(inlineActiveLab);
        setIsTransitioning(false);
      }, 350); // wait for layout slide animation to finish
      return () => clearTimeout(timer);
    } else {
      setRenderedLab(null);
      setIsTransitioning(false);
    }
  }, [inlineActiveLab]);

  const labs = [
    {
      id: 'logic',
      title: 'LogicLeap AI Lab',
      icon: '🧠',
      color: 'teal',
      borderColorClass: 'border-l-8 border-l-teal-500',
      stackedBorderColorClass: 'border-l-4 border-l-teal-500',
      badgeBg: 'bg-teal-100 border-teal-300 text-teal-800',
      desc: 'Stretch your brain with shape matching, pattern continuation, grid navigation, multi-step comparisons, and truth table puzzles!',
      actionText: 'Enter Logic Lab 🚀'
    },
    {
      id: 'math',
      title: 'MathMentor AI Lab',
      icon: '🧮',
      color: 'science',
      borderColorClass: 'border-l-8 border-l-purple-500',
      stackedBorderColorClass: 'border-l-4 border-l-purple-500',
      badgeBg: 'bg-purple-100 border-purple-300 text-purple-800',
      desc: 'Master numbers, addition, subtraction, fractions, clocks, decimals, and logic games. Guided by adaptive progressive hint levels 1 to 4!',
      actionText: 'Enter Math Lab 🚀'
    },
    {
      id: 'stem',
      title: 'STEM & Circuit Simulator',
      icon: '🔌',
      color: 'energy',
      borderColorClass: 'border-l-8 border-l-orange-400',
      stackedBorderColorClass: 'border-l-4 border-l-orange-400',
      badgeBg: 'bg-orange-100 border-orange-300 text-orange-800',
      desc: 'Construct loops, experiment with LEDs, switches, fans, buzzers, and resistors. Powered by AI struggle hints and standard vs advanced difficulty!',
      actionText: 'Enter Simulator Lab 🚀'
    },
    {
      id: 'english',
      title: 'Astra English AI Lab',
      icon: '📚',
      color: 'science',
      borderColorClass: 'border-l-8 border-l-rose-400',
      stackedBorderColorClass: 'border-l-4 border-l-rose-400',
      badgeBg: 'bg-rose-100 border-rose-350 text-rose-800',
      desc: 'Read magical stories, take comprehension quizzes, study present/past grammar, practice writing prompts, and test speaking pronunciation!',
      actionText: 'Enter English Lab 🚀'
    },
    {
      id: 'companion',
      title: 'AI Companion & Language Buddy',
      icon: '🗣️',
      color: 'science',
      borderColorClass: 'border-l-8 border-l-rose-450',
      stackedBorderColorClass: 'border-l-4 border-l-rose-450',
      badgeBg: 'bg-rose-100 border-rose-350 text-rose-800',
      desc: 'Practice spellings, chat with your cute interactive Buddy mascot, track learning metrics, and play relaxing break activities!',
      actionText: 'Chat with Buddy 🚀'
    },
    {
      id: 'physical',
      title: 'Physical Activity Lab',
      icon: '🏃‍♂️',
      color: 'science',
      borderColorClass: 'border-l-8 border-l-indigo-400',
      stackedBorderColorClass: 'border-l-4 border-l-indigo-400',
      badgeBg: 'bg-indigo-100 border-indigo-300 text-indigo-800',
      desc: 'Follow guided physical exercise, yoga, stretching, and coordination breaks. Integrated with academic learning telemetry and stars rewards!',
      actionText: 'Enter Activity Lab 🚀'
    }
  ];

  const renderActiveLab = () => {
    switch (renderedLab) {
      case 'logic':
        return <LogicModule studentId="student_123" onExit={() => setInlineActiveLab(null)} />;
      case 'math':
        return <MathModule studentId="student_123" onExit={() => setInlineActiveLab(null)} />;
      case 'stem':
        return <STEMModule studentId="student_123" onProgressUpdate={handleSTEMProgressUpdate} onExit={() => setInlineActiveLab(null)} />;
      case 'english':
        return <EnglishAIModule studentId="student_123" onExit={() => setInlineActiveLab(null)} />;
      case 'companion':
        return <CompanionModule studentId="student_123" onExit={() => setInlineActiveLab(null)} />;
      case 'physical':
        return <PhysicalActivityModule studentId="student_123" onProgressUpdate={handlePhysicalActivityProgressUpdate} onExit={() => setInlineActiveLab(null)} />;
      default:
        return null;
    }
  };
  
  // Parent dashboard state synchronized from sub-modules
  const [parentStats, setParentStats] = useState({
    stars: 15,
    level: 1,
    badges: [],
    readinessScore: 0
  });

  const [activeGrade, setActiveGrade] = useState(() => {
    return localStorage.getItem('educare_grade_student_123') || 'KG';
  });

  const [activeAge, setActiveAge] = useState(() => {
    return parseInt(localStorage.getItem('educare_age_student_123') || '6');
  });

  // Keep activeGrade/activeAge updated from eventBus
  useEffect(() => {
    const unsubscribeGrade = eventBus.subscribe('GRADE_CHANGED', (data) => {
      if (data && data.grade) {
        setActiveGrade(data.grade);
      }
    });
    const unsubscribeAge = eventBus.subscribe('AGE_CHANGED', (data) => {
      if (data && data.age) {
        setActiveAge(data.age);
      }
    });
    return () => {
      unsubscribeGrade();
      unsubscribeAge();
    };
  }, []);

  const [notification, setNotification] = useState(null);

  const handleSTEMProgressUpdate = (progressData) => {
    setParentStats({
      stars: progressData.stars,
      level: progressData.level,
      badges: progressData.badges,
      readinessScore: progressData.readinessScore
    });

    showNotification(`🔄 Parent Dashboard Synchronized: Readiness is now ${progressData.readinessScore}%! Earned ${progressData.stars} total stars.`);
  };

  const handlePhysicalActivityProgressUpdate = (progressData) => {
    setParentStats(prev => ({
      ...prev,
      stars: progressData.stars
    }));
    showNotification(`🔄 Physical Activity Synchronized: Earned ${progressData.stars} total stars!`);
  };

  const showNotification = (message) => {
    setNotification(message);
    setTimeout(() => {
      setNotification(null);
    }, 5000);
  };

  // Listen to Cross Application Event triggers
  useEffect(() => {
    // Listen for automatic break assignment
    const unsubscribeAssign = eventBus.subscribe('PHYSICAL_ACTIVITY_ASSIGNMENT', (data) => {
      console.log('📬 [App] Captured PHYSICAL_ACTIVITY_ASSIGNMENT trigger:', data);
      showNotification(`🏃‍♂️ Physical Break Assigned! Launching break lab...`);
      // Redirect to physical break routing portal
      navigate('/physical-activity');
    });

    // Listen for completed break to route back to origin app
    const unsubscribeComplete = eventBus.subscribe('ACTIVITY_COMPLETED', (data) => {
      console.log('📬 [App] Captured ACTIVITY_COMPLETED event:', data);
      showNotification(`🎉 Break completed! Returning to study workspace.`);
      if (data.sourceModule === 'STEM_APP') {
        navigate('/stem');
      } else {
        navigate('/');
      }
    });

    // Listen for skipped break to route back to origin app
    const unsubscribeSkip = eventBus.subscribe('ACTIVITY_SKIPPED', (data) => {
      console.log('📬 [App] Captured ACTIVITY_SKIPPED event:', data);
      showNotification(`⚠️ Break skipped. Returning to study workspace.`);
      if (data.sourceModule === 'STEM_APP') {
        navigate('/stem');
      } else {
        navigate('/');
      }
    });

    // Wildcard-like listeners for session completions across all subjects
    const handleSessionCompleted = async (data) => {
      console.log('📬 [App] Captured session completion event:', data);
      try {
        const response = await fetch(`${API_BASE}/activity/assign`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            studentId: data.studentId,
            grade: data.grade || 'Grade 2',
            sourceModule: data.sourceModule || 'STEM_APP'
          })
        });
        if (response.ok) {
          const resData = await response.json();
          // Publish PHYSICAL_ACTIVITY_ASSIGNMENT to trigger navigation and load the break session
          eventBus.publish('PHYSICAL_ACTIVITY_ASSIGNMENT', {
            studentId: data.studentId,
            sessionId: resData.sessionId,
            activityId: resData.activityId,
            sourceModule: data.sourceModule || 'STEM_APP',
            activityDetail: resData.nextRecommendedActivity
          });
        }
      } catch (err) {
        console.error('Failed to auto-assign physical break:', err);
      }
    };

    const unsubscribeStem = eventBus.subscribe('STEM_SESSION_COMPLETED', handleSessionCompleted);
    const unsubscribeMath = eventBus.subscribe('MATH_SESSION_COMPLETED', handleSessionCompleted);
    const unsubscribeEnglish = eventBus.subscribe('ENGLISH_SESSION_COMPLETED', handleSessionCompleted);
    const unsubscribeLogic = eventBus.subscribe('LOGIC_SESSION_COMPLETED', handleSessionCompleted);

    return () => {
      unsubscribeAssign();
      unsubscribeComplete();
      unsubscribeSkip();
      unsubscribeStem();
      unsubscribeMath();
      unsubscribeEnglish();
      unsubscribeLogic();
    };
  }, [navigate]);

  if (!isAuthenticated) {
    return <StudentLogin onLoginComplete={() => {
      setIsAuthenticated(true);
      const newGrade = localStorage.getItem('educare_grade_student_123');
      const newAge = localStorage.getItem('educare_age_student_123');
      if (newGrade) eventBus.publish('GRADE_CHANGED', { grade: newGrade });
      if (newAge) eventBus.publish('AGE_CHANGED', { age: parseInt(newAge) });
    }} />;
  }

  return (
    <div className="min-h-screen bg-[#fcfaf7] text-slate-800 font-sans selection:bg-indigo-100 flex flex-col justify-between">
      
      {/* Dynamic Sync Notification Banner */}
      {notification && (
        <div className="fixed top-24 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-xs font-black px-5 py-3 rounded-2xl shadow-cartoon border-2 border-slate-700 z-50 flex items-center gap-2 animate-bounce">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
          {notification}
        </div>
      )}

      <Routes>
        {/* Parent Home Dashboard */}
        <Route path="/" element={
          <>
            {/* Main Parent/Teacher Header */}
            <header className="glass border-b-4 border-slate-800 py-4 px-6 shadow-sm sticky top-0 z-40">
              <div className="max-w-7xl mx-auto flex items-center justify-between">
                
                {/* Logo */}
                <div className="flex items-center gap-2.5 select-none">
                  <div className="bg-gradient-to-br from-indigo-500 to-purple-600 w-10 h-10 rounded-2xl flex items-center justify-center border-2 border-slate-800 shadow-cartoon">
                    <span className="text-xl">🤖</span>
                  </div>
                  <div>
                    <span className="font-black text-xl text-slate-800 tracking-wider flex items-center gap-1.5">
                      EduCare AI <span className="bg-indigo-600 text-white text-[10px] px-2 py-0.5 rounded-md">PORTAL</span>
                    </span>
                    <p className="text-[10px] text-slate-500 font-extrabold uppercase tracking-widest mt-[-2px]">
                      Unified Learning Hub
                    </p>
                  </div>
                </div>

                {/* Dashboard View Switcher */}
                <div className="flex gap-2">
                  <button 
                    onClick={() => setDashboardView('parent')}
                    className={`px-4 py-1.5 rounded-xl font-black text-xs border-2 shadow-cartoon transition-all hover:scale-102 active:scale-98 ${
                      dashboardView === 'parent' 
                        ? 'bg-indigo-600 text-white border-slate-800' 
                        : 'bg-white text-slate-600 border-slate-205 hover:bg-slate-50'
                    }`}
                  >
                    Parent Hub 🏠
                  </button>
                  <button 
                    onClick={() => setDashboardView('teacher')}
                    className={`px-4 py-1.5 rounded-xl font-black text-xs border-2 shadow-cartoon transition-all hover:scale-102 active:scale-98 ${
                      dashboardView === 'teacher' 
                        ? 'bg-purple-600 text-white border-slate-800' 
                        : 'bg-white text-slate-600 border-slate-205 hover:bg-slate-50'
                    }`}
                  >
                    Teacher Hub 🎓
                  </button>
                  <button 
                    onClick={() => setDashboardView('activity')}
                    className={`px-4 py-1.5 rounded-xl font-black text-xs border-2 shadow-cartoon transition-all hover:scale-102 active:scale-98 ${
                      dashboardView === 'activity' 
                        ? 'bg-emerald-600 text-white border-slate-800' 
                        : 'bg-white text-slate-600 border-slate-205 hover:bg-slate-50'
                    }`}
                  >
                    Activity Report 📊
                  </button>
                  <button 
                    onClick={() => setDashboardView('insights')}
                    className={`px-4 py-1.5 rounded-xl font-black text-xs border-2 shadow-cartoon transition-all hover:scale-102 active:scale-98 ${
                      dashboardView === 'insights' 
                        ? 'bg-rose-600 text-white border-slate-800' 
                        : 'bg-white text-slate-600 border-slate-205 hover:bg-slate-50'
                    }`}
                  >
                    Insights Hub 💡
                  </button>
                </div>

                {/* Stats Summary */}
                <div className="flex items-center gap-4">
                  <div className="bg-indigo-50 border-2 border-indigo-200 px-3.5 py-1 rounded-full text-xs font-extrabold text-indigo-700">
                    Global Rank: Explorer 🧭
                  </div>
                  <div className="flex items-center gap-1 bg-amber-100 border-2 border-amber-300 px-3 py-1 rounded-full shadow-cartoon-hover">
                    <span className="text-sm">⭐</span>
                    <span className="font-extrabold text-amber-800 text-sm">{parentStats.stars}</span>
                  </div>
                </div>

              </div>
            </header>

            {/* Main Dashboard Portal Container */}
            <main className="flex-1 max-w-7xl mx-auto px-4 py-8 space-y-10 w-full">
              
              {dashboardView === 'parent' && (
                <>
                  {/* Main Welcome Hero */}
                  {!inlineActiveLab && (
                    <CartoonCard color="white" className="flex flex-col md:flex-row items-center justify-between gap-6 p-8 bg-gradient-to-r from-violet-50 to-indigo-50 border-b-6 border-slate-800 animate-fade-in">
                      <div className="space-y-2 text-center md:text-left max-w-xl">
                        <h1 className="text-4xl font-black text-slate-800 tracking-wide leading-tight">
                          Welcome to <span className="text-indigo-600">EduCare AI</span> Learning Academy! 🎓
                        </h1>
                        <p className="text-slate-600 font-semibold text-sm leading-relaxed">
                          Explore personalized classrooms powered by artificial intelligence. Track progress, level up, and unlock rewards across all modules.
                        </p>
                      </div>
                      <div className="w-24 h-24 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-full flex items-center justify-center border-4 border-slate-800 shadow-cartoon animate-bounce-slow">
                        <span className="text-5xl">🎒</span>
                      </div>
                    </CartoonCard>
                  )}

                  {/* Student Progress Overview */}
                  {!inlineActiveLab && (
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 animate-fade-in">
                      <CartoonCard color="white" className="flex flex-col justify-between text-center space-y-2">
                        <span className="text-xs font-extrabold text-slate-400 uppercase">Current Level</span>
                        <span className="text-4xl font-black text-indigo-600">Lvl {parentStats.level}</span>
                        <p className="text-[10px] text-slate-500 font-semibold">Every 5 completed circuits increases level</p>
                      </CartoonCard>

                      <CartoonCard color="white" className="flex flex-col justify-between text-center space-y-2">
                        <span className="text-xs font-extrabold text-slate-400 uppercase">STEM Stars</span>
                        <span className="text-4xl font-black text-amber-500">⭐ {parentStats.stars}</span>
                        <p className="text-[10px] text-slate-500 font-semibold">Unlock new challenges at 25 stars</p>
                      </CartoonCard>

                      <CartoonCard color="white" className="flex flex-col justify-between text-center space-y-2">
                        <span className="text-xs font-extrabold text-slate-400 uppercase">Readiness Score</span>
                        <span className="text-4xl font-black text-emerald-500">{parentStats.readinessScore}%</span>
                        <p className="text-[10px] text-slate-500 font-semibold">Completed material in active grade</p>
                      </CartoonCard>

                      <CartoonCard color="white" className="flex flex-col justify-between text-center space-y-2">
                        <span className="text-xs font-extrabold text-slate-400 uppercase">Badges Unlocked</span>
                        <span className="text-4xl font-black text-purple-600">🏆 {parentStats.badges.length}</span>
                        <p className="text-[10px] text-slate-500 font-semibold">Earn badges for challenges and simulator presets</p>
                      </CartoonCard>
                    </div>
                  )}

                  {/* Portal Cards Grid and Sidebar Layout */}
                  <div className="space-y-4 transition-all duration-500 ease-in-out">
                    {!inlineActiveLab && (
                      <h3 className="font-black text-2xl text-slate-800 flex items-center gap-2 animate-fade-in">
                        <BookOpen className="w-6 h-6 text-indigo-500" /> AI Classrooms & Labs
                      </h3>
                    )}

                    <div className="transition-all duration-500 ease-in-out flex flex-col lg:flex-row gap-6 items-start w-full">
                      
                      {/* Active Lab Component Display Area */}
                      {inlineActiveLab && (
                        <div 
                          className="flex-1 w-full lg:w-[calc(100%-344px)] border-4 border-slate-800 rounded-3xl overflow-hidden bg-white shadow-cartoon transition-all duration-300"
                          style={{ willChange: 'transform, opacity' }}
                        >
                          {!renderedLab ? (
                            <div className="flex flex-col items-center justify-center p-12 min-h-[500px] text-center space-y-4 bg-slate-50 animate-pulse-slow">
                              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center border-4 border-slate-800 shadow-cartoon animate-bounce">
                                <span className="text-3xl">🚀</span>
                              </div>
                              <h3 className="font-black text-xl text-slate-800">Opening Workspace...</h3>
                              <p className="text-xs text-slate-500 font-bold max-w-xs">
                                Preparing your interactive learning lab! 🌟
                              </p>
                            </div>
                          ) : (
                            <div className="animate-fade-in">
                              {renderActiveLab()}
                            </div>
                          )}
                        </div>
                      )}

                      {/* Labs Grid / Sidebar Container */}
                      <div 
                        className={`transition-all duration-500 ease-in-out shrink-0 ${
                          inlineActiveLab 
                            ? 'w-full lg:w-[320px] flex flex-col gap-4 lg:sticky lg:top-24 max-h-[calc(100vh-120px)] overflow-y-auto pr-1 pb-4' 
                            : 'w-full grid grid-cols-1 md:grid-cols-3 gap-6'
                        }`}
                        style={{ willChange: 'transform, opacity' }}
                      >
                        {inlineActiveLab && (
                          <div className="bg-slate-900 text-white rounded-2xl p-3.5 text-center font-black text-xs shadow-cartoon border-2 border-slate-800 animate-fade-in flex items-center justify-between">
                            <span>Switch Labs 🚀</span>
                            <button 
                              onClick={() => setInlineActiveLab(null)}
                              className="bg-rose-500 hover:bg-rose-600 text-white border border-slate-800 px-2 py-0.5 rounded-lg text-[10px] font-extrabold shadow-cartoon-hover active:translate-y-0.5"
                            >
                              Close Lab ❌
                            </button>
                          </div>
                        )}

                        {labs
                          .filter((lab) => !inlineActiveLab || lab.id !== inlineActiveLab)
                          .map((lab) => {
                            if (inlineActiveLab) {
                              // Stacked Mini Card View in Sidebar
                              return (
                                <CartoonCard
                                  key={lab.id}
                                  color="white"
                                  onClick={() => {
                                    setInlineActiveLab(lab.id);
                                    showNotification(`${lab.icon} Switched to ${lab.title}!`);
                                  }}
                                  className={`flex flex-row gap-3 items-center p-3.5 h-28 border-l-8 ${lab.borderColorClass} shadow-cartoon hover:shadow-cartoon-hover hover:scale-102 active:scale-98 transition-all duration-300 cursor-pointer group animate-fade-in`}
                                >
                                  <span className="text-3xl select-none group-hover:scale-110 transition-transform">{lab.icon}</span>
                                  <div className="flex-1 min-w-0">
                                    <h4 className="font-extrabold text-xs text-slate-800 truncate group-hover:text-indigo-600 transition-colors">
                                      {lab.title}
                                    </h4>
                                    <p className="text-[10px] text-slate-500 font-semibold mt-0.5 line-clamp-2 leading-tight">
                                      {lab.desc}
                                    </p>
                                  </div>
                                </CartoonCard>
                              );
                            } else {
                              // Full Card View in Grid
                              return (
                                <CartoonCard 
                                  key={lab.id}
                                  color="white" 
                                  className={`flex flex-col justify-between h-64 border-l-8 ${lab.borderColorClass} shadow-cartoon hover:shadow-cartoon-hover hover:scale-102 transition-all group`}
                                >
                                  <div>
                                    <div className="flex justify-between items-start mb-2">
                                      <span className="text-3xl">{lab.icon}</span>
                                      <span className="text-[10px] bg-slate-100 border border-slate-300 text-slate-800 px-2.5 py-0.5 rounded-full font-bold">
                                        ACTIVE PORTAL
                                      </span>
                                    </div>
                                    <h4 className="font-extrabold text-lg text-slate-800 group-hover:text-indigo-600 transition-colors leading-snug">
                                      {lab.title}
                                    </h4>
                                    <p className="text-xs text-slate-500 font-semibold mt-1.5 leading-relaxed">
                                      {lab.desc}
                                    </p>
                                  </div>
                                  <CartoonButton 
                                    color={lab.color} 
                                    onClick={() => {
                                      setInlineActiveLab(lab.id);
                                      showNotification(`${lab.icon} Opened ${lab.title} inline!`);
                                    }}
                                    className="w-full font-black text-xs text-white"
                                  >
                                    {lab.actionText}
                                  </CartoonButton>
                                </CartoonCard>
                              );
                            }
                          })}
                      </div>

                    </div>
                  </div>
                </>
              )}

              {/* Conditional Dashboards Rendering */}
              <div className="pt-4 border-t-2 border-slate-150">
                {dashboardView === 'insights' && (
                  <ParentActivityReport studentId="student_123" mode="parent" />
                )}
                {dashboardView === 'activity' && (
                  <ParentActivityReport studentId="student_123" mode="activity" />
                )}
                {dashboardView === 'teacher' && (
                  <TeacherActivityAnalytics />
                )}
              </div>

            </main>

            {/* Parent Footer */}
            <footer className="bg-slate-900 border-t-4 border-slate-950 text-slate-400 py-6 px-6 text-center text-xs font-bold mt-12">
              <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <span className="text-lg">🤖</span>
                  <span>© 2026 EduCare AI Parent System. All modules unified.</span>
                </div>
                <div className="flex gap-4">
                  <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                  <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                  <a href="#" className="hover:text-white transition-colors">Contact Administrator</a>
                </div>
              </div>
            </footer>
          </>
        } />
        
        {/* STEM Modular Routing Subtree */}
        <Route path="/stem/*" element={
          <STEMModule 
            studentId="student_123"
            onProgressUpdate={handleSTEMProgressUpdate}
            onExit={() => {
              navigate('/');
              showNotification("🏠 Returned to Parent Hub Dashboard.");
            }}
          />
        } />

        {/* Physical Activity Modular Routing Subtree */}
        <Route path="/physical-activity/*" element={
          <PhysicalActivityModule 
            studentId="student_123"
            onProgressUpdate={handlePhysicalActivityProgressUpdate}
            onExit={() => {
              navigate('/');
              showNotification("🏠 Returned to Parent Hub Dashboard.");
            }}
          />
        } />

        {/* Math AI Modular Routing Subtree */}
        <Route path="/math/*" element={
          <MathModule 
            studentId="student_123"
            onExit={() => {
              navigate('/');
              showNotification("🏠 Returned to Parent Hub Dashboard.");
            }}
          />
        } />

        {/* English AI Modular Routing Subtree */}
        <Route path="/english-ai/*" element={
          <EnglishAIModule 
            studentId="student_123"
            onExit={() => {
              navigate('/');
              showNotification("🏠 Returned to Parent Hub Dashboard.");
            }}
          />
        } />

        {/* AI Companion Modular Routing Subtree */}
        <Route path="/companion/*" element={
          <CompanionModule 
            studentId="student_123"
            onExit={() => {
              navigate('/');
              showNotification("🏠 Returned to Parent Hub Dashboard.");
            }}
          />
        } />

        {/* Logic AI Modular Routing Subtree */}
        <Route path="/logic/*" element={
          <LogicModule 
            studentId="student_123"
            onExit={() => {
              navigate('/');
              showNotification("🏠 Returned to Parent Hub Dashboard.");
            }}
          />
        } />
      </Routes>

      {/* Floating AI Panels */}
      {location.pathname.startsWith('/stem') && 
       !location.pathname.startsWith('/stem/simulator') && 
       !location.pathname.includes('/stem/lessons/') && (
        <AITutorPanel floating={true} studentId="student_123" grade={activeGrade} />
      )}
      {location.pathname.startsWith('/physical-activity') && (
        <FitFriendPanel floating={true} studentId="student_123" grade={activeGrade} />
      )}
      {location.pathname.startsWith('/math') && (
        <MathMentorPanel floating={true} studentId="student_123" grade={activeGrade} />
      )}
      {location.pathname.startsWith('/logic') && (
        <LogicLeapPanel floating={true} studentId="student_123" grade={activeGrade} />
      )}
    </div>
  );
}

import React, { useState, useEffect } from 'react';
import { Activity, CheckCircle, AlertTriangle, Info, Star, ShieldAlert, Award, TrendingUp, BarChart2, User, Edit2, Save, Calendar, Calculator, Percent, Clock, Sparkles, BookOpen, Brain } from 'lucide-react';
import { API_BASE } from '../config';
import { CartoonCard } from './Reusables';
import { eventBus } from '../shared/eventBus';

export default function ParentActivityReport({ studentId = 'student_123', mode = 'activity' }) {
  const [report, setReport] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Profile State
  const [profile, setProfile] = useState({
    name: localStorage.getItem('educare_student_name') || '',
    dob: localStorage.getItem('educare_student_dob') || '',
    age: localStorage.getItem('educare_age_student_123') || '',
    grade: localStorage.getItem('educare_grade_student_123') || 'KG'
  });
  const [isEditingProfile, setIsEditingProfile] = useState(false);

  const handleSaveProfile = () => {
    localStorage.setItem('educare_student_name', profile.name);
    localStorage.setItem('educare_student_dob', profile.dob);
    localStorage.setItem('educare_age_student_123', profile.age);
    localStorage.setItem('educare_grade_student_123', profile.grade);
    setIsEditingProfile(false);
    
    // Broadcast changes to active modules
    eventBus.publish('GRADE_CHANGED', { grade: profile.grade });
    eventBus.publish('AGE_CHANGED', { age: parseInt(profile.age) });
  };

  useEffect(() => {
    async function loadReport() {
      try {
        setLoading(true);
        const response = await fetch(`${API_BASE}/activity/parent-report?studentId=${studentId}`);
        if (response.ok) {
          const data = await response.json();
          setReport(data);
        } else {
          throw new Error('Failed to load parent report');
        }
      } catch (err) {
        console.warn('API parent report fetch offline, using mock data...');
        setMockReport();
      } finally {
        setLoading(false);
      }
    }
    loadReport();
  }, [studentId]);

  const setMockReport = () => {
    setReport({
      totalCircuits: 15,
      completedCircuits: 12,
      completionRate: 0.80,
      errorsPerSession: 1.5,
      engagementScore: 92,
      learningSpeed: "Fast",
      improvementTrend: "+15%",
      weeklyTrends: [
        { week: '2026-W22', assigned: 3, completed: 2, skipped: 1 },
        { week: '2026-W23', assigned: 5, completed: 4, skipped: 1 },
        { week: '2026-W24', assigned: 7, completed: 6, skipped: 1 }
      ],
      monthlyTrends: [
        { month: '2026-05', assigned: 8, completed: 6, skipped: 2 },
        { month: '2026-06', assigned: 15, completed: 12, skipped: 3 }
      ],
      alerts: [
        {
          type: "HIGH_ENGAGEMENT",
          title: "Great Circuit Building!",
          message: "Your child has been building complex circuits successfully. They are ready for Grade 4 challenges.",
          severity: "success"
        },
        {
          type: "COMMON_MISTAKE",
          title: "Short Circuit Tendency",
          message: "Occasionally forgets to add a load (bulb/resistor). Sparky AI is providing guided hints.",
          severity: "warning"
        }
      ],
      math: {
        accuracy: 85,
        weakTopics: ['Counting Objects', 'Simple Addition'],
        timePerQuestion: 10,
        progressTrend: '+12%',
        weeklyImprovement: '+6%',
        stars: 35,
        level: 2,
        badgesCount: 3
      },
      logic: {
        accuracy: 88,
        weakTopics: ['Grid Logic Puzzles', 'Logical Deduction'],
        timePerQuestion: 11,
        progressTrend: '+15%',
        weeklyImprovement: '+8%',
        stars: 45,
        level: 2,
        badgesCount: 4
      }
    });
  };

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-slate-400">
        <div className="w-10 h-10 border-4 border-indigo-400 border-t-transparent rounded-full animate-spin mb-3"></div>
        <span className="font-bold text-xs tracking-wider uppercase animate-pulse">Loading Activity Insights...</span>
      </div>
    );
  }

  if (!report) return null;

  return (
    <div className="space-y-6">
      {mode === 'activity' && (
        <>
          {/* Header bar */}
      <div className="flex items-center justify-between border-b-2 border-slate-100 pb-2">
        <h3 className="font-black text-2xl text-slate-800 flex items-center gap-2">
          <TrendingUp className="w-6 h-6 text-indigo-500 animate-pulse" /> Child's STEM Activity Insights
        </h3>
        <span className="text-[10px] text-slate-400 font-extrabold uppercase bg-slate-100 px-2.5 py-1 rounded-full border border-slate-200">
          Sync status: Active 🔄
        </span>
      </div>

      {/* Student Profile Section */}
      <CartoonCard color="white" className="p-6 border-l-8 border-l-indigo-400">
        <div className="flex justify-between items-start mb-4">
          <h4 className="font-extrabold text-lg flex items-center gap-2">
            <User className="w-5 h-5 text-indigo-500" /> Student Profile
          </h4>
          {!isEditingProfile ? (
            <button 
              onClick={() => setIsEditingProfile(true)}
              className="flex items-center gap-1 text-xs font-bold bg-indigo-50 text-indigo-700 px-3 py-1.5 rounded-lg border border-indigo-200 hover:bg-indigo-100"
            >
              <Edit2 className="w-3 h-3" /> Edit Profile
            </button>
          ) : (
            <button 
              onClick={handleSaveProfile}
              className="flex items-center gap-1 text-xs font-bold bg-emerald-500 text-white px-3 py-1.5 rounded-lg border-2 border-emerald-700 hover:bg-emerald-600 shadow-cartoon-sm"
            >
              <Save className="w-3 h-3" /> Save Changes
            </button>
          )}
        </div>

        {!isEditingProfile ? (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <span className="block text-[10px] uppercase font-extrabold text-slate-400">Name</span>
              <span className="font-black text-slate-800">{profile.name}</span>
            </div>
            <div>
              <span className="block text-[10px] uppercase font-extrabold text-slate-400">Date of Birth</span>
              <span className="font-black text-slate-800">{profile.dob}</span>
            </div>
            <div>
              <span className="block text-[10px] uppercase font-extrabold text-slate-400">Age</span>
              <span className="font-black text-slate-800">{profile.age} years</span>
            </div>
            <div>
              <span className="block text-[10px] uppercase font-extrabold text-slate-400">Grade</span>
              <span className="font-black text-slate-800 bg-slate-100 px-2 py-0.5 rounded-md">{profile.grade}</span>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-600">Name</label>
              <input type="text" value={profile.name} onChange={e => setProfile({...profile, name: e.target.value})} className="w-full border-2 rounded-lg px-3 py-1.5 font-bold text-sm outline-none focus:border-indigo-400" />
            </div>
            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-600">DOB</label>
              <input type="date" value={profile.dob} onChange={e => {
                  setProfile({...profile, dob: e.target.value});
                }} 
                className="w-full border-2 rounded-lg px-3 py-1.5 font-bold text-sm outline-none focus:border-indigo-400" />
            </div>
            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-600">Age</label>
              <input type="number" value={profile.age} onChange={e => setProfile({...profile, age: e.target.value})} className="w-full border-2 rounded-lg px-3 py-1.5 font-bold text-sm outline-none focus:border-indigo-400" />
            </div>
            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-600">Grade</label>
              <select value={profile.grade} onChange={e => setProfile({...profile, grade: e.target.value})} className="w-full border-2 rounded-lg px-3 py-1.5 font-bold text-sm outline-none focus:border-indigo-400">
                <option value="KG">Kindergarten (KG)</option>
                <option value="Grade 1">1st Grade</option>
                <option value="Grade 2">2nd Grade</option>
                <option value="Grade 3">3rd Grade</option>
                <option value="Grade 4">4th Grade</option>
              </select>
            </div>
          </div>
        )}
      </CartoonCard>

      {/* 1. Alerts Section (If any) */}
      {report.alerts && report.alerts.length > 0 && (
        <div className="space-y-3">
          {report.alerts.map((alert, idx) => (
            <div 
              key={idx} 
              className={`flex items-start gap-3.5 p-4 rounded-2xl border-2 shadow-cartoon ${
                alert.severity === 'critical' 
                  ? 'bg-rose-50 border-rose-300 text-rose-900' 
                  : alert.severity === 'warning'
                    ? 'bg-amber-50 border-amber-300 text-amber-900'
                    : 'bg-emerald-50 border-emerald-300 text-emerald-900'
              }`}
            >
              <div className="flex-shrink-0 mt-0.5">
                {alert.severity === 'critical' ? (
                  <div className="bg-rose-500 text-white w-7 h-7 rounded-xl flex items-center justify-center font-bold border border-rose-700 shadow-cartoon-hover animate-bounce">
                    <ShieldAlert className="w-4 h-4" />
                  </div>
                ) : alert.severity === 'warning' ? (
                  <div className="bg-amber-500 text-slate-900 w-7 h-7 rounded-xl flex items-center justify-center font-bold border border-amber-700 shadow-cartoon-hover">
                    <AlertTriangle className="w-4 h-4" />
                  </div>
                ) : (
                  <div className="bg-emerald-500 text-white w-7 h-7 rounded-xl flex items-center justify-center font-bold border border-emerald-700 shadow-cartoon-hover">
                    <Award className="w-4 h-4" />
                  </div>
                )}
              </div>
              <div>
                <h4 className="font-black text-sm">{alert.title}</h4>
                <p className="text-xs font-semibold leading-relaxed mt-0.5 opacity-90">{alert.message}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* 2. Key Metrics Grid */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        
        <CartoonCard color="white" className="flex flex-col items-center justify-center text-center p-4 border-l-indigo-200">
          <span className="text-[10px] font-extrabold text-indigo-500 uppercase">Completion Rate</span>
          <span className="text-3xl font-black text-indigo-600 mt-1">{Math.round(report.completionRate * 100)}%</span>
          <span className="text-[9px] text-slate-400 font-bold uppercase mt-1">Circuit Success</span>
        </CartoonCard>

        <CartoonCard color="white" className="flex flex-col items-center justify-center text-center p-4 border-l-rose-200">
          <span className="text-[10px] font-extrabold text-rose-500 uppercase">Errors / Session</span>
          <span className="text-3xl font-black text-rose-600 mt-1">{report.errorsPerSession}</span>
          <span className="text-[9px] text-slate-400 font-bold uppercase mt-1">Avg Mistakes</span>
        </CartoonCard>

        <CartoonCard color="white" className="flex flex-col items-center justify-center text-center p-4 border-l-emerald-200">
          <span className="text-[10px] font-extrabold text-emerald-500 uppercase">Improvement Trend</span>
          <span className="text-3xl font-black text-emerald-600 mt-1">{report.improvementTrend}</span>
          <span className="text-[9px] text-slate-400 font-bold uppercase mt-1">Over 30 days</span>
        </CartoonCard>

        <CartoonCard color="white" className="flex flex-col items-center justify-center text-center p-4 border-l-amber-200">
          <span className="text-[10px] font-extrabold text-amber-500 uppercase">Engagement Score</span>
          <span className="text-3xl font-black text-amber-600 mt-1">{report.engagementScore}/100</span>
          <span className="text-[9px] text-slate-400 font-bold uppercase mt-1">Excellent</span>
        </CartoonCard>

        <CartoonCard color="white" className="flex flex-col items-center justify-center text-center p-4 border-l-science-200">
          <span className="text-[10px] font-extrabold text-science-500 uppercase">Learning Speed</span>
          <span className="text-3xl font-black text-science-600 mt-1">{report.learningSpeed}</span>
          <span className="text-[9px] text-slate-400 font-bold uppercase mt-1">Pacing</span>
        </CartoonCard>

      </div>

      {/* 3. Trends Graphs */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Weekly trends panel */}
        <CartoonCard color="white" className="flex flex-col justify-between min-h-[260px]">
          <div className="flex items-center justify-between border-b border-slate-100 pb-2 mb-4">
            <h4 className="font-extrabold text-sm text-slate-800 flex items-center gap-1">
              <BarChart2 className="w-4 h-4 text-indigo-500" /> Weekly Activity Trends
            </h4>
            <span className="text-[9px] font-black uppercase text-slate-400 bg-slate-100 px-2 py-0.5 rounded-md">Assigned vs Done</span>
          </div>

          {report.weeklyTrends && report.weeklyTrends.length > 0 ? (
            <div className="flex-1 flex items-end justify-around h-36 pt-4 border-b-2 border-slate-100">
              {report.weeklyTrends.map((w, idx) => (
                <div key={idx} className="flex flex-col items-center w-12 group relative">
                  {/* Tooltip on hover */}
                  <div className="absolute bottom-full mb-1 bg-slate-900 text-white text-[9px] p-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10 w-24 text-center font-bold">
                    Assigned: {w.assigned}<br />
                    Done: {w.completed}<br />
                    Skipped: {w.skipped}
                  </div>

                  {/* Vertical bar stack */}
                  <div className="flex gap-1 items-end w-full justify-center">
                    {/* Assigned bar */}
                    <div 
                      style={{ height: `${Math.max(12, w.assigned * 15)}px` }} 
                      className="w-3 bg-indigo-200 rounded-t-md border-x border-t border-indigo-400"
                    />
                    {/* Completed bar */}
                    <div 
                      style={{ height: `${Math.max(12, w.completed * 15)}px` }} 
                      className="w-3 bg-emerald-400 rounded-t-md border-x border-t border-emerald-600 shadow-sm"
                    />
                    {/* Skipped bar */}
                    <div 
                      style={{ height: `${Math.max(12, w.skipped * 15)}px` }} 
                      className="w-3 bg-rose-400 rounded-t-md border-x border-t border-rose-600"
                    />
                  </div>

                  {/* Axis label */}
                  <span className="text-[9px] font-bold text-slate-500 uppercase tracking-tight mt-2 rotate-12">{w.week.split('-')[1]}</span>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex-1 flex items-center justify-center text-slate-400 font-bold text-xs">No weekly data logged yet</div>
          )}
        </CartoonCard>

        {/* Monthly trends panel */}
        <CartoonCard color="white" className="flex flex-col justify-between min-h-[260px]">
          <div className="flex items-center justify-between border-b border-slate-100 pb-2 mb-4">
            <h4 className="font-extrabold text-sm text-slate-800 flex items-center gap-1">
              <BarChart2 className="w-4 h-4 text-emerald-500" /> Monthly Break Tally
            </h4>
            <span className="text-[9px] font-black uppercase text-slate-400 bg-slate-100 px-2 py-0.5 rounded-md">Engagement summary</span>
          </div>

          {report.monthlyTrends && report.monthlyTrends.length > 0 ? (
            <div className="flex-1 flex items-end justify-around h-36 pt-4 border-b-2 border-slate-100">
              {report.monthlyTrends.map((m, idx) => (
                <div key={idx} className="flex flex-col items-center w-16 group relative">
                  
                  <div className="absolute bottom-full mb-1 bg-slate-900 text-white text-[9px] p-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10 w-24 text-center font-bold">
                    Assigned: {m.assigned}<br />
                    Done: {m.completed}<br />
                    Skipped: {m.skipped}
                  </div>

                  <div className="flex gap-1.5 items-end w-full justify-center">
                    <div 
                      style={{ height: `${Math.max(12, m.assigned * 10)}px` }} 
                      className="w-4 bg-indigo-200 rounded-t-md border-x border-t border-indigo-400"
                    />
                    <div 
                      style={{ height: `${Math.max(12, m.completed * 10)}px` }} 
                      className="w-4 bg-emerald-400 rounded-t-md border-x border-t border-emerald-600 shadow-sm"
                    />
                    <div 
                      style={{ height: `${Math.max(12, m.skipped * 10)}px` }} 
                      className="w-4 bg-rose-400 rounded-t-md border-x border-t border-rose-600"
                    />
                  </div>

                  <span className="text-[9px] font-bold text-slate-500 uppercase tracking-tight mt-2">{m.month}</span>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex-1 flex items-center justify-center text-slate-400 font-bold text-xs">No monthly data logged yet</div>
          )}
        </CartoonCard>

      </div>
        </>
      )}

      {mode === 'parent' && (
        <>
          {/* MathMentor AI Insights Section */}
      <CartoonCard color="white" className="p-6 border-l-8 border-l-purple-500">
        <div className="flex flex-col md:flex-row md:items-center justify-between border-b-2 border-slate-100 pb-4 mb-6 gap-4">
          <div className="flex items-center gap-3">
            <div className="bg-purple-100 p-2.5 rounded-2xl border-2 border-purple-300 text-purple-700 shadow-cartoon-sm">
              <Calculator className="w-6 h-6 animate-pulse" />
            </div>
            <div>
              <h4 className="font-black text-xl text-slate-800 flex items-center gap-2">
                MathMentor AI Insights 🦉
              </h4>
              <p className="text-xs font-bold text-slate-400">Adaptive Grade-Wise Mathematics Analytics</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-black uppercase text-purple-600 bg-purple-50 px-3 py-1.5 rounded-xl border-2 border-purple-200 shadow-cartoon-sm flex items-center gap-1 flex-shrink-0">
              <Sparkles className="w-3.5 h-3.5" /> Level {report.math?.level || 1} Explorer
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Column 1: Progress & Performance */}
          <div className="space-y-4">
            <h5 className="font-extrabold text-sm text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
              <Percent className="w-4 h-4 text-purple-500" /> Overall Accuracy
            </h5>
            <div className="bg-slate-50 border-2 border-slate-200 rounded-2xl p-4 flex flex-col justify-center">
              <div className="flex items-baseline justify-between mb-2">
                <span className="text-4xl font-black text-purple-600">
                  {report.math?.accuracy || 80}%
                </span>
                <span className="text-[10px] font-extrabold text-emerald-600 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full flex items-center gap-0.5">
                  <TrendingUp className="w-3 h-3" /> {report.math?.progressTrend || '+10%'}
                </span>
              </div>
              <div className="w-full bg-slate-200 h-3.5 rounded-full border border-slate-300 overflow-hidden">
                <div 
                  className="bg-purple-500 h-full rounded-full border-r border-purple-600 transition-all duration-500"
                  style={{ width: `${report.math?.accuracy || 80}%` }}
                />
              </div>
              <span className="text-[10px] text-slate-400 font-bold uppercase mt-2">
                Based on recently answered questions
              </span>
            </div>
          </div>

          {/* Column 2: Stats Grid */}
          <div className="space-y-4">
            <h5 className="font-extrabold text-sm text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
              <TrendingUp className="w-4 h-4 text-purple-500" /> Learning Stats
            </h5>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-slate-50 border-2 border-slate-200 rounded-2xl p-3 text-center">
                <span className="block text-[10px] font-extrabold text-slate-400 uppercase">Avg Speed</span>
                <span className="text-xl font-black text-slate-800 flex items-center justify-center gap-1 mt-1">
                  <Clock className="w-4 h-4 text-amber-500" /> {report.math?.timePerQuestion || 12}s
                </span>
                <span className="text-[9px] text-slate-400 font-bold">Per Question</span>
              </div>
              <div className="bg-slate-50 border-2 border-slate-200 rounded-2xl p-3 text-center">
                <span className="block text-[10px] font-extrabold text-slate-400 uppercase">Math Stars</span>
                <span className="text-xl font-black text-slate-800 flex items-center justify-center gap-1 mt-1">
                  <Star className="w-4 h-4 fill-amber-400 text-amber-500" /> {report.math?.stars || 15}
                </span>
                <span className="text-[9px] text-slate-400 font-bold">Total Earned</span>
              </div>
              <div className="bg-slate-50 border-2 border-slate-200 rounded-2xl p-3 text-center col-span-2">
                <span className="block text-[10px] font-extrabold text-slate-400 uppercase">Badges Unlocked</span>
                <span className="text-xl font-black text-purple-600 flex items-center justify-center gap-1.5 mt-1">
                  <Award className="w-5 h-5 text-purple-500" /> {report.math?.badgesCount || 0} Badges
                </span>
              </div>
            </div>
          </div>

          {/* Column 3: Struggling / Learning Focus */}
          <div className="space-y-4">
            <h5 className="font-extrabold text-sm text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
              <BookOpen className="w-4 h-4 text-purple-500" /> Learning Focus
            </h5>
            <div className="bg-slate-50 border-2 border-slate-200 rounded-2xl p-4 flex flex-col justify-between h-[116px]">
              <div>
                <span className="block text-[10px] font-extrabold text-slate-400 uppercase mb-2">Needs Practice In:</span>
                {report.math?.weakTopics && report.math.weakTopics.length > 0 ? (
                  <div className="flex flex-wrap gap-1.5 max-h-16 overflow-y-auto pr-1">
                    {report.math.weakTopics.map((topic, i) => (
                      <span key={i} className="text-[9px] font-extrabold text-purple-700 bg-purple-50 border border-purple-200 px-2 py-1 rounded-lg">
                        {topic}
                      </span>
                    ))}
                  </div>
                ) : (
                  <div className="flex items-center gap-1.5 text-emerald-600 font-bold text-xs py-1">
                    <CheckCircle className="w-4 h-4 flex-shrink-0" />
                    <span>No weak topics! Doing great! 🌟</span>
                  </div>
                )}
              </div>
              <span className="text-[9px] text-slate-400 font-bold uppercase mt-1">
                Updated in real-time by MathMentor AI
              </span>
            </div>
          </div>
        </div>
      </CartoonCard>

      {/* LogicLeap AI Insights Section */}
      <CartoonCard color="white" className="p-6 border-l-8 border-l-teal-500">
        <div className="flex flex-col md:flex-row md:items-center justify-between border-b-2 border-slate-100 pb-4 mb-6 gap-4">
          <div className="flex items-center gap-3">
            <div className="bg-teal-100 p-2.5 rounded-2xl border-2 border-teal-300 text-teal-700 shadow-cartoon-sm">
              <Brain className="w-6 h-6 animate-pulse" />
            </div>
            <div>
              <h4 className="font-black text-xl text-slate-800 flex items-center gap-2">
                LogicLeap AI Insights 🧠
              </h4>
              <p className="text-xs font-bold text-slate-400">Adaptive Cognitive & Logical Reasoning Analytics</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-black uppercase text-teal-600 bg-teal-50 px-3 py-1.5 rounded-xl border-2 border-teal-200 shadow-cartoon-sm flex items-center gap-1 flex-shrink-0">
              <Sparkles className="w-3.5 h-3.5" /> Level {report.logic?.level || 1} Thinking
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Column 1: Progress & Performance */}
          <div className="space-y-4">
            <h5 className="font-extrabold text-sm text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
              <Percent className="w-4 h-4 text-teal-500" /> Reasoning Accuracy
            </h5>
            <div className="bg-slate-50 border-2 border-slate-200 rounded-2xl p-4 flex flex-col justify-center">
              <div className="flex items-baseline justify-between mb-2">
                <span className="text-4xl font-black text-teal-600">
                  {report.logic?.accuracy || 82}%
                </span>
                <span className="text-[10px] font-extrabold text-emerald-600 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full flex items-center gap-0.5">
                  <TrendingUp className="w-3 h-3" /> {report.logic?.progressTrend || '+12%'}
                </span>
              </div>
              <div className="w-full bg-slate-200 h-3.5 rounded-full border border-slate-300 overflow-hidden">
                <div 
                  className="bg-teal-500 h-full rounded-full border-r border-teal-600 transition-all duration-500"
                  style={{ width: `${report.logic?.accuracy || 82}%` }}
                />
              </div>
              <span className="text-[10px] text-slate-400 font-bold uppercase mt-2">
                Based on completed logic puzzles
              </span>
            </div>
          </div>

          {/* Column 2: Stats Grid */}
          <div className="space-y-4">
            <h5 className="font-extrabold text-sm text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
              <TrendingUp className="w-4 h-4 text-teal-500" /> Cognitive Stats
            </h5>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-slate-50 border-2 border-slate-200 rounded-2xl p-3 text-center">
                <span className="block text-[10px] font-extrabold text-slate-400 uppercase">Avg Speed</span>
                <span className="text-xl font-black text-slate-800 flex items-center justify-center gap-1 mt-1">
                  <Clock className="w-4 h-4 text-amber-500" /> {report.logic?.timePerQuestion || 15}s
                </span>
                <span className="text-[9px] text-slate-400 font-bold">Per Challenge</span>
              </div>
              <div className="bg-slate-50 border-2 border-slate-200 rounded-2xl p-3 text-center">
                <span className="block text-[10px] font-extrabold text-slate-400 uppercase">Logic Stars</span>
                <span className="text-xl font-black text-slate-800 flex items-center justify-center gap-1 mt-1">
                  <Star className="w-4 h-4 fill-amber-400 text-amber-500" /> {report.logic?.stars || 20}
                </span>
                <span className="text-[9px] text-slate-400 font-bold">Total Earned</span>
              </div>
              <div className="bg-slate-50 border-2 border-slate-200 rounded-2xl p-3 text-center col-span-2">
                <span className="block text-[10px] font-extrabold text-slate-400 uppercase">Cognitive Badges</span>
                <span className="text-xl font-black text-teal-600 flex items-center justify-center gap-1.5 mt-1">
                  <Award className="w-5 h-5 text-teal-500" /> {report.logic?.badgesCount || 0} Badges
                </span>
              </div>
            </div>
          </div>

          {/* Column 3: Struggling / Learning Focus */}
          <div className="space-y-4">
            <h5 className="font-extrabold text-sm text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
              <BookOpen className="w-4 h-4 text-teal-500" /> Logic Focus
            </h5>
            <div className="bg-slate-50 border-2 border-slate-200 rounded-2xl p-4 flex flex-col justify-between h-[116px]">
              <div>
                <span className="block text-[10px] font-extrabold text-slate-400 uppercase mb-2">Practice Recommended:</span>
                {report.logic?.weakTopics && report.logic.weakTopics.length > 0 ? (
                  <div className="flex flex-wrap gap-1.5 max-h-16 overflow-y-auto pr-1">
                    {report.logic.weakTopics.map((topic, i) => (
                      <span key={i} className="text-[9px] font-extrabold text-teal-700 bg-teal-50 border border-teal-200 px-2 py-1 rounded-lg">
                        {topic}
                      </span>
                    ))}
                  </div>
                ) : (
                  <div className="flex items-center gap-1.5 text-emerald-600 font-bold text-xs py-1">
                    <CheckCircle className="w-4 h-4 flex-shrink-0" />
                    <span>All reasoning targets met! 🌟</span>
                  </div>
                )}
              </div>
              <span className="text-[9px] text-slate-400 font-bold uppercase mt-1">
                Updated in real-time by LogicLeap AI
              </span>
            </div>
          </div>
        </div>
      </CartoonCard>
        </>
      )}
      
    </div>
  );
}

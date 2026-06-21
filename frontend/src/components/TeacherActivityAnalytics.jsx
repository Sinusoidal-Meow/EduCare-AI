import React, { useState, useEffect } from 'react';
import { Users, GraduationCap, TrendingUp, AlertOctagon, CheckCircle2, Award, Filter, RefreshCw, BarChart3, ListOrdered, Calculator, Percent, Clock, Sparkles, BookOpen, Brain, Star } from 'lucide-react';
import { API_BASE } from '../config';
import { CartoonCard, CartoonButton } from './Reusables';

export default function TeacherActivityAnalytics() {
  const [selectedGrade, setSelectedGrade] = useState('All');
  const [analytics, setAnalytics] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const grades = ['All', 'KG', 'Grade 1', 'Grade 2', 'Grade 3', 'Grade 4'];

  useEffect(() => {
    async function fetchAnalytics() {
      try {
        setLoading(true);
        const gradeParam = selectedGrade === 'All' ? '' : `?grade=${selectedGrade}`;
        const response = await fetch(`${API_BASE}/activity/teacher-analytics${gradeParam}`);
        if (response.ok) {
          const data = await response.json();
          setAnalytics(data);
        } else {
          throw new Error('Failed to load teacher analytics');
        }
      } catch (err) {
        console.warn('API teacher analytics offline, loading mock data...');
        setMockAnalytics();
      } finally {
        setLoading(false);
      }
    }
    fetchAnalytics();
  }, [selectedGrade]);

  const setMockAnalytics = () => {
    setAnalytics({
      classParticipation: 78,
      difficultyDistribution: [
        { grade: 'KG', assigned: 15, completed: 14, skipped: 1 },
        { grade: 'Grade 1', assigned: 20, completed: 18, skipped: 2 },
        { grade: 'Grade 2', assigned: 25, completed: 20, skipped: 5 },
        { grade: 'Grade 3', assigned: 18, completed: 12, skipped: 6 },
        { grade: 'Grade 4', assigned: 12, completed: 6, skipped: 6 }
      ],
      activityTrends: [
        { date: '06-12', assigned: 10, completed: 8, skipped: 2 },
        { date: '06-13', assigned: 12, completed: 9, skipped: 3 },
        { date: '06-14', assigned: 15, completed: 12, skipped: 3 },
        { date: '06-15', assigned: 20, completed: 16, skipped: 4 },
        { date: '06-16', assigned: 25, completed: 21, skipped: 4 },
        { date: '06-17', assigned: 30, completed: 25, skipped: 5 }
      ],
      commonMistakes: [
        { activityId: 'err_short_circuit', title: 'Short Circuiting', emoji: '🔥', category: 'safety', count: 24 },
        { activityId: 'err_open_switch', title: 'Forgetting to Close Switch', emoji: '🔌', category: 'logic', count: 18 },
        { activityId: 'err_no_power', title: 'Missing Power Source', emoji: '🔋', category: 'basics', count: 12 }
      ],
      skillMasteryProgress: [
        { activityId: 'skill_series', title: 'Series Circuits', emoji: '🔗', category: 'circuitry', count: 45 },
        { activityId: 'skill_conductors', title: 'Conductor Testing', emoji: '🧪', category: 'materials', count: 38 },
        { activityId: 'skill_switches', title: 'Switch Logic', emoji: '🎛️', category: 'control', count: 30 }
      ],
      studentEngagementScores: [
        { studentId: 'student_123', displayName: 'Sammy Sparks', completed: 18, assigned: 20, engagementScore: 90, badges: ['badge_sim_wizard', 'badge_circuit_master', 'badge_junior_engineer'] },
        { studentId: 'student_456', displayName: 'Alex Volt', completed: 12, assigned: 15, engagementScore: 80, badges: ['badge_junior_engineer'] },
        { studentId: 'student_789', displayName: 'Clara Circuit', completed: 8, assigned: 12, engagementScore: 66, badges: ['badge_stem_explorer'] },
        { studentId: 'student_abc', displayName: 'Leo Ohm', completed: 4, assigned: 10, engagementScore: 40, badges: [] }
      ],
      math: {
        classPerformance: 82,
        topicDifficulty: [
          { topicId: 'g3-fractions', name: 'Fractions', struggleRate: 'High' },
          { topicId: 'g4-decimals', name: 'Decimals', struggleRate: 'Medium' },
          { topicId: 'g2-time', name: 'Time & Calendar', struggleRate: 'Low' }
        ],
        studentRankings: [
          { name: 'Sammy Sparks', accuracy: 85, speedSeconds: 10, stars: 35 },
          { name: 'Alex Volt', accuracy: 88, speedSeconds: 12, stars: 30 },
          { name: 'Clara Circuit', accuracy: 82, speedSeconds: 15, stars: 25 },
          { name: 'Leo Ohm', accuracy: 75, speedSeconds: 22, stars: 15 }
        ]
      },
      logic: {
        classPerformance: 85,
        topicDifficulty: [
          { topicId: 'g3-grid-logic', name: 'Grid Logic Puzzles', struggleRate: 'High' },
          { topicId: 'g4-deduction', name: 'Logical Deduction', struggleRate: 'Medium' },
          { topicId: 'g2-directions', name: 'Direction Games', struggleRate: 'Low' }
        ],
        studentRankings: [
          { name: 'Sammy Sparks', accuracy: 82, speedSeconds: 15, stars: 20 },
          { name: 'Alex Volt', accuracy: 90, speedSeconds: 11, stars: 40 },
          { name: 'Clara Circuit', accuracy: 85, speedSeconds: 13, stars: 30 },
          { name: 'Leo Ohm', accuracy: 70, speedSeconds: 20, stars: 15 }
        ]
      }
    });
  };

  const getEngagementBadge = (score) => {
    if (score >= 80) return { label: 'High 🔥', color: 'bg-emerald-100 border-emerald-300 text-emerald-800' };
    if (score >= 50) return { label: 'Medium ⚡', color: 'bg-amber-100 border-amber-300 text-amber-800' };
    return { label: 'Low 🥱', color: 'bg-rose-100 border-rose-300 text-rose-800' };
  };

  const getBadgeEmoji = (badgeId) => {
    if (badgeId === 'badge_junior_engineer') return '🛠️';
    if (badgeId === 'badge_circuit_master') return '👑';
    if (badgeId === 'badge_stem_explorer') return '🌍';
    if (badgeId === 'badge_sim_wizard') return '🧙‍♂️';
    return '🏆';
  };

  const getBadgeName = (badgeId) => {
    if (badgeId === 'badge_junior_engineer') return 'Junior Engineer';
    if (badgeId === 'badge_circuit_master') return 'Circuit Master';
    if (badgeId === 'badge_stem_explorer') return 'STEM Explorer';
    if (badgeId === 'badge_sim_wizard') return 'Simulator Wizard';
    return 'Badge';
  };

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-slate-400">
        <div className="w-12 h-12 border-4 border-purple-500 border-t-transparent rounded-full animate-spin mb-4"></div>
        <span className="font-bold text-xs tracking-wider uppercase animate-pulse text-purple-600">Gathering Classroom Metrics...</span>
      </div>
    );
  }

  if (!analytics) return null;

  const difficultyDistribution = analytics.difficultyDistribution || analytics.gradeParticipation || [];
  const skillMasteryProgress = analytics.skillMasteryProgress || analytics.mostCompletedActivities || [];
  const commonMistakes = analytics.commonMistakes || analytics.mostSkippedActivities || [];

  return (
    <div className="space-y-8 max-w-7xl mx-auto px-4 py-6">
      
      {/* Top Header Card */}
      <CartoonCard color="white" className="bg-gradient-to-r from-purple-50 to-indigo-50 border-b-6 border-slate-800">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="bg-purple-600 text-white w-14 h-14 rounded-3xl flex items-center justify-center border-2 border-slate-800 shadow-cartoon animate-bounce-slow">
              <GraduationCap className="w-8 h-8" />
            </div>
            <div>
              <h2 className="text-3xl font-black text-slate-800 tracking-wide">Teacher Dashboard Analytics</h2>
              <p className="text-slate-500 text-xs font-extrabold uppercase tracking-widest mt-0.5">
                STEM Lab Telemetry & Integrations
              </p>
            </div>
          </div>
          
          {/* Grade Filter Bar */}
          <div className="flex items-center gap-2 bg-white border-2 border-slate-800 p-1.5 rounded-2xl shadow-cartoon">
            <Filter className="w-4 h-4 text-slate-400 ml-2" />
            <div className="flex gap-1">
              {grades.map(grade => (
                <button
                  key={grade}
                  onClick={() => setSelectedGrade(grade)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-extrabold transition-all border ${
                    selectedGrade === grade 
                      ? 'bg-purple-600 border-slate-800 text-white shadow-cartoon-hover' 
                      : 'border-transparent text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  {grade}
                </button>
              ))}
            </div>
          </div>
        </div>
      </CartoonCard>

      {/* Main KPI Row */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        
        {/* Class Participation Card */}
        <CartoonCard color="white" className="flex flex-col items-center justify-center text-center p-6 border-l-8 border-l-purple-500">
          <span className="text-xs font-extrabold text-slate-400 uppercase tracking-wider">Class Participation</span>
          <div className="relative w-28 h-28 my-3 flex items-center justify-center">
            <svg className="w-full h-full transform -rotate-90">
              <circle cx="56" cy="56" r="46" className="stroke-slate-100" strokeWidth="8" fill="transparent" />
              <circle 
                cx="56" 
                cy="56" 
                r="46" 
                className="stroke-purple-500 transition-all duration-1000" 
                strokeWidth="8" 
                fill="transparent" 
                strokeDasharray="289"
                strokeDashoffset={289 - (289 * analytics.classParticipation) / 100}
              />
            </svg>
            <span className="absolute text-2xl font-black text-slate-800">{analytics.classParticipation}%</span>
          </div>
          <span className="text-[10px] text-slate-500 font-extrabold uppercase">Target Rate: &gt;80%</span>
        </CartoonCard>

        {/* Total Assigned vs Completed KPI */}
        <CartoonCard color="white" className="flex flex-col justify-between p-6">
          <span className="text-xs font-extrabold text-slate-400 uppercase tracking-wider block mb-2">Classroom Session Totals</span>
          <div className="space-y-3">
            <div className="flex justify-between items-center bg-indigo-50 border border-indigo-200 rounded-2xl p-2.5">
              <span className="text-xs font-black text-indigo-700">Assigned Labs:</span>
              <span className="text-lg font-black text-slate-800">
                {difficultyDistribution.reduce((sum, g) => sum + g.assigned, 0)}
              </span>
            </div>
            <div className="flex justify-between items-center bg-emerald-50 border border-emerald-200 rounded-2xl p-2.5">
              <span className="text-xs font-black text-emerald-700">Completed Labs:</span>
              <span className="text-lg font-black text-slate-800">
                {difficultyDistribution.reduce((sum, g) => sum + g.completed, 0)}
              </span>
            </div>
          </div>
        </CartoonCard>

        {/* Most Popular Category */}
        <CartoonCard color="white" className="flex flex-col justify-between p-6">
          <span className="text-xs font-extrabold text-slate-400 uppercase tracking-wider block mb-2">Top Mastered Skill</span>
          {skillMasteryProgress && skillMasteryProgress.length > 0 ? (
            <div className="text-center py-2">
              <span className="text-5xl select-none block mb-1">{skillMasteryProgress[0].emoji}</span>
              <h4 className="font-extrabold text-sm text-slate-800 leading-snug">{skillMasteryProgress[0].title}</h4>
              <span className="text-[10px] bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full border border-emerald-300 font-bold uppercase mt-1 inline-block">
                {skillMasteryProgress[0].count} Mastered
              </span>
            </div>
          ) : (
            <div className="text-slate-400 text-xs font-bold text-center">No completions logged yet.</div>
          )}
        </CartoonCard>

        {/* Most Skipped Alert Card */}
        <CartoonCard color="white" className="flex flex-col justify-between p-6">
          <span className="text-xs font-extrabold text-slate-400 uppercase tracking-wider block mb-2">Common Mistake Alert</span>
          {commonMistakes && commonMistakes.length > 0 ? (
            <div className="text-center py-2">
              <span className="text-5xl select-none block mb-1">{commonMistakes[0].emoji}</span>
              <h4 className="font-extrabold text-sm text-slate-800 leading-snug">{commonMistakes[0].title}</h4>
              <span className="text-[10px] bg-rose-100 text-rose-800 px-2 py-0.5 rounded-full border border-rose-300 font-bold uppercase mt-1 inline-block">
                {commonMistakes[0].count} Occurrences
              </span>
            </div>
          ) : (
            <div className="text-slate-400 text-xs font-bold text-center">No mistakes logged yet.</div>
          )}
        </CartoonCard>

      </div>

      {/* Charts & Trends Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Grade Participation Chart */}
        <CartoonCard color="white" className="flex flex-col justify-between">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-4">
            <h4 className="font-extrabold text-sm text-slate-800 flex items-center gap-1.5">
              <BarChart3 className="w-4 h-4 text-purple-500" /> Difficulty Distribution Breakdowns
            </h4>
            <span className="text-[9px] font-black uppercase text-slate-400 bg-slate-100 px-2.5 py-0.5 rounded-md border">Assigned vs Completed</span>
          </div>

          <div className="flex-1 flex items-end justify-around h-44 pt-4 border-b-2 border-slate-150">
            {difficultyDistribution.map((gp, idx) => (
              <div key={idx} className="flex flex-col items-center w-12 group relative">
                <div className="absolute bottom-full mb-1 bg-slate-900 text-white text-[9px] p-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10 w-24 text-center font-bold">
                  Assigned: {gp.assigned}<br />
                  Done: {gp.completed}<br />
                  Skipped: {gp.skipped}
                </div>
                <div className="flex gap-1 items-end w-full justify-center">
                  <div style={{ height: `${Math.max(8, gp.assigned * 5)}px` }} className="w-3 bg-purple-200 border-x border-t border-purple-400 rounded-t-sm" />
                  <div style={{ height: `${Math.max(8, gp.completed * 5)}px` }} className="w-3 bg-emerald-400 border-x border-t border-emerald-600 rounded-t-sm shadow-sm" />
                </div>
                <span className="text-[9px] font-bold text-slate-500 uppercase mt-2">{gp.grade}</span>
              </div>
            ))}
          </div>
        </CartoonCard>

        {/* Daily Trends Chart */}
        <CartoonCard color="white" className="flex flex-col justify-between">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-4">
            <h4 className="font-extrabold text-sm text-slate-800 flex items-center gap-1.5">
              <TrendingUp className="w-4 h-4 text-emerald-500" /> Daily Activity Trends
            </h4>
            <span className="text-[9px] font-black uppercase text-slate-400 bg-slate-100 px-2.5 py-0.5 rounded-md border">Daily break volume</span>
          </div>

          <div className="flex-1 flex items-end justify-around h-44 pt-4 border-b-2 border-slate-150">
            {analytics.activityTrends.map((trend, idx) => (
              <div key={idx} className="flex flex-col items-center w-14 group relative">
                <div className="absolute bottom-full mb-1 bg-slate-900 text-white text-[9px] p-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10 w-24 text-center font-bold">
                  Assigned: {trend.assigned}<br />
                  Completed: {trend.completed}<br />
                  Skipped: {trend.skipped}
                </div>
                <div className="flex gap-1 items-end w-full justify-center">
                  <div style={{ height: `${Math.max(8, trend.assigned * 4)}px` }} className="w-3 bg-indigo-200 border-x border-t border-indigo-400 rounded-t-sm" />
                  <div style={{ height: `${Math.max(8, trend.completed * 4)}px` }} className="w-3 bg-emerald-400 border-x border-t border-emerald-600 rounded-t-sm shadow-sm" />
                </div>
                <span className="text-[9px] font-bold text-slate-500 mt-2">{trend.date}</span>
              </div>
            ))}
          </div>
        </CartoonCard>

      </div>

      {/* Rankings & Leaderboards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Rankings column (Most Completed & Skipped) */}
        <div className="lg:col-span-1 space-y-6">
          
          {/* Most Completed */}
          <CartoonCard color="white" className="p-4">
            <h4 className="font-black text-sm text-slate-800 flex items-center gap-2 mb-3 border-b pb-2">
              <ListOrdered className="w-4 h-4 text-emerald-500" /> Skill Mastery Progress
            </h4>
            <div className="space-y-2.5">
              {skillMasteryProgress.map((act, i) => (
                <div key={act.activityId} className="flex items-center justify-between p-2 hover:bg-slate-50 rounded-xl border border-transparent hover:border-slate-100 transition-all">
                  <div className="flex items-center gap-2.5">
                    <span className="text-2xl select-none">{act.emoji}</span>
                    <div>
                      <h5 className="font-bold text-xs text-slate-700 leading-tight">{act.title}</h5>
                      <span className="text-[9px] text-slate-400 font-extrabold uppercase">{act.category}</span>
                    </div>
                  </div>
                  <span className="text-xs bg-emerald-100 text-emerald-800 font-black px-2.5 py-0.5 rounded-full">
                    {act.count}
                  </span>
                </div>
              ))}
            </div>
          </CartoonCard>

          {/* Most Skipped */}
          <CartoonCard color="white" className="p-4">
            <h4 className="font-black text-sm text-slate-800 flex items-center gap-2 mb-3 border-b pb-2">
              <AlertOctagon className="w-4 h-4 text-rose-500 animate-pulse" /> Common Mistakes
            </h4>
            <div className="space-y-2.5">
              {commonMistakes.map((act, i) => (
                <div key={act.activityId} className="flex items-center justify-between p-2 hover:bg-slate-50 rounded-xl border border-transparent hover:border-slate-100 transition-all">
                  <div className="flex items-center gap-2.5">
                    <span className="text-2xl select-none">{act.emoji}</span>
                    <div>
                      <h5 className="font-bold text-xs text-slate-700 leading-tight">{act.title}</h5>
                      <span className="text-[9px] text-slate-400 font-extrabold uppercase">{act.category}</span>
                    </div>
                  </div>
                  <span className="text-xs bg-rose-100 text-rose-800 font-black px-2.5 py-0.5 rounded-full">
                    {act.count}
                  </span>
                </div>
              ))}
            </div>
          </CartoonCard>

        </div>

        {/* Student Engagement Leaderboard */}
        <div className="lg:col-span-2">
          <CartoonCard color="white" className="h-full">
            <div className="flex justify-between items-center border-b border-slate-100 pb-3 mb-4">
              <h4 className="font-black text-base text-slate-800 flex items-center gap-2">
                <Users className="w-5 h-5 text-indigo-500 animate-pulse" /> Student Engagement Scores
              </h4>
              <span className="text-[9px] font-black uppercase text-slate-400 bg-slate-100 px-2 py-0.5 rounded-md border">Leaderboard</span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs font-bold text-slate-600">
                <thead>
                  <tr className="border-b border-slate-100 text-[10px] text-slate-400 uppercase tracking-widest">
                    <th className="pb-2">Student</th>
                    <th className="pb-2">Assigned</th>
                    <th className="pb-2">Completed</th>
                    <th className="pb-2">Engagement</th>
                    <th className="pb-2">Badges Unlocked</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  {analytics.studentEngagementScores.map(student => {
                    const badge = getEngagementBadge(student.engagementScore);
                    return (
                      <tr key={student.studentId} className="hover:bg-slate-50/50 transition-colors">
                        <td className="py-3.5 pr-2">
                          <span className="text-slate-800 font-black text-sm block">{student.displayName}</span>
                          <span className="text-[9px] text-slate-400 font-extrabold uppercase">ID: {student.studentId}</span>
                        </td>
                        <td className="py-3.5 text-slate-500">{student.assigned}</td>
                        <td className="py-3.5 text-slate-800">{student.completed}</td>
                        <td className="py-3.5">
                          <div className="flex items-center gap-1.5">
                            <span className="text-slate-800 font-black text-sm">{student.engagementScore}%</span>
                            <span className={`text-[8px] font-black uppercase px-2 py-0.5 rounded-full border ${badge.color}`}>
                              {badge.label}
                            </span>
                          </div>
                        </td>
                        <td className="py-3.5">
                          {student.badges && student.badges.length > 0 ? (
                            <div className="flex flex-wrap gap-1.5 max-w-xs">
                              {student.badges.map(badgeId => (
                                <span 
                                  key={badgeId} 
                                  title={getBadgeName(badgeId)}
                                  className="text-lg bg-indigo-50 border border-indigo-200 px-1.5 py-0.5 rounded-lg select-none cursor-help hover:scale-108 transition-all"
                                >
                                  {getBadgeEmoji(badgeId)}
                                </span>
                              ))}
                            </div>
                          ) : (
                            <span className="text-[9px] text-slate-400 font-semibold italic">No badges earned</span>
                          )}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </CartoonCard>
        </div>

      </div>

      {/* MathMentor AI Classroom Analytics Section */}
      <CartoonCard color="white" className="p-6 border-l-8 border-l-purple-500">
        <div className="flex flex-col md:flex-row md:items-center justify-between border-b-2 border-slate-100 pb-4 mb-6 gap-4">
          <div className="flex items-center gap-3">
            <div className="bg-purple-100 p-2.5 rounded-2xl border-2 border-purple-300 text-purple-700 shadow-cartoon-sm">
              <Calculator className="w-6 h-6 animate-pulse" />
            </div>
            <div>
              <h3 className="font-black text-xl text-slate-800 flex items-center gap-2">
                MathMentor Classroom Performance 🦉
              </h3>
              <p className="text-xs font-bold text-slate-400">Classroom Math Performance & Difficulty Areas</p>
            </div>
          </div>
          <div className="flex items-center gap-2 flex-shrink-0">
            <span className="text-xs font-black uppercase text-purple-600 bg-purple-50 px-3 py-1.5 rounded-xl border-2 border-purple-200 shadow-cartoon-sm flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5" /> Class Average: {analytics.math?.classPerformance || 82}%
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Column 1: Struggling Math Topics */}
          <div className="lg:col-span-1 space-y-4">
            <h4 className="font-extrabold text-sm text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
              <AlertOctagon className="w-4 h-4 text-purple-500" /> Math Difficulty Areas
            </h4>
            <div className="bg-slate-50 border-2 border-slate-200 rounded-2xl p-4 space-y-3">
              {analytics.math?.topicDifficulty && analytics.math.topicDifficulty.length > 0 ? (
                analytics.math.topicDifficulty.map((topic, i) => (
                  <div key={i} className="flex items-center justify-between bg-white border border-slate-100 p-2.5 rounded-xl hover:border-slate-200 transition-colors">
                    <div>
                      <h5 className="font-black text-xs text-slate-700">{topic.name}</h5>
                      <span className="text-[9px] text-slate-400 font-extrabold uppercase">Topic ID: {topic.topicId}</span>
                    </div>
                    <span className={`text-[8px] font-black uppercase px-2 py-0.5 rounded-full border ${
                      topic.struggleRate === 'High' 
                        ? 'bg-rose-100 border-rose-300 text-rose-800' 
                        : topic.struggleRate === 'Medium'
                          ? 'bg-amber-100 border-amber-300 text-amber-800'
                          : 'bg-emerald-100 border-emerald-300 text-emerald-800'
                    }`}>
                      {topic.struggleRate} Struggle
                    </span>
                  </div>
                ))
              ) : (
                <div className="text-slate-400 text-xs font-bold text-center py-4">No struggling topics logged yet.</div>
              )}
              <span className="block text-[9px] text-slate-400 font-bold uppercase pt-1 text-center">
                Updates dynamically based on mistake rates
              </span>
            </div>
          </div>

          {/* Columns 2 & 3: Student Math Rankings */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-extrabold text-sm text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
              <ListOrdered className="w-4 h-4 text-purple-500" /> Student Math Rankings
            </h4>
            <div className="bg-slate-50 border-2 border-slate-200 rounded-2xl p-4">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs font-bold text-slate-600">
                  <thead>
                    <tr className="border-b border-slate-200 text-[10px] text-slate-400 uppercase tracking-widest">
                      <th className="pb-2">Student Name</th>
                      <th className="pb-2">Accuracy</th>
                      <th className="pb-2">Avg Speed</th>
                      <th className="pb-2">Stars Earned</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {analytics.math?.studentRankings && analytics.math.studentRankings.length > 0 ? (
                      analytics.math.studentRankings.map((student, i) => (
                        <tr key={i} className="hover:bg-white/50 transition-colors">
                          <td className="py-2.5 flex items-center gap-2">
                            <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-black border border-slate-300 ${
                              i === 0 ? 'bg-amber-100 text-amber-800 border-amber-400' :
                              i === 1 ? 'bg-slate-100 text-slate-800 border-slate-400' :
                              i === 2 ? 'bg-orange-100 text-orange-800 border-orange-400' :
                              'bg-slate-50 text-slate-500'
                            }`}>
                              {i + 1}
                            </span>
                            <span className="text-slate-800 font-black">{student.name}</span>
                          </td>
                          <td className="py-2.5">
                            <div className="flex items-center gap-1">
                              <span className="text-slate-800 font-extrabold">{student.accuracy}%</span>
                              <div className="w-12 bg-slate-200 h-1.5 rounded-full overflow-hidden hidden sm:block">
                                <div style={{ width: `${student.accuracy}%` }} className="bg-purple-500 h-full rounded-full" />
                              </div>
                            </div>
                          </td>
                          <td className="py-2.5 text-slate-500">
                            <span className="flex items-center gap-1 font-semibold">
                              <Clock className="w-3.5 h-3.5 text-amber-500" /> {student.speedSeconds}s
                            </span>
                          </td>
                          <td className="py-2.5">
                            <span className="flex items-center gap-1 text-slate-800 font-black">
                              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-500" /> {student.stars}
                            </span>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="4" className="text-center py-4 text-slate-400 text-xs font-bold">No student ranking data.</td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </CartoonCard>

      {/* LogicLeap AI Classroom Analytics Section */}
      <CartoonCard color="white" className="p-6 border-l-8 border-l-teal-500">
        <div className="flex flex-col md:flex-row md:items-center justify-between border-b-2 border-slate-100 pb-4 mb-6 gap-4">
          <div className="flex items-center gap-3">
            <div className="bg-teal-100 p-2.5 rounded-2xl border-2 border-teal-300 text-teal-700 shadow-cartoon-sm">
              <Brain className="w-6 h-6 animate-pulse" />
            </div>
            <div>
              <h3 className="font-black text-xl text-slate-800 flex items-center gap-2">
                LogicLeap Classroom Performance 🧠
              </h3>
              <p className="text-xs font-bold text-slate-400">Classroom Logic Performance & Cognitive Focus Areas</p>
            </div>
          </div>
          <div className="flex items-center gap-2 flex-shrink-0">
            <span className="text-xs font-black uppercase text-teal-600 bg-teal-50 px-3 py-1.5 rounded-xl border-2 border-teal-200 shadow-cartoon-sm flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5" /> Class Average: {analytics.logic?.classPerformance || 85}%
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Column 1: Struggling Logic Topics */}
          <div className="lg:col-span-1 space-y-4">
            <h4 className="font-extrabold text-sm text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
              <AlertOctagon className="w-4 h-4 text-teal-500" /> Logic Difficulty Areas
            </h4>
            <div className="bg-slate-50 border-2 border-slate-200 rounded-2xl p-4 space-y-3">
              {analytics.logic?.topicDifficulty && analytics.logic.topicDifficulty.length > 0 ? (
                analytics.logic.topicDifficulty.map((topic, i) => (
                  <div key={i} className="flex items-center justify-between bg-white border border-slate-100 p-2.5 rounded-xl hover:border-slate-200 transition-colors">
                    <div>
                      <h5 className="font-black text-xs text-slate-700">{topic.name}</h5>
                      <span className="text-[9px] text-slate-400 font-extrabold uppercase">Topic ID: {topic.topicId}</span>
                    </div>
                    <span className={`text-[8px] font-black uppercase px-2 py-0.5 rounded-full border ${
                      topic.struggleRate === 'High' 
                        ? 'bg-rose-100 border-rose-300 text-rose-800' 
                        : topic.struggleRate === 'Medium'
                          ? 'bg-amber-100 border-amber-300 text-amber-800'
                          : 'bg-emerald-100 border-emerald-300 text-emerald-800'
                    }`}>
                      {topic.struggleRate} Struggle
                    </span>
                  </div>
                ))
              ) : (
                <div className="text-slate-400 text-xs font-bold text-center py-4">No struggling topics logged yet.</div>
              )}
              <span className="block text-[9px] text-slate-400 font-bold uppercase pt-1 text-center">
                Updates dynamically based on mistake rates
              </span>
            </div>
          </div>

          {/* Columns 2 & 3: Student Logic Rankings */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-extrabold text-sm text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
              <ListOrdered className="w-4 h-4 text-teal-500" /> Student Logic Rankings
            </h4>
            <div className="bg-slate-50 border-2 border-slate-200 rounded-2xl p-4">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs font-bold text-slate-600">
                  <thead>
                    <tr className="border-b border-slate-200 text-[10px] text-slate-400 uppercase tracking-widest">
                      <th className="pb-2">Student Name</th>
                      <th className="pb-2">Accuracy</th>
                      <th className="pb-2">Avg Speed</th>
                      <th className="pb-2">Stars Earned</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {analytics.logic?.studentRankings && analytics.logic.studentRankings.length > 0 ? (
                      analytics.logic.studentRankings.map((student, i) => (
                        <tr key={i} className="hover:bg-white/50 transition-colors">
                          <td className="py-2.5 flex items-center gap-2">
                            <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-black border border-slate-300 ${
                              i === 0 ? 'bg-amber-100 text-amber-800 border-amber-400' :
                              i === 1 ? 'bg-slate-100 text-slate-800 border-slate-400' :
                              i === 2 ? 'bg-orange-100 text-orange-800 border-orange-400' :
                              'bg-slate-50 text-slate-500'
                            }`}>
                              {i + 1}
                            </span>
                            <span className="text-slate-800 font-black">{student.name}</span>
                          </td>
                          <td className="py-2.5">
                            <div className="flex items-center gap-1">
                              <span className="text-slate-800 font-extrabold">{student.accuracy}%</span>
                              <div className="w-12 bg-slate-200 h-1.5 rounded-full overflow-hidden hidden sm:block">
                                <div style={{ width: `${student.accuracy}%` }} className="bg-teal-500 h-full rounded-full" />
                              </div>
                            </div>
                          </td>
                          <td className="py-2.5 text-slate-500">
                            <span className="flex items-center gap-1 font-semibold">
                              <Clock className="w-3.5 h-3.5 text-amber-500" /> {student.speedSeconds}s
                            </span>
                          </td>
                          <td className="py-2.5">
                            <span className="flex items-center gap-1 text-slate-800 font-black">
                              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-500" /> {student.stars}
                            </span>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="4" className="text-center py-4 text-slate-400 text-xs font-bold">No student ranking data.</td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </CartoonCard>

    </div>
  );
}

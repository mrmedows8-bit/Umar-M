import React, { useState } from 'react';
import {
  User,
  Lock,
  GraduationCap,
  Calendar,
  Clock,
  FileText,
  Award,
  Download,
  LogOut,
  Bell,
  CheckCircle2,
  AlertCircle,
  BookOpen,
  Search,
  Printer
} from 'lucide-react';
import {
  demoStudent,
  demoExamResults,
  demoTimetable,
  academicCalendarEvents,
  latestNotices
} from '../data/mockData';

interface StudentCornerProps {
  isLoggedIn: boolean;
  setIsLoggedIn: (status: boolean) => void;
}

export const StudentCornerPage: React.FC<StudentCornerProps> = ({ isLoggedIn, setIsLoggedIn }) => {
  const [portalType, setPortalType] = useState<'student' | 'faculty'>('student');
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [authError, setAuthError] = useState('');
  const [activeTab, setActiveTab] = useState<'timetable' | 'results' | 'calendar' | 'notices' | 'resources'>('timetable');
  const [selectedDay, setSelectedDay] = useState<string>('Monday');
  const [transcriptDownloaded, setTranscriptDownloaded] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setAuthError('');

    if (!userId.trim() || !password.trim()) {
      setAuthError('Please enter both User ID and password.');
      return;
    }

    // Accept valid credentials or demo credentials
    setIsLoggedIn(true);
  };

  const handleDemoLogin = (role: 'student' | 'faculty') => {
    setPortalType(role);
    setUserId(role === 'student' ? 'ABC2024-8842' : 'FAC-CS-102');
    setPassword('••••••••••••');
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserId('');
    setPassword('');
    setAuthError('');
  };

  const currentDaySchedule = demoTimetable.find((t) => t.day === selectedDay);

  const downloadableResources = [
    { title: 'CS401: Advanced Algorithms Lecture Notes (Prof. R. Sen)', type: 'PDF', size: '3.4 MB', date: 'Oct 04, 2026' },
    { title: 'CS404: Machine Learning Lab Assignment & Datasets', type: 'ZIP', size: '18.2 MB', date: 'Oct 08, 2026' },
    { title: 'CS402: Relational Schema Normalization Reference Handout', type: 'PDF', size: '1.8 MB', date: 'Sep 29, 2026' },
    { title: 'B.Tech CSE Semester 5 Complete Syllabus & Exam Blueprint', type: 'PDF', size: '820 KB', date: 'Aug 10, 2026' },
    { title: 'Previous 5 Years Mid-Term CIA Question Papers Repository', type: 'ZIP', size: '24.6 MB', date: 'Aug 14, 2026' },
  ];

  if (!isLoggedIn) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-md mx-auto bg-white rounded-2xl border border-slate-200 shadow-xl overflow-hidden">
          {/* Header */}
          <div className="bg-slate-900 text-white p-6 text-center space-y-2">
            <div className="w-12 h-12 bg-blue-900 text-amber-400 rounded-xl flex items-center justify-center mx-auto shadow-md">
              <GraduationCap className="w-7 h-7" />
            </div>
            <h1 className="font-serif text-2xl font-bold text-white">
              ABC College ERP Portal
            </h1>
            <p className="text-xs text-slate-300">
              Integrated Campus Management System
            </p>
          </div>

          {/* Portal Switcher */}
          <div className="p-6 space-y-6">
            <div className="grid grid-cols-2 p-1 bg-slate-100 rounded-xl text-xs font-semibold">
              <button
                type="button"
                onClick={() => setPortalType('student')}
                className={`py-2 rounded-lg transition-colors cursor-pointer ${
                  portalType === 'student'
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Student Login
              </button>
              <button
                type="button"
                onClick={() => setPortalType('faculty')}
                className={`py-2 rounded-lg transition-colors cursor-pointer ${
                  portalType === 'faculty'
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Faculty / Staff Login
              </button>
            </div>

            {authError && (
              <div className="p-3 rounded-lg bg-rose-50 border border-rose-200 text-xs text-rose-700 flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{authError}</span>
              </div>
            )}

            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  {portalType === 'student' ? 'Student Registration / Roll No.' : 'Faculty Employee Code'}
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={userId}
                    onChange={(e) => setUserId(e.target.value)}
                    placeholder={portalType === 'student' ? 'e.g. ABC2024-8842' : 'e.g. FAC-CS-102'}
                    className="w-full pl-9 pr-3 py-2 text-sm rounded-lg border border-slate-300 focus:outline-hidden focus:border-blue-900 focus:ring-1 focus:ring-blue-900"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  ERP Password
                </label>
                <div className="relative">
                  <Lock className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••••••"
                    className="w-full pl-9 pr-3 py-2 text-sm rounded-lg border border-slate-300 focus:outline-hidden focus:border-blue-900 focus:ring-1 focus:ring-blue-900"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between text-xs">
                <label className="flex items-center gap-1.5 text-slate-600">
                  <input type="checkbox" defaultChecked className="rounded border-slate-300 text-blue-900" />
                  <span>Remember Session</span>
                </label>
                <button
                  type="button"
                  onClick={() => alert('Password reset link sent to your registered college email.')}
                  className="text-blue-900 font-semibold hover:underline"
                >
                  Forgot Password?
                </button>
              </div>

              <button
                type="submit"
                className="w-full py-2.5 px-4 text-sm font-semibold rounded-lg text-white bg-blue-900 hover:bg-blue-800 transition-colors shadow-xs cursor-pointer"
              >
                Sign In to {portalType === 'student' ? 'Student Portal' : 'Faculty Portal'}
              </button>
            </form>

            {/* Quick Demo Access Trigger */}
            <div className="pt-2 border-t border-slate-100 text-center space-y-2">
              <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block">
                Quick Demonstration Access
              </span>
              <button
                type="button"
                onClick={() => handleDemoLogin('student')}
                className="w-full py-2 px-3 text-xs font-medium text-blue-900 bg-blue-50 hover:bg-blue-100 border border-blue-200 rounded-lg transition-colors cursor-pointer"
              >
                One-Click Demo Student Login (Devansh Sharma, CSE)
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Student Profile Ribbon */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-xs p-6 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-2xl bg-blue-900 text-amber-400 flex items-center justify-center font-bold text-xl shadow-md shrink-0">
            DS
          </div>
          <div className="space-y-0.5">
            <div className="flex items-center gap-2">
              <h2 className="font-serif text-2xl font-bold text-slate-900">
                {demoStudent.name}
              </h2>
              <span className="px-2 py-0.5 bg-emerald-100 text-emerald-800 text-[10px] font-bold rounded-md">
                Active Student
              </span>
            </div>
            <p className="text-xs text-slate-500 font-mono">
              Roll No: {demoStudent.rollNo} · {demoStudent.program}
            </p>
            <p className="text-xs text-slate-600">
              Semester: {demoStudent.semester} · Faculty Advisor: {demoStudent.advisor}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-6 border-t md:border-t-0 md:border-l border-slate-100 pt-4 md:pt-0 md:pl-6">
          <div className="text-center">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
              Cumulative CGPA
            </span>
            <span className="font-serif text-2xl font-bold text-blue-900 tabular-nums">
              {demoStudent.cgpa} / 10
            </span>
          </div>
          <div className="text-center">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
              Semester Attendance
            </span>
            <span className="font-serif text-2xl font-bold text-emerald-600 tabular-nums">
              {demoStudent.attendance}
            </span>
          </div>
          <button
            onClick={handleLogout}
            className="p-2 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-xl transition-colors cursor-pointer"
            title="Log out of student session"
          >
            <LogOut className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Nav Tabs Bar */}
      <div className="flex items-center gap-2 p-1.5 bg-slate-100 rounded-xl overflow-x-auto">
        {[
          { id: 'timetable', label: 'Class Timetable', icon: Clock },
          { id: 'results', label: 'Exam Results', icon: Award },
          { id: 'calendar', label: 'Academic Calendar', icon: Calendar },
          { id: 'notices', label: 'Official Circulars', icon: Bell },
          { id: 'resources', label: 'Study Resources', icon: BookOpen },
        ].map((tab) => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-semibold transition-colors whitespace-nowrap cursor-pointer ${
                activeTab === tab.id
                  ? 'bg-white text-blue-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Tab 1: Timetable */}
      {activeTab === 'timetable' && (
        <div className="bg-white rounded-2xl border border-slate-200 shadow-xs p-6 space-y-6">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <h3 className="font-serif text-xl font-bold text-slate-900">
                Weekly Class Schedule · Semester 5
              </h3>
              <p className="text-xs text-slate-500">
                Lectures, laboratory experiments, and research colloquiums.
              </p>
            </div>

            {/* Day Selector */}
            <div className="flex gap-1 bg-slate-100 p-1 rounded-lg">
              {demoTimetable.map((t) => (
                <button
                  key={t.day}
                  onClick={() => setSelectedDay(t.day)}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
                    selectedDay === t.day
                      ? 'bg-white text-blue-900 shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {t.day.slice(0, 3)}
                </button>
              ))}
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-50 text-slate-500 font-semibold border-y border-slate-200">
                <tr>
                  <th className="py-3 px-4">Period Time</th>
                  <th className="py-3 px-4">Course / Subject Name</th>
                  <th className="py-3 px-4">Lecture Room / Lab</th>
                  <th className="py-3 px-4">Faculty Instructor</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                {currentDaySchedule?.periods.map((p, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-3.5 px-4 font-mono font-medium text-slate-900">{p.time}</td>
                    <td className="py-3.5 px-4 font-semibold text-blue-950">{p.subject}</td>
                    <td className="py-3.5 px-4">{p.room}</td>
                    <td className="py-3.5 px-4 text-slate-500">{p.faculty}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Tab 2: Examination Results */}
      {activeTab === 'results' && (
        <div className="bg-white rounded-2xl border border-slate-200 shadow-xs p-6 space-y-6">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <h3 className="font-serif text-xl font-bold text-slate-900">
                Controller of Examinations · Academic Transcripts
              </h3>
              <p className="text-xs text-slate-500">
                Autonomous Semester Grade Point Averages & Credit Records.
              </p>
            </div>

            <button
              onClick={() => {
                setTranscriptDownloaded(true);
                setTimeout(() => setTranscriptDownloaded(false), 4000);
              }}
              className="px-4 py-2 text-xs font-semibold rounded-lg bg-blue-900 text-white hover:bg-blue-800 transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>{transcriptDownloaded ? 'Transcript Downloaded!' : 'Print / Download Transcript'}</span>
            </button>
          </div>

          <div className="space-y-6">
            {demoExamResults.map((result) => (
              <div key={result.semester} className="border border-slate-200 rounded-xl overflow-hidden">
                <div className="bg-slate-50 px-4 py-3 flex items-center justify-between border-b border-slate-200">
                  <span className="font-bold text-slate-900 text-xs">
                    Semester {result.semester} End-Term Examination
                  </span>
                  <div className="flex items-center gap-3 text-xs">
                    <span className="text-slate-500">SGPA: <strong className="text-blue-900">{result.gpa}</strong></span>
                    <span className="px-2 py-0.5 rounded-md bg-emerald-100 text-emerald-800 font-bold text-[10px]">
                      {result.status}
                    </span>
                  </div>
                </div>

                <table className="w-full text-left text-xs">
                  <thead className="bg-slate-100/50 text-slate-500 font-semibold border-b border-slate-200">
                    <tr>
                      <th className="py-2.5 px-4">Code</th>
                      <th className="py-2.5 px-4">Course Subject</th>
                      <th className="py-2.5 px-4">Credits</th>
                      <th className="py-2.5 px-4">Grade</th>
                      <th className="py-2.5 px-4">Total Marks</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-slate-700">
                    {result.subjects.map((sub) => (
                      <tr key={sub.code} className="hover:bg-slate-50">
                        <td className="py-2.5 px-4 font-mono font-medium">{sub.code}</td>
                        <td className="py-2.5 px-4 font-medium text-slate-900">{sub.name}</td>
                        <td className="py-2.5 px-4">{sub.credits}</td>
                        <td className="py-2.5 px-4 font-bold text-blue-900">{sub.grade}</td>
                        <td className="py-2.5 px-4 tabular-nums">{sub.marks} / 100</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab 3: Academic Calendar */}
      {activeTab === 'calendar' && (
        <div className="bg-white rounded-2xl border border-slate-200 shadow-xs p-6 space-y-6">
          <div>
            <h3 className="font-serif text-xl font-bold text-slate-900">
              Institutional Academic Calendar · Session 2026-27
            </h3>
            <p className="text-xs text-slate-500">
              Official schedule of continuous internal assessments, campus fests, and holidays.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {academicCalendarEvents.map((evt, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl border border-slate-200 bg-slate-50/60 flex items-start justify-between gap-4"
              >
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-blue-900 block">
                    {evt.type}
                  </span>
                  <h4 className="font-serif text-sm font-bold text-slate-900 mt-0.5">
                    {evt.title}
                  </h4>
                </div>
                <span className="px-2.5 py-1 rounded-md bg-white border border-slate-200 text-xs font-mono font-bold text-slate-700 shrink-0">
                  {evt.date}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab 4: Official Circulars */}
      {activeTab === 'notices' && (
        <div className="bg-white rounded-2xl border border-slate-200 shadow-xs p-6 space-y-4">
          <div>
            <h3 className="font-serif text-xl font-bold text-slate-900">
              University Circulars & Examination Board Notices
            </h3>
            <p className="text-xs text-slate-500">
              Verified administrative communications from the Registrar's Office.
            </p>
          </div>

          <div className="divide-y divide-slate-100 space-y-3">
            {latestNotices.map((n) => (
              <div key={n.id} className="pt-3 first:pt-0 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-[11px] text-slate-500">
                    <span className="font-semibold text-blue-900">{n.category}</span>
                    <span>·</span>
                    <span>{n.date}</span>
                    {n.isImportant && (
                      <span className="px-1.5 py-0.5 rounded bg-amber-100 text-amber-800 text-[10px] font-bold">
                        High Priority
                      </span>
                    )}
                  </div>
                  <h4 className="text-sm font-semibold text-slate-900">
                    {n.title}
                  </h4>
                </div>
                <button
                  onClick={() => alert(`Downloading circular document: ${n.title}`)}
                  className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors flex items-center gap-1.5 self-start sm:self-auto cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download {n.fileSize}</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab 5: Downloadable Study Resources */}
      {activeTab === 'resources' && (
        <div className="bg-white rounded-2xl border border-slate-200 shadow-xs p-6 space-y-4">
          <div>
            <h3 className="font-serif text-xl font-bold text-slate-900">
              Departmental Course Handouts & Lab Manuals
            </h3>
            <p className="text-xs text-slate-500">
              Curated lecture slides, lab tutorials, and prior examination question sets.
            </p>
          </div>

          <div className="space-y-3">
            {downloadableResources.map((res, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 flex items-center justify-between gap-4"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-900 flex items-center justify-center font-bold text-xs shrink-0 font-mono">
                    {res.type}
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-semibold text-slate-900">
                      {res.title}
                    </h4>
                    <span className="text-[11px] text-slate-500">
                      Updated {res.date} · File Size: {res.size}
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => alert(`Downloading: ${res.title}`)}
                  className="px-3.5 py-1.5 text-xs font-semibold rounded-lg bg-blue-900 text-white hover:bg-blue-800 transition-colors flex items-center gap-1 cursor-pointer shrink-0"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

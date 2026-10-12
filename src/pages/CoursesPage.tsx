import React, { useState, useMemo } from 'react';
import {
  Search,
  Filter,
  GraduationCap,
  Clock,
  BookOpen,
  CheckCircle2,
  Briefcase,
  Users,
  X,
  ArrowRight,
  Info
} from 'lucide-react';
import { coursesData } from '../data/mockData';
import { Course } from '../types';

interface CoursesPageProps {
  onOpenApplyModal: (courseId?: string) => void;
}

export const CoursesPage: React.FC<CoursesPageProps> = ({ onOpenApplyModal }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLevel, setSelectedLevel] = useState<'All' | 'Undergraduate' | 'Postgraduate'>('All');
  const [selectedDepartment, setSelectedDepartment] = useState<string>('All');
  const [activeCourseModal, setActiveCourseModal] = useState<Course | null>(null);

  const departments = useMemo(() => {
    const set = new Set(coursesData.map((c) => c.department));
    return ['All', ...Array.from(set)];
  }, []);

  const filteredCourses = useMemo(() => {
    return coursesData.filter((course) => {
      const matchesSearch =
        course.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.degree.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.department.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesLevel = selectedLevel === 'All' || course.level === selectedLevel;
      const matchesDept = selectedDepartment === 'All' || course.department === selectedDepartment;

      return matchesSearch && matchesLevel && matchesDept;
    });
  }, [searchQuery, selectedLevel, selectedDepartment]);

  return (
    <div className="space-y-12 py-10">
      {/* Header Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-4">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-900">
            <span>Academic Excellence</span>
            <span>·</span>
            <span>Degrees & Programs</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-slate-900 tracking-tight leading-tight">
            Comprehensive Programs for Future Leaders
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Choose from an esteemed catalog of undergraduate and postgraduate programs crafted in sync with global academic standards and industry demands.
          </p>
        </div>
      </section>

      {/* Filter and Search Bar Deck */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-6">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="w-5 h-5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search courses (e.g. B.Tech, MCA, Data Science, Mechanical, Finance)..."
                className="w-full pl-11 pr-4 py-2.5 text-sm rounded-xl border border-slate-300 focus:outline-hidden focus:border-blue-900 focus:ring-1 focus:ring-blue-900"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 text-xs px-1"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Department Dropdown */}
            <div className="w-full md:w-64">
              <select
                value={selectedDepartment}
                onChange={(e) => setSelectedDepartment(e.target.value)}
                className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-300 bg-white focus:outline-hidden focus:border-blue-900 focus:ring-1 focus:ring-blue-900 text-slate-800"
              >
                {departments.map((dept) => (
                  <option key={dept} value={dept}>
                    {dept === 'All' ? 'All Departments' : dept}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Level Filter Segmented Control */}
          <div className="flex items-center justify-between border-t border-slate-100 pt-4 flex-wrap gap-4">
            <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-lg">
              {(['All', 'Undergraduate', 'Postgraduate'] as const).map((lvl) => (
                <button
                  key={lvl}
                  onClick={() => setSelectedLevel(lvl)}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                    selectedLevel === lvl
                      ? 'bg-white text-slate-900 shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {lvl === 'All' ? 'All Programs' : `${lvl} Degrees`}
                </button>
              ))}
            </div>

            <div className="text-xs text-slate-500 font-medium">
              Showing <span className="font-bold text-slate-900">{filteredCourses.length}</span> programs
            </div>
          </div>
        </div>
      </section>

      {/* Course Cards Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {filteredCourses.length === 0 ? (
          <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center space-y-3">
            <GraduationCap className="w-12 h-12 text-slate-300 mx-auto" />
            <h3 className="font-serif text-lg font-bold text-slate-900">
              No matching courses found
            </h3>
            <p className="text-sm text-slate-500 max-w-md mx-auto">
              We couldn't find any degree program matching "{searchQuery}". Try selecting another department or clearing the filters.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedLevel('All');
                setSelectedDepartment('All');
              }}
              className="mt-2 px-4 py-2 text-xs font-semibold text-blue-900 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourses.map((course) => (
              <div
                key={course.id}
                className="bg-white rounded-2xl border border-slate-200/90 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between overflow-hidden group"
              >
                <div className="p-6 space-y-4">
                  {/* Metadata Row */}
                  <div className="flex items-center justify-between text-xs text-slate-500">
                    <span className="font-bold text-blue-900">{course.degree}</span>
                    <span className="flex items-center gap-1 text-slate-600">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      <span>{course.duration}</span>
                    </span>
                  </div>

                  <div>
                    <h3 className="font-serif text-xl font-bold text-slate-900 group-hover:text-blue-900 transition-colors leading-snug">
                      {course.name}
                    </h3>
                    <p className="text-xs text-slate-500 mt-1 font-medium">
                      {course.department}
                    </p>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                    {course.description}
                  </p>

                  {/* Highlights list preview */}
                  <div className="space-y-1.5 pt-2 border-t border-slate-100">
                    <span className="text-[11px] font-bold text-slate-700 uppercase tracking-wider block">
                      Core Disciplines:
                    </span>
                    <ul className="text-xs text-slate-600 space-y-1">
                      {course.curriculum.slice(0, 2).map((curr, idx) => (
                        <li key={idx} className="flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          <span className="line-clamp-1">{curr}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Footer Actions */}
                <div className="px-6 py-4 bg-slate-50/80 border-t border-slate-100 flex items-center justify-between gap-3">
                  <div>
                    <span className="text-[10px] uppercase font-bold text-slate-400 block">Annual Tuition</span>
                    <span className="text-xs font-bold text-slate-900">{course.annualFee}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setActiveCourseModal(course)}
                      className="px-3 py-1.5 text-xs font-semibold text-slate-700 bg-white hover:bg-slate-100 border border-slate-200 rounded-lg transition-colors cursor-pointer"
                    >
                      Details
                    </button>
                    <button
                      onClick={() => onOpenApplyModal(course.id)}
                      className="px-3.5 py-1.5 text-xs font-semibold text-white bg-blue-900 hover:bg-blue-800 rounded-lg transition-colors cursor-pointer"
                    >
                      Apply Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Course Detail Full Modal */}
      {activeCourseModal && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4">
          <div
            className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-slate-900 text-white p-6 flex items-start justify-between">
              <div>
                <div className="flex items-center gap-2 text-xs text-amber-400 font-semibold uppercase tracking-wider mb-1">
                  <span>{activeCourseModal.level} Program</span>
                  <span>·</span>
                  <span>{activeCourseModal.code}</span>
                </div>
                <h3 className="font-serif text-2xl font-bold text-white">
                  {activeCourseModal.name}
                </h3>
                <p className="text-xs text-slate-300 mt-1">
                  {activeCourseModal.department}
                </p>
              </div>
              <button
                onClick={() => setActiveCourseModal(null)}
                className="text-white/70 hover:text-white p-1 rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 space-y-6 max-h-[70vh] overflow-y-auto">
              {/* Quick Specs */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs">
                <div>
                  <span className="text-slate-400 block font-medium">Duration</span>
                  <span className="font-bold text-slate-900">{activeCourseModal.duration}</span>
                </div>
                <div>
                  <span className="text-slate-400 block font-medium">Annual Fee</span>
                  <span className="font-bold text-slate-900">{activeCourseModal.annualFee}</span>
                </div>
                <div>
                  <span className="text-slate-400 block font-medium">Intake Seats</span>
                  <span className="font-bold text-slate-900">{activeCourseModal.seats} Seats</span>
                </div>
                <div>
                  <span className="text-slate-400 block font-medium">Degree Level</span>
                  <span className="font-bold text-blue-900">{activeCourseModal.degree}</span>
                </div>
              </div>

              {/* Course Overview */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                  Program Overview
                </h4>
                <p className="text-sm text-slate-700 leading-relaxed">
                  {activeCourseModal.description}
                </p>
              </div>

              {/* Eligibility Criteria */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                  Eligibility Criteria & Prerequisites
                </h4>
                <div className="p-3.5 bg-blue-50/70 border border-blue-200 rounded-xl text-xs text-blue-950 flex items-start gap-2.5">
                  <Info className="w-4 h-4 text-blue-900 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{activeCourseModal.eligibility}</span>
                </div>
              </div>

              {/* Core Curriculum Highlights */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                  Core Curriculum & Key Modules
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                  {activeCourseModal.curriculum.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 p-2 rounded-lg bg-slate-50 border border-slate-100">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Career Pathways */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                  Target Roles & Career Outcomes
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeCourseModal.careerProspects.map((career, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-slate-100 text-slate-700 rounded-lg text-xs font-medium"
                    >
                      {career}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between gap-4">
              <button
                onClick={() => setActiveCourseModal(null)}
                className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900 cursor-pointer"
              >
                Close
              </button>

              <button
                onClick={() => {
                  const id = activeCourseModal.id;
                  setActiveCourseModal(null);
                  onOpenApplyModal(id);
                }}
                className="px-5 py-2.5 text-xs font-semibold text-white bg-blue-900 hover:bg-blue-800 rounded-lg shadow-sm transition-colors cursor-pointer flex items-center gap-1.5"
              >
                <span>Apply for this Program</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

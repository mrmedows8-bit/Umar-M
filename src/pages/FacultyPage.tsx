import React, { useState, useMemo } from 'react';
import {
  Mail,
  BookOpen,
  Award,
  GraduationCap,
  X,
  Search,
  ExternalLink,
  ChevronRight
} from 'lucide-react';
import { facultyMembers } from '../data/mockData';
import { FacultyMember } from '../types';

export const FacultyPage: React.FC = () => {
  const [selectedDepartment, setSelectedDepartment] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFacultyModal, setActiveFacultyModal] = useState<FacultyMember | null>(null);

  const departments = useMemo(() => {
    const list = Array.from(new Set(facultyMembers.map((f) => f.department)));
    return ['All', ...list];
  }, []);

  const filteredFaculty = useMemo(() => {
    return facultyMembers.filter((f) => {
      const matchesDept = selectedDepartment === 'All' || f.department === selectedDepartment;
      const matchesSearch =
        f.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        f.specialization.toLowerCase().includes(searchQuery.toLowerCase()) ||
        f.qualification.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesDept && matchesSearch;
    });
  }, [selectedDepartment, searchQuery]);

  return (
    <div className="space-y-12 py-10">
      {/* Header Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-4">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-900">
            <span>Academic Leadership</span>
            <span>·</span>
            <span>Distinguished Scholars</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-slate-900 tracking-tight leading-tight">
            Our Distinguished Faculty
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Meet the researchers, authors, and industry pioneers who mentor our students. Over 98% of our 380+ faculty hold doctoral degrees from premier global universities.
          </p>
        </div>
      </section>

      {/* Filter and Search Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="w-5 h-5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search faculty by name, specialization, or research focus..."
                className="w-full pl-11 pr-4 py-2.5 text-sm rounded-xl border border-slate-300 focus:outline-hidden focus:border-blue-900 focus:ring-1 focus:ring-blue-900"
              />
            </div>
          </div>

          <div className="flex items-center gap-2 overflow-x-auto pb-1 pt-2 border-t border-slate-100">
            {departments.map((dept) => (
              <button
                key={dept}
                onClick={() => setSelectedDepartment(dept)}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                  selectedDepartment === dept
                    ? 'bg-blue-900 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
                }`}
              >
                {dept}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Faculty Cards Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {filteredFaculty.length === 0 ? (
          <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center text-slate-500">
            No faculty members match your criteria. Try another search term.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredFaculty.map((faculty) => (
              <div
                key={faculty.id}
                className="bg-white rounded-2xl border border-slate-200/90 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between overflow-hidden group"
              >
                <div>
                  {/* Photo container */}
                  <div className="aspect-square bg-slate-100 relative overflow-hidden">
                    <img
                      src={faculty.avatarUrl}
                      alt={faculty.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-xs px-2.5 py-1 rounded-md text-[10px] font-bold text-slate-800 shadow-xs">
                      {faculty.experienceYears}+ Yrs Exp
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-5 space-y-2">
                    <div className="text-[11px] font-semibold text-amber-700 uppercase tracking-wider">
                      {faculty.department}
                    </div>

                    <h3 className="font-serif text-lg font-bold text-slate-900 group-hover:text-blue-900 transition-colors leading-snug">
                      {faculty.name}
                    </h3>

                    <p className="text-xs font-medium text-blue-900">
                      {faculty.designation}
                    </p>

                    <p className="text-xs text-slate-500 line-clamp-1">
                      {faculty.qualification}
                    </p>

                    <div className="pt-2 text-xs text-slate-600">
                      <span className="font-semibold text-slate-700 block text-[11px]">Specialization:</span>
                      <span className="line-clamp-2">{faculty.specialization}</span>
                    </div>
                  </div>
                </div>

                {/* Footer Strip */}
                <div className="p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
                  <a
                    href={`mailto:${faculty.email}`}
                    className="p-1.5 text-slate-500 hover:text-blue-900 hover:bg-blue-50 rounded-lg transition-colors"
                    title={`Email ${faculty.name}`}
                  >
                    <Mail className="w-4 h-4" />
                  </a>

                  <button
                    onClick={() => setActiveFacultyModal(faculty)}
                    className="text-xs font-semibold text-blue-900 hover:text-blue-700 flex items-center gap-1 cursor-pointer"
                  >
                    <span>View Bio</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Faculty Bio Modal */}
      {activeFacultyModal && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4">
          <div
            className="w-full max-w-xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-slate-900 text-white p-6 flex items-start justify-between">
              <div className="flex items-center gap-4">
                <img
                  src={activeFacultyModal.avatarUrl}
                  alt={activeFacultyModal.name}
                  referrerPolicy="no-referrer"
                  className="w-16 h-16 rounded-xl object-cover border-2 border-slate-700 shrink-0"
                />
                <div>
                  <h3 className="font-serif text-xl font-bold text-white">
                    {activeFacultyModal.name}
                  </h3>
                  <p className="text-xs text-amber-400 font-medium">
                    {activeFacultyModal.designation}
                  </p>
                  <p className="text-xs text-slate-400">
                    {activeFacultyModal.department}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setActiveFacultyModal(null)}
                className="text-white/70 hover:text-white p-1 rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 space-y-5 text-xs text-slate-700">
              <div className="grid grid-cols-2 gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <div>
                  <span className="text-slate-400 block font-medium">Academic Qualification</span>
                  <span className="font-bold text-slate-900">{activeFacultyModal.qualification}</span>
                </div>
                <div>
                  <span className="text-slate-400 block font-medium">Publications in Scopus/IEEE</span>
                  <span className="font-bold text-blue-900">{activeFacultyModal.publicationsCount} Papers</span>
                </div>
              </div>

              <div>
                <h4 className="font-bold uppercase tracking-wider text-slate-400 text-[11px] mb-1">
                  Research Specialization & Focus
                </h4>
                <p className="text-sm text-slate-800 leading-relaxed font-medium">
                  {activeFacultyModal.specialization}
                </p>
              </div>

              <div>
                <h4 className="font-bold uppercase tracking-wider text-slate-400 text-[11px] mb-1">
                  Scholarly Biography
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {activeFacultyModal.bio}
                </p>
              </div>

              <div className="pt-2 border-t border-slate-200 flex items-center justify-between">
                <span className="text-slate-500">Official Contact:</span>
                <a
                  href={`mailto:${activeFacultyModal.email}`}
                  className="font-mono text-blue-900 font-semibold hover:underline"
                >
                  {activeFacultyModal.email}
                </a>
              </div>
            </div>

            <div className="p-4 bg-slate-50 border-t border-slate-200 text-right">
              <button
                onClick={() => setActiveFacultyModal(null)}
                className="px-4 py-2 text-xs font-semibold text-white bg-blue-900 hover:bg-blue-800 rounded-lg transition-colors cursor-pointer"
              >
                Close Profile
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

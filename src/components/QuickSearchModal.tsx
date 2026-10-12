import React, { useState, useEffect, useRef } from 'react';
import { Search, X, BookOpen, User, Building2, Calendar, FileText, ArrowRight } from 'lucide-react';
import { coursesData, facultyMembers, campusFacilities, upcomingEvents, latestNotices } from '../data/mockData';

interface QuickSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (tab: string, itemParam?: string) => void;
}

export const QuickSearchModal: React.FC<QuickSearchModalProps> = ({ isOpen, onClose, onNavigate }) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.key === 'k' && (e.metaKey || e.ctrlKey)) || (e.key === '/' && document.activeElement?.tagName !== 'INPUT' && document.activeElement?.tagName !== 'TEXTAREA')) {
        e.preventDefault();
        if (isOpen) onClose();
        else {
          // open search
        }
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const q = query.trim().toLowerCase();

  const matchedCourses = coursesData.filter(
    c => c.name.toLowerCase().includes(q) || c.degree.toLowerCase().includes(q) || c.department.toLowerCase().includes(q)
  );

  const matchedFaculty = facultyMembers.filter(
    f => f.name.toLowerCase().includes(q) || f.department.toLowerCase().includes(q) || f.specialization.toLowerCase().includes(q)
  );

  const matchedFacilities = campusFacilities.filter(
    fac => fac.title.toLowerCase().includes(q) || fac.description.toLowerCase().includes(q)
  );

  const matchedEvents = upcomingEvents.filter(
    e => e.title.toLowerCase().includes(q) || e.category.toLowerCase().includes(q)
  );

  const matchedNotices = latestNotices.filter(
    n => n.title.toLowerCase().includes(q) || n.category.toLowerCase().includes(q)
  );

  const totalResults = q
    ? matchedCourses.length + matchedFaculty.length + matchedFacilities.length + matchedEvents.length + matchedNotices.length
    : 0;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-start justify-center pt-16 sm:pt-24 px-4">
      <div
        className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden transform transition-all animate-in fade-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="relative flex items-center px-4 py-3.5 border-b border-slate-200">
          <Search className="w-5 h-5 text-slate-400 shrink-0 mr-3" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search courses, faculty, campus facilities, events, circulars..."
            className="w-full bg-transparent text-slate-900 placeholder:text-slate-400 focus:outline-hidden text-base"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 text-slate-400 hover:text-slate-600 rounded-md mr-2"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="text-xs px-2 py-1 bg-slate-100 hover:bg-slate-200 text-slate-600 rounded-md font-medium"
          >
            ESC
          </button>
        </div>

        {/* Results Body */}
        <div className="max-h-[60vh] overflow-y-auto p-4 space-y-4">
          {!query ? (
            <div className="py-8 text-center">
              <p className="text-sm text-slate-500 font-medium">
                Type a keyword to explore ABC College programs, faculty, or facilities.
              </p>
              <div className="mt-4 flex flex-wrap justify-center gap-2">
                {['B.Tech CSE', 'MBA', 'Robotics Lab', 'Admissions', 'Scholarship', 'Dr. Vance', 'Placements'].map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setQuery(tag)}
                    className="px-3 py-1 bg-slate-100 hover:bg-blue-50 hover:text-blue-900 text-slate-600 text-xs rounded-lg transition-colors cursor-pointer"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          ) : totalResults === 0 ? (
            <div className="py-10 text-center text-slate-500 text-sm">
              No matching records found for "{query}". Try searching for <span className="font-semibold text-slate-700">"Engineering"</span> or <span className="font-semibold text-slate-700">"Library"</span>.
            </div>
          ) : (
            <>
              {matchedCourses.length > 0 && (
                <div>
                  <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                    <BookOpen className="w-3.5 h-3.5 text-blue-900" />
                    <span>Academic Courses ({matchedCourses.length})</span>
                  </div>
                  <div className="space-y-1.5">
                    {matchedCourses.map((c) => (
                      <button
                        key={c.id}
                        onClick={() => {
                          onNavigate('courses');
                          onClose();
                        }}
                        className="w-full flex items-center justify-between p-2.5 rounded-xl hover:bg-blue-50/80 text-left transition-colors group cursor-pointer"
                      >
                        <div>
                          <p className="text-sm font-semibold text-slate-900 group-hover:text-blue-900">
                            {c.name}
                          </p>
                          <p className="text-xs text-slate-500">
                            {c.department} · {c.duration}
                          </p>
                        </div>
                        <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-blue-900 group-hover:translate-x-1 transition-all" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {matchedFaculty.length > 0 && (
                <div>
                  <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                    <User className="w-3.5 h-3.5 text-amber-600" />
                    <span>Faculty Directory ({matchedFaculty.length})</span>
                  </div>
                  <div className="space-y-1.5">
                    {matchedFaculty.map((f) => (
                      <button
                        key={f.id}
                        onClick={() => {
                          onNavigate('faculty');
                          onClose();
                        }}
                        className="w-full flex items-center justify-between p-2.5 rounded-xl hover:bg-slate-50 text-left transition-colors group cursor-pointer"
                      >
                        <div>
                          <p className="text-sm font-semibold text-slate-900 group-hover:text-blue-900">
                            {f.name}
                          </p>
                          <p className="text-xs text-slate-500">
                            {f.designation} · {f.department}
                          </p>
                        </div>
                        <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-blue-900 group-hover:translate-x-1 transition-all" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {matchedFacilities.length > 0 && (
                <div>
                  <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                    <Building2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Campus Facilities ({matchedFacilities.length})</span>
                  </div>
                  <div className="space-y-1.5">
                    {matchedFacilities.map((fac) => (
                      <button
                        key={fac.id}
                        onClick={() => {
                          onNavigate('campus');
                          onClose();
                        }}
                        className="w-full flex items-center justify-between p-2.5 rounded-xl hover:bg-slate-50 text-left transition-colors group cursor-pointer"
                      >
                        <div>
                          <p className="text-sm font-semibold text-slate-900 group-hover:text-blue-900">
                            {fac.title}
                          </p>
                          <p className="text-xs text-slate-500">
                            {fac.category} · {fac.timings}
                          </p>
                        </div>
                        <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-blue-900 group-hover:translate-x-1 transition-all" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {matchedEvents.length > 0 && (
                <div>
                  <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                    <Calendar className="w-3.5 h-3.5 text-purple-600" />
                    <span>Events & Fests ({matchedEvents.length})</span>
                  </div>
                  <div className="space-y-1.5">
                    {matchedEvents.map((evt) => (
                      <button
                        key={evt.id}
                        onClick={() => {
                          onNavigate('events');
                          onClose();
                        }}
                        className="w-full flex items-center justify-between p-2.5 rounded-xl hover:bg-slate-50 text-left transition-colors group cursor-pointer"
                      >
                        <div>
                          <p className="text-sm font-semibold text-slate-900 group-hover:text-blue-900">
                            {evt.title}
                          </p>
                          <p className="text-xs text-slate-500">
                            {evt.date} · {evt.venue}
                          </p>
                        </div>
                        <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-blue-900 group-hover:translate-x-1 transition-all" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {matchedNotices.length > 0 && (
                <div>
                  <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                    <FileText className="w-3.5 h-3.5 text-amber-500" />
                    <span>Announcements ({matchedNotices.length})</span>
                  </div>
                  <div className="space-y-1.5">
                    {matchedNotices.map((n) => (
                      <button
                        key={n.id}
                        onClick={() => {
                          onNavigate('home');
                          onClose();
                        }}
                        className="w-full flex items-center justify-between p-2.5 rounded-xl hover:bg-slate-50 text-left transition-colors group cursor-pointer"
                      >
                        <div>
                          <p className="text-sm font-semibold text-slate-900 group-hover:text-blue-900">
                            {n.title}
                          </p>
                          <p className="text-xs text-slate-500">
                            {n.category} · {n.date}
                          </p>
                        </div>
                        <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-blue-900 group-hover:translate-x-1 transition-all" />
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

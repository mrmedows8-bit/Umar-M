import React, { useState } from 'react';
import {
  GraduationCap,
  Menu,
  X,
  Search,
  Phone,
  Mail,
  Award,
  UserCheck
} from 'lucide-react';
import { collegeInfo } from '../data/mockData';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onOpenApplyModal: () => void;
  onOpenSearch: () => void;
  isLoggedIn?: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  onOpenApplyModal,
  onOpenSearch,
  isLoggedIn
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'courses', label: 'Courses' },
    { id: 'admissions', label: 'Admissions' },
    { id: 'faculty', label: 'Faculty' },
    { id: 'campus', label: 'Campus' },
    { id: 'placements', label: 'Placements' },
    { id: 'student-corner', label: 'Student Corner' },
    { id: 'events', label: 'Events & News' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (tabId: string) => {
    setActiveTab(tabId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md shadow-xs border-b border-slate-200">
      {/* Top Utility Ticker Bar */}
      <div className="hidden lg:block bg-slate-900 text-slate-300 text-xs py-2 px-6 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4 text-xs font-medium">
            <span className="flex items-center gap-1.5 text-amber-400">
              <Award className="w-3.5 h-3.5" />
              <span>{collegeInfo.accreditation}</span>
            </span>
            <span className="text-slate-600">|</span>
            <span className="text-slate-300 font-normal">{collegeInfo.nirfRank}</span>
            <span className="text-slate-600">|</span>
            <span className="text-emerald-400 font-medium">Admissions 2026-27 Open</span>
          </div>
          <div className="flex items-center gap-6">
            <a
              href={`tel:${collegeInfo.admissionsHotline}`}
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Phone className="w-3 h-3 text-amber-400" />
              <span>{collegeInfo.admissionsHotline}</span>
            </a>
            <a
              href={`mailto:${collegeInfo.admissionsEmail}`}
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Mail className="w-3 h-3 text-amber-400" />
              <span>{collegeInfo.admissionsEmail}</span>
            </a>
            <button
              onClick={() => handleNavClick('student-corner')}
              className="flex items-center gap-1.5 text-slate-200 hover:text-amber-400 transition-colors"
            >
              <UserCheck className="w-3 h-3" />
              <span>{isLoggedIn ? 'My Dashboard' : 'Student & Faculty Portal'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-4">
          {/* Brand Zone */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3.5 group text-left cursor-pointer shrink-0"
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-900 to-indigo-950 flex items-center justify-center text-amber-400 shadow-md group-hover:scale-105 transition-transform duration-200">
              <GraduationCap className="w-7 h-7" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-2xl font-bold tracking-tight text-slate-900 group-hover:text-blue-900 transition-colors">
                ABC College
              </span>
              <span className="text-xs text-slate-500 font-medium tracking-wide">
                Est. 1984 · Autonomous Institution
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-5 text-sm font-medium">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`py-2 text-sm transition-colors whitespace-nowrap cursor-pointer relative ${
                  activeTab === link.id
                    ? 'text-blue-900 font-semibold'
                    : 'text-slate-600 hover:text-blue-900'
                }`}
              >
                {link.label}
                {activeTab === link.id && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-900 rounded-full" />
                )}
              </button>
            ))}
          </nav>

          {/* Action Zone */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenSearch}
              className="p-2.5 text-slate-500 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
              title="Search courses, faculty, announcements (Press / or Ctrl+K)"
              aria-label="Search site"
            >
              <Search className="w-5 h-5" />
            </button>

            <button
              onClick={onOpenApplyModal}
              className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-white bg-blue-900 hover:bg-blue-800 active:bg-blue-950 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer whitespace-nowrap"
            >
              Apply Now
            </button>

            {/* Mobile menu hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 text-slate-700 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden border-t border-slate-200 bg-white shadow-xl animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="max-w-7xl mx-auto px-4 py-4 space-y-1">
            <div className="pb-3 border-b border-slate-100 mb-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Menu Navigation
              </span>
            </div>
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  activeTab === link.id
                    ? 'bg-blue-50 text-blue-900 font-semibold'
                    : 'text-slate-700 hover:bg-slate-50 hover:text-slate-900'
                }`}
              >
                {link.label}
              </button>
            ))}

            <div className="pt-3 border-t border-slate-100 mt-2 space-y-2">
              <button
                onClick={() => {
                  onOpenApplyModal();
                  setMobileMenuOpen(false);
                }}
                className="w-full py-2.5 px-4 text-center text-sm font-semibold text-white bg-blue-900 hover:bg-blue-800 rounded-lg shadow-xs cursor-pointer"
              >
                Apply for Admission 2026-27
              </button>
              <button
                onClick={() => handleNavClick('student-corner')}
                className="w-full py-2.5 px-4 text-center text-sm font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors cursor-pointer"
              >
                Student & Faculty Portal
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

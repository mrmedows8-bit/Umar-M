/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { QuickSearchModal } from './components/QuickSearchModal';
import { ApplyModal } from './components/ApplyModal';

import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { CoursesPage } from './pages/CoursesPage';
import { AdmissionsPage } from './pages/AdmissionsPage';
import { FacultyPage } from './pages/FacultyPage';
import { CampusPage } from './pages/CampusPage';
import { PlacementsPage } from './pages/PlacementsPage';
import { StudentCornerPage } from './pages/StudentCornerPage';
import { EventsPage } from './pages/EventsPage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);
  const [applyCourseId, setApplyCourseId] = useState<string | undefined>(undefined);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Check URL hash if available on initial load
  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (hash && ['home', 'about', 'courses', 'admissions', 'faculty', 'campus', 'placements', 'student-corner', 'events', 'contact'].includes(hash)) {
      setActiveTab(hash);
    }
  }, []);

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    window.location.hash = tab;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenApply = (courseId?: string) => {
    setApplyCourseId(courseId);
    setIsApplyModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans selection:bg-amber-100 selection:text-blue-900">
      {/* Top Navbar */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={handleTabChange}
        onOpenApplyModal={() => handleOpenApply()}
        onOpenSearch={() => setIsSearchOpen(true)}
        isLoggedIn={isLoggedIn}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {activeTab === 'home' && (
          <HomePage
            setActiveTab={handleTabChange}
            onOpenApplyModal={handleOpenApply}
          />
        )}

        {activeTab === 'about' && (
          <AboutPage
            onOpenApplyModal={() => handleOpenApply()}
          />
        )}

        {activeTab === 'courses' && (
          <CoursesPage
            onOpenApplyModal={handleOpenApply}
          />
        )}

        {activeTab === 'admissions' && (
          <AdmissionsPage />
        )}

        {activeTab === 'faculty' && (
          <FacultyPage />
        )}

        {activeTab === 'campus' && (
          <CampusPage />
        )}

        {activeTab === 'placements' && (
          <PlacementsPage />
        )}

        {activeTab === 'student-corner' && (
          <StudentCornerPage
            isLoggedIn={isLoggedIn}
            setIsLoggedIn={setIsLoggedIn}
          />
        )}

        {activeTab === 'events' && (
          <EventsPage />
        )}

        {activeTab === 'contact' && (
          <ContactPage />
        )}
      </main>

      {/* Institutional Footer */}
      <Footer
        setActiveTab={handleTabChange}
        onOpenApplyModal={() => handleOpenApply()}
      />

      {/* Quick Search Spotlight Modal */}
      <QuickSearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onNavigate={(tab) => handleTabChange(tab)}
      />

      {/* Interactive Admission Enquiry Modal */}
      <ApplyModal
        isOpen={isApplyModalOpen}
        onClose={() => {
          setIsApplyModalOpen(false);
          setApplyCourseId(undefined);
        }}
        preselectedCourseId={applyCourseId}
      />
    </div>
  );
}

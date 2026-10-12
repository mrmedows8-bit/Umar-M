import React from 'react';
import {
  GraduationCap,
  ArrowRight,
  Award,
  Users,
  Building2,
  Briefcase,
  Calendar,
  Bell,
  CheckCircle,
  FileText,
  MapPin,
  Sparkles,
  ChevronRight
} from 'lucide-react';
import { collegeInfo, campusImages, coursesData, upcomingEvents, latestNotices, placementStats, topRecruiters } from '../data/mockData';

interface HomePageProps {
  setActiveTab: (tab: string) => void;
  onOpenApplyModal: (courseId?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ setActiveTab, onOpenApplyModal }) => {
  return (
    <div className="space-y-20 pb-16">
      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white overflow-hidden">
        {/* Background Image with Dark Contrast Scrim */}
        <div className="absolute inset-0 z-0">
          <img
            src={campusImages.hero}
            alt="ABC College Main Academic Quadrangle and Clock Tower"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover opacity-35 scale-105 transform motion-safe:transition-transform motion-safe:duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-blue-950/60" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-36">
          <div className="max-w-3xl space-y-6">
            {/* Accreditation Kicker */}
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400">
              <Award className="w-4 h-4 text-amber-400" />
              <span>Autonomous Academic Excellence Since 1984</span>
              <span className="text-slate-500">·</span>
              <span>NAAC 'A++' Accredited</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
              Empowering Minds, Shaping Global Leaders.
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal max-w-2xl">
              Welcome to ABC College — where academic rigor meets innovation. With 45+ accredited degree programs, world-class robotics research labs, and an illustrious placement legacy, we nurture thinkers, creators, and innovators.
            </p>

            {/* CTAs */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={() => onOpenApplyModal()}
                className="px-6 py-3.5 text-sm font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 active:bg-amber-500 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 cursor-pointer flex items-center gap-2"
              >
                <span>Apply for Admission 2026</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => {
                  setActiveTab('courses');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="px-6 py-3.5 text-sm font-semibold text-white bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 rounded-lg backdrop-blur-xs transition-colors cursor-pointer"
              >
                Explore Courses & Degrees
              </button>

              <button
                onClick={() => {
                  setActiveTab('contact');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="px-5 py-3.5 text-sm font-medium text-slate-300 hover:text-white transition-colors cursor-pointer"
              >
                Contact Campus Office →
              </button>
            </div>
          </div>
        </div>

        {/* 4-Item KPI Metrics Strip below Hero */}
        <div className="relative z-10 border-t border-slate-800/80 bg-slate-950/90 backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-left">
              <div className="border-l-2 border-amber-400 pl-4">
                <div className="font-serif text-2xl sm:text-3xl font-bold text-white tabular-nums">
                  {collegeInfo.stats.placementRate}
                </div>
                <div className="text-xs text-slate-400 mt-0.5">Overall Career Placement</div>
              </div>
              <div className="border-l-2 border-blue-500 pl-4">
                <div className="font-serif text-2xl sm:text-3xl font-bold text-white tabular-nums">
                  {collegeInfo.stats.highestPackage}
                </div>
                <div className="text-xs text-slate-400 mt-0.5">Highest Package Offered</div>
              </div>
              <div className="border-l-2 border-emerald-500 pl-4">
                <div className="font-serif text-2xl sm:text-3xl font-bold text-white tabular-nums">
                  {collegeInfo.stats.students}
                </div>
                <div className="text-xs text-slate-400 mt-0.5">Diverse Student Body</div>
              </div>
              <div className="border-l-2 border-purple-500 pl-4">
                <div className="font-serif text-2xl sm:text-3xl font-bold text-white tabular-nums">
                  {collegeInfo.stats.campusAcres}
                </div>
                <div className="text-xs text-slate-400 mt-0.5">Smart Eco-Campus</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Announcements & Notices Ticker Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-amber-50 border border-amber-200/80 rounded-xl p-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-amber-500 text-slate-950 rounded-lg shrink-0">
              <Bell className="w-4 h-4" />
            </div>
            <div>
              <span className="text-xs font-bold text-amber-900 uppercase tracking-wide mr-2">
                Latest Notice:
              </span>
              <span className="text-xs sm:text-sm text-slate-800 font-medium">
                {latestNotices[0].title}
              </span>
            </div>
          </div>
          <button
            onClick={() => {
              setActiveTab('admissions');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="text-xs font-bold text-blue-900 hover:text-blue-700 whitespace-nowrap cursor-pointer shrink-0 self-end md:self-auto"
          >
            View Circular Details →
          </button>
        </div>
      </section>

      {/* Core Institutional Highlights */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-900">
            Why Choose ABC College
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900">
            Built for Academic Brilliance & Global Impact
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            We provide a holistic educational ecosystem combining rigorous theoretical inquiry, experiential industry immersion, and comprehensive personal mentorship.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl p-8 border border-slate-200/80 shadow-xs hover:shadow-md transition-shadow duration-200 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-900 flex items-center justify-center">
              <Briefcase className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-xl font-bold text-slate-900">
              Unrivaled Career Placements
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Consistently achieving 94%+ placement conversions with 340+ visiting Fortune 500 multinationals including Google, Microsoft, Amazon, and Deloitte.
            </p>
            <div className="pt-2 text-xs text-slate-500 space-y-1">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                <span>Dedicated Training & Placement Cell (T&P)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                <span>Over 240+ Pre-Placement Offers (PPOs) in 2025-26</span>
              </div>
            </div>
            <button
              onClick={() => {
                setActiveTab('placements');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-xs font-bold text-blue-900 hover:text-blue-700 flex items-center gap-1 pt-2 cursor-pointer"
            >
              <span>Explore Placement Records</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="bg-white rounded-2xl p-8 border border-slate-200/80 shadow-xs hover:shadow-md transition-shadow duration-200 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-xl font-bold text-slate-900">
              Distinguished Faculty Mentors
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Learn from 380+ acclaimed professors and research scholars from Stanford, UC Berkeley, IITs, and IIMs bringing high-impact industry research into lecture halls.
            </p>
            <div className="pt-2 text-xs text-slate-500 space-y-1">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                <span>18:1 Student-to-Faculty Mentorship Ratio</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                <span>Over 350+ Scopus & IEEE Indexed Publications</span>
              </div>
            </div>
            <button
              onClick={() => {
                setActiveTab('faculty');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-xs font-bold text-blue-900 hover:text-blue-700 flex items-center gap-1 pt-2 cursor-pointer"
            >
              <span>Meet Our Faculty</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="bg-white rounded-2xl p-8 border border-slate-200/80 shadow-xs hover:shadow-md transition-shadow duration-200 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
              <Building2 className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-xl font-bold text-slate-900">
              State-of-the-Art Infrastructure
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              A 120-acre lush smart campus boasting an architectural central library with 1.2 lakh books, NVIDIA AI compute clusters, robotics labs, and modern Olympic sports complex.
            </p>
            <div className="pt-2 text-xs text-slate-500 space-y-1">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                <span>40+ Specialized STEM & Mechatronics Laboratories</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                <span>Separate AC residential towers with high-speed fiber</span>
              </div>
            </div>
            <button
              onClick={() => {
                setActiveTab('campus');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-xs font-bold text-blue-900 hover:text-blue-700 flex items-center gap-1 pt-2 cursor-pointer"
            >
              <span>Tour Campus Facilities</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>

      {/* Featured Academic Programs Showcase */}
      <section className="bg-slate-100/70 py-16 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-blue-900">
                Degrees & Curricula
              </span>
              <h2 className="font-serif text-3xl font-bold text-slate-900 mt-1">
                Explore Popular Undergraduate & Postgraduate Courses
              </h2>
            </div>
            <button
              onClick={() => {
                setActiveTab('courses');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-sm font-semibold text-blue-900 hover:text-blue-700 flex items-center gap-1 self-start md:self-auto cursor-pointer"
            >
              <span>View All 8+ Programs</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coursesData.slice(0, 4).map((course) => (
              <div
                key={course.id}
                className="bg-white rounded-xl p-6 border border-slate-200 flex flex-col justify-between hover:shadow-md transition-shadow group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs text-slate-500">
                    <span className="font-semibold text-blue-900">{course.degree}</span>
                    <span>{course.duration}</span>
                  </div>
                  <h3 className="font-serif text-base font-bold text-slate-900 group-hover:text-blue-900 transition-colors line-clamp-2">
                    {course.name}
                  </h3>
                  <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                    {course.description}
                  </p>
                </div>

                <div className="pt-6 mt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-700">{course.annualFee}</span>
                  <button
                    onClick={() => onOpenApplyModal(course.id)}
                    className="text-xs font-bold text-blue-900 hover:text-blue-700 cursor-pointer"
                  >
                    Apply Now →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Campus Life & Facilities Spotlight Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-900">
              Campus Life & Infrastructure
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 leading-tight">
              An Architectural Sanctuary Designed for Discovery
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Step into an inspiring educational sanctuary. From our multi-tier Tagore Central Library bathed in natural skylight to high-speed AI compute rigs and the Olympus Sports Arena, every square foot is tailored for deep intellectual focus and collaborative community life.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <div className="text-lg font-bold text-slate-900">1,20,000+</div>
                <div className="text-xs text-slate-500 mt-0.5">Volumes in Digital Library</div>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <div className="text-lg font-bold text-slate-900">1,200 Workstations</div>
                <div className="text-xs text-slate-500 mt-0.5">Dual-Ring 10 Gbps IT Lab</div>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <div className="text-lg font-bold text-slate-900">2,500 Capacity</div>
                <div className="text-xs text-slate-500 mt-0.5">Acoustic Convention Hall</div>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <div className="text-lg font-bold text-slate-900">32 Transit Routes</div>
                <div className="text-xs text-slate-500 mt-0.5">Air-Conditioned Bus Fleet</div>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => {
                  setActiveTab('campus');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="px-5 py-2.5 text-sm font-semibold text-white bg-blue-900 hover:bg-blue-800 rounded-lg transition-colors cursor-pointer"
              >
                Explore All Facilities & Galleries →
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="rounded-2xl overflow-hidden shadow-sm border border-slate-200 aspect-4/3">
                <img
                  src={campusImages.library}
                  alt="Modern central library at ABC College"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-3 bg-white rounded-xl border border-slate-200 text-xs text-slate-600">
                <span className="font-semibold text-slate-900 block">Central Digital Library</span>
                <span>Open 7:00 AM – 11:00 PM with quiet reading pods</span>
              </div>
            </div>

            <div className="space-y-4 pt-6">
              <div className="rounded-2xl overflow-hidden shadow-sm border border-slate-200 aspect-4/3">
                <img
                  src={campusImages.stemLab}
                  alt="Advanced robotics and STEM research laboratory"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-3 bg-white rounded-xl border border-slate-200 text-xs text-slate-600">
                <span className="font-semibold text-slate-900 block">Robotics & AI Center</span>
                <span>Equipped with 6-axis robotic arms and GPU clusters</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events & Latest Circulars Split */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Upcoming Events (2 Cols) */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-blue-900">
                  Campus Calendar
                </span>
                <h3 className="font-serif text-2xl font-bold text-slate-900">
                  Upcoming College Events & Fests
                </h3>
              </div>
              <button
                onClick={() => {
                  setActiveTab('events');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="text-xs font-semibold text-blue-900 hover:text-blue-700 cursor-pointer"
              >
                All Events →
              </button>
            </div>

            <div className="space-y-4">
              {upcomingEvents.slice(0, 3).map((evt) => (
                <div
                  key={evt.id}
                  className="p-5 bg-white rounded-xl border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:shadow-xs transition-shadow"
                >
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2 text-xs text-slate-500">
                      <span className="font-semibold text-blue-900">{evt.category}</span>
                      <span>·</span>
                      <span>{evt.date}</span>
                    </div>
                    <h4 className="font-serif text-base font-bold text-slate-900">
                      {evt.title}
                    </h4>
                    <p className="text-xs text-slate-600 line-clamp-1">
                      {evt.description}
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      setActiveTab('events');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="self-start sm:self-auto px-4 py-2 text-xs font-semibold rounded-lg bg-blue-50 text-blue-900 hover:bg-blue-100 transition-colors whitespace-nowrap cursor-pointer"
                  >
                    Event Details
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Official Notices Board (1 Col) */}
          <div className="space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-700">
                Official Board
              </span>
              <h3 className="font-serif text-2xl font-bold text-slate-900">
                Important Circulars
              </h3>
            </div>

            <div className="bg-white rounded-xl border border-slate-200 p-5 divide-y divide-slate-100 space-y-4">
              {latestNotices.map((notice) => (
                <div key={notice.id} className="pt-3 first:pt-0 space-y-1">
                  <div className="flex items-center justify-between text-[11px] text-slate-500">
                    <span className="font-semibold text-slate-700">{notice.category}</span>
                    <span>{notice.date}</span>
                  </div>
                  <h5 className="text-xs font-medium text-slate-900 hover:text-blue-900 transition-colors cursor-pointer leading-snug">
                    {notice.title}
                  </h5>
                  {notice.fileSize && (
                    <span className="inline-block text-[10px] text-slate-400 font-mono">
                      {notice.fileSize}
                    </span>
                  )}
                </div>
              ))}

              <div className="pt-4">
                <button
                  onClick={() => {
                    setActiveTab('student-corner');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="w-full py-2 text-center text-xs font-semibold text-blue-900 bg-slate-50 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
                >
                  Visit Circular Archive & Notices →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Top Recruiters Marquee Strip */}
      <section className="bg-slate-950 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-2 mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
              Corporate Partnerships
            </span>
            <h3 className="font-serif text-2xl font-bold text-white">
              Trusted by Leading Global Employers
            </h3>
            <p className="text-xs text-slate-400">
              Our graduates are recruited by over 340+ top tier technology, consulting, and engineering firms worldwide.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            {topRecruiters.slice(0, 10).map((r) => (
              <div
                key={r.name}
                className="px-5 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-sm font-semibold text-slate-300 hover:text-white hover:border-slate-700 transition-colors"
              >
                {r.name}
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <button
              onClick={() => {
                setActiveTab('placements');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-xs font-semibold text-amber-400 hover:text-amber-300 underline cursor-pointer"
            >
              View Detailed Placement Statistics & Student Packages →
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

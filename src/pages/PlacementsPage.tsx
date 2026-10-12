import React from 'react';
import {
  TrendingUp,
  Award,
  Users,
  Briefcase,
  Building,
  CheckCircle2,
  DollarSign,
  Quote,
  ArrowUpRight
} from 'lucide-react';
import { placementStats, topRecruiters, placementStories } from '../data/mockData';

export const PlacementsPage: React.FC = () => {
  return (
    <div className="space-y-16 py-10">
      {/* Header Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-4">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-900">
            <span>Corporate Relations & Placements</span>
            <span>·</span>
            <span>Class of 2025-26</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-slate-900 tracking-tight leading-tight">
            Exceptional Career Outcomes & Global Placements
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Our graduates excel at the frontiers of industry and research. With rigorous training, hackathons, and corporate mentorship, we connect aspiring professionals with the world's most innovative enterprises.
          </p>
        </div>
      </section>

      {/* Primary KPI Metrics Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {placementStats.map((stat, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-2 relative overflow-hidden"
            >
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                {stat.label}
              </div>
              <div className="font-serif text-3xl sm:text-4xl font-bold text-blue-950 tabular-nums">
                {stat.value}
              </div>
              <p className="text-xs text-slate-600">
                {stat.subtext}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Package Distribution & Salary Tiers */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 text-white rounded-2xl p-8 sm:p-10 space-y-6">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
              Salary Distribution Tiers
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white mt-1">
              Package Demographics (2025-26 Season)
            </h2>
            <p className="text-xs text-slate-300 mt-2">
              Audited statistics from official Campus Recruitment Drives across Engineering, Management, and Computing batches.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 pt-4 border-t border-slate-800">
            <div className="p-4 bg-slate-800/60 rounded-xl border border-slate-700/80">
              <span className="text-xs text-slate-400 font-semibold block">Super Dream Tier (&gt;₹20 LPA)</span>
              <span className="font-serif text-2xl font-bold text-amber-400 tabular-nums block mt-1">18.4%</span>
              <span className="text-[11px] text-slate-400">Of Placed Students</span>
            </div>
            <div className="p-4 bg-slate-800/60 rounded-xl border border-slate-700/80">
              <span className="text-xs text-slate-400 font-semibold block">Dream Tier (₹12 - ₹20 LPA)</span>
              <span className="font-serif text-2xl font-bold text-white tabular-nums block mt-1">32.6%</span>
              <span className="text-[11px] text-slate-400">Of Placed Students</span>
            </div>
            <div className="p-4 bg-slate-800/60 rounded-xl border border-slate-700/80">
              <span className="text-xs text-slate-400 font-semibold block">Core & Product (₹7 - ₹12 LPA)</span>
              <span className="font-serif text-2xl font-bold text-white tabular-nums block mt-1">36.5%</span>
              <span className="text-[11px] text-slate-400">Of Placed Students</span>
            </div>
            <div className="p-4 bg-slate-800/60 rounded-xl border border-slate-700/80">
              <span className="text-xs text-slate-400 font-semibold block">Mass & Consulting (&lt;₹7 LPA)</span>
              <span className="font-serif text-2xl font-bold text-slate-300 tabular-nums block mt-1">12.5%</span>
              <span className="text-[11px] text-slate-400">Of Placed Students</span>
            </div>
          </div>
        </div>
      </section>

      {/* Top Recruiting Corporations */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-900">
            Industry Recruiters
          </span>
          <h2 className="font-serif text-3xl font-bold text-slate-900">
            Premier Corporate Placement Partners
          </h2>
          <p className="text-sm text-slate-600">
            Over 340+ leading enterprises participate annually in our on-campus recruitment seasons.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
          {topRecruiters.map((recruiter) => (
            <div
              key={recruiter.name}
              className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs flex flex-col items-center justify-center text-center space-y-1 hover:border-blue-900 transition-colors"
            >
              <div className="font-bold text-slate-900 text-sm">{recruiter.name}</div>
              <div className="text-[10px] text-slate-500 font-medium">{recruiter.category}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Student Success Stories & Testimonials */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-900">
            Student Testimonials
          </span>
          <h2 className="font-serif text-3xl font-bold text-slate-900">
            Student Placement Success Stories
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {placementStories.map((story) => (
            <div
              key={story.id}
              className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <Quote className="w-8 h-8 text-amber-500/40" />
                <p className="text-sm text-slate-700 italic leading-relaxed">
                  "{story.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <img
                    src={story.avatar}
                    alt={story.studentName}
                    referrerPolicy="no-referrer"
                    className="w-12 h-12 rounded-full object-cover border border-slate-200"
                  />
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">
                      {story.studentName}
                    </h4>
                    <p className="text-xs text-slate-500">
                      {story.course} · {story.batch}
                    </p>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-xs font-bold text-blue-900 block">{story.company}</span>
                  <span className="text-[11px] font-mono font-bold text-emerald-600 block">{story.package}</span>
                  <span className="text-[10px] text-slate-400">{story.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Training & Placement Cell (T&P) Methodology */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 space-y-6">
          <h3 className="font-serif text-2xl font-bold text-slate-900 text-center">
            How Our Training & Placement (T&P) Cell Prepares You
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            <div className="bg-white p-5 rounded-xl border border-slate-200 space-y-2">
              <span className="font-serif text-lg font-bold text-blue-900">01. Technical Sprints</span>
              <p className="text-xs text-slate-600 leading-relaxed">
                400+ hours of dedicated algorithmic problem solving, mock coding tests on LeetCode/HackerRank, and cloud architecture deep dives.
              </p>
            </div>
            <div className="bg-white p-5 rounded-xl border border-slate-200 space-y-2">
              <span className="font-serif text-lg font-bold text-blue-900">02. Executive Soft Skills</span>
              <p className="text-xs text-slate-600 leading-relaxed">
                Group discussion simulations, corporate presentation etiquette, personality development, and resume reviews by hiring leaders.
              </p>
            </div>
            <div className="bg-white p-5 rounded-xl border border-slate-200 space-y-2">
              <span className="font-serif text-lg font-bold text-blue-900">03. Corporate Internships</span>
              <p className="text-xs text-slate-600 leading-relaxed">
                Mandatory 6-month industry internship in semester 7 or 8 with an average stipend of ₹42,000/month leading to pre-placement offers.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

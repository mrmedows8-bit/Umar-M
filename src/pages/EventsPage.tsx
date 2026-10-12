import React, { useState } from 'react';
import {
  Calendar,
  Clock,
  MapPin,
  CheckCircle2,
  Users,
  X,
  Share2,
  Bookmark,
  Bell
} from 'lucide-react';
import { upcomingEvents, latestNotices } from '../data/mockData';
import { EventItem } from '../types';

export const EventsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeEventModal, setActiveEventModal] = useState<EventItem | null>(null);
  const [rsvpRegistered, setRsvpRegistered] = useState(false);
  const [rsvpName, setRsvpName] = useState('');
  const [rsvpEmail, setRsvpEmail] = useState('');

  const categories = ['All', 'Technical', 'Cultural', 'Sports', 'Academic'];

  const filteredEvents = selectedCategory === 'All'
    ? upcomingEvents
    : upcomingEvents.filter((e) => e.category === selectedCategory);

  const handleRSVP = (e: React.FormEvent) => {
    e.preventDefault();
    if (!rsvpName || !rsvpEmail) return;
    setRsvpRegistered(true);
    setTimeout(() => {
      setRsvpRegistered(false);
      setActiveEventModal(null);
      setRsvpName('');
      setRsvpEmail('');
      alert('Event RSVP confirmed! Registration pass dispatched to your email.');
    }, 1200);
  };

  return (
    <div className="space-y-16 py-10">
      {/* Header Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-4">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-900">
            <span>Campus Happenings</span>
            <span>·</span>
            <span>Fests & Conferences</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-slate-900 tracking-tight leading-tight">
            Events, Cultural Fests & Academic Summits
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Experience the vibrant spirit of ABC College. From international technical hackathons and cultural galas to inter-university athletic championships and symposiums.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between flex-wrap gap-4 border-b border-slate-200 pb-4">
          <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-xl overflow-x-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-blue-900 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {cat === 'All' ? 'All Events' : `${cat} Events`}
              </button>
            ))}
          </div>

          <div className="text-xs text-slate-500 font-medium">
            Showing <strong className="text-slate-900">{filteredEvents.length}</strong> upcoming programs
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredEvents.map((evt) => (
            <div
              key={evt.id}
              className="bg-white rounded-2xl border border-slate-200 shadow-xs hover:shadow-md transition-shadow p-6 sm:p-8 flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-blue-900 uppercase tracking-wider">
                    {evt.category} Event
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-amber-50 border border-amber-200 text-amber-900 text-xs font-semibold">
                    Registration Closes: {evt.registrationDeadline}
                  </span>
                </div>

                <h3 className="font-serif text-2xl font-bold text-slate-900 leading-snug">
                  {evt.title}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {evt.description}
                </p>

                {/* Event Logistics */}
                <div className="space-y-2 pt-2 border-t border-slate-100 text-xs text-slate-600">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-slate-400" />
                    <span className="font-medium text-slate-900">{evt.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-slate-400" />
                    <span>{evt.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-slate-400" />
                    <span>{evt.venue}</span>
                  </div>
                </div>

                {/* Highlights */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {evt.highlights.map((h, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 bg-slate-100 text-slate-700 text-xs rounded-md"
                    >
                      {h}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <button
                  onClick={() => alert(`Share link for "${evt.title}" copied to clipboard!`)}
                  className="p-2 text-slate-400 hover:text-slate-700 transition-colors"
                  title="Share event"
                >
                  <Share2 className="w-4 h-4" />
                </button>

                <button
                  onClick={() => setActiveEventModal(evt)}
                  className="px-5 py-2 text-xs font-semibold text-white bg-blue-900 hover:bg-blue-800 rounded-lg transition-colors cursor-pointer"
                >
                  Register / RSVP Pass
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* College News & Press Releases Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 space-y-6">
          <div className="max-w-xl">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-900">
              Institutional Media
            </span>
            <h3 className="font-serif text-2xl font-bold text-slate-900 mt-1">
              Recent News & Press Releases
            </h3>
          </div>

          <div className="divide-y divide-slate-200 text-xs space-y-4">
            <div className="pt-3 first:pt-0 space-y-1">
              <span className="text-slate-500 font-mono">October 11, 2026 · Press Office</span>
              <h4 className="text-sm font-bold text-slate-900 hover:text-blue-900 cursor-pointer">
                ABC College Center for Robotics Secures ₹4.2 Crore Autonomous Drone Research Grant
              </h4>
              <p className="text-slate-600">
                Grant awarded under the National Science & Technology Research initiative to develop edge-computed search and rescue systems.
              </p>
            </div>

            <div className="pt-3 space-y-1">
              <span className="text-slate-500 font-mono">October 06, 2026 · Student Council</span>
              <h4 className="text-sm font-bold text-slate-900 hover:text-blue-900 cursor-pointer">
                ABC College Debating Union Wins National Parliamentary Championship Trophy
              </h4>
              <p className="text-slate-600">
                Our collegiate debaters triumphed over 48 competing university teams in the final debate on international climate ethics.
              </p>
            </div>

            <div className="pt-3 space-y-1">
              <span className="text-slate-500 font-mono">September 25, 2026 · Alumni Relations</span>
              <h4 className="text-sm font-bold text-slate-900 hover:text-blue-900 cursor-pointer">
                Distinguished Alumnus Pledges ₹10 Crore Endowment for AI Research Fellowships
              </h4>
              <p className="text-slate-600">
                Endowment will fund 20 annual full doctoral scholarships in applied neural architectures and quantum information.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* RSVP Modal */}
      {activeEventModal && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4">
          <div
            className="w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-slate-900 text-white p-6 flex items-start justify-between">
              <div>
                <span className="text-[10px] uppercase font-bold text-amber-400 block mb-1">
                  Event Registration Desk
                </span>
                <h3 className="font-serif text-xl font-bold text-white">
                  {activeEventModal.title}
                </h3>
              </div>
              <button
                onClick={() => setActiveEventModal(null)}
                className="text-white/70 hover:text-white p-1"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleRSVP} className="p-6 space-y-4">
              <div className="bg-slate-50 p-3 rounded-lg border border-slate-200 text-xs space-y-1 text-slate-600">
                <div><strong>Date & Time:</strong> {activeEventModal.date} ({activeEventModal.time})</div>
                <div><strong>Venue:</strong> {activeEventModal.venue}</div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Participant Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={rsvpName}
                  onChange={(e) => setRsvpName(e.target.value)}
                  placeholder="e.g. Samuel Bennett"
                  className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 focus:outline-hidden focus:border-blue-900"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Email Address for Digital Pass *
                </label>
                <input
                  type="email"
                  required
                  value={rsvpEmail}
                  onChange={(e) => setRsvpEmail(e.target.value)}
                  placeholder="participant@example.com"
                  className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 focus:outline-hidden focus:border-blue-900"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={rsvpRegistered}
                  className="w-full py-2.5 px-4 text-sm font-semibold rounded-lg bg-blue-900 hover:bg-blue-800 text-white transition-colors cursor-pointer"
                >
                  {rsvpRegistered ? 'Confirming Registration...' : 'Confirm Registration & Download Pass'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

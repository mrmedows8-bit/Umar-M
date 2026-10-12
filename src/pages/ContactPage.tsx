import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  AlertCircle,
  Building2,
  Navigation,
  Globe,
  Share2
} from 'lucide-react';
import { collegeInfo } from '../data/mockData';

export const ContactPage: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('Admissions Enquiry');
  const [message, setMessage] = useState('');
  const [phone, setPhone] = useState('');

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Interactive campus building pins
  const [selectedBuilding, setSelectedBuilding] = useState<string>('admin');

  const campusBuildings = [
    {
      id: 'admin',
      name: 'Main Administrative Complex & Clock Tower',
      zone: 'Central Quadrangle',
      description: 'Houses the Principal\'s Office, Registrar, Admissions Counseling Desks, and Academic Accounts.',
      timings: 'Mon-Sat: 8:30 AM – 5:30 PM'
    },
    {
      id: 'library',
      name: 'Tagore Central Digital Library',
      zone: 'Academic North Wing',
      description: '4-level reading suites, 1.2 Lakh volumes, journal repository, and digital archives.',
      timings: 'Open Daily: 7:00 AM – 11:00 PM'
    },
    {
      id: 'engineering',
      name: 'Kalam Engineering & Computing Complex',
      zone: 'Science & Research East',
      description: 'Computer Science Labs, NVIDIA AI Rig, Robotics Workshop, and Electronics cleanrooms.',
      timings: 'Open 24/7 for Scholars'
    },
    {
      id: 'sports',
      name: 'Olympus Multi-Sport Arena & Auditorium',
      zone: 'South Campus Grounds',
      description: 'Indoor maple-wood courts, 2,500-seat acoustic convention center, and 50m pool.',
      timings: 'Daily: 6:00 AM – 9:00 PM'
    },
    {
      id: 'hostels',
      name: 'Residential Towers (Ganga & Yamuna Halls)',
      zone: 'West Campus Enclave',
      description: 'Furnished student residences, recreation rooms, infirmary, and security gatehouse.',
      timings: 'Resident Access 24/7'
    }
  ];

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!name.trim()) errs.name = 'Full name is required';
    if (!email.trim()) {
      errs.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errs.email = 'Please provide a valid email format';
    }
    if (!phone.trim()) {
      errs.phone = 'Phone number is required';
    }
    if (!message.trim()) errs.message = 'Please enter your message or question';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const activeBuildingData = campusBuildings.find((b) => b.id === selectedBuilding) || campusBuildings[0];

  return (
    <div className="space-y-16 py-10">
      {/* Header Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-4">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-900">
            <span>Get in Touch</span>
            <span>·</span>
            <span>Campus Help Desk</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-slate-900 tracking-tight leading-tight">
            Connect with ABC College
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Have questions regarding admissions, degree programs, campus tours, or academic verifications? Our administrative counselors and departments are here to assist.
          </p>
        </div>
      </section>

      {/* Contact Cards Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-2">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-900 flex items-center justify-center">
              <MapPin className="w-5 h-5" />
            </div>
            <h4 className="font-serif text-base font-bold text-slate-900">Campus Address</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              {collegeInfo.location}
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-2">
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center">
              <Phone className="w-5 h-5" />
            </div>
            <h4 className="font-serif text-base font-bold text-slate-900">Admissions Desk</h4>
            <p className="text-xs text-slate-600 leading-relaxed font-mono">
              {collegeInfo.admissionsHotline}
            </p>
            <p className="text-[11px] text-slate-400">Toll-free across India</p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-2">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
              <Mail className="w-5 h-5" />
            </div>
            <h4 className="font-serif text-base font-bold text-slate-900">Email Inquiries</h4>
            <p className="text-xs text-slate-600 leading-relaxed font-mono">
              {collegeInfo.admissionsEmail}
            </p>
            <p className="text-[11px] text-slate-400">{collegeInfo.infoEmail}</p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-2">
            <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center">
              <Clock className="w-5 h-5" />
            </div>
            <h4 className="font-serif text-base font-bold text-slate-900">Office Working Hours</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              {collegeInfo.officeHours}
            </p>
            <p className="text-[11px] text-slate-400">Campus gates open 24/7</p>
          </div>
        </div>
      </section>

      {/* Contact Form and Interactive Campus Map Split */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Form (6 cols) */}
          <div className="lg:col-span-6 bg-white rounded-2xl border border-slate-200 shadow-xs p-8 space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-blue-900">
                Direct Communication
              </span>
              <h3 className="font-serif text-2xl font-bold text-slate-900 mt-1">
                Send an Official Inquiry
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Responses are typically provided within 1 business day by the concerned department.
              </p>
            </div>

            {submitted ? (
              <div className="p-6 rounded-xl bg-emerald-50 border border-emerald-200 text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                <h4 className="font-serif text-lg font-bold text-emerald-950">
                  Message Dispatched Successfully!
                </h4>
                <p className="text-xs text-emerald-800">
                  Thank you, <strong className="text-emerald-950">{name}</strong>. Your communication regarding "{subject}" has been queued with our campus office. We will reply to {email}.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setName('');
                    setEmail('');
                    setPhone('');
                    setMessage('');
                  }}
                  className="mt-2 px-4 py-2 text-xs font-semibold rounded-lg bg-emerald-700 text-white hover:bg-emerald-800 transition-colors cursor-pointer"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Eleanor Vance"
                      className={`w-full px-3.5 py-2 text-sm rounded-xl border ${
                        errors.name ? 'border-rose-400 bg-rose-50/20' : 'border-slate-300'
                      } focus:outline-hidden focus:border-blue-900 focus:ring-1 focus:ring-blue-900`}
                    />
                    {errors.name && (
                      <span className="text-[11px] text-rose-600 mt-1 block">{errors.name}</span>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="name@example.com"
                      className={`w-full px-3.5 py-2 text-sm rounded-xl border ${
                        errors.email ? 'border-rose-400 bg-rose-50/20' : 'border-slate-300'
                      } focus:outline-hidden focus:border-blue-900 focus:ring-1 focus:ring-blue-900`}
                    />
                    {errors.email && (
                      <span className="text-[11px] text-rose-600 mt-1 block">{errors.email}</span>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+91 9876543210"
                      className={`w-full px-3.5 py-2 text-sm rounded-xl border ${
                        errors.phone ? 'border-rose-400 bg-rose-50/20' : 'border-slate-300'
                      } focus:outline-hidden focus:border-blue-900 focus:ring-1 focus:ring-blue-900`}
                    />
                    {errors.phone && (
                      <span className="text-[11px] text-rose-600 mt-1 block">{errors.phone}</span>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Subject / Purpose *
                    </label>
                    <select
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      className="w-full px-3.5 py-2 text-sm rounded-xl border border-slate-300 bg-white focus:outline-hidden focus:border-blue-900 focus:ring-1 focus:ring-blue-900"
                    >
                      <option value="Admissions Enquiry">Admissions & Eligibility</option>
                      <option value="Academic Verification">Degree / Transcript Verification</option>
                      <option value="Campus Tour Booking">Campus Guided Tour Booking</option>
                      <option value="Placement & Recruitment">Corporate Placement Collaboration</option>
                      <option value="Alumni Relations">Alumni Association Query</option>
                      <option value="General Administration">General Inquiries</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Your Message *
                  </label>
                  <textarea
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Please specify your query or requirements..."
                    className={`w-full px-3.5 py-2 text-sm rounded-xl border ${
                      errors.message ? 'border-rose-400 bg-rose-50/20' : 'border-slate-300'
                    } focus:outline-hidden focus:border-blue-900 focus:ring-1 focus:ring-blue-900`}
                  />
                  {errors.message && (
                    <span className="text-[11px] text-rose-600 mt-1 block">{errors.message}</span>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 px-4 text-sm font-semibold rounded-xl text-white bg-blue-900 hover:bg-blue-800 transition-colors shadow-xs flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75"
                >
                  {isSubmitting ? (
                    <span>Sending message...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Official Message</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Interactive Campus Map & Building Locator (6 cols) */}
          <div className="lg:col-span-6 bg-slate-900 text-white rounded-2xl p-8 space-y-6 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                    Interactive Campus Directory
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-white mt-1">
                    120-Acre Campus Building Locator
                  </h3>
                </div>
                <Navigation className="w-5 h-5 text-amber-400" />
              </div>
              <p className="text-xs text-slate-300">
                Select any campus zone to view building specifications, department offices, and visitor access hours.
              </p>

              {/* Building selector buttons */}
              <div className="flex flex-wrap gap-2 pt-2">
                {campusBuildings.map((b) => (
                  <button
                    key={b.id}
                    onClick={() => setSelectedBuilding(b.id)}
                    className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
                      selectedBuilding === b.id
                        ? 'bg-amber-400 text-slate-950 font-bold'
                        : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                    }`}
                  >
                    {b.name.split('&')[0]}
                  </button>
                ))}
              </div>

              {/* Selected Building Details Display */}
              <div className="mt-4 p-5 rounded-xl bg-slate-950/80 border border-slate-800 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-amber-400">{activeBuildingData.zone}</span>
                  <span className="text-[11px] font-mono text-slate-400">{activeBuildingData.timings}</span>
                </div>
                <h4 className="font-serif text-lg font-bold text-white">
                  {activeBuildingData.name}
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {activeBuildingData.description}
                </p>
              </div>

              {/* Schematic Map Visualizer */}
              <div className="relative rounded-xl overflow-hidden bg-slate-950 border border-slate-800 p-4 text-center">
                <div className="py-6 flex flex-col items-center justify-center space-y-2">
                  <Globe className="w-8 h-8 text-blue-400 animate-pulse" />
                  <span className="text-xs font-mono text-slate-300 font-semibold">
                    GPS Coordinates: 12°58'23.2"N 77°35'44.8"E
                  </span>
                  <span className="text-[11px] text-slate-500">
                    Located 15 minutes from Metro Central Interchange · Free Visitor Parking Available
                  </span>
                </div>
              </div>
            </div>

            {/* Social channels */}
            <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
              <span>Official Social Handles:</span>
              <div className="flex items-center gap-3 text-slate-300">
                <span className="hover:text-amber-400 cursor-pointer">LinkedIn</span>
                <span>·</span>
                <span className="hover:text-amber-400 cursor-pointer">YouTube</span>
                <span>·</span>
                <span className="hover:text-amber-400 cursor-pointer">X / Twitter</span>
                <span>·</span>
                <span className="hover:text-amber-400 cursor-pointer">Instagram</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

import React, { useState } from 'react';
import {
  Calendar,
  CreditCard,
  CheckCircle2,
  FileText,
  AlertCircle,
  Download,
  Send,
  HelpCircle,
  GraduationCap
} from 'lucide-react';
import { collegeInfo, coursesData } from '../data/mockData';
import { AdmissionEnquiry } from '../types';

export const AdmissionsPage: React.FC = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [selectedCourse, setSelectedCourse] = useState(coursesData[0].name);
  const [qualifyingMarks, setQualifyingMarks] = useState('');
  const [city, setCity] = useState('');
  const [message, setMessage] = useState('');

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedEnquiry, setSubmittedEnquiry] = useState<AdmissionEnquiry | null>(null);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!fullName.trim()) errs.fullName = 'Please enter your legal full name';
    if (!email.trim()) {
      errs.email = 'Valid email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errs.email = 'Please provide a valid email format';
    }
    if (!phone.trim()) {
      errs.phone = '10-digit mobile number is required';
    } else if (!/^\+?[0-9\s-]{10,14}$/.test(phone.trim())) {
      errs.phone = 'Enter a valid mobile phone number';
    }
    if (!qualifyingMarks.trim()) errs.qualifyingMarks = 'Enter 10+2 / Graduation marks or CGPA';
    if (!city.trim()) errs.city = 'Enter current city of residence';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      const enquiry: AdmissionEnquiry = {
        id: `ABC-ADM-${Date.now().toString().slice(-6)}`,
        fullName: fullName.trim(),
        email: email.trim(),
        phone: phone.trim(),
        selectedCourse,
        qualifyingMarks: qualifyingMarks.trim(),
        city: city.trim(),
        message: message.trim(),
        submittedAt: new Date().toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'short',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        }),
        status: 'Pending Review'
      };

      try {
        const stored = localStorage.getItem('abc_admission_enquiries');
        const list = stored ? JSON.parse(stored) : [];
        list.unshift(enquiry);
        localStorage.setItem('abc_admission_enquiries', JSON.stringify(list));
      } catch (err) {
        console.error(err);
      }

      setIsSubmitting(false);
      setSubmittedEnquiry(enquiry);
    }, 600);
  };

  const handleDownloadProspectus = () => {
    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 4000);
  };

  return (
    <div className="space-y-16 py-10">
      {/* Header Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-4">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-900">
            <span>Admissions Portal 2026-27</span>
            <span>·</span>
            <span>Autonomous Merit Selection</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-slate-900 tracking-tight leading-tight">
            Begin Your Academic Journey at ABC College
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Admissions for the 2026-27 academic session are now open across undergraduate and postgraduate schools. Explore the step-by-step procedure, key dates, fee structures, and register an enquiry online.
          </p>
        </div>
      </section>

      {/* 4-Step Admission Roadmap */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-900">
            Roadmap
          </span>
          <h2 className="font-serif text-3xl font-bold text-slate-900">
            4-Step Admission Procedure
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-3 relative">
            <div className="w-10 h-10 rounded-xl bg-blue-900 text-amber-400 font-bold flex items-center justify-center font-mono">
              01
            </div>
            <h3 className="font-serif text-lg font-bold text-slate-900">
              Online Registration & Enquiry
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Complete the online registration form below with academic marks and branch preferences.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-3 relative">
            <div className="w-10 h-10 rounded-xl bg-blue-900 text-amber-400 font-bold flex items-center justify-center font-mono">
              02
            </div>
            <h3 className="font-serif text-lg font-bold text-slate-900">
              Entrance Exam / Merit Rank
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Scores assessed through National CET/JEE/CAT or College Autonomous Aptitude Test (ABC-AAT).
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-3 relative">
            <div className="w-10 h-10 rounded-xl bg-blue-900 text-amber-400 font-bold flex items-center justify-center font-mono">
              03
            </div>
            <h3 className="font-serif text-lg font-bold text-slate-900">
              Academic Counseling
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              One-on-one session with departmental deans for document verification and seat choice allocation.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-3 relative">
            <div className="w-10 h-10 rounded-xl bg-blue-900 text-amber-400 font-bold flex items-center justify-center font-mono">
              04
            </div>
            <h3 className="font-serif text-lg font-bold text-slate-900">
              Enrollment & Fee Confirmation
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Provisional admission letter issuance followed by institutional fee confirmation and hostel allotment.
            </p>
          </div>
        </div>
      </section>

      {/* Main Form & Important Dates Split */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Form Column (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 shadow-xs p-8 space-y-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-900 mb-1">
                <GraduationCap className="w-4 h-4" />
                <span>Direct Application Desk</span>
              </div>
              <h2 className="font-serif text-2xl font-bold text-slate-900">
                Online Admission Enquiry Form
              </h2>
              <p className="text-xs text-slate-500 mt-1">
                Fill out the details below. Our admissions office will review your qualifying marks and arrange counselor briefing.
              </p>
            </div>

            {submittedEnquiry ? (
              <div className="bg-emerald-50/70 border border-emerald-200 rounded-xl p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-8 h-8 text-emerald-600 shrink-0" />
                  <div>
                    <h4 className="font-bold text-emerald-950 text-base">
                      Application Enquiry Submitted!
                    </h4>
                    <p className="text-xs text-emerald-800">
                      Tracking Reference ID: <span className="font-mono font-bold">{submittedEnquiry.id}</span>
                    </p>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg border border-emerald-100 text-xs space-y-1.5 text-slate-700">
                  <div><strong>Applicant:</strong> {submittedEnquiry.fullName}</div>
                  <div><strong>Email:</strong> {submittedEnquiry.email}</div>
                  <div><strong>Program:</strong> {submittedEnquiry.selectedCourse}</div>
                  <div><strong>Qualifying Marks:</strong> {submittedEnquiry.qualifyingMarks}</div>
                  <div><strong>Timestamp:</strong> {submittedEnquiry.submittedAt}</div>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed">
                  A verification confirmation has been recorded. Our admissions counselor will contact you at {submittedEnquiry.phone} with course syllabus and scholarship options.
                </p>

                <button
                  onClick={() => {
                    setSubmittedEnquiry(null);
                    setFullName('');
                    setEmail('');
                    setPhone('');
                    setQualifyingMarks('');
                    setCity('');
                    setMessage('');
                  }}
                  className="px-4 py-2 text-xs font-semibold rounded-lg bg-emerald-700 text-white hover:bg-emerald-800 cursor-pointer"
                >
                  Submit Another Application
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Applicant Full Name *
                    </label>
                    <input
                      type="text"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="e.g. Johnathan Vance"
                      className={`w-full px-3.5 py-2 text-sm rounded-xl border ${
                        errors.fullName ? 'border-rose-400 bg-rose-50/20' : 'border-slate-300'
                      } focus:outline-hidden focus:border-blue-900 focus:ring-1 focus:ring-blue-900`}
                    />
                    {errors.fullName && (
                      <span className="flex items-center gap-1 text-[11px] text-rose-600 mt-1">
                        <AlertCircle className="w-3 h-3" /> {errors.fullName}
                      </span>
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
                      placeholder="applicant@example.com"
                      className={`w-full px-3.5 py-2 text-sm rounded-xl border ${
                        errors.email ? 'border-rose-400 bg-rose-50/20' : 'border-slate-300'
                      } focus:outline-hidden focus:border-blue-900 focus:ring-1 focus:ring-blue-900`}
                    />
                    {errors.email && (
                      <span className="flex items-center gap-1 text-[11px] text-rose-600 mt-1">
                        <AlertCircle className="w-3 h-3" /> {errors.email}
                      </span>
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
                      <span className="flex items-center gap-1 text-[11px] text-rose-600 mt-1">
                        <AlertCircle className="w-3 h-3" /> {errors.phone}
                      </span>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Academic Program *
                    </label>
                    <select
                      value={selectedCourse}
                      onChange={(e) => setSelectedCourse(e.target.value)}
                      className="w-full px-3.5 py-2 text-sm rounded-xl border border-slate-300 bg-white focus:outline-hidden focus:border-blue-900 focus:ring-1 focus:ring-blue-900"
                    >
                      {coursesData.map((course) => (
                        <option key={course.id} value={course.name}>
                          {course.name} ({course.degree})
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Qualifying Marks (12th / Grad %) *
                    </label>
                    <input
                      type="text"
                      value={qualifyingMarks}
                      onChange={(e) => setQualifyingMarks(e.target.value)}
                      placeholder="e.g. 88.4% or 8.9 CGPA"
                      className={`w-full px-3.5 py-2 text-sm rounded-xl border ${
                        errors.qualifyingMarks ? 'border-rose-400 bg-rose-50/20' : 'border-slate-300'
                      } focus:outline-hidden focus:border-blue-900 focus:ring-1 focus:ring-blue-900`}
                    />
                    {errors.qualifyingMarks && (
                      <span className="flex items-center gap-1 text-[11px] text-rose-600 mt-1">
                        <AlertCircle className="w-3 h-3" /> {errors.qualifyingMarks}
                      </span>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Current City / Domicile *
                    </label>
                    <input
                      type="text"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      placeholder="e.g. Bangalore, Pune, Delhi"
                      className={`w-full px-3.5 py-2 text-sm rounded-xl border ${
                        errors.city ? 'border-rose-400 bg-rose-50/20' : 'border-slate-300'
                      } focus:outline-hidden focus:border-blue-900 focus:ring-1 focus:ring-blue-900`}
                    />
                    {errors.city && (
                      <span className="flex items-center gap-1 text-[11px] text-rose-600 mt-1">
                        <AlertCircle className="w-3 h-3" /> {errors.city}
                      </span>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Special Query / Hostel / Scholarship Requirements
                  </label>
                  <textarea
                    rows={2}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Provide any details regarding scholarship eligibility or fee installment options..."
                    className="w-full px-3.5 py-2 text-sm rounded-xl border border-slate-300 focus:outline-hidden focus:border-blue-900 focus:ring-1 focus:ring-blue-900"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 px-4 text-sm font-semibold rounded-xl text-white bg-blue-900 hover:bg-blue-800 transition-colors shadow-xs flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75"
                >
                  {isSubmitting ? (
                    <span>Registering Application...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Submit Official Enquiry</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Important Dates & Prospectus Column (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Dates Card */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-xs p-6 space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-900">
                <Calendar className="w-4 h-4" />
                <span>Academic Calendar 2026-27</span>
              </div>
              <h3 className="font-serif text-xl font-bold text-slate-900">
                Key Admission Dates
              </h3>

              <div className="divide-y divide-slate-100 text-xs space-y-3">
                <div className="pt-2 first:pt-0 flex justify-between">
                  <span className="text-slate-600">Online Applications Open</span>
                  <span className="font-semibold text-slate-900">October 01, 2026</span>
                </div>
                <div className="pt-2 flex justify-between">
                  <span className="text-slate-600">Early Action Round Deadline</span>
                  <span className="font-semibold text-slate-900">November 15, 2026</span>
                </div>
                <div className="pt-2 flex justify-between">
                  <span className="text-slate-600">Entrance Test (ABC-AAT Round 1)</span>
                  <span className="font-semibold text-slate-900">December 05, 2026</span>
                </div>
                <div className="pt-2 flex justify-between">
                  <span className="text-slate-600">First Merit List Announcement</span>
                  <span className="font-semibold text-slate-900">December 20, 2026</span>
                </div>
                <div className="pt-2 flex justify-between">
                  <span className="text-slate-600">Commencement of Orientation</span>
                  <span className="font-semibold text-emerald-600">July 20, 2027</span>
                </div>
              </div>
            </div>

            {/* Download Prospectus Card */}
            <div className="bg-slate-900 text-white rounded-2xl p-6 space-y-4">
              <div className="w-10 h-10 rounded-xl bg-amber-400 text-slate-950 flex items-center justify-center">
                <Download className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-serif text-lg font-bold text-white">
                  Download Official Prospectus 2026-27
                </h4>
                <p className="text-xs text-slate-300 mt-1">
                  Get the comprehensive 64-page brochure with syllabus breakdowns, fee structures, faculty credentials, and campus amenities.
                </p>
              </div>

              {downloadSuccess ? (
                <div className="p-3 bg-emerald-900/80 border border-emerald-700 text-emerald-200 rounded-lg text-xs flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Prospectus 2026-27 (PDF) generated and downloaded!</span>
                </div>
              ) : (
                <button
                  onClick={handleDownloadProspectus}
                  className="w-full py-2.5 px-4 text-xs font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors cursor-pointer flex items-center justify-center gap-2"
                >
                  <FileText className="w-4 h-4" />
                  <span>Download Prospectus (PDF · 4.8 MB)</span>
                </button>
              )}
            </div>

            {/* Scholarship Schemes */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 space-y-3">
              <h4 className="font-serif text-base font-bold text-slate-900">
                Merit & Need-Based Scholarships
              </h4>
              <ul className="text-xs text-slate-600 space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Merit Scholars:</strong> Up to 75% tuition fee waiver for applicants with &gt;92% in 10+2.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Sports Quota:</strong> 100% sports excellence waiver for national/state level players.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Girl Child STEM Initiative:</strong> Special 25% grant for women in Engineering.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

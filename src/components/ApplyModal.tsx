import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, AlertCircle, Send, GraduationCap } from 'lucide-react';
import { coursesData } from '../data/mockData';
import { AdmissionEnquiry } from '../types';

interface ApplyModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedCourseId?: string;
  onSubmissionSuccess?: (enquiry: AdmissionEnquiry) => void;
}

export const ApplyModal: React.FC<ApplyModalProps> = ({
  isOpen,
  onClose,
  preselectedCourseId,
  onSubmissionSuccess
}) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [selectedCourse, setSelectedCourse] = useState('');
  const [qualifyingMarks, setQualifyingMarks] = useState('');
  const [city, setCity] = useState('');
  const [message, setMessage] = useState('');

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedEnquiry, setSubmittedEnquiry] = useState<AdmissionEnquiry | null>(null);

  useEffect(() => {
    if (preselectedCourseId) {
      const found = coursesData.find((c) => c.id === preselectedCourseId);
      if (found) {
        setSelectedCourse(found.name);
      }
    } else if (!selectedCourse && coursesData.length > 0) {
      setSelectedCourse(coursesData[0].name);
    }
  }, [preselectedCourseId, isOpen]);

  if (!isOpen) return null;

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!fullName.trim()) errs.fullName = 'Full name is required';
    if (!email.trim()) {
      errs.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errs.email = 'Please provide a valid email address';
    }
    if (!phone.trim()) {
      errs.phone = 'Contact number is required';
    } else if (!/^\+?[0-9\s-]{10,14}$/.test(phone.trim())) {
      errs.phone = 'Please enter a valid 10-digit mobile number';
    }
    if (!selectedCourse) errs.selectedCourse = 'Please select a degree program';
    if (!qualifyingMarks.trim()) {
      errs.qualifyingMarks = 'Please enter 10+2 or graduation percentage / CGPA';
    }
    if (!city.trim()) errs.city = 'Current city of residence is required';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      const newEnquiry: AdmissionEnquiry = {
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

      // Store in localStorage
      try {
        const stored = localStorage.getItem('abc_admission_enquiries');
        const list = stored ? JSON.parse(stored) : [];
        list.unshift(newEnquiry);
        localStorage.setItem('abc_admission_enquiries', JSON.stringify(list));
      } catch (e) {
        console.error('LocalStorage write error', e);
      }

      setIsSubmitting(false);
      setSubmittedEnquiry(newEnquiry);
      if (onSubmissionSuccess) onSubmissionSuccess(newEnquiry);
    }, 700);
  };

  const handleReset = () => {
    setFullName('');
    setEmail('');
    setPhone('');
    setQualifyingMarks('');
    setCity('');
    setMessage('');
    setErrors({});
    setSubmittedEnquiry(null);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4">
      <div
        className="w-full max-w-xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-amber-400">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-serif font-bold text-white">
                Admissions Enquiry 2026-27
              </h3>
              <p className="text-xs text-blue-200">
                Official Application Counseling & Eligibility Assessment
              </p>
            </div>
          </div>
          <button
            onClick={() => {
              handleReset();
              onClose();
            }}
            className="text-white/70 hover:text-white p-1 rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6">
          {submittedEnquiry ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-slate-900">
                  Enquiry Successfully Registered!
                </h4>
                <p className="text-sm text-slate-600 mt-1">
                  Thank you, <span className="font-semibold text-slate-900">{submittedEnquiry.fullName}</span>. Your admission enquiry has been logged with our Academic Admissions Cell.
                </p>
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-left text-xs space-y-2">
                <div className="flex justify-between border-b border-slate-200 pb-2">
                  <span className="text-slate-500">Enquiry Reference ID:</span>
                  <span className="font-mono font-bold text-blue-900">{submittedEnquiry.id}</span>
                </div>
                <div className="flex justify-between border-b border-slate-200 pb-2">
                  <span className="text-slate-500">Program Applied:</span>
                  <span className="font-semibold text-slate-800">{submittedEnquiry.selectedCourse}</span>
                </div>
                <div className="flex justify-between border-b border-slate-200 pb-2">
                  <span className="text-slate-500">Status:</span>
                  <span className="font-semibold text-emerald-600">Pending Counselor Review</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Submitted On:</span>
                  <span className="text-slate-700">{submittedEnquiry.submittedAt}</span>
                </div>
              </div>

              <p className="text-xs text-slate-500">
                A verification SMS and orientation email with the admission syllabus have been dispatched. Our senior admissions counselor will reach out within 24 working hours.
              </p>

              <div className="pt-2 flex gap-3">
                <button
                  onClick={handleReset}
                  className="flex-1 py-2.5 px-4 text-sm font-semibold rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors cursor-pointer"
                >
                  Submit Another Enquiry
                </button>
                <button
                  onClick={() => {
                    handleReset();
                    onClose();
                  }}
                  className="flex-1 py-2.5 px-4 text-sm font-semibold rounded-lg bg-blue-900 hover:bg-blue-800 text-white transition-colors cursor-pointer"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Candidate Full Name *
                  </label>
                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Johnathan Smith"
                    className={`w-full px-3 py-2 text-sm rounded-lg border ${
                      errors.fullName ? 'border-rose-400 bg-rose-50/30' : 'border-slate-300'
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
                    placeholder="applicant@gmail.com"
                    className={`w-full px-3 py-2 text-sm rounded-lg border ${
                      errors.email ? 'border-rose-400 bg-rose-50/30' : 'border-slate-300'
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
                    Phone / Mobile Number *
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 9876543210"
                    className={`w-full px-3 py-2 text-sm rounded-lg border ${
                      errors.phone ? 'border-rose-400 bg-rose-50/30' : 'border-slate-300'
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
                    Select Academic Program *
                  </label>
                  <select
                    value={selectedCourse}
                    onChange={(e) => setSelectedCourse(e.target.value)}
                    className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 focus:outline-hidden focus:border-blue-900 focus:ring-1 focus:ring-blue-900 bg-white"
                  >
                    {coursesData.map((course) => (
                      <option key={course.id} value={course.name}>
                        {course.name} ({course.level === 'Undergraduate' ? 'UG' : 'PG'})
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
                    placeholder="e.g. 84.5% or 8.8 CGPA"
                    className={`w-full px-3 py-2 text-sm rounded-lg border ${
                      errors.qualifyingMarks ? 'border-rose-400 bg-rose-50/30' : 'border-slate-300'
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
                    City / Domicile *
                  </label>
                  <input
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="e.g. Bangalore, Delhi, Mumbai"
                    className={`w-full px-3 py-2 text-sm rounded-lg border ${
                      errors.city ? 'border-rose-400 bg-rose-50/30' : 'border-slate-300'
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
                  Questions or Remarks (Optional)
                </label>
                <textarea
                  rows={2}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Inquire about hostel accommodation, scholarships, or entrance test..."
                  className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 focus:outline-hidden focus:border-blue-900 focus:ring-1 focus:ring-blue-900"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 text-sm font-semibold rounded-lg text-white bg-blue-900 hover:bg-blue-800 active:bg-blue-950 transition-colors shadow-xs cursor-pointer disabled:opacity-75"
                >
                  {isSubmitting ? (
                    <span>Registering Application...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Submit Admission Enquiry</span>
                    </>
                  )}
                </button>
              </div>

              <p className="text-[11px] text-slate-500 text-center">
                Your personal details are protected under academic privacy guidelines.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

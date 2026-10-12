import React from 'react';
import {
  GraduationCap,
  MapPin,
  Phone,
  Mail,
  Clock,
  ExternalLink,
  ShieldCheck,
  Award
} from 'lucide-react';
import { collegeInfo } from '../data/mockData';

interface FooterProps {
  setActiveTab: (tab: string) => void;
  onOpenApplyModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ setActiveTab, onOpenApplyModal }) => {
  const handleNav = (tab: string) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          {/* Col 1: Brand & Credentials (spans 2 on large screens) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-blue-900 flex items-center justify-center text-amber-400 shadow-md">
                <GraduationCap className="w-7 h-7" />
              </div>
              <div>
                <span className="font-serif text-2xl font-bold tracking-tight text-white block">
                  ABC College
                </span>
                <span className="text-xs text-amber-400 font-medium">
                  {collegeInfo.affiliation}
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Established in 1984, ABC College is an autonomous institution of academic excellence dedicated to transformative teaching, world-class research, and ethical leadership in global society.
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-slate-300">
                <Award className="w-4 h-4 text-amber-400 shrink-0" />
                <span>NAAC 'A++' Grade Accredited</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-slate-300">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>NIRF Top 50 Ranked</span>
              </div>
            </div>

            {/* Emergency & Anti-ragging cell notice */}
            <div className="text-xs text-slate-400 pt-2 border-t border-slate-900">
              <span className="font-semibold text-slate-300">National Anti-Ragging Helpline: </span>
              <span className="text-amber-400">1800-180-5522</span> (Toll Free, 24x7)
            </div>
          </div>

          {/* Col 2: Academic Programs */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              Academic Programs
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <button
                  onClick={() => handleNav('courses')}
                  className="hover:text-amber-400 transition-colors text-left cursor-pointer"
                >
                  B.Tech. Computer Science & AI
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('courses')}
                  className="hover:text-amber-400 transition-colors text-left cursor-pointer"
                >
                  B.E. Mechanical Engineering
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('courses')}
                  className="hover:text-amber-400 transition-colors text-left cursor-pointer"
                >
                  B.Sc. Data Science & Applied Stats
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('courses')}
                  className="hover:text-amber-400 transition-colors text-left cursor-pointer"
                >
                  BBA & B.Com. (Honours)
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('courses')}
                  className="hover:text-amber-400 transition-colors text-left cursor-pointer"
                >
                  BCA Computer Applications
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('courses')}
                  className="hover:text-amber-400 transition-colors text-left cursor-pointer"
                >
                  MBA & MCA Post-Graduation
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Quick Navigation */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <button
                  onClick={() => handleNav('about')}
                  className="hover:text-amber-400 transition-colors cursor-pointer"
                >
                  About Our Legacy & Vision
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('admissions')}
                  className="hover:text-amber-400 transition-colors cursor-pointer"
                >
                  Admissions 2026-27 Procedure
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('faculty')}
                  className="hover:text-amber-400 transition-colors cursor-pointer"
                >
                  Distinguished Faculty Directory
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('campus')}
                  className="hover:text-amber-400 transition-colors cursor-pointer"
                >
                  Campus & Research Facilities
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('placements')}
                  className="hover:text-amber-400 transition-colors cursor-pointer"
                >
                  Placement Records & Recruiters
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('student-corner')}
                  className="hover:text-amber-400 transition-colors cursor-pointer"
                >
                  Student & Faculty ERP Portal
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('events')}
                  className="hover:text-amber-400 transition-colors cursor-pointer"
                >
                  Upcoming Conferences & Fests
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Office Hours */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              Campus Office
            </h4>
            <div className="space-y-3 text-sm text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span className="leading-snug">{collegeInfo.location}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{collegeInfo.admissionsHotline}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{collegeInfo.admissionsEmail}</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>{collegeInfo.officeHours}</span>
              </div>

              <div className="pt-2">
                <button
                  onClick={onOpenApplyModal}
                  className="w-full py-2 px-3 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold text-xs tracking-wide transition-colors cursor-pointer text-center"
                >
                  Enquire for Admission
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} ABC College. All Rights Reserved. An Autonomous Academic Institution.</p>
          <div className="flex items-center gap-6">
            <button onClick={() => handleNav('contact')} className="hover:text-slate-300 transition-colors">
              Campus Map & Directions
            </button>
            <span className="text-slate-700">·</span>
            <button onClick={() => handleNav('about')} className="hover:text-slate-300 transition-colors">
              Institutional Accreditations
            </button>
            <span className="text-slate-700">·</span>
            <button onClick={() => handleNav('student-corner')} className="hover:text-slate-300 transition-colors">
              ERP Student Portal
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

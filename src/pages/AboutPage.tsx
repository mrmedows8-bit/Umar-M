import React from 'react';
import {
  Award,
  ShieldCheck,
  CheckCircle,
  BookOpen,
  Target,
  Compass,
  HeartHandshake,
  History,
  Building,
  Quote
} from 'lucide-react';
import { collegeInfo, campusImages } from '../data/mockData';

interface AboutPageProps {
  onOpenApplyModal: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenApplyModal }) => {
  return (
    <div className="space-y-16 py-10">
      {/* Editorial Title Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-4">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-900">
            <span>Institutional Profile</span>
            <span>·</span>
            <span>Est. 1984</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-slate-900 tracking-tight leading-tight">
            Four Decades of Academic Brilliance, Character & Innovation
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            ABC College is an autonomous collegiate institution dedicated to fostering intellectual curiosity, cutting-edge scientific investigation, and global leadership.
          </p>
        </div>
      </section>

      {/* Accreditations & Key Recognitions Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-2">
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
              <Award className="w-5 h-5" />
            </div>
            <div className="font-serif text-xl font-bold text-slate-900">NAAC 'A++' Grade</div>
            <div className="text-xs text-slate-500 leading-relaxed">
              Highest institutional score (CGPA 3.82/4.00) in the state for academic infrastructure and research output.
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-2">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-900 flex items-center justify-center">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div className="font-serif text-xl font-bold text-slate-900">NIRF Top 50</div>
            <div className="text-xs text-slate-500 leading-relaxed">
              Ranked 38th nationally among premier higher education and engineering institutions.
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-2">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
              <Building className="w-5 h-5" />
            </div>
            <div className="font-serif text-xl font-bold text-slate-900">UGC Autonomous</div>
            <div className="text-xs text-slate-500 leading-relaxed">
              Autonomous curriculum flexibility aligned directly with cutting-edge industry standards and global universities.
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-2">
            <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center">
              <BookOpen className="w-5 h-5" />
            </div>
            <div className="font-serif text-xl font-bold text-slate-900">NBA Accredited</div>
            <div className="text-xs text-slate-500 leading-relaxed">
              All engineering and computing degree tiers accredited by the National Board of Accreditation.
            </div>
          </div>
        </div>
      </section>

      {/* Principal's Message with Portrait */}
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Portrait Column */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative max-w-sm rounded-2xl overflow-hidden shadow-2xl border-2 border-slate-800">
                <img
                  src={campusImages.principal}
                  alt="Dr. Elizabeth Vance, Principal of ABC College"
                  referrerPolicy="no-referrer"
                  className="w-full h-auto object-cover aspect-square"
                />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent p-5 text-center">
                  <h3 className="font-serif text-lg font-bold text-white">
                    Dr. Elizabeth Vance
                  </h3>
                  <p className="text-xs text-amber-400 font-medium">
                    Principal & Professor of Applied Physics
                  </p>
                  <p className="text-[11px] text-slate-400">
                    Ph.D. Stanford University · IEEE Senior Member
                  </p>
                </div>
              </div>
            </div>

            {/* Letter Content Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400">
                <Quote className="w-4 h-4" />
                <span>Message from the Principal's Desk</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white leading-tight">
                "We do not merely confer degrees; we cultivate the intellectual spine of tomorrow's problem solvers."
              </h2>

              <div className="space-y-4 text-sm text-slate-300 leading-relaxed font-normal">
                <p>
                  Dear Students, Parents, and Scholars,
                </p>
                <p>
                  Since our inception in 1984, ABC College has been anchored by an unwavering belief: that education is at its most potent when rigorous intellectual enquiry converges with ethical humanity.
                </p>
                <p>
                  As an autonomous institution, our curricula are dynamic, shaped not in isolation, but in continuous dialogue with pioneers across artificial intelligence, advanced mechatronics, quantitative finance, and biotechnology. Our state-of-the-art laboratories and research centres are not showpieces; they are discovery hubs where undergraduates publish in Scopus-indexed journals and incubate real-world ventures.
                </p>
                <p>
                  Whether you arrive to study Computer Science, Business Administration, or Basic Sciences, we promise you an environment that challenges your assumptions, expands your horizons, and prepares you to lead with wisdom and conviction.
                </p>
              </div>

              <div className="pt-2 border-t border-slate-800 flex items-center justify-between">
                <div>
                  <div className="font-serif font-bold text-white text-base">Dr. Elizabeth Vance</div>
                  <div className="text-xs text-slate-400">Principal, ABC College</div>
                </div>
                <button
                  onClick={onOpenApplyModal}
                  className="px-4 py-2 text-xs font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors cursor-pointer"
                >
                  Join Our Next Batch
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision, Mission & Core Values */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto space-y-2 mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-900">
            Our Guiding Philosophy
          </span>
          <h2 className="font-serif text-3xl font-bold text-slate-900">
            Vision, Mission & Core Values
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-xs space-y-4">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-900 flex items-center justify-center">
              <Compass className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-slate-900">Our Vision</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              To be a universally recognized beacon of transformative learning, scientific innovation, and character building, cultivating leaders equipped to solve complex planetary and societal dilemmas with empathy and integrity.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-xs space-y-4">
            <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-slate-900">Our Mission</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              To deliver experiential, multidisciplinary education through faculty scholarship, world-class laboratory ecosystems, robust corporate collaborations, and an inclusive campus culture that elevates every student.
            </p>
          </div>
        </div>

        {/* 5 Core Values */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8">
          <h4 className="font-serif text-xl font-bold text-slate-900 text-center mb-6">
            Institutional Values We Uphold
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 text-center">
            <div className="space-y-2">
              <div className="font-bold text-slate-900 text-sm">Academic Rigor</div>
              <p className="text-xs text-slate-500">Uncompromising pursuit of mastery, conceptual depth, and analytical precision.</p>
            </div>
            <div className="space-y-2">
              <div className="font-bold text-slate-900 text-sm">Ethical Integrity</div>
              <p className="text-xs text-slate-500">Cultivating honesty, academic transparency, and human empathy in every decision.</p>
            </div>
            <div className="space-y-2">
              <div className="font-bold text-slate-900 text-sm">Ingenuity & Research</div>
              <p className="text-xs text-slate-500">Championing original thinking, fearless questioning, and technological breakthroughs.</p>
            </div>
            <div className="space-y-2">
              <div className="font-bold text-slate-900 text-sm">Inclusive Diversity</div>
              <p className="text-xs text-slate-500">Embracing diverse backgrounds, perspectives, and talents from across the globe.</p>
            </div>
            <div className="space-y-2">
              <div className="font-bold text-slate-900 text-sm">Social Responsibility</div>
              <p className="text-xs text-slate-500">Deploying knowledge and technology to serve surrounding communities and society.</p>
            </div>
          </div>
        </div>
      </section>

      {/* College Historical Milestones */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto space-y-2 mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-900">
            Heritage & Milestones
          </span>
          <h2 className="font-serif text-3xl font-bold text-slate-900">
            A Journey of Growth & Accolades
          </h2>
        </div>

        <div className="relative border-l border-slate-300 ml-4 md:ml-32 space-y-10 py-4">
          <div className="relative pl-8">
            <div className="absolute -left-2.5 top-1.5 w-5 h-5 rounded-full bg-blue-900 border-4 border-white" />
            <div className="text-xs font-bold text-amber-600">1984</div>
            <h4 className="font-serif text-base font-bold text-slate-900 mt-0.5">Founding of ABC College</h4>
            <p className="text-xs text-slate-600 mt-1 max-w-xl">
              Established with 120 students across foundational Mechanical and Electrical disciplines by visionary academic philanthropists.
            </p>
          </div>

          <div className="relative pl-8">
            <div className="absolute -left-2.5 top-1.5 w-5 h-5 rounded-full bg-blue-900 border-4 border-white" />
            <div className="text-xs font-bold text-amber-600">1998</div>
            <h4 className="font-serif text-base font-bold text-slate-900 mt-0.5">Expansion into Computing & Management</h4>
            <p className="text-xs text-slate-600 mt-1 max-w-xl">
              Inauguration of the Computer Science Center and the School of Management Studies with industry-partnered curriculums.
            </p>
          </div>

          <div className="relative pl-8">
            <div className="absolute -left-2.5 top-1.5 w-5 h-5 rounded-full bg-blue-900 border-4 border-white" />
            <div className="text-xs font-bold text-amber-600">2012</div>
            <h4 className="font-serif text-base font-bold text-slate-900 mt-0.5">Conferment of UGC Autonomous Status</h4>
            <p className="text-xs text-slate-600 mt-1 max-w-xl">
              Granted academic autonomy by the University Grants Commission, enabling direct curriculum updates and international dual-degrees.
            </p>
          </div>

          <div className="relative pl-8">
            <div className="absolute -left-2.5 top-1.5 w-5 h-5 rounded-full bg-amber-500 border-4 border-white" />
            <div className="text-xs font-bold text-amber-600">2024 – Present</div>
            <h4 className="font-serif text-base font-bold text-slate-900 mt-0.5">NAAC 'A++' Accreditation & Smart Research Campus</h4>
            <p className="text-xs text-slate-600 mt-1 max-w-xl">
              Awarded NAAC 'A++' with a 3.82 CGPA, commissioning of the NVIDIA AI compute cluster and Olympic Sports Complex.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

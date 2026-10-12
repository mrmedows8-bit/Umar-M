import React, { useState } from 'react';
import {
  Building2,
  Clock,
  Users,
  CheckCircle,
  Eye,
  X,
  Maximize2,
  Sparkles,
  ChevronRight
} from 'lucide-react';
import { campusFacilities, campusImages } from '../data/mockData';
import { Facility } from '../types';

export const CampusPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [lightboxImage, setLightboxImage] = useState<{ url: string; title: string; desc: string; category?: string } | null>(null);

  const categories = ['All', 'Academic', 'Research', 'Recreation', 'Residential', 'Services'];

  const filteredFacilities = selectedCategory === 'All'
    ? campusFacilities
    : campusFacilities.filter((f) => f.category === selectedCategory);

  const galleryItems = [
    {
      url: campusImages.hero,
      title: 'Academic Quadrangle & Clock Tower',
      category: 'Campus Architecture',
      desc: 'The central landmark of ABC College, surrounded by lush botanical lawns and lecture halls.'
    },
    {
      url: campusImages.library,
      title: 'Tagore Central Digital Library',
      category: 'Academic',
      desc: 'Four-level quiet study pods, RFID automated checkouts, and 1,20,000+ reference volumes.'
    },
    {
      url: campusImages.stemLab,
      title: 'Robotics & Advanced STEM Lab',
      category: 'Research',
      desc: 'High-speed GPU clusters, robotic arms, and 3D precision rapid prototyping facilities.'
    },
    {
      url: campusImages.sports,
      title: 'Olympus Multi-Sport Indoor Arena',
      category: 'Sports & Auditorium',
      desc: 'Maple-wood basketball court, badminton arenas, and 2,500-seat acoustic convention center.'
    }
  ];

  return (
    <div className="space-y-16 py-10">
      {/* Header Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-4">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-900">
            <span>120-Acre Smart Campus</span>
            <span>·</span>
            <span>World-Class Infrastructure</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-slate-900 tracking-tight leading-tight">
            Facilities Designed for Limitless Exploration
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            From cutting-edge robotics clusters and modern digital libraries to residential towers and Olympic athletic grounds, explore an ecosystem crafted for peak academic performance and holistic living.
          </p>
        </div>
      </section>

      {/* Featured Photo Gallery with Lightbox */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-blue-900">Visual Tour</span>
            <h2 className="font-serif text-2xl font-bold text-slate-900">Campus Photographic Highlights</h2>
          </div>
          <span className="text-xs text-slate-500">Click any photo to enlarge in full-screen view</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {galleryItems.map((item, idx) => (
            <div
              key={idx}
              onClick={() => setLightboxImage(item)}
              className="group relative rounded-2xl overflow-hidden aspect-4/3 bg-slate-100 cursor-pointer border border-slate-200 shadow-xs hover:shadow-md transition-all"
            >
              <img
                src={item.url}
                alt={item.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-3 left-3 right-3 text-white">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-amber-400 block">
                  {item.category}
                </span>
                <span className="font-serif text-sm font-bold block line-clamp-1">
                  {item.title}
                </span>
              </div>
              <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-slate-900/60 backdrop-blur-xs text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="w-4 h-4" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Facilities Catalog Deck */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between flex-wrap gap-4 mb-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-blue-900">Amenities & Infrastructure</span>
            <h2 className="font-serif text-3xl font-bold text-slate-900">Campus Amenities Directory</h2>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-xl overflow-x-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredFacilities.map((facility) => (
            <div
              key={facility.id}
              className="bg-white rounded-2xl border border-slate-200 shadow-xs hover:shadow-md transition-shadow overflow-hidden flex flex-col justify-between"
            >
              <div>
                <div className="aspect-16/10 bg-slate-100 relative overflow-hidden">
                  <img
                    src={facility.imageUrl}
                    alt={facility.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-xs text-amber-400 px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider">
                    {facility.category}
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <h3 className="font-serif text-xl font-bold text-slate-900 leading-snug">
                    {facility.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {facility.description}
                  </p>

                  <div className="pt-2 border-t border-slate-100 space-y-1.5">
                    <span className="text-[11px] font-bold text-slate-700 uppercase tracking-wider block">
                      Facility Amenities:
                    </span>
                    <ul className="text-xs text-slate-600 space-y-1">
                      {facility.features.map((feat, idx) => (
                        <li key={idx} className="flex items-center gap-1.5">
                          <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          <span className="line-clamp-1">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-slate-400" />
                  <span className="line-clamp-1">{facility.timings}</span>
                </span>
                {facility.capacity && (
                  <span className="font-medium text-slate-700">{facility.capacity}</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setLightboxImage(null)}
        >
          <div
            className="max-w-4xl w-full bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-16/10 bg-black">
              <img
                src={lightboxImage.url}
                alt={lightboxImage.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-contain"
              />
              <button
                onClick={() => setLightboxImage(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-slate-900/80 text-white flex items-center justify-center hover:bg-slate-800 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6 bg-slate-950 text-white space-y-1">
              <span className="text-xs font-semibold uppercase tracking-wider text-amber-400">
                {lightboxImage.category}
              </span>
              <h3 className="font-serif text-xl font-bold">{lightboxImage.title}</h3>
              <p className="text-xs text-slate-300">{lightboxImage.desc}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

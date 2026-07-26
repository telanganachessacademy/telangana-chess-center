"use client";

import { useState } from "react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Trophy,
  BookOpen,
  Users,
  Star,
  Sparkles,
  Filter,
  ChevronRight,
} from "lucide-react";

export default function EventsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const events = [
    {
      id: 1,
      title: "9th Mount Banyan School Under 10,12 & 18 Chess TRN on 02/08/2026",
      category: "tournament",
      image: "/2nd August 2026.png",
      registerUrl: "https://rzp.io/rzp/TKv36TK",
    },
    {
      id: 2,
      title: "9th Mount Banyan School Under 10,12 & 18 Chess TRN on 02/08/2026",
      category: "tournament",
      image: "/2nd August 2026.png",
      registerUrl: "https://rzp.io/rzp/TKv36TK",
    },
    {
      id: 3,
      title: "32nd TCA Under 10,12 & 18 Chess Tournament on 16/08/2026",
      category: "tournament",
      image: "/16th August 2026.PNG",
      registerUrl: "https://rzp.io/rzp/ntAKuVci",
    },
    {
      id: 4,
      title: "TCA Advertisement",
      category: "TCA",
      image: "/TCA Advatisement.JPG",
      registerUrl: "https://tcaindia.org",
    },
    {
      id: 5,
      title: "TCA Advertisement",
      category: "TCA",
      image: "/TCA Advatisement.JPG",
      registerUrl: "https://tcaindia.org",
    },
    {
      id: 6,
      title: "TCA Advertisement",
      category: "TCA",
      image: "/TCA Advatisement.JPG",
      registerUrl: "https://tcaindia.org",
    },
  ];

  const categories = [
    { id: "all", name: "All Events", icon: Sparkles },
    { id: "tournament", name: "Tournaments", icon: Trophy },
    { id: "TCA", name: "TCA", icon: Star },
    { id: "workshop", name: "Workshops", icon: BookOpen },
    { id: "seminar", name: "Seminars", icon: Users },
  ];

  const filteredEvents =
    selectedCategory === "all"
      ? events
      : events.filter((event) => event.category === selectedCategory);

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      {/* HERO - Fixed Text Overflow on mobile */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-white border-b border-slate-100 text-center">
        <div className="container mx-auto px-4 sm:px-6">
          <span className="inline-flex px-4 py-2 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-[10px] font-black uppercase tracking-[0.2em] mb-6 md:mb-8">
            Championship Calendar
          </span>

          <h1 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight mb-4 md:mb-6 leading-tight">
            Upcoming <span className="text-emerald-600">Events</span>
          </h1>

          <p className="text-lg md:text-xl text-slate-500 font-medium max-w-2xl mx-auto">
            Minimal. Exclusive. Limited.
          </p>
        </div>
      </section>

      {/* FILTER BAR - Fixed Z-index and Height issues */}
      <section className="sticky top-[64px] md:top-[72px] z-[45] bg-white/90 backdrop-blur-xl border-b border-slate-200 py-4 md:py-6">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex gap-2 md:gap-3 overflow-x-auto no-scrollbar w-full md:w-auto pb-1 md:pb-0">
            {categories.map((category) => (
              <button
                key={category.id}
                type="button"
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center gap-2 px-5 py-2 md:px-6 md:py-2.5 rounded-xl text-[10px] md:text-xs font-black uppercase tracking-widest border transition-all whitespace-nowrap ${
                  selectedCategory === category.id
                    ? "bg-emerald-600 text-white border-transparent shadow-md"
                    : "bg-white border-slate-200 text-slate-500 hover:text-emerald-600"
                }`}
              >
                <category.icon className="w-3.5 h-3.5 md:w-4 md:h-4" />
                {category.name}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2 text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
            <Filter className="w-3.5 h-3.5 md:w-4 md:h-4 text-emerald-500" />
            {filteredEvents.length} Events Listed
          </div>
        </div>
      </section>

      {/* EVENTS GRID */}
      <section className="py-12 md:py-24 px-4 sm:px-6">
        <div className="container mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {filteredEvents.map((event) => (
  <Card
    key={event.id}
    className="bg-white border border-slate-100 rounded-[2rem] overflow-hidden shadow-md flex flex-col"
  >
    {/* IMAGE — COMPLETELY NON CLICKABLE */}
    <div className="h-60 md:h-72 overflow-hidden pointer-events-none">
      <img
        src={event.image}
        alt={event.title}
        className="w-full h-full object-cover"
        draggable={false}
      />
    </div>

    {/* CONTENT */}
    <CardContent className="p-6 md:p-8 text-center flex flex-col flex-grow justify-between pointer-events-none">
      <h3 className="text-lg md:text-xl font-black text-slate-900 mb-6 tracking-tight leading-tight line-clamp-3">
        {event.title}
      </h3>

      {/* REGISTER — ONLY INTERACTIVE ELEMENT */}
      <div className="pointer-events-auto">
        <button
          type="button"
          onTouchStart={(e) => {
            e.stopPropagation();
          }}
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();

            // HARD NAVIGATION — browser CANNOT override this
            window.location.assign(event.registerUrl);
          }}
          className="inline-flex w-full h-12 md:h-14 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-black text-[10px] md:text-xs uppercase tracking-widest shadow-lg active:scale-95 items-center justify-center gap-2 touch-manipulation"
        >
          Register Now <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </CardContent>
  </Card>
))}

        </div>

        {filteredEvents.length === 0 && (
          <div className="text-center py-32">
            <p className="text-slate-400 font-bold uppercase tracking-widest">No events listed in this category.</p>
          </div>
        )}
      </section>

      {/* Utility CSS */}
      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
}

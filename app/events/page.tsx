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
  ChevronRight
} from "lucide-react";

export default function EventsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const events = [
    {
      id: 1,
      title: "State Championship 2025",
      category: "tournament",
      image: "/1.jpeg",
    },
    {
      id: 2,
      title: "Tejavath Naresh Workshop",
      category: "workshop",
      image: "/2.jpeg",
    },
    {
      id: 3,
      title: "Youth Rapid Fire",
      category: "tournament",
      image: "/3.jpeg",
    },
    {
      id: 4,
      title: "Psychology of Chess",
      category: "seminar",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: 5,
      title: "Simultaneous Exhibition",
      category: "exhibition",
      image: "https://images.unsplash.com/photo-1586165368502-1bad197a6461?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: 6,
      title: "Women’s Chess Day",
      category: "special",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800",
    },
  ];

  const categories = [
    { id: "all", name: "All Events", icon: Sparkles },
    { id: "tournament", name: "Tournaments", icon: Trophy },
    { id: "workshop", name: "Workshops", icon: BookOpen },
    { id: "seminar", name: "Seminars", icon: Users },
    { id: "exhibition", name: "Exhibitions", icon: Star },
  ];

  const filteredEvents =
    selectedCategory === "all"
      ? events
      : events.filter((event) => event.category === selectedCategory);

  return (
    <div className="min-h-screen bg-[#F8FAFC]">

      {/* HERO */}
      <section className="pt-40 pb-24 bg-white border-b border-slate-100 text-center">
        <div className="container mx-auto px-6">
          <span className="inline-flex px-4 py-2 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-[10px] font-black uppercase tracking-[0.2em] mb-8">
            Championship Calendar
          </span>

          <h1 className="text-6xl md:text-5xl font-black text-slate-900 tracking-tight mb-6">
            Upcoming <span className="text-emerald-600">Events</span>
          </h1>

          <p className="text-xl text-slate-500 font-medium max-w-2xl mx-auto">
            Minimal. Exclusive. Limited.
          </p>
        </div>
      </section>

      {/* FILTER BAR */}
      <section className="sticky top-[72px] z-40 bg-white/80 backdrop-blur-xl border-b border-slate-200 py-6">
        <div className="container mx-auto px-6 max-w-7xl flex justify-between items-center gap-6">
          
          <div className="flex gap-3 overflow-x-auto no-scrollbar">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs font-black uppercase tracking-widest border transition-all whitespace-nowrap ${
                  selectedCategory === category.id
                    ? "bg-emerald-600 text-white border-transparent shadow-lg"
                    : "bg-white border-slate-200 text-slate-500 hover:text-emerald-600 hover:border-emerald-300"
                }`}
              >
                <category.icon className="w-4 h-4" />
                {category.name}
              </button>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
            <Filter className="w-4 h-4 text-emerald-500" />
            {filteredEvents.length} Events
          </div>
        </div>
      </section>

      {/* EVENTS GRID */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

          {filteredEvents.map((event) => (
            <Card
              key={event.id}
              className="group bg-white border border-slate-100 rounded-[2.5rem] overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
            >
              {/* IMAGE (CLICKABLE) */}
              <Link href={event.image} target="_blank" className="block">
                <div className="relative h-72 overflow-hidden cursor-zoom-in">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
              </Link>

              {/* CONTENT */}
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-black text-slate-900 mb-6 tracking-tight">
                  {event.title}
                </h3>

                <Link href="/contact">
                  <Button className="w-full h-12 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-black text-xs uppercase tracking-widest shadow-lg transition-all active:scale-95 flex items-center justify-center gap-2">
                    Register Now <ChevronRight className="w-4 h-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}

        </div>
      </section>
    </div>
  );
}

"use client";

import { Button } from "@/components/ui/button";
import { Calendar, Clock, MapPin, Trophy, Users, Zap, ArrowRight, Sparkles, ChevronRight } from "lucide-react";
import Link from "next/link";

export function EventsPreview() {
  const upcomingEvents = [
    {
      id: 1,
      title: "Monthly Chess Tournament",
      day: "15",
      month: "OCT",
      year: "2025",
      time: "10:00 AM",
      location: "Main Academy Hall",
      type: "Tournament",
      participants: "32/50 Slots",
      icon: Trophy,
      description: "Compete against fellow enthusiasts. Swiss system, 5 rounds, cash prizes for top 3.",
      color: "blue", 
    },
    {
      id: 2,
      title: "Beginner's Strategy Workshop",
      day: "20",
      month: "OCT",
      year: "2025",
      time: "02:00 PM",
      location: "Training Room A",
      type: "Workshop",
      participants: "Limited Seats",
      icon: Users,
      description: "Master the opening principles and middle-game tactics in this intensive session.",
      color: "orange",
    },
    {
      id: 3,
      title: "GM Masterclass Series",
      day: "05",
      month: "NOV",
      year: "2025",
      time: "11:00 AM",
      location: "Virtual & Offline",
      type: "Masterclass",
      participants: "Open to All",
      icon: Zap,
      description: "Exclusive session with Grandmaster Naresh on endgame theoretical complexities.",
      color: "purple",
    },
  ];

  const getStyles = (color: string) => {
    switch (color) {
      case "blue":
        return {
          bg: "bg-blue-600",
          hoverBg: "hover:bg-blue-700",
          lightBg: "bg-blue-50",
          text: "text-blue-700",
          border: "border-blue-100",
          shadow: "shadow-blue-100",
        };
      case "orange":
        return {
          bg: "bg-orange-500",
          hoverBg: "hover:bg-orange-600",
          lightBg: "bg-orange-50",
          text: "text-orange-700",
          border: "border-orange-100",
          shadow: "shadow-orange-100",
        };
      case "purple":
        return {
          bg: "bg-purple-600",
          hoverBg: "hover:bg-purple-700",
          lightBg: "bg-purple-50",
          text: "text-purple-700",
          border: "border-purple-100",
          shadow: "shadow-purple-100",
        };
      default: return { bg: "bg-emerald-600", lightBg: "bg-emerald-50", text: "text-emerald-700", border: "border-emerald-100", shadow: "" };
    }
  };

  return (
    <section className="py-24 bg-[#F8FAFC] relative overflow-hidden">
      
      {/* --- Light Background Textures --- */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-50 rounded-full blur-[120px] opacity-60" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-50 rounded-full blur-[120px] opacity-40" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:40px_40px] opacity-30" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* --- Header Section --- */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="text-left space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-[10px] font-black uppercase tracking-[0.2em]">
              <Calendar className="w-3.5 h-3.5" />
              <span>Academy Schedule</span>
            </div>
            
            <h2 className="text-5xl md:text-6xl font-black text-slate-900 tracking-tight leading-none">
              Upcoming <span className="text-emerald-600">Battles</span>
            </h2>
            
            <p className="text-slate-500 font-medium max-w-xl text-lg">
              Join our professional tournaments and masterclasses to elevate your rating and claim your victory.
            </p>
          </div>
          
          <Link href="/events" className="hidden md:block">
            <Button variant="outline" className="border-slate-200 bg-white text-slate-900 hover:bg-emerald-600 hover:text-white hover:border-emerald-600 transition-all rounded-2xl px-8 h-14 font-bold shadow-sm">
              View Academy Calendar
            </Button>
          </Link>
        </div>

        {/* --- Events Grid --- */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {upcomingEvents.map((event) => {
            const styles = getStyles(event.color);
            
            return (
              <div 
                key={event.id}
                className="group relative bg-white border border-slate-100 rounded-[2.5rem] overflow-hidden hover:shadow-2xl hover:shadow-slate-200 transition-all duration-500 hover:-translate-y-3 flex flex-col shadow-xl shadow-slate-100/50"
              >
                {/* Visual Accent Top Bar */}
                <div className={`h-2 w-full ${styles.bg}`} />

                <div className="p-10 flex flex-col h-full">
                  
                  {/* Top Row: Date & Badge */}
                  <div className="flex justify-between items-start mb-10">
                    {/* Date Block */}
                    <div className="flex flex-col items-center justify-center bg-slate-50 rounded-2xl p-4 border border-slate-100 min-w-[70px] shadow-inner group-hover:bg-white transition-colors">
                      <span className="text-[10px] font-black text-emerald-600 uppercase tracking-widest">{event.month}</span>
                      <span className="text-3xl font-black text-slate-900">{event.day}</span>
                    </div>

                    {/* Event Type Tag */}
                    <div className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border ${styles.border} ${styles.lightBg} ${styles.text}`}>
                      {event.type}
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="mb-8 flex-grow">
                    <h3 className="text-2xl font-black text-slate-900 mb-4 tracking-tight leading-snug group-hover:text-emerald-600 transition-colors">
                      {event.title}
                    </h3>
                    <p className="text-slate-500 font-medium text-sm leading-relaxed line-clamp-3">
                      {event.description}
                    </p>
                  </div>

                  {/* Event Details Meta */}
                  <div className="space-y-4 mb-10 bg-slate-50/50 p-5 rounded-2xl border border-dashed border-slate-200">
                    <div className="flex items-center text-xs font-bold text-slate-600">
                      <Clock className={`w-4 h-4 mr-3 ${styles.text}`} />
                      {event.time}
                    </div>
                    <div className="flex items-center text-xs font-bold text-slate-600">
                      <MapPin className={`w-4 h-4 mr-3 ${styles.text}`} />
                      {event.location}
                    </div>
                    <div className="flex items-center text-xs font-bold text-slate-600">
                      <Users className={`w-4 h-4 mr-3 ${styles.text}`} />
                      {event.participants}
                    </div>
                  </div>

                  {/* Fully Colored Action Button */}
                  <Link href="/contact" className="w-full">
                    <Button className={`w-full ${styles.bg} ${styles.hoverBg} text-white font-black text-xs uppercase tracking-[0.2em] h-14 rounded-2xl shadow-lg ${styles.shadow} transition-all active:scale-95 flex items-center justify-center gap-2 group-hover:gap-4`}>
                      Register Now
                      <ChevronRight className="w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile View All Button */}
        <div className="mt-12 text-center md:hidden px-6">
          <Link href="/events">
            <Button className="w-full bg-slate-900 text-white h-14 rounded-2xl font-bold">
              Full Event Calendar
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
"use client";

import { Button } from "@/components/ui/button";
import { Calendar, Clock, MapPin, Trophy, Users, Zap, ArrowRight, Sparkles, ChevronRight, Crown } from "lucide-react";
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
      registerUrl: "/contact",
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
      color: "gold",
      registerUrl: "/contact",
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
      color: "green",
      registerUrl: "/contact",
    },
  ];

  const getStyles = (color: string) => {
    switch (color) {
      case "blue":
        return {
          bg: "bg-[#0b3272]",
          hoverBg: "hover:bg-[#082352]",
          lightBg: "bg-blue-50",
          text: "text-[#0b3272]",
          border: "border-blue-100",
          shadow: "shadow-blue-900/10",
        };
      case "gold":
        return {
          bg: "bg-gradient-to-r from-amber-500 to-amber-600",
          hoverBg: "hover:from-amber-600 hover:to-amber-700",
          lightBg: "bg-amber-50",
          text: "text-amber-700",
          border: "border-amber-200",
          shadow: "shadow-amber-500/20",
        };
      case "green":
        return {
          bg: "bg-[#0e8743]",
          hoverBg: "hover:bg-[#085a2b]",
          lightBg: "bg-emerald-50",
          text: "text-[#0e8743]",
          border: "border-emerald-100",
          shadow: "shadow-emerald-900/10",
        };
      default: return { bg: "bg-[#0b3272]", lightBg: "bg-blue-50", text: "text-[#0b3272]", border: "border-blue-100", shadow: "" };
    }
  };

  return (
    <section className="py-24 bg-[#F8FAFC] relative overflow-hidden">
      
      {/* Background Textures */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50 rounded-full blur-[120px] opacity-60" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-50 rounded-full blur-[120px] opacity-50" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div className="text-left space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-100 text-[#0e8743] text-[10px] font-black uppercase tracking-[0.2em]">
              <Calendar className="w-3.5 h-3.5 text-emerald-700" />
              <span>Academy Schedule</span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-black text-slate-950 tracking-tight leading-tight">
              Upcoming <span className="text-[#0e8743]">Battles</span>
            </h2>
            
            <p className="text-base sm:text-lg text-slate-600 font-medium max-w-xl">
              Join our professional tournaments and masterclasses to elevate your rating and claim your victory.
            </p>
          </div>
          
          <Link href="/events" className="shrink-0">
            <Button variant="outline" className="border-slate-300 bg-white text-slate-800 hover:bg-[#0b3272] hover:text-white transition-all rounded-2xl px-6 h-12 text-xs font-black uppercase tracking-wider shadow-sm">
              All Events Calendar
            </Button>
          </Link>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {upcomingEvents.map((event) => {
            const styles = getStyles(event.color);
            
            return (
              <div 
                key={event.id}
                className="group relative bg-white border border-slate-100 rounded-[2.5rem] overflow-hidden hover:shadow-2xl hover:shadow-blue-950/10 transition-all duration-500 hover:-translate-y-2.5 flex flex-col shadow-xl shadow-slate-100"
              >
                {/* Visual Accent Top Bar */}
                <div className={`h-2 w-full ${styles.bg}`} />

                <div className="p-8 sm:p-9 flex flex-col h-full">
                  
                  {/* Top Row: Date & Badge */}
                  <div className="flex justify-between items-start mb-8">
                    {/* Date Block */}
                    <div className="flex flex-col items-center justify-center bg-slate-50 rounded-2xl p-3.5 border border-slate-100 min-w-[72px] shadow-inner group-hover:bg-white transition-colors">
                      <span className="text-[10px] font-black text-[#0b3272] uppercase tracking-widest">{event.month}</span>
                      <span className="text-3xl font-black text-slate-950">{event.day}</span>
                    </div>

                    {/* Event Type Tag */}
                    <div className={`px-3.5 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border ${styles.border} ${styles.lightBg} ${styles.text}`}>
                      {event.type}
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="mb-6 flex-grow">
                    <h3 className="text-xl font-black text-slate-950 mb-3 tracking-tight leading-snug group-hover:text-[#0b3272] transition-colors">
                      {event.title}
                    </h3>
                    <p className="text-slate-600 font-medium text-xs sm:text-sm leading-relaxed">
                      {event.description}
                    </p>
                  </div>

                  {/* Event Details Meta */}
                  <div className="space-y-3 mb-8 bg-slate-50/70 p-4 rounded-2xl border border-slate-100">
                    <div className="flex items-center text-xs font-bold text-slate-700">
                      <Clock className={`w-4 h-4 mr-2.5 ${styles.text}`} />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center text-xs font-bold text-slate-700">
                      <MapPin className={`w-4 h-4 mr-2.5 ${styles.text}`} />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center text-xs font-bold text-slate-700">
                      <Users className={`w-4 h-4 mr-2.5 ${styles.text}`} />
                      <span>{event.participants}</span>
                    </div>
                  </div>

                  {/* Action Button */}
                  <a href={event.registerUrl} target="_blank" rel="noopener noreferrer" className="w-full">
                    <Button className={`w-full ${styles.bg} ${styles.hoverBg} text-white font-black text-xs uppercase tracking-wider h-13 rounded-2xl shadow-lg ${styles.shadow} transition-all active:scale-95 flex items-center justify-center gap-2 cursor-pointer`}>
                      Register For Tournament
                      <ChevronRight className="w-4 h-4" />
                    </Button>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
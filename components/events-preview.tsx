"use client";

import { Button } from "@/components/ui/button";
import { Calendar, Clock, MapPin, Trophy, Users, Zap, ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

export function EventsPreview() {
  // --- Data Preserved Exactly ---
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

  // Helper for dynamic styling based on color prop
  const getStyles = (color: string) => {
    switch (color) {
      case "blue":
        return {
          border: "border-blue-500/30",
          bg: "bg-blue-500/10",
          text: "text-blue-400",
          iconBg: "bg-blue-500",
          gradient: "from-blue-600 to-indigo-600",
          glow: "shadow-[0_0_20px_rgba(59,130,246,0.2)]"
        };
      case "orange":
        return {
          border: "border-orange-500/30",
          bg: "bg-orange-500/10",
          text: "text-orange-400",
          iconBg: "bg-orange-500",
          gradient: "from-orange-600 to-red-600",
          glow: "shadow-[0_0_20px_rgba(249,115,22,0.2)]"
        };
      case "purple":
        return {
          border: "border-purple-500/30",
          bg: "bg-purple-500/10",
          text: "text-purple-400",
          iconBg: "bg-purple-500",
          gradient: "from-purple-600 to-fuchsia-600",
          glow: "shadow-[0_0_20px_rgba(168,85,247,0.2)]"
        };
      default: return { border: "", bg: "", text: "", iconBg: "", gradient: "", glow: "" };
    }
  };

  return (
    <section className="py-24 bg-[#0B0F19] relative overflow-hidden">
      
      {/* --- Background Ambience --- */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-emerald-600/5 rounded-full blur-[120px]" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 brightness-100 contrast-150 mix-blend-overlay"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* --- Header Section --- */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="text-left space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 backdrop-blur-md text-indigo-300 text-xs font-bold uppercase tracking-widest shadow-lg">
              <Calendar className="w-3.5 h-3.5 fill-indigo-400 text-indigo-400" />
              <span>Mark Your Calendars</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
              Upcoming <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-emerald-400">Battles</span>
            </h2>
            
            <p className="text-slate-400 max-w-xl text-lg leading-relaxed">
              Join our tournaments, workshops, and masterclasses to elevate your strategy and claim your victory.
            </p>
          </div>
          
          <Link href="/events" className="hidden md:block">
            <Button variant="outline" className="border-slate-700 bg-slate-900/50 text-slate-300 hover:text-white hover:bg-slate-800 hover:border-indigo-500 transition-all rounded-xl px-6 h-12 backdrop-blur-sm">
              View Full Calendar
            </Button>
          </Link>
        </div>

        {/* --- Events Grid --- */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {upcomingEvents.map((event) => {
            const styles = getStyles(event.color);
            
            return (
              <div 
                key={event.id}
                className={`group relative bg-slate-900/40 backdrop-blur-md border border-slate-800 rounded-3xl overflow-hidden hover:border-slate-600 transition-all duration-500 hover:-translate-y-2 flex flex-col hover:shadow-2xl`}
              >
                {/* Glow Effect on Hover */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-b from-white/5 to-transparent`} />
                
                {/* Decorative Top Line */}
                <div className={`h-1.5 w-full bg-gradient-to-r ${styles.gradient}`} />

                <div className="p-8 flex flex-col h-full relative z-10">
                  
                  {/* Top Row: Date & Type Badge */}
                  <div className="flex justify-between items-start mb-8">
                    {/* Date Block */}
                    <div className="flex flex-col items-center justify-center w-18 h-18 p-3 bg-slate-950 rounded-2xl border border-slate-800 group-hover:border-slate-600 transition-colors shadow-inner">
                      <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{event.month}</span>
                      <span className="text-2xl font-black text-white">{event.day}</span>
                    </div>

                    {/* Type Badge */}
                    <div className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide border ${styles.border} ${styles.bg} ${styles.text}`}>
                      {event.type}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="mb-8 flex-grow">
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-400 transition-all">
                      {event.title}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed border-l-2 border-slate-800 pl-4">
                      {event.description}
                    </p>
                  </div>

                  {/* Meta Details */}
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center text-sm text-slate-300">
                      <div className="w-8 flex justify-center"><Clock className="w-4 h-4 text-slate-500" /></div>
                      <span className="font-medium">{event.time}</span>
                    </div>
                    <div className="flex items-center text-sm text-slate-300">
                      <div className="w-8 flex justify-center"><MapPin className="w-4 h-4 text-slate-500" /></div>
                      <span className="font-medium">{event.location}</span>
                    </div>
                    <div className="flex items-center text-sm text-slate-300">
                      <div className="w-8 flex justify-center"><Users className="w-4 h-4 text-slate-500" /></div>
                      <span className="font-medium">{event.participants}</span>
                    </div>
                  </div>

                  {/* Action Button */}
                  <Link href="/contact" className="w-full mt-auto">
                    <Button className={`w-full bg-gradient-to-r ${styles.gradient} text-white font-bold h-12 rounded-xl ${styles.glow} transition-all duration-300 hover:scale-[1.02] border border-white/10`}>
                      Register Now <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile View All Button */}
        <div className="mt-12 text-center md:hidden">
          <Link href="/events">
            <Button variant="outline" className="w-full border-slate-700 bg-slate-900 text-slate-300 hover:text-white hover:bg-slate-800 h-12 rounded-xl">
              View All Events
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
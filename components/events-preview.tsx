"use client";

import { Button } from "@/components/ui/button";
import { Calendar, Clock, MapPin, Trophy, Users, Zap, ArrowRight } from "lucide-react";
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
      color: "blue", // Theme color
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

  return (
    <section className="py-24 bg-[#020617] relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-orange-600/10 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-blue-400 text-xs font-bold uppercase tracking-wider mb-4">
              <Calendar className="w-3 h-3" />
              <span>Mark Your Calendars</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">
              Upcoming <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">Battles</span>
            </h2>
            <p className="text-slate-400 max-w-xl text-lg">
              Join our tournaments, workshops, and masterclasses to elevate your game.
            </p>
          </div>
          
          <Link href="/events" className="hidden md:block">
            <Button variant="outline" className="border-slate-700 text-slate-300 hover:text-white hover:bg-slate-800 hover:border-blue-500 transition-all rounded-full px-6">
              View Full Calendar
            </Button>
          </Link>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {upcomingEvents.map((event) => {
            const Icon = event.icon;
            
            // Dynamic Color Logic
            const themeColor = 
              event.color === 'blue' ? 'text-blue-500 bg-blue-500/10 border-blue-500/20' :
              event.color === 'orange' ? 'text-orange-500 bg-orange-500/10 border-orange-500/20' :
              'text-purple-500 bg-purple-500/10 border-purple-500/20';
            
            const btnColor = 
              event.color === 'blue' ? 'bg-blue-600 hover:bg-blue-700' :
              event.color === 'orange' ? 'bg-orange-600 hover:bg-orange-700' :
              'bg-purple-600 hover:bg-purple-700';

            return (
              <div 
                key={event.id}
                className="group relative bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden hover:border-slate-600 transition-all duration-300 hover:-translate-y-2 flex flex-col"
              >
                {/* Decorative Top Bar */}
                <div className={`h-1 w-full bg-gradient-to-r ${
                  event.color === 'blue' ? 'from-blue-500 to-cyan-400' :
                  event.color === 'orange' ? 'from-orange-500 to-red-400' :
                  'from-purple-500 to-pink-400'
                }`} />

                <div className="p-6 flex flex-col h-full">
                  
                  {/* Top Row: Date & Type */}
                  <div className="flex justify-between items-start mb-6">
                    {/* Date Block */}
                    <div className="flex flex-col items-center justify-center w-16 h-16 bg-slate-800 rounded-2xl border border-slate-700 group-hover:border-slate-500 transition-colors">
                      <span className="text-xs font-bold text-slate-400 uppercase">{event.month}</span>
                      <span className="text-2xl font-black text-white">{event.day}</span>
                    </div>

                    {/* Badge */}
                    <div className={`px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wide border ${themeColor}`}>
                      {event.type}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="mb-6 flex-grow">
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                      {event.title}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed line-clamp-2">
                      {event.description}
                    </p>
                  </div>

                  {/* Meta Details */}
                  <div className="space-y-3 mb-6 border-t border-slate-800 pt-4">
                    <div className="flex items-center text-sm text-slate-300">
                      <Clock className="w-4 h-4 mr-3 text-slate-500" />
                      {event.time}
                    </div>
                    <div className="flex items-center text-sm text-slate-300">
                      <MapPin className="w-4 h-4 mr-3 text-slate-500" />
                      {event.location}
                    </div>
                    <div className="flex items-center text-sm text-slate-300">
                      <Users className="w-4 h-4 mr-3 text-slate-500" />
                      {event.participants}
                    </div>
                  </div>

                  {/* Action Button */}
                  <Link href="/contact" className="w-full mt-auto">
                    <Button className={`w-full ${btnColor} text-white font-bold h-12 rounded-xl shadow-lg transition-transform active:scale-95`}>
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
            <Button variant="outline" className="w-full border-slate-700 text-slate-300 hover:text-white hover:bg-slate-800">
              View All Events
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
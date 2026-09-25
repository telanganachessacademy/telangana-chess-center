"use client";

import { Trophy, CheckCircle2, Medal, ChevronRight, Crown, Users, Calendar } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function TeamSection() {
  const teamMembers = [
    {
      name: "Tejavath Naresh",
      role: "Head Coach & Founder",
      title: "FIDE Arbiter & Chess Coach",
      rating: "2200 ELO",
      image: "/naresh.jpg",
      experience: "15+ Years",
      students: "200+",
      achievements: ["FIDE Arbiter & Coach", "Opening & Endgame Master", "15+ Yrs Mentorship"],
      color: "blue",
    },
    {
      name: "Tejavath Aruna",
      role: "Senior Coach",
      title: "Women's Title Holder",
      rating: "2450 ELO",
      image: "/coach.png",
      experience: "12+ Years",
      students: "150+",
      achievements: ["FIDE Rated Player", "Women's Title Holder", "Youth Tactics Lead"],
      color: "green",
    },
    {
      name: "Ranghanathan K S",
      role: "Junior Coach",
      title: "International FIDE Rated",
      rating: "2400 ELO",
      image: "/coach.png",
      experience: "8+ Years",
      students: "100+",
      achievements: ["International FIDE Rated", "Online Chess Master", "School Programs"],
      color: "gold",
    },
    {
      name: "Kethavath Lokesh",
      role: "Assistant Coach",
      title: "Tactical Training Expert",
      rating: "2300 ELO",
      image: "/coach.png",
      experience: "6+ Years",
      students: "80+",
      achievements: ["International FIDE Rated", "Pattern Recognition", "Rapid Chess Lead"],
      color: "blue",
    },
  ];

  const getColors = (color: string) => {
    switch(color) {
      case "blue": return { text: "text-[#0b3272]", bg: "bg-[#0b3272]", light: "bg-blue-50 text-[#0b3272]", border: "border-blue-100" };
      case "green": return { text: "text-[#0e8743]", bg: "bg-[#0e8743]", light: "bg-emerald-50 text-[#0e8743]", border: "border-emerald-100" };
      case "gold": return { text: "text-amber-800", bg: "bg-amber-500", light: "bg-amber-50 text-amber-900 font-bold", border: "border-amber-200" };
      default: return { text: "text-[#0b3272]", bg: "bg-[#0b3272]", light: "bg-blue-50 text-[#0b3272]", border: "border-blue-100" };
    }
  };

  return (
    <section id="team" className="py-24 bg-white relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-blue-50 rounded-full blur-[120px] opacity-60" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-50 rounded-full blur-[120px] opacity-50" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-7xl">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-[#0b3272] text-[10px] font-black uppercase tracking-[0.2em]">
            <Medal className="w-3.5 h-3.5 text-blue-700" />
            <span>FIDE Rated Faculty</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-black text-slate-950 tracking-tight leading-tight">
            Meet Your <span className="text-[#0b3272]">Mentors</span> & <span className="text-[#0e8743]">Grandmasters</span>
          </h2>
          
          <p className="text-base sm:text-lg text-slate-600 font-medium leading-relaxed max-w-2xl mx-auto">
            International Masters and FIDE-certified experts dedicated to shaping the next generation of champions.
          </p>
        </div>

        {/* 4 Cards Per Row Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {teamMembers.map((member, index) => {
            const colors = getColors(member.color) as any;
            
            return (
              <div
                key={index}
                className="group relative bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-lg shadow-slate-100 hover:shadow-2xl hover:shadow-blue-950/10 transition-all duration-500 hover:-translate-y-2 flex flex-col justify-between"
              >
                {/* Image Section */}
                <div className="relative aspect-[4/4] overflow-hidden p-3 pb-0">
                  <div className="relative h-full w-full rounded-2xl overflow-hidden bg-slate-100">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover transition-all duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />

                    {/* FIDE Rating Tag */}
                    <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur shadow-md px-3 py-1 rounded-xl border border-white flex items-center gap-1.5">
                      <Trophy className="w-3.5 h-3.5 text-amber-500" />
                      <span className="text-[11px] font-black text-slate-900">{member.rating}</span>
                    </div>

                    {/* Experience Badge */}
                    <div className="absolute top-3 right-3 bg-slate-900/80 backdrop-blur text-white px-2.5 py-0.5 rounded-lg text-[10px] font-bold">
                      {member.experience}
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-5 flex flex-col flex-grow justify-between">
                  <div>
                    <span className={`text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-md border ${colors.light} ${colors.border}`}>
                      {member.role}
                    </span>
                    
                    <h3 className="text-lg font-black text-slate-950 mt-2 mb-0.5 tracking-tight group-hover:text-[#0b3272] transition-colors">
                      {member.name}
                    </h3>
                    
                    <p className="text-xs font-semibold text-slate-500 leading-snug mb-4">
                      {member.title}
                    </p>

                    {/* Achievements List */}
                    <div className="space-y-1.5 pt-3 border-t border-slate-100">
                      {member.achievements.map((ach, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs font-medium text-slate-600">
                          <CheckCircle2 className={`w-3.5 h-3.5 ${colors.text} shrink-0 mt-0.5`} />
                          <span className="leading-tight text-[11px]">{ach}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Student count & Link */}
                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-[10px] font-bold text-slate-400">
                      {member.students} Students
                    </span>
                    <Link href="/coaches" className="text-[11px] font-black text-[#0b3272] hover:text-[#0e8743] transition-colors flex items-center gap-0.5">
                      <span>Profile</span>
                      <ChevronRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>

                {/* Bottom colored accent */}
                <div className={`h-1.5 w-full ${colors.bg} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
              </div>
            );
          })}
        </div>

        {/* Bottom Link */}
        <div className="mt-14 text-center">
          <Link href="/coaches" className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-[#0b3272] hover:bg-[#082352] text-white font-black text-xs uppercase tracking-wider transition-all shadow-xl shadow-blue-900/15 group cursor-pointer">
            <span>Explore All Master Faculty & Ratings</span>
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
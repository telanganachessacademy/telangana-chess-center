"use client";

import { Award, Star, Trophy, CheckCircle2, Linkedin, Twitter, Share2, Medal } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function TeamSection() {
  const teamMembers = [
    {
      name: "Tejaswin Naresh",
      role: "Head Coach",
      title: "FIDE Instructor & State Player",
      rating: "2200+ ELO",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=800", // Male portrait
      achievements: ["State Champion 2022", "Certified FIDE Instructor", "10+ Years Coaching"],
      color: "blue",
    },
    {
      name: "Tejaswin Aruna",
      role: "Senior Coach",
      title: "FIDE Rated Player",
      rating: "1800+ ELO",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800", // Female portrait
      achievements: ["Women's Title Holder", "Youth Mentor Specialist", "8+ Years Experience"],
      color: "purple",
    },
    {
      name: "Ranghunathan K S",
      role: "Master Trainer",
      title: "International FIDE Rated",
      rating: "2000+ ELO",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=800", // Male portrait
      achievements: ["International Player", "Opening Theory Expert", "15+ Years Experience"],
      color: "orange",
    },
    {
      name: "Kethavath Lokesh",
      role: "Tactics Expert",
      title: "International FIDE Rated",
      rating: "1900+ ELO",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=800", // Male portrait
      achievements: ["Tournament Director", "Endgame Specialist", "12+ Years Experience"],
      color: "green",
    },
  ];

  // Helper for dynamic colors
  const getColors = (color: string) => {
    switch(color) {
      case "blue": return { border: "border-blue-500", glow: "shadow-blue-500/20", text: "text-blue-400", bg: "bg-blue-600" };
      case "purple": return { border: "border-purple-500", glow: "shadow-purple-500/20", text: "text-purple-400", bg: "bg-purple-600" };
      case "orange": return { border: "border-orange-500", glow: "shadow-orange-500/20", text: "text-orange-400", bg: "bg-orange-600" };
      case "green": return { border: "border-emerald-500", glow: "shadow-emerald-500/20", text: "text-emerald-400", bg: "bg-emerald-600" };
      default: return {};
    }
  }

  return (
    <section id="team" className="py-24 bg-[#0B0F19] relative overflow-hidden">
      
      {/* --- Background Ambience --- */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[120px] -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-emerald-600/5 rounded-full blur-[100px]" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        
        {/* --- Header --- */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 backdrop-blur-md text-indigo-300 text-xs font-bold uppercase tracking-widest shadow-lg">
            <Medal className="w-3.5 h-3.5 fill-indigo-400 text-indigo-400" />
            <span>The Grandmasters</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Meet Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-emerald-400">Mentors</span>
          </h2>
          
          <p className="text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto">
            Our faculty consists of FIDE-rated professionals and champions who don't just teach chess—they live it.
          </p>
        </div>

        {/* --- Team Grid --- */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => {
            const colors = getColors(member.color);
            
            return (
              <div
                key={index}
                className="group relative bg-slate-900 rounded-[2rem] overflow-hidden border border-slate-800 hover:border-slate-600 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
              >
                {/* Image Container */}
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-[#0B0F19]/60 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>
                  
                  {/* Floating Role Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-black/40 backdrop-blur-md border border-white/10 text-white text-[10px] font-bold rounded-full uppercase tracking-widest">
                      {member.role}
                    </span>
                  </div>

                  {/* Social Actions (Slide in on hover) */}
                  <div className="absolute top-4 right-4 flex flex-col gap-2 translate-x-12 group-hover:translate-x-0 transition-transform duration-300 delay-100">
                    <button className="p-2.5 bg-black/40 backdrop-blur-md border border-white/10 rounded-full text-slate-300 hover:text-white hover:bg-blue-600 hover:border-blue-500 transition-colors">
                      <Linkedin className="w-4 h-4" />
                    </button>
                    <button className="p-2.5 bg-black/40 backdrop-blur-md border border-white/10 rounded-full text-slate-300 hover:text-white hover:bg-sky-500 hover:border-sky-400 transition-colors">
                      <Twitter className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Info Overlay (Bottom) */}
                  <div className="absolute bottom-0 left-0 w-full p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-2xl font-bold text-white mb-1">{member.name}</h3>
                    <p className={`text-sm font-medium mb-4 ${colors.text}`}>{member.title}</p>
                    
                    {/* Rating Badge */}
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-yellow-500/10 border border-yellow-500/20 rounded-lg text-yellow-400 text-xs font-bold mb-4">
                      <Trophy className="w-3.5 h-3.5" />
                      {member.rating}
                    </div>

                    {/* Achievements (Reveal on hover) */}
                    <div className="space-y-2.5 pt-4 border-t border-slate-800 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-75 transform translate-y-4 group-hover:translate-y-0">
                      {member.achievements.map((ach, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                          <CheckCircle2 className={`w-3.5 h-3.5 ${colors.text} mt-0.5 shrink-0`} />
                          <span>{ach}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom colored line */}
                <div className={`h-1 w-full ${colors.bg} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <Link href="/coaches" className="inline-flex items-center text-slate-400 hover:text-white font-semibold transition-colors group text-sm uppercase tracking-wider">
            See all coaches <Share2 className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
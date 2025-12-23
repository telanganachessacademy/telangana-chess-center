"use client";

import { Award, Star, Trophy, CheckCircle2, Linkedin, Twitter, Share2, Medal, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function TeamSection() {
  const teamMembers = [
    {
      name: "Tejaswin Naresh",
      role: "Head Coach",
      title: "FIDE Instructor & State Player",
      rating: "2200+ ELO",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=800",
      achievements: ["State Champion 2022", "Certified FIDE Instructor", "10+ Years Coaching"],
      color: "blue",
    },
    {
      name: "Tejaswin Aruna",
      role: "Senior Coach",
      title: "FIDE Rated Player",
      rating: "1800+ ELO",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800",
      achievements: ["Women's Title Holder", "Youth Mentor Specialist", "8+ Years Experience"],
      color: "purple",
    },
    {
      name: "Ranghunathan K S",
      role: "Master Trainer",
      title: "International FIDE Rated",
      rating: "2000+ ELO",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=800",
      achievements: ["International Player", "Opening Theory Expert", "15+ Years Experience"],
      color: "orange",
    },
    {
      name: "Kethavath Lokesh",
      role: "Tactics Expert",
      title: "International FIDE Rated",
      rating: "1900+ ELO",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=800",
      achievements: ["Tournament Director", "Endgame Specialist", "12+ Years Experience"],
      color: "green",
    },
  ];

  const getColors = (color: string) => {
    switch(color) {
      case "blue": return { text: "text-blue-600", bg: "bg-blue-600", light: "bg-blue-50", shadow: "shadow-blue-100", border: "border-blue-100" };
      case "purple": return { text: "text-purple-600", bg: "bg-purple-600", light: "bg-purple-50", shadow: "shadow-purple-100", border: "border-purple-100" };
      case "orange": return { text: "text-orange-600", bg: "bg-orange-600", light: "bg-orange-50", shadow: "shadow-orange-100", border: "border-orange-100" };
      case "green": return { text: "text-emerald-600", bg: "bg-emerald-600", light: "bg-emerald-50", shadow: "shadow-emerald-100", border: "border-emerald-100" };
      default: return {};
    }
  }

  return (
    <section id="team" className="py-24 bg-white relative overflow-hidden">
      
      {/* --- Background Design --- */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:40px_40px] opacity-30" />
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-emerald-50 rounded-full blur-[120px] opacity-50" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* --- Header --- */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-[10px] font-black uppercase tracking-[0.2em]">
            <Medal className="w-3.5 h-3.5" />
            <span>Master Faculty</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-black text-slate-900 tracking-tight leading-none">
            Meet Your <span className="text-emerald-600">Mentors</span>
          </h2>
          
          <p className="text-lg text-slate-500 font-medium leading-relaxed max-w-2xl mx-auto">
            Our faculty consists of FIDE-rated professionals and state champions who blend championship 
            pedigree with structured coaching excellence.
          </p>
        </div>

        {/* --- Team Grid --- */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {teamMembers.map((member, index) => {
            const colors = getColors(member.color) as any;
            
            return (
              <div
                key={index}
                className="group relative bg-white rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-xl shadow-slate-100/50 hover:shadow-2xl hover:shadow-slate-200 transition-all duration-700 hover:-translate-y-3"
              >
                {/* Image Section with Frame Effect */}
                <div className="relative aspect-[4/5] overflow-hidden p-3 pb-0">
                  <div className="relative h-full w-full rounded-[2rem] overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover transition-all duration-1000 grayscale-[0.4] group-hover:grayscale-0 group-hover:scale-110"
                    />
                    
                    {/* Floating Multi-Colored Socials */}
                    <div className="absolute top-4 right-4 flex flex-col gap-2 translate-x-16 group-hover:translate-x-0 transition-transform duration-500 delay-100">
                      <button className={`p-2.5 bg-white shadow-lg rounded-xl text-slate-400 hover:text-white ${colors.bg} transition-all`}>
                        <Linkedin className="w-4 h-4" />
                      </button>
                      <button className={`p-2.5 bg-white shadow-lg rounded-xl text-slate-400 hover:text-white ${colors.bg} transition-all`}>
                        <Twitter className="w-4 h-4" />
                      </button>
                    </div>

                    {/* FIDE Rating Tag */}
                    <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur shadow-lg px-3 py-1.5 rounded-xl border border-white flex items-center gap-2">
                       <Trophy className="w-3.5 h-3.5 text-yellow-500" />
                       <span className="text-[10px] font-black text-slate-900">{member.rating}</span>
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-8">
                  <div className="mb-6">
                    <span className={`text-[10px] font-black uppercase tracking-widest ${colors.text} ${colors.light} px-3 py-1 rounded-md`}>
                      {member.role}
                    </span>
                    <h3 className="text-2xl font-black text-slate-900 mt-3 tracking-tight group-hover:text-emerald-600 transition-colors">
                        {member.name}
                    </h3>
                    <p className="text-xs font-bold text-slate-400 mt-1 uppercase tracking-wider">{member.title}</p>
                  </div>

                  {/* Achievements List */}
                  <div className="space-y-3 pt-6 border-t border-slate-50">
                    {member.achievements.map((ach, i) => (
                      <div key={i} className="flex items-center gap-3 text-xs font-bold text-slate-600">
                        <CheckCircle2 className={`w-4 h-4 ${colors.text} shrink-0`} />
                        <span>{ach}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom colored accent */}
                <div className={`h-1.5 w-full ${colors.bg} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left`} />
              </div>
            );
          })}
        </div>

        {/* Bottom Link */}
        <div className="mt-20 text-center">
          <Link href="/coaches" className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-slate-900 text-white font-black text-xs uppercase tracking-[0.2em] hover:bg-emerald-600 transition-all shadow-xl shadow-slate-200 group">
            Explore All Faculty
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
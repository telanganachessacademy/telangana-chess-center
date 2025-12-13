"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Trophy,
  Star,
  Users,
  Calendar,
  Medal,
  GraduationCap,
  ArrowRight,
  Sparkles,
  CheckCircle2
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function CoachesPage() {
  const coaches = [
    {
      name: "Tejavath Naresh",
      title: "Head Coach & Founder",
      image: "/naresh.jpg", // Ensure this image exists in public folder
      rating: "2200", 
      specialization: ["Opening Theory", "Endgame Mastery", "Tournament Preparation"],
      achievements: ["FIDE Arbiter", "FIDE Rated Player", "Chess Coach"],
      experience: "15+ Years",
      students: "200+",
      bio: "Tejavath Naresh is the visionary founder of our academy with over 15 years of coaching excellence. He specializes in building a strong foundation for future grandmasters.",
      color: "blue", // Mapped to Indigo
    },
    {
      name: "Tejavath Aruna",
      title: "Senior Coach",
      rating: "2450",
      image: "/coach.png",
      specialization: ["Tactical Training", "Youth Development", "Women's Chess"],
      achievements: ["FIDE Rated Player", "Women's Title Holder"],
      experience: "12+ Years",
      students: "150+",
      bio: "Tejavath Aruna specializes in developing young talent and has coached multiple national champions with a focus on tactical sharpness.",
      color: "green", // Mapped to Emerald
    },
    {
      name: "Ranghanathan K S",
      title: "Junior Coach",
      rating: "2400",
      image: "/coach.png",
      specialization: ["Beginner Training", "School Programs", "Online Coaching"],
      achievements: ["International FIDE Rated"],
      experience: "8+ Years",
      students: "100+",
      bio: "Ranghanathan K S brings innovative teaching methods and excels in online chess education, making complex concepts easy to understand.",
      color: "purple", // Mapped to Purple
    },
    {
      name: "Kethavath Lokesh",
      title: "Assistant Coach",
      rating: "2300",
      image: "/coach.png",
      specialization: ["Puzzle Solving", "Pattern Recognition", "Rapid Chess"],
      achievements: ["International FIDE Rated"],
      experience: "6+ Years",
      students: "80+",
      bio: "Kethavath Lokesh is known for expertise in tactical training and rapid chess improvement, helping students spot combinations instantly.",
      color: "pink", // Mapped to Rose
    },
  ];

  // Helper to map color names to Tailwind Dark Mode classes
  const getThemeStyles = (color: string) => {
    switch (color) {
      case "blue":
        return {
          badge: "bg-indigo-500/10 text-indigo-300 border-indigo-500/30",
          icon: "text-indigo-400",
          border: "group-hover:border-indigo-500/50",
          glow: "group-hover:shadow-indigo-500/20",
          tag: "border-indigo-500/30 text-indigo-300 bg-indigo-500/5"
        };
      case "green":
        return {
          badge: "bg-emerald-500/10 text-emerald-300 border-emerald-500/30",
          icon: "text-emerald-400",
          border: "group-hover:border-emerald-500/50",
          glow: "group-hover:shadow-emerald-500/20",
          tag: "border-emerald-500/30 text-emerald-300 bg-emerald-500/5"
        };
      case "purple":
        return {
          badge: "bg-purple-500/10 text-purple-300 border-purple-500/30",
          icon: "text-purple-400",
          border: "group-hover:border-purple-500/50",
          glow: "group-hover:shadow-purple-500/20",
          tag: "border-purple-500/30 text-purple-300 bg-purple-500/5"
        };
      case "pink":
        return {
          badge: "bg-rose-500/10 text-rose-300 border-rose-500/30",
          icon: "text-rose-400",
          border: "group-hover:border-rose-500/50",
          glow: "group-hover:shadow-rose-500/20",
          tag: "border-rose-500/30 text-rose-300 bg-rose-500/5"
        };
      default: return {};
    }
  };

  return (
    <div className="min-h-screen bg-[#0B0F19] font-sans selection:bg-indigo-500/30 selection:text-indigo-200">
      
      {/* --- HERO SECTION --- */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Abstract Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
           <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[120px] translate-x-1/3 -translate-y-1/3"></div>
           <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-emerald-600/10 rounded-full blur-[100px] -translate-x-1/3 translate-y-1/3"></div>
           <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 brightness-100 contrast-150 mix-blend-overlay"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 backdrop-blur-md text-indigo-300 text-xs font-bold uppercase tracking-widest shadow-lg mb-6">
            <GraduationCap className="w-3.5 h-3.5 fill-indigo-400 text-indigo-400" />
            <span>World-Class Faculty</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 text-white tracking-tight leading-tight">
            Meet Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-emerald-400">Mentors</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed border-t border-slate-800 pt-6 mt-6">
            Grandmasters, International Masters, and FIDE-certified experts dedicated to shaping the next generation of Telangana's champions.
          </p>
        </div>
      </section>

      {/* --- COACHES GRID --- */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 gap-12">
            {coaches.map((coach, index) => {
              const styles = getThemeStyles(coach.color);

              return (
                <div 
                  key={index} 
                  className={`group relative bg-slate-900/40 backdrop-blur-md rounded-[2.5rem] border border-slate-800 shadow-2xl overflow-hidden hover:bg-slate-900/60 transition-all duration-500 ${styles.border} ${styles.glow} flex flex-col md:flex-row`}
                >
                  
                  {/* Image Column */}
                  <div className="relative w-full md:w-2/5 h-80 md:h-auto overflow-hidden">
                    <Image
                      src={coach.image}
                      alt={coach.name}
                      fill
                      className="object-cover transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0"
                    />
                    {/* Gradient Overlay to Blend Image */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:via-transparent md:to-[#0B0F19]/80"></div>
                    
                    {/* Floating Rating Badge */}
                    <div className="absolute bottom-6 left-6 md:left-8 bg-black/60 backdrop-blur-xl border border-white/10 text-white px-4 py-2 rounded-xl text-sm font-bold flex items-center gap-2 shadow-lg">
                      <Trophy className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                      <span>{coach.rating} ELO</span>
                    </div>
                  </div>

                  {/* Content Column */}
                  <div className="p-8 md:p-12 md:w-3/5 flex flex-col relative">
                    {/* Top Info */}
                    <div className="mb-6">
                      <div className={`inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest mb-3 border ${styles.badge}`}>
                        {coach.title}
                      </div>
                      <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">{coach.name}</h3>
                    </div>

                    <p className="text-slate-400 text-sm md:text-base leading-relaxed mb-8 flex-grow">
                      {coach.bio}
                    </p>

                    {/* Stats Row */}
                    <div className="grid grid-cols-2 gap-4 mb-8 py-6 border-t border-slate-800 border-b border-slate-800 bg-slate-950/30 rounded-xl px-4">
                      <div className="flex items-center gap-3">
                        <div className="p-2.5 rounded-lg bg-slate-800 text-slate-400">
                          <Calendar className={`w-5 h-5 ${styles.icon}`} />
                        </div>
                        <div>
                          <p className="text-[10px] uppercase text-slate-500 font-bold tracking-widest">Experience</p>
                          <p className="text-base font-bold text-white">{coach.experience}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                         <div className="p-2.5 rounded-lg bg-slate-800 text-slate-400">
                          <Users className={`w-5 h-5 ${styles.icon}`} />
                        </div>
                        <div>
                          <p className="text-[10px] uppercase text-slate-500 font-bold tracking-widest">Students</p>
                          <p className="text-base font-bold text-white">{coach.students}</p>
                        </div>
                      </div>
                    </div>

                    {/* Footer: Specs & Achievements */}
                    <div className="space-y-6">
                      <div>
                        <p className="text-xs text-slate-500 font-bold uppercase tracking-widest mb-3">Specialization</p>
                        <div className="flex flex-wrap gap-2">
                          {coach.specialization.map((spec, i) => (
                            <span key={i} className={`text-[10px] font-bold px-3 py-1.5 rounded-lg border uppercase tracking-wide transition-colors ${styles.tag}`}>
                              {spec}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-4">
                        {coach.achievements.map((ach, i) => (
                          <div key={i} className="flex items-center gap-2 text-xs text-slate-300 font-medium">
                            <CheckCircle2 className={`w-4 h-4 ${styles.icon}`} />
                            {ach}
                          </div>
                        ))}
                      </div>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* --- WHY CHOOSE US (Dark Glass) --- */}
      <section className="py-24 bg-slate-900/50 relative overflow-hidden border-t border-slate-800">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">The Telanagana Advantage</h2>
            <p className="text-slate-400 text-lg">Why thousands of students trust their chess journey with our faculty.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Star,
                title: "Proven Methodology",
                desc: "Our curriculum is designed by GMs to ensure steady progress from beginner to master level.",
                color: "text-amber-400",
                bg: "bg-amber-500/10",
                border: "border-amber-500/20"
              },
              {
                icon: Users,
                title: "Personalized Mentorship",
                desc: "We don't believe in one-size-fits-all. Every student gets a tailored roadmap based on their playstyle.",
                color: "text-indigo-400",
                bg: "bg-indigo-500/10",
                border: "border-indigo-500/20"
              },
              {
                icon: Trophy,
                title: "Tournament Focus",
                desc: "Regular internal leagues and preparation for official FIDE tournaments to build competitive spirit.",
                color: "text-rose-400",
                bg: "bg-rose-500/10",
                border: "border-rose-500/20"
              },
            ].map((feature, i) => (
              <div key={i} className="bg-slate-950/40 border border-slate-800 backdrop-blur-sm p-8 rounded-3xl hover:bg-slate-900 hover:border-slate-700 transition-all duration-300 hover:-translate-y-1">
                <div className={`mb-6 w-16 h-16 rounded-2xl flex items-center justify-center border ${feature.bg} ${feature.border}`}>
                  <feature.icon className={`w-8 h-8 ${feature.color}`} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CTA --- */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="relative bg-gradient-to-br from-indigo-900/50 to-slate-900 rounded-[3rem] p-12 md:p-20 border border-indigo-500/30 overflow-hidden">
            {/* Glow effects */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-indigo-500/20 rounded-full blur-[100px] pointer-events-none"></div>
            
            <div className="relative z-10">
                <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">Train with the Best</h2>
                <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-10">
                  Don't just play chess, master it. Book a free 1-on-1 assessment with our head coach today.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Link href="/contact">
                    <Button className="h-14 px-8 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-lg shadow-lg shadow-indigo-900/40 transition-all hover:scale-105">
                      Book Free Assessment
                    </Button>
                  </Link>
                  <Link href="/courses">
                    <Button variant="outline" className="h-14 px-8 rounded-xl border-slate-600 bg-transparent text-slate-300 hover:text-white hover:bg-slate-800 hover:border-slate-500 font-bold text-lg transition-all">
                      Explore Courses
                    </Button>
                  </Link>
                </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
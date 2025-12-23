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
  CheckCircle2,
  ChevronRight
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

  const getThemeStyles = (color: string) => {
    switch (color) {
      case "blue":
        return {
          btn: "bg-blue-600 hover:bg-blue-700 shadow-blue-100",
          icon: "text-blue-600",
          badge: "bg-blue-50 text-blue-700 border-blue-100",
          light: "bg-blue-50"
        };
      case "green":
        return {
          btn: "bg-emerald-600 hover:bg-emerald-700 shadow-emerald-100",
          icon: "text-emerald-600",
          badge: "bg-emerald-50 text-emerald-700 border-emerald-100",
          light: "bg-emerald-50"
        };
      case "purple":
        return {
          btn: "bg-purple-600 hover:bg-purple-700 shadow-purple-100",
          icon: "text-purple-600",
          badge: "bg-purple-50 text-purple-700 border-purple-100",
          light: "bg-purple-50"
        };
      case "orange":
        return {
          btn: "bg-orange-500 hover:bg-orange-600 shadow-orange-100",
          icon: "text-orange-600",
          badge: "bg-orange-50 text-orange-700 border-orange-100",
          light: "bg-orange-50"
        };
      default: return {};
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans selection:bg-emerald-100">
      
      {/* --- HERO SECTION --- */}
      <section className="relative pt-40 pb-24 overflow-hidden bg-white border-b border-slate-100">
        <div className="absolute inset-0 pointer-events-none">
           <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-50 rounded-full blur-[120px] opacity-60" />
           <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-50 rounded-full blur-[100px] opacity-40" />
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-[10px] font-black uppercase tracking-[0.2em] mb-8">
            <GraduationCap className="w-4 h-4" />
            <span>Elite Academy Faculty</span>
          </div>
          
          <h1 className="text-6xl md:text-7xl font-black mb-8 text-slate-900 tracking-tighter leading-none">
            Meet Your <span className="text-emerald-600">Mentors</span>
          </h1>
          
          <p className="text-xl text-slate-500 font-medium max-w-2xl mx-auto leading-relaxed">
            International Masters and FIDE-certified experts dedicated to shaping 
            the next generation of <span className="text-slate-900 font-bold underline decoration-emerald-500/30">Telangana Chess Academy</span> champions.
          </p>
        </div>
      </section>

      {/* --- COACHES GRID --- */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 gap-16">
            {coaches.map((coach, index) => {
              const styles = getThemeStyles(coach.color) as any;

              return (
                <div 
                  key={index} 
                  className="group relative bg-white rounded-[3rem] border border-slate-100 shadow-2xl shadow-slate-200/50 overflow-hidden flex flex-col lg:flex-row hover:shadow-emerald-100/50 transition-all duration-700"
                >
                  
                  {/* Image Column */}
                  <div className="relative w-full lg:w-[400px] h-96 lg:h-auto overflow-hidden p-4 lg:p-6 pb-0 lg:pb-6">
                    <div className="relative h-full w-full rounded-[2.5rem] overflow-hidden border-[8px] border-slate-50">
                      <Image
                        src={coach.image}
                        alt={coach.name}
                        fill
                        className="object-cover transition-all duration-1000 grayscale-[0.3] group-hover:grayscale-0 group-hover:scale-105"
                      />
                      {/* Rating Overlay */}
                      <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md border border-white px-5 py-2.5 rounded-2xl shadow-xl flex items-center gap-3">
                        <Trophy className="w-5 h-5 text-yellow-500" />
                        <span className="text-sm font-black text-slate-900">{coach.rating} ELO Rating</span>
                      </div>
                    </div>
                  </div>

                  {/* Content Column */}
                  <div className="p-10 lg:p-16 flex flex-col flex-grow">
                    <div className="mb-8">
                      <div className={`inline-block px-4 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-widest mb-4 border ${styles.badge}`}>
                        {coach.title}
                      </div>
                      <h3 className="text-4xl lg:text-5xl font-black text-slate-900 mb-4 tracking-tight group-hover:text-emerald-600 transition-colors">
                        {coach.name}
                      </h3>
                      <p className="text-slate-500 font-medium text-lg leading-relaxed line-clamp-3">
                        {coach.bio}
                      </p>
                    </div>

                    {/* Stats Mini-Dashboard */}
                    <div className="grid grid-cols-2 gap-4 mb-10">
                      <div className="flex items-center gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-100">
                        <div className={`p-3 rounded-xl bg-white shadow-sm ${styles.icon}`}>
                          <Calendar className="w-5 h-5" />
                        </div>
                        <div>
                          <p className="text-[10px] uppercase text-slate-400 font-black tracking-widest">Experience</p>
                          <p className="text-lg font-black text-slate-900">{coach.experience}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-100">
                         <div className={`p-3 rounded-xl bg-white shadow-sm ${styles.icon}`}>
                          <Users className="w-5 h-5" />
                        </div>
                        <div>
                          <p className="text-[10px] uppercase text-slate-400 font-black tracking-widest">Mentorship</p>
                          <p className="text-lg font-black text-slate-900">{coach.students} Students</p>
                        </div>
                      </div>
                    </div>

                    {/* Tags & Achievements */}
                    <div className="space-y-8">
                      <div className="flex flex-wrap gap-2">
                        {coach.specialization.map((spec, i) => (
                          <span key={i} className={`text-[10px] font-black px-4 py-2 rounded-xl border uppercase tracking-widest transition-all ${styles.badge} hover:shadow-sm`}>
                            {spec}
                          </span>
                        ))}
                      </div>

                      <div className="flex flex-col sm:flex-row justify-between items-center pt-8 border-t border-slate-50 gap-6">
                        <div className="flex flex-wrap justify-center sm:justify-start gap-6">
                          {coach.achievements.map((ach, i) => (
                            <div key={i} className="flex items-center gap-2 text-xs font-bold text-slate-600">
                              <CheckCircle2 className={`w-4 h-4 ${styles.icon}`} />
                              {ach}
                            </div>
                          ))}
                        </div>
                        
                        <Button className={`h-14 px-8 rounded-2xl text-xs font-black uppercase tracking-[0.2em] text-white transition-all active:scale-95 shadow-xl ${styles.btn} flex items-center gap-2`}>
                          View Profile <ChevronRight className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* --- THE ACADEMY STANDARD --- */}
      <section className="py-32 bg-white relative overflow-hidden border-t border-slate-100">
        <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:32px_32px] opacity-40" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-5xl font-black text-slate-900 mb-6 tracking-tight">The Academy Standard</h2>
            <p className="text-lg text-slate-500 font-medium leading-relaxed">Why the world&apos;s most promising students choose our faculty.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                icon: Star,
                title: "Curriculum Design",
                desc: "Our programs are designed by Masters to ensure a scientific path from zero to 2000+ ELO.",
                color: "text-amber-500",
                bg: "bg-amber-50"
              },
              {
                icon: Users,
                title: "Active Mentorship",
                desc: "We don't just lecture; we mentor. Personalized feedback for every tournament game you play.",
                color: "text-blue-600",
                bg: "bg-blue-50"
              },
              {
                icon: Trophy,
                title: "Elite Exposure",
                desc: "Direct pathways to official state and national FIDE rated tournaments through academy entry.",
                color: "text-orange-500",
                bg: "bg-orange-50"
              },
            ].map((feature, i) => (
              <div key={i} className="bg-[#FBFDFF] border border-slate-100 p-10 rounded-[2.5rem] shadow-xl shadow-slate-200/50 hover:-translate-y-2 transition-all duration-500 group">
                <div className={`mb-8 w-16 h-16 rounded-2xl flex items-center justify-center border border-white shadow-sm ${feature.bg}`}>
                  <feature.icon className={`w-8 h-8 ${feature.color}`} />
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-4 tracking-tight">{feature.title}</h3>
                <p className="text-slate-500 font-medium text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FINAL CTA --- */}
      <section className="py-24 px-6 bg-[#F8FAFC]">
        <div className="container mx-auto max-w-7xl">
          <div className="relative bg-slate-900 rounded-[4rem] p-12 lg:p-24 text-center overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none -mr-48 -mt-48" />
            
            <div className="relative z-10 space-y-8">
                <h2 className="text-4xl lg:text-7xl font-black text-white tracking-tighter">Train With Champions.</h2>
                <p className="text-xl text-slate-400 max-w-2xl mx-auto font-medium">
                  Don&apos;t just play chess, master it. Start your elite 1-on-1 coaching assessment today.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-5 pt-4">
                  <Link href="/contact">
                    <Button className="h-16 px-10 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-black uppercase tracking-widest text-xs shadow-xl shadow-emerald-500/20 transition-all active:scale-95">
                      Book Assessment Now
                    </Button>
                  </Link>
                  <Link href="/courses">
                    <Button variant="outline" className="h-16 px-10 rounded-2xl border-white/10 bg-white/5 text-white hover:bg-white/10 font-black uppercase tracking-widest text-xs transition-all">
                      Explore All Courses
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
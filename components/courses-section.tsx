"use client";

import { Button } from "@/components/ui/button";
import { Clock, Users, Star, Check, Crown, Target, Zap, BookOpen, ChevronRight, Trophy, Shield } from "lucide-react";
import Link from "next/link";

export function CoursesSection() {
  const courses = [
    {
      title: "Beginner Level – 1",
      level: "Beginner",
      duration: "3 Months",
      price: "₹15,000",
      students: "50+",
      rating: "4.9",
      icon: BookOpen,
      color: "blue",
      description: "Perfect for complete beginners. Learn the rules, movements, and basic checkmates to start playing confidently.",
      features: [
        "Intro to Chess Board & Pieces",
        "Movement & Value of Pieces",
        "Rules: Castling, En Passant",
        "Basic Checkmates & Stalemate",
      ],
      schedule: "2 classes/week (1.5 hrs)",
      ageGroup: "6+ years",
      classSize: "8-10 students",
      popular: false,
    },
    {
      title: "Beginner Level – 2",
      level: "Beginner",
      duration: "3 Months",
      price: "₹15,000",
      students: "45+",
      rating: "4.8",
      icon: BookOpen,
      color: "blue",
      description: "Builds on basics. Focus on elementary checkmates, simple tactics like pins and forks, and piece coordination.",
      features: [
        "King + Queen/Rook Checkmates",
        "Checkmate in 1 & 2 moves",
        "Tactics: Pin, Fork (Basic)",
        "Attacking the King",
      ],
      schedule: "2 classes/week (1.5 hrs)",
      ageGroup: "6+ years",
      classSize: "8-10 students",
      popular: false,
    },
    {
      title: "Intermediate Level – 1",
      level: "Intermediate",
      duration: "4 Months",
      price: "₹20,000",
      students: "40+",
      rating: "4.8",
      icon: Target,
      color: "orange",
      description: "Introduction to advanced tactics. Learn absolute pins, forks, double attacks, and calculating deeper mates.",
      features: [
        "Absolute vs Relative Pins",
        "Knight Forks & Double Attacks",
        "Checkmate in 3 & 4 moves",
        "Decoy Sacrifices",
      ],
      schedule: "3 classes/week (2 hrs)",
      ageGroup: "8+ years",
      classSize: "6-8 students",
      popular: true,
    },
    {
      title: "Intermediate Level – 2",
      level: "Intermediate",
      duration: "4 Months",
      price: "₹20,000",
      students: "40+",
      rating: "4.8",
      icon: Target,
      color: "orange",
      description: "Master opening principles. Develop pieces effectively, control the center, and study the Giuoco Piano.",
      features: [
        "Opening Principles & Development",
        "Good vs Bad Bishop",
        "Coordination of Pieces",
        "King Pawn Openings",
      ],
      schedule: "3 classes/week (2 hrs)",
      ageGroup: "8+ years",
      classSize: "6-8 students",
      popular: false,
    },
    {
      title: "Intermediate Level – 3",
      level: "Intermediate",
      duration: "4 Months",
      price: "₹20,000",
      students: "35+",
      rating: "4.8",
      icon: Target,
      color: "orange",
      description: "Deepen tactical understanding. Learn complex motifs like X-rays, interference, and overloading.",
      features: [
        "Discovered Attacks & X-Ray",
        "Interference Tactics",
        "Overloaded Pieces",
        "Clearance Sacrifices",
      ],
      schedule: "3 classes/week (2 hrs)",
      ageGroup: "8+ years",
      classSize: "6-8 students",
      popular: false,
    },
    {
      title: "Intermediate Level – 4",
      level: "Intermediate",
      duration: "4 Months",
      price: "₹20,000",
      students: "35+",
      rating: "4.8",
      icon: Target,
      color: "orange",
      description: "Strategic mastery. Understand pawn structures, open files, and positional concepts like zugzwang.",
      features: [
        "Pawn Structures & Chains",
        "Isolated & Backward Pawns",
        "Open Files & Outposts",
        "Repertoire Building",
      ],
      schedule: "3 classes/week (2 hrs)",
      ageGroup: "8+ years",
      classSize: "6-8 students",
      popular: false,
    },
    {
      title: "Advanced Level – 1",
      level: "Advanced",
      duration: "6 Months",
      price: "₹30,000",
      students: "25+",
      rating: "4.9",
      icon: Trophy,
      color: "purple",
      description: "Intensive training for competitive players. Deep opening analysis, endgame theory, and positional sacrifices.",
      features: [
        "Dynamic vs Static Centers",
        "Pawn & Knight Endgames",
        "Opening Repertoire",
        "Positional Sacrifices",
      ],
      schedule: "4 classes/week (2.5 hrs)",
      ageGroup: "12+ years",
      classSize: "4-6 students",
      popular: false,
    },
    {
      title: "Advanced Level – 2",
      level: "Expert",
      duration: "6 Months",
      price: "₹30,000",
      students: "20+",
      rating: "4.9",
      icon: Crown,
      color: "purple",
      description: "Elite training for aspiring masters. Focus on tournament discipline, psychology, and rigorous practice.",
      features: [
        "Tournament Psychology",
        "Calculation Visualization",
        "Complex Endgames",
        "GM Game Analysis",
      ],
      schedule: "4 classes/week (2.5 hrs)",
      ageGroup: "12+ years",
      classSize: "4-6 students",
      popular: true,
    },
  ];

  const getThemeStyles = (color: string) => {
    switch (color) {
      case "blue":
        return {
          btn: "bg-[#0b3272] hover:bg-[#082352] text-white shadow-blue-900/15",
          iconBg: "bg-blue-50 text-[#0b3272] border-blue-100",
          iconColor: "text-[#0b3272]",
          badgeBg: "bg-blue-50 text-[#0b3272] border-blue-100",
          accentLine: "bg-[#0b3272]",
          border: "border-slate-200/80"
        };
      case "orange":
        return {
          btn: "bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-black shadow-amber-500/20",
          iconBg: "bg-amber-50 text-amber-700 border-amber-200",
          iconColor: "text-amber-700",
          badgeBg: "bg-amber-50 text-amber-800 border-amber-200",
          accentLine: "bg-amber-500",
          border: "border-amber-200/80"
        };
      case "purple":
        return {
          btn: "bg-[#0e8743] hover:bg-[#085a2b] text-white shadow-emerald-900/15",
          iconBg: "bg-emerald-50 text-[#0e8743] border-emerald-100",
          iconColor: "text-[#0e8743]",
          badgeBg: "bg-emerald-50 text-[#0e8743] border-emerald-100",
          accentLine: "bg-[#0e8743]",
          border: "border-slate-200/80"
        };
      default: return {
        btn: "bg-[#0b3272] hover:bg-[#082352] text-white",
        iconBg: "bg-blue-50 text-[#0b3272] border-blue-100",
        iconColor: "text-[#0b3272]",
        badgeBg: "bg-blue-50 text-[#0b3272]",
        accentLine: "bg-[#0b3272]",
        border: "border-slate-200/80"
      };
    }
  };

  return (
    <section id="courses" className="py-24 bg-gradient-to-b from-white via-slate-50/50 to-white relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-blue-50 rounded-full blur-[120px] opacity-60" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-50 rounded-full blur-[120px] opacity-50" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-7xl">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-900 text-[10px] font-black uppercase tracking-[0.2em]">
            <BookOpen className="w-3.5 h-3.5 text-amber-600" />
            <span>Structured Academy Curriculum</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-black text-slate-950 tracking-tight leading-tight">
            Choose Your <br />
            <span className="text-[#0b3272]">Path to</span> <span className="text-[#0e8743]">Mastery</span>
          </h2>
          
          <p className="text-base sm:text-lg text-slate-600 font-medium leading-relaxed max-w-2xl mx-auto">
            From first moves to tournament trophies, our structured curriculum is designed by FIDE masters to elevate your game.
          </p>
        </div>

        {/* 4 Per Row Courses Grid on Desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {courses.map((course, index) => {
            const Icon = course.icon;
            const styles = getThemeStyles(course.color) as any;

            return (
              <div
                key={index}
                className={`relative bg-white rounded-3xl border ${styles.border} p-6 transition-all duration-500 flex flex-col shadow-lg shadow-slate-100 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-950/10 group`}
              >
                {/* Popular Badge */}
                {course.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3.5 py-1 rounded-full text-[9px] font-black uppercase tracking-wider bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 shadow-md flex items-center gap-1">
                    <Crown className="w-3 h-3" />
                    <span>Popular Choice</span>
                  </div>
                )}

                {/* Card Top */}
                <div className="mb-4">
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className={`w-11 h-11 ${styles.iconBg} rounded-xl border flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shrink-0`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className={`text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-md border ${styles.badgeBg}`}>
                      {course.level}
                    </span>
                  </div>

                  <h3 className="text-lg font-black text-slate-950 mb-2 tracking-tight group-hover:text-[#0b3272] transition-colors line-clamp-1">
                    {course.title}
                  </h3>
                  
                  <p className="text-slate-500 font-medium text-xs leading-relaxed line-clamp-2 min-h-[36px]">
                    {course.description}
                  </p>
                </div>

                {/* Mini Stats Bar */}
                <div className="grid grid-cols-3 gap-1 py-2.5 border-y border-slate-100 mb-4 bg-slate-50/60 rounded-xl px-2 text-center">
                  <div>
                    <span className="text-[9px] font-bold text-slate-400 block uppercase">Duration</span>
                    <span className="text-[11px] font-extrabold text-slate-800">{course.duration}</span>
                  </div>
                  <div className="border-x border-slate-200">
                    <span className="text-[9px] font-bold text-slate-400 block uppercase">Students</span>
                    <span className="text-[11px] font-extrabold text-slate-800">{course.students}</span>
                  </div>
                  <div>
                    <span className="text-[9px] font-bold text-slate-400 block uppercase">Rating</span>
                    <span className="text-[11px] font-extrabold text-slate-800 flex items-center justify-center gap-0.5">
                      <Star className="w-3 h-3 text-amber-500 fill-amber-400" /> {course.rating}
                    </span>
                  </div>
                </div>

                {/* Features List */}
                <div className="space-y-2 mb-6 flex-grow">
                  <p className="text-[10px] font-black uppercase tracking-wider text-slate-400">Core Highlights</p>
                  {course.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <Check className={`w-3.5 h-3.5 mt-0.5 shrink-0 ${styles.iconColor}`} />
                      <span className="text-xs text-slate-700 font-semibold leading-tight">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Pricing & CTA */}
                <div className="mt-auto pt-4 border-t border-slate-100">
                  <div className="flex items-baseline justify-between mb-4">
                    <div>
                      <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Course Fee</p>
                      <span className="text-2xl font-black text-slate-950">{course.price}</span>
                    </div>
                    <span className="text-[10px] font-bold text-slate-500">
                      {course.schedule}
                    </span>
                  </div>
                  
                  <Link href="/contact" className="w-full">
                    <Button 
                      className={`w-full h-11 rounded-xl font-black text-[11px] uppercase tracking-wider transition-all active:scale-95 flex items-center justify-center gap-1.5 cursor-pointer ${styles.btn}`}
                    >
                      <span>Enroll Now</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </Button>
                  </Link>
                </div>

              </div>
            );
          })}
        </div>

        {/* Bottom Explorer Link */}
        <div className="mt-14 text-center">
          <Link href="/courses">
            <Button variant="outline" className="border-slate-300 text-slate-800 hover:bg-[#0b3272] hover:text-white rounded-2xl px-8 h-12 text-xs font-black uppercase tracking-wider transition-all shadow-sm">
              View Complete Syllabus & Batch Schedules
            </Button>
          </Link>
        </div>

      </div>
    </section>
  );
}
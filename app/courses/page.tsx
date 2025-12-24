"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Trophy,
  Star,
  Users,
  Clock,
  BookOpen,
  Target,
  Crown,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  Zap,
  Sparkles,
  CalendarDays,
  UserCheck,
  ChevronRight
} from "lucide-react";
import Link from "next/link";

export default function CoursesPage() {
  const [expandedCourses, setExpandedCourses] = useState<{ [key: number]: boolean }>({});

  const toggleFeatures = (index: number) => {
    setExpandedCourses((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

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
        "Files, Ranks, Diagonals",
        "Center Control Basics",
      ],
      schedule: "2 classes/week (1.5 hrs)",
      ageGroup: "6+ years",
      classSize: "8-10 students",
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
        "Discovered Checks",
        "Simple Combinations",
        "Attacking the King",
      ],
      schedule: "2 classes/week (1.5 hrs)",
      ageGroup: "6+ years",
      classSize: "8-10 students",
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
        "Discovered Check Tactics",
        "Removing the Defender",
        "Decoy Sacrifices",
      ],
      schedule: "3 classes/week (2 hrs)",
      ageGroup: "8+ years",
      classSize: "6-8 students",
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
        "King Pawn Openings (Giuoco Piano)",
        "Advanced Combinations",
        "Mating Nets",
      ],
      schedule: "3 classes/week (2 hrs)",
      ageGroup: "8+ years",
      classSize: "6-8 students",
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
        "Discovered Attacks",
        "X-Ray Attacks",
        "Interference Tactics",
        "Overloaded Pieces",
        "Attraction & Deflection",
        "Clearance Sacrifices",
      ],
      schedule: "3 classes/week (2 hrs)",
      ageGroup: "8+ years",
      classSize: "6-8 students",
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
        "Zugzwang & Traps",
        "Passed Pawns",
        "Opening Repertoire Building",
      ],
      schedule: "3 classes/week (2 hrs)",
      ageGroup: "8+ years",
      classSize: "6-8 students",
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
        "Advanced Opening Repertoire",
        "Space Advantage & Prophylaxis",
        "Attacking Themes (Greek Gift)",
        "Positional Sacrifices",
      ],
      schedule: "4 classes/week (2.5 hrs)",
      ageGroup: "12+ years",
      classSize: "4-6 students",
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
        "Grandmaster Game Analysis",
        "Opening Preparation",
        "Competitive Homework",
      ],
      schedule: "4 classes/week (2.5 hrs)",
      ageGroup: "12+ years",
      classSize: "4-6 students",
    },
  ];

  // Professional Light Theme Styling Helper
  const getThemeStyles = (color: string) => {
    switch (color) {
      case "blue":
        return {
          iconBg: "bg-blue-50 border-blue-100",
          iconColor: "text-blue-600",
          border: "border-slate-100",
          glow: "hover:shadow-blue-100",
          btn: "bg-blue-600 hover:bg-blue-700 shadow-blue-50",
          check: "text-blue-600",
          text: "text-blue-700"
        };
      case "orange":
        return {
          iconBg: "bg-orange-50 border-orange-100",
          iconColor: "text-orange-600",
          border: "border-slate-100",
          glow: "hover:shadow-orange-100",
          btn: "bg-orange-500 hover:bg-orange-600 shadow-orange-50",
          check: "text-orange-600",
          text: "text-orange-700"
        };
      case "purple":
        return {
          iconBg: "bg-purple-50 border-purple-100",
          iconColor: "text-purple-600",
          border: "border-slate-100",
          glow: "hover:shadow-purple-100",
          btn: "bg-purple-600 hover:bg-purple-700 shadow-purple-50",
          check: "text-purple-600",
          text: "text-purple-700"
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
            <CalendarDays className="w-3.5 h-3.5" />
            <span>2025 Academy Enrollment</span>
          </div>
          <h1 className="text-6xl md:text-5xl font-black mb-8 text-slate-900 tracking-tighter leading-none">
            Master Every <span className="text-emerald-600">Level.</span>
          </h1>
          <p className="text-xl text-slate-500 font-medium max-w-3xl mx-auto leading-relaxed">
            The most structured curriculum in <span className="text-slate-900 font-bold underline decoration-emerald-500/30">Telangana Chess Academy</span> history. 
            From your first move to competitive mastery.
          </p>
        </div>
      </section>

      {/* --- LEVEL SUMMARY --- */}
      <section className="relative z-20 -mt-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { level: "Beginner", desc: "Foundation & Rules", color: "text-blue-600", border: "border-blue-500", bg: "bg-blue-50" },
              { level: "Intermediate", desc: "Tactics & Strategy", color: "text-orange-600", border: "border-orange-500", bg: "bg-orange-50" },
              { level: "Advanced", desc: "Competition & Elite", color: "text-purple-600", border: "border-purple-500", bg: "bg-purple-50" },
            ].map((item, idx) => (
              <div 
                key={idx} 
                className={`bg-white rounded-[2rem] shadow-xl shadow-slate-200/50 p-10 border-t-8 transition-transform duration-500 hover:-translate-y-2 border border-slate-100`}
                style={{borderTopColor: "inherit"}}
              >
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center font-black text-xl mb-6 shadow-sm border border-white ${item.bg} ${item.color}`}>
                  0{idx + 1}
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-2">{item.level}</h3>
                <p className="text-slate-500 font-bold text-sm uppercase tracking-widest">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FULL COURSES CATALOG --- */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-2 gap-10">
            {courses.map((course, index) => {
              const styles = getThemeStyles(course.color) as any;

              return (
                <div 
                  key={index} 
                  className={`group bg-white rounded-[2.5rem] border border-slate-100 overflow-hidden transition-all duration-500 shadow-xl shadow-slate-100/50 flex flex-col ${styles.glow} hover:shadow-2xl`}
                >
                  
                  {/* Card Content Area */}
                  <div className="p-10 flex flex-col h-full">
                    <div className="flex justify-between items-start mb-10">
                      <div className={`w-16 h-16 rounded-2xl flex items-center justify-center border transition-transform duration-500 group-hover:rotate-6 ${styles.iconBg}`}>
                        <course.icon className={`w-8 h-8 ${styles.iconColor}`} />
                      </div>
                      <div className="text-right">
                        <span className="block text-4xl font-black text-slate-900 tracking-tighter">{course.price}</span>
                        <span className="text-[10px] text-slate-400 font-black uppercase tracking-[0.2em]">Course Fee</span>
                      </div>
                    </div>

                    <div className="mb-8">
                       <span className={`inline-block px-3 py-1 rounded-md text-[10px] font-black uppercase tracking-widest mb-4 ${styles.bg} ${styles.text}`}>
                          {course.level} TRACK
                       </span>
                       <h3 className="text-3xl font-black text-slate-900 mb-4 tracking-tight group-hover:text-emerald-600 transition-colors">
                          {course.title}
                       </h3>
                       <p className="text-slate-500 font-medium leading-relaxed border-l-4 border-slate-100 pl-6">
                          {course.description}
                       </p>
                    </div>

                    {/* Meta Stats Dashboard */}
                    <div className="grid grid-cols-3 gap-1 py-6 border-t border-b border-slate-50 mb-10">
                       <div className="flex flex-col items-center">
                          <Clock className="w-4 h-4 text-slate-300 mb-2" />
                          <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Duration</span>
                          <span className="text-xs font-black text-slate-800 uppercase">{course.duration}</span>
                       </div>
                       <div className="flex flex-col items-center border-x border-slate-100 px-4">
                          <Users className="w-4 h-4 text-slate-300 mb-2" />
                          <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Batch Size</span>
                          <span className="text-xs font-black text-slate-800 uppercase">{course.classSize}</span>
                       </div>
                       <div className="flex flex-col items-center">
                          <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 mb-2" />
                          <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Satisfaction</span>
                          <span className="text-xs font-black text-slate-800 uppercase">{course.rating}/5.0</span>
                       </div>
                    </div>

                    {/* Syllabus Highlights */}
                    <div className="flex-grow">
                      <h4 className="text-[10px] font-black text-emerald-600 uppercase tracking-[0.3em] mb-6 flex items-center gap-2">
                        <Sparkles className="w-3.5 h-3.5" /> Core Curriculum
                      </h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6">
                        {course.features.slice(0, 4).map((feature, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <CheckCircle2 className={`w-4 h-4 mt-0.5 flex-shrink-0 ${styles.check}`} />
                            <span className="text-[13px] font-bold text-slate-600 leading-tight">{feature}</span>
                          </li>
                        ))}
                        
                        {/* Expanded Items */}
                        {expandedCourses[index] && course.features.slice(4).map((feature, i) => (
                          <li key={i} className="flex items-start gap-3 animate-in fade-in slide-in-from-top-2 duration-300">
                            <CheckCircle2 className={`w-4 h-4 mt-0.5 flex-shrink-0 ${styles.check}`} />
                            <span className="text-[13px] font-bold text-slate-600 leading-tight">{feature}</span>
                          </li>
                        ))}
                      </ul>

                      {course.features.length > 4 && (
                        <button 
                          onClick={() => toggleFeatures(index)}
                          className={`mt-10 flex items-center gap-2 text-[10px] font-black uppercase tracking-widest transition-all ${styles.text} hover:opacity-70`}
                        >
                          {expandedCourses[index] ? (
                            <>Collapse Syllabus <ChevronUp className="w-3.5 h-3.5" /></>
                          ) : (
                            <>Full Syllabus Details <ChevronDown className="w-3.5 h-3.5" /></>
                          )}
                        </button>
                      )}
                    </div>

                    {/* Enrollment Actions */}
                    <div className="mt-10 pt-10 border-t border-slate-50 flex gap-4">
                      <Link href="/contact" className="flex-grow">
                        <Button className={`w-full h-14 rounded-2xl font-black text-xs uppercase tracking-[0.2em] text-white shadow-xl transition-all active:scale-95 flex items-center justify-center gap-2 ${styles.btn}`}>
                          Enroll Course <ChevronRight className="w-4 h-4" />
                        </Button>
                      </Link>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* --- INSTITUTIONAL ADVANTAGE --- */}
      <section className="py-32 bg-white relative overflow-hidden border-t border-slate-100">
         <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:40px_40px] opacity-40"></div>

         <div className="container mx-auto px-6 relative z-10 text-center">
            <h2 className="text-5xl font-black text-slate-900 mb-20 tracking-tight">The Academy Advantage</h2>
            
            <div className="grid md:grid-cols-3 gap-10">
              {[
                { icon: UserCheck, title: "FIDE Mentorship", desc: "Learn directly from certified FIDE masters who tailor coaching to your unique playing style.", color: "text-blue-600", bg: "bg-blue-50" },
                { icon: Trophy, title: "Tournament Prep", desc: "Our curriculum is engineered to prepare you for official state and national FIDE rated events.", color: "text-orange-500", bg: "bg-orange-50" },
                { icon: Zap, title: "Interactive Hub", desc: "Access the academy's digital training suite, complete with Stockfish engine and 1-on-1 feedback.", color: "text-emerald-600", bg: "bg-emerald-50" },
              ].map((item, i) => (
                <div key={i} className="bg-[#FBFDFF] border border-slate-100 p-12 rounded-[2.5rem] shadow-xl shadow-slate-200/50 group hover:-translate-y-2 transition-all duration-500">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 mx-auto border border-white shadow-sm ${item.bg} ${item.color}`}>
                    <item.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 mb-4 tracking-tight">{item.title}</h3>
                  <p className="text-slate-500 font-medium text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
         </div>
      </section>

    </div>
  );
}
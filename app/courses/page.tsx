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
  Sparkles
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

  // Dynamic Theme Helper
  const getThemeStyles = (color: string) => {
    switch (color) {
      case "blue":
        return {
          iconBg: "bg-indigo-500/10 border-indigo-500/20",
          iconColor: "text-indigo-400",
          border: "group-hover:border-indigo-500/50",
          glow: "group-hover:shadow-[0_0_30px_rgba(99,102,241,0.2)]",
          btn: "bg-indigo-600 hover:bg-indigo-500",
          check: "text-indigo-400"
        };
      case "orange":
        return {
          iconBg: "bg-orange-500/10 border-orange-500/20",
          iconColor: "text-orange-400",
          border: "group-hover:border-orange-500/50",
          glow: "group-hover:shadow-[0_0_30px_rgba(249,115,22,0.2)]",
          btn: "bg-orange-600 hover:bg-orange-500",
          check: "text-orange-400"
        };
      case "purple":
        return {
          iconBg: "bg-purple-500/10 border-purple-500/20",
          iconColor: "text-purple-400",
          border: "group-hover:border-purple-500/50",
          glow: "group-hover:shadow-[0_0_30px_rgba(168,85,247,0.2)]",
          btn: "bg-purple-600 hover:bg-purple-500",
          check: "text-purple-400"
        };
      default: return {};
    }
  };

  return (
    <div className="min-h-screen bg-[#0B0F19] font-sans selection:bg-indigo-500/30 selection:text-indigo-200">
      
      {/* --- HERO SECTION --- */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        {/* Background Ambience */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
           <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] translate-x-1/3 -translate-y-1/3"></div>
           <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[100px] -translate-x-1/3 translate-y-1/3"></div>
           <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 brightness-100 contrast-150 mix-blend-overlay"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <Badge className="mb-6 bg-indigo-500/10 text-indigo-300 border-indigo-500/30 px-4 py-1.5 text-xs font-bold uppercase tracking-widest shadow-lg">
            Curriculum
          </Badge>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 text-white tracking-tight">
            Master the Game at <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-emerald-400">Every Level</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed border-t border-slate-800 pt-6">
            From your first move to your first tournament win. Our structured curriculum is designed to take you from beginner to expert.
          </p>
        </div>
      </section>

      {/* --- LEVEL SELECTOR --- */}
      <section className="relative z-20 -mt-12 px-4 pb-12">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { level: "Beginner", desc: "Foundations & Rules", color: "text-indigo-400", border: "border-indigo-500", bg: "bg-indigo-500/10" },
              { level: "Intermediate", desc: "Tactics & Strategy", color: "text-orange-400", border: "border-orange-500", bg: "bg-orange-500/10" },
              { level: "Advanced", desc: "Competition & Mastery", color: "text-purple-400", border: "border-purple-500", bg: "bg-purple-500/10" },
            ].map((item, idx) => (
              <div 
                key={idx} 
                className={`bg-slate-900/60 backdrop-blur-md rounded-2xl shadow-xl p-8 border-t-4 hover:-translate-y-2 transition-transform duration-300 border border-slate-800 ${item.border}`}
                style={{borderTopColor: "inherit"}}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold text-xl mb-4 shadow-inner border border-white/5 ${item.bg} ${item.color}`}>
                  {idx + 1}
                </div>
                <h3 className="text-xl font-bold text-white mb-1">{item.level}</h3>
                <p className="text-slate-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- COURSES LIST --- */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-2 gap-8">
            {courses.map((course, index) => {
              const styles = getThemeStyles(course.color);

              return (
                <div 
                  key={index} 
                  className={`group bg-slate-900/40 backdrop-blur-md rounded-[2rem] border border-slate-800 overflow-hidden transition-all duration-500 hover:-translate-y-1 flex flex-col ${styles.border} ${styles.glow}`}
                >
                  
                  {/* Card Header */}
                  <div className="p-8 pb-4">
                    <div className="flex justify-between items-start mb-6">
                      <div className={`w-16 h-16 rounded-2xl flex items-center justify-center border ${styles.iconBg}`}>
                        <course.icon className={`w-8 h-8 ${styles.iconColor}`} />
                      </div>
                      <div className="text-right">
                        <span className="block text-3xl font-black text-white">{course.price}</span>
                        <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">/ course</span>
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-3">{course.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed mb-6 border-l-2 border-slate-700 pl-4">{course.description}</p>

                    {/* Meta Stats Row (Glass Strip) */}
                    <div className="grid grid-cols-3 gap-4 py-4 border-t border-b border-slate-800 bg-slate-950/30 rounded-lg px-2">
                       <div className="flex items-center gap-2 justify-center lg:justify-start">
                          <Clock className="w-4 h-4 text-slate-500" />
                          <div>
                            <p className="hidden sm:block text-[10px] uppercase text-slate-500 font-bold tracking-wider">Duration</p>
                            <p className="text-xs sm:text-sm font-bold text-slate-300">{course.duration}</p>
                          </div>
                       </div>
                       <div className="flex items-center gap-2 justify-center lg:justify-start">
                          <Users className="w-4 h-4 text-slate-500" />
                          <div>
                            <p className="hidden sm:block text-[10px] uppercase text-slate-500 font-bold tracking-wider">Size</p>
                            <p className="text-xs sm:text-sm font-bold text-slate-300">{course.classSize}</p>
                          </div>
                       </div>
                       <div className="flex items-center gap-2 justify-center lg:justify-start">
                          <Star className="w-4 h-4 text-slate-500" />
                          <div>
                            <p className="hidden sm:block text-[10px] uppercase text-slate-500 font-bold tracking-wider">Rating</p>
                            <p className="text-xs sm:text-sm font-bold text-slate-300">{course.rating}</p>
                          </div>
                       </div>
                    </div>
                  </div>

                  {/* Syllabus / Features */}
                  <div className="px-8 py-6 bg-slate-950/40 flex-grow">
                    <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4 flex items-center gap-2">
                      <Sparkles className="w-3 h-3" /> Syllabus Highlights
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-4">
                      {course.features.slice(0, 4).map((feature, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-slate-300">
                          <CheckCircle2 className={`w-4 h-4 mt-0.5 flex-shrink-0 ${styles.check}`} />
                          <span className="leading-tight">{feature}</span>
                        </li>
                      ))}
                      
                      {/* Expanded View */}
                      {expandedCourses[index] && course.features.slice(4).map((feature, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-slate-300 animate-in fade-in slide-in-from-top-2 duration-300">
                          <CheckCircle2 className={`w-4 h-4 mt-0.5 flex-shrink-0 ${styles.check}`} />
                          <span className="leading-tight">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {course.features.length > 4 && (
                      <button 
                        onClick={() => toggleFeatures(index)}
                        className="mt-6 flex items-center gap-1 text-xs font-bold text-slate-500 hover:text-white transition-colors uppercase tracking-wide"
                      >
                        {expandedCourses[index] ? (
                          <>Show Less <ChevronUp className="w-3 h-3" /></>
                        ) : (
                          <>View Full Syllabus <ChevronDown className="w-3 h-3" /></>
                        )}
                      </button>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="p-8 pt-4 flex gap-4 mt-auto">
                    <Link href="/contact" className="flex-1">
                      <Button className={`w-full h-12 rounded-xl font-bold text-base shadow-lg transition-all hover:scale-[1.02] active:scale-95 ${styles.btn}`}>
                        Enroll Now
                      </Button>
                    </Link>
                    <Link href="/contact">
                      <Button variant="outline" className="h-12 w-full rounded-xl font-bold border-slate-700 bg-transparent text-slate-400 hover:bg-slate-800 hover:text-white hover:border-slate-600">
                        Details
                      </Button>
                    </Link>
                  </div>

                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* --- WHY CHOOSE US (Dark Panel) --- */}
      <section className="py-20 bg-slate-900/50 relative overflow-hidden border-t border-slate-800">
         <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]"></div>

         <div className="container mx-auto px-4 relative z-10 text-center">
            <h2 className="text-3xl font-bold text-white mb-12">Why Train With Us?</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: Users, title: "Small Batches", desc: "We limit class sizes to ensure every student gets personal attention from the coach.", color: "text-indigo-400" },
                { icon: Trophy, title: "Proven Success", desc: "Our structured curriculum has produced state champions and rated players consistently.", color: "text-amber-400" },
                { icon: Zap, title: "Interactive Learning", desc: "We use modern tools, puzzles, and game analysis to make learning engaging.", color: "text-emerald-400" },
              ].map((item, i) => (
                <div key={i} className="bg-slate-950/60 backdrop-blur-sm p-8 rounded-3xl border border-slate-800 hover:border-slate-700 transition-colors">
                  <item.icon className={`w-12 h-12 mx-auto mb-6 ${item.color}`} />
                  <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
         </div>
      </section>

    </div>
  );
}
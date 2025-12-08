"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Trophy,
  Star,
  Users,
  Clock,
  BookOpen,
  Target,
  Zap,
  Crown,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  ArrowRight
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
        "removing the Defender",
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

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      
      {/* --- HERO SECTION --- */}
      <section className="bg-[#020617] pt-32 pb-24 relative overflow-hidden">
        {/* Abstract Background */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-orange-600/10 rounded-full blur-[100px] pointer-events-none -translate-x-1/3 translate-y-1/3"></div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <Badge className="mb-6 bg-blue-900/50 text-blue-300 border-blue-800 px-4 py-1.5 text-sm uppercase tracking-wider">
            Curriculum
          </Badge>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white tracking-tight">
            Master the Game at <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-orange-400">Every Level</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            From your first move to your first tournament win. Our structured curriculum is designed to take you from beginner to expert.
          </p>
        </div>
      </section>

      {/* --- LEVEL SELECTOR --- */}
      <section className="relative z-20 -mt-12 px-4 pb-12">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { level: "Beginner", desc: "Foundations & Rules", color: "bg-blue-600", border: "border-blue-500" },
              { level: "Intermediate", desc: "Tactics & Strategy", color: "bg-orange-600", border: "border-orange-500" },
              { level: "Advanced", desc: "Competition & Mastery", color: "bg-purple-600", border: "border-purple-500" },
            ].map((item, idx) => (
              <div key={idx} className="bg-white rounded-2xl shadow-xl p-6 border-t-4 border-slate-100 hover:-translate-y-1 transition-transform duration-300" style={{borderColor: item.color}}>
                <div className={`w-12 h-12 rounded-xl ${item.color} flex items-center justify-center text-white font-bold text-xl mb-4 shadow-lg`}>
                  {idx + 1}
                </div>
                <h3 className="text-xl font-bold text-slate-900">{item.level}</h3>
                <p className="text-slate-500 text-sm">{item.desc}</p>
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
              // Dynamic Colors
              const themeColor = 
                course.color === 'blue' ? 'text-blue-600 bg-blue-50 border-blue-100' :
                course.color === 'orange' ? 'text-orange-600 bg-orange-50 border-orange-100' : 
                'text-purple-600 bg-purple-50 border-purple-100';

              const btnColor = 
                course.color === 'blue' ? 'bg-blue-600 hover:bg-blue-700' :
                course.color === 'orange' ? 'bg-orange-600 hover:bg-orange-700' : 
                'bg-purple-600 hover:bg-purple-700';

              return (
                <div key={index} className="bg-white rounded-[2rem] shadow-lg border border-slate-100 overflow-hidden hover:shadow-2xl transition-all duration-300 flex flex-col">
                  {/* Card Header */}
                  <div className="p-8 pb-4">
                    <div className="flex justify-between items-start mb-6">
                      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${themeColor}`}>
                        <course.icon className="w-7 h-7" />
                      </div>
                      <div className="text-right">
                        <span className="block text-2xl font-bold text-slate-900">{course.price}</span>
                        <span className="text-xs text-slate-500 font-medium uppercase tracking-wide">/ course</span>
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold text-slate-900 mb-2">{course.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed mb-6">{course.description}</p>

                    {/* Meta Stats Row */}
                    <div className="grid grid-cols-3 gap-4 py-4 border-t border-b border-slate-50">
                       <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-slate-400" />
                          <div>
                            <p className="text-[10px] uppercase text-slate-400 font-bold">Duration</p>
                            <p className="text-sm font-bold text-slate-700">{course.duration}</p>
                          </div>
                       </div>
                       <div className="flex items-center gap-2">
                          <Users className="w-4 h-4 text-slate-400" />
                          <div>
                            <p className="text-[10px] uppercase text-slate-400 font-bold">Size</p>
                            <p className="text-sm font-bold text-slate-700">{course.classSize}</p>
                          </div>
                       </div>
                       <div className="flex items-center gap-2">
                          <Star className="w-4 h-4 text-slate-400" />
                          <div>
                            <p className="text-[10px] uppercase text-slate-400 font-bold">Rating</p>
                            <p className="text-sm font-bold text-slate-700">{course.rating}</p>
                          </div>
                       </div>
                    </div>
                  </div>

                  {/* Syllabus / Features */}
                  <div className="px-8 py-4 bg-slate-50/50 flex-grow">
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Syllabus Highlights</h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-4">
                      {course.features.slice(0, 4).map((feature, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                          <CheckCircle2 className={`w-4 h-4 mt-0.5 flex-shrink-0 ${
                             course.color === 'blue' ? 'text-blue-500' :
                             course.color === 'orange' ? 'text-orange-500' : 'text-purple-500'
                          }`} />
                          <span className="leading-tight">{feature}</span>
                        </li>
                      ))}
                      
                      {/* Expanded View */}
                      {expandedCourses[index] && course.features.slice(4).map((feature, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-slate-600 animate-fade-in">
                          <CheckCircle2 className={`w-4 h-4 mt-0.5 flex-shrink-0 ${
                             course.color === 'blue' ? 'text-blue-500' :
                             course.color === 'orange' ? 'text-orange-500' : 'text-purple-500'
                          }`} />
                          <span className="leading-tight">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {course.features.length > 4 && (
                      <button 
                        onClick={() => toggleFeatures(index)}
                        className="mt-4 flex items-center gap-1 text-xs font-bold text-slate-500 hover:text-slate-800 transition-colors"
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
                      <Button className={`w-full h-12 rounded-xl font-bold text-base shadow-lg transition-transform active:scale-95 ${btnColor}`}>
                        Enroll Now
                      </Button>
                    </Link>
                    <Link href="/contact">
                      <Button variant="outline" className="h-12 w-full rounded-xl font-bold border-slate-200 text-slate-600 hover:bg-slate-50 hover:text-slate-900">
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

      {/* --- WHY CHOOSE US --- */}
      <section className="py-20 bg-slate-900 relative overflow-hidden">
         <div className="container mx-auto px-4 relative z-10 text-center">
            <h2 className="text-3xl font-bold text-white mb-12">Why Train With Us?</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: Users, title: "Small Batches", desc: "We limit class sizes to ensure every student gets personal attention from the coach." },
                { icon: Trophy, title: "Proven Success", desc: "Our structured curriculum has produced state champions and rated players consistently." },
                { icon: Zap, title: "Interactive Learning", desc: "We use modern tools, puzzles, and game analysis to make learning engaging." },
              ].map((item, i) => (
                <div key={i} className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-3xl border border-slate-700">
                  <item.icon className="w-10 h-10 text-blue-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-16">
              <h3 className="text-2xl font-bold text-white mb-6">Ready to make your move?</h3>
              <Link href="/contact">
                <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white font-bold h-14 px-10 rounded-full shadow-xl shadow-orange-900/30 text-lg">
                  Book a Free Trial Class <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
         </div>
      </section>

    </div>
  );
}
"use client";

import { Button } from "@/components/ui/button";
import { Clock, Users, Star, ArrowRight, Check, Crown, Shield, Zap, BookOpen } from "lucide-react";
import Link from "next/link";

export function CoursesSection() {
  const courses = [
    {
      level: "Beginner",
      icon: Shield,
      title: "Foundation",
      description: "Start your journey. Master the rules, piece movements, and basic checkmates.",
      duration: "4 Weeks",
      students: "50+ Active",
      rating: 4.9,
      price: "₹2,999",
      features: ["Rules & Movements", "Basic Opening Principles", "Fundamental Tactics", "Endgame Basics"],
      color: "blue",
      popular: false,
    },
    {
      level: "Intermediate",
      icon: Crown,
      title: "Tactical Mastery",
      description: "For players knowing the basics. Deep dive into strategy, combinations, and planning.",
      duration: "8 Weeks",
      students: "120+ Active",
      rating: 4.8,
      price: "₹4,999",
      features: ["Advanced Tactical Patterns", "Positional Understanding", "Opening Repertoire Building", "Tournament Preparation"],
      color: "orange",
      popular: true, // Highlights this card
    },
    {
      level: "Advanced",
      icon: Zap,
      title: "Grandmaster Path",
      description: "Elite training for rated players aiming for titles and competitive dominance.",
      duration: "12 Weeks",
      students: "15+ Active",
      rating: 5.0,
      price: "₹7,999",
      features: ["Grandmaster Analysis", "Complex Endgame Theory", "Psychological Preparation", "1-on-1 Performance Review"],
      color: "purple",
      popular: false,
    },
  ];

  // Helper to get dynamic theme styles
  const getThemeStyles = (color: string, popular: boolean) => {
    switch (color) {
      case "blue":
        return {
          border: "border-blue-500/30",
          iconBg: "bg-blue-500/10",
          iconColor: "text-blue-400",
          checkColor: "text-blue-400",
          badge: "bg-blue-500/10 text-blue-300 border-blue-500/20",
          btn: "bg-slate-800 hover:bg-slate-700 text-white border-slate-700",
          glow: ""
        };
      case "orange":
        return {
          border: popular ? "border-orange-500" : "border-orange-500/30",
          iconBg: "bg-orange-500/10",
          iconColor: "text-orange-400",
          checkColor: "text-orange-400",
          badge: "bg-orange-500 text-white shadow-lg shadow-orange-500/20",
          btn: "bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-500 hover:to-red-500 text-white shadow-lg shadow-orange-500/25",
          glow: popular ? "shadow-[0_0_40px_rgba(249,115,22,0.15)] scale-105 z-10" : ""
        };
      case "purple":
        return {
          border: "border-purple-500/30",
          iconBg: "bg-purple-500/10",
          iconColor: "text-purple-400",
          checkColor: "text-purple-400",
          badge: "bg-purple-500/10 text-purple-300 border-purple-500/20",
          btn: "bg-slate-800 hover:bg-slate-700 text-white border-slate-700",
          glow: ""
        };
      default: return {};
    }
  };

  return (
    <section id="courses" className="py-24 bg-[#0B0F19] relative overflow-hidden">
      
      {/* --- Background Ambience --- */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-indigo-900/10 rounded-full blur-[120px]" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        
        {/* --- Header --- */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 backdrop-blur-md text-indigo-300 text-xs font-bold uppercase tracking-widest shadow-lg">
            <BookOpen className="w-3.5 h-3.5 fill-indigo-400 text-indigo-400" />
            <span>Structured Curriculum</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Choose Your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">
              Path to Mastery
            </span>
          </h2>
          
          <p className="text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto">
            From first moves to tournament trophies, our curriculum is designed to elevate your game at every stage.
          </p>
        </div>

        {/* --- Courses Grid --- */}
        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {courses.map((course, index) => {
            const Icon = course.icon;
            const styles = getThemeStyles(course.color, course.popular);

            return (
              <div
                key={index}
                className={`relative bg-slate-900/60 backdrop-blur-md border rounded-3xl p-8 transition-all duration-500 flex flex-col h-full ${styles.border} ${styles.glow} group hover:-translate-y-2`}
              >
                {/* Popular Badge */}
                {course.popular && (
                  <div className={`absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest ${styles.badge}`}>
                    Most Popular
                  </div>
                )}

                {/* Card Header */}
                <div className="mb-8">
                  <div className={`w-14 h-14 ${styles.iconBg} rounded-2xl flex items-center justify-center mb-6 border border-white/5`}>
                    <Icon className={`w-7 h-7 ${styles.iconColor}`} />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">{course.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed min-h-[40px]">
                    {course.description}
                  </p>
                </div>

                {/* Meta Stats (Glass Strip) */}
                <div className="flex items-center justify-between py-4 border-t border-b border-slate-800 mb-8 bg-slate-950/30 rounded-lg px-2">
                  <div className="flex items-center text-xs font-semibold text-slate-400">
                    <Clock className="w-3.5 h-3.5 mr-1.5 text-slate-500" /> {course.duration}
                  </div>
                  <div className="flex items-center text-xs font-semibold text-slate-400">
                    <Users className="w-3.5 h-3.5 mr-1.5 text-slate-500" /> {course.students}
                  </div>
                  <div className="flex items-center text-xs font-semibold text-slate-400">
                    <Star className="w-3.5 h-3.5 mr-1.5 text-yellow-500 fill-yellow-500" /> {course.rating}
                  </div>
                </div>

                {/* Features List */}
                <div className="space-y-4 mb-8 flex-grow">
                  {course.features.map((feature, i) => (
                    <div key={i} className="flex items-start">
                      <div className={`mt-0.5 mr-3 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center ${styles.iconBg}`}>
                        <Check className={`w-3 h-3 ${styles.checkColor}`} />
                      </div>
                      <span className="text-sm text-slate-300 font-medium group-hover:text-white transition-colors">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Pricing & CTA */}
                <div className="mt-auto">
                  <div className="flex items-baseline mb-6">
                    <span className="text-4xl font-black text-white">{course.price}</span>
                    <span className="text-slate-500 text-sm ml-2 font-medium">/ course</span>
                  </div>
                  
                  <Link href="/contact" className="w-full">
                    <Button 
                      className={`w-full h-12 rounded-xl font-bold text-base transition-transform active:scale-95 border ${styles.btn}`}
                    >
                      Enroll Now <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </div>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
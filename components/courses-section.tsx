"use client";

import { Button } from "@/components/ui/button";
import { Clock, Users, Star, ArrowRight, Check, Crown, Shield, Zap, BookOpen, ChevronRight } from "lucide-react";
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
      popular: true, 
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

  const getThemeStyles = (color: string, popular: boolean) => {
    switch (color) {
      case "blue":
        return {
          btn: "bg-blue-600 hover:bg-blue-700 shadow-blue-100",
          iconBg: "bg-blue-50",
          iconColor: "text-blue-600",
          badge: "bg-slate-100 text-slate-600",
          border: "border-slate-100"
        };
      case "orange":
        return {
          btn: "bg-orange-500 hover:bg-orange-600 shadow-orange-100",
          iconBg: "bg-orange-50",
          iconColor: "text-orange-600",
          badge: "bg-emerald-600 text-white shadow-lg shadow-emerald-100",
          border: "border-emerald-200"
        };
      case "purple":
        return {
          btn: "bg-purple-600 hover:bg-purple-700 shadow-purple-100",
          iconBg: "bg-purple-50",
          iconColor: "text-purple-600",
          badge: "bg-slate-100 text-slate-600",
          border: "border-slate-100"
        };
      default: return {};
    }
  };

  return (
    <section id="courses" className="py-24 bg-white relative overflow-hidden">
      
      {/* --- Background Design --- */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:40px_40px] opacity-30" />
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-emerald-50 rounded-full blur-[120px] opacity-50" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* --- Header Section --- */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-[10px] font-black uppercase tracking-[0.2em]">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Academy Curriculum</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-black text-slate-900 tracking-tight leading-none">
            Choose Your <br />
            <span className="text-emerald-600">Path to Mastery</span>
          </h2>
          
          <p className="text-lg text-slate-500 font-medium leading-relaxed max-w-2xl mx-auto">
            From first moves to tournament trophies, our structured curriculum is 
            designed by FIDE masters to elevate your game.
          </p>
        </div>

        {/* --- Courses Grid --- */}
        <div className="grid lg:grid-cols-3 gap-10 items-stretch">
          {courses.map((course, index) => {
            const Icon = course.icon;
            const styles = getThemeStyles(course.color, course.popular) as any;

            return (
              <div
                key={index}
                className={`relative bg-white rounded-[2.5rem] border ${styles.border} p-10 transition-all duration-500 flex flex-col shadow-xl shadow-slate-100/50 group hover:-translate-y-3 hover:shadow-2xl hover:shadow-slate-200`}
              >
                {/* Popular Badge Rebranded as Academy Choice */}
                {course.popular && (
                  <div className={`absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest ${styles.badge}`}>
                    Academy Choice
                  </div>
                )}

                {/* Card Header */}
                <div className="mb-8">
                  <div className={`w-16 h-16 ${styles.iconBg} rounded-2xl flex items-center justify-center mb-6 transition-transform duration-500 group-hover:rotate-6`}>
                    <Icon className={`w-8 h-8 ${styles.iconColor}`} />
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-[10px] font-black uppercase tracking-widest text-emerald-600 bg-emerald-50 px-3 py-1 rounded-md">
                        {course.level}
                    </span>
                  </div>
                  <h3 className="text-3xl font-black text-slate-900 mb-4 tracking-tight group-hover:text-emerald-600 transition-colors">
                    {course.title}
                  </h3>
                  <p className="text-slate-500 font-medium text-sm leading-relaxed">
                    {course.description}
                  </p>
                </div>

                {/* Stats Mini Dashboard */}
                <div className="grid grid-cols-3 gap-2 py-5 border-t border-b border-slate-50 mb-8">
                  <div className="flex flex-col items-center">
                    <Clock className="w-4 h-4 text-slate-300 mb-1" />
                    <span className="text-[10px] font-bold text-slate-900">{course.duration}</span>
                  </div>
                  <div className="border-x border-slate-50 flex flex-col items-center">
                    <Users className="w-4 h-4 text-slate-300 mb-1" />
                    <span className="text-[10px] font-bold text-slate-900">{course.students}</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 mb-1" />
                    <span className="text-[10px] font-bold text-slate-900">{course.rating}</span>
                  </div>
                </div>

                {/* Features List */}
                <div className="space-y-4 mb-10 flex-grow">
                  {course.features.map((feature, i) => (
                    <div key={i} className="flex items-center">
                      <div className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center ${styles.iconBg} mr-3`}>
                        <Check className={`w-3 h-3 ${styles.iconColor}`} />
                      </div>
                      <span className="text-sm text-slate-600 font-bold tracking-tight">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Pricing & CTA */}
                <div className="mt-auto pt-6 border-t border-slate-50">
                  <div className="flex items-end justify-between mb-8">
                    <div>
                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Full Course</p>
                        <span className="text-4xl font-black text-slate-900">{course.price}</span>
                    </div>
                    <div className="text-right">
                        <span className="text-xs font-bold text-slate-400 uppercase">Lifetime Access</span>
                    </div>
                  </div>
                  
                  <Link href="/contact" className="w-full">
                    <Button 
                      className={`w-full h-14 rounded-2xl font-black text-xs uppercase tracking-[0.2em] text-white transition-all active:scale-95 flex items-center justify-center gap-2 group-hover:gap-4 shadow-xl ${styles.btn}`}
                    >
                      Enroll Now <ChevronRight className="w-4 h-4" />
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
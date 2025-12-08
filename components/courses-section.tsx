"use client";

import { Button } from "@/components/ui/button";
import { Clock, Users, Star, ArrowRight, Check, Crown, Shield, Zap } from "lucide-react";
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

  return (
    <section id="courses" className="py-24 bg-slate-50 relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-wider text-blue-600 uppercase bg-blue-100 rounded-full">
            Curriculum
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Choose Your <span className="text-blue-600">Path to Mastery</span>
          </h2>
          <p className="text-lg text-slate-600">
            From first moves to tournament trophies, our structured curriculum is designed to elevate your game at every stage.
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {courses.map((course, index) => {
            const Icon = course.icon;
            
            // Dynamic Styles based on 'popular' flag and color
            const cardClasses = course.popular 
              ? "border-orange-500 shadow-2xl scale-105 z-10 relative" 
              : "border-slate-200 shadow-lg hover:shadow-xl hover:-translate-y-1";
            
            const headerColor = course.color === 'orange' ? 'text-orange-600' : 
                                course.color === 'purple' ? 'text-purple-600' : 'text-blue-600';

            const bgIcon = course.color === 'orange' ? 'bg-orange-100' : 
                           course.color === 'purple' ? 'bg-purple-100' : 'bg-blue-100';

            return (
              <div
                key={index}
                className={`bg-white rounded-3xl border p-8 transition-all duration-300 flex flex-col h-full ${cardClasses}`}
              >
                {/* Popular Badge */}
                {course.popular && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-bold shadow-md uppercase tracking-wide">
                    Most Popular
                  </div>
                )}

                {/* Card Header */}
                <div className="mb-6">
                  <div className={`w-14 h-14 ${bgIcon} rounded-2xl flex items-center justify-center mb-6`}>
                    <Icon className={`w-7 h-7 ${headerColor}`} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{course.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed min-h-[40px]">
                    {course.description}
                  </p>
                </div>

                {/* Meta Stats */}
                <div className="flex items-center justify-between py-4 border-t border-b border-slate-100 mb-6">
                  <div className="flex items-center text-xs font-semibold text-slate-600">
                    <Clock className="w-4 h-4 mr-1 text-slate-400" /> {course.duration}
                  </div>
                  <div className="flex items-center text-xs font-semibold text-slate-600">
                    <Users className="w-4 h-4 mr-1 text-slate-400" /> {course.students}
                  </div>
                  <div className="flex items-center text-xs font-semibold text-slate-600">
                    <Star className="w-4 h-4 mr-1 text-yellow-400 fill-yellow-400" /> {course.rating}
                  </div>
                </div>

                {/* Features List */}
                <div className="space-y-4 mb-8 flex-grow">
                  {course.features.map((feature, i) => (
                    <div key={i} className="flex items-start">
                      <div className={`mt-0.5 mr-3 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center ${course.popular ? 'bg-orange-100 text-orange-600' : 'bg-green-100 text-green-600'}`}>
                        <Check className="w-3 h-3" />
                      </div>
                      <span className="text-sm text-slate-600 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Pricing & CTA */}
                <div className="mt-auto">
                  <div className="flex items-baseline mb-6">
                    <span className="text-4xl font-bold text-slate-900">{course.price}</span>
                    <span className="text-slate-400 text-sm ml-2 font-medium">/ course</span>
                  </div>
                  
                  <Link href="/contact" className="w-full">
                    <Button 
                      className={`w-full h-12 rounded-xl font-bold text-base transition-all ${
                        course.popular 
                        ? 'bg-orange-500 hover:bg-orange-600 text-white shadow-lg shadow-orange-500/20' 
                        : 'bg-slate-900 hover:bg-slate-800 text-white'
                      }`}
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
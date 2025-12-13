"use client";

import { Gamepad2, Monitor, Users, ArrowRight, Zap, CheckCircle2 } from "lucide-react";
import Image from "next/image";

export function FeaturesSection() {
  const features = [
    {
      icon: Gamepad2,
      title: "Interactive Game Area",
      description:
        "Practice with purpose. Challenge peers, analyze moves with Stockfish engine, and get real-time coach feedback in our dedicated arena.",
      image: "https://images.unsplash.com/photo-1529699211952-734e80c4d42b?auto=format&fit=crop&q=80&w=800", // Chess Board
      color: "blue", // Mapped to Indigo/Blue in dark theme
    },
    {
      icon: Monitor,
      title: "Live Digital Classrooms",
      description:
        "Experience seamless learning with interactive 1-on-1 and group sessions. Our 'Open Classroom' technology brings the academy to your home.",
      image: "https://images.unsplash.com/photo-1593642532400-2682810df593?auto=format&fit=crop&q=80&w=800", // Student/Laptop
      color: "orange", // Mapped to Amber/Orange
    },
    {
      icon: Users,
      title: "Academy Management",
      description:
        "A centralized dashboard for coaches and parents. Track ELO ratings, tournament history, and attendance with professional analytics.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800", // Analytics/Dashboard
      color: "purple", // Mapped to Purple/Violet
    },
  ];

  // Helper to map string colors to Tailwind classes dynamically
  const getColorClasses = (color: string) => {
    switch (color) {
      case "blue":
        return {
          bg: "bg-indigo-500",
          glow: "shadow-[0_0_30px_rgba(99,102,241,0.4)]",
          text: "text-indigo-400",
          border: "group-hover:border-indigo-500/50"
        };
      case "orange":
        return {
          bg: "bg-orange-500",
          glow: "shadow-[0_0_30px_rgba(249,115,22,0.4)]",
          text: "text-orange-400",
          border: "group-hover:border-orange-500/50"
        };
      case "purple":
        return {
          bg: "bg-purple-500",
          glow: "shadow-[0_0_30px_rgba(168,85,247,0.4)]",
          text: "text-purple-400",
          border: "group-hover:border-purple-500/50"
        };
      default:
        return {
          bg: "bg-slate-500",
          glow: "shadow-none",
          text: "text-slate-400",
          border: "group-hover:border-slate-500"
        };
    }
  };

  return (
    <section id="features" className="py-24 relative bg-[#0B0F19] overflow-hidden">
      
      {/* --- Background Ambience --- */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        {/* Glowing Orbs */}
        <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-emerald-600/10 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        
        {/* --- Header Section --- */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-slate-700 bg-slate-800/50 backdrop-blur-sm text-indigo-300 text-xs font-bold uppercase tracking-widest shadow-lg">
            <Zap className="w-3.5 h-3.5 fill-indigo-400" />
            <span>World-Class Platform</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Everything you need to <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-emerald-400">
              Master the Game
            </span>
          </h2>
          
          <p className="text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto">
            We combine traditional chess wisdom with modern technology. Explore the tools that give our students the competitive edge.
          </p>
        </div>

        {/* --- Features Grid --- */}
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-10">
          {features.map((feature, index) => {
            const styles = getColorClasses(feature.color);

            return (
              <div
                key={index}
                className={`group relative bg-slate-900/50 backdrop-blur-sm rounded-3xl border border-slate-800 ${styles.border} transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl overflow-hidden flex flex-col`}
              >
                {/* Image Section */}
                <div className="relative h-64 w-full overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent z-10"></div>
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                  />
                  
                  {/* Floating Neon Icon */}
                  <div className={`absolute -bottom-6 right-8 z-20 w-16 h-16 rounded-2xl flex items-center justify-center ${styles.bg} text-white transform rotate-6 group-hover:rotate-0 transition-all duration-300 ${styles.glow} border border-white/20`}>
                    <feature.icon className="w-8 h-8" />
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-8 pt-10 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-400 transition-colors">
                    {feature.title}
                  </h3>
                  
                  <p className="text-slate-400 leading-relaxed mb-8 flex-grow">
                    {feature.description}
                  </p>

                  {/* Action Link */}
                  <div className={`flex items-center text-sm font-bold ${styles.text} transition-colors cursor-pointer mt-auto uppercase tracking-wide`}>
                    <span>Learn more</span>
                    <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1.5 transition-transform" />
                  </div>
                </div>

                {/* Decorative Gradient Line at bottom */}
                <div className={`h-1 w-full ${styles.bg} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
"use client";

import { Gamepad2, Monitor, Users, ArrowRight, Zap } from "lucide-react";
import Image from "next/image";

export function FeaturesSection() {
  const features = [
    {
      icon: Gamepad2,
      title: "Interactive Game Area",
      description:
        "Practice with purpose. Challenge peers, analyze moves with Stockfish engine, and get real-time coach feedback in our dedicated arena.",
      image: "https://images.unsplash.com/photo-1529699211952-734e80c4d42b?auto=format&fit=crop&q=80&w=800", // Chess Board
      color: "blue",
    },
    {
      icon: Monitor,
      title: "Live Digital Classrooms",
      description:
        "Experience seamless learning with interactive 1-on-1 and group sessions. Our 'Open Classroom' technology brings the academy to your home.",
      image: "https://images.unsplash.com/photo-1593642532400-2682810df593?auto=format&fit=crop&q=80&w=800", // Student/Laptop
      color: "orange",
    },
    {
      icon: Users,
      title: "Academy Management",
      description:
        "A centralized dashboard for coaches and parents. Track ELO ratings, tournament history, and attendance with professional analytics.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800", // Analytics/Dashboard
      color: "purple",
    },
  ];

  return (
    <section id="features" className="py-24 relative bg-white overflow-hidden">
      
      {/* Background Decor (Dot Pattern) */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-50 pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 text-orange-600 text-xs font-bold uppercase tracking-wider mb-4 border border-orange-100">
            <Zap className="w-3 h-3" />
            <span>World-Class Platform</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Everything you need to <span className="text-blue-600">Master the Game</span>
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            We combine traditional chess wisdom with modern technology. Explore the tools that give our students the competitive edge.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-300 flex flex-col overflow-hidden hover:-translate-y-1"
            >
              {/* Image Area */}
              <div className="relative h-56 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent z-10"></div>
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Floating Icon Badge */}
                <div className={`absolute -bottom-6 right-8 z-20 w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg transform rotate-3 group-hover:rotate-0 transition-all duration-300 ${
                  feature.color === 'blue' ? 'bg-blue-600' : 
                  feature.color === 'orange' ? 'bg-orange-500' : 'bg-purple-600'
                }`}>
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
              </div>

              {/* Content Area */}
              <div className="p-8 pt-10 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-slate-500 leading-relaxed mb-6 flex-grow">
                  {feature.description}
                </p>

                {/* Bottom Action */}
                <div className="flex items-center text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors cursor-pointer">
                  <span>Learn more</span>
                  <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>

              {/* Decorative Top Border */}
              <div className={`absolute top-0 left-0 w-full h-1 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ${
                  feature.color === 'blue' ? 'bg-blue-600' : 
                  feature.color === 'orange' ? 'bg-orange-500' : 'bg-purple-600'
              }`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
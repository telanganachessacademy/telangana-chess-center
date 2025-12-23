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
      image: "https://images.unsplash.com/photo-1529699211952-734e80c4d42b?auto=format&fit=crop&q=80&w=800",
      color: "blue",
    },
    {
      icon: Monitor,
      title: "Live Digital Classrooms",
      description:
        "Experience seamless learning with interactive 1-on-1 and group sessions. Our 'Open Classroom' technology brings the academy to your home.",
      image: "https://images.unsplash.com/photo-1593642532400-2682810df593?auto=format&fit=crop&q=80&w=800",
      color: "orange",
    },
    {
      icon: Users,
      title: "Academy Management",
      description:
        "A centralized dashboard for coaches and parents. Track ELO ratings, tournament history, and attendance with professional analytics.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
      color: "purple",
    },
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case "blue":
        return {
          bg: "bg-blue-600",
          lightBg: "bg-blue-50",
          text: "text-blue-600",
          shadow: "shadow-blue-100",
          border: "group-hover:border-blue-200"
        };
      case "orange":
        return {
          bg: "bg-orange-500",
          lightBg: "bg-orange-50",
          text: "text-orange-600",
          shadow: "shadow-orange-100",
          border: "group-hover:border-orange-200"
        };
      case "purple":
        return {
          bg: "bg-purple-600",
          lightBg: "bg-purple-50",
          text: "text-purple-600",
          shadow: "shadow-purple-100",
          border: "group-hover:border-purple-200"
        };
      default:
        return {
          bg: "bg-emerald-600",
          lightBg: "bg-emerald-50",
          text: "text-emerald-600",
          shadow: "shadow-emerald-100",
          border: "group-hover:border-emerald-200"
        };
    }
  };

  return (
    <section id="features" className="py-24 relative bg-white overflow-hidden">
      
      {/* --- Elegant Light Background --- */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:32px_32px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-40" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-50/50 rounded-full blur-[120px] -mr-48 -mt-48" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* --- Header Section --- */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-[10px] font-black uppercase tracking-[0.2em] mb-6">
            <Zap className="w-3.5 h-3.5 fill-emerald-500 text-emerald-500" />
            <span>Premium Learning Experience</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-black text-slate-900 tracking-tight mb-6">
            Elite Tools for <br/>
            <span className="text-emerald-600">Chess Mastery</span>
          </h2>
          
          <p className="text-lg text-slate-500 font-medium leading-relaxed">
            At Telangana Chess Academy, we blend time-honored strategies with 
            cutting-edge digital tools to build the grandmasters of tomorrow.
          </p>
        </div>

        {/* --- Features Grid --- */}
        <div className="grid lg:grid-cols-3 gap-10">
          {features.map((feature, index) => {
            const styles = getColorClasses(feature.color);

            return (
              <div
                key={index}
                className={`group relative bg-white rounded-[2.5rem] border border-slate-100 shadow-xl shadow-slate-200/50 ${styles.border} transition-all duration-500 hover:-translate-y-3 overflow-hidden flex flex-col`}
              >
                {/* Image Wrap */}
                <div className="relative h-72 w-full overflow-hidden">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  {/* Glassy Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent" />
                  
                  {/* Floating Action Icon */}
                  <div className={`absolute bottom-6 right-8 z-20 w-16 h-16 rounded-2xl flex items-center justify-center ${styles.bg} text-white shadow-2xl ${styles.shadow} transition-transform duration-500 group-hover:rotate-[360deg]`}>
                    <feature.icon className="w-8 h-8" />
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-10 flex flex-col flex-grow">
                  <h3 className="text-2xl font-black text-slate-900 mb-4 tracking-tight">
                    {feature.title}
                  </h3>
                  
                  <p className="text-slate-500 font-medium leading-relaxed mb-8 flex-grow">
                    {feature.description}
                  </p>

                  {/* Colored Action Button */}
                  <div className={`inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest ${styles.text} group-hover:gap-4 transition-all`}>
                    <span className={`h-[2px] w-8 ${styles.bg} transition-all group-hover:w-12`} />
                    Learn Strategy
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* --- Trust Bar --- */}
        <div className="mt-24 pt-12 border-t border-slate-100 flex flex-wrap justify-center gap-12 grayscale opacity-40">
           <div className="flex items-center gap-2 font-bold text-slate-900"><CheckCircle2 className="w-5 h-5" /> FIDE Standards</div>
           <div className="flex items-center gap-2 font-bold text-slate-900"><CheckCircle2 className="w-5 h-5" /> Stockfish 16 Analysis</div>
           <div className="flex items-center gap-2 font-bold text-slate-900"><CheckCircle2 className="w-5 h-5" /> Real-time Coaching</div>
        </div>
      </div>
    </section>
  );
}
"use client";

import { Card } from "@/components/ui/card";
import { CheckCircle, Target, Users, Award, ExternalLink, Globe, Lock, ChevronRight, GraduationCap } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function AboutSection() {
  const features = [
    {
      icon: Target,
      title: "Elite Instruction",
      description: "Train directly under FIDE-rated coaches who bring decades of competitive experience.",
      color: "blue"
    },
    {
      icon: Users,
      title: "Safe Environment",
      description: "A secure, encouraging space where students can focus entirely on mental growth.",
      color: "orange"
    },
    {
      icon: Award,
      title: "Champion's Path",
      description: "Structured roadmap from local district tournaments to international FIDE ratings.",
      color: "purple"
    },
    {
      icon: CheckCircle,
      title: "Proven Methodology",
      description: "Curriculum refined over years, blending classic theory with modern engine analysis.",
      color: "green"
    },
  ];

  const institutes = [
    { name: "Bharat Chess Academy", url: "https://www.bharatchessacademy.com" },
    { name: "Hyderabad Chess Institute", url: "https://www.hyderabadchessinstitute.com" },
  ];

  // Helper for dynamic card styling
  const getFeatureStyles = (color: string) => {
    switch (color) {
      case "blue": return { text: "text-blue-400", bg: "bg-blue-500/10", border: "border-blue-500/30" };
      case "orange": return { text: "text-orange-400", bg: "bg-orange-500/10", border: "border-orange-500/30" };
      case "purple": return { text: "text-purple-400", bg: "bg-purple-500/10", border: "border-purple-500/30" };
      case "green": return { text: "text-emerald-400", bg: "bg-emerald-500/10", border: "border-emerald-500/30" };
      default: return {};
    }
  };

  return (
    <section id="about" className="py-24 bg-[#0B0F19] overflow-hidden relative">
      
      {/* --- Background Ambience --- */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-indigo-600/10 rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[100px] -translate-x-1/3 translate-y-1/3" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        
        {/* --- PART 1: VISION & INSTITUTES --- */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          
          {/* Left: Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 backdrop-blur-md text-blue-300 text-xs font-bold uppercase tracking-widest shadow-lg">
              <Globe className="w-3.5 h-3.5 fill-blue-400 text-blue-400" />
              <span>Global Standards</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
              Reimagining <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">
                Chess Education
              </span>
            </h2>
            
            <p className="text-lg text-slate-400 leading-relaxed border-l-2 border-slate-700 pl-6">
              Founded with the desire to transform traditional learning. We don't just teach moves; we build the strong mental foundation required for future success in life and on the board.
            </p>

            {/* Network Links */}
            <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6 backdrop-blur-sm">
              <div className="flex items-center gap-2 mb-4">
                 <GraduationCap className="w-4 h-4 text-indigo-400" />
                 <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Our Institutions</h4>
              </div>
              <div className="space-y-3">
                {institutes.map((inst, idx) => (
                  <Link 
                    key={idx} 
                    href={inst.url}
                    target="_blank" 
                    className="flex items-center justify-between group p-4 bg-slate-950/50 rounded-xl border border-slate-800 hover:border-indigo-500 hover:bg-slate-900 transition-all duration-300"
                  >
                    <span className="font-semibold text-slate-300 group-hover:text-white transition-colors">{inst.name}</span>
                    <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-indigo-400 transition-colors" />
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Image Composition */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-[2rem] blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500 -z-10"></div>
            
            {/* Main Image */}
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border border-slate-700 bg-slate-900 z-10 aspect-[4/3]">
              <Image
                src="https://images.unsplash.com/photo-1580541832626-2a7131ee809f?auto=format&fit=crop&q=80&w=800"
                alt="Instructor teaching student"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-transparent to-transparent opacity-90"></div>
              
              <div className="absolute bottom-8 left-8 right-8">
                 <div className="bg-white/10 backdrop-blur-md border border-white/10 p-4 rounded-xl">
                    <p className="font-bold text-xl text-white mb-1">FIDE Certified Training</p>
                    <p className="text-sm text-blue-200">Where masters are made.</p>
                 </div>
              </div>
            </div>
          </div>
        </div>


        {/* --- PART 2: STUDENT PORTAL ACCESS (The "Process") --- */}
        <div className="mb-24">
          <div className="bg-slate-900/60 backdrop-blur-md border border-slate-800 rounded-[2.5rem] overflow-hidden shadow-2xl relative">
            
            {/* Abstract glow */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-600/10 rounded-full blur-[100px] pointer-events-none translate-x-1/2 -translate-y-1/2"></div>

            <div className="grid lg:grid-cols-2">
              
              {/* Login Instructions */}
              <div className="p-10 md:p-16 relative z-10">
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-3 bg-emerald-500/20 border border-emerald-500/30 rounded-xl">
                    <Lock className="w-6 h-6 text-emerald-400" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white">Student Portal Access</h3>
                </div>
                
                <p className="text-slate-400 mb-10 text-lg">
                  Existing students can access live classes and resources instantly. Follow these steps to log in to our secure coaching platform.
                </p>

                <div className="space-y-6">
                  {[
                    "Visit bharatchessacademy.com",
                    "Click 'Online Coaching' button",
                    "Enter your credentials below"
                  ].map((step, i) => (
                    <div key={i} className="flex items-center gap-5 group">
                      <div className="w-10 h-10 rounded-full bg-slate-800 border border-slate-700 group-hover:border-emerald-500/50 group-hover:bg-emerald-500/10 flex items-center justify-center text-slate-400 group-hover:text-emerald-400 font-bold text-sm transition-all duration-300 shadow-inner">
                        {i + 1}
                      </div>
                      <span className="text-slate-300 font-medium group-hover:text-white transition-colors">{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* The "Credential Card" Visual (Terminal Style) */}
              <div className="bg-slate-950/80 border-l border-slate-800 p-10 md:p-16 flex flex-col justify-center relative">
                {/* Grid Pattern in background of terminal area */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

                <div className="bg-[#0f1420] rounded-2xl border border-slate-700/50 p-8 shadow-2xl relative z-10 backdrop-blur-sm">
                  {/* Fake Browser Header */}
                  <div className="flex items-center justify-between mb-6 border-b border-slate-800 pb-4">
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest flex items-center gap-2">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                        Demo Credentials
                    </span>
                    <div className="flex gap-2">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-500/50"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-green-500/50"></div>
                    </div>
                  </div>
                  
                  <div className="space-y-5 font-mono text-sm">
                    <div>
                      <span className="text-slate-500 block mb-2 text-xs uppercase tracking-wide">Username</span>
                      <div className="bg-slate-900/50 rounded-lg p-3 text-emerald-400 border border-slate-800 flex justify-between items-center group cursor-text hover:border-slate-700 transition-colors">
                        <span className="typing-effect">tca</span>
                        <CheckCircle className="w-4 h-4 text-emerald-500/50" />
                      </div>
                    </div>
                    <div>
                      <span className="text-slate-500 block mb-2 text-xs uppercase tracking-wide">Password</span>
                      <div className="bg-slate-900/50 rounded-lg p-3 text-emerald-400 border border-slate-800 flex justify-between items-center group cursor-text hover:border-slate-700 transition-colors">
                        <span className="blur-[2px] group-hover:blur-0 transition-all duration-300">0123</span>
                        <CheckCircle className="w-4 h-4 text-emerald-500/50" />
                      </div>
                    </div>
                  </div>

                  <Link href="https://coaching.telanganachessacademy.com/" target="_blank">
                    <button className="w-full mt-8 bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3.5 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-emerald-900/20 hover:shadow-emerald-900/40 hover:-translate-y-0.5">
                      Login to Portal <ChevronRight className="w-4 h-4" />
                    </button>
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </div>


        {/* --- PART 3: FEATURES GRID --- */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Why Choose Us?</h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">We combine passion with professionalism to create the ultimate chess ecosystem.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const styles = getFeatureStyles(feature.color);

            return (
              <div
                key={index}
                className={`bg-slate-900/40 backdrop-blur-sm border border-slate-800 p-8 rounded-2xl hover:bg-slate-900 hover:border-slate-700 transition-all duration-300 hover:-translate-y-2 group`}
              >
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${styles.bg} ${styles.border} border`}>
                  <Icon className={`w-7 h-7 ${styles.text}`} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-400 transition-colors">
                    {feature.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
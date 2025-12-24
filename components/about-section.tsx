"use client";

import { Card } from "@/components/ui/card";
import { CheckCircle, Target, Users, Award, ExternalLink, Globe, Lock, ChevronRight, GraduationCap, ArrowRight } from "lucide-react";
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

  const getFeatureStyles = (color: string) => {
    switch (color) {
      case "blue": return { text: "text-blue-600", bg: "bg-blue-50", border: "border-blue-100" };
      case "orange": return { text: "text-orange-600", bg: "bg-orange-50", border: "border-orange-100" };
      case "purple": return { text: "text-purple-600", bg: "bg-purple-50", border: "border-purple-100" };
      case "green": return { text: "text-emerald-600", bg: "bg-emerald-50", border: "border-emerald-100" };
      default: return {};
    }
  };

  return (
    <section id="about" className="py-24 bg-white overflow-hidden relative">
      
      {/* --- Background Design --- */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-50 rounded-full blur-[120px] opacity-60" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:40px_40px] opacity-40" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* --- PART 1: VISION & INSTITUTES --- */}
        <div className="grid lg:grid-cols-2 gap-20 items-center mb-32">
          
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-[10px] font-black uppercase tracking-[0.2em]">
              <Globe className="w-3.5 h-3.5" />
              <span>Global Excellence</span>
            </div>
            
            <h2 className="text-5xl md:text-6xl font-black text-slate-900 leading-tight tracking-tight">
              Reimagining <br/>
              <span className="text-emerald-600">Chess Education</span>
            </h2>
            
            <p className="text-lg text-slate-500 font-medium leading-relaxed border-l-4 border-emerald-100 pl-6">
              Founded to transform traditional learning, Telangana Chess Academy doesn't just teach moves; we build the mental grit required for championship success.
            </p>

            {/* Network Links - Dashbaord Style */}
            <div className="bg-[#FBFDFF] border border-slate-100 rounded-[2rem] p-8 shadow-xl shadow-slate-200/50">
              <div className="flex items-center gap-3 mb-6">
                 <div className="w-8 h-8 rounded-lg bg-emerald-600 flex items-center justify-center">
                    <GraduationCap className="w-4 h-4 text-white" />
                 </div>
                 <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest">Our Global Network</h4>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {institutes.map((inst, idx) => (
                  <Link 
                    key={idx} 
                    href={inst.url}
                    target="_blank" 
                    className="flex items-center justify-between p-4 bg-white rounded-xl border border-slate-100 hover:border-emerald-500 hover:shadow-lg hover:shadow-emerald-50 transition-all group"
                  >
                    <span className="font-bold text-slate-700 group-hover:text-emerald-700 transition-colors text-sm">{inst.name}</span>
                    <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-emerald-500 transition-all group-hover:translate-x-1" />
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Modern Frame Composition */}
          <div className="relative">
            <div className="absolute -inset-4 bg-emerald-100/50 rounded-[3rem] blur-2xl -z-10" />
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-[12px] border-white aspect-[4/3] group">
              <Image
                src="https://images.unsplash.com/photo-1580541832626-2a7131ee809f?auto=format&fit=crop&q=80&w=800"
                alt="Elite Coaching"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/40 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                 <div className="bg-white/90 backdrop-blur-md p-5 rounded-2xl shadow-xl border border-white">
                    <p className="font-black text-lg text-slate-900">FIDE Certified Training</p>
                    <p className="text-xs font-bold text-emerald-600 uppercase tracking-widest">Global Master Standards</p>
                 </div>
              </div>
            </div>
          </div>
        </div>


        {/* --- PART 2: STUDENT PORTAL (The "Tech" Feature) --- */}
        <div className="mb-32">
          <div className="bg-slate-900 rounded-[3rem] overflow-hidden shadow-2xl relative">
            <div className="grid lg:grid-cols-2">
              
              {/* Instructions Side */}
              <div className="p-12 md:p-20 relative z-10">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 bg-emerald-500 rounded-2xl flex items-center justify-center shadow-lg shadow-emerald-500/20">
                    <Lock className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-3xl font-black text-white tracking-tight">Student Portal</h3>
                </div>
                
                <p className="text-slate-400 mb-12 text-lg font-medium">
                  Access live classes and world-class resources. Your digital academy is just one click away.
                </p>

                <div className="space-y-6">
                  {[
                    "Visit telanganachessacademy.com",
                    "Select your specific course portal",
                    "Login with your secure credentials"
                  ].map((step, i) => (
                    <div key={i} className="flex items-center gap-6 group">
                      <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-emerald-400 font-black text-xs transition-all group-hover:bg-emerald-500 group-hover:text-white">
                        0{i + 1}
                      </div>
                      <span className="text-slate-300 font-bold group-hover:text-white transition-colors">{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Terminal Style - Modernized */}
              <div className="bg-[#0A0F1C] border-l border-white/5 p-12 md:p-20 flex flex-col justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-20" />
                
                <div className="bg-white rounded-3xl p-8 shadow-2xl relative z-10 border border-slate-200">
                  <div className="flex items-center justify-between mb-8 border-b border-slate-50 pb-5">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-slate-200" />
                      <div className="w-3 h-3 rounded-full bg-slate-200" />
                      <div className="w-3 h-3 rounded-full bg-slate-200" />
                    </div>
                    <span className="text-[10px] font-black text-emerald-600 uppercase tracking-widest flex items-center gap-2">
                        <span className="w-2 h-2 bg-emerald-500 rounded-full animate-ping" />
                        Live System
                    </span>
                  </div>
                  
                  <div className="space-y-6">
                    <div>
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-2">Username</label>
                      <div className="bg-slate-50 rounded-xl p-4 text-slate-900 border border-slate-100 font-bold text-sm flex justify-between">
                        tca <CheckCircle className="w-4 h-4 text-emerald-500" />
                      </div>
                    </div>
                    <div>
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-2">Password</label>
                      <div className="bg-slate-50 rounded-xl p-4 text-slate-900 border border-slate-100 font-bold text-sm flex justify-between group cursor-pointer">
                        <span className="blur-[3px] group-hover:blur-0 transition-all">0123</span>
                        <CheckCircle className="w-4 h-4 text-emerald-500" />
                      </div>
                    </div>
                  </div>

                  <Link href="https://coaching.telanganachessacademy.com/" target="_blank">
                    <button className="w-full mt-10 bg-emerald-600 hover:bg-emerald-700 text-white font-black uppercase tracking-[0.2em] text-xs py-5 rounded-2xl transition-all shadow-xl shadow-emerald-100 flex items-center justify-center gap-3">
                      Access Portal <ChevronRight className="w-4 h-4" />
                    </button>
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </div>


        {/* --- PART 3: REFINED FEATURES GRID --- */}
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-4xl font-black text-slate-900 tracking-tight">Why the Academy?</h2>
          <p className="text-slate-500 font-medium max-w-2xl mx-auto text-lg">Blending championship tradition with modern technology.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const styles = getFeatureStyles(feature.color) as any;

            return (
              <div
                key={index}
                className="bg-white border border-slate-100 p-10 rounded-[2rem] shadow-xl shadow-slate-100/50 hover:shadow-2xl hover:shadow-slate-200 transition-all duration-500 hover:-translate-y-3 group"
              >
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 ${styles.bg} ${styles.border} border transition-transform duration-500 group-hover:rotate-6`}>
                  <Icon className={`w-8 h-8 ${styles.text}`} />
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-4 tracking-tight">
                    {feature.title}
                </h3>
                <p className="text-slate-500 font-medium text-sm leading-relaxed">
                    {feature.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

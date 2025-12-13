"use client";

import { Button } from "@/components/ui/button";
import { 
  BookOpen, 
  Clock, 
  Sparkles, 
  Users, 
  ArrowRight, 
  PhoneCall, 
  CheckCircle2,
  CalendarCheck
} from "lucide-react";
import Link from "next/link";

export function DemoBookingCTA() {
  const benefits = [
    {
      icon: BookOpen,
      title: "Skill Assessment",
      description: "Comprehensive evaluation of your current rating and intuition.",
      color: "text-blue-400",
      bg: "bg-blue-500/10",
      border: "group-hover:border-blue-500/50"
    },
    {
      icon: Users,
      title: "Coach Matching",
      description: "Get paired with an instructor who fits your personality.",
      color: "text-purple-400",
      bg: "bg-purple-500/10",
      border: "group-hover:border-purple-500/50"
    },
    {
      icon: Clock,
      title: "Flexible Timing",
      description: "Schedule your free session evenings or weekends.",
      color: "text-emerald-400",
      bg: "bg-emerald-500/10",
      border: "group-hover:border-emerald-500/50"
    },
    {
      icon: Sparkles,
      title: "Custom Roadmap",
      description: "Receive a tailored plan to reach your chess goals.",
      color: "text-orange-400",
      bg: "bg-orange-500/10",
      border: "group-hover:border-orange-500/50"
    },
  ];

  const steps = [
    { num: "01", title: "Book Slot", desc: "Select a time that works for you." },
    { num: "02", title: "Meet Coach", desc: "Join the 1-on-1 video session." },
    { num: "03", title: "Get Plan", desc: "Receive your personalized roadmap." },
  ];

  return (
    <section className="py-24 bg-[#0B0F19] relative overflow-hidden">
      
      {/* --- Background Ambience --- */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-600/5 rounded-full blur-[120px]" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* --- MAIN CTA BANNER --- */}
        <div className="relative rounded-[2.5rem] p-8 md:p-16 overflow-hidden border border-slate-800 bg-slate-900/40 backdrop-blur-sm shadow-2xl">
          
          {/* Decorative Glows inside Card */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none translate-x-1/3 -translate-y-1/3"></div>
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-orange-600/10 rounded-full blur-[100px] pointer-events-none -translate-x-1/3 translate-y-1/3"></div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">
            
            {/* Left: Text Content */}
            <div className="text-left space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-orange-500/30 bg-orange-500/10 backdrop-blur-md text-orange-400 text-xs font-bold uppercase tracking-widest shadow-lg">
                <Sparkles className="w-3.5 h-3.5 fill-orange-400" />
                <span>First Move is On Us</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
                Experience the <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-pink-500 to-purple-500">
                  Bharat Chess Method
                </span>
              </h2>
              
              <p className="text-lg text-slate-400 max-w-lg leading-relaxed">
                Not sure where to start? Book a complimentary 30-minute session with a FIDE-rated coach. No commitment required.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Link href="/contact" className="w-full sm:w-auto">
                  <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-500 hover:to-red-500 text-white font-bold h-14 px-8 rounded-xl text-lg shadow-[0_0_20px_rgba(234,88,12,0.3)] transition-all hover:scale-105 border border-white/10">
                    Book Free Demo <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <a href="tel:+919864646481" className="w-full sm:w-auto">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto border-slate-700 bg-slate-800/50 text-slate-300 hover:bg-slate-800 hover:text-white hover:border-slate-500 h-14 px-8 rounded-xl text-lg backdrop-blur-sm transition-all">
                    <PhoneCall className="w-5 h-5 mr-2" /> +91 9864646481
                  </Button>
                </a>
              </div>
            </div>

            {/* Right: Benefits Grid (Glass Cards) */}
            <div className="grid sm:grid-cols-2 gap-4">
              {benefits.map((item, idx) => (
                <div 
                  key={idx} 
                  className={`bg-slate-950/40 border border-slate-800/60 ${item.border} backdrop-blur-md p-6 rounded-2xl hover:bg-slate-900/60 transition-all duration-300 group hover:-translate-y-1 hover:shadow-xl`}
                >
                  <div className={`w-12 h-12 rounded-xl ${item.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 border border-white/5`}>
                    <item.icon className={`w-6 h-6 ${item.color}`} />
                  </div>
                  <h3 className="text-white font-bold mb-2 text-lg">{item.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* --- PROCESS STEPS --- */}
        <div className="mt-24 relative">
          <div className="text-center mb-16 space-y-2">
            <h3 className="text-3xl font-bold text-white">How It Works</h3>
            <p className="text-slate-400 text-lg">Your journey to mastery in 3 simple steps</p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 relative max-w-5xl mx-auto">
            
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-10 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-slate-800 via-indigo-900 to-slate-800 -z-10"></div>

            {steps.map((step, index) => (
              <div key={index} className="relative flex flex-col items-center text-center group">
                
                {/* Number Bubble */}
                <div className="w-20 h-20 rounded-2xl bg-slate-900 border border-slate-700 shadow-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:border-indigo-500/50 group-hover:shadow-[0_0_20px_rgba(99,102,241,0.3)] transition-all duration-300 relative">
                  <span className="text-2xl font-black text-slate-700 group-hover:text-indigo-400 transition-colors">
                    {step.num}
                  </span>
                  {/* Small icon indicator */}
                  <div className="absolute -bottom-3 bg-slate-800 border border-slate-700 rounded-full p-1.5 text-slate-400 group-hover:text-white group-hover:bg-indigo-600 group-hover:border-indigo-500 transition-colors">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                </div>
                
                {/* Content */}
                <h4 className="text-xl font-bold text-white mb-3 group-hover:text-indigo-300 transition-colors">{step.title}</h4>
                <p className="text-slate-500 text-sm max-w-[200px] leading-relaxed group-hover:text-slate-400 transition-colors">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
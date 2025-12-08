"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  BookOpen, 
  Clock, 
  Sparkles, 
  Users, 
  ArrowRight, 
  PhoneCall, 
  CheckCircle2 
} from "lucide-react";
import Link from "next/link";

export function DemoBookingCTA() {
  const benefits = [
    {
      icon: BookOpen,
      title: "Skill Assessment",
      description: "Comprehensive evaluation of your current rating and intuition.",
    },
    {
      icon: Users,
      title: "Coach Matching",
      description: "Get paired with an instructor who fits your personality.",
    },
    {
      icon: Clock,
      title: "Flexible Timing",
      description: "Schedule your free session evenings or weekends.",
    },
    {
      icon: Sparkles,
      title: "Custom Roadmap",
      description: "Receive a tailored plan to reach your chess goals.",
    },
  ];

  const steps = [
    { num: "01", title: "Book Slot", desc: "Select a time that works for you." },
    { num: "02", title: "Meet Coach", desc: "Join the 1-on-1 video session." },
    { num: "03", title: "Get Plan", desc: "Receive your personalized roadmap." },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-50 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* --- MAIN CTA BANNER --- */}
        <div className="bg-[#020617] rounded-[2.5rem] p-8 md:p-16 relative overflow-hidden shadow-2xl">
          
          {/* Decorative Gradients */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-600/20 rounded-full blur-[100px] pointer-events-none translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-orange-600/10 rounded-full blur-[80px] pointer-events-none -translate-x-1/3 translate-y-1/3"></div>

          <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
            
            {/* Left: Text Content */}
            <div className="text-left space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/50 border border-blue-800 text-blue-300 text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3 h-3 text-orange-400" />
                <span>First Move is On Us</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                Experience the <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-200">
                  Bharat Chess Method
                </span>
              </h2>
              
              <p className="text-lg text-slate-400 max-w-lg leading-relaxed">
                Not sure where to start? Book a complimentary 30-minute session with a FIDE-rated coach. No commitment required.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link href="/contact" className="w-full sm:w-auto">
                  <Button size="lg" className="w-full sm:w-auto bg-orange-600 hover:bg-orange-700 text-white font-bold h-14 px-8 rounded-xl text-lg shadow-lg shadow-orange-900/20">
                    Book Free Demo <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <a href="tel:+919864646481" className="w-full sm:w-auto">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto border-slate-700 bg-slate-800/50 text-slate-300 hover:bg-slate-800 hover:text-white h-14 px-8 rounded-xl text-lg backdrop-blur-sm">
                    <PhoneCall className="w-5 h-5 mr-2" /> +91 9864646481
                  </Button>
                </a>
              </div>
            </div>

            {/* Right: Benefits Grid (Floating) */}
            <div className="grid sm:grid-cols-2 gap-4">
              {benefits.map((item, idx) => (
                <div key={idx} className="bg-slate-800/50 border border-slate-700/50 backdrop-blur-md p-5 rounded-2xl hover:bg-slate-800 transition-all duration-300 group">
                  <div className="w-10 h-10 rounded-lg bg-blue-600/10 flex items-center justify-center mb-3 group-hover:bg-blue-600 transition-colors">
                    <item.icon className="w-5 h-5 text-blue-400 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-white font-bold mb-1">{item.title}</h3>
                  <p className="text-slate-400 text-xs leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>

          </div>
        </div>


        {/* --- PROCESS STEPS --- */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-slate-900">How It Works</h3>
            <p className="text-slate-500">Your journey to mastery in 3 simple steps</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-slate-100 -z-10"></div>

            {steps.map((step, index) => (
              <div key={index} className="relative flex flex-col items-center text-center group">
                
                {/* Number Bubble */}
                <div className="w-24 h-24 rounded-full bg-white border-4 border-slate-50 shadow-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl font-black text-slate-200 group-hover:text-blue-600 transition-colors">
                    {step.num}
                  </span>
                </div>
                
                {/* Content */}
                <h4 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h4>
                <p className="text-slate-500 text-sm max-w-[200px]">{step.desc}</p>
                
                {/* Active Dot */}
                <div className="mt-4 w-2 h-2 rounded-full bg-slate-200 group-hover:bg-orange-500 transition-colors"></div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
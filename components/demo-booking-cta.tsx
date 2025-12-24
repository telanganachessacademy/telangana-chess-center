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
  CalendarCheck,
  ChevronRight
} from "lucide-react";
import Link from "next/link";

export function DemoBookingCTA() {
  const benefits = [
    {
      icon: BookOpen,
      title: "Skill Assessment",
      description: "Comprehensive evaluation of your current rating and intuition.",
      color: "text-blue-600",
      bg: "bg-blue-50",
      border: "group-hover:border-blue-200"
    },
    {
      icon: Users,
      title: "Coach Matching",
      description: "Get paired with an instructor who fits your personality.",
      color: "text-purple-600",
      bg: "bg-purple-50",
      border: "group-hover:border-purple-200"
    },
    {
      icon: Clock,
      title: "Flexible Timing",
      description: "Schedule your free session evenings or weekends.",
      color: "text-emerald-600",
      bg: "bg-emerald-50",
      border: "group-hover:border-emerald-200"
    },
    {
      icon: Sparkles,
      title: "Custom Roadmap",
      description: "Receive a tailored plan to reach your chess goals.",
      color: "text-orange-600",
      bg: "bg-orange-50",
      border: "group-hover:border-orange-200"
    },
  ];

  const steps = [
    { num: "01", title: "Book Slot", desc: "Select a time that works for you." },
    { num: "02", title: "Meet Coach", desc: "Join the 1-on-1 video session." },
    { num: "03", title: "Get Plan", desc: "Receive your personalized roadmap." },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      
      {/* --- Elegant Background Decor --- */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-emerald-50 rounded-full blur-[120px] opacity-60" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:40px_40px] opacity-40" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* --- MAIN CTA BANNER --- */}
        <div className="relative rounded-[3rem] p-10 md:p-20 overflow-hidden border border-slate-100 bg-[#FBFDFF] shadow-2xl shadow-emerald-100/50">
          
          {/* Subtle Internal Glows */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-100/40 rounded-full blur-3xl -mr-20 -mt-20" />

          <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
            
            {/* Left Content: Rebranded to Telangana Chess Academy */}
            <div className="text-left space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50 border border-orange-100 text-orange-700 text-[10px] font-black uppercase tracking-[0.2em]">
                <Sparkles className="w-3.5 h-3.5 fill-orange-500" />
                <span>Your First Move is Free</span>
              </div>
              
              <h2 className="text-5xl md:text-5xl font-black text-slate-900 leading-[1.1] tracking-tight">
                Experience the <br/>
                <span className="text-emerald-600">
                  Academy Method
                </span>
              </h2>
              
              <p className="text-lg text-slate-500 font-medium max-w-lg leading-relaxed">
                Unlock your potential with Telangana Chess Academy. Book a complimentary 30-minute 1-on-1 session with our FIDE-certified masters.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link href="/contact" className="w-full sm:w-auto">
                  <Button size="lg" className="w-full sm:w-auto bg-orange-500 hover:bg-orange-600 text-white font-black uppercase tracking-widest h-16 px-10 rounded-2xl text-sm shadow-xl shadow-orange-100 transition-all active:scale-95">
                    Book Free Demo <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <a href="tel:+919864646481" className="w-full sm:w-auto">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto border-slate-200 bg-white text-slate-900 hover:bg-slate-50 h-16 px-10 rounded-2xl text-sm font-black uppercase tracking-widest shadow-sm transition-all">
                    <PhoneCall className="w-5 h-5 mr-3 text-emerald-600" /> +91 9864646481
                  </Button>
                </a>
              </div>
            </div>

            {/* Right Side: Benefits Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {benefits.map((item, idx) => (
                <div 
                  key={idx} 
                  className={`bg-white border border-slate-100 ${item.border} p-8 rounded-[2rem] shadow-sm hover:shadow-xl hover:shadow-slate-200 transition-all duration-500 group hover:-translate-y-2`}
                >
                  <div className={`w-14 h-14 rounded-2xl ${item.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
                    <item.icon className={`w-7 h-7 ${item.color}`} />
                  </div>
                  <h3 className="text-slate-900 font-black mb-2 text-xl tracking-tight">{item.title}</h3>
                  <p className="text-slate-500 text-sm font-medium leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* --- PROCESS STEPS --- */}
        <div className="mt-32 relative">
          <div className="text-center mb-20 space-y-4">
            <h3 className="text-4xl font-black text-slate-900 tracking-tight">How it Works</h3>
            <p className="text-slate-500 font-medium text-lg">Your journey to grandmastery in 3 simple steps</p>
          </div>

          <div className="grid md:grid-cols-3 gap-16 relative max-w-5xl mx-auto">
            
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-[2px] bg-slate-100 -z-10">
               <div className="h-full w-1/2 bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
            </div>

            {steps.map((step, index) => (
              <div key={index} className="relative flex flex-col items-center text-center group">
                
                {/* Number Bubble */}
                <div className="w-24 h-24 rounded-3xl bg-white border border-slate-100 shadow-xl flex items-center justify-center mb-8 group-hover:border-emerald-500 group-hover:shadow-emerald-100 transition-all duration-500 relative">
                  <span className="text-3xl font-black text-slate-200 group-hover:text-emerald-600 transition-colors">
                    {step.num}
                  </span>
                  
                  {/* Status Indicator */}
                  <div className="absolute -bottom-2 bg-emerald-600 rounded-full p-2 text-white shadow-lg shadow-emerald-200 scale-0 group-hover:scale-100 transition-transform duration-500">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                </div>
                
                {/* Content */}
                <h4 className="text-2xl font-black text-slate-900 mb-3 tracking-tight group-hover:text-emerald-600 transition-colors">
                    {step.title}
                </h4>
                <p className="text-slate-500 font-medium text-sm max-w-[220px] leading-relaxed">
                    {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
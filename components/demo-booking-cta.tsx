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
  ChevronRight,
  MessageCircle,
  Crown
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
      border: "hover:border-blue-200"
    },
    {
      icon: Users,
      title: "Coach Matching",
      description: "Get paired with an instructor who fits your personality.",
      color: "text-purple-600",
      bg: "bg-purple-50",
      border: "hover:border-purple-200"
    },
    {
      icon: Clock,
      title: "Flexible Timing",
      description: "Schedule your free session evenings or weekends.",
      color: "text-emerald-600",
      bg: "bg-emerald-50",
      border: "hover:border-emerald-200"
    },
    {
      icon: Sparkles,
      title: "Custom Roadmap",
      description: "Receive a tailored plan to reach your chess goals.",
      color: "text-orange-600",
      bg: "bg-orange-50",
      border: "hover:border-orange-200"
    },
  ];

  const steps = [
    { num: "01", title: "Book Slot", desc: "Select a time that works for you." },
    { num: "02", title: "Meet Coach", desc: "Join the 1-on-1 video session." },
    { num: "03", title: "Get Plan", desc: "Receive your personalized roadmap." },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-emerald-50 rounded-full blur-[120px] opacity-60" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-50 rounded-full blur-[120px] opacity-60" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Main CTA Box */}
        <div className="relative rounded-[3rem] p-8 sm:p-14 lg:p-18 overflow-hidden border border-slate-100 bg-gradient-to-br from-white via-slate-50/50 to-blue-50/30 shadow-2xl shadow-blue-950/5">
          
          <div className="grid lg:grid-cols-12 gap-12 items-center relative z-10">
            
            {/* Left Column */}
            <div className="lg:col-span-6 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-900 text-[10px] font-black uppercase tracking-[0.2em]">
                <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                <span>Your First Move is 100% Free</span>
              </div>
              
              <h2 className="text-3xl md:text-5xl font-black text-slate-950 leading-[1.15] tracking-tight">
                Experience the <br />
                <span className="text-[#0b3272]">Telangana Chess Centre</span> Method
              </h2>
              
              <p className="text-base sm:text-lg text-slate-600 font-medium leading-relaxed max-w-lg">
                Unlock your inner Grandmaster. Book a complimentary 30-minute 1-on-1 evaluation session with our FIDE-certified faculty today.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <Link href="/contact" className="w-full sm:w-auto">
                  <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-black uppercase tracking-wider h-14 px-8 rounded-2xl text-xs shadow-xl shadow-amber-500/20 transition-all active:scale-95 cursor-pointer">
                    Book Free Demo <ArrowRight className="w-4 h-4 ml-1.5" />
                  </Button>
                </Link>
                <a href="tel:+919864646481" className="w-full sm:w-auto">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto border-slate-300 bg-white text-slate-800 hover:bg-[#0b3272] hover:text-white h-14 px-7 rounded-2xl text-xs font-black uppercase tracking-wider shadow-sm transition-all">
                    <PhoneCall className="w-4 h-4 mr-2 text-emerald-600" /> +91 9864646481
                  </Button>
                </a>
              </div>

              <div className="pt-2 flex items-center gap-4 text-xs font-bold text-slate-500">
                <span>Direct Support:</span>
                <a href="mailto:telanganachesscentre@gmail.com" className="text-[#0b3272] hover:underline">
                  telanganachesscentre@gmail.com
                </a>
              </div>
            </div>

            {/* Right Side: Benefits Grid */}
            <div className="lg:col-span-6 grid sm:grid-cols-2 gap-4">
              {benefits.map((item, idx) => (
                <div 
                  key={idx} 
                  className={`bg-white border border-slate-100 ${item.border} p-6 sm:p-7 rounded-[2rem] shadow-sm hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300 group hover:-translate-y-1.5`}
                >
                  <div className={`w-12 h-12 rounded-2xl ${item.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <item.icon className={`w-6 h-6 ${item.color}`} />
                  </div>
                  <h3 className="text-slate-950 font-black mb-1.5 text-base sm:text-lg tracking-tight">{item.title}</h3>
                  <p className="text-slate-500 text-xs font-medium leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* Process Steps */}
        <div className="mt-24 relative">
          <div className="text-center mb-16 space-y-3">
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#0e8743] bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100">
              Simple Enrollment
            </span>
            <h3 className="text-3xl md:text-5xl font-black text-slate-950 tracking-tight">How It Works</h3>
            <p className="text-slate-500 font-medium text-base">Your roadmap to mastery in 3 seamless steps</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 sm:gap-12 relative max-w-5xl mx-auto">
            {steps.map((step, index) => (
              <div key={index} className="relative flex flex-col items-center text-center group">
                
                {/* Number Bubble */}
                <div className="w-20 h-20 rounded-3xl bg-white border-2 border-slate-100 shadow-xl flex items-center justify-center mb-6 group-hover:border-[#0b3272] group-hover:shadow-blue-900/10 transition-all duration-300 relative">
                  <span className="text-2xl font-black text-slate-300 group-hover:text-[#0b3272] transition-colors">
                    {step.num}
                  </span>
                  
                  <div className="absolute -bottom-2 bg-[#0e8743] rounded-full p-1.5 text-white shadow-md scale-0 group-hover:scale-100 transition-transform duration-300">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                </div>
                
                {/* Content */}
                <h4 className="text-xl font-black text-slate-950 mb-2 tracking-tight group-hover:text-[#0b3272] transition-colors">
                  {step.title}
                </h4>
                <p className="text-slate-500 font-medium text-xs sm:text-sm max-w-[220px] leading-relaxed">
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
"use client";

import { useEffect, useState, useRef } from "react";
import { Trophy, Users, GraduationCap, Swords, ChartBar, Crown, Award } from "lucide-react";

const useCounter = (end: number, duration: number = 2200, start: boolean = false) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [end, duration, start]);

  return count;
};

const StatCard = ({ item, isVisible, index }: { item: any; isVisible: boolean; index: number }) => {
  const count = useCounter(parseInt(item.value), 2200, isVisible);

  return (
    <div
      className={`relative group bg-white border border-slate-100 rounded-[2rem] p-8 overflow-hidden shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-blue-900/10 hover:-translate-y-2.5 transition-all duration-500 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      {/* Background Watermark Icon */}
      <div className={`absolute -right-4 -bottom-4 opacity-[0.04] group-hover:opacity-[0.08] transition-all duration-500 transform group-hover:scale-125 -rotate-12 ${item.textColor}`}>
        <item.icon className="w-40 h-40" />
      </div>

      {/* Top Icon with Colored Background */}
      <div className={`inline-flex p-3.5 rounded-2xl mb-6 ${item.lightBg} border ${item.borderColor} group-hover:scale-110 transition-transform duration-300`}>
        <item.icon className={`w-7 h-7 ${item.textColor}`} />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <div className="flex items-baseline gap-1 mb-2">
          <span className="text-5xl font-black text-slate-950 tracking-tight">
            {count}
          </span>
          <span className={`text-3xl font-black ${item.textColor}`}>
            {item.suffix}
          </span>
        </div>
        <h3 className="text-slate-500 font-extrabold uppercase tracking-widest text-[11px]">
          {item.label}
        </h3>
        <p className="text-slate-400 text-xs font-medium mt-1">
          {item.sublabel}
        </p>
      </div>

      {/* Interactive Bottom Accent Bar */}
      <div className={`absolute bottom-0 left-0 w-full h-1.5 ${item.accentBg} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
    </div>
  );
};

export function StatsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  const stats = [
    {
      value: "50",
      label: "Institutional Tools",
      suffix: "+",
      icon: Trophy,
      textColor: "text-amber-500",
      accentBg: "bg-amber-500",
      lightBg: "bg-amber-50",
      borderColor: "border-amber-100",
    },
    {
      value: "500",
      label: "Active Students",
      suffix: "+",
      icon: Users,
      textColor: "text-[#0e8743]",
      accentBg: "bg-[#0e8743]",
      lightBg: "bg-emerald-50",
      borderColor: "border-emerald-100",
    },
    {
      value: "15",
      label: "FIDE Coaches",
      suffix: "+",
      icon: GraduationCap,
      textColor: "text-[#0b3272]",
      accentBg: "bg-[#0b3272]",
      lightBg: "bg-blue-50",
      borderColor: "border-blue-100",
    },
    {
      value: "1000",
      label: "Games Analyzed",
      suffix: "+",
      icon: Swords,
      textColor: "text-rose-500",
      accentBg: "bg-rose-500",
      lightBg: "bg-rose-50",
      borderColor: "border-rose-100",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-20 relative bg-white overflow-hidden border-y border-slate-100"
    >
      {/* Subtle Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-emerald-50 rounded-full blur-3xl opacity-50" />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-7xl">
        
        {/* Header Section */}
        <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-[#0b3272] text-[10px] font-black uppercase tracking-[0.2em] mb-4">
            <ChartBar className="w-3.5 h-3.5 text-blue-700" />
            <span>Championship Metrics</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-black text-slate-950 tracking-tight">
            Our Impact in <span className="text-[#0e8743]">Numbers</span>
          </h2>
          
          <p className="text-base sm:text-lg text-slate-600 font-medium max-w-2xl mx-auto mt-4 leading-relaxed">
            We measure our success by the strategic growth of our students. Here is the influence Telangana Chess Academy has built in the chess world.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <StatCard 
              key={index} 
              item={stat} 
              isVisible={isVisible} 
              index={index} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}
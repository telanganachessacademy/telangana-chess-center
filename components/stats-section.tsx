"use client";

import { useEffect, useState, useRef } from "react";
import { Trophy, Users, GraduationCap, Swords, ChartBar } from "lucide-react";

// --- Custom Hook for Counting Up Numbers ---
const useCounter = (end: number, duration: number = 2500, start: boolean = false) => {
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

// --- Stat Card Component (Professional Light Theme) ---
const StatCard = ({ item, isVisible, index }: { item: any; isVisible: boolean; index: number }) => {
  const count = useCounter(parseInt(item.value), 2500, isVisible);

  return (
    <div
      className={`relative group bg-white border border-slate-100 rounded-[2.5rem] p-10 overflow-hidden shadow-xl shadow-slate-100/50 hover:shadow-2xl hover:shadow-slate-200 hover:-translate-y-3 transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {/* Background Watermark Icon (Very Faint) */}
      <div className={`absolute -right-6 -bottom-6 opacity-[0.03] group-hover:opacity-[0.07] transition-all duration-700 transform group-hover:scale-125 -rotate-12 ${item.textColor}`}>
        <item.icon className="w-48 h-48" />
      </div>

      {/* Top Icon with Colored Glow */}
      <div className={`inline-flex p-4 rounded-2xl mb-8 bg-white shadow-lg ${item.shadowColor} border border-slate-50 group-hover:scale-110 group-hover:-rotate-3 transition-all duration-500`}>
        <item.icon className={`w-8 h-8 ${item.textColor}`} />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <div className="flex items-baseline gap-1 mb-3">
          <span className="text-6xl font-black text-slate-900 tracking-tighter">
            {count}
          </span>
          <span className={`text-4xl font-black ${item.textColor}`}>
            {item.suffix}
          </span>
        </div>
        <h3 className="text-slate-400 font-black uppercase tracking-[0.2em] text-[10px]">
          {item.label}
        </h3>
      </div>

      {/* Interactive Bottom Progress Bar */}
      <div className={`absolute bottom-0 left-0 w-full h-1.5 ${item.accentBg} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left`} />
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
      { threshold: 0.1 }
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
      shadowColor: "shadow-amber-100",
    },
    {
      value: "500",
      label: "Active Students",
      suffix: "+",
      icon: Users,
      textColor: "text-emerald-600",
      accentBg: "bg-emerald-600",
      shadowColor: "shadow-emerald-100",
    },
    {
      value: "15",
      label: "FIDE Coaches",
      suffix: "+",
      icon: GraduationCap,
      textColor: "text-blue-600",
      accentBg: "bg-blue-600",
      shadowColor: "shadow-blue-100",
    },
    {
      value: "1000",
      label: "Games Analyzed",
      suffix: "+",
      icon: Swords,
      textColor: "text-rose-500",
      accentBg: "bg-rose-500",
      shadowColor: "shadow-rose-100",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-24 relative bg-white overflow-hidden"
    >
      {/* --- Background Patterns --- */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:40px_40px] opacity-40" />
        <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-emerald-50 rounded-full blur-[120px] opacity-50 -translate-y-1/2 -translate-x-1/2" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-50 rounded-full blur-[120px] opacity-40 translate-y-1/2 translate-x-1/2" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header Section */}
        <div className={`text-center max-w-3xl mx-auto mb-20 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-[10px] font-black uppercase tracking-[0.2em] mb-6">
            <ChartBar className="w-3.5 h-3.5" />
            <span>Championship Metrics</span>
          </div>
          
          <h2 className="text-5xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight leading-none">
            Our Impact in{" "}
            <span className="text-emerald-600">Numbers</span>
          </h2>
          
          <p className="text-lg text-slate-500 font-medium max-w-2xl mx-auto leading-relaxed">
            We measure our success by the strategic growth of our students. Here is the 
            influence Telangana Chess Academy has built in the chess world.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
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
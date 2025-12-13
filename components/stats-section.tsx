"use client";

import { useEffect, useState, useRef } from "react";
import { Trophy, Users, GraduationCap, Swords, ChartBar } from "lucide-react";

// --- Custom Hook for Counting Up Numbers (Preserved) ---
const useCounter = (end: number, duration: number = 2000, start: boolean = false) => {
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

// --- Stat Card Component (Redesigned) ---
const StatCard = ({ item, isVisible, index }: { item: any; isVisible: boolean; index: number }) => {
  const count = useCounter(parseInt(item.value), 2500, isVisible);

  return (
    <div
      className={`relative group bg-slate-900/40 backdrop-blur-md border border-slate-800 rounded-3xl p-8 overflow-hidden hover:bg-slate-900/60 hover:border-slate-700 hover:-translate-y-2 transition-all duration-500 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {/* Background Watermark Icon */}
      <div className={`absolute -right-8 -bottom-8 opacity-[0.05] group-hover:opacity-10 transition-opacity duration-500 transform group-hover:scale-110 rotate-12 ${item.textColor}`}>
        <item.icon className="w-48 h-48" />
      </div>

      {/* Top Icon with Glow */}
      <div className={`inline-flex p-4 rounded-2xl mb-6 bg-gradient-to-br ${item.gradient} shadow-lg ${item.shadowColor} border border-white/10 group-hover:scale-110 transition-transform duration-300`}>
        <item.icon className="w-8 h-8 text-white" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <div className="flex items-baseline gap-1 mb-2">
          <span className="text-5xl font-black text-white tracking-tight">
            {count}
          </span>
          <span className={`text-4xl font-black text-transparent bg-clip-text bg-gradient-to-br ${item.gradient}`}>
            {item.suffix}
          </span>
        </div>
        <h3 className="text-slate-400 font-bold uppercase tracking-widest text-xs">
          {item.label}
        </h3>
      </div>

      {/* Decorative Bottom Line */}
      <div className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${item.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
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
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  const stats = [
    {
      value: "50",
      label: "Features & Tools",
      suffix: "+",
      icon: Trophy,
      textColor: "text-amber-500",
      gradient: "from-amber-500 to-orange-600",
      shadowColor: "shadow-orange-500/20",
    },
    {
      value: "500",
      label: "Happy Students",
      suffix: "+",
      icon: Users,
      textColor: "text-emerald-500",
      gradient: "from-emerald-500 to-teal-600",
      shadowColor: "shadow-emerald-500/20",
    },
    {
      value: "15",
      label: "FIDE Coaches",
      suffix: "+",
      icon: GraduationCap,
      textColor: "text-indigo-500",
      gradient: "from-indigo-500 to-blue-600",
      shadowColor: "shadow-indigo-500/20",
    },
    {
      value: "1000",
      label: "Training Games",
      suffix: "+",
      icon: Swords,
      textColor: "text-rose-500",
      gradient: "from-rose-500 to-red-600",
      shadowColor: "shadow-rose-500/20",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-24 relative bg-[#0B0F19] overflow-hidden"
    >
      {/* --- Background Ambience --- */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Glowing Orbs */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-emerald-600/5 rounded-full blur-[100px]" />
        {/* Noise Texture */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 brightness-100 contrast-150 mix-blend-overlay"></div>
        {/* Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        
        {/* Header */}
        <div className={`text-center mb-20 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 backdrop-blur-md text-indigo-300 text-xs font-bold uppercase tracking-widest shadow-lg mb-6">
            <ChartBar className="w-3.5 h-3.5 fill-indigo-400 text-indigo-400" />
            <span>Proven Results</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
            Our Numbers <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-emerald-400">Speak Volumes</span>
          </h2>
          
          <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            We measure our success by the growth of our students. Here is the impact Telangana Chess Institute has created in the chess community.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
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
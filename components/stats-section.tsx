"use client";

import { useEffect, useState, useRef } from "react";
import { Trophy, Users, GraduationCap, Swords } from "lucide-react";

// --- Custom Hook for Counting Up Numbers ---
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

// --- Stat Card Component ---
const StatCard = ({ item, isVisible, index }: { item: any; isVisible: boolean; index: number }) => {
  const count = useCounter(parseInt(item.value), 2000, isVisible);

  return (
    <div
      className={`relative group bg-white rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 overflow-hidden ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {/* Background Watermark Icon */}
      <div className="absolute -right-6 -bottom-6 opacity-[0.03] group-hover:opacity-10 transition-opacity duration-500 transform group-hover:scale-110">
        <item.icon className="w-40 h-40" />
      </div>

      {/* Top Icon */}
      <div className={`inline-flex p-4 rounded-xl mb-6 bg-gradient-to-br ${item.bgGradient} shadow-inner`}>
        <item.icon className={`w-8 h-8 ${item.iconColor}`} />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <div className="flex items-baseline gap-1 mb-2">
          <span className="text-5xl font-extrabold text-slate-900 tracking-tight">
            {count}
          </span>
          <span className={`text-3xl font-bold ${item.accentColor}`}>
            {item.suffix}
          </span>
        </div>
        <h3 className="text-slate-500 font-medium uppercase tracking-wider text-sm">
          {item.label}
        </h3>
      </div>

      {/* Bottom Border Accent */}
      <div className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${item.bgGradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
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
          observer.disconnect(); // Only animate once
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
      iconColor: "text-blue-600",
      accentColor: "text-blue-500",
      bgGradient: "from-blue-50 to-blue-100",
    },
    {
      value: "500",
      label: "Happy Students",
      suffix: "+",
      icon: Users,
      iconColor: "text-orange-600",
      accentColor: "text-orange-500",
      bgGradient: "from-orange-50 to-orange-100",
    },
    {
      value: "15",
      label: "FIDE Coaches",
      suffix: "+",
      icon: GraduationCap,
      iconColor: "text-blue-600",
      accentColor: "text-blue-500",
      bgGradient: "from-blue-50 to-blue-100",
    },
    {
      value: "1000",
      label: "Training Games",
      suffix: "+",
      icon: Swords,
      iconColor: "text-orange-600",
      accentColor: "text-orange-500",
      bgGradient: "from-orange-50 to-orange-100",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-24 relative bg-slate-50 overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        
        {/* Header */}
        <div className={`text-center mb-20 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div className="inline-block mb-4 px-4 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-bold tracking-widest uppercase">
            Proven Results
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Our Numbers Speak
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            We measure our success by the growth of our students. Here is the impact Bharat Chess School has created in the chess community.
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
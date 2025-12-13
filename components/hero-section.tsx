"use client";

import { Button } from "@/components/ui/button";
import { Play, Users, Trophy, Star, Sparkles, Award, VideoIcon, BellIcon, Phone, ArrowRight, ExternalLink } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // 4 High-quality Chess Images
  const heroImages = [
    "/hero-1.jpg",
    "/hero-2.jpg",
    "/hero-3.jpg",
    "/hero-5.jpg",
    "/hero-6.jpg",
  ];

  // Auto-rotate images every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  return (
    <section className="relative min-h-screen flex items-center bg-[#0B0F19] overflow-hidden selection:bg-indigo-500/30 selection:text-indigo-200 font-sans pt-10">
      
      {/* --- Modern Background Elements --- */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-600/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-emerald-600/10 rounded-full blur-[120px]" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>

      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-24 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* --- Left Column: Content --- */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* New Badge Style */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 backdrop-blur-md text-indigo-300 text-xs font-semibold tracking-wide uppercase">
              <Star className="w-3.5 h-3.5 fill-indigo-400 text-indigo-400" />
              <span>Certified FIDE Coaches</span>
            </div>

            {/* Typography Overhaul */}
            <h1 className="text-5xl sm:text-6xl md:text-5xl font-bold tracking-tight text-white leading-[1.1]">
             
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-emerald-400">
                Telanagana Chess Institute
              </span>
            </h1>

            {/* Primary Actions */}
            <div className="flex flex-wrap gap-4 pt-2">
              <Link href="https://coaching.telanganachessacademy.com/login" target="_blank">
                <Button className="h-14 px-8 bg-white text-slate-950 hover:bg-indigo-50 hover:scale-105 transition-all duration-300 rounded-full text-base font-bold shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                  <Users className="w-5 h-5 mr-2" />
                  ONLINE COACHING
                </Button>
              </Link>
              <Link href="https://pages.razorpay.com/pl_RimudLa05GzfHG/view" target="_blank">
                <Button className="h-14 px-8 bg-indigo-600 text-white hover:bg-indigo-700 hover:scale-105 transition-all duration-300 rounded-full text-base font-bold border border-indigo-500 shadow-lg shadow-indigo-900/50">
                  <Trophy className="w-5 h-5 mr-2" />
                  EVENTS & TOURNAMENTS
                </Button>
              </Link>
            </div>

            {/* Quick Access Grid (Redesigned) */}
            <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-5 backdrop-blur-sm">
              <p className="text-slate-400 text-xs font-semibold uppercase tracking-wider mb-4">Quick Access Links</p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {/* 1. G-Meet */}
                <QuickLink href="https://meet.google.com/vjj-cfpx-dav?pli=1" icon={VideoIcon} label="G-Meet" color="text-blue-400" />
                
                {/* 2. Start Call */}
                <QuickLink href="https://meet.jit.si/TelanganaChessAcademy" icon={Play} label="Start Call" color="text-emerald-400" />
                
                {/* 3. Call Naresh */}
                <QuickLink href="https://meet.google.com/wuk-nfie-mgx" icon={Phone} label="Call Naresh" color="text-orange-400" />
                
                {/* 4. TCS Meeting */}
                <QuickLink href="https://meet.google.com/atu-ziid-ojg" icon={Sparkles} label="TCS Meeting" color="text-purple-400" />
                
                {/* 5. BCA Meeting */}
                <QuickLink href="https://meet.google.com/uux-vyxa-pgq" icon={BellIcon} label="BCA Meeting" color="text-rose-400" />
                
                {/* 6. Call Rohith */}
                <QuickLink href="https://meet.google.com/mxj-uwyj-vzp" icon={Phone} label="Call Rohith" color="text-cyan-400" />
              </div>
            </div>

            {/* Stats Row (Redesigned as Glass Strip) */}
            <div className="grid grid-cols-3 divide-x divide-slate-800 border-t border-slate-800 pt-6">
              <StatItem value="120+" label="Tournaments" />
              <StatItem value="600+" label="Students" />
              <StatItem value="60+" label="Champions" />
            </div>
          </div>

          {/* --- Right Column: Visuals --- */}
          <div className="lg:col-span-5 relative">
             {/* Decorative Ring */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-slate-700/50 rounded-full animate-[spin_10s_linear_infinite]" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] border border-dashed border-slate-700/50 rounded-full animate-[spin_15s_linear_infinite_reverse]" />

            <div className="relative aspect-[4/5] w-full max-w-md mx-auto">
              {/* Main Image Container */}
              <div className="relative w-full h-full rounded-[2rem] overflow-hidden border border-slate-700 shadow-2xl shadow-indigo-900/20 z-10">
                {heroImages.map((src, index) => (
                  <Image
                    key={index}
                    src={src}
                    alt="Chess Academy"
                    fill
                    className={`object-cover transition-all duration-1000 ease-in-out ${
                      index === currentImageIndex ? "opacity-100 scale-100 blur-0" : "opacity-0 scale-110 blur-sm"
                    }`}
                    priority={index === 0}
                  />
                ))}
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent"></div>
                
                {/* Floating Content Inside Image */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl flex items-center gap-4">
                    <div className="bg-gradient-to-br from-indigo-500 to-purple-600 p-3 rounded-lg text-white">
                       <Award className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-white font-bold text-lg">Join The Champions</p>
                      <p className="text-indigo-200 text-sm">Become a Grandmaster</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

// --- Sub-components for Cleaner Code ---

function QuickLink({ href, icon: Icon, label, color }: { href: string; icon: any; label: string; color: string }) {
  return (
    <Link href={href} target="_blank" className="group">
      <div className="flex items-center gap-3 p-3 rounded-lg bg-slate-800/50 border border-slate-700 hover:border-slate-600 hover:bg-slate-800 transition-all cursor-pointer">
        <div className={`p-1.5 rounded-md bg-slate-900 ${color} group-hover:scale-110 transition-transform`}>
          <Icon className="w-4 h-4" />
        </div>
        <span className="text-slate-300 text-sm font-medium group-hover:text-white truncate">{label}</span>
      </div>
    </Link>
  );
}

function StatItem({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col items-center justify-center text-center px-2">
      <span className="text-2xl sm:text-3xl font-black text-white">{value}</span>
      <span className="text-xs sm:text-sm text-slate-500 uppercase tracking-wide font-medium mt-1">{label}</span>
    </div>
  );
}
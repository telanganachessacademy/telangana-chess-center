"use client";

import { Button } from "@/components/ui/button";
import {
  Play,
  Users,
  Trophy,
  Star,
  Sparkles,
  Award,
  VideoIcon,
  BellIcon,
  Phone,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const heroImages = [
    "/hero-1.jpg",
    "/hero-2.jpg",
    "/hero-3.jpg",
    "/hero-5.jpg",
    "/hero-6.jpg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center bg-[#0B0F19] overflow-hidden pt-10">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-600/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-emerald-600/10 rounded-full blur-[120px]" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      </div>

      <div className="container max-w-7xl mx-auto px-4 relative z-10 pt-24 pb-12">
        <div className="grid lg:grid-cols-12 gap-12 items-center">

          {/* LEFT */}
          <div className="lg:col-span-7 space-y-8">

            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-xs font-semibold uppercase">
              <Star className="w-3.5 h-3.5 fill-indigo-400" />
              Certified FIDE Coaches
            </div>

            {/* Title */}
            <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-emerald-400">
                Telangana Chess Institute
              </span>
            </h1>

            {/* PRIMARY BUTTONS */}
            <div className="flex flex-wrap gap-4 pt-2">

              {/* ONLINE COACHING */}
              <Link
                href="https://coaching.telanganachessacademy.com/login"
                target="_blank"
              >
                <Button className="h-14 px-8 rounded-full text-base font-bold text-white
                  bg-gradient-to-r from-emerald-500 to-teal-500
                  hover:from-emerald-400 hover:to-teal-400
                  hover:scale-105 transition-all duration-300
                  shadow-[0_0_25px_rgba(16,185,129,0.45)]">
                  <Users className="w-5 h-5 mr-2" />
                  ONLINE COACHING
                </Button>
              </Link>

              {/* EVENTS */}
              <Link
                href="https://pages.razorpay.com/pl_RimudLa05GzfHG/view"
                target="_blank"
              >
                <Button className="h-14 px-8 rounded-full text-base font-bold text-slate-950
                  bg-gradient-to-r from-amber-400 to-orange-500
                  hover:from-amber-300 hover:to-orange-400
                  hover:scale-105 transition-all duration-300
                  shadow-[0_0_25px_rgba(251,191,36,0.45)]">
                  <Trophy className="w-5 h-5 mr-2" />
                  EVENTS & TOURNAMENTS
                </Button>
              </Link>
            </div>

            {/* QUICK ACCESS */}
            <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-5 backdrop-blur-sm">
              <p className="text-slate-400 text-xs font-semibold uppercase mb-4">
                Quick Access Links
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                <QuickLink href="https://meet.google.com/vjj-cfpx-dav?pli=1" icon={VideoIcon} label="G-Meet" color="text-blue-400" />
                <QuickLink href="https://meet.jit.si/TelanganaChessAcademy" icon={Play} label="Start Call" color="text-emerald-400" />
                <QuickLink href="https://meet.google.com/wuk-nfie-mgx" icon={Phone} label="Call Naresh" color="text-orange-400" />
                <QuickLink href="https://meet.google.com/atu-ziid-ojg" icon={Sparkles} label="TCS Meeting" color="text-purple-400" />
                <QuickLink href="https://meet.google.com/uux-vyxa-pgq" icon={BellIcon} label="BCA Meeting" color="text-rose-400" />
                <QuickLink href="https://meet.google.com/mxj-uwyj-vzp" icon={Phone} label="Call Rohith" color="text-cyan-400" />
              </div>
            </div>

            {/* STATS */}
            <div className="grid grid-cols-3 divide-x divide-slate-800 border-t border-slate-800 pt-6">
              <StatItem value="120+" label="Tournaments" />
              <StatItem value="600+" label="Students" />
              <StatItem value="60+" label="Champions" />
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] max-w-md mx-auto rounded-[2rem] overflow-hidden border border-slate-700 shadow-2xl">
              {heroImages.map((src, i) => (
                <Image
                  key={i}
                  src={src}
                  alt="Chess Academy"
                  fill
                  className={`object-cover transition-all duration-1000 ${
                    i === currentImageIndex ? "opacity-100" : "opacity-0"
                  }`}
                  priority={i === 0}
                />
              ))}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

/* ---------- COMPONENTS ---------- */

function QuickLink({
  href,
  icon: Icon,
  label,
  color,
}: {
  href: string;
  icon: any;
  label: string;
  color: string;
}) {
  return (
    <Link href={href} target="_blank" className={`group ${color}`}>
      <div className="flex items-center gap-3 p-3 rounded-lg
        bg-slate-900/60 border border-slate-700/60
        hover:border-current hover:bg-slate-900/80
        transition-all cursor-pointer">
        <div className="p-1.5 rounded-md bg-current/10 text-current
          shadow-[0_0_12px_currentColor]
          group-hover:scale-110 transition-transform">
          <Icon className="w-4 h-4" />
        </div>
        <span className="text-slate-300 text-sm font-medium group-hover:text-white truncate">
          {label}
        </span>
      </div>
    </Link>
  );
}

function StatItem({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <span className="text-3xl font-black text-white">{value}</span>
      <span className="text-xs text-slate-500 uppercase mt-1">{label}</span>
    </div>
  );
}

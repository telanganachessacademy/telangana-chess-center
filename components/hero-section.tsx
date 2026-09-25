"use client";

import { Button } from "@/components/ui/button";
import {
  Play,
  Users,
  Trophy,
  Sparkles,
  Video,
  Bell,
  ChevronRight,
  MessageCircle,
} from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link"; 
import Image from "next/image";

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const meetingLinks = [
    {
      href: "https://meet.google.com/isn-hyzm-bdk",
      icon: Video,
      label: "TCA MEETING",
      bg: "from-blue-600 to-indigo-700",
    },
    {
      href: "https://meet.jit.si/TelanganaChessAcademy",
      icon: Play,
      label: "START CALL",
      bg: "from-cyan-500 to-teal-600",
    },
    {
      href: "https://meet.google.com/nhx-mfzc-fsi",
      icon: Play,
      label: "GOOGLE MEET",
      bg: "from-orange-500 to-amber-600",
    },
    {
      href: "https://meet.google.com/mwk-zhcq-fts",
      icon: Sparkles,
      label: "BCA MEETING",
      bg: "from-emerald-600 to-green-700",
    },
    {
      href: "https://meet.google.com/azx-brjh-ccv",
      icon: Bell,
      label: "HCI MEETING",
      bg: "from-rose-500 to-pink-600",
    },
    {
      href: "https://meet.google.com/aoq-xcnz-mwx",
      icon: Bell,
      label: "COACH NARESH",
      bg: "from-indigo-600 to-purple-700",
    },
  ];

  const carouselImages = [
    "/hero-1.jpg",
    "/hero-2.jpg",
    "/hero-3.jpg",
    "/hero-5.jpg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [carouselImages.length]);

  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex items-center overflow-hidden bg-slate-50 md:pt-28 pt-28 pb-12"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/60 via-purple-50/40 to-emerald-50/40 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, rgba(11, 50, 114, 0.08) 0%, transparent 50%),
                           radial-gradient(circle at 75% 75%, rgba(14, 135, 67, 0.08) 0%, transparent 50%),
                           radial-gradient(circle at 50% 50%, rgba(245, 158, 11, 0.05) 0%, transparent 50%)`,
          }}
        />
      </div>

      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-6">
            <div className="inline-flex items-center gap-3 bg-white px-4 py-2 rounded-full shadow-md border-2 border-emerald-100 animate-bounce-slow">
              <div className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center">
                <MessageCircle className="w-4 h-4 text-white" />
              </div>
              <a href="tel:+919864646481" className="font-bold text-emerald-600 hover:underline">
                +91 98 64 64 64 81
              </a>
              <Sparkles className="w-5 h-5 text-yellow-500" />
            </div>

            <div className="flex flex-col sm:flex-row gap-3 relative z-20">
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-bold px-8 py-5 rounded-2xl shadow-xl transition-all duration-300 text-base sm:text-lg group backdrop-blur-md bg-white/80 w-full sm:w-auto cursor-pointer"
              >
                <a href="https://www.telanganachessacademy.com/events" target="_blank" rel="noopener noreferrer">
                  <Trophy className="w-5 h-5 mr-2 text-amber-500" />
                  EVENTS & TOURNAMENTS
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </a>
              </Button>

              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 text-white font-bold px-8 py-5 rounded-2xl shadow-2xl transition-all duration-300 text-base sm:text-lg group animate-pulse-glow w-full sm:w-auto cursor-pointer"
              >
                <a href="https://svc-ui-7.netlify.app/login" target="_blank" rel="noopener noreferrer">
                  <Users className="w-5 h-5 mr-2" />
                  ONLINE COACHING
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </a>
              </Button>
            </div>

            {/* 6 MEETING LINKS */}
            <div className="space-y-3 relative z-30">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {meetingLinks.map((link, idx) => (
                  <a 
                    key={idx} 
                    href={link.href} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block touch-manipulation" 
                  >
                    <div
                      className={`relative overflow-hidden bg-gradient-to-br ${link.bg} p-4 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 active:scale-95 cursor-pointer group`}
                    >
                      <div className="absolute inset-0 bg-white/10 group-hover:bg-white/25 transition-colors" />
                      <div className="relative flex items-center gap-2 text-white">
                        <link.icon className="w-5 h-5" />
                        <span className="font-semibold text-sm">
                          {link.label}
                        </span>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="space-y-4 pt-2">
              <h1 className="text-3xl md:text-5xl font-black leading-tight">
                <span className="text-slate-900">Become a </span>
                <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                  Chess Master
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-xl font-medium">
                Telangana chess school empowers you with world-class training from FIDE-rated coaches.
              </p>
            </div>
          </div>

          <div className="relative h-80 sm:h-[400px] lg:h-[480px] rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-slate-900">
            <div className="relative w-full h-full">
              {carouselImages.map((src, idx) => (
                <div
                  key={idx}
                  className={`absolute inset-0 transition-opacity duration-1000 ${
                    currentSlide === idx ? "opacity-100" : "opacity-0 pointer-events-none"
                  }`}
                >
                  <Image
                    src={src}
                    alt="Chess"
                    fill
                    className="object-cover"
                    priority={idx === 0}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

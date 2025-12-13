"use client";

import { Button } from "@/components/ui/button";
import { Play, Users, Trophy, Star, Sparkles, Award, VideoIcon, BellIcon, Phone } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // 4 High-quality Chess Images
  const heroImages = [
    "/hero-1.jpg",    // ← Put your images in public/images/
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

  const chessPieces = ["♔", "♕", "♖", "♗", "♘", "♙"];

  return (
    <section
      id="home"
      className="relative min-h-screen pt-24 md:pt-32 pb-16 flex items-center overflow-hidden bg-white"
    >
      {/* --- Background Gradients --- */}
      <div 
        className="absolute inset-0 z-0 opacity-80"
        style={{
          background: "linear-gradient(135deg, #FFF3E0 0%, #E8F5E9 35%, #E1F5FE 70%, #F3E5F5 100%)",
        }}
      />
      
      {/* --- Floating Chess Pieces Background --- */}
      <div className="absolute inset-0 opacity-10 pointer-events-none z-0 overflow-hidden">
        {chessPieces.map((piece, i) => (
          <div
            key={i}
            className="absolute text-7xl md:text-9xl lg:text-[10rem] select-none font-serif"
            style={{
              left: `${5 + i * 15}%`,
              top: `${10 + (i % 3) * 25}%`,
              animation: `float ${10 + i * 2}s ease-in-out infinite`,
              color: i % 2 === 0 ? "#2E7D32" : "#1976D2",
              textShadow: "0 4px 12px rgba(0,0,0,0.1)"
            }}
          >
            {piece}
          </div>
        ))}
      </div>

      {/* --- Decorative Blobs --- */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-orange-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute top-40 right-40 w-64 h-64 bg-green-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-64 h-64 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left Side - Content */}
          <div className="text-center lg:text-left space-y-8 animate-fade-in-up">
            
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-green-200 text-green-800 px-4 py-2 rounded-full text-sm font-bold shadow-sm hover:shadow-md transition-all">
              <Star className="w-4 h-4 text-orange-500 fill-orange-500" />
              <span>Certified FIDE Coaches</span>
              <Sparkles className="w-4 h-4 text-blue-500" />
            </div>

            {/* Headline */}
            <h1 className="text-5xl sm:text-6xl md:text-5xl font-black text-slate-900 leading-[1.1] tracking-tight">
              
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2E7D32] via-[#43A047] to-[#1976D2]">
                Bharat Chess School
              </span>
            </h1>


            {/* Main CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
              <Link href="https://coaching.telanganachessacademy.com/login" target="_blank" className="w-full sm:w-auto">
                <Button className="w-full sm:w-auto bg-[#2E7D32] hover:bg-[#1B5E20] text-white text-lg px-8 py-6 rounded-xl shadow-lg shadow-green-900/20 font-bold transition-transform hover:-translate-y-1">
                  <Users className="w-6 h-6 mr-2" />
                  Online Coaching
                </Button>
              </Link>

              <Link href="https://pages.razorpay.com/pl_RimudLa05GzfHG/view" target="_blank" className="w-full sm:w-auto">
                <Button className="w-full sm:w-auto bg-[#1976D2] hover:bg-[#1565C0] text-white text-lg px-8 py-6 rounded-xl shadow-lg shadow-blue-900/20 font-bold transition-transform hover:-translate-y-1">
                  <Trophy className="w-6 h-6 mr-2" />
                  EVENTS & TOURNAMENTS
                </Button>
              </Link>
            </div>

<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 xs:gap-6 sm:gap-8 md:gap-10 justify-center lg:justify-start mb-4 xs:mb-6 sm:mb-8 md:mb-12">
  
  {/* 1. G-Meet: Blue */}
  <Link href="https://meet.google.com/vjj-cfpx-dav?pli=1" target="_blank" className="cursor-pointer w-full sm:w-auto">
    <Button size="sm" variant="outline" className="border-2 border-[#2563EB] text-[#2563EB] hover:bg-[#2563EB] hover:text-white font-bold px-3 xs:px-4 py-1.5 xs:py-2 rounded-full shadow-md text-xs xs:text-sm sm:text-base md:text-base transition-all duration-300 w-full">
      <VideoIcon className="w-4 h-4 mr-2" /> G-Meet
    </Button>
  </Link>

  {/* 2. Start Call: Green */}
  <Link href="https://meet.jit.si/TelanganaChessAcademy" target="_blank" className="cursor-pointer w-full sm:w-auto">
    <Button size="sm" variant="outline" className="border-2 border-[#16A34A] text-[#16A34A] hover:bg-[#16A34A] hover:text-white font-bold px-3 xs:px-4 py-1.5 xs:py-2 rounded-full shadow-md text-xs xs:text-sm sm:text-base md:text-base transition-all duration-300 w-full">
      <Play className="w-4 h-4 mr-2" /> Start Call
    </Button>
  </Link>

  {/* 3. Call Naresh: Orange */}
  <Link href="https://meet.google.com/wuk-nfie-mgx" target="_blank" className="cursor-pointer w-full sm:w-auto">
    <Button size="sm" variant="outline" className="border-2 border-[#EA580C] text-[#EA580C] hover:bg-[#EA580C] hover:text-white font-bold px-3 xs:px-4 py-1.5 xs:py-2 rounded-full shadow-md text-xs xs:text-sm sm:text-base md:text-base transition-all duration-300 w-full">
      <Play className="w-4 h-4 mr-2" /> Call Naresh
    </Button>
  </Link>

  {/* 4. TCS Meeting: Purple */}
  <Link href="https://meet.google.com/atu-ziid-ojg" target="_blank" className="cursor-pointer w-full sm:w-auto">
    <Button size="sm" variant="outline" className="border-2 border-[#9333EA] text-[#9333EA] hover:bg-[#9333EA] hover:text-white font-bold px-3 xs:px-4 py-1.5 xs:py-2 rounded-full shadow-md text-xs xs:text-sm sm:text-base md:text-base transition-all duration-300 w-full">
      <Sparkles className="w-4 h-4 mr-2" /> TCS Meeting
    </Button>
  </Link>

  {/* 5. BCA Meeting: Rose/Red */}
  <Link href="https://meet.google.com/uux-vyxa-pgq" target="_blank" className="cursor-pointer w-full sm:w-auto">
    <Button size="sm" variant="outline" className="border-2 border-[#E11D48] text-[#E11D48] hover:bg-[#E11D48] hover:text-white font-bold px-3 xs:px-4 py-1.5 xs:py-2 rounded-full shadow-md text-xs xs:text-sm sm:text-base md:text-base transition-all duration-300 w-full">
      <BellIcon className="w-4 h-4 mr-2" /> BCA Meeting
    </Button>
  </Link>

  {/* 6. Call Rohith: Teal */}
  <Link href="https://meet.google.com/mxj-uwyj-vzp" target="_blank" className="cursor-pointer w-full sm:w-auto">
    <Button size="sm" variant="outline" className="border-2 border-[#0D9488] text-[#0D9488] hover:bg-[#0D9488] hover:text-white font-bold px-3 xs:px-4 py-1.5 xs:py-2 rounded-full shadow-md text-xs xs:text-sm sm:text-base md:text-base transition-all duration-300 w-full">
      <BellIcon className="w-4 h-4 mr-2" /> Call Rohith
    </Button>
  </Link>
</div>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6 pt-4">
              {[
                { label: "Tournaments", value: "120+", icon: Trophy, color: "text-orange-500", bg: "bg-orange-50", border: "border-orange-100" },
                { label: "Students", value: "600+", icon: Users, color: "text-blue-600", bg: "bg-blue-50", border: "border-blue-100" },
                { label: "Champions", value: "60+", icon: Award, color: "text-green-600", bg: "bg-green-50", border: "border-green-100" },
              ].map((stat, idx) => (
                <div key={idx} className={`bg-white rounded-xl p-4 text-center shadow-md border ${stat.border} hover:shadow-lg transition-shadow`}>
                  <stat.icon className={`w-8 h-8 ${stat.color} mx-auto mb-2`} />
                  <div className="text-2xl sm:text-3xl font-bold text-slate-800">{stat.value}</div>
                  <div className="text-xs sm:text-sm text-slate-500 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Changing Images Slideshow */}
          <div className="flex justify-center lg:justify-end animate-fade-in-right relative group">
            <div className="relative w-full max-w-md lg:max-w-xl aspect-[6/5] sm:aspect-square lg:aspect-[6/5]">
              
              {/* Background Blob behind image */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-gradient-to-tr from-green-200 to-blue-200 rounded-full blur-3xl opacity-60 -z-10 group-hover:opacity-80 transition-opacity"></div>
              
              {/* Image Container with Overflow Hidden */}
              <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl border-[8px] border-white">
                {heroImages.map((src, index) => (
                  <Image
                    key={index}
                    src={src}
                    alt={`Telangana Chess School Highlight ${index + 1}`}
                    fill
                    className={`object-cover transition-opacity duration-1000 ease-in-out ${
                      index === currentImageIndex ? "opacity-100 scale-100" : "opacity-0 scale-105"
                    }`}
                    priority={index === 0}
                  />
                ))}
              </div>
              
              {/* Floating Badge on Image (Stays on top) */}
              <div className="absolute -bottom-6 -left-4 sm:-left-8 bg-white/95 backdrop-blur-md px-6 py-4 rounded-2xl shadow-xl border border-white flex items-center gap-4 animate-bounce-slow z-20">
                <div className="bg-green-100 p-3 rounded-full">
                  <Award className="w-8 h-8 text-green-600" />
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-bold uppercase tracking-wider">Join The</p>
                  <p className="text-xl font-black text-slate-800">Champions</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* --- Styles for Animations --- */}
      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        .animate-bounce-slow {
          animation: bounce 3s infinite;
        }
      `}</style>
    </section>
  );
}
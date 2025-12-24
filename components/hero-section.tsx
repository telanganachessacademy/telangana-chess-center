"use client";

import { Button } from "@/components/ui/button";
import {
  Play,
  Users,
  Trophy,
  Sparkles,
  Award,
  VideoIcon,
  BellIcon,
  Phone,
  ArrowUpRight,
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
    <section className="relative min-h-screen flex items-center bg-white overflow-hidden pt-12">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-emerald-50/50 skew-x-12 translate-x-32" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px]" />
      </div>

      <div className="container max-w-7xl mx-auto px-6 relative z-10 py-20">
        <div className="grid lg:grid-cols-12 gap-16 items-center">

          {/* LEFT CONTENT */}
          <div className="lg:col-span-7 space-y-8">

            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-700 text-xs font-bold uppercase tracking-widest">
              <Award className="w-4 h-4" />
              Telangana Chess Academy is the place for professional chess training
            </div>

            {/* CTA BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="https://svc-ui-7.netlify.app/login" target="_blank" className="w-full sm:w-auto">
                <Button
                  className="h-16 w-full sm:w-auto px-6 sm:px-10 rounded-2xl
                  text-lg font-bold text-white
                  bg-emerald-600 hover:bg-emerald-700
                  shadow-xl shadow-emerald-200
                  transition-all duration-300 hover:-translate-y-1"
                >
                  <Users className="w-6 h-6 mr-2" />
                  ONLINE COACHING
                </Button>
              </Link>

              <Link href="https://rzp.io/rzp/4OFIdi7" target="_blank" className="w-full sm:w-auto">
                <Button
                  className="h-16 w-full sm:w-auto px-6 sm:px-10 rounded-2xl
                  text-lg font-bold text-white
                  bg-amber-500 hover:bg-amber-600
                  shadow-xl shadow-amber-100
                  transition-all duration-300 hover:-translate-y-1"
                >
                  <Trophy className="w-6 h-6 mr-2" />
                  EVENTS & TOURNAMENTS
                </Button>
              </Link>
            </div>

            {/* PORTALS */}
            <div className="space-y-4 pt-4">
              <h3 className="text-slate-400 text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                <div className="w-8 h-[1px] bg-slate-200" />
                Live Portals & Meetings
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                <FullColorButton
                  href="https://meet.google.com/vjj-cfpx-dav?pli=1"
                  icon={VideoIcon}
                  label="G-Meet"
                  bgColor="bg-blue-600"
                  hoverColor="hover:bg-blue-700"
                />
                <FullColorButton
                  href="https://meet.jit.si/TelanganaChessAcademy"
                  icon={Play}
                  label="Start Call"
                  bgColor="bg-emerald-600"
                  hoverColor="hover:bg-emerald-700"
                />
                <FullColorButton
                  href="https://meet.google.com/wuk-nfie-mgx"
                  icon={Phone}
                  label="Call Naresh"
                  bgColor="bg-orange-600"
                  hoverColor="hover:bg-orange-700"
                />
                <FullColorButton
                  href="https://meet.google.com/atu-ziid-ojg"
                  icon={Sparkles}
                  label="TCS Meeting"
                  bgColor="bg-purple-600"
                  hoverColor="hover:bg-purple-700"
                />
                <FullColorButton
                  href="https://meet.google.com/uux-vyxa-pgq"
                  icon={BellIcon}
                  label="BCA Meeting"
                  bgColor="bg-rose-600"
                  hoverColor="hover:bg-rose-700"
                />
                <FullColorButton
                  href="https://meet.google.com/mxj-uwyj-vzp"
                  icon={Phone}
                  label="Call Rohith"
                  bgColor="bg-cyan-600"
                  hoverColor="hover:bg-cyan-700"
                />
              </div>

              {/* Heading */}
              <div className="space-y-4 pt-6">
                <h1 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
                  Master The Game <br />
                  <span className="text-emerald-600">Strategic Excellence.</span>
                </h1>
                <p className="text-slate-600 text-lg max-w-xl font-medium">
                  Professional FIDE coaching for aspiring champions. Join the most
                  prestigious chess community in Telangana.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] w-full max-w-md mx-auto">
              <div className="relative h-full w-full rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white">
                {heroImages.map((src, i) => (
                  <Image
                    key={i}
                    src={src}
                    alt="Chess Coaching"
                    fill
                    className={`object-cover transition-all duration-1000 ${
                      i === currentImageIndex
                        ? "opacity-100 scale-100"
                        : "opacity-0 scale-105"
                    }`}
                  />
                ))}
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/40 to-transparent" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

/* ---------- BUTTON COMPONENT ---------- */

function FullColorButton({
  href,
  icon: Icon,
  label,
  bgColor,
  hoverColor,
}: {
  href: string;
  icon: any;
  label: string;
  bgColor: string;
  hoverColor: string;
}) {
  return (
    <Link href={href} target="_blank" className="block group">
      <div
        className={`flex items-center gap-3 px-4 py-5 rounded-xl
        transition-all duration-300 shadow-sm hover:shadow-lg hover:-translate-y-1
        ${bgColor} ${hoverColor}`}
      >
        <div className="p-2 rounded-lg bg-white/20 text-white">
          <Icon className="w-5 h-5" />
        </div>

        <span className="text-white text-sm sm:text-base font-bold whitespace-nowrap">
          {label}
        </span>

        <ArrowUpRight className="w-4 h-4 text-white/60 ml-auto group-hover:text-white transition-colors" />
      </div>
    </Link>
  );
}

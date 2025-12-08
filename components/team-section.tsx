"use client";

import { Card } from "@/components/ui/card";
import { Award, Star, Trophy, CheckCircle2, Linkedin, Twitter, Share2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function TeamSection() {
  const teamMembers = [
    {
      name: "Tejaswin Naresh",
      role: "Head Coach",
      title: "FIDE Instructor & State Player",
      rating: "2200+ ELO",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=800", // Male portrait
      achievements: ["State Champion 2022", "Certified FIDE Instructor", "10+ Years Coaching"],
      color: "blue",
    },
    {
      name: "Tejaswin Aruna",
      role: "Senior Coach",
      title: "FIDE Rated Player",
      rating: "1800+ ELO",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800", // Female portrait
      achievements: ["Women's Title Holder", "Youth Mentor Specialist", "8+ Years Experience"],
      color: "purple",
    },
    {
      name: "Ranghunathan K S",
      role: "Master Trainer",
      title: "International FIDE Rated",
      rating: "2000+ ELO",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=800", // Male portrait
      achievements: ["International Player", "Opening Theory Expert", "15+ Years Experience"],
      color: "orange",
    },
    {
      name: "Kethavath Lokesh",
      role: "Tactics Expert",
      title: "International FIDE Rated",
      rating: "1900+ ELO",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=800", // Male portrait
      achievements: ["Tournament Director", "Endgame Specialist", "12+ Years Experience"],
      color: "green",
    },
  ];

  return (
    <section id="team" className="py-24 bg-slate-50 relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-100/40 rounded-full blur-[100px] pointer-events-none translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-orange-100/40 rounded-full blur-[100px] pointer-events-none -translate-x-1/2 translate-y-1/2"></div>

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-wider text-blue-600 uppercase bg-blue-100 rounded-full">
            The Grandmasters
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Meet Your <span className="text-blue-600">Mentors</span>
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Our faculty consists of FIDE-rated professionals and champions who don't just teach chess—they live it.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-lg border border-slate-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >
              {/* Image Container */}
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
                
                {/* Floating Role Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/20 backdrop-blur-md border border-white/30 text-white text-xs font-bold rounded-full uppercase tracking-wider">
                    {member.role}
                  </span>
                </div>

                {/* Social Actions (Slide in on hover) */}
                <div className="absolute top-4 right-4 flex flex-col gap-2 translate-x-12 group-hover:translate-x-0 transition-transform duration-300">
                  <button className="p-2 bg-white rounded-full text-slate-900 hover:text-blue-600 shadow-lg">
                    <Linkedin className="w-4 h-4" />
                  </button>
                  <button className="p-2 bg-white rounded-full text-slate-900 hover:text-blue-400 shadow-lg">
                    <Twitter className="w-4 h-4" />
                  </button>
                </div>

                {/* Info Overlay (Bottom) */}
                <div className="absolute bottom-0 left-0 w-full p-6 text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-2xl font-bold mb-1">{member.name}</h3>
                  <p className="text-slate-300 text-sm font-medium mb-4">{member.title}</p>
                  
                  {/* Rating Badge */}
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-yellow-500/20 border border-yellow-500/50 rounded-lg text-yellow-400 text-xs font-bold mb-4">
                    <Trophy className="w-3 h-3" />
                    {member.rating}
                  </div>

                  {/* Achievements (Reveal on hover) */}
                  <div className="space-y-2 pt-4 border-t border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75">
                    {member.achievements.map((ach, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 mt-0.5" />
                        <span>{ach}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom colored line */}
              <div className={`h-1.5 w-full ${
                member.color === 'blue' ? 'bg-blue-600' :
                member.color === 'purple' ? 'bg-purple-600' :
                member.color === 'orange' ? 'bg-orange-600' : 'bg-green-600'
              }`}></div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <Link href="/coaches" className="inline-flex items-center text-slate-500 hover:text-blue-600 font-semibold transition-colors">
            See all coaches <Share2 className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
}
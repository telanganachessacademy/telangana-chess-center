"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote, MessageCircle, CheckCircle2, ChevronRight, Crown, Trophy, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      name: "Jyothi Yadav",
      role: "Intermediate Player",
      content: "My daughter has improved tremendously since joining. The instructors are patient, knowledgeable, and make learning chess fun and engaging.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200", 
      ratingJump: "+300 Rating",
    },
    {
      id: 2,
      name: "Khilend Sahu",
      role: "Adult Beginner",
      content: "I started as a complete beginner. The structured curriculum and personalized attention helped me compete in local tournaments within months.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200", 
      ratingJump: "Tournament Player",
    },
    {
      id: 3,
      name: "Arjun Biru",
      role: "Intermediate Player",
      content: "The online coaching sessions are fantastic! I learn from expert coaches from home. My rating increased by 300 points in just 6 months.",
      image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=200", 
      ratingJump: "+300 Points",
    },
    {
      id: 4,
      name: "Dandu Ravi",
      role: "Tournament Player",
      content: "The focus on tactical and strategic understanding elevated my game. Thanks to the academy, I recently won my first regional tournament!",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200", 
      ratingJump: "Regional Winner",
    },
    {
      id: 5,
      name: "Krarjun Gaud",
      role: "Parent of Student",
      content: "The coaches understand how to work with young children. My son looks forward to every lesson and has developed excellent concentration.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200", 
      ratingJump: "Young Talent",
    },
    {
      id: 6,
      name: "Chandu Shekhar",
      role: "Student",
      content: "Never thought I could learn chess, but the instructors proved me wrong. It has become my favorite hobby and mental exercise.",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200", 
      ratingJump: "Mastery Path",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white via-slate-50/50 to-white relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-blue-50 rounded-full blur-[120px] opacity-60 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-emerald-50 rounded-full blur-[120px] opacity-50" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-18 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-900 text-[10px] font-black uppercase tracking-[0.2em]">
            <MessageCircle className="w-3.5 h-3.5 text-amber-600" />
            <span>Player & Parent Testimonials</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-black text-slate-950 tracking-tight leading-tight">
            Champions Made at <br />
            <span className="text-[#0b3272]">Telangana</span> <span className="text-[#0e8743]">Chess Centre</span>
          </h2>
          
          <p className="text-base sm:text-lg text-slate-600 font-medium leading-relaxed max-w-2xl mx-auto">
            Discover how hundreds of young talents and tournament competitors transformed their thinking and achieved podium finishes.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="relative group bg-white border border-slate-100 rounded-[2.5rem] p-8 sm:p-9 shadow-xl shadow-slate-100 hover:shadow-2xl hover:shadow-blue-950/10 transition-all duration-500 hover:-translate-y-2.5 flex flex-col justify-between"
            >
              {/* Visual Quote Decoration */}
              <Quote className="absolute top-8 right-8 w-10 h-10 text-blue-100 group-hover:text-amber-200 transition-colors" />

              <div className="relative z-10">
                {/* 5-Star Rating & Rating Jump Badge */}
                <div className="flex items-center justify-between gap-2 mb-6">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-wider text-[#0e8743] bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-100">
                    {testimonial.ratingJump}
                  </span>
                </div>

                {/* Review Content */}
                <p className="text-slate-700 font-medium text-sm sm:text-base leading-relaxed mb-8">
                  &quot;{testimonial.content}&quot;
                </p>
              </div>

              {/* User Profile Footer */}
              <div className="flex items-center gap-3.5 pt-6 border-t border-slate-100">
                <div className="relative w-12 h-12 rounded-2xl overflow-hidden border-2 border-slate-100 shadow-sm group-hover:border-[#0b3272] transition-colors bg-slate-100 shrink-0">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-black text-slate-950 text-sm leading-tight mb-1">{testimonial.name}</h4>
                  <p className="text-[11px] text-[#0b3272] font-extrabold uppercase tracking-wide">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Impact Banner */}
        <div className="bg-gradient-to-r from-[#082352] via-[#0b3272] to-[#041a3e] rounded-[3rem] p-8 sm:p-14 relative overflow-hidden shadow-2xl text-white border border-blue-800">
          
          <div className="relative z-10 flex flex-col lg:flex-row justify-between items-center gap-8 text-center lg:text-left">
            <div className="space-y-2">
              <span className="text-[10px] font-black uppercase tracking-widest text-amber-400 bg-amber-400/15 px-3 py-1 rounded-full border border-amber-400/30">
                Begin Your Championship Journey
              </span>
              <h3 className="text-3xl md:text-5xl font-black text-white tracking-tight">
                Ready to make your Grandmaster move?
              </h3>
              <p className="text-slate-300 font-medium text-sm sm:text-base max-w-lg">
                Join our elite community and train directly with FIDE-rated masters today.
              </p>
            </div>
            
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link href="/contact">
                <button className="px-7 py-4 rounded-2xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-slate-950 font-black text-xs uppercase tracking-wider shadow-lg shadow-amber-500/25 transition-all active:scale-95 cursor-pointer">
                  Book Free Assessment
                </button>
              </Link>
              <a href="tel:+919864646481">
                <button className="px-6 py-4 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-wider border border-white/20 transition-all">
                  Call: +91 9864646481
                </button>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
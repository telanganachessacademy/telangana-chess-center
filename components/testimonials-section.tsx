"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote, MessageCircle, CheckCircle2, ChevronRight } from "lucide-react";
import Image from "next/image";

export function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      name: "Jyothi Yadav",
      role: "Intermediate Player",
      content: "My daughter has improved tremendously since joining. The instructors are patient, knowledgeable, and make learning chess fun and engaging.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200", 
    },
    {
      id: 2,
      name: "Khilend Sahu",
      role: "Adult Beginner",
      content: "I started as a complete beginner. The structured curriculum and personalized attention helped me compete in local tournaments within months.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200", 
    },
    {
      id: 3,
      name: "Arjun Biru",
      role: "Intermediate Player",
      content: "The online coaching sessions are fantastic! I learn from expert coaches from home. My rating increased by 300 points in just 6 months.",
      image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=200", 
    },
    {
      id: 4,
      name: "Dandu Ravi",
      role: "Tournament Player",
      content: "The focus on tactical and strategic understanding elevated my game. Thanks to the academy, I recently won my first regional tournament!",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200", 
    },
    {
      id: 5,
      name: "Krarjun Gaud",
      role: "Parent of Student",
      content: "The coaches understand how to work with young children. My son looks forward to every lesson and has developed excellent concentration.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200", 
    },
    {
      id: 6,
      name: "Chandu Shekhar",
      role: "Student",
      content: "Never thought I could learn chess, but the instructors proved me wrong. It has become my favorite hobby and mental exercise.",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200", 
    },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      
      {/* --- Aesthetic Background Decor --- */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-emerald-50 rounded-full blur-[120px] opacity-60 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-50 rounded-full blur-[100px] opacity-50" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:40px_40px] opacity-30" />
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* --- Header Section --- */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-[10px] font-black uppercase tracking-[0.2em]">
            <MessageCircle className="w-3.5 h-3.5" />
            <span>Success Stories</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-black text-slate-900 tracking-tight leading-none">
            Stories from the <br />
            <span className="text-emerald-600">Academy Board</span>
          </h2>
          
          <p className="text-lg text-slate-500 font-medium leading-relaxed max-w-2xl mx-auto">
            Join hundreds of satisfied students and parents who have transformed their strategic thinking with Telangana Chess Academy.
          </p>
        </div>

        {/* --- Testimonials Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-24">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="relative group bg-white border border-slate-100 rounded-[2.5rem] p-10 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-emerald-100/50 transition-all duration-500 hover:-translate-y-3"
            >
                {/* Visual Quote Decoration */}
                <Quote className="absolute top-10 right-10 w-12 h-12 text-emerald-50 opacity-50 group-hover:text-emerald-100 group-hover:scale-110 transition-all" />

                <div className="relative z-10 flex flex-col h-full">
                    {/* 5-Star Rating */}
                    <div className="flex gap-1 mb-8">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>

                    {/* Review Content */}
                    <p className="text-slate-600 font-medium text-lg leading-relaxed mb-10 flex-grow">
                      &quot;{testimonial.content}&quot;
                    </p>

                    {/* User Profile Footer */}
                    <div className="flex items-center gap-4 pt-8 border-t border-slate-50">
                      <div className="relative w-14 h-14 rounded-2xl overflow-hidden border-2 border-white shadow-md group-hover:border-emerald-500 transition-colors">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-black text-slate-900 text-sm leading-none mb-1.5">{testimonial.name}</h4>
                        <p className="text-[10px] text-emerald-600 font-black uppercase tracking-widest">{testimonial.role}</p>
                      </div>
                    </div>
                </div>
            </div>
          ))}
        </div>

        {/* --- Bottom Multi-Colored Impact Bar --- */}
        <div className="bg-slate-900 rounded-[3rem] p-10 md:p-16 relative overflow-hidden shadow-2xl">
          {/* Subtle Dynamic Light inside the dark bar */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none translate-x-1/2 -translate-y-1/2" />
          
          <div className="relative z-10 flex flex-col lg:flex-row justify-between items-center gap-12 text-center lg:text-left">
            <div className="space-y-3">
              <h3 className="text-3xl md:text-4xl font-black text-white tracking-tight">Ready to start your story?</h3>
              <p className="text-slate-400 font-medium text-lg max-w-md">Join a championship community and master the game today.</p>
            </div>
            
            {/* Multi-colored buttons/stats as requested */}
            <div className="flex flex-wrap justify-center gap-12 lg:gap-20">
              <div className="flex flex-col items-center lg:items-start group">
                <span className="text-4xl font-black text-white mb-2 group-hover:text-blue-400 transition-colors tracking-tighter">500+</span>
                <span className="text-[10px] text-slate-500 font-black uppercase tracking-[0.2em]">Active Students</span>
              </div>
              <div className="flex flex-col items-center lg:items-start group">
                <span className="text-4xl font-black text-white mb-2 group-hover:text-emerald-400 transition-colors tracking-tighter">98%</span>
                <span className="text-[10px] text-slate-500 font-black uppercase tracking-[0.2em]">Success Rate</span>
              </div>
              <div className="flex flex-col items-center lg:items-start group">
                <span className="text-4xl font-black text-white mb-2 group-hover:text-orange-400 transition-colors tracking-tighter">50+</span>
                <span className="text-[10px] text-slate-500 font-black uppercase tracking-[0.2em]">Annual Trophies</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
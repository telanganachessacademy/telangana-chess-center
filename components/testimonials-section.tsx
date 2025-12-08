"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote, MessageCircle, CheckCircle2 } from "lucide-react";
import Image from "next/image";

export function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      name: "Jyothi Yadav",
      role: "Intermediate Player",
      content: "My daughter has improved tremendously since joining. The instructors are patient, knowledgeable, and make learning chess fun and engaging.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200", // Female portrait
    },
    {
      id: 2,
      name: "Khilend Sahu",
      role: "Adult Beginner",
      content: "I started as a complete beginner. The structured curriculum and personalized attention helped me compete in local tournaments within months.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200", // Male portrait
    },
    {
      id: 3,
      name: "Arjun Biru",
      role: "Intermediate Player",
      content: "The online coaching sessions are fantastic! I learn from expert coaches from home. My rating increased by 300 points in just 6 months.",
      image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=200", // Young male
    },
    {
      id: 4,
      name: "Dandu Ravi",
      role: "Tournament Player",
      content: "The focus on tactical and strategic understanding elevated my game. Thanks to the academy, I recently won my first regional tournament!",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200", // Male
    },
    {
      id: 5,
      name: "Krarjun Gaud",
      role: "Parent of Student",
      content: "The coaches understand how to work with young children. My son looks forward to every lesson and has developed excellent concentration.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200", // Older male
    },
    {
      id: 6,
      name: "Chandu Shekhar",
      role: "Student",
      content: "Never thought I could learn chess, but the instructors proved me wrong. It has become my favorite hobby and mental exercise.",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200", // Female
    },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] opacity-60 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-wider mb-4 border border-blue-100">
            <MessageCircle className="w-3 h-3" />
            <span>Community Feedback</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Stories from the <span className="text-blue-600">Board</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Join hundreds of satisfied students and parents who have transformed their strategic thinking with Bharat Chess School.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.id}
              className="bg-white border border-slate-100 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-blue-900/5 hover:-translate-y-1 transition-all duration-300 rounded-3xl overflow-visible h-full flex flex-col"
            >
              <CardContent className="p-8 flex flex-col h-full relative">
                
                {/* Large Quote Icon Background */}
                <Quote className="absolute top-6 right-6 w-12 h-12 text-blue-100/50 rotate-180" />

                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-orange-400 text-orange-400" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-slate-600 leading-relaxed mb-8 relative z-10 flex-grow">
                  "{testimonial.content}"
                </p>

                {/* User Profile */}
                <div className="flex items-center gap-4 mt-auto pt-6 border-t border-slate-50">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-md">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">{testimonial.name}</h4>
                    <p className="text-xs text-blue-600 font-medium uppercase tracking-wide">{testimonial.role}</p>
                  </div>
                </div>

              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom Impact Bar */}
        <div className="bg-slate-900 rounded-3xl p-8 md:p-12 relative overflow-hidden">
          {/* Abstract Glows */}
          <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-blue-600/20 rounded-full blur-[80px] pointer-events-none"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">Ready to write your success story?</h3>
              <p className="text-slate-400">Join a community of champions today.</p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-8 md:gap-16">
              <div className="flex flex-col items-center md:items-start">
                <span className="text-3xl font-bold text-white mb-1">500+</span>
                <span className="text-xs text-slate-400 uppercase tracking-wider font-medium">Happy Students</span>
              </div>
              <div className="flex flex-col items-center md:items-start">
                <span className="text-3xl font-bold text-blue-400 mb-1">98%</span>
                <span className="text-xs text-slate-400 uppercase tracking-wider font-medium">Satisfaction Rate</span>
              </div>
              <div className="flex flex-col items-center md:items-start">
                <span className="text-3xl font-bold text-orange-500 mb-1">50+</span>
                <span className="text-xs text-slate-400 uppercase tracking-wider font-medium">Champions Made</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
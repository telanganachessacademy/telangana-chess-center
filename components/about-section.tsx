"use client";

import { Card } from "@/components/ui/card";
import { CheckCircle, Target, Users, Award, ExternalLink, Globe, Lock, ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function AboutSection() {
  const features = [
    {
      icon: Target,
      title: "Elite Instruction",
      description: "Train directly under FIDE-rated coaches who bring decades of competitive experience.",
      color: "blue"
    },
    {
      icon: Users,
      title: "Safe Environment",
      description: "A secure, encouraging space where students can focus entirely on mental growth.",
      color: "orange"
    },
    {
      icon: Award,
      title: "Champion's Path",
      description: "Structured roadmap from local district tournaments to international FIDE ratings.",
      color: "purple"
    },
    {
      icon: CheckCircle,
      title: "Proven Methodology",
      description: "Curriculum refined over years, blending classic theory with modern engine analysis.",
      color: "green"
    },
  ];

  const institutes = [
    { name: "Bharat Chess Academy", url: "https://www.bharatchessacademy.com" },
    { name: "Hyderabad Chess Institute", url: "https://www.hyderabadchessinstitute.com" },
  ];

  return (
    <section id="about" className="py-24 bg-white overflow-hidden relative">
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50 -skew-x-12 translate-x-32 pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        
        {/* --- PART 1: VISION & INSTITUTES --- */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          
          {/* Left: Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-wider mb-6">
              <Globe className="w-3 h-3" />
              <span>Global Standards</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              Reimagining <br/><span className="text-blue-600">Chess Education</span>
            </h2>
            
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Founded with the desire to transform traditional learning. We don't just teach moves; we build the strong mental foundation required for future success in life and on the board.
            </p>

            {/* Network Links */}
            <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6">
              <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4">Our Institutions</h4>
              <div className="space-y-3">
                {institutes.map((inst, idx) => (
                  <Link 
                    key={idx} 
                    href={inst.url}
                    target="_blank" 
                    className="flex items-center justify-between group p-3 bg-white rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all"
                  >
                    <span className="font-semibold text-slate-700 group-hover:text-blue-700">{inst.name}</span>
                    <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-blue-500" />
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Image Composition */}
          <div className="relative">
            {/* Main Image */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-[8px] border-white z-10">
              <Image
                src="https://images.unsplash.com/photo-1580541832626-2a7131ee809f?auto=format&fit=crop&q=80&w=800"
                alt="Instructor teaching student"
                width={800}
                height={600}
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <p className="font-bold text-xl">FIDE Certified Training</p>
                <p className="text-sm text-slate-200">Where masters are made.</p>
              </div>
            </div>

            {/* Decorative Back Box */}
            <div className="absolute -bottom-6 -right-6 w-full h-full bg-blue-100 rounded-3xl -z-10"></div>
          </div>
        </div>


        {/* --- PART 2: STUDENT PORTAL ACCESS (The "Process") --- */}
        <div className="mb-24">
          <div className="bg-slate-900 rounded-3xl overflow-hidden shadow-2xl relative">
            {/* Abstract bg shapes */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="grid lg:grid-cols-2">
              
              {/* Login Instructions */}
              <div className="p-8 md:p-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-orange-500 rounded-lg">
                    <Lock className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white">Student Portal Access</h3>
                </div>
                
                <p className="text-slate-400 mb-8">
                  Existing students can access live classes and resources instantly. Follow these steps to log in to our secure coaching platform.
                </p>

                <div className="space-y-4">
                  {[
                    "Visit bharatchessacademy.com",
                    "Click 'Online Coaching' button",
                    "Enter your credentials below"
                  ].map((step, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <div className="w-8 h-8 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-blue-400 font-bold text-sm">
                        {i + 1}
                      </div>
                      <span className="text-slate-300 font-medium">{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* The "Credential Card" Visual */}
              <div className="bg-slate-800/50 border-l border-slate-700 p-8 md:p-12 flex flex-col justify-center">
                <div className="bg-black/40 rounded-xl border border-slate-700 p-6 backdrop-blur-sm">
                  <div className="flex items-center justify-between mb-4 border-b border-slate-700 pb-4">
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Demo Credentials</span>
                    <div className="flex gap-1.5">
                      <div className="w-2 h-2 rounded-full bg-red-500"></div>
                      <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                      <div className="w-2 h-2 rounded-full bg-green-500"></div>
                    </div>
                  </div>
                  
                  <div className="space-y-4 font-mono text-sm">
                    <div>
                      <span className="text-slate-500 block mb-1 text-xs">Username</span>
                      <div className="bg-slate-900 rounded p-3 text-green-400 border border-slate-800 flex justify-between">
                        <span>tca</span>
                        <CheckCircle className="w-4 h-4 opacity-50" />
                      </div>
                    </div>
                    <div>
                      <span className="text-slate-500 block mb-1 text-xs">Password</span>
                      <div className="bg-slate-900 rounded p-3 text-green-400 border border-slate-800 flex justify-between">
                        <span>0123</span>
                        <CheckCircle className="w-4 h-4 opacity-50" />
                      </div>
                    </div>
                  </div>

                  <Link href="https://coaching.telanganachessacademy.com/" target="_blank">
                    <button className="w-full mt-6 bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 rounded-lg transition-colors flex items-center justify-center gap-2">
                      Login Now <ChevronRight className="w-4 h-4" />
                    </button>
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </div>


        {/* --- PART 3: FEATURES GRID --- */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Why Choose Us?</h2>
          <p className="text-slate-500 max-w-2xl mx-auto">We combine passion with professionalism to create the ultimate chess ecosystem.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            // Dynamic styling
            const iconColor = 
              feature.color === 'blue' ? 'text-blue-600 bg-blue-50' : 
              feature.color === 'orange' ? 'text-orange-600 bg-orange-50' :
              feature.color === 'purple' ? 'text-purple-600 bg-purple-50' :
              'text-green-600 bg-green-50';

            return (
              <Card
                key={index}
                className="p-6 text-left hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-slate-100"
              >
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${iconColor}`}>
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{feature.description}</p>
              </Card>
            );
          })}
        </div>

      </div>
    </section>
  );
}
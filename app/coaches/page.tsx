"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Trophy,
  Star,
  Users,
  Calendar,
  Medal,
  GraduationCap,
  ArrowRight
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function CoachesPage() {
  const coaches = [
    {
      name: "Tejavath Naresh",
      title: "Head Coach & Founder",
      image: "/naresh.jpg",
      specialization: ["Opening Theory", "Endgame Mastery", "Tournament Preparation"],
      achievements: ["FIDE Arbiter", "FIDE Rated Player", "Chess Coach"],
      experience: "15+ Years",
      students: "200+",
      bio: "Tejavath Naresh is the visionary founder of our academy with over 15 years of coaching excellence.",
      color: "from-[#2B6CB0] to-[#9F7AEA]",
    },
    {
      name: "Tejavath Aruna",
      title: "Senior Coach",
      rating: "2450",
      image: "/coach.png",
      specialization: ["Tactical Training", "Youth Development", "Women's Chess"],
      achievements: ["FIDE Rated Player", "Chess Coach"],
      experience: "12+ Years",
      students: "150+",
      bio: "Tejavath Aruna specializes in developing young talent and has coached multiple national champions.",
      color: "from-[#48BB78] to-[#38A169]",
    },
    {
      name: "Ranghanathan K S",
      title: "Junior Coach",
      rating: "2400",
      image: "/coach.png",
      specialization: ["Beginner Training", "School Programs", "Online Coaching"],
      achievements: ["International FIDE Rated"],
      experience: "8+ Years",
      students: "100+",
      bio: "Ranghanathan K S brings innovative teaching methods and excels in online chess education.",
      color: "from-[#9F7AEA] to-[#D53F8C]",
    },
    {
      name: "Kethavath Lokesh",
      title: "Assistant Coach",
      rating: "2300",
      image: "/coach.png",
      specialization: ["Puzzle Solving", "Pattern Recognition", "Rapid Chess"],
      achievements: ["International FIDE Rated"],
      experience: "6+ Years",
      students: "80+",
      bio: "Kethavath Lokesh is known for her expertise in tactical training and rapid chess improvement.",
      color: "from-[#FF69B4] to-[#D53F8C]",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      
      {/* --- HERO SECTION --- */}
      <section className="relative pt-32 pb-20 bg-[#020617] overflow-hidden">
        {/* Abstract Background */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-orange-600/10 rounded-full blur-[100px] pointer-events-none -translate-x-1/3 translate-y-1/3"></div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <Badge className="mb-6 bg-blue-900/50 text-blue-300 border-blue-800 px-4 py-1.5 text-sm uppercase tracking-wider">
            World-Class Faculty
          </Badge>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white tracking-tight">
            Meet Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-orange-400">Mentors</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Grandmasters, International Masters, and FIDE-certified experts dedicated to shaping the next generation of champions.
          </p>
        </div>
      </section>

      {/* --- COACHES GRID --- */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {coaches.map((coach, index) => {
              // Dynamic Colors
              const themeColor = 
                coach.color === 'blue' ? 'bg-blue-600' :
                coach.color === 'purple' ? 'bg-purple-600' :
                coach.color === 'orange' ? 'bg-orange-600' : 'bg-green-600';
              
              const badgeColor = 
                coach.color === 'blue' ? 'bg-blue-50 text-blue-700 border-blue-200' :
                coach.color === 'purple' ? 'bg-purple-50 text-purple-700 border-purple-200' :
                coach.color === 'orange' ? 'bg-orange-50 text-orange-700 border-orange-200' : 'bg-green-50 text-green-700 border-green-200';

              return (
                <div key={index} className="group bg-white rounded-[2rem] border border-slate-100 shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 flex flex-col md:flex-row h-full">
                  
                  {/* Image Column */}
                  <div className="relative md:w-2/5 h-72 md:h-auto overflow-hidden">
                    <Image
                      src={coach.image}
                      alt={coach.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent md:bg-gradient-to-r"></div>
                    
                    {/* Floating Rating Badge */}
                    <div className="absolute bottom-4 left-4 bg-white/10 backdrop-blur-md border border-white/20 text-white px-3 py-1 rounded-lg text-sm font-bold flex items-center gap-1.5">
                      <Trophy className="w-3.5 h-3.5 text-yellow-400" />
                      <span>{coach.rating} ELO</span>
                    </div>
                  </div>

                  {/* Content Column */}
                  <div className="p-8 md:w-3/5 flex flex-col">
                    <div className="mb-4">
                      <div className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-white mb-2 ${themeColor}`}>
                        {coach.role}
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900">{coach.name}</h3>
                    </div>

                    <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-grow">
                      {coach.bio}
                    </p>

                    {/* Stats Row */}
                    <div className="grid grid-cols-2 gap-4 mb-6 py-4 border-t border-b border-slate-50">
                      <div className="flex items-center gap-2">
                        <div className="p-2 rounded-lg bg-slate-50 text-slate-400">
                          <Calendar className="w-4 h-4" />
                        </div>
                        <div>
                          <p className="text-[10px] uppercase text-slate-400 font-bold tracking-wider">Experience</p>
                          <p className="text-sm font-bold text-slate-900">{coach.experience}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                         <div className="p-2 rounded-lg bg-slate-50 text-slate-400">
                          <Users className="w-4 h-4" />
                        </div>
                        <div>
                          <p className="text-[10px] uppercase text-slate-400 font-bold tracking-wider">Students</p>
                          <p className="text-sm font-bold text-slate-900">{coach.students}</p>
                        </div>
                      </div>
                    </div>

                    {/* Specialization Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {coach.specialization.map((spec, i) => (
                        <span key={i} className={`text-[10px] font-bold px-2 py-1 rounded border ${badgeColor}`}>
                          {spec}
                        </span>
                      ))}
                    </div>

                    {/* Achievements List */}
                    <ul className="space-y-1 mb-2">
                      {coach.achievements.map((ach, i) => (
                        <li key={i} className="flex items-center gap-2 text-xs text-slate-500 font-medium">
                          <Medal className="w-3.5 h-3.5 text-yellow-500" />
                          {ach}
                        </li>
                      ))}
                    </ul>

                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* --- WHY CHOOSE US --- */}
      <section className="py-20 bg-slate-900 relative overflow-hidden">
        {/* Decor */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
           <div className="absolute top-[-10%] right-[-5%] w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[80px]"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">The Bharat Advantage</h2>
            <p className="text-slate-400">Why thousands of students trust their chess journey with our faculty.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Star,
                title: "Proven Methodology",
                desc: "Our curriculum is designed by GMs to ensure steady progress from beginner to master level.",
                color: "text-yellow-400"
              },
              {
                icon: Users,
                title: "Personalized Mentorship",
                desc: "We don't believe in one-size-fits-all. Every student gets a tailored roadmap based on their playstyle.",
                color: "text-blue-400"
              },
              {
                icon: Trophy,
                title: "Tournament Focus",
                desc: "Regular internal leagues and preparation for official FIDE tournaments to build competitive spirit.",
                color: "text-orange-400"
              },
            ].map((feature, i) => (
              <Card key={i} className="bg-slate-800/50 border-slate-700 backdrop-blur-sm p-8 hover:bg-slate-800 transition-colors">
                <div className="mb-6 bg-slate-900/50 w-16 h-16 rounded-2xl flex items-center justify-center border border-slate-700 shadow-inner">
                  <feature.icon className={`w-8 h-8 ${feature.color}`} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{feature.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* --- CTA --- */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <div className="bg-gradient-to-br from-blue-50 to-orange-50 rounded-[2.5rem] p-12 md:p-16 border border-blue-100">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Train with the Best</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-8">
              Don't just play chess, master it. Book a free 1-on-1 assessment with our head coach today.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
               <Link href="/contact">
                <Button className="h-14 px-8 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-lg shadow-lg shadow-orange-900/20">
                  Book Free Assessment
                </Button>
               </Link>
               <Link href="/courses">
                <Button variant="outline" className="h-14 px-8 rounded-xl border-slate-300 text-slate-600 hover:text-blue-600 hover:border-blue-600 font-bold text-lg">
                  Explore Courses
                </Button>
               </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
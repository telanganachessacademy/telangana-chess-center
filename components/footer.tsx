"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  ExternalLink,
  ChevronRight,
  Globe,
  ShieldCheck,
  Award,
  Crown,
  Sparkles
} from "lucide-react";

export function Footer() {
  const socialLinks = [
    { icon: Facebook, href: "https://www.facebook.com/telanganachessacademy", label: "Facebook", bgColor: "hover:bg-[#1877F2]" },
    { icon: Twitter, href: "#", label: "Twitter", bgColor: "hover:bg-[#1DA1F2]" },
    { icon: Instagram, href: "#", label: "Instagram", bgColor: "hover:bg-[#E4405F]" },
    { icon: Youtube, href: "#", label: "YouTube", bgColor: "hover:bg-[#FF0000]" },
  ];

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Our Courses", href: "/courses" },
    { name: "Meet Coaches", href: "/coaches" },
    { name: "Tournament Events", href: "/events" },
    { name: "Photo Gallery", href: "/gallery" },
    { name: "Chess Blogs", href: "/blogs" },
    { name: "Contact & Admissions", href: "/contact" },
  ];

  const networkLinks = [
    { name: "Telangana Chess Centre", href: "/" },
    { name: "Live Student Classroom", href: "https://app.chesslang.com/app" },
    { name: "Bharat Chess Academy", href: "https://www.bharatchessacademy.com" },
    { name: "Hyderabad Chess Institute", href: "https://www.hyderabadchessinstitute.com" },
  ];

  return (
    <footer className="bg-slate-950 text-slate-300 font-sans relative overflow-hidden border-t border-slate-900">
      
      {/* Decorative Brand Color Top Bar (Royal Blue + Emerald Green + Gold) */}
      <div className="h-1.5 w-full bg-gradient-to-r from-[#0b3272] via-amber-400 to-[#0e8743]"></div>

      {/* Aesthetic Background Glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[450px] h-[450px] bg-blue-900/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-emerald-900/10 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 pt-18 pb-10 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-10">
          
          {/* Column 1: Brand Info */}
          <div className="lg:col-span-4 space-y-6">
            <Link href="/" className="flex items-center gap-3.5 group">
              <div className="relative w-12 h-12 rounded-full overflow-hidden bg-white border-2 border-amber-400 p-0.5 shadow-lg group-hover:scale-105 transition-transform shrink-0">
                <Image
                  src="/logo.png"
                  alt="Telangana Chess Centre"
                  width={48}
                  height={48}
                  className="object-contain w-full h-full rounded-full"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-black text-xl text-white tracking-tight leading-tight">
                  TELANGANA <span className="text-amber-400">CHESS</span> <span className="text-emerald-400">CENTRE</span>
                </span>
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400">
                  FIDE Certified Academy
                </span>
              </div>
            </Link>
            
            <p className="text-slate-400 font-medium text-sm leading-relaxed max-w-sm">
              The premier institution for strategic excellence and Grandmaster preparation in Telangana. We empower minds by blending classical theory with modern engine tactics.
            </p>

            {/* Social Buttons */}
            <div className="flex gap-2.5 pt-2">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 bg-slate-900 border border-slate-800 rounded-xl flex items-center justify-center transition-all duration-300 group ${social.bgColor} hover:text-white hover:-translate-y-1`}
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-3">
            <h4 className="font-black text-white text-xs uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
              <span>Explore Portal</span>
              <span className="h-0.5 w-6 bg-amber-400 rounded-full" />
            </h4>
            <ul className="grid grid-cols-2 gap-y-3 gap-x-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="group flex items-center text-xs sm:text-sm font-semibold text-slate-400 hover:text-amber-400 transition-colors"
                  >
                    <ChevronRight className="w-3 h-3 mr-1 text-slate-600 group-hover:text-amber-400 transition-transform group-hover:translate-x-0.5" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div className="lg:col-span-5 space-y-4">
            <h4 className="font-black text-white text-xs uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
              <span>Official Contacts</span>
              <span className="h-0.5 w-6 bg-emerald-400 rounded-full" />
            </h4>
            
            <div className="grid sm:grid-cols-2 gap-3.5">
              <a 
                href="tel:+919864646481" 
                className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-emerald-500/50 transition-all group"
              >
                <div className="w-10 h-10 bg-emerald-950/80 border border-emerald-800/60 rounded-xl flex items-center justify-center text-emerald-400 group-hover:scale-105 transition-transform shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <span className="text-[10px] text-slate-500 font-extrabold uppercase tracking-widest block">Direct Call & WhatsApp</span>
                  <span className="text-xs sm:text-sm font-black text-white truncate block">+91 9864646481</span>
                </div>
              </a>

              <a 
                href="mailto:telanganachesscentre@gmail.com" 
                className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-blue-500/50 transition-all group"
              >
                <div className="w-10 h-10 bg-blue-950/80 border border-blue-800/60 rounded-xl flex items-center justify-center text-blue-400 group-hover:scale-105 transition-transform shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <span className="text-[10px] text-slate-500 font-extrabold uppercase tracking-widest block">Official Email</span>
                  <span className="text-xs sm:text-sm font-black text-white truncate block">telanganachesscentre@gmail.com</span>
                </div>
              </a>
            </div>

            <div className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-slate-900/90 border border-slate-800">
              <div className="w-10 h-10 bg-amber-950/80 border border-amber-800/60 rounded-xl flex items-center justify-center text-amber-400 shrink-0">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] text-slate-500 font-extrabold uppercase tracking-widest block">Academy Headquarter</span>
                <span className="text-xs sm:text-sm font-bold text-white block">Kothapet, Hyderabad, Telangana 500035</span>
              </div>
            </div>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="border-t border-slate-900 mt-16 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
            <p className="text-slate-500 text-xs font-semibold">
              © {new Date().getFullYear()} <span className="text-white font-bold">Telangana Chess Centre</span>. All rights reserved. Empowering strategic minds.
            </p>
            
            <div className="flex items-center gap-6">
              <Link href="/terms" className="text-xs font-semibold text-slate-500 hover:text-white transition-colors">
                Terms & Conditions
              </Link>
              <Link href="/contact" className="text-xs font-semibold text-slate-500 hover:text-white transition-colors">
                Support
              </Link>
              <div className="flex items-center gap-1.5 px-2.5 py-1 bg-slate-900 rounded-lg border border-slate-800 text-[10px] font-bold text-emerald-400">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Verified Portal</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
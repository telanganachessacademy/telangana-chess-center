"use client";

import { useState, useEffect } from "react";
import { Menu, X, Phone, Mail, ExternalLink, ChevronRight, Crown, Sparkles, Trophy } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

interface NavItem {
  name: string;
  href: string;
  isExternal?: boolean;
}

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems: NavItem[] = [
    { name: "HOME", href: "/" },
    {
      name: "CLASSROOM",
      href: "https://app.chesslang.com/app",
      isExternal: true,
    },
    { name: "EVENTS", href: "/events" },
    { name: "COURSES", href: "/courses" },
    { name: "OUR COACHES", href: "/coaches" },
    { name: "GALLERY", href: "/gallery" },
    { name: "BLOGS", href: "/blogs" },
    { name: "CONTACT", href: "/contact" },
  ];

  return (
    <header 
      className={`fixed w-full z-50 top-0 left-0 transition-all duration-300 ${
        isScrolled 
          ? "bg-white/95 backdrop-blur-md shadow-lg shadow-blue-950/5 border-b border-blue-100/60 py-2.5" 
          : "bg-gradient-to-b from-white/95 via-white/80 to-transparent backdrop-blur-sm py-4"
      }`}
    >
      {/* --- TOP BAR WITH TCC BRANDING --- */}
      <div className={`overflow-hidden transition-all duration-300 ${isScrolled ? "h-0 opacity-0 mb-0" : "h-auto opacity-100 mb-3"}`}>
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 flex justify-between items-center text-xs font-semibold tracking-wide text-slate-600">
          <div className="flex items-center gap-4 sm:gap-6 flex-wrap">
            <a 
              href="tel:+919864646481" 
              className="flex items-center gap-1.5 hover:text-blue-900 transition-colors font-bold text-slate-800"
            >
              <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center">
                <Phone className="w-3 h-3 text-emerald-700" />
              </span>
              <span>+91 9864646481</span>
            </a>
            <a 
              href="mailto:telanganachesscentre@gmail.com" 
              className="hidden sm:flex items-center gap-1.5 hover:text-blue-900 transition-colors text-slate-700"
            >
              <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-800 flex items-center justify-center">
                <Mail className="w-3 h-3 text-blue-800" />
              </span>
              <span>telanganachesscentre@gmail.com</span>
            </a>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5 font-bold uppercase text-[10px] text-amber-800 bg-amber-50/90 px-3 py-1 rounded-full border border-amber-200/80 shadow-xs">
              <Crown className="w-3.5 h-3.5 text-amber-600" />
              <span>FIDE Certified Centre</span>
            </div>
            <div className="hidden md:flex items-center gap-1 text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-100">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
              <span>Admissions Open</span>
            </div>
          </div>
        </div>
      </div>

      {/* --- MAIN NAVIGATION --- */}
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 flex items-center justify-between">
        
        {/* Logo Section */}
        <Link href="/" className="flex items-center gap-3 group shrink-0">
          <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-full overflow-hidden bg-white shadow-md border-2 border-amber-400 p-0.5 group-hover:scale-105 transition-transform">
            <Image
              src="/logo.png"
              alt="Telangana Chess Centre Logo"
              width={48}
              height={48}
              className="object-contain w-full h-full rounded-full"
              priority
            />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="text-lg sm:text-2xl font-black text-[#0b3272] tracking-tight group-hover:text-blue-800 transition-colors whitespace-nowrap">
                TELANGANA <span className="text-amber-500">CHESS</span> <span className="text-[#0e8743]">CENTRE</span>
              </span>
            </div>
            <span className="text-[9px] font-extrabold uppercase tracking-widest text-slate-500 -mt-0.5">
              Excellence • Strategy • Mastery
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return item.isExternal ? (
              <a
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-2 text-[12px] font-bold text-slate-700 hover:text-[#0b3272] hover:bg-blue-50/70 rounded-xl transition-all flex items-center gap-1"
              >
                {item.name}
                <ExternalLink className="w-3 h-3 opacity-50" />
              </a>
            ) : (
              <Link
                key={item.name}
                href={item.href}
                className={`px-3.5 py-2 text-[12px] font-bold rounded-xl transition-all ${
                  isActive
                    ? "text-[#0b3272] bg-blue-50 border border-blue-100 font-extrabold"
                    : "text-slate-700 hover:text-[#0b3272] hover:bg-blue-50/70"
                }`}
              >
                {item.name}
              </Link>
            );
          })}

        
        </nav>

        {/* Mobile Toggle */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden p-2 text-slate-900 bg-blue-50/80 border border-blue-100 rounded-xl hover:bg-[#0b3272] hover:text-white transition-all"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* --- MOBILE OVERLAY --- */}
      <div
        className={`fixed inset-0 bg-white/95 backdrop-blur-xl transition-all duration-300 lg:hidden pt-28 px-6 overflow-y-auto ${
          isMobileMenuOpen 
            ? "translate-y-0 opacity-100 z-40 pointer-events-auto" 
            : "-translate-y-full opacity-0 z-[-1] pointer-events-none"
        }`}
      >
        <div className="space-y-2.5 pb-12">
          <div className="p-4 bg-gradient-to-r from-blue-900 to-blue-950 text-white rounded-2xl mb-4 border border-blue-800 flex items-center gap-3">
            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-amber-400 shrink-0 bg-white">
              <Image src="/logo.png" alt="Logo" width={48} height={48} className="object-contain" />
            </div>
            <div>
              <p className="text-xs font-black tracking-wider text-amber-400 uppercase">Telangana Chess Centre</p>
              <p className="text-[11px] text-slate-200">telanganachesscentre@gmail.com</p>
              <p className="text-[11px] text-slate-200 font-bold">+91 9864646481</p>
            </div>
          </div>

          {navItems.map((item) => (
            item.isExternal ? (
              <a
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-between p-3.5 rounded-xl bg-slate-50 border border-slate-100 text-sm font-bold text-slate-800 hover:bg-blue-50"
              >
                <span>{item.name}</span>
                <ExternalLink className="w-4 h-4 text-slate-400" />
              </a>
            ) : (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`flex items-center justify-between p-3.5 rounded-xl text-sm font-bold border transition-colors ${
                  pathname === item.href
                    ? "bg-blue-50 text-[#0b3272] border-blue-200 font-extrabold"
                    : "bg-slate-50 text-slate-800 border-slate-100 hover:bg-blue-50"
                }`}
              >
                <span>{item.name}</span>
                <ChevronRight className="w-4 h-4 text-amber-500" />
              </Link>
            )
          ))}
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-4">
            <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
              <button className="w-full p-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-black uppercase tracking-wider text-xs shadow-md shadow-amber-500/20 flex items-center justify-center gap-2">
                <Sparkles className="w-4 h-4" /> Book Free Demo
              </button>
            </Link>
            <a href="tel:+919864646481" onClick={() => setIsMobileMenuOpen(false)}>
              <button className="w-full p-3.5 rounded-xl bg-[#0b3272] text-white font-black uppercase tracking-wider text-xs shadow-md flex items-center justify-center gap-2">
                <Phone className="w-4 h-4" /> Call +91 9864646481
              </button>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

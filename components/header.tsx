"use client";

import { useState, useEffect } from "react";
import { Menu, X, Phone, Mail, ExternalLink } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface NavItem {
  name: string;
  href: string;
  isButton?: boolean;
}

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems: NavItem[] = [
    { name: "Home", href: "/" },
    { name: "Online Coaching", href: "https://coaching.telanganachessacademy.com/" },
    { name: "Events", href: "https://pages.razorpay.com/pl_RimudLa05GzfHG/view" },
    { name: "Courses", href: "/courses" },
    { name: "Our Coaches", href: "/coaches" },
    { name: "Gallery", href: "/gallery" },
    { name: "Blogs", href: "/blogs" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className={`fixed w-full z-50 top-0 left-0 font-sans transition-all duration-300 ${isScrolled ? "bg-[#0B0F19]/90 backdrop-blur-md shadow-lg border-b border-slate-800" : "bg-transparent"}`}>
      
      {/* --- TOP BAR (Only visible when at top) --- */}
      <div className={`overflow-hidden transition-all duration-300 ${isScrolled ? "h-0 opacity-0" : "h-auto opacity-100 bg-[#0B0F19] border-b border-slate-800"}`}>
        <div className="container mx-auto max-w-7xl px-4 py-2 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-400">
          <div className="flex items-center gap-4">
            <a href="tel:+919864646481" className="flex items-center hover:text-emerald-400 transition-colors">
              <Phone className="w-3 h-3 mr-1.5" /> +91 9864646481
            </a>
            <span className="hidden sm:block text-slate-700">|</span>
            {/* UPDATED EMAIL */}
            <a href="mailto:telanganachessinstitute@gmail.com" className="flex items-center hover:text-emerald-400 transition-colors">
              <Mail className="w-3 h-3 mr-1.5" /> telanganachessinstitute@gmail.com
            </a>
          </div>
          <div className="hidden sm:block font-medium tracking-wide uppercase text-slate-500">
            Checkmate Your Limits
          </div>
        </div>
      </div>

      {/* --- MAIN NAVIGATION --- */}
      <div className="container mx-auto max-w-7xl px-4 py-3 sm:py-4 flex items-center justify-between">
        
        {/* Logo Section */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-lg overflow-hidden bg-white/5 border border-white/10 p-0.5">
            <Image
              src="/logo.jpg"
              alt="Telangana Chess Institute"
              width={50}
              height={50}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="flex flex-col leading-none">
            {/* UPDATED NAME */}
            <span className="text-lg sm:text-xl font-bold text-white tracking-tight group-hover:text-emerald-400 transition-colors">
              Telangana Chess Institute
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-1">
          {navItems.map((item) => {
            if (item.name === "Online Coaching" || item.name === "Events") {
              return (
                <Link key={item.name} href={item.href} target="_blank" className="ml-2">
                   <span className={`px-4 py-2 rounded-lg text-sm font-bold transition-all flex items-center gap-2 ${
                       item.name === "Online Coaching" 
                       ? "bg-emerald-600 text-white hover:bg-emerald-500 shadow-lg shadow-emerald-900/20" 
                       : "bg-slate-800 text-white hover:bg-slate-700 border border-slate-700"
                   }`}>
                      {item.name}
                      <ExternalLink className="w-3 h-3 opacity-70" />
                   </span>
                </Link>
              );
            }
            return (
              <Link
                key={item.name}
                href={item.href}
                className="px-3 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
              >
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden p-2 text-slate-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* --- MOBILE MENU OVERLAY --- */}
      <div 
        className={`fixed inset-x-0 top-[110px] bg-[#0B0F19] border-t border-slate-800 shadow-2xl transition-all duration-300 ease-in-out lg:hidden overflow-hidden ${
          isMobileMenuOpen ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="p-4 space-y-2 overflow-y-auto max-h-[70vh]">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : "_self"}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors flex items-center justify-between ${
                item.name === "Online Coaching" 
                  ? "bg-emerald-600 text-white hover:bg-emerald-500" 
                  : "text-slate-300 hover:bg-white/5 hover:text-white"
              }`}
            >
              <span>{item.name}</span>
              {item.href.startsWith("http") && <ExternalLink className="w-4 h-4 opacity-50" />}
            </Link>
          ))}
          
          <div className="pt-6 mt-6 border-t border-slate-800 grid grid-cols-2 gap-4">
             <a href="tel:+919864646481" className="flex flex-col items-center justify-center p-3 bg-slate-800 rounded-lg text-xs text-slate-400 hover:text-white hover:bg-slate-700">
                <Phone className="w-5 h-5 mb-1 text-emerald-500" />
                <span>Call Us</span>
             </a>
             <a href="mailto:telanganachessinstitute@gmail.com" className="flex flex-col items-center justify-center p-3 bg-slate-800 rounded-lg text-xs text-slate-400 hover:text-white hover:bg-slate-700">
                <Mail className="w-5 h-5 mb-1 text-emerald-500" />
                <span>Email Us</span>
             </a>
          </div>
        </div>
      </div>
    </header>
  );
}
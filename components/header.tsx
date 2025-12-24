"use client";

import { useState, useEffect } from "react";
import { Menu, X, Phone, Mail, ExternalLink, ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface NavItem {
  name: string;
  href: string;
  hasDropdown?: boolean;
  dropdownItems?: { name: string; href: string }[];
  isExternal?: boolean;
}

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // EXACT SEQUENCE AS REQUESTED
  const navItems: NavItem[] = [
    { name: "Home", href: "/" },
    {
      name: "ONLINE COACHING",
      href: "https://svc-ui-7.netlify.app/login",
      isExternal: true,
    },
    {
      name: "Events",
      href: "https://rzp.io/rzp/4OFIdi7",
      isExternal: true,
    },
    { name: "Courses", href: "/courses" },
    { name: "Our Coaches", href: "/coaches" },
    { name: "Gallery", href: "/gallery" },
    { name: "Blogs", href: "/blogs" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header 
      className={`fixed w-full z-50 top-0 left-0 transition-all duration-500 ${
        isScrolled 
          ? "bg-white/95 backdrop-blur-md shadow-md border-b border-emerald-100 py-3" 
          : "bg-transparent py-6"
      }`}
    >
      {/* --- TOP BAR --- */}
      <div className={`overflow-hidden transition-all duration-500 ${isScrolled ? "h-0 opacity-0" : "h-auto opacity-100 mb-4"}`}>
        <div className="container mx-auto max-w-7xl px-6 flex justify-between items-center text-[11px] font-bold tracking-wider text-slate-500">
          <div className="flex items-center gap-6">
            <a href="tel:+919864646481" className="flex items-center hover:text-emerald-600 transition-colors">
              <Phone className="w-3 h-3 text-emerald-500 mr-2" />
              +91 9864646481
            </a>
            <a href="mailto:telanganachessacademy@gmail.com" className="flex items-center hover:text-emerald-600 transition-colors">
              <Mail className="w-3 h-3 text-emerald-500 mr-2" />
              telanganachessacademy@gmail.com
            </a>
          </div>
          <div className="hidden md:flex items-center gap-2 font-black uppercase text-[10px] text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100">
             <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
             FIDE Certified Academy
          </div>
        </div>
      </div>

      {/* --- MAIN NAVIGATION --- */}
      <div className="container mx-auto max-w-7xl px-6 flex items-center justify-between">
        
        {/* Logo Section - ONE LINE BRANDING */}
        <Link href="/" className="flex items-center gap-3 group shrink-0">
          <div className="relative w-10 h-10 rounded-lg overflow-hidden bg-white shadow-md border border-slate-100 p-0.5">
            <Image
              src="/logo.jpeg"
              alt="Logo"
              width={40}
              height={40}
              className="object-cover w-full h-full"
            />
          </div>
          <span className="text-xl md:text-2xl font-black text-emerald-600 tracking-tighter whitespace-nowrap">
            Telangana Chess <span className="text-emerald-600">Academy</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) =>
  item.isExternal ? (
    <a
      key={item.name}
      href={item.href}
      target="_blank"
      rel="noopener noreferrer"
      className="px-3 py-2 text-[13px] font-bold text-slate-600 hover:text-emerald-600 transition-all flex items-center gap-1"
    >
      {item.name}
      <ExternalLink className="w-3 h-3 opacity-50" />
    </a>
  ) : (
    <Link
      key={item.name}
      href={item.href}
      className="px-3 py-2 text-[13px] font-bold text-slate-600 hover:text-emerald-600 transition-all"
    >
      {item.name}
    </Link>
  )
)}


          {/* Action Buttons
          <div className="flex items-center gap-3 ml-4">
            <Link href="/events" >
               <button className="px-5 py-2.5 rounded-xl text-[11px] font-black uppercase tracking-widest bg-slate-900 text-white hover:bg-slate-800 transition-all shadow-lg shadow-slate-200 flex items-center gap-2">
                  Tournaments
                  <ExternalLink className="w-3 h-3 opacity-50" />
               </button>
            </Link>
            
            <Link href="https://coaching.telanganachessacademy.com/" target="_blank">
               <button className="px-5 py-2.5 rounded-xl text-[11px] font-black uppercase tracking-widest bg-emerald-600 text-white hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-100 flex items-center gap-2">
                  Online Coaching
                  <ExternalLink className="w-3 h-3 opacity-50" />
               </button>
            </Link>
          </div> */}
        </nav>

        {/* Mobile Toggle */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden p-2 text-slate-900 bg-slate-100 rounded-lg hover:bg-emerald-600 hover:text-white transition-all"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* --- MOBILE OVERLAY --- */}
      <div 
        className={`fixed inset-0 bg-white z-[-1] transition-all duration-500 lg:hidden pt-32 px-6 ${
          isMobileMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        }`}
      >
        <div className="space-y-3">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center justify-between p-4 rounded-xl bg-slate-50 text-base font-bold text-slate-900"
            >
              {item.name}
              <ChevronRight className="w-4 h-4 text-emerald-500" />
            </Link>
          ))}
          
          <div className="grid grid-cols-1 gap-3 pt-4">
            <Link href="https://coaching.telanganachessacademy.com/" target="_blank">
               <button className="w-full p-4 rounded-xl bg-emerald-600 text-white font-black uppercase tracking-widest text-xs">
                  Online Coaching
               </button>
            </Link>
            <Link href="https://pages.razorpay.com/pl_RimudLa05GzfHG/view" target="_blank">
               <button className="w-full p-4 rounded-xl bg-slate-900 text-white font-black uppercase tracking-widest text-xs">
                  Events
               </button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

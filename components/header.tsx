"use client";

import { useState, useEffect } from "react";
import { ChevronDown, Menu, X, Phone, Mail, ExternalLink } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button"; // Assuming you have this, otherwise standard html button works

interface NavItem {
  name: string;
  href: string;
  hasDropdown?: boolean;
  dropdownItems?: { name: string; href: string }[];
  isButton?: boolean; // New property to style specific links as buttons
}

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Detect scroll to add shadow/shrink effect
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
    <header className="fixed w-full z-50 top-0 left-0 font-sans">
      
      {/* --- TOP BAR (Dark Navy) --- */}
      <div className="bg-[#0f172a] text-slate-300 text-xs py-2 px-4 transition-all duration-300">
        <div className="container mx-auto max-w-7xl flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center space-x-4">
            <a href="tel:+919864646481" className="flex items-center hover:text-white transition-colors">
              <Phone className="w-3 h-3 mr-1.5" /> +91 9864646481
            </a>
            <span className="hidden sm:block text-slate-600">|</span>
            <a href="mailto:bharatchessacademy@gmail.com" className="flex items-center hover:text-white transition-colors">
              <Mail className="w-3 h-3 mr-1.5" /> bharatchessschool@gmail.com
            </a>
          </div>
          <div className="hidden sm:block text-slate-400 font-medium tracking-wide text-[10px] uppercase">
            Checkmate Your Limits
          </div>
        </div>
      </div>

      {/* --- MAIN NAVIGATION (White Glass) --- */}
      <div 
        className={`bg-white/95 backdrop-blur-md border-b border-slate-200 transition-all duration-300 ${
          isScrolled ? "shadow-md py-2" : "py-3 sm:py-4"
        }`}
      >
        <div className="container mx-auto max-w-7xl px-4 flex items-center justify-between">
          
          {/* Logo Section */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 sm:w-12 sm:h-12 transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/logo.jpg"
                alt="Bharat Chess Academy"
                width={50}
                height={50}
                className="object-contain"
              />
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">
                Bharat Chess School
              </span>
              <span className="text-xs sm:text-sm font-semibold text-blue-600 uppercase tracking-widest">
                
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => {
              // Primary CTA Button Style (Online Coaching)
              if (item.isButton) {
                return (
                  <Link 
                    key={item.name} 
                    href={item.href} 
                    target="_blank"
                    className="ml-4"
                  >
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-full text-sm font-bold shadow-lg shadow-blue-600/20 transition-all hover:-translate-y-0.5 flex items-center gap-2">
                      {item.name}
                      <ExternalLink className="w-3 h-3 opacity-70" />
                    </button>
                  </Link>
                );
              }

              // Standard Links
              return (
                <div key={item.name} className="relative group">
                  <Link
                    href={item.href}
                    className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors rounded-full hover:bg-blue-50"
                  >
                    {item.name}
                  </Link>
                </div>
              );
            })}
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-slate-600 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-colors"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* --- MOBILE MENU OVERLAY --- */}
      <div 
        className={`fixed inset-x-0 top-[110px] bg-white border-b border-slate-200 shadow-xl transition-all duration-300 ease-in-out lg:hidden overflow-hidden ${
          isMobileMenuOpen ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="p-4 space-y-2 overflow-y-auto">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : "_self"}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`block px-4 py-3 rounded-xl text-base font-medium transition-colors flex items-center justify-between ${
                item.isButton 
                  ? "bg-blue-600 text-white hover:bg-blue-700 mt-4 text-center justify-center shadow-md" 
                  : "text-slate-600 hover:bg-slate-50 hover:text-blue-600"
              }`}
            >
              <span>{item.name}</span>
              {!item.isButton && item.href.startsWith("http") && <ExternalLink className="w-4 h-4 opacity-50" />}
            </Link>
          ))}
          
          {/* Mobile Contact Footer */}
          <div className="pt-6 mt-6 border-t border-slate-100 grid grid-cols-2 gap-4">
             <a href="tel:+919864646481" className="flex flex-col items-center justify-center p-3 bg-slate-50 rounded-lg text-xs text-slate-600 hover:bg-blue-50 hover:text-blue-600">
                <Phone className="w-5 h-5 mb-1" />
                <span>Call Us</span>
             </a>
             <a href="mailto:bharatchessschool@gmail.com" className="flex flex-col items-center justify-center p-3 bg-slate-50 rounded-lg text-xs text-slate-600 hover:bg-blue-50 hover:text-blue-600">
                <Mail className="w-5 h-5 mb-1" />
                <span>Email Us</span>
             </a>
          </div>
        </div>
      </div>

    </header>
  );
}
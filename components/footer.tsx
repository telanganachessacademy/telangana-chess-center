"use client";

import Link from "next/link";
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
  Award
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
    { name: "Latest Events", href: "/events" },
    { name: "Contact", href: "/contact" },
  ];

  const networkLinks = [
    { name: "Telangana Chess Academy", href: "https://telanganachessacademy.com/" },
    { name: "Telangana Chess School", href: "https://www.telanganachessschool.com" },
    { name: "Bharat Chess Academy", href: "https://www.bharatchessacademy.com" },
    { name: "Bharat Chess Institute", href: "http://www.bharatchessinstitute.com" },
    { name: "Hyderabad Chess Institute", href: "https://www.hyderabadchessinstitute.com" },
  ];

  return (
    <footer className="bg-white text-slate-600 font-sans relative overflow-hidden border-t border-slate-100">
      
      {/* --- Aesthetic Background --- */}
      <div className="absolute inset-0 pointer-events-none">
         <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-emerald-50 rounded-full blur-[100px] opacity-60" />
         <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-50 rounded-full blur-[100px] opacity-60" />
      </div>

      {/* Institutional Top Accent */}
      <div className="h-1.5 w-full bg-emerald-600"></div>

      <div className="container mx-auto max-w-7xl px-6 pt-20 pb-10 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 lg:gap-12">
          
          {/* Column 1: Brand Info */}
          <div className="lg:col-span-4 space-y-8">
            <div className="flex items-center gap-4">
              {/* Refined Logo Box */}
              <div className="w-14 h-14 bg-white border border-slate-100 rounded-2xl flex items-center justify-center shadow-xl shadow-slate-200/50">
                <span className="text-emerald-600 font-black text-2xl">♔</span>
              </div>
              <div className="flex flex-col">
                <h3 className="font-black text-xl text-slate-900 tracking-tighter whitespace-nowrap">
                  Telangana Chess <span className="text-emerald-600">Academy</span>
                </h3>
                <div className="flex items-center gap-2 mt-1">
                   <div className="flex items-center gap-1 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100">
                      <Award className="w-3 h-3 text-emerald-600" />
                      <span className="text-[9px] text-emerald-700 font-black uppercase tracking-widest">FIDE Certified</span>
                   </div>
                </div>
              </div>
            </div>
            
            <p className="text-slate-500 font-medium text-sm leading-relaxed max-w-sm">
              The premier institution for strategic excellence in Telangana. We forge champions by blending traditional wisdom with modern engine analysis.
            </p>

            {/* Social Buttons - Varied Colors */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-11 h-11 bg-slate-50 border border-slate-100 rounded-xl flex items-center justify-center transition-all duration-300 group ${social.bgColor} hover:shadow-lg hover:-translate-y-1`}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="font-black text-slate-900 text-xs uppercase tracking-[0.2em] mb-8 flex items-center gap-3">
               Explore
               <span className="h-1 w-8 bg-emerald-600 rounded-full" />
            </h4>
            <ul className="space-y-4">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="group flex items-center text-sm font-bold text-slate-500 hover:text-emerald-600 transition-all"
                  >
                    <ChevronRight className="w-4 h-4 mr-2 text-slate-200 group-hover:text-emerald-500 transition-all group-hover:translate-x-1" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div className="lg:col-span-3">
            <h4 className="font-black text-slate-900 text-xs uppercase tracking-[0.2em] mb-8 flex items-center gap-3">
               Connect
               <span className="h-1 w-8 bg-emerald-600 rounded-full" />
            </h4>
            <div className="space-y-4">
              <a href="tel:+919864646481" className="flex items-center gap-4 group p-4 rounded-2xl bg-slate-50 border border-transparent hover:border-emerald-100 hover:bg-emerald-50/30 transition-all">
                <div className="w-10 h-10 bg-white shadow-sm border border-slate-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Phone className="w-4 h-4 text-emerald-600" />
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="text-[10px] text-slate-400 font-black uppercase tracking-widest">Call</span>
                  <span className="text-sm font-bold text-slate-700">+91 9864646481</span>
                </div>
              </a>

              <a href="mailto:telanganachessacademy@gmail.com" className="flex items-center gap-4 group p-4 rounded-2xl bg-slate-50 border border-transparent hover:border-blue-100 hover:bg-blue-50/30 transition-all">
                <div className="w-10 h-10 bg-white shadow-sm border border-slate-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Mail className="w-4 h-4 text-blue-600" />
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="text-[10px] text-slate-400 font-black uppercase tracking-widest">Email</span>
                  <span className="text-sm font-bold text-slate-700 truncate">telanganachessacademy@gmail.com</span>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4">
                <div className="w-10 h-10 bg-white shadow-sm border border-slate-100 rounded-xl flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-orange-600" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] text-slate-400 font-black uppercase tracking-widest">Visit</span>
                  <span className="text-sm font-bold text-slate-700">Hyderabad, Telangana</span>
                </div>
              </div>
            </div>
          </div>

          {/* Column 4: Our Network */}
          <div className="lg:col-span-3">
            <h4 className="font-black text-slate-900 text-xs uppercase tracking-[0.2em] mb-8 flex items-center gap-3">
               Network
               <span className="h-1 w-8 bg-emerald-600 rounded-full" />
            </h4>
            <div className="grid grid-cols-1 gap-3">
              {networkLinks.map((site, index) => (
                <a
                  key={index}
                  href={site.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-white border border-slate-100 hover:border-emerald-200 hover:bg-emerald-50/30 transition-all group shadow-sm hover:shadow-md"
                >
                  <div className="flex items-center gap-3">
                    <Globe className="w-4 h-4 text-slate-300 group-hover:text-emerald-600" />
                    <span className="text-xs font-bold text-slate-600 group-hover:text-slate-900 transition-colors">
                      {site.name}
                    </span>
                  </div>
                  <ExternalLink className="w-3 h-3 text-slate-300 group-hover:text-emerald-600" />
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="border-t border-slate-100 mt-20 pt-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-slate-400 text-xs font-bold">
              © {new Date().getFullYear()} <span className="text-slate-900">Telangana Chess Academy</span>. Empowering strategic minds.
            </p>
            <div className="flex items-center gap-8">
              <Link href="/privacy" className="text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-emerald-600 transition-colors">
                Privacy
              </Link>
              <Link href="/terms" className="text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-emerald-600 transition-colors">
                Terms
              </Link>
              <div className="flex items-center gap-2 px-3 py-1 bg-slate-50 rounded-lg border border-slate-100">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Secure Portal</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
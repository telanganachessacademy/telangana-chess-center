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
  ShieldCheck
} from "lucide-react";

export function Footer() {
  const socialLinks = [
    { icon: Facebook, href: "https://www.facebook.com/telanganachessacademy", label: "Facebook", color: "hover:bg-blue-600" },
    { icon: Twitter, href: "#", label: "Twitter", color: "hover:bg-sky-500" },
    { icon: Instagram, href: "#", label: "Instagram", color: "hover:bg-pink-600" },
    { icon: Youtube, href: "#", label: "YouTube", color: "hover:bg-red-600" },
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
    <footer className="bg-[#0B0F19] text-slate-300 font-sans relative overflow-hidden border-t border-slate-800">
      
      {/* --- Background Ambience --- */}
      <div className="absolute inset-0 pointer-events-none">
         <div className="absolute -top-24 left-1/4 w-[500px] h-[500px] bg-indigo-600/5 rounded-full blur-[120px]" />
         <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-emerald-600/5 rounded-full blur-[120px]" />
         <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 brightness-100 contrast-150 mix-blend-overlay"></div>
      </div>

      {/* Top Gradient Line */}
      <div className="h-0.5 w-full bg-gradient-to-r from-emerald-500 via-indigo-500 to-purple-500 opacity-50"></div>

      <div className="container mx-auto px-4 pt-16 pb-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Column 1: Brand Info (Span 4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center space-x-3">
              {/* Logo Icon */}
              <div className="w-12 h-12 bg-slate-900 border border-slate-700 rounded-xl flex items-center justify-center shadow-lg shadow-black/50">
                <span className="text-white font-black text-2xl">♔</span>
              </div>
              <div className="flex flex-col">
                <h3 className="font-bold text-xl text-white tracking-wide">Telangana Chess Institute</h3>
                <div className="flex items-center gap-2">
                   <span className="text-[10px] text-emerald-400 font-bold uppercase tracking-widest bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                     FIDE Certified
                   </span>
                </div>
              </div>
            </div>
            
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Forging champions through strategic excellence. We provide world-class chess education designed to build character, intellect, and competitive success.
            </p>

            <div className="flex gap-3 pt-2">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 bg-slate-900 border border-slate-700 rounded-lg flex items-center justify-center transition-all duration-300 group ${social.color} hover:border-transparent hover:text-white`}
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4 text-slate-400 transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links (Span 2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="font-bold text-white text-base mb-6 uppercase tracking-wider flex items-center gap-2">
              Explore
              <div className="h-px flex-grow bg-slate-800"></div>
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="group flex items-center text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    <ChevronRight className="w-3 h-3 mr-2 text-slate-600 group-hover:text-emerald-500 group-hover:translate-x-1 transition-all" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Info (Span 3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="font-bold text-white text-base mb-6 uppercase tracking-wider flex items-center gap-2">
              Contact Us
              <div className="h-px flex-grow bg-slate-800"></div>
            </h4>
            <div className="space-y-5">
              <a href="tel:+919864646481" className="flex items-start space-x-4 group p-3 rounded-xl hover:bg-slate-900/50 transition-colors -ml-3">
                <div className="p-2.5 bg-slate-900 border border-slate-700 rounded-lg group-hover:border-emerald-500/50 group-hover:text-emerald-400 transition-colors">
                  <Phone className="w-4 h-4 text-slate-400" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Call Us</p>
                  <p className="text-white font-medium group-hover:text-emerald-400 transition-colors">+91 9864646481</p>
                </div>
              </a>

              <a href="mailto:telanganachessinstitute@gmail.com" className="flex items-start space-x-4 group p-3 rounded-xl hover:bg-slate-900/50 transition-colors -ml-3">
                <div className="p-2.5 bg-slate-900 border border-slate-700 rounded-lg group-hover:border-indigo-500/50 group-hover:text-indigo-400 transition-colors">
                  <Mail className="w-4 h-4 text-slate-400" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Email Us</p>
                  <p className="text-white font-medium group-hover:text-indigo-400 transition-colors break-all text-sm">telanganachessinstitute@gmail.com</p>
                </div>
              </a>

              <div className="flex items-start space-x-4 p-3 -ml-3">
                <div className="p-2.5 bg-slate-900 border border-slate-700 rounded-lg">
                  <MapPin className="w-4 h-4 text-slate-400" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Visit Us</p>
                  <p className="text-slate-300 font-medium text-sm">Hyderabad, Telangana</p>
                  <p className="text-xs text-slate-500">India</p>
                </div>
              </div>
            </div>
          </div>

          {/* Column 4: Our Network (Span 3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="font-bold text-white text-base mb-6 uppercase tracking-wider flex items-center gap-2">
              Our Network
              <div className="h-px flex-grow bg-slate-800"></div>
            </h4>
            <div className="space-y-3">
              {networkLinks.map((site, index) => (
                <a
                  key={index}
                  href={site.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-3 rounded-lg bg-slate-900/50 border border-slate-800 hover:border-slate-600 hover:bg-slate-800 hover:shadow-lg transition-all group"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Globe className="w-3.5 h-3.5 text-slate-600 group-hover:text-blue-400 transition-colors" />
                      <span className="text-xs font-semibold text-slate-300 group-hover:text-white transition-colors">
                        {site.name}
                      </span>
                    </div>
                    <ExternalLink className="w-3 h-3 text-slate-600 group-hover:text-white opacity-0 group-hover:opacity-100 transition-all" />
                  </div>
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="border-t border-slate-800 mt-16 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 text-sm">
              © {new Date().getFullYear()} <span className="text-white font-medium">Telangana Chess Institute</span>. All rights reserved.
            </p>
            <div className="flex items-center space-x-6">
              <Link href="/privacy" className="text-xs text-slate-500 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <div className="w-1 h-1 rounded-full bg-slate-700"></div>
              <Link href="/terms" className="text-xs text-slate-500 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <div className="w-1 h-1 rounded-full bg-slate-700"></div>
              <div className="flex items-center gap-1 text-xs text-slate-600">
                <ShieldCheck className="w-3 h-3" />
                <span>Secure Platform</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
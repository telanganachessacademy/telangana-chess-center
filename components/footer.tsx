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
  Globe
} from "lucide-react";

export function Footer() {
  const socialLinks = [
    { icon: Facebook, href: "https://www.facebook.com/telanganachessacademy", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Youtube, href: "#", label: "YouTube" },
  ];

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Our Courses", href: "/courses" },
    { name: "Meet Coaches", href: "/coaches" },
    { name: "Latest Events", href: "/events" },
    { name: "Contact", href: "/contact" },
  ];

  // Specific network links from your request
  const networkLinks = [
    { name: "Telangana Chess Academy", href: "https://telanganachessacademy.com/" },
    { name: "Telangana Chess School", href: "https://www.telanganachessschool.com" },
    { name: "Bharat Chess Academy", href: "https://www.bharatchessacademy.com" },
    { name: "Bharat Chess Institute", href: "http://www.bharatchessinstitute.com" },
    { name: "Hyderabad Chess Institute", href: "https://www.hyderabadchessinstitute.com" },
  ];

  return (
    <footer className="bg-[#020617] text-slate-300 font-sans relative">
      {/* Top Gradient Border */}
      <div className="h-1 w-full bg-gradient-to-r from-blue-600 via-purple-500 to-orange-500"></div>

      <div className="container mx-auto px-4 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          
          {/* Column 1: Brand Info (Span 4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center space-x-3">
              {/* Logo Placeholder or Icon */}
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center shadow-lg shadow-blue-900/20">
                <span className="text-white font-bold text-2xl">♔</span>
              </div>
              <div className="flex flex-col">
                <h3 className="font-bold text-xl text-white tracking-wide uppercase">Bharat Chess School</h3>
                <span className="text-xs text-blue-400 font-medium tracking-wider">EST. 2024</span>
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
                  className="w-9 h-9 bg-slate-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-all duration-300 group"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4 text-slate-400 group-hover:text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links (Span 2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="font-bold text-white text-lg mb-6 relative inline-block">
              Explore
              <span className="absolute -bottom-2 left-0 w-8 h-1 bg-blue-500 rounded-full"></span>
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="group flex items-center text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    <ChevronRight className="w-3 h-3 mr-2 text-slate-600 group-hover:text-blue-500 transition-colors" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Info (Span 3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="font-bold text-white text-lg mb-6 relative inline-block">
              Contact Us
              <span className="absolute -bottom-2 left-0 w-8 h-1 bg-orange-500 rounded-full"></span>
            </h4>
            <div className="space-y-5">
              <a href="tel:9864646481" className="flex items-start space-x-4 group">
                <div className="p-2 bg-slate-800 rounded-lg group-hover:bg-blue-600 transition-colors">
                  <Phone className="w-5 h-5 text-slate-300 group-hover:text-white" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Call Us</p>
                  <p className="text-white font-medium group-hover:text-blue-400 transition-colors">+91 9864646481</p>
                </div>
              </a>

              <a href="mailto:bharatchessschool@gmail.com" className="flex items-start space-x-4 group">
                <div className="p-2 bg-slate-800 rounded-lg group-hover:bg-blue-600 transition-colors">
                  <Mail className="w-5 h-5 text-slate-300 group-hover:text-white" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Email Us</p>
                  <p className="text-white font-medium group-hover:text-blue-400 transition-colors break-all">bharatchessschool@gmail.com</p>
                </div>
              </a>

              <div className="flex items-start space-x-4">
                <div className="p-2 bg-slate-800 rounded-lg">
                  <MapPin className="w-5 h-5 text-slate-300" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Visit Us</p>
                  <p className="text-white font-medium">Hyderabad, Telangana</p>
                  <p className="text-xs text-slate-500">India</p>
                </div>
              </div>
            </div>
          </div>

          {/* Column 4: Our Network (Span 3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="font-bold text-white text-lg mb-6 relative inline-block">
              Our Network
              <span className="absolute -bottom-2 left-0 w-8 h-1 bg-purple-500 rounded-full"></span>
            </h4>
            <div className="space-y-3">
              {networkLinks.map((site, index) => (
                <a
                  key={index}
                  href={site.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-3 rounded-lg bg-slate-900 border border-slate-800 hover:border-slate-600 hover:bg-slate-800 transition-all group"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Globe className="w-3 h-3 text-slate-500 group-hover:text-blue-400" />
                      <span className="text-xs font-semibold text-slate-300 group-hover:text-white">
                        {site.name}
                      </span>
                    </div>
                    <ExternalLink className="w-3 h-3 text-slate-600 group-hover:text-white" />
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
              © {new Date().getFullYear()} <span className="text-slate-300">Bharat Chess School</span>. All rights reserved.
            </p>
            <div className="flex items-center space-x-6">
              <Link href="/privacy" className="text-xs text-slate-500 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-xs text-slate-500 hover:text-white transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
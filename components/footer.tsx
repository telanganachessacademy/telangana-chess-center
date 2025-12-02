import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
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
    { name: "About", href: "/about" },
    { name: "Courses", href: "/courses" },
    { name: "Coaches", href: "/coaches" },
    { name: "Events", href: "/events" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <footer className="bg-[#2B6CB0] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Academy Info */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">♔</span>
              </div>
              <div>
                <h3 className="font-bold text-lg">Bharat chess academy</h3>
                <p className="text-white/80 text-xs">Professional Chess Training</p>
              </div>
            </div>
            <p className="text-white/90 text-sm mb-6">
              Dedicated to providing quality chess education and developing strong foundations for future success in chess.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center hover:bg-white/40 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-white/80 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-white mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-white/80 mt-0.5" />
                <div>
                  <p className="text-white text-sm">+91 9864646481</p>
                  <p className="text-white/70 text-xs">Mon - Sun, 10:00 AM - 8:00 PM</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-white/80 mt-0.5" />
                <div>
                  <p className="text-white text-sm">bharatchessacademy@gmail.com</p>
                  <p className="text-white/70 text-xs">We'll respond within 24 hours</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-white/80 mt-0.5" />
                <div>
                  <p className="text-white text-sm">Hyderabad, Telangana</p>
                  <p className="text-white/70 text-xs">India</p>
                </div>
              </div>
            </div>
          </div>

          {/* Academy Links */}
          <div>
            <h4 className="font-semibold text-white mb-6">Academy Links</h4>
            <div className="space-y-3">
              <div>
                <h5 className="text-white text-sm font-medium">Telangana Chess Academy </h5>
                <a
                  href="https://telanganachessacademy.com/"
                  className="text-white/70 text-xs hover:text-white transition-colors"
                >
                  www.telanganachessacademy.com
                </a>
              </div>
              <div>
                <h5 className="text-white text-sm font-medium">Telangana Chess school</h5>
                <a
                  href="https://www.telanganachessschool.com"
                  className="text-white/70 text-xs hover:text-white transition-colors"
                >
                  www.telanganachessschool.com
                </a>
              </div>
              <div>
                <h5 className="text-white text-sm font-medium">Bharat chess academy</h5>
                <a
                  href="https://www.bharatchessacademy.com"
                  className="text-white/70 text-xs hover:text-white transition-colors"
                >
                  www.bharatchessacademy.com
                </a>
              </div>
              <div>
                <h5 className="text-white text-sm font-medium">Bharat chess institute</h5>
                <a
                  href="http://www.bharatchessinstitute.com"
                  className="text-white/70 text-xs hover:text-white transition-colors"
                >
                  www.bharatchessinstitute.com
                </a>
              </div>
              <div>
                <h5 className="text-white text-sm font-medium">Hyderabad Chess Institute</h5>
                <a
                  href="https://www.hyderabadchessinstitute.com"
                  className="text-white/70 text-xs hover:text-white transition-colors"
                >
                  www.hyderabadchessinstitute.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/30 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/70 text-sm">© 2024 Bharat chess academy. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link
                href="/terms"
                className="text-white/70 hover:text-white text-sm transition-colors"
              >
                Terms & Conditions
              </Link>
              <Link
                href="/contact"
                className="text-white/70 hover:text-white text-sm transition-colors"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

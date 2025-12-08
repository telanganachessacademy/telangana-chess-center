"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle,
  MessageSquare,
  Globe
} from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    inquiryType: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const inquiryTypes = [
    "General Information",
    "Course Enrollment",
    "Private Coaching",
    "Tournament Registration",
    "Partnership Inquiry",
    "Other",
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Simulation of submission
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        inquiryType: "",
      });
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      
      {/* --- HERO HEADER --- */}
      <section className="bg-[#020617] pt-32 pb-24 relative overflow-hidden">
        {/* Background Decor */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-orange-600/10 rounded-full blur-[100px] pointer-events-none -translate-x-1/3 translate-y-1/3"></div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <Badge className="mb-6 bg-blue-900/50 text-blue-300 border-blue-800 px-4 py-1.5 text-sm uppercase tracking-wider">
            24/7 Support
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white tracking-tight">
            Let's Start a <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-orange-400">Conversation</span>
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Have questions about our curriculum, tournaments, or admissions? Our team of grandmasters and support staff is ready to help.
          </p>
        </div>
      </section>

      {/* --- MAIN SPLIT SECTION --- */}
      <section className="relative z-20 -mt-12 px-4 pb-20">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-12 gap-8 shadow-2xl rounded-3xl overflow-hidden bg-white border border-slate-100">
            
            {/* LEFT COLUMN: Contact Info (Dark Theme) */}
            <div className="lg:col-span-5 bg-[#0f172a] p-10 md:p-12 text-white relative overflow-hidden flex flex-col justify-between">
              {/* Pattern */}
              <div className="absolute inset-0 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:20px_20px] opacity-10 pointer-events-none"></div>
              
              <div>
                <h3 className="text-2xl font-bold mb-2">Contact Information</h3>
                <p className="text-slate-400 mb-10 text-sm">Fill out the form or reach us directly via these channels.</p>
                
                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-blue-600/20 text-blue-400">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Call Us</p>
                      <p className="text-lg font-semibold text-white">+91 9864646481</p>
                      <p className="text-sm text-slate-400">Mon-Sun, 9am - 8pm</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-orange-600/20 text-orange-400">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Email Us</p>
                      <p className="text-lg font-semibold text-white break-all">bharatchessacademy@gmail.com</p>
                      <p className="text-sm text-slate-400">Online Support</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-purple-600/20 text-purple-400">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Visit HQ</p>
                      <p className="text-lg font-semibold text-white leading-tight">
                        11-13-75 Road No 2, Alkapuri<br/>
                        Kothapet, Hyderabad-500035
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Social / Decor */}
              <div className="mt-12 pt-8 border-t border-slate-800">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition-all cursor-pointer">
                    <Globe className="w-5 h-5" />
                  </div>
                  <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition-all cursor-pointer">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: Form (Light Theme) */}
            <div className="lg:col-span-7 p-10 md:p-16 bg-white">
              {isSubmitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center p-8 animate-fade-in">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle className="w-10 h-10 text-green-600" />
                  </div>
                  <h3 className="text-3xl font-bold text-slate-900 mb-2">Message Sent!</h3>
                  <p className="text-slate-500 max-w-xs mx-auto">
                    We have received your inquiry. One of our grandmasters will be in touch shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-slate-700 font-semibold">Full Name</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        className="bg-slate-50 border-slate-200 focus:border-blue-500 h-12"
                        placeholder="John Doe"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-slate-700 font-semibold">Email Address</Label>
                      <Input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        className="bg-slate-50 border-slate-200 focus:border-blue-500 h-12"
                        placeholder="john@example.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-slate-700 font-semibold">Phone Number</Label>
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        className="bg-slate-50 border-slate-200 focus:border-blue-500 h-12"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label className="text-slate-700 font-semibold">I'm interested in...</Label>
                      <Select
                        value={formData.inquiryType}
                        onValueChange={(value) => handleInputChange("inquiryType", value)}
                      >
                        <SelectTrigger className="bg-slate-50 border-slate-200 h-12">
                          <SelectValue placeholder="Select Topic" />
                        </SelectTrigger>
                        <SelectContent>
                          {inquiryTypes.map((type, i) => (
                            <SelectItem key={i} value={type}>{type}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-slate-700 font-semibold">Your Message</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      className="bg-slate-50 border-slate-200 focus:border-blue-500 min-h-[150px] resize-none p-4"
                      placeholder="Tell us about your chess experience and goals..."
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold h-12 text-lg rounded-xl shadow-lg shadow-orange-900/10 transition-transform active:scale-95"
                  >
                    Send Message <Send className="ml-2 w-4 h-4" />
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* --- MAP SECTION --- */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="rounded-3xl overflow-hidden shadow-xl border border-slate-200 h-[400px] relative group">
            <iframe
              title="Academy Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.8902674607427!2d78.50310917499912!3d17.322055904365462!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9992786f1711%3A0xc2a03126f2eff5c4!2s11-13-75%20Road%20No%202%2C%20Alkapuri%2C%20Kothapet%2C%20Hyderabad%2C%20Telangana%20500035!5e0!3m2!1sen!2sin!4v1694871600000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "grayscale(100%) invert(0%) contrast(100%)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="group-hover:filter-none transition-all duration-700"
            ></iframe>
            
            {/* Map Overlay Badge */}
            <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-6 py-4 rounded-xl shadow-lg border border-white pointer-events-none">
              <p className="text-xs font-bold text-slate-500 uppercase">Headquarters</p>
              <p className="text-lg font-bold text-slate-900">Hyderabad</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- FAQ SECTION --- */}
      <section className="py-20 bg-slate-100">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
             <h2 className="text-3xl font-bold text-slate-900">Common Questions</h2>
             <p className="text-slate-500">Quick answers to help you make your move.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { q: "What age groups do you accept?", a: "We welcome students from age 4 to adults. Our curriculum is adapted for different learning stages." },
              { q: "Do you offer trial classes?", a: "Yes! We offer a complimentary assessment and demo class for all new students." },
              { q: "What are your class timings?", a: "We have batches running from 6 AM to 9 PM IST, catering to various time zones." },
              { q: "Do you provide online coaching?", a: "Absolutely. Our specialized online platform features interactive boards and live video analysis." },
            ].map((faq, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
                <h3 className="font-bold text-slate-900 mb-2 flex items-start">
                  <span className="text-orange-500 mr-2 text-lg">Q.</span> {faq.q}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed pl-6">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
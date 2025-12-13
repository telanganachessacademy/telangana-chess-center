"use client";

import { useState } from "react";
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
  Send,
  CheckCircle,
  MessageSquare,
  Globe,
  HelpCircle
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
    <div className="min-h-screen bg-[#0B0F19] font-sans selection:bg-indigo-500/30 selection:text-indigo-200">
      
      {/* --- HERO HEADER --- */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        {/* Background Ambience */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
           <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] translate-x-1/3 -translate-y-1/3"></div>
           <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-orange-600/10 rounded-full blur-[100px] -translate-x-1/3 translate-y-1/3"></div>
           <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 brightness-100 contrast-150 mix-blend-overlay"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <Badge className="mb-6 bg-blue-500/10 text-blue-300 border-blue-500/30 px-4 py-1.5 text-xs font-bold uppercase tracking-widest shadow-lg">
            24/7 Support
          </Badge>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 text-white tracking-tight">
            Let's Start a <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Conversation</span>
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed border-t border-slate-800 pt-6">
            Have questions about our curriculum, tournaments, or admissions? Our team of grandmasters and support staff is ready to help.
          </p>
        </div>
      </section>

      {/* --- MAIN SPLIT SECTION --- */}
      <section className="relative z-20 -mt-12 px-4 pb-20">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-12 gap-8 bg-slate-900/40 backdrop-blur-md border border-slate-800 rounded-[2.5rem] overflow-hidden shadow-2xl">
            
            {/* LEFT COLUMN: Contact Info (Darker Panel) */}
            <div className="lg:col-span-5 bg-slate-950/80 p-10 md:p-12 text-white relative overflow-hidden flex flex-col justify-between border-r border-slate-800">
              {/* Pattern */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]"></div>
              
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-2">Contact Information</h3>
                <p className="text-slate-400 mb-10 text-sm">Fill out the form or reach us directly via these channels.</p>
                
                <div className="space-y-8">
                  <div className="flex items-start gap-4 group">
                    <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 group-hover:bg-blue-500/20 group-hover:text-white transition-colors">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">Call Us</p>
                      <p className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">+91 9864646481</p>
                      <p className="text-xs text-slate-500">Mon-Sun, 9am - 8pm</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group">
                    <div className="p-3 rounded-xl bg-orange-500/10 border border-orange-500/20 text-orange-400 group-hover:bg-orange-500/20 group-hover:text-white transition-colors">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">Email Us</p>
                      <p className="text-lg font-bold text-white break-all group-hover:text-orange-400 transition-colors">telanaganachessinstitute@gmail.com</p>
                      <p className="text-xs text-slate-500">Online Support</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group">
                    <div className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 group-hover:bg-purple-500/20 group-hover:text-white transition-colors">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">Visit HQ</p>
                      <p className="text-lg font-bold text-white leading-tight group-hover:text-purple-400 transition-colors">
                        11-13-75 Road No 2, Alkapuri<br/>
                        Kothapet, Hyderabad-500035
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Social / Decor */}
              <div className="mt-12 pt-8 border-t border-slate-800 relative z-10">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:border-blue-500 hover:text-white transition-all cursor-pointer shadow-lg">
                    <Globe className="w-5 h-5" />
                  </div>
                  <div className="w-12 h-12 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center text-slate-400 hover:bg-indigo-600 hover:border-indigo-500 hover:text-white transition-all cursor-pointer shadow-lg">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: Form (Glassmorphism) */}
            <div className="lg:col-span-7 p-10 md:p-16 bg-slate-900/20">
              {isSubmitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center p-8 animate-fade-in">
                  <div className="w-24 h-24 bg-emerald-500/10 rounded-full flex items-center justify-center mb-6 border border-emerald-500/30 shadow-[0_0_30px_rgba(16,185,129,0.2)]">
                    <CheckCircle className="w-12 h-12 text-emerald-400" />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-2">Message Sent!</h3>
                  <p className="text-slate-400 max-w-xs mx-auto">
                    We have received your inquiry. One of our grandmasters will be in touch shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-slate-300 font-semibold text-sm uppercase tracking-wide">Full Name</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        className="bg-slate-950/50 border-slate-800 focus:border-indigo-500 h-12 text-white placeholder:text-slate-600"
                        placeholder="John Doe"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-slate-300 font-semibold text-sm uppercase tracking-wide">Email Address</Label>
                      <Input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        className="bg-slate-950/50 border-slate-800 focus:border-indigo-500 h-12 text-white placeholder:text-slate-600"
                        placeholder="john@example.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-slate-300 font-semibold text-sm uppercase tracking-wide">Phone Number</Label>
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        className="bg-slate-950/50 border-slate-800 focus:border-indigo-500 h-12 text-white placeholder:text-slate-600"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label className="text-slate-300 font-semibold text-sm uppercase tracking-wide">I'm interested in...</Label>
                      <Select
                        value={formData.inquiryType}
                        onValueChange={(value) => handleInputChange("inquiryType", value)}
                      >
                        <SelectTrigger className="bg-slate-950/50 border-slate-800 h-12 text-white">
                          <SelectValue placeholder="Select Topic" />
                        </SelectTrigger>
                        <SelectContent className="bg-slate-900 border-slate-800 text-white">
                          {inquiryTypes.map((type, i) => (
                            <SelectItem key={i} value={type} className="focus:bg-slate-800 focus:text-white cursor-pointer">{type}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-slate-300 font-semibold text-sm uppercase tracking-wide">Your Message</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      className="bg-slate-950/50 border-slate-800 focus:border-indigo-500 min-h-[150px] resize-none p-4 text-white placeholder:text-slate-600"
                      placeholder="Tell us about your chess experience and goals..."
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold h-14 text-lg rounded-xl shadow-[0_0_20px_rgba(99,102,241,0.3)] transition-all hover:scale-[1.02]"
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
          <div className="rounded-[2rem] overflow-hidden shadow-2xl border border-slate-800 h-[400px] relative group filter grayscale hover:grayscale-0 transition-all duration-700">
            <iframe
              title="Academy Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.8902674607427!2d78.50310917499912!3d17.322055904365462!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9992786f1711%3A0xc2a03126f2eff5c4!2s11-13-75%20Road%20No%202%2C%20Alkapuri%2C%20Kothapet%2C%20Hyderabad%2C%20Telangana%20500035!5e0!3m2!1sen!2sin!4v1694871600000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            ></iframe>
            
            {/* Map Overlay Badge */}
            <div className="absolute top-6 left-6 bg-slate-900/90 backdrop-blur-md px-6 py-4 rounded-xl shadow-xl border border-white/10 pointer-events-none z-10">
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Headquarters</p>
              <p className="text-xl font-bold text-white">Hyderabad</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- FAQ SECTION --- */}
      <section className="py-24 bg-slate-900/30 border-t border-slate-800">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16 space-y-4">
             <div className="w-16 h-16 bg-slate-800 rounded-2xl flex items-center justify-center mx-auto border border-slate-700 shadow-lg">
                <HelpCircle className="w-8 h-8 text-indigo-400" />
             </div>
             <h2 className="text-3xl font-bold text-white">Common Questions</h2>
             <p className="text-slate-400">Quick answers to help you make your move.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { q: "What age groups do you accept?", a: "We welcome students from age 4 to adults. Our curriculum is adapted for different learning stages." },
              { q: "Do you offer trial classes?", a: "Yes! We offer a complimentary assessment and demo class for all new students." },
              { q: "What are your class timings?", a: "We have batches running from 6 AM to 9 PM IST, catering to various time zones." },
              { q: "Do you provide online coaching?", a: "Absolutely. Our specialized online platform features interactive boards and live video analysis." },
            ].map((faq, i) => (
              <div key={i} className="bg-slate-950/50 p-8 rounded-3xl border border-slate-800 hover:bg-slate-900 hover:border-slate-700 transition-all duration-300">
                <h3 className="font-bold text-white mb-3 flex items-start text-lg">
                  <span className="text-indigo-500 mr-3 text-xl font-serif">Q.</span> {faq.q}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed pl-8 border-l border-slate-800">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
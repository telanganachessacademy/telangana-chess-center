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
  HelpCircle,
  Loader2, // Added for loading state
  AlertCircle
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
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const inquiryTypes = [
    "Chess Coaching",
    "Other",
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
          inquiryType: "",
        });
      } else {
        throw new Error("Failed to send message");
      }
    } catch (err) {
      setError("Something went wrong. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans selection:bg-emerald-100">
      
      {/* --- HERO HEADER --- */}
      <section className="relative pt-40 pb-24 overflow-hidden bg-white border-b border-slate-100">
        <div className="absolute inset-0 pointer-events-none">
           <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-50 rounded-full blur-[120px] opacity-60" />
           <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-50 rounded-full blur-[100px] opacity-40" />
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-[10px] font-black uppercase tracking-[0.2em] mb-8">
            <Globe className="w-3.5 h-3.5" />
            <span>Global Admissions Open</span>
          </div>
          <h1 className="text-6xl md:text-5xl font-black mb-8 text-slate-900 tracking-tighter leading-none">
            Start a <span className="text-emerald-600">Conversation</span>
          </h1>
          <p className="text-xl text-slate-500 font-medium max-w-2xl mx-auto leading-relaxed">
            Have questions about our curriculum, tournaments, or admissions? 
            The <span className="text-slate-900 font-bold underline decoration-emerald-500/30">Telangana Chess Academy</span> team is ready to guide you.
          </p>
        </div>
      </section>

      {/* --- MAIN CONTACT BLOCK --- */}
      <section className="relative z-20 -mt-16 px-6 pb-24">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-12 gap-0 bg-white rounded-[3rem] overflow-hidden shadow-2xl shadow-slate-200 border border-slate-100">
            
            {/* LEFT COLUMN: Contact Details */}
            <div className="lg:col-span-5 bg-slate-50 p-12 md:p-16 relative overflow-hidden flex flex-col justify-between border-r border-slate-100">
              <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:32px_32px] opacity-30"></div>
              
              <div className="relative z-10">
                <h3 className="text-3xl font-black text-slate-900 mb-4 tracking-tight">Institutional Contact</h3>
                <p className="text-slate-500 font-medium mb-12 text-lg">Reach us directly via our official academy channels.</p>
                
                <div className="space-y-6">
                  {/* Phone */}
                  <div className="flex items-center gap-5 group p-5 rounded-[2rem] bg-white border border-slate-100 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-50 transition-all duration-500">
                    <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 group-hover:scale-110 transition-transform">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Academy Hotline</p>
                      <p className="text-lg font-black text-slate-900">+91 9864646481</p>
                    </div>
                  </div>

                  {/* Mail */}
                  <div className="flex items-center gap-5 group p-5 rounded-[2rem] bg-white border border-slate-100 hover:border-orange-200 hover:shadow-lg hover:shadow-orange-50 transition-all duration-500">
                    <div className="w-14 h-14 rounded-2xl bg-orange-50 flex items-center justify-center text-orange-600 group-hover:scale-110 transition-transform">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Official Email</p>
                      <p className="text-lg font-black text-slate-900 truncate">telanganachessacademy@gmail.com</p>
                    </div>
                  </div>

                  {/* Map */}
                  <div className="flex items-center gap-5 group p-5 rounded-[2rem] bg-white border border-slate-100 hover:border-purple-200 hover:shadow-lg hover:shadow-purple-50 transition-all duration-500">
                    <div className="w-14 h-14 rounded-2xl bg-purple-50 flex items-center justify-center text-purple-600 group-hover:scale-110 transition-transform">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Main HQ</p>
                      <p className="text-sm font-bold text-slate-900 leading-relaxed">
                        Kothapet, Hyderabad<br/>Telangana 500035
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-16 pt-10 border-t border-slate-200 relative z-10 flex gap-4">
                  <button className="flex-1 h-14 rounded-2xl bg-white border border-slate-200 text-slate-600 font-bold text-sm flex items-center justify-center gap-2 hover:bg-emerald-600 hover:text-white hover:border-emerald-600 transition-all shadow-sm">
                    <Globe className="w-4 h-4" /> Portals
                  </button>
                  <button className="flex-1 h-14 rounded-2xl bg-white border border-slate-200 text-slate-600 font-bold text-sm flex items-center justify-center gap-2 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all shadow-sm">
                    <MessageSquare className="w-4 h-4" /> Live Chat
                  </button>
              </div>
            </div>

            {/* RIGHT COLUMN: Contact Form */}
            <div className="lg:col-span-7 p-12 md:p-20 bg-white">
              {isSubmitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-20 animate-in fade-in zoom-in duration-500">
                  <div className="w-24 h-24 bg-emerald-50 rounded-full flex items-center justify-center mb-8 border border-emerald-100 shadow-xl shadow-emerald-50">
                    <CheckCircle className="w-12 h-12 text-emerald-600" />
                  </div>
                  <h3 className="text-4xl font-black text-slate-900 mb-4 tracking-tight">Message Received!</h3>
                  <p className="text-slate-500 font-medium max-w-xs mx-auto text-lg leading-relaxed">
                    Our grandmasters will review your inquiry and reach out within 24 hours.
                  </p>
                  <Button 
                    variant="link" 
                    className="mt-6 text-emerald-600 font-bold"
                    onClick={() => setIsSubmitted(false)}
                  >
                    Send another message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  {error && (
                    <div className="p-4 rounded-xl bg-red-50 border border-red-100 text-red-600 flex items-center gap-3 text-sm font-bold">
                      <AlertCircle className="w-5 h-5" /> {error}
                    </div>
                  )}

                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <Label htmlFor="name" className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Full Name</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        className="h-14 rounded-2xl bg-slate-50 border-slate-100 focus:border-emerald-500 focus:ring-emerald-500 font-bold text-slate-900"
                        placeholder="Grandmaster Name"
                        required
                      />
                    </div>
                    <div className="space-y-3">
                      <Label htmlFor="email" className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Email Address</Label>
                      <Input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        className="h-14 rounded-2xl bg-slate-50 border-slate-100 focus:border-emerald-500 focus:ring-emerald-500 font-bold text-slate-900"
                        placeholder="master@chess.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <Label htmlFor="phone" className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Phone Number</Label>
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        className="h-14 rounded-2xl bg-slate-50 border-slate-100 focus:border-emerald-500 focus:ring-emerald-500 font-bold text-slate-900"
                        placeholder="+91 00000 00000"
                        required
                      />
                    </div>
                    <div className="space-y-3">
                      <Label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Interest Area</Label>
                      <Select
                        value={formData.inquiryType}
                        onValueChange={(value) => handleInputChange("inquiryType", value)}
                        required
                      >
                        <SelectTrigger className="h-14 rounded-2xl bg-slate-50 border-slate-100 font-bold text-slate-900 focus:ring-emerald-500">
                          <SelectValue placeholder="Select Topic" />
                        </SelectTrigger>
                        <SelectContent className="bg-white border-slate-100 font-bold text-slate-900">
                          {inquiryTypes.map((type, i) => (
                            <SelectItem key={i} value={type} className="hover:bg-emerald-50 cursor-pointer">{type}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Label htmlFor="message" className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Your Message</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      className="min-h-[160px] rounded-[2rem] bg-slate-50 border-slate-100 focus:border-emerald-500 focus:ring-emerald-500 p-6 font-medium text-slate-900 resize-none"
                      placeholder="Share your chess goals with us..."
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-black uppercase tracking-[0.2em] h-16 rounded-2xl shadow-xl shadow-emerald-100 transition-all active:scale-95 text-xs disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isLoading ? (
                      <>Sending... <Loader2 className="ml-3 w-4 h-4 animate-spin" /></>
                    ) : (
                      <>Send Message <Send className="ml-3 w-4 h-4" /></>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* --- MAP SECTION --- */}
      <section className="py-12 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="rounded-[3rem] overflow-hidden shadow-2xl border-[12px] border-white h-[500px] relative group grayscale hover:grayscale-0 transition-all duration-[1.5s]">
            <iframe
              title="Academy Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.8902674607427!2d78.50310917499912!3d17.322055904365462!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9992786f1711%3A0xc2a03126f2eff5c4!2s11-13-75%20Road%20No%202%2C%20Alkapuri%2C%20Kothapet%2C%20Hyderabad%2C%20Telangana%20500035!5e0!3m2!1sen!2sin!4v1694871600000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              className="w-full h-full"
            ></iframe>
            
            <div className="absolute top-8 left-8 bg-white/90 backdrop-blur-md px-8 py-5 rounded-[2rem] shadow-2xl border border-white pointer-events-none">
              <p className="text-[10px] font-black text-emerald-600 uppercase tracking-widest mb-1">Academy HQ</p>
              <p className="text-2xl font-black text-slate-900">Hyderabad</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- FAQ SECTION --- */}
      <section className="py-32 bg-white relative overflow-hidden border-t border-slate-100">
        <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:32px_32px] opacity-40" />

        <div className="container mx-auto px-6 max-w-5xl relative z-10">
          <div className="text-center mb-24 space-y-6">
             <div className="w-20 h-20 bg-emerald-50 rounded-[2rem] flex items-center justify-center mx-auto border border-emerald-100 shadow-xl shadow-emerald-50">
                <HelpCircle className="w-10 h-10 text-emerald-600" />
             </div>
             <h2 className="text-5xl font-black text-slate-900 tracking-tight">Common Questions</h2>
             <p className="text-lg text-slate-500 font-medium">Quick answers for aspiring champions.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { q: "What age groups do you accept?", a: "We accept students from age 4 to senior adults. Our curriculum is tailored for every developmental stage." },
              { q: "Do you offer free assessments?", a: "Yes! Every new student receives a complimentary 30-minute rating and skill assessment." },
              { q: "What are your coaching hours?", a: "Our batches run globally from 6:00 AM to 9:00 PM IST across various time zones." },
              { q: "Is online coaching effective?", a: "Absolutely. Our specialized platform includes interactive boards, engine analysis, and live master feedback." },
            ].map((faq, i) => (
              <div key={i} className="group bg-slate-50/50 p-10 rounded-[2.5rem] border border-slate-100 hover:bg-white hover:border-emerald-200 hover:shadow-2xl hover:shadow-emerald-100/50 transition-all duration-500">
                <h3 className="font-black text-slate-900 mb-4 flex items-start text-xl tracking-tight">
                  <span className="text-emerald-500 mr-4 font-black">Q.</span> {faq.q}
                </h3>
                <p className="text-slate-500 font-medium leading-relaxed pl-9 border-l-2 border-slate-100 group-hover:border-emerald-100 transition-colors">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
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
  Loader2,
  AlertCircle,
  Crown,
  Sparkles,
  MessageCircle
} from "lucide-react";
import Image from "next/image";

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
  const [isSending, setIsSending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const inquiryTypes = [
    "Free Demo Class",
    "Beginner Foundation Course",
    "Intermediate Tactics Coaching",
    "Grandmaster Masterclass",
    "Tournament Registration",
    "Private 1-on-1 Lessons",
    "General Inquiry",
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    setError(null);

    const SERVICE_ID = "service_277ip99"; 
    const TEMPLATE_ID = "template_s9g6lti";
    const PUBLIC_KEY = "TSfE8gYMWCMjb7G4h";

    const customizedMessage = `
SOURCE: Telangana Chess Centre
INQUIRY TYPE: ${formData.inquiryType}
------------------------------------------
MESSAGE:
${formData.message}
    `;

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone,
      subject: formData.subject || `New Inquiry: ${formData.inquiryType}`,
      inquiry_type: formData.inquiryType,
      message: customizedMessage,
    };

    try {
      const result = await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
      
      if (result.status === 200) {
        setIsSubmitted(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
          inquiryType: "",
        });
        setTimeout(() => setIsSubmitted(false), 6000);
      }
    } catch (err) {
      console.error("EmailJS Error:", err);
      setError("Failed to send message. Please reach us directly at telanganachesscentre@gmail.com or call +91 9864646481.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans">
      
      {/* --- HERO HEADER --- */}
      <section className="relative pt-36 pb-20 overflow-hidden bg-white border-b border-slate-100 text-center">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-blue-50 rounded-full blur-[120px] opacity-60" />
          <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-emerald-50 rounded-full blur-[100px] opacity-40" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-50 border border-amber-200 text-amber-900 text-[10px] font-black uppercase tracking-[0.2em] mb-6 shadow-xs">
            <Crown className="w-3.5 h-3.5 text-amber-600" />
            <span>Admissions & Inquiries Open</span>
          </div>
          
          <h1 className="text-3xl md:text-5xl font-black mb-6 text-slate-950 tracking-tight leading-tight">
            Connect with <span className="text-[#0b3272]">Telangana</span> <span className="text-[#0e8743]">Chess Centre</span>
          </h1>
          
          <p className="text-base sm:text-lg text-slate-600 font-medium max-w-2xl mx-auto leading-relaxed">
            Ready to enroll or have questions about batches, tournament schedules, or free evaluations? Our master faculty is here to help.
          </p>
        </div>
      </section>

      {/* --- MAIN CONTACT BLOCK --- */}
      <section className="relative z-20 -mt-10 px-4 sm:px-6 pb-24">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-12 bg-white rounded-[2.5rem] overflow-hidden shadow-2xl shadow-blue-950/5 border border-slate-100">
            
            {/* LEFT COLUMN: Contact Details */}
            <div className="lg:col-span-5 bg-gradient-to-b from-[#082352] to-[#04132e] text-white p-8 sm:p-12 relative overflow-hidden flex flex-col justify-between">
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full overflow-hidden bg-white border-2 border-amber-400 p-0.5 shrink-0">
                    <Image src="/logo.png" alt="TCC" width={48} height={48} className="object-contain" />
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-white tracking-tight uppercase">
                      Telangana Chess Centre
                    </h3>
                    <p className="text-amber-400 text-xs font-bold">FIDE Certified Training Hub</p>
                  </div>
                </div>

                <p className="text-slate-300 font-medium mb-8 text-sm sm:text-base leading-relaxed">
                  Reach out directly via our official lines for immediate batch allocations and student evaluations.
                </p>
                
                <div className="space-y-4">
                  {/* Phone */}
                  <a 
                    href="tel:+919864646481" 
                    className="flex items-center gap-4 p-4 rounded-2xl bg-white/10 border border-white/10 hover:bg-white/15 hover:border-emerald-400 transition-all group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Call & WhatsApp</p>
                      <p className="text-base font-black text-white">+91 9864646481</p>
                    </div>
                  </a>

                  {/* Mail */}
                  <a 
                    href="mailto:telanganachesscentre@gmail.com" 
                    className="flex items-center gap-4 p-4 rounded-2xl bg-white/10 border border-white/10 hover:bg-white/15 hover:border-blue-400 transition-all group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Official Email</p>
                      <p className="text-sm font-black text-white truncate">telanganachesscentre@gmail.com</p>
                    </div>
                  </a>

                  {/* Map */}
                  <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/10 border border-white/10">
                    <div className="w-12 h-12 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Main Academy Hub</p>
                      <p className="text-xs sm:text-sm font-bold text-white leading-tight">
                        Alkapuri, Kothapet, Hyderabad<br/>Telangana 500035, India
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-10 pt-6 border-t border-white/10 flex gap-3">
                <a 
                  href="https://wa.me/919864646481" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex-1 h-12 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors shadow-lg shadow-emerald-900/30"
                >
                  <MessageCircle className="w-4 h-4" /> Quick WhatsApp
                </a>
              </div>
            </div>

            {/* RIGHT COLUMN: Contact Form */}
            <div className="lg:col-span-7 p-8 sm:p-14 bg-white">
              {isSubmitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-12 animate-in fade-in zoom-in duration-500">
                  <div className="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center mb-6 border border-emerald-100 shadow-lg">
                    <CheckCircle className="w-10 h-10 text-emerald-600" />
                  </div>
                  <h3 className="text-3xl font-black text-slate-950 mb-3 tracking-tight">Inquiry Received!</h3>
                  <p className="text-slate-600 font-medium max-w-sm mx-auto text-sm sm:text-base leading-relaxed">
                    Thank you for reaching out to Telangana Chess Centre. Our coaching panel will review your requirements and call you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-black text-slate-950 tracking-tight mb-1">
                      Send an Inquiry
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 font-medium">
                      Fill out the form below to book a free assessment or ask about courses.
                    </p>
                  </div>

                  {error && (
                    <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 flex items-center gap-2.5 text-xs font-bold">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{error}</span>
                    </div>
                  )}

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-[10px] font-black text-slate-500 uppercase tracking-widest">
                        Full Name *
                      </Label>
                      <Input
                        id="name"
                        disabled={isSending}
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        className="h-12 rounded-xl bg-slate-50 border-slate-200 focus:border-[#0b3272] font-semibold text-slate-900"
                        placeholder="Student / Parent Name"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-[10px] font-black text-slate-500 uppercase tracking-widest">
                        Email Address *
                      </Label>
                      <Input
                        type="email"
                        id="email"
                        disabled={isSending}
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        className="h-12 rounded-xl bg-slate-50 border-slate-200 focus:border-[#0b3272] font-semibold text-slate-900"
                        placeholder="name@email.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-[10px] font-black text-slate-500 uppercase tracking-widest">
                        Phone Number *
                      </Label>
                      <Input
                        id="phone"
                        disabled={isSending}
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        className="h-12 rounded-xl bg-slate-50 border-slate-200 focus:border-[#0b3272] font-semibold text-slate-900"
                        placeholder="+91 98646 46481"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">
                        Inquiry Topic *
                      </Label>
                      <Select
                        disabled={isSending}
                        value={formData.inquiryType}
                        onValueChange={(value) => handleInputChange("inquiryType", value)}
                        required
                      >
                        <SelectTrigger className="h-12 rounded-xl bg-slate-50 border-slate-200 font-semibold text-slate-900">
                          <SelectValue placeholder="Select Inquiry Type" />
                        </SelectTrigger>
                        <SelectContent className="bg-white border-slate-200 font-semibold text-slate-900">
                          {inquiryTypes.map((type, i) => (
                            <SelectItem key={i} value={type} className="hover:bg-blue-50 cursor-pointer">
                              {type}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-[10px] font-black text-slate-500 uppercase tracking-widest">
                      Your Message / Chess Background
                    </Label>
                    <Textarea
                      id="message"
                      disabled={isSending}
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      className="min-h-[120px] rounded-2xl bg-slate-50 border-slate-200 focus:border-[#0b3272] p-4 font-medium text-slate-900 resize-none"
                      placeholder="Tell us about the student's age, chess experience, or goals..."
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSending}
                    className="w-full bg-[#0b3272] hover:bg-[#082352] text-white font-black uppercase tracking-widest h-14 rounded-xl shadow-xl shadow-blue-900/20 transition-all active:scale-95 text-xs disabled:opacity-70 cursor-pointer"
                  >
                    {isSending ? (
                      <>Processing... <Loader2 className="ml-2 w-4 h-4 animate-spin" /></>
                    ) : (
                      <>Send Inquiry <Send className="ml-2 w-4 h-4" /></>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* --- MAP SECTION --- */}
      <section className="py-8 px-4 sm:px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="rounded-[2.5rem] overflow-hidden shadow-xl border-4 border-white h-[360px] sm:h-[440px] relative">
            <iframe
              title="Telangana Chess Centre Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.8902674607427!2d78.50310917499912!3d17.322055904365462!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9992786f1711%3A0xc2a03126f2eff5c4!2s11-13-75%20Road%20No%202%2C%20Alkapuri%2C%20Kothapet%2C%20Hyderabad%2C%20Telangana%20500035!5e0!3m2!1sen!2sin!4v1694871600000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              className="w-full h-full"
            ></iframe>
            
            <div className="absolute top-4 left-4 sm:top-6 sm:left-6 bg-white/95 backdrop-blur-md px-5 py-3 rounded-2xl shadow-xl border border-white pointer-events-none">
              <p className="text-[9px] font-black text-[#0b3272] uppercase tracking-widest">Main Hub Location</p>
              <p className="text-base sm:text-lg font-black text-slate-900">Hyderabad, Telangana</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- FAQ SECTION --- */}
      <section className="py-20 bg-white relative overflow-hidden border-t border-slate-100">
        <div className="container mx-auto px-4 sm:px-6 max-w-5xl relative z-10">
          <div className="text-center mb-14 space-y-3">
            <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto border border-blue-100 shadow-sm">
              <HelpCircle className="w-7 h-7 text-[#0b3272]" />
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-slate-950 tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-medium">Quick answers for aspiring players and parents.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { q: "What age groups are accepted at Telangana Chess Centre?", a: "We train students starting from age 4.5 through intermediate teens and adult tournament players with customized developmental batches." },
              { q: "How do I book a complimentary assessment?", a: "Fill out the form on this page or message us directly on WhatsApp at +91 9864646481 to receive your 1-on-1 rating session." },
              { q: "Do you offer both online and in-person coaching?", a: "Yes! We run physical academy sessions in Hyderabad and interactive digital coaching globally across multiple time zones." },
              { q: "What tournaments can students participate in?", a: "Students gain priority entry to our official State, All-India, and FIDE rated championships with coach post-match debriefs." },
            ].map((faq, i) => (
              <div key={i} className="bg-slate-50/70 p-7 rounded-[2rem] border border-slate-100 hover:bg-white hover:border-blue-200 transition-all shadow-xs">
                <h3 className="font-black text-slate-900 mb-2.5 flex items-start text-base sm:text-lg tracking-tight leading-snug">
                  <span className="text-[#0b3272] mr-2.5 font-black">Q.</span> {faq.q}
                </h3>
                <p className="text-slate-600 font-medium leading-relaxed pl-6 border-l-2 border-slate-200 text-xs sm:text-sm">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

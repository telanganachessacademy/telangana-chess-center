"use client";

import { useState } from "react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Calendar as CalendarIcon,
  Clock,
  MapPin,
  Users,
  Trophy,
  BookOpen,
  Star,
  ArrowRight,
  Filter,
  Sparkles,
  LayoutGrid,
  CalendarDays,
  ChevronRight
} from "lucide-react";
import { format } from "date-fns";

export default function EventsPage() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [selectedCategory, setSelectedCategory] = useState("all");

  const events = [
    {
      id: 1,
      title: "State Championship 2025",
      category: "tournament",
      date: "2025-03-15",
      time: "09:00 AM",
      location: "Hyderabad Convention Center",
      participants: "200+ Slots",
      prize: "₹50,000",
      description: "The biggest annual state-level championship. Open to all age groups with FIDE rating opportunities.",
      image: "https://images.unsplash.com/photo-1580541832626-2a7131ee809f?auto=format&fit=crop&q=80&w=800",
      registrationFee: "₹500",
      color: "blue",
    },
    {
      id: 2,
      title: "Tejavath Naresh Workshop",
      category: "workshop",
      date: "2025-03-08",
      time: "02:00 PM",
      location: "Academy Main Hall",
      participants: "50 Seats",
      prize: "Certificate",
      description: "Exclusive masterclass on 'Advanced Sicilian Defense' theories and middle-game planning.",
      image: "https://images.unsplash.com/photo-1529699211952-734e80c4d42b?auto=format&fit=crop&q=80&w=800",
      registrationFee: "₹800",
      color: "orange",
    },
    {
      id: 3,
      title: "Youth Rapid Fire",
      category: "tournament",
      date: "2025-03-22",
      time: "10:00 AM",
      location: "Online Platform (Lichess)",
      participants: "100+ Players",
      prize: "₹15,000",
      description: "Fast-paced blitz tournament for players under 18. Test your speed and intuition.",
      image: "https://images.unsplash.com/photo-1523875194681-bedd468c58bf?auto=format&fit=crop&q=80&w=800",
      registrationFee: "₹300",
      color: "purple",
    },
    {
      id: 4,
      title: "Psychology of Chess",
      category: "seminar",
      date: "2025-03-12",
      time: "11:00 AM",
      location: "Conference Room B",
      participants: "30 Seats",
      prize: "Certificate",
      description: "Learn how to handle tournament pressure, time trouble, and psychological warfare.",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=800",
      registrationFee: "₹600",
      color: "green",
    },
    {
      id: 5,
      title: "Simultaneous Exhibition",
      category: "exhibition",
      date: "2025-03-18",
      time: "04:00 PM",
      location: "City Chess Club",
      participants: "40 Boards",
      prize: "Beat the GM",
      description: "A rare opportunity to play a simultaneous game against Grandmaster Naresh.",
      image: "https://images.unsplash.com/photo-1586165368502-1bad197a6461?auto=format&fit=crop&q=80&w=800",
      registrationFee: "₹200",
      color: "blue",
    },
    {
      id: 6,
      title: "Women's Chess Day",
      category: "special",
      date: "2025-03-25",
      time: "09:30 AM",
      location: "Academy Main Hall",
      participants: "80 Players",
      prize: "₹10,000",
      description: "Celebrating women in chess with a dedicated tournament and networking session.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800",
      registrationFee: "₹400",
      color: "orange",
    },
  ];

  const categories = [
    { id: "all", name: "All Events", icon: Sparkles },
    { id: "tournament", name: "Tournaments", icon: Trophy },
    { id: "workshop", name: "Workshops", icon: BookOpen },
    { id: "seminar", name: "Seminars", icon: Users },
    { id: "exhibition", name: "Exhibitions", icon: Star },
  ];

  const filteredEvents =
    selectedCategory === "all"
      ? events
      : events.filter((event) => event.category === selectedCategory);

  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans selection:bg-emerald-100">
      
      {/* --- HERO SECTION --- */}
      <section className="relative pt-40 pb-24 overflow-hidden bg-white border-b border-slate-100">
        <div className="absolute inset-0 pointer-events-none">
           <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-50 rounded-full blur-[120px] opacity-60" />
           <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-50 rounded-full blur-[100px] opacity-40" />
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-[10px] font-black uppercase tracking-[0.2em] mb-8">
            <CalendarDays className="w-3.5 h-3.5" />
            <span>Championship Calendar 2025</span>
          </div>
          <h1 className="text-6xl md:text-5xl font-black mb-8 text-slate-900 tracking-tighter leading-none">
            Upcoming <span className="text-emerald-600">Battles.</span>
          </h1>
          <p className="text-xl text-slate-500 font-medium max-w-2xl mx-auto leading-relaxed">
            From local blitz nights to international FIDE rated championships. 
            Claim your victory with <span className="text-slate-900 font-bold underline decoration-emerald-500/30">Telangana Chess Academy</span>.
          </p>
        </div>
      </section>

      {/* --- FILTER & STICKY BAR --- */}
      <section className="sticky top-[72px] z-40 bg-white/80 backdrop-blur-xl border-b border-slate-200 py-6 shadow-sm">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            
            {/* Category Pills */}
            <div className="flex items-center gap-3 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 no-scrollbar">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs font-black uppercase tracking-widest transition-all whitespace-nowrap border ${
                    selectedCategory === category.id
                      ? "bg-emerald-600 border-transparent text-white shadow-lg shadow-emerald-100 scale-105"
                      : "bg-white border-slate-100 text-slate-500 hover:border-emerald-200 hover:text-emerald-600"
                  }`}
                >
                  <category.icon className="w-3.5 h-3.5" />
                  {category.name}
                </button>
              ))}
            </div>
            
            <div className="hidden md:flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
               <Filter className="w-4 h-4 text-emerald-500" />
               Current Inventory: {filteredEvents.length} Events
            </div>
          </div>
        </div>
      </section>

      {/* --- MAIN CONTENT --- */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <Tabs defaultValue="grid" className="w-full">
            
            <div className="flex justify-end mb-12">
              <TabsList className="bg-slate-100 border border-slate-200 p-1.5 rounded-2xl">
                <TabsTrigger value="grid" className="rounded-xl px-6 font-bold text-xs uppercase tracking-widest data-[state=active]:bg-white data-[state=active]:shadow-md data-[state=active]:text-emerald-600">
                  <LayoutGrid className="w-4 h-4 mr-2" /> Grid View
                </TabsTrigger>
                <TabsTrigger value="calendar" className="rounded-xl px-6 font-bold text-xs uppercase tracking-widest data-[state=active]:bg-white data-[state=active]:shadow-md data-[state=active]:text-emerald-600">
                  <CalendarIcon className="w-4 h-4 mr-2" /> Calendar
                </TabsTrigger>
              </TabsList>
            </div>

            {/* --- GRID VIEW --- */}
            <TabsContent value="grid">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {filteredEvents.map((event) => {
                  const styles = 
                    event.color === 'blue' ? { btn: 'bg-blue-600 hover:bg-blue-700 shadow-blue-100', text: 'text-blue-700', bg: 'bg-blue-50' } :
                    event.color === 'orange' ? { btn: 'bg-orange-500 hover:bg-orange-600 shadow-orange-100', text: 'text-orange-700', bg: 'bg-orange-50' } :
                    event.color === 'purple' ? { btn: 'bg-purple-600 hover:bg-purple-700 shadow-purple-100', text: 'text-purple-700', bg: 'bg-purple-50' } :
                    { btn: 'bg-emerald-600 hover:bg-emerald-700 shadow-emerald-100', text: 'text-emerald-700', bg: 'bg-emerald-50' };

                  return (
                    <Card key={event.id} className="group bg-white border border-slate-100 rounded-[2.5rem] overflow-hidden shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col h-full">
                      {/* Image Frame */}
                      <div className="relative h-64 overflow-hidden p-3 pb-0">
                        <div className="relative h-full w-full rounded-[2rem] overflow-hidden">
                            <img 
                            src={event.image} 
                            alt={event.title} 
                            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
                            
                            {/* Floating Date Badge */}
                            <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md rounded-2xl p-3 text-center min-w-[65px] shadow-xl border border-white">
                            <span className="block text-[10px] font-black text-emerald-600 uppercase tracking-widest mb-1">{format(new Date(event.date), "MMM")}</span>
                            <span className="block text-3xl font-black text-slate-900 leading-none">{format(new Date(event.date), "dd")}</span>
                            </div>

                            <div className="absolute top-4 right-4">
                            <Badge className="bg-white/20 backdrop-blur-md text-white border border-white/20 uppercase tracking-[0.2em] text-[9px] font-black px-3 py-1">
                                {event.category}
                            </Badge>
                            </div>
                        </div>
                      </div>

                      <CardContent className="p-8 flex flex-col flex-grow">
                        <div className="mb-8">
                          <h3 className="text-2xl font-black text-slate-900 mb-3 tracking-tight group-hover:text-emerald-600 transition-colors line-clamp-1">{event.title}</h3>
                          <p className="text-slate-500 font-medium text-sm leading-relaxed line-clamp-2">{event.description}</p>
                        </div>

                        {/* Event Details Grid */}
                        <div className="space-y-4 mb-10 p-5 rounded-2xl bg-slate-50 border border-slate-100">
                          <div className="flex items-center gap-4 text-xs font-bold text-slate-700">
                            <Clock className={`w-4 h-4 ${styles.text}`} />
                            {event.time}
                          </div>
                          <div className="flex items-center gap-4 text-xs font-bold text-slate-700">
                            <MapPin className={`w-4 h-4 ${styles.text}`} />
                            <span className="truncate">{event.location}</span>
                          </div>
                          <div className="flex items-center gap-4 text-xs font-bold text-slate-700">
                            <Users className={`w-4 h-4 ${styles.text}`} />
                            {event.participants}
                          </div>
                        </div>

                        {/* Action Area */}
                        <div className="mt-auto">
                            <div className="flex items-center justify-between mb-8 px-2">
                                <div>
                                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Prize Fund</p>
                                    <p className={`text-lg font-black ${styles.text}`}>{event.prize}</p>
                                </div>
                                <div className="text-right">
                                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Entry Fee</p>
                                    <p className="text-lg font-black text-slate-900">{event.registrationFee}</p>
                                </div>
                            </div>
                            
                            <Link href="/contact" className="w-full">
                            <Button className={`w-full h-14 rounded-2xl font-black text-xs uppercase tracking-[0.2em] text-white shadow-xl ${styles.btn} transition-all active:scale-95 flex items-center justify-center gap-2 group-hover:gap-4`}>
                                Join Battle <ChevronRight className="w-4 h-4" />
                            </Button>
                            </Link>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </TabsContent>

            {/* --- CALENDAR VIEW --- */}
            <TabsContent value="calendar">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                
                {/* Date Picker Side */}
                <div className="lg:col-span-4">
                  <div className="bg-white p-8 rounded-[3rem] shadow-xl shadow-slate-200/50 border border-slate-100 sticky top-40">
                    <h3 className="text-xl font-black text-slate-900 mb-8 flex items-center gap-3">
                       <div className="w-2 h-8 bg-emerald-600 rounded-full" />
                       Select Date
                    </h3>
                    <Calendar
                      mode="single"
                      selected={selectedDate}
                      onSelect={setSelectedDate}
                      className="rounded-2xl border border-slate-50 p-4"
                      classNames={{
                        head_cell: "text-slate-400 font-bold text-[10px] uppercase tracking-widest pt-4 pb-2",
                        cell: "text-center p-0 relative focus-within:relative focus-within:z-20",
                        day: "h-10 w-10 p-0 font-bold aria-selected:opacity-100 hover:bg-emerald-50 rounded-xl transition-all",
                        day_selected: "bg-emerald-600 text-white hover:bg-emerald-700 hover:text-white focus:bg-emerald-600 focus:text-white shadow-lg shadow-emerald-100",
                        day_today: "bg-slate-100 text-slate-900",
                      }}
                    />
                    <div className="mt-8 p-6 bg-slate-50 rounded-2xl border border-dashed border-slate-200">
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">Event Legend</p>
                      <div className="flex gap-4">
                        <div className="flex items-center gap-2 text-[10px] font-bold text-slate-600"><span className="w-2 h-2 rounded-full bg-blue-500"></span> Tournament</div>
                        <div className="flex items-center gap-2 text-[10px] font-bold text-slate-600"><span className="w-2 h-2 rounded-full bg-orange-500"></span> Workshop</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Event Schedule Side */}
                <div className="lg:col-span-8">
                  <div className="bg-white p-10 md:p-16 rounded-[3rem] shadow-xl shadow-slate-200/50 border border-slate-100 min-h-[600px]">
                    <div className="flex justify-between items-end mb-12 border-b border-slate-50 pb-8">
                      <div>
                        <h3 className="text-3xl font-black text-slate-900 tracking-tight">Daily Schedule</h3>
                        <p className="text-slate-500 font-medium">Portals open for {selectedDate ? format(selectedDate, "MMMM dd, yyyy") : "Academy Events"}</p>
                      </div>
                      {selectedDate && (
                         <div className="px-5 py-2 rounded-xl bg-emerald-50 border border-emerald-100 text-emerald-700 text-xs font-black uppercase tracking-widest">
                            {format(selectedDate, "EEEE")}
                         </div>
                      )}
                    </div>
                    
                    <div className="space-y-6">
                      {filteredEvents
                        .filter(e => selectedDate ? e.date === format(selectedDate, "yyyy-MM-dd") : true)
                        .length > 0 ? (
                        filteredEvents
                          .filter(e => selectedDate ? e.date === format(selectedDate, "yyyy-MM-dd") : true)
                          .map(event => (
                            <div key={event.id} className="flex flex-col md:flex-row items-center gap-8 p-8 border border-slate-50 rounded-[2rem] bg-slate-50/30 hover:bg-white hover:border-emerald-100 hover:shadow-xl hover:shadow-emerald-50 transition-all duration-500 group">
                               {/* Time Block */}
                               <div className="flex flex-row md:flex-col items-center md:items-start gap-3 min-w-[120px]">
                                  <span className="text-2xl font-black text-slate-900">{event.time.split(" ")[0]}</span>
                                  <span className="text-[10px] font-black text-slate-400 uppercase bg-white border border-slate-100 px-3 py-1 rounded-lg shadow-sm">{event.time.split(" ")[1]}</span>
                               </div>

                               {/* Information */}
                               <div className="flex-1 text-center md:text-left">
                                  <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-4">
                                     <h4 className="text-xl font-black text-slate-900 group-hover:text-emerald-600 transition-colors">{event.title}</h4>
                                     <span className={`px-4 py-1 rounded-lg text-[10px] font-black uppercase tracking-widest border ${
                                        event.color === 'blue' ? 'border-blue-100 text-blue-700 bg-blue-50' : 
                                        event.color === 'orange' ? 'border-orange-100 text-orange-700 bg-orange-50' : 'border-purple-100 text-purple-700 bg-purple-50'
                                     }`}>
                                        {event.category}
                                     </span>
                                  </div>
                                  <p className="text-slate-500 font-medium text-sm mb-6 leading-relaxed line-clamp-2">{event.description}</p>
                                  
                                  <div className="flex flex-wrap justify-center md:justify-start items-center gap-6 text-[11px] font-bold text-slate-400 uppercase tracking-widest">
                                     <span className="flex items-center gap-2"><MapPin className="w-4 h-4 text-emerald-500" /> {event.location}</span>
                                     <span className="flex items-center gap-2"><Trophy className="w-4 h-4 text-yellow-500" /> {event.prize}</span>
                                  </div>
                               </div>

                               {/* Action */}
                               <div className="mt-4 md:mt-0">
                                 <Link href="/contact">
                                    <Button variant="outline" className="h-12 px-6 rounded-xl border-slate-200 text-slate-900 hover:bg-emerald-600 hover:text-white hover:border-emerald-600 font-bold transition-all shadow-sm">
                                      Details
                                    </Button>
                                 </Link>
                               </div>
                            </div>
                          ))
                      ) : (
                        <div className="flex flex-col items-center justify-center py-32 text-center bg-slate-50/50 rounded-[3rem] border-2 border-dashed border-slate-100">
                           <CalendarIcon className="w-16 h-16 text-slate-200 mb-6" />
                           <h4 className="text-xl font-black text-slate-900 mb-2 tracking-tight">Rest Day.</h4>
                           <p className="text-slate-500 font-medium max-w-[240px] leading-relaxed">There are no institutional battles scheduled for this date.</p>
                           <Button 
                             variant="link" 
                             onClick={() => setSelectedDate(undefined)}
                             className="text-emerald-600 font-bold mt-4 hover:no-underline"
                           >
                             View Full Season
                           </Button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
}

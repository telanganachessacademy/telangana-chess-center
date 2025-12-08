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
  List
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
      title: "GM Rajesh Kumar Workshop",
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
    <div className="min-h-screen bg-slate-50 font-sans">
      
      {/* --- HERO SECTION --- */}
      <section className="relative pt-32 pb-20 bg-[#020617] overflow-hidden">
        {/* Abstract Background */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-orange-600/10 rounded-full blur-[100px] pointer-events-none -translate-x-1/3 translate-y-1/3"></div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <Badge className="mb-6 bg-blue-900/50 text-blue-300 border-blue-800 px-4 py-1.5 text-sm uppercase tracking-wider">
            Mark Your Calendars
          </Badge>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white tracking-tight">
            Upcoming <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-orange-400">Battles</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            From local blitz nights to state championships. Join our events to test your skills, learn from masters, and build your rating.
          </p>
        </div>
      </section>

      {/* --- FILTER & TABS --- */}
      <section className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-slate-200 py-4 shadow-sm">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            
            {/* Category Pills (Scrollable) */}
            <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 no-scrollbar">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap ${
                    selectedCategory === category.id
                      ? "bg-slate-900 text-white shadow-md"
                      : "bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 hover:border-slate-300"
                  }`}
                >
                  <category.icon className="w-4 h-4" />
                  {category.name}
                </button>
              ))}
            </div>
            
            {/* View Toggle Info */}
            <div className="hidden md:flex items-center gap-2 text-sm text-slate-500 font-medium">
               <Filter className="w-4 h-4" />
               Showing {filteredEvents.length} Events
            </div>
          </div>
        </div>
      </section>

      {/* --- MAIN CONTENT --- */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-7xl">
          <Tabs defaultValue="grid" className="w-full">
            
            {/* Tab Controls */}
            <div className="flex justify-end mb-8">
              <TabsList className="bg-slate-100 border border-slate-200 p-1">
                <TabsTrigger value="grid" className="data-[state=active]:bg-white data-[state=active]:shadow-sm">
                  <LayoutGrid className="w-4 h-4 mr-2" /> Grid
                </TabsTrigger>
                <TabsTrigger value="calendar" className="data-[state=active]:bg-white data-[state=active]:shadow-sm">
                  <CalendarIcon className="w-4 h-4 mr-2" /> Calendar
                </TabsTrigger>
              </TabsList>
            </div>

            {/* --- GRID VIEW --- */}
            <TabsContent value="grid">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredEvents.map((event) => {
                  // Dynamic Styling
                  const colorClass = 
                    event.color === 'blue' ? 'text-blue-600 bg-blue-50 border-blue-100' :
                    event.color === 'orange' ? 'text-orange-600 bg-orange-50 border-orange-100' :
                    event.color === 'purple' ? 'text-purple-600 bg-purple-50 border-purple-100' :
                    'text-green-600 bg-green-50 border-green-100';
                  
                  const btnClass = 
                    event.color === 'blue' ? 'bg-blue-600 hover:bg-blue-700' :
                    event.color === 'orange' ? 'bg-orange-600 hover:bg-orange-700' :
                    event.color === 'purple' ? 'bg-purple-600 hover:bg-purple-700' :
                    'bg-green-600 hover:bg-green-700';

                  return (
                    <Card key={event.id} className="group bg-white border border-slate-200 rounded-[2rem] overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full">
                      {/* Image Area */}
                      <div className="relative h-56 overflow-hidden">
                        <img 
                          src={event.image} 
                          alt={event.title} 
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                        
                        {/* Date Badge */}
                        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md rounded-xl p-2 text-center min-w-[60px] shadow-lg">
                          <span className="block text-xs font-bold text-slate-500 uppercase">{format(new Date(event.date), "MMM")}</span>
                          <span className="block text-2xl font-black text-slate-900">{format(new Date(event.date), "dd")}</span>
                        </div>

                        {/* Category Tag */}
                        <div className="absolute top-4 right-4">
                          <Badge className="bg-slate-900/80 backdrop-blur-md text-white border-0 hover:bg-slate-900 uppercase tracking-wider text-[10px]">
                            {event.category}
                          </Badge>
                        </div>
                      </div>

                      <CardContent className="p-6 flex flex-col flex-grow">
                        <div className="mb-4">
                          <h3 className="text-xl font-bold text-slate-900 mb-2 line-clamp-1">{event.title}</h3>
                          <p className="text-slate-500 text-sm line-clamp-2">{event.description}</p>
                        </div>

                        {/* Meta Details */}
                        <div className="space-y-3 mb-6">
                          <div className="flex items-center gap-3 text-sm text-slate-600">
                            <Clock className="w-4 h-4 text-slate-400" />
                            {event.time}
                          </div>
                          <div className="flex items-center gap-3 text-sm text-slate-600">
                            <MapPin className="w-4 h-4 text-slate-400" />
                            <span className="line-clamp-1">{event.location}</span>
                          </div>
                          <div className="flex items-center gap-3 text-sm text-slate-600">
                            <Users className="w-4 h-4 text-slate-400" />
                            {event.participants}
                          </div>
                        </div>

                        {/* Info Boxes */}
                        <div className="grid grid-cols-2 gap-3 mb-6 mt-auto">
                          <div className={`rounded-xl p-3 text-center border ${colorClass}`}>
                            <div className="text-[10px] font-bold uppercase opacity-70">Prize Pool</div>
                            <div className="font-bold">{event.prize}</div>
                          </div>
                          <div className="rounded-xl p-3 text-center border border-slate-100 bg-slate-50 text-slate-600">
                            <div className="text-[10px] font-bold uppercase opacity-70">Entry</div>
                            <div className="font-bold">{event.registrationFee}</div>
                          </div>
                        </div>

                        <Link href="/contact" className="w-full">
                          <Button className={`w-full rounded-xl font-bold h-12 shadow-md ${btnClass}`}>
                            Register Now <ArrowRight className="w-4 h-4 ml-2" />
                          </Button>
                        </Link>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </TabsContent>

            {/* --- CALENDAR VIEW --- */}
            <TabsContent value="calendar">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                
                {/* Calendar Selector */}
                <div className="lg:col-span-4">
                  <div className="bg-white p-6 rounded-[2rem] shadow-xl border border-slate-100 sticky top-24">
                    <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                       <CalendarIcon className="w-5 h-5 text-blue-600" /> Select Date
                    </h3>
                    <Calendar
                      mode="single"
                      selected={selectedDate}
                      onSelect={setSelectedDate}
                      className="rounded-xl border border-slate-100 p-4"
                      classNames={{
                        head_cell: "text-slate-400 font-medium text-sm pt-4 pb-2",
                        cell: "text-center text-sm p-0 relative [&:has([aria-selected])]:bg-blue-50 first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
                        day: "h-9 w-9 p-0 font-normal aria-selected:opacity-100 hover:bg-slate-100 rounded-full transition-colors",
                        day_selected: "bg-blue-600 text-white hover:bg-blue-700 hover:text-white focus:bg-blue-600 focus:text-white",
                        day_today: "bg-slate-100 text-slate-900",
                      }}
                    />
                    <div className="mt-6 p-4 bg-slate-50 rounded-xl border border-slate-100">
                      <p className="text-xs text-slate-500 mb-2"><strong>Tip:</strong> Dates with dots indicate scheduled events.</p>
                      <div className="flex gap-2">
                        <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                        <span className="w-2 h-2 rounded-full bg-orange-500"></span>
                        <span className="w-2 h-2 rounded-full bg-purple-500"></span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Event List for Date */}
                <div className="lg:col-span-8">
                  <div className="bg-white p-8 rounded-[2rem] shadow-xl border border-slate-100 min-h-[500px]">
                    <div className="flex justify-between items-end mb-8 border-b border-slate-100 pb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-slate-900">Schedule</h3>
                        <p className="text-slate-500">Events for {selectedDate ? format(selectedDate, "MMMM dd, yyyy") : "Selected Date"}</p>
                      </div>
                      {selectedDate && (
                         <Badge variant="outline" className="border-blue-200 text-blue-600 bg-blue-50">
                            {format(selectedDate, "EEEE")}
                         </Badge>
                      )}
                    </div>
                    
                    <div className="space-y-4">
                      {filteredEvents
                        .filter(e => selectedDate ? e.date === format(selectedDate, "yyyy-MM-dd") : true)
                        .length > 0 ? (
                        filteredEvents
                          .filter(e => selectedDate ? e.date === format(selectedDate, "yyyy-MM-dd") : true)
                          .map(event => (
                            <div key={event.id} className="flex flex-col sm:flex-row items-start gap-6 p-6 border border-slate-100 rounded-2xl hover:border-blue-200 hover:shadow-md transition-all group">
                               {/* Time Column */}
                               <div className="flex flex-row sm:flex-col items-center sm:items-start gap-2 min-w-[100px]">
                                  <span className="text-lg font-bold text-slate-900">{event.time.split(" ")[0]}</span>
                                  <span className="text-xs font-bold text-slate-400 uppercase bg-slate-100 px-2 py-0.5 rounded">{event.time.split(" ")[1]}</span>
                               </div>

                               {/* Content */}
                               <div className="flex-1">
                                  <div className="flex justify-between items-start mb-2">
                                     <h4 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">{event.title}</h4>
                                     <Badge className={`uppercase text-[10px] ${
                                        event.color === 'blue' ? 'bg-blue-100 text-blue-700 hover:bg-blue-200' : 
                                        event.color === 'orange' ? 'bg-orange-100 text-orange-700 hover:bg-orange-200' : 'bg-purple-100 text-purple-700 hover:bg-purple-200'
                                     }`}>
                                        {event.category}
                                     </Badge>
                                  </div>
                                  <p className="text-slate-500 text-sm mb-4">{event.description}</p>
                                  
                                  <div className="flex items-center gap-4 text-xs font-medium text-slate-400">
                                     <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> {event.location}</span>
                                     <span className="flex items-center gap-1"><Trophy className="w-3 h-3 text-yellow-500" /> Prize: {event.prize}</span>
                                  </div>
                               </div>

                               {/* Action */}
                               <div className="mt-4 sm:mt-0">
                                 <Link href="/contact">
                                    <Button size="sm" variant="outline" className="border-blue-200 text-blue-600 hover:bg-blue-600 hover:text-white transition-colors">
                                      Details
                                    </Button>
                                 </Link>
                               </div>
                            </div>
                          ))
                      ) : (
                        <div className="text-center py-20 bg-slate-50 rounded-2xl border-dashed border-2 border-slate-200">
                           <CalendarIcon className="w-12 h-12 text-slate-300 mx-auto mb-4" />
                           <h4 className="text-slate-900 font-bold mb-1">No Events Found</h4>
                           <p className="text-slate-500 text-sm">There are no events scheduled for this specific date.</p>
                           <Button 
                             variant="link" 
                             onClick={() => setSelectedDate(undefined)}
                             className="text-blue-600 mt-2"
                           >
                             View all events instead
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
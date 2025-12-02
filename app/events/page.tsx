"use client"

import { useState } from "react"
import Link from "next/link";
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  CalendarIcon,
  Clock,
  MapPin,
  Users,
  Trophy,
  BookOpen,
  Star,
  ArrowRight,
  Filter,
} from "lucide-react"
import { format } from "date-fns"

export default function EventsPage() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date())
  const [selectedCategory, setSelectedCategory] = useState("all")

  const events = [
    {
      id: 1,
      title: "State Championship 2024",
      category: "tournament",
      date: "2024-03-15",
      time: "09:00 AM",
      location: "Hyderabad Convention Center",
      participants: "200+",
      prize: "₹50,000",
      description: "Annual state-level championship open to all ages.",
      image: "/chess-tournament.png",
      status: "upcoming",
      registrationFee: "₹500",
      color: "from-red-600 to-rose-700",
    },
    {
      id: 2,
      title: "Grandmaster Workshop",
      category: "workshop",
      date: "2024-03-08",
      time: "02:00 PM",
      location: "Academy Main Hall",
      participants: "50",
      prize: "Certificate",
      description: "Exclusive workshop by GM Rajesh Kumar on advanced openings.",
      image: "/chess-workshop.jpg",
      status: "upcoming",
      registrationFee: "₹800",
      color: "from-blue-600 to-cyan-700",
    },
    {
      id: 3,
      title: "Youth Rapid Tournament",
      category: "tournament",
      date: "2024-03-22",
      time: "10:00 AM",
      location: "Online Platform",
      participants: "100+",
      prize: "₹15,000",
      description: "Fast-paced tournament for players under 18.",
      image: "/youth-chess.jpg",
      status: "upcoming",
      registrationFee: "₹300",
      color: "from-green-600 to-emerald-700",
    },
    {
      id: 4,
      title: "Chess Psychology Seminar",
      category: "seminar",
      date: "2024-03-12",
      time: "11:00 AM",
      location: "Academy Conference Room",
      participants: "30",
      prize: "Certificate",
      description: "Learn mental strategies and psychology of competitive chess.",
      image: "/chess-psychology.jpg",
      status: "upcoming",
      registrationFee: "₹600",
      color: "from-purple-600 to-pink-700",
    },
    {
      id: 5,
      title: "Simultaneous Exhibition",
      category: "exhibition",
      date: "2024-03-18",
      time: "04:00 PM",
      location: "City Chess Club",
      participants: "40",
      prize: "Experience",
      description: "Play simultaneous games against GM Rajesh Kumar.",
      image: "/chess-simultaneous.jpg",
      status: "upcoming",
      registrationFee: "₹200",
      color: "from-yellow-600 to-orange-700",
    },
    {
      id: 6,
      title: "Women's Chess Day",
      category: "special",
      date: "2024-03-25",
      time: "09:30 AM",
      location: "Academy Main Hall",
      participants: "80",
      prize: "₹10,000",
      description: "Tournament & workshop celebrating women.",
      image: "/women-chess.jpg",
      status: "upcoming",
      registrationFee: "₹400",
      color: "from-pink-600 to-rose-700",
    },
  ]

  const categories = [
    { id: "all", name: "All Events", icon: CalendarIcon },
    { id: "tournament", name: "Tournaments", icon: Trophy },
    { id: "workshop", name: "Workshops", icon: BookOpen },
    { id: "seminar", name: "Seminars", icon: Users },
    { id: "exhibition", name: "Exhibitions", icon: Star },
    { id: "special", name: "Special Events", icon: Star },
  ]

  const filteredEvents =
    selectedCategory === "all"
      ? events
      : events.filter(event => event.category === selectedCategory)

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
      {/* Hero Section */}
      <section className="pt-16 sm:pt-24 md:pt-32 pb-8 sm:pb-12 md:pb-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <Badge className="mb-4 sm:mb-6 bg-gradient-to-r from-blue-600 to-cyan-700 text-white px-3 sm:px-4 py-1 sm:py-2 text-sm sm:text-base">
            Events & Tournaments
          </Badge>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 sm:mb-6 md:mb-8 bg-gradient-to-r from-blue-700 to-cyan-800 bg-clip-text text-transparent">
            Chess Events Calendar
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Join exciting tournaments, workshops, and special events. Compete with peers and learn from grandmasters.
          </p>
        </div>
      </section>

      {/* Event Categories */}
      <section className="bg-white py-8 sm:py-10 md:py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 md:mb-12 text-center bg-gradient-to-r from-blue-700 to-cyan-800 bg-clip-text text-transparent">
            Event Categories
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 sm:gap-3 md:gap-4">
            {categories.map(category => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                className={`p-2 sm:p-3 md:p-4 h-auto flex flex-col items-center gap-1 sm:gap-2 ${
                  selectedCategory === category.id
                    ? "bg-gradient-to-r from-blue-600 to-cyan-700 text-white"
                    : "border border-slate-300 text-slate-700 bg-white hover:bg-blue-50"
                }`}
                onClick={() => setSelectedCategory(category.id)}
              >
                <category.icon className="w-5 sm:w-6 h-5 sm:h-6" />
                <span className="text-xs sm:text-sm md:text-base font-medium">{category.name}</span>
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8 sm:py-12 md:py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <Tabs defaultValue="grid" className="w-full">
            <div className="flex flex-col sm:flex-row justify-between items-center mb-4 sm:mb-6 md:mb-8">
              <TabsList className="bg-white border border-slate-300 w-full sm:w-auto">
                <TabsTrigger value="grid" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white w-full sm:w-auto">
                  Grid View
                </TabsTrigger>
                <TabsTrigger value="calendar" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white w-full sm:w-auto">
                  Calendar View
                </TabsTrigger>
              </TabsList>
              <div className="flex items-center gap-2 text-gray-600 mt-4 sm:mt-0">
                <Filter className="w-4 sm:w-5 h-4 sm:h-5" />
                <span className="text-xs sm:text-sm">Showing {filteredEvents.length} of {events.length} events</span>
              </div>
            </div>

            <TabsContent value="grid">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
                {filteredEvents.map(event => (
                  <Card key={event.id} className="bg-white border-0 shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 overflow-hidden">
                    <div className={`h-2 bg-gradient-to-r ${event.color}`}></div>
                    <div className="relative">
                      <img src={event.image || "/placeholder.svg"} alt={event.title} className="w-full h-32 sm:h-40 md:h-48 object-cover" />
                      <div className="absolute top-2 sm:top-3 right-2 sm:right-3">
                        <Badge className={`bg-gradient-to-r ${event.color} text-white text-xs sm:text-sm`}>
                          {event.category.charAt(0).toUpperCase() + event.category.slice(1)}
                        </Badge>
                      </div>
                    </div>
                    <CardContent className="p-4 sm:p-6">
                      <h3 className="text-xl sm:text-2xl mb-2 sm:mb-3 font-semibold">{event.title}</h3>
                      <p className="text-gray-700 mb-2 sm:mb-4 text-sm sm:text-base">{event.description}</p>
                      <div className="space-y-2 sm:space-y-3 text-gray-700 mb-4 sm:mb-6">
                        <div className="flex items-center gap-2 sm:gap-3">
                          <CalendarIcon className="w-4 sm:w-5 h-4 sm:h-5 text-blue-600"/>
                          <span className="text-xs sm:text-sm">{format(new Date(event.date), "MMMM dd, yyyy")}</span>
                        </div>
                        <div className="flex items-center gap-2 sm:gap-3">
                          <Clock className="w-4 sm:w-5 h-4 sm:h-5 text-blue-600"/>
                          <span className="text-xs sm:text-sm">{event.time}</span>
                        </div>
                        <div className="flex items-center gap-2 sm:gap-3">
                          <MapPin className="w-4 sm:w-5 h-4 sm:h-5 text-blue-600"/>
                          <span className="text-xs sm:text-sm">{event.location}</span>
                        </div>
                        <div className="flex items-center gap-2 sm:gap-3">
                          <Users className="w-4 sm:w-5 h-4 sm:h-5 text-blue-600"/>
                          <span className="text-xs sm:text-sm">{event.participants} participants</span>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-2 sm:gap-4 mb-4 sm:mb-6">
                        <div className="text-center bg-blue-50 rounded-md p-2 sm:p-3 border border-blue-200">
                          <Trophy className="m-auto mb-1 sm:mb-2 w-5 sm:w-6 h-5 sm:h-6 text-blue-600"/>
                          <div className="font-semibold text-xs sm:text-sm">Prize</div>
                          <div className="text-blue-700 text-xs sm:text-sm">{event.prize}</div>
                        </div>
                        <div className="text-center bg-blue-50 rounded-md p-2 sm:p-3 border border-blue-200">
                          <CalendarIcon className="m-auto mb-1 sm:mb-2 w-5 sm:w-6 h-5 sm:h-6 text-blue-600"/>
                          <div className="font-semibold text-xs sm:text-sm">Entry Fee</div>
                          <div className="text-blue-700 text-xs sm:text-sm">{event.registrationFee}</div>
                        </div>
                      </div>

                      <Link href="/contact" className="cursor-pointer w-full sm:w-auto">
                      <Button className={`w-full bg-gradient-to-r ${event.color} text-white hover:opacity-90 px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base`}>
                        Register Now <ArrowRight className="ml-1 sm:ml-2 w-3 sm:w-4 h-3 sm:h-4"/>
                      </Button>
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="calendar">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
                <div className="lg:col-span-1">
                  <Card className="bg-white shadow-xl rounded-lg">
                    <CardContent className="p-2 sm:p-4">
                      <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-4">Select Date</h3>
                      <Calendar
                        mode="single"
                        selected={selectedDate}
                        onSelect={setSelectedDate}
                        disabled={date => date < new Date()}
                        className="rounded-md"
                      />
                    </CardContent>
                  </Card>
                </div>

                <div className="lg:col-span-2">
                  <Card className="bg-white shadow-xl rounded-lg">
                    <CardContent className="p-2 sm:p-4">
                      <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6">Events for {selectedDate ? format(selectedDate, "MMMM dd, yyyy") : "Selected Date"}</h3>
                      <div className="space-y-2 sm:space-y-4">
                        {filteredEvents
                          .filter(e => selectedDate ? e.date === format(selectedDate, "yyyy-MM-dd") : true)
                          .map(event => (
                            <div key={event.id} className="flex items-center gap-2 sm:gap-4 p-2 sm:p-4 border border-blue-200 rounded-md hover:border-blue-400 transition-colors">
                              <div className={`w-2 sm:w-4 h-2 sm:h-4 rounded-full ${event.color}`}></div>
                              <div className="flex-1">
                                <h4 className="font-semibold text-sm sm:text-base">{event.title}</h4>
                                <div className="flex gap-1 sm:gap-2 text-xs sm:text-sm text-gray-600 mt-1 sm:mt-2">
                                  <div className="flex items-center gap-1">
                                    <Clock className="w-3 sm:w-4 h-3 sm:h-4"/>
                                    {event.time}
                                  </div>
                                  <div className="flex items-center gap-1">
                                    <MapPin className="w-3 sm:w-4 h-3 sm:h-4"/>
                                    {event.location}
                                  </div>
                                </div>
                              </div>
                              <Button variant="outline" className="text-blue-700 border-blue-300 hover:bg-blue-50 px-2 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm">
                                View Details
                              </Button>
                            </div>
                          ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  )
}
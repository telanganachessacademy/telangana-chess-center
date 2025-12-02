import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Clock, Users, Star, ArrowRight } from "lucide-react"
import Link from "next/link";

export function CoursesSection() {
  const courses = [
    {
      title: "Beginner Chess Course",
      description:
        "Perfect for those starting their chess journey. Learn basic rules, piece movements, and fundamental strategies.",
      duration: "4 weeks",
      students: "50+",
      rating: 4.9,
      price: "₹2,999",
      features: ["Basic rules and movements", "Opening principles", "Tactical patterns", "Endgame basics"],
    },
    {
      title: "Intermediate Chess Training",
      description: "Advance your skills with complex strategies, positional play, and tournament preparation.",
      duration: "8 weeks",
      students: "30+",
      rating: 4.8,
      price: "₹4,999",
      features: ["Advanced tactics", "Positional understanding", "Opening repertoire", "Tournament play"],
    },
    {
      title: "Advanced Masterclass",
      description: "Elite training for serious players aiming for competitive chess and rating improvement.",
      duration: "12 weeks",
      students: "15+",
      rating: 5.0,
      price: "₹7,999",
      features: ["Master-level analysis", "Psychological preparation", "Advanced endgames", "Personal coaching"],
    },
  ]

  return (
    <section id="courses" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Our Courses</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Choose from our comprehensive chess training programs designed for every skill level.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-scale"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-6">
                <h3 className="text-xl font-bold text-foreground mb-3">{course.title}</h3>
                <p className="text-muted-foreground text-pretty mb-4">{course.description}</p>

                <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="w-4 h-4" />
                    <span>{course.students}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 fill-current text-yellow-500" />
                    <span>{course.rating}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-2 mb-6">
                {course.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="border-t border-border pt-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-foreground">{course.price}</span>
                  <span className="text-sm text-muted-foreground">per course</span>
                </div>
                <Link href="/contact" className="flex items-center cursor-pointer">
                <Button className="w-full bg-accent hover:bg-accent/90 group">
                  Enroll Now
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

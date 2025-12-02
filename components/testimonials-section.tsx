import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

export function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      name: "Jyothi Yadav",
      role: "Intermediate Player",
      rating: 5,
      content:
        "My daughter has improved tremendously since joining the academy. The instructors are patient, knowledgeable, and make learning chess fun and engaging.",
      image: "/jyothi.png",
      bgColorClass: "bg-purple-50",
      borderColorClass: "border-purple-200",
      starColorClass: "text-purple-600",
    },
    {
      id: 2,
      name: "Khilend Sahu",
      role: "Adult Beginner",
      rating: 5,
      content:
        "I started as a complete beginner and now I'm competing in local tournaments. The structured curriculum and personalized attention made all the difference.",
      image: "/khilend.png",
      bgColorClass: "bg-blue-50",
      borderColorClass: "border-blue-200",
      starColorClass: "text-blue-600",
    },
    {
      id: 3,
      name: "Arjun Biru",
      role: "intermediate Player",
      rating: 5,
      content:
        "The online coaching sessions are fantastic! I can learn from expert coaches from the comfort of my home. My rating has increased by 300 points in 6 months.",
      image: "/arjun.png",
      bgColorClass: "bg-green-50",
      borderColorClass: "border-green-200",
      starColorClass: "text-green-600",
    },
    {
      id: 4,
      name: "Dandu Ravi",
      role: "Tournament Player",
      rating: 5,
      content:
        "The academy's focus on both tactical and strategic understanding has elevated my game to the next level. I recently won my first regional tournament!",
      image: "/dandu.png",
      bgColorClass: "bg-pink-50",
      borderColorClass: "border-pink-200",
      starColorClass: "text-pink-600",
    },
    {
      id: 5,
      name: "Krarjun gaud",
      role: "Parent of 8-year-old",
      rating: 5,
      content:
        "The coaches here understand how to work with young children. My son looks forward to every lesson and has developed excellent concentration skills.",
      image: "/gaud.png",
      bgColorClass: "bg-purple-50",
      borderColorClass: "border-purple-200",
      starColorClass: "text-purple-600",
    },
    {
      id: 6,
      name: "Chandu Shekhar",
      role: "Student",
      rating: 5,
      content:
        "Never thought I could learn chess, but the patient instructors proved me wrong. Chess has become my favorite hobby and mental exercise.",
      image: "/andu.png",
      bgColorClass: "bg-blue-50",
      borderColorClass: "border-blue-200",
      starColorClass: "text-blue-600",
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#F5F7FA] via-[#E2E8F0] to-[#2B6CB0]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2D3748] mb-4">
            What Our Students Say
          </h2>
          <p className="text-lg text-[#4A5568] max-w-2xl mx-auto">
            Hear from our community of chess enthusiasts about their learning journey and achievements at our academy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.id}
              className={`${testimonial.bgColorClass} hover-lift border-2 ${testimonial.borderColorClass} hover:border-opacity-70 transition-all duration-300`}
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 fill-current ${testimonial.starColorClass}`}
                    />
                  ))}
                </div>

                <div className="relative mb-4">
                  <Quote className="h-8 w-8 text-current absolute -top-2 -left-2 text-opacity-20" />
                  <p className="text-[#4A5568] italic pl-6">"{testimonial.content}"</p>
                </div>

                <div className="flex items-center gap-3">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-opacity-20 border-current"
                  />
                  <div>
                    <h4 className="font-semibold text-[#2D3748]">{testimonial.name}</h4>
                    <p className="text-sm text-[#4A5568]">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-white rounded-lg p-8 border border-[#E2E8F0]">
            <h3 className="text-2xl font-bold text-[#2D3748] mb-4">Join Our Success Stories</h3>
            <p className="text-[#4A5568] mb-6 max-w-2xl mx-auto">
              Whether you're a complete beginner or looking to improve your competitive play, our academy provides the perfect environment for chess growth and achievement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#2B6CB0]">500+</div>
                <div className="text-sm text-[#4A5568]">Happy Students</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#9F7AEA]">95%</div>
                <div className="text-sm text-[#4A5568]">Satisfaction Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#2B6CB0]">50+</div>
                <div className="text-sm text-[#4A5568]">Tournament Winners</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

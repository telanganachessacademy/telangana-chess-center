import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Clock, Star, Users } from "lucide-react";
import Link from "next/link";

export function DemoBookingCTA() {
  const benefits = [
    {
      icon: BookOpen,
      title: "Personalized Assessment",
      description:
        "Get a comprehensive evaluation of your current chess level and skills",
      bgColorClass: "bg-blue-50",
      iconBgClass: "bg-blue-200",
      iconTextClass: "text-blue-600",
    },
    {
      icon: Users,
      title: "Meet Your Coach",
      description:
        "Connect with one of our experienced instructors who matches your learning style",
      bgColorClass: "bg-purple-50",
      iconBgClass: "bg-purple-200",
      iconTextClass: "text-purple-600",
    },
    {
      icon: Clock,
      title: "Flexible Scheduling",
      description: "Choose a time that works best for your schedule, including evenings and weekends",
      bgColorClass: "bg-pink-50",
      iconBgClass: "bg-pink-200",
      iconTextClass: "text-pink-600",
    },
    {
      icon: Star,
      title: "Customized Learning Plan",
      description: "Receive a tailored roadmap to improve your chess skills effectively",
      bgColorClass: "bg-green-50",
      iconBgClass: "bg-green-200",
      iconTextClass: "text-green-600",
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#F5F7FA] via-[#E2E8F0] to-[#2B6CB0]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2D3748] mb-4">
            Ready to Start Your Chess Journey?
          </h2>
          <p className="text-lg text-[#4A5568] max-w-2xl mx-auto mb-8">
            Book a free demo lesson today and discover how our expert instructors can help you master the game of chess.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/contact" className="cursor-pointer w-full sm:w-auto">
            <Button
              size="lg"
              className="bg-[#2B6CB0] hover:bg-[#2B6CB0]/90 text-white px-8 py-3 text-lg"
            >
              Book Free Demo Lesson
            </Button>
            </Link>
            <Button
              variant="outline"
              size="lg"
              className="border-[#9F7AEA] text-[#9F7AEA] hover:bg-[#9F7AEA] hover:text-white px-8 py-3 text-lg bg-transparent"
            >
              Call Us: +91-9864646481
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <Card
                key={index}
                className={`text-center hover-lift border-2 border-[#E2E8F0] hover:border-[#2B6CB0]/50 transition-all duration-300 ${benefit.bgColorClass}`}
              >
                <CardContent className="p-6">
                  <div
                    className={`mx-auto w-12 h-12 rounded-full flex items-center justify-center mb-4 ${benefit.iconBgClass}`}
                  >
                    <IconComponent className={`h-6 w-6 ${benefit.iconTextClass}`} />
                  </div>
                  <h3 className="text-lg font-semibold text-[#2D3748] mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-[#4A5568]">{benefit.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-12 bg-white rounded-lg p-8 border border-[#E2E8F0]">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-[#2D3748] mb-4">
              What to Expect in Your Demo Lesson
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              {[{
                number: 1,
                title: "Skill Assessment",
                description:
                  "We'll evaluate your current chess knowledge and playing strength",
              }, {
                number: 2,
                title: "Interactive Lesson",
                description:
                  "Experience our teaching methodology with a sample lesson",
              }, {
                number: 3,
                title: "Learning Plan",
                description:
                  "Get a personalized roadmap for your chess improvement journey",
              }].map((item) => (
                <div key={item.number} className="text-center">
                  <div className="w-8 h-8 bg-[#2B6CB0] text-white rounded-full flex items-center justify-center mx-auto mb-3 text-lg font-bold">
                    {item.number}
                  </div>
                  <h4 className="font-semibold text-[#2D3748] mb-2">{item.title}</h4>
                  <p className="text-sm text-[#4A5568]">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

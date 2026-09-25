import { HeroSection } from "@/components/hero-section";
import { StatsSection } from "@/components/stats-section";
import { CoursesSection } from "@/components/courses-section";
import { EventsPreview } from "@/components/events-preview";
import { TeamSection } from "@/components/team-section";
import { DemoBookingCTA } from "@/components/demo-booking-cta";
import { TestimonialsSection } from "@/components/testimonials-section";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <main>
        <HeroSection />
        <StatsSection />
        <CoursesSection />
        <EventsPreview />
        <TeamSection />
        <DemoBookingCTA />
        <TestimonialsSection />
      </main>
    </div>
  );
}

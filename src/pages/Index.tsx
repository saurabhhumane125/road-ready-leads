import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CoursesSection from "@/components/CoursesSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import StatsSection from "@/components/StatsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import BookingForm from "@/components/BookingForm";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import WhatsAppButton from "@/components/WhatsAppButton";
import StickyCTABar from "@/components/StickyCTABar";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <HeroSection />
    <CoursesSection />
    <WhyChooseUs />
    <StatsSection />
    <TestimonialsSection />
    <BookingForm />
    <FAQSection />
    <ContactSection />
    <Footer />
    <WhatsAppButton />
    <StickyCTABar />
  </div>
);

export default Index;

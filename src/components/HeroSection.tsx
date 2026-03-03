import { Phone, MessageCircle, ShieldCheck, Car, FileText } from "lucide-react";
import { motion } from "framer-motion";
import heroImg from "@/assets/hero-driving.jpg";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-card">
      {/* Hero image with overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Professional driving instructor with training car"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/70 via-foreground/60 to-foreground/80" />
      </div>

      <div className="relative section-padding py-16 sm:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="max-w-lg"
        >
          <h1 className="text-[22px] sm:text-[28px] lg:text-4xl font-extrabold leading-tight text-primary-foreground mb-3">
            Professional Driving Lessons in Panvel
          </h1>
          <div className="flex flex-col gap-2 mb-6">
            {[
              { icon: ShieldCheck, text: "Government Certified Instructors" },
              { icon: Car, text: "Dual Control Vehicles" },
              { icon: FileText, text: "RTO License Assistance" },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-2 text-primary-foreground/90">
                <Icon className="w-4 h-4 flex-shrink-0" />
                <span className="text-sm font-medium">{text}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="#booking"
              className="flex items-center justify-center gap-2 bg-accent text-accent-foreground font-semibold py-3.5 px-6 rounded-xl text-base w-full sm:w-auto hover:opacity-90 transition-opacity"
            >
              Book a Demo Class
            </a>
            <a
              href="tel:+918355892201"
              className="flex items-center justify-center gap-2 bg-primary-foreground/20 backdrop-blur text-primary-foreground font-semibold py-3.5 px-6 rounded-xl text-base w-full sm:w-auto border border-primary-foreground/30 hover:bg-primary-foreground/30 transition-colors"
            >
              <Phone className="w-4 h-4" />
              Call Now
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

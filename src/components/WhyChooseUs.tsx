import { Award, UserCheck, Clock, MapPin, TrendingUp, FileCheck } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const features = [
  { icon: Award, title: "Certified Instructors", desc: "Government licensed & trained professionals" },
  { icon: UserCheck, title: "Female Instructor Available", desc: "Comfortable learning for all students" },
  { icon: Clock, title: "Flexible Timings", desc: "Morning, afternoon & weekend batches" },
  { icon: MapPin, title: "Pickup & Drop", desc: "Door-to-door convenience for students" },
  { icon: TrendingUp, title: "95% Pass Rate", desc: "Proven track record of success" },
  { icon: FileCheck, title: "RTO Documentation", desc: "Complete assistance with paperwork" },
];

const WhyChooseUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="why-us" className="section-spacing bg-card">
      <div className="container">
        <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-1">Why Choose Us</h2>
        <p className="text-sm text-muted-foreground mb-8">What sets DriveSmart apart</p>

        <div ref={ref} className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 15 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.35, delay: i * 0.08 }}
                className="flex flex-col items-center text-center p-4 rounded-xl bg-background"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground text-sm mb-0.5">{f.title}</h3>
                <p className="text-xs text-muted-foreground leading-snug">{f.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

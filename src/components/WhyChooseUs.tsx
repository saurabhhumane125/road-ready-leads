import { Award, Clock, MapPin, FileCheck } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "Govt. Certified Instructors",
    desc: "All our trainers hold valid government licenses and undergo regular skill assessments. You're learning from professionals, not part-timers.",
  },
  {
    icon: Clock,
    title: "Flexible Timings",
    desc: "Morning, evening, and weekend slots available. We adjust around your schedule — not the other way around.",
  },
  {
    icon: MapPin,
    title: "Pickup & Drop",
    desc: "Our instructor picks you up from your doorstep and drops you back. No commute hassle, just learn and go.",
  },
  {
    icon: FileCheck,
    title: "Full RTO Assistance",
    desc: "From documentation to test preparation — we handle the entire RTO process so you don't have to worry.",
  },
];

const WhyChooseUs = () => {
  return (
    <section id="why-us" className="section-spacing bg-card">
      <div className="section-padding">
        <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-1">Why Choose Us</h2>
        <p className="text-sm text-muted-foreground mb-6">What sets CLASSIC MOTOR TRAINING SCHOOL apart</p>
      </div>

      <div className="flex gap-4 overflow-x-auto scroll-snap-x hide-scrollbar px-4 sm:px-6 pb-4">
        {features.map((f) => {
          const Icon = f.icon;
          return (
            <div
              key={f.title}
              className="min-w-[80%] sm:min-w-[320px] lg:min-w-0 lg:flex-1 bg-background rounded-xl border p-5 flex flex-col"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                <Icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-bold text-foreground text-base mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default WhyChooseUs;

import { Award, UserCheck, Clock, MapPin, TrendingUp, FileCheck } from "lucide-react";

const features = [
  { icon: Award, title: "Certified Instructors", desc: "Govt. licensed professionals" },
  { icon: UserCheck, title: "Female Instructor", desc: "Available on request" },
  { icon: Clock, title: "Flexible Timings", desc: "Morning & weekend slots" },
  { icon: MapPin, title: "Pickup & Drop", desc: "Door-to-door service" },
  { icon: TrendingUp, title: "95% Pass Rate", desc: "Proven success record" },
  { icon: FileCheck, title: "RTO Assistance", desc: "Full paperwork support" },
];

const WhyChooseUs = () => {
  return (
    <section id="why-us" className="py-10 bg-card">
      <div className="section-padding">
        <h2 className="text-lg font-bold text-foreground mb-0.5">Why Choose Us</h2>
        <p className="text-xs text-muted-foreground mb-4">What sets DriveSmart apart</p>
      </div>

      <div className="flex gap-3 overflow-x-auto scroll-snap-x hide-scrollbar px-4 sm:px-6 pb-3">
        {features.map((f) => {
          const Icon = f.icon;
          return (
            <div
              key={f.title}
              className="min-w-[130px] sm:min-w-[150px] shrink-0 bg-background rounded-xl border p-3.5 flex flex-col items-start"
            >
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                <Icon className="w-4 h-4 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground text-xs leading-tight mb-0.5">{f.title}</h3>
              <p className="text-[11px] text-muted-foreground leading-snug">{f.desc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default WhyChooseUs;

import { useState } from "react";
import { ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

const vehicles = [
  {
    name: "Maruti Swift",
    type: "Hatchback",
    emoji: "🚗",
    tag: "Most Popular",
    feature: "Dual Control",
    description:
      "India's favourite hatchback — easy to handle, great for city driving. Fitted with dual controls for safe learning.",
    specs: ["Dual Control Pedals", "Power Steering", "AC Cabin", "Instructor-Monitored"],
  },
  {
    name: "Hyundai i20",
    type: "Premium Hatchback",
    emoji: "🚙",
    tag: null,
    feature: "Dual Control",
    description:
      "A premium cabin experience. Learn driving with comfort and confidence in one of India's top-selling cars.",
    specs: ["Dual Control Pedals", "Premium Interior", "Smooth Clutch", "Highway Ready"],
  },
  {
    name: "Maruti Dzire",
    type: "Sedan",
    emoji: "🚘",
    tag: "Sedan Training",
    feature: "Dual Control",
    description:
      "Perfect for learning sedan handling, parking, and highway driving. Spacious and stable on all roads.",
    specs: ["Dual Control Pedals", "Sedan Body Feel", "Boot Parking Practice", "AC Cabin"],
  },
  {
    name: "Honda Activa",
    type: "Scooter",
    emoji: "🛵",
    tag: "Two-Wheeler",
    feature: "Auto Gear",
    description:
      "The most popular scooter in India. Learn balance, traffic handling, and confident riding on familiar roads.",
    specs: ["Automatic Transmission", "Light & Easy", "Traffic Training", "Beginner Friendly"],
  },
  {
    name: "Hero Splendor",
    type: "Motorcycle",
    emoji: "🏍️",
    tag: "Two-Wheeler",
    feature: "Manual Gear",
    description:
      "Master gear shifting, clutch control, and road confidence on India's most trusted motorcycle.",
    specs: ["Manual Gear Shift", "Clutch Training", "Road Safety Drills", "Highway Practice"],
  },
];

const FleetSection = () => {
  const [selected, setSelected] = useState<(typeof vehicles)[0] | null>(null);

  return (
    <section id="fleet" className="section-spacing bg-background">
      <div className="section-padding">
        <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-1">Our Training Fleet</h2>
        <p className="text-sm text-muted-foreground mb-6">
          Tap any vehicle to see details
        </p>
      </div>

      <div className="flex gap-4 overflow-x-auto scroll-snap-x hide-scrollbar px-4 sm:px-6 pb-4">
        {vehicles.map((v) => (
          <button
            key={v.name}
            onClick={() => setSelected(v)}
            className="min-w-[80%] sm:min-w-[320px] lg:min-w-0 lg:flex-1 bg-card rounded-xl border p-5 flex flex-col items-start text-left transition-shadow hover:shadow-md active:scale-[0.98]"
          >
            {v.tag && (
              <span className="text-[11px] font-semibold text-primary bg-primary/10 px-2.5 py-0.5 rounded-full mb-3">
                {v.tag}
              </span>
            )}
            <span className="text-4xl mb-3">{v.emoji}</span>
            <h3 className="font-bold text-foreground text-base">{v.name}</h3>
            <p className="text-sm text-muted-foreground mb-1">{v.type}</p>
            <div className="flex items-center gap-1.5 mt-auto pt-3 text-primary text-sm font-medium">
              <span>{v.feature}</span>
              <ChevronRight className="w-4 h-4" />
            </div>
          </button>
        ))}
      </div>

      <Dialog open={!!selected} onOpenChange={() => setSelected(null)}>
        <DialogContent className="max-w-sm mx-auto rounded-2xl">
          {selected && (
            <>
              <DialogHeader>
                <div className="text-5xl mb-2">{selected.emoji}</div>
                <DialogTitle className="text-xl">{selected.name}</DialogTitle>
                <DialogDescription className="text-sm">
                  {selected.type} · {selected.feature}
                </DialogDescription>
              </DialogHeader>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {selected.description}
              </p>
              <div className="space-y-2 mt-2">
                <p className="text-xs font-semibold text-foreground uppercase tracking-wider">What you get</p>
                {selected.specs.map((s) => (
                  <div key={s} className="flex items-center gap-2 text-sm text-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    {s}
                  </div>
                ))}
              </div>
              <a
                href="#booking"
                onClick={() => setSelected(null)}
                className="block text-center bg-primary text-primary-foreground font-semibold py-3 rounded-xl text-sm mt-4 hover:opacity-90 transition-opacity"
              >
                Book This Vehicle
              </a>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default FleetSection;

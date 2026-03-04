import { useState } from "react";
import { ChevronRight } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

import fleetWagonr from "@/assets/fleet-wagonr.jpg";
import fleetAura from "@/assets/fleet-aura.jpg";
import fleetDzire from "@/assets/fleet-dzire.jpg";
import fleetHero from "@/assets/fleet-hero.jpg";

const vehicles = [
  {
    name: "Maruti WagonR",
    type: "Hatchback",
    image: fleetWagonr,
    tag: "Most Popular",
    feature: "Dual Control",
    description:
      "India's trusted hatchback — spacious cabin, easy handling, and fitted with dual controls for safe learning on city roads.",
    specs: ["Dual Control Pedals", "Power Steering", "AC Cabin", "Instructor-Monitored"],
  },
  {
    name: "Hyundai Aura",
    type: "Sedan",
    image: fleetAura,
    tag: "Sedan Training",
    feature: "Dual Control",
    description:
      "Learn sedan driving with comfort and confidence. Perfect for mastering parking, highway driving, and smooth gear shifts.",
    specs: ["Dual Control Pedals", "Sedan Body Feel", "Smooth Clutch", "Highway Ready"],
  },
  {
    name: "Swift Dzire",
    type: "Sedan",
    image: fleetDzire,
    tag: null,
    feature: "Dual Control",
    description:
      "One of India's best-selling sedans. Practice real-world driving — city traffic, parking, and highway cruising with full instructor support.",
    specs: ["Dual Control Pedals", "Boot Parking Practice", "AC Cabin", "RTO Test Ready"],
  },
  {
    name: "Hero Honda",
    type: "Motorcycle",
    image: fleetHero,
    tag: "Two-Wheeler",
    feature: "Manual Gear",
    description:
      "Master gear shifting, clutch control, and road confidence on India's most trusted motorcycle. Ideal for beginners.",
    specs: ["Manual Gear Shift", "Clutch Training", "Road Safety Drills", "Traffic Practice"],
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
            className="min-w-[80%] sm:min-w-[320px] lg:min-w-0 lg:flex-1 rounded-xl border overflow-hidden flex flex-col text-left transition-shadow hover:shadow-md active:scale-[0.98] relative"
          >
            {/* Background image with overlay */}
            <div className="relative h-44 w-full">
              <img
                src={v.image}
                alt={v.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
              {v.tag && (
                <span className="absolute top-3 left-3 text-[11px] font-semibold text-primary-foreground bg-primary px-2.5 py-0.5 rounded-full">
                  {v.tag}
                </span>
              )}
              <div className="absolute bottom-3 left-4 right-4">
                <h3 className="font-bold text-white text-base">{v.name}</h3>
                <p className="text-sm text-white/80">{v.type}</p>
              </div>
            </div>
            <div className="p-4 bg-card">
              <div className="flex items-center gap-1.5 text-primary text-sm font-medium">
                <span>{v.feature}</span>
                <ChevronRight className="w-4 h-4" />
              </div>
            </div>
          </button>
        ))}
      </div>

      <Dialog open={!!selected} onOpenChange={() => setSelected(null)}>
        <DialogContent className="max-w-sm mx-auto rounded-2xl p-0 overflow-hidden">
          {selected && (
            <>
              <img
                src={selected.image}
                alt={selected.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <DialogHeader>
                  <DialogTitle className="text-xl">{selected.name}</DialogTitle>
                  <DialogDescription className="text-sm">
                    {selected.type} · {selected.feature}
                  </DialogDescription>
                </DialogHeader>
                <p className="text-sm text-muted-foreground leading-relaxed mt-3">
                  {selected.description}
                </p>
                <div className="space-y-2 mt-4">
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
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default FleetSection;

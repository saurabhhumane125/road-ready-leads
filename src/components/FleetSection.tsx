import { Car, Bike, Truck } from "lucide-react";

const vehicles = [
  {
    icon: Car,
    name: "Maruti Swift",
    type: "Hatchback",
    feature: "Dual Control",
    tag: "Most Popular",
  },
  {
    icon: Car,
    name: "Hyundai i20",
    type: "Hatchback",
    feature: "Dual Control",
    tag: null,
  },
  {
    icon: Car,
    name: "Maruti Dzire",
    type: "Sedan",
    feature: "Dual Control",
    tag: null,
  },
  {
    icon: Bike,
    name: "Honda Activa",
    type: "Scooter",
    feature: "Auto Gear",
    tag: "Two-Wheeler",
  },
  {
    icon: Bike,
    name: "Hero Splendor",
    type: "Motorcycle",
    feature: "Manual Gear",
    tag: "Two-Wheeler",
  },
  {
    icon: Truck,
    name: "Tata Ace",
    type: "LCV",
    feature: "Commercial",
    tag: "HMV Training",
  },
];

const FleetSection = () => {
  return (
    <section id="fleet" className="py-10 bg-background">
      <div className="section-padding">
        <h2 className="text-lg font-bold text-foreground mb-0.5">Our Training Fleet</h2>
        <p className="text-xs text-muted-foreground mb-4">Well-maintained vehicles you'll learn on</p>
      </div>

      <div className="flex gap-3 overflow-x-auto scroll-snap-x hide-scrollbar px-4 sm:px-6 pb-3">
        {vehicles.map((v) => {
          const Icon = v.icon;
          return (
            <div
              key={v.name}
              className="min-w-[160px] sm:min-w-[180px] shrink-0 bg-card rounded-xl border p-4 flex flex-col"
            >
              {v.tag && (
                <span className="text-[10px] font-semibold text-primary bg-primary/10 self-start px-2 py-0.5 rounded-full mb-2">
                  {v.tag}
                </span>
              )}
              <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center mb-2.5">
                <Icon className="w-5 h-5 text-foreground" />
              </div>
              <h3 className="font-semibold text-foreground text-sm">{v.name}</h3>
              <p className="text-xs text-muted-foreground mb-1">{v.type}</p>
              <span className="text-[11px] text-primary font-medium mt-auto">{v.feature}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FleetSection;

import { Car, Bike, RefreshCw, ShieldAlert } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

import courseLmv from "@/assets/course-lmv.jpg";
import courseTwowheeler from "@/assets/course-twowheeler.jpg";
import courseRefresher from "@/assets/course-refresher.jpg";
import courseDefensive from "@/assets/course-defensive.jpg";

const courses = [
  {
    icon: Car,
    image: courseLmv,
    title: "LMV (Car Training)",
    duration: "30 Days",
    price: "₹6,500",
    description: "Complete car driving course with dual control vehicles. Learn city and highway driving with certified instructors.",
    color: "bg-primary",
    includes: [
      "30 practical driving sessions (1 hour each)",
      "Dual control training vehicle",
      "City & highway driving practice",
      "Parking — parallel, reverse & slope",
      "Traffic rules & road sign training",
      "RTO test preparation & mock tests",
      "Pickup & drop from your location",
    ],
  },
  {
    icon: Bike,
    image: courseTwowheeler,
    title: "Two-Wheeler Training",
    duration: "15 Days",
    price: "₹3,000",
    description: "Master two-wheeler riding with traffic awareness, balance training, and road safety techniques.",
    color: "bg-accent",
    includes: [
      "15 practical riding sessions",
      "Balance & slow-speed control",
      "Gear shifting technique (if applicable)",
      "Traffic navigation & lane discipline",
      "Road safety & defensive riding",
      "RTO test preparation",
    ],
  },
  {
    icon: RefreshCw,
    image: courseRefresher,
    title: "Refresher Course",
    duration: "10 Days",
    price: "₹4,000",
    description: "Regain your driving confidence. Perfect for those who haven't driven in a while and need a quick brush-up.",
    color: "bg-success",
    includes: [
      "10 focused practice sessions",
      "Confidence building in traffic",
      "Highway & night driving tips",
      "Parking refresher",
      "Flexible timing slots",
    ],
  },
  {
    icon: ShieldAlert,
    image: courseDefensive,
    title: "Defensive Driving",
    duration: "7 Days",
    price: "₹5,000",
    description: "Advanced techniques for accident prevention, hazard anticipation, and safe driving in all conditions.",
    color: "bg-primary",
    includes: [
      "7 advanced driving sessions",
      "Hazard perception training",
      "Emergency braking & evasion",
      "Wet & night driving techniques",
      "Accident prevention strategies",
      "Certificate on completion",
    ],
  },
];

const CoursesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [selected, setSelected] = useState<(typeof courses)[0] | null>(null);

  return (
    <section id="courses" className="section-spacing bg-background">
      <div className="section-padding">
        <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-1">Our Courses</h2>
        <p className="text-sm text-muted-foreground mb-6">Tap any course to see what's included</p>
      </div>

      <div
        ref={ref}
        className="flex gap-4 overflow-x-auto scroll-snap-x hide-scrollbar px-4 sm:px-6 pb-4"
      >
        {courses.map((course, i) => {
          const Icon = course.icon;
          return (
            <motion.button
              key={course.title}
              onClick={() => setSelected(course)}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="min-w-[85%] sm:min-w-[300px] lg:min-w-0 lg:flex-1 bg-card rounded-xl border overflow-hidden flex flex-col text-left transition-shadow hover:shadow-md active:scale-[0.98]"
            >
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-36 object-cover"
              />
              <div className="p-4 flex flex-col flex-1">
                <div className={`w-10 h-10 ${course.color} rounded-lg flex items-center justify-center mb-3`}>
                  <Icon className="w-5 h-5 text-primary-foreground" />
                </div>
                <h3 className="font-bold text-foreground text-base mb-1">{course.title}</h3>
                <div className="flex items-center gap-3 text-sm text-muted-foreground mb-2">
                  <span>{course.duration}</span>
                  <span className="w-1 h-1 rounded-full bg-muted-foreground" />
                  <span className="font-semibold text-primary">{course.price}</span>
                </div>
                <p className="text-sm text-muted-foreground mb-4 flex-1">{course.description}</p>
                <span className="text-sm text-primary font-medium">View Details →</span>
              </div>
            </motion.button>
          );
        })}
      </div>

      <Dialog open={!!selected} onOpenChange={() => setSelected(null)}>
        <DialogContent className="max-w-sm mx-auto rounded-2xl">
          {selected && (
            <>
              <DialogHeader>
                <DialogTitle className="text-xl">{selected.title}</DialogTitle>
                <DialogDescription>
                  {selected.duration} · {selected.price}
                </DialogDescription>
              </DialogHeader>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {selected.description}
              </p>
              <div className="space-y-2.5 mt-2">
                <p className="text-xs font-semibold text-foreground uppercase tracking-wider">What's Included</p>
                {selected.includes.map((item) => (
                  <div key={item} className="flex items-start gap-2 text-sm text-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-1.5" />
                    {item}
                  </div>
                ))}
              </div>
              <a
                href="#booking"
                onClick={() => setSelected(null)}
                className="block text-center bg-primary text-primary-foreground font-semibold py-3 rounded-xl text-sm mt-4 hover:opacity-90 transition-opacity"
              >
                Enroll Now
              </a>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default CoursesSection;

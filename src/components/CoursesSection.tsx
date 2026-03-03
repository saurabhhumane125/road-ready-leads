import { Car, Bike, RefreshCw, ShieldAlert } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const courses = [
  {
    icon: Car,
    title: "LMV (Car Training)",
    duration: "30 Days",
    price: "₹6,500",
    description: "Complete car driving course with dual control vehicles. Learn city and highway driving with certified instructors.",
    color: "bg-primary",
  },
  {
    icon: Bike,
    title: "Two-Wheeler Training",
    duration: "15 Days",
    price: "₹3,000",
    description: "Master two-wheeler riding with traffic awareness, balance training, and road safety techniques.",
    color: "bg-accent",
  },
  {
    icon: RefreshCw,
    title: "Refresher Course",
    duration: "10 Days",
    price: "₹4,000",
    description: "Regain your driving confidence. Perfect for those who haven't driven in a while and need a quick brush-up.",
    color: "bg-success",
  },
  {
    icon: ShieldAlert,
    title: "Defensive Driving",
    duration: "7 Days",
    price: "₹5,000",
    description: "Advanced techniques for accident prevention, hazard anticipation, and safe driving in all conditions.",
    color: "bg-primary",
  },
];

const CoursesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="courses" className="section-spacing bg-background">
      <div className="section-padding">
        <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-1">Our Courses</h2>
        <p className="text-sm text-muted-foreground mb-6">Choose the program that fits your needs</p>
      </div>

      <div
        ref={ref}
        className="flex gap-4 overflow-x-auto scroll-snap-x hide-scrollbar px-4 sm:px-6 pb-4"
      >
        {courses.map((course, i) => {
          const Icon = course.icon;
          return (
            <motion.div
              key={course.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="min-w-[85%] sm:min-w-[300px] lg:min-w-0 lg:flex-1 bg-card rounded-xl border p-5 flex flex-col"
            >
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
              <a
                href="#booking"
                className="block text-center bg-primary text-primary-foreground font-semibold py-3 rounded-xl text-sm hover:opacity-90 transition-opacity"
              >
                Enroll Now
              </a>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default CoursesSection;

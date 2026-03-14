import { Star, Quote } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const testimonials = [
  {
    name: "Priya Sharma",
    review: "Amazing experience! I was nervous about driving but the instructors were so patient. Got my license on the first attempt!",
    rating: 5,
  },
  {
    name: "Rahul Patel",
    review: "Very professional training. The dual control car gave me a lot of confidence. Highly recommend ROAD READY DRIVING SCHOOL to everyone.",
    rating: 5,
  },
  {
    name: "Sneha Gupta",
    review: "The female instructor option was great for me. Flexible timings helped me manage my college schedule easily.",
    rating: 5,
  },
  {
    name: "Amit Desai",
    review: "Took the refresher course after 3 years of not driving. Within a week I was back on the road with full confidence.",
    rating: 4,
  },
];

const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="testimonials" className="section-spacing bg-card">
      <div className="section-padding">
        <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-1">What Our Students Say</h2>
        <p className="text-sm text-muted-foreground mb-6">Real reviews from real learners</p>
      </div>

      <div
        ref={ref}
        className="flex gap-4 overflow-x-auto scroll-snap-x hide-scrollbar px-4 sm:px-6 pb-4"
      >
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="min-w-[85%] sm:min-w-[300px] lg:min-w-0 lg:flex-1 bg-background rounded-xl border p-5"
          >
            <Quote className="w-6 h-6 text-primary/20 mb-2" />
            <p className="text-sm text-foreground mb-4 leading-relaxed">"{t.review}"</p>
            <div className="flex items-center gap-1 mb-1">
              {Array.from({ length: 5 }).map((_, si) => (
                <Star
                  key={si}
                  className={`w-3.5 h-3.5 ${si < t.rating ? "text-amber-500 fill-amber-500" : "text-muted"}`}
                />
              ))}
            </div>
            <p className="font-semibold text-sm text-foreground">{t.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;

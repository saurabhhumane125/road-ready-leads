import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

const stats = [
  { value: 5000, suffix: "+", label: "Students Trained" },
  { value: 10, suffix: "+", label: "Years Experience" },
  { value: 95, suffix: "%", label: "Pass Rate" },
];

const Counter = ({ target, suffix }: { target: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    const duration = 1500;
    const steps = 40;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <span ref={ref} className="text-2xl sm:text-3xl font-extrabold text-primary">
      {count.toLocaleString()}{suffix}
    </span>
  );
};

const StatsSection = () => (
  <section className="section-spacing bg-background">
    <div className="container">
      <div className="grid grid-cols-3 gap-4">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <Counter target={s.value} suffix={s.suffix} />
            <p className="text-xs sm:text-sm text-muted-foreground mt-1 font-medium">{s.label}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default StatsSection;

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Building2, Users2, UserCheck, Award } from "lucide-react";

const stats = [
  { icon: Building2, value: 100, suffix: "+", label: "Lenders Trusted" },
  { icon: Users2, value: 50, suffix: "+", label: "Cooperative Societies" },
  { icon: UserCheck, value: 1, suffix: "M+", label: "End Customers Served" },
  { icon: Award, value: 10, suffix: "+", label: "Years of Excellence" },
];

const AnimatedCounter = ({ target, suffix, inView }: { target: number; suffix: string; inView: boolean }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1500;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);

  return <span>{count}{suffix}</span>;
};

const StatsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="stats" className="py-20 md:py-28 relative overflow-hidden" style={{ background: "var(--hero-gradient)" }}>
      <div className="absolute inset-0 jaali-pattern opacity-30" />
      <div className="section-container relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/20 text-accent text-sm font-semibold mb-4">Why Choose Us</span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground text-balance">
            Trusted by Institutions Across India
          </h2>
          <p className="mt-4 text-primary-foreground/60 max-w-xl mx-auto">
            Scalable, secure, and compliant with industry standards. Local expertise, global quality.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 rounded-2xl p-6 md:p-8 text-center"
            >
              <div className="w-14 h-14 rounded-xl bg-accent/15 flex items-center justify-center mx-auto mb-4">
                <stat.icon size={28} className="text-accent" />
              </div>
              <p className="text-3xl md:text-4xl font-bold text-primary-foreground mb-1">
                <AnimatedCounter target={stat.value} suffix={stat.suffix} inView={isInView} />
              </p>
              <p className="text-sm text-primary-foreground/60">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;

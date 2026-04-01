import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Phone, Mail, MapPin } from "lucide-react";

const CTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="cta" className="py-20 md:py-28">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl overflow-hidden p-8 md:p-16 text-center"
          style={{ background: "var(--hero-gradient)" }}
        >
          <div className="absolute inset-0 jaali-pattern opacity-30" />
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground text-balance mb-6">
              Ready to Transform Your Institution?
            </h2>
            <p className="text-primary-foreground/70 max-w-xl mx-auto text-lg mb-10">
              Empower your institution with technology that delivers trust, speed, and growth. Let's build the future of finance together.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <a
                href="#"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-semibold text-accent-foreground shadow-lg hover:opacity-90 hover:scale-105 transition-all"
                style={{ background: "var(--accent-gradient)" }}
              >
                Request a Demo <ArrowRight size={18} />
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-semibold text-primary-foreground border border-primary-foreground/30 hover:bg-primary-foreground/10 transition-all"
              >
                Contact Us
              </a>
            </div>
            <div className="flex flex-wrap justify-center gap-8 text-primary-foreground/60 text-sm">
              <div className="flex items-center gap-2"><Phone size={16} className="text-accent" /> +91-XXXXXXXXXX</div>
              <div className="flex items-center gap-2"><Mail size={16} className="text-accent" /> info@ykinnosoft.com</div>
              <div className="flex items-center gap-2"><MapPin size={16} className="text-accent" /> India</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;

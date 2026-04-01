import { motion } from "framer-motion";
import { ArrowRight, Shield, Zap, Globe } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden" style={{ background: "var(--hero-gradient)" }}>
      {/* Jaali Pattern Overlay */}
      <div className="absolute inset-0 jaali-pattern opacity-40" />

      {/* Gradient Orbs */}
      <div className="absolute top-20 right-20 w-96 h-96 rounded-full bg-accent/10 blur-3xl" />
      <div className="absolute bottom-20 left-10 w-72 h-72 rounded-full bg-accent/5 blur-3xl" />

      <div className="section-container relative z-10 py-32 md:py-40">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary-foreground/20 bg-primary-foreground/5 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-sm text-primary-foreground/80 font-medium">Powering Innovation Since 2014</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight text-balance"
            >
              Smarter Banking,{" "}
              <span className="text-accent">Lending</span> &{" "}
              <span className="text-accent">Payments</span> Solutions
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 text-lg text-primary-foreground/70 max-w-lg leading-relaxed"
            >
              Delivering secure, scalable, and future-ready software for Cooperative Banks, NBFCs, and Fintechs. Drive digital transformation with trust and speed.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <a
                href="#cta"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg font-semibold text-accent-foreground transition-all hover:opacity-90 hover:scale-105 shadow-lg"
                style={{ background: "var(--accent-gradient)" }}
              >
                Request a Demo <ArrowRight size={18} />
              </a>
              <a
                href="#products"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg font-semibold text-primary-foreground border border-primary-foreground/30 hover:bg-primary-foreground/10 transition-all"
              >
                Explore Products
              </a>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-12 flex flex-wrap gap-6"
            >
              {[
                { icon: Shield, label: "Bank-Grade Security" },
                { icon: Zap, label: "99.9% Uptime" },
                { icon: Globe, label: "Pan-India Reach" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2 text-primary-foreground/60">
                  <Icon size={16} className="text-accent" />
                  <span className="text-sm">{label}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right - Dashboard Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:block"
          >
            <div className="relative">
              <div className="bg-card/10 backdrop-blur-sm rounded-2xl border border-primary-foreground/10 p-6 shadow-2xl">
                {/* Mock Dashboard */}
                <div className="bg-card rounded-xl p-5 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-foreground">Dashboard Overview</span>
                    <span className="text-xs text-accent font-medium">Live</span>
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { label: "Active Loans", value: "12,450", change: "+8.2%" },
                      { label: "Disbursed", value: "₹45.2Cr", change: "+12.5%" },
                      { label: "Collections", value: "₹38.7Cr", change: "+6.1%" },
                    ].map((stat) => (
                      <div key={stat.label} className="bg-secondary rounded-lg p-3">
                        <p className="text-xs text-muted-foreground">{stat.label}</p>
                        <p className="text-lg font-bold text-foreground">{stat.value}</p>
                        <p className="text-xs text-accent font-medium">{stat.change}</p>
                      </div>
                    ))}
                  </div>
                  {/* Chart Bars */}
                  <div className="flex items-end gap-2 h-24 pt-4">
                    {[40, 65, 50, 80, 60, 90, 75, 85, 70, 95, 80, 88].map((h, i) => (
                      <div
                        key={i}
                        className="flex-1 rounded-t-sm transition-all"
                        style={{
                          height: `${h}%`,
                          background: i >= 10 ? "var(--accent-gradient)" : "hsl(var(--primary) / 0.2)",
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
              {/* Floating Card */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                className="absolute -bottom-6 -left-6 bg-card rounded-xl shadow-lg border border-border p-4 flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                  <Zap size={18} className="text-accent" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Loan Approved</p>
                  <p className="text-sm font-semibold text-foreground">₹5,00,000</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

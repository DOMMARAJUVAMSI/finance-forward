import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Landmark, FileText, CreditCard, BookOpen, MessageSquare,
  ArrowRight, Users, Banknote, ShieldCheck, BarChart3
} from "lucide-react";

const products = [
  {
    id: "banking",
    icon: Landmark,
    category: "Banking Solutions",
    title: "SmartCBS – Core Banking System",
    description: "Web-based, secure, and scalable CBS for Cooperative Banks, Credit Societies, Microfinance, and NBFCs. Enable anywhere/anytime banking with multi-branch support.",
    features: ["Multi-Branch Banking", "Loan Management", "Mobile & Self-Service", "Membership Management"],
    tagline: "Bring commercial-bank-grade technology to your members.",
    featureIcons: [Users, Banknote, ShieldCheck, BarChart3],
  },
  {
    id: "lending",
    icon: FileText,
    category: "Lending & Financial Services",
    title: "SmartLOS & SmartLMS",
    description: "Automate loan origination, credit assessments, approvals, servicing, repayment tracking, and recovery for NBFCs, MFIs, and lenders.",
    features: ["Automated Approvals", "Credit Assessment", "Repayment Tracking", "Compliance Ready"],
    tagline: "Speed in approvals + control in repayments.",
    featureIcons: [ShieldCheck, BarChart3, Banknote, Users],
  },
  {
    id: "payments",
    icon: CreditCard,
    category: "Payments & Collections",
    title: "Saralajji",
    description: "One smart system for payouts and collections. Fast, secure vendor and salary disbursements with direct bank integration. Auto-reconciliation across NEFT, RTGS, IMPS, and UPI.",
    features: ["Outward Payments", "Inward Collections", "Bank Integration", "Auto-Reconciliation"],
    tagline: "One smart system for both payouts and collections.",
    featureIcons: [Banknote, Users, ShieldCheck, BarChart3],
  },
  {
    id: "accounting",
    icon: BookOpen,
    category: "Business Solutions",
    title: "SmartBooks – Accounting Software",
    description: "Automated bookkeeping, real-time insights, compliance, and seamless integration. Perfect for organizations of all sizes.",
    features: ["Real-time Insights", "Automated Bookkeeping", "Multi-branch Support", "Compliance Ready"],
    tagline: "Smarter Accounting, Smarter Decisions.",
    featureIcons: [BarChart3, ShieldCheck, Users, Banknote],
  },
  {
    id: "messaging",
    icon: MessageSquare,
    category: "Communication",
    title: "Messaging Solutions",
    description: "SMS & WhatsApp integration for instant alerts, updates, and customer engagement. Keep your members informed in real time.",
    features: ["SMS Alerts", "WhatsApp Integration", "Bulk Messaging", "Auto Notifications"],
    tagline: "Stay connected with every member.",
    featureIcons: [Users, ShieldCheck, BarChart3, Banknote],
  },
];

const ProductCard = ({ product, index }: { product: typeof products[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      id={product.id}
      className="group bg-card rounded-2xl accent-top-border shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden"
      style={{ boxShadow: "var(--card-shadow)" }}
      onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "var(--card-shadow-hover)")}
      onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "var(--card-shadow)")}
    >
      <div className="p-6 md:p-8">
        <div className="flex items-start gap-4 mb-4">
          <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
            <product.icon size={24} className="text-accent" />
          </div>
          <div>
            <span className="text-xs font-semibold text-accent uppercase tracking-wider">{product.category}</span>
            <h3 className="text-xl font-bold text-foreground mt-1">{product.title}</h3>
          </div>
        </div>

        <p className="text-muted-foreground text-sm leading-relaxed mb-5">{product.description}</p>

        <div className="grid grid-cols-2 gap-2 mb-5">
          {product.features.map((feature, i) => {
            const FeatureIcon = product.featureIcons[i];
            return (
              <div key={feature} className="flex items-center gap-2 text-sm text-foreground/80">
                <FeatureIcon size={14} className="text-accent flex-shrink-0" />
                {feature}
              </div>
            );
          })}
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-border">
          <span className="text-xs text-muted-foreground italic">"{product.tagline}"</span>
          <ArrowRight size={16} className="text-accent group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </motion.div>
  );
};

const ProductsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="products" className="py-20 md:py-28 jaali-pattern">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-4">Our Products</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">
            Transforming Finance with Technology
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            From Cooperative Societies to NBFCs and Fintechs — we help organizations drive digital transformation, operational efficiency, and customer delight.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;

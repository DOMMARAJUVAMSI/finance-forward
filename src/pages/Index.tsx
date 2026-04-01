import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProductsSection from "@/components/ProductsSection";
import StatsSection from "@/components/StatsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "YK Innosoft Technologies",
  url: "https://ykinnosoft.com",
  description: "Smarter Banking, Lending & Payments Solutions for Cooperative Banks, NBFCs, and Fintechs.",
  foundingDate: "2014",
  sameAs: [],
};

const Index = () => (
  <>
    <Helmet>
      <title>YK Innosoft – Smarter Banking, Lending & Payments Solutions</title>
      <meta name="description" content="YK Innosoft delivers secure, scalable software for Core Banking, Loan Management, Payments, and Accounting. Trusted by 100+ lenders and 50+ cooperative societies." />
      <meta name="keywords" content="Core Banking Software, Cooperative Bank Software, NBFC Software, Loan Management System, Loan Origination System, Microfinance Software, SmartCBS, SmartLMS, SmartLOS, Saralajji, SmartBooks" />
      <link rel="canonical" href="https://ykinnosoft.com" />
      <meta property="og:title" content="YK Innosoft – Smarter Banking, Lending & Payments Solutions" />
      <meta property="og:description" content="Powering Cooperative Banks, NBFCs, and Businesses with Innovation Since 2014." />
      <meta property="og:type" content="website" />
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </Helmet>
    <Navbar />
    <main>
      <HeroSection />
      <ProductsSection />
      <StatsSection />
      <CTASection />
    </main>
    <Footer />
  </>
);

export default Index;

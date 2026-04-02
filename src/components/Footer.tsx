const footerLinks = {
  Products: ["SmartCBS", "SmartLOS", "SmartLMS", "Saralajji", "SmartBooks"],
  Company: ["About Us", "Careers", "Blog", "Contact"],
  Resources: ["Documentation", "Support", "Privacy Policy", "Terms of Service"],
};

const Footer = () => (
  <footer className="bg-primary text-primary-foreground py-16">
    <div className="section-container">
      <div className="grid md:grid-cols-4 gap-10 mb-12">
        
        {/* ✅ LOGO REPLACED HERE */}
        <div>
          <div className="flex items-center mb-4">
            <img
              src="/logo.png"   // ✅ your logo path
              alt="YK Innosoft Logo"
              className="h-12 w-auto object-contain"
            />
          </div>

          <p className="text-primary-foreground/60 text-sm leading-relaxed">
            Powering Cooperative Banks, NBFCs, and Businesses with Innovation Since 2014.
          </p>
        </div>

        {Object.entries(footerLinks).map(([title, links]) => (
          <div key={title}>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-primary-foreground/80">
              {title}
            </h4>
            <ul className="space-y-2.5">
              {links.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-sm text-primary-foreground/50 hover:text-accent transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-primary-foreground/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-primary-foreground/40">
          © 2024 YK Innosoft Technologies. All rights reserved.
        </p>

        <p className="text-sm text-primary-foreground/40 flex items-center gap-1">
          Made with  in <span className="font-semibold text-accent">Bharat</span>
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
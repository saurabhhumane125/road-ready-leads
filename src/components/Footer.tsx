const Footer = () => (
  <footer className="bg-foreground text-background/70 py-8 pb-20 md:pb-8 section-padding">
    <div className="container text-center">
      <div className="flex items-center justify-center gap-2 mb-3">
        <img src="/logo.svg" alt="Road Ready Driving School logo" className="w-7 h-7 rounded-full" />
        <span className="font-bold text-background text-base">ROAD READY DRIVING SCHOOL</span>
      </div>
      <p className="text-sm mb-2">Professional Driving School in Mumbai</p>
      <p className="text-xs text-background/50">© 2025 ROAD READY DRIVING SCHOOL. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;

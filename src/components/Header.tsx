import { useState } from "react";
import { Phone, Menu, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "Courses", href: "#courses" },
    { label: "Why Us", href: "#why-us" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Book Now", href: "#booking" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-sm border-b">
      <div className="container flex items-center justify-between h-14 sm:h-16">
        <a href="#" className="flex items-center gap-2">
          <img src="/logo.png" alt="Classic Motor Training School logo" className="w-8 h-8 rounded-full" />
          <span className="font-bold text-foreground text-base sm:text-lg">CLASSIC MOTOR TRAINING SCHOOL</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="tel:+918355892201"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            <Phone className="w-4 h-4" />
            Call Now
          </a>
        </nav>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-foreground"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile nav */}
      {isOpen && (
        <nav className="md:hidden bg-card border-t pb-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-4 py-3 text-sm font-medium text-muted-foreground hover:text-primary hover:bg-muted transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="px-4 pt-2">
            <a
              href="tel:+918355892201"
              className="flex items-center justify-center gap-2 bg-primary text-primary-foreground w-full py-3 rounded-xl text-sm font-semibold"
            >
              <Phone className="w-4 h-4" />
              Call Now
            </a>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;

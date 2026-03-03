import { Phone, MessageCircle, Clock, MapPin } from "lucide-react";

const ContactSection = () => (
  <section id="contact" className="section-spacing bg-background">
    <div className="container">
      <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-1">Contact Us</h2>
      <p className="text-sm text-muted-foreground mb-6">We're here to help you get started</p>

      <div className="grid sm:grid-cols-2 gap-4 mb-6">
        <a
          href="tel:+919876543210"
          className="flex items-center gap-3 bg-card rounded-xl border p-4 hover:border-primary/30 transition-colors"
        >
          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
            <Phone className="w-5 h-5 text-primary" />
          </div>
          <div>
            <p className="text-xs text-muted-foreground">Call Us</p>
            <p className="font-semibold text-sm text-foreground">+91 98765 43210</p>
          </div>
        </a>
        <a
          href="https://wa.me/919876543210?text=Hi%2C%20I%20want%20to%20enquire%20about%20driving%20classes."
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 bg-card rounded-xl border p-4 hover:border-whatsapp/30 transition-colors"
        >
          <div className="w-10 h-10 rounded-lg bg-whatsapp/10 flex items-center justify-center">
            <MessageCircle className="w-5 h-5 text-whatsapp" />
          </div>
          <div>
            <p className="text-xs text-muted-foreground">WhatsApp</p>
            <p className="font-semibold text-sm text-foreground">+91 98765 43210</p>
          </div>
        </a>
        <div className="flex items-center gap-3 bg-card rounded-xl border p-4">
          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
            <Clock className="w-5 h-5 text-primary" />
          </div>
          <div>
            <p className="text-xs text-muted-foreground">Working Hours</p>
            <p className="font-semibold text-sm text-foreground">Mon–Sat: 8 AM – 7 PM</p>
          </div>
        </div>
        <div className="flex items-center gap-3 bg-card rounded-xl border p-4">
          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
            <MapPin className="w-5 h-5 text-primary" />
          </div>
          <div>
            <p className="text-xs text-muted-foreground">Location</p>
            <p className="font-semibold text-sm text-foreground">Satellite, Ahmedabad</p>
          </div>
        </div>
      </div>

      {/* Map placeholder */}
      <div className="rounded-xl overflow-hidden border bg-muted h-48 sm:h-64 flex items-center justify-center">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117763.55516029067!2d72.50536892704089!3d23.020474939498245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e848aba5bd449%3A0x4fcedd11614f6516!2sAhmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1709000000000!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="DriveSmart Location"
        />
      </div>
    </div>
  </section>
);

export default ContactSection;

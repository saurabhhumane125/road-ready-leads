import { Phone, MessageCircle, Clock, MapPin } from "lucide-react";

const ContactSection = () => (
  <section id="contact" className="section-spacing bg-background">
    <div className="container">
      <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-1">Contact Us</h2>
      <p className="text-sm text-muted-foreground mb-6">We're here to help you get started</p>

      <div className="grid sm:grid-cols-2 gap-4 mb-6">
        <a
          href="tel:+918355892201"
          className="flex items-center gap-3 bg-card rounded-xl border p-4 hover:border-primary/30 transition-colors"
        >
          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
            <Phone className="w-5 h-5 text-primary" />
          </div>
          <div>
            <p className="text-xs text-muted-foreground">Call Us</p>
            <p className="font-semibold text-sm text-foreground">+91 83558 92201</p>
          </div>
        </a>
        <a
          href="https://wa.me/918355892201?text=Hi%2C%20I%20want%20to%20enquire%20about%20driving%20classes."
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 bg-card rounded-xl border p-4 hover:border-whatsapp/30 transition-colors"
        >
          <div className="w-10 h-10 rounded-lg bg-whatsapp/10 flex items-center justify-center">
            <MessageCircle className="w-5 h-5 text-whatsapp" />
          </div>
          <div>
            <p className="text-xs text-muted-foreground">WhatsApp</p>
            <p className="font-semibold text-sm text-foreground">+91 83558 92201</p>
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
            <p className="font-semibold text-sm text-foreground">Classic Motor Training School, New Panvel</p>
          </div>
        </div>
      </div>

      {/* Map placeholder */}
      <a
        href="https://www.google.com/maps/dir/19.2195747,73.1253813/Classic+Motor+Training+School+New+Panvel,+Shop+no+03,+Plot+no+33-34,+Sector-9,+New+Panvel+East,+Panvel,+Navi+Mumbai,+Maharashtra+410206/@19.0872104,72.9880767,11z"
        target="_blank"
        rel="noopener noreferrer"
        className="block rounded-xl overflow-hidden border bg-muted h-48 sm:h-64"
      >
        <iframe
          src="https://www.google.com/maps?q=19.0040857,73.1216752&z=17&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="CLASSIC MOTOR TRAINING SCHOOL Location"
        />
      </a>
    </div>
  </section>
);

export default ContactSection;

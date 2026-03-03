import { Phone, MessageCircle, Navigation } from "lucide-react";

const StickyCTABar = () => (
  <div className="fixed bottom-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-sm border-t md:hidden">
    <div className="grid grid-cols-3 divide-x">
      <a
        href="tel:+918355892201"
        className="flex flex-col items-center gap-0.5 py-2.5 text-primary hover:bg-muted transition-colors"
      >
        <Phone className="w-5 h-5" />
        <span className="text-[10px] font-semibold">Call</span>
      </a>
      <a
        href="https://wa.me/918355892201?text=Hi%2C%20I%20want%20to%20enquire%20about%20driving%20classes."
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center gap-0.5 py-2.5 text-whatsapp hover:bg-muted transition-colors"
      >
        <MessageCircle className="w-5 h-5" />
        <span className="text-[10px] font-semibold">WhatsApp</span>
      </a>
      <a
        href="https://maps.google.com/?q=Satellite+Ahmedabad"
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center gap-0.5 py-2.5 text-primary hover:bg-muted transition-colors"
      >
        <Navigation className="w-5 h-5" />
        <span className="text-[10px] font-semibold">Directions</span>
      </a>
    </div>
  </div>
);

export default StickyCTABar;

import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => (
  <a
    href="https://wa.me/918355892201?text=Hi%2C%20I%20want%20to%20enquire%20about%20driving%20classes."
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-20 right-4 z-50 w-14 h-14 rounded-full bg-whatsapp text-whatsapp-foreground flex items-center justify-center shadow-lg wa-pulse hover:scale-105 transition-transform"
    aria-label="Chat on WhatsApp"
  >
    <MessageCircle className="w-6 h-6" />
  </a>
);

export default WhatsAppButton;

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Do you provide automatic cars for training?",
    a: "Yes, we offer both automatic and manual transmission cars. You can choose the type based on your preference during enrollment.",
  },
  {
    q: "How long does it take to learn driving?",
    a: "Most students complete the basic driving course in 25-30 days with daily 1-hour sessions. However, learning speed varies from person to person.",
  },
  {
    q: "What documents are required for enrollment?",
    a: "You'll need an Aadhaar card, passport-size photos, and address proof. For a learner's license, you must be at least 18 years old for LMV.",
  },
  {
    q: "Can classes be rescheduled?",
    a: "Yes, you can reschedule classes with 4 hours advance notice. We offer flexible morning, afternoon, and evening batches.",
  },
  {
    q: "Do you help with RTO license process?",
    a: "Absolutely! We provide end-to-end assistance including learner's license application, documentation, and driving test preparation at the RTO.",
  },
];

const FAQSection = () => (
  <section id="faq" className="section-spacing bg-card">
    <div className="container max-w-lg">
      <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-1">Frequently Asked Questions</h2>
      <p className="text-sm text-muted-foreground mb-6">Quick answers to common queries</p>

      <Accordion type="single" collapsible className="space-y-2">
        {faqs.map((faq, i) => (
          <AccordionItem key={i} value={`faq-${i}`} className="bg-background rounded-xl border px-4">
            <AccordionTrigger className="text-sm font-semibold text-foreground text-left py-4 hover:no-underline">
              {faq.q}
            </AccordionTrigger>
            <AccordionContent className="text-sm text-muted-foreground pb-4">
              {faq.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

export default FAQSection;

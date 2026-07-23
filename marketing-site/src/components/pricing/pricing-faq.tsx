import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { PRICING_FAQ } from "@/lib/constants/pricing";

function PricingFaq() {
  return (
    <Accordion type="single" collapsible className="mx-auto w-full max-w-2xl">
      {PRICING_FAQ.map((item) => (
        <AccordionItem key={item.id} value={item.id}>
          <AccordionTrigger>{item.question}</AccordionTrigger>
          <AccordionContent>{item.answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

export { PricingFaq };

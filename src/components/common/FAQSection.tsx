
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  title?: string;
  description?: string;
  faqs: FAQItem[];
  className?: string;
}

const FAQSection = ({ 
  title = "Frequently Asked Questions", 
  description,
  faqs, 
  className = "" 
}: FAQSectionProps) => {
  return (
    <div className={`w-full py-10 ${className}`}>
      <div className="container-wide">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-3 text-herb-700">{title}</h2>
          
          {description && (
            <p className="text-center text-gray-600 mb-8">{description}</p>
          )}
          
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-200">
                <AccordionTrigger className="text-lg font-medium py-4 text-herb-700 hover:text-herb-600 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;

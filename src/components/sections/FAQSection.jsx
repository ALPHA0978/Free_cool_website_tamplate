/**
 * FAQSection Component
 * 
 * Interactive FAQ accordion with smooth animations and expandable content.
 * Addresses common customer questions about development process and services.
 * 
 * Features:
 * - Accordion-style expandable FAQ items
 * - Smooth height animations with Framer Motion
 * - Rotating chevron icons for visual feedback
 * - First item expanded by default
 * - Hover effects for better interactivity
 * - Mobile-optimized responsive design
 * 
 * FAQ Topics Covered:
 * - Development process and methodology
 * - Project timelines and delivery
 * - Support and maintenance services
 * - Technology stack and tools
 * - Team collaboration capabilities
 * 
 * @component
 * @example
 * <FAQSection />
 */

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "../../lib/utils";
import { Card } from "../ui/card";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "What is your development process?",
      answer:
        "We follow an agile development methodology with regular sprints, continuous feedback, and iterative improvements. This ensures transparency and allows for flexibility throughout the project.",
    },
    {
      question: "How long does a typical project take?",
      answer:
        "Project timelines vary based on complexity and scope. A simple web application might take 4-8 weeks, while enterprise solutions can take 3-6 months or more. We provide detailed timelines during the planning phase.",
    },
    {
      question: "Do you provide ongoing support and maintenance?",
      answer:
        "Yes, we offer comprehensive support and maintenance packages. All projects include initial support, and we offer extended support plans to ensure your software stays up-to-date and secure.",
    },
    {
      question: "What technologies do you work with?",
      answer:
        "We work with modern tech stacks including React, Next.js, Node.js, Python, and various databases. We choose technologies based on your specific requirements and long-term goals.",
    },
    {
      question: "Can you work with our existing team?",
      answer:
        "Absolutely! We're experienced in collaborating with in-house teams and can integrate seamlessly into your existing workflows and processes.",
    },
  ];

  return (
    <section className="py-16 md:py-32">
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-muted-foreground text-lg">Everything you need to know</p>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <Card key={index} className="overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full text-left p-6 flex items-center justify-between hover:bg-muted/50 transition-colors"
              >
                <h3 className="font-semibold pr-8">{faq.question}</h3>
                <ChevronDown
                  className={cn(
                    "size-5 shrink-0 transition-transform duration-200",
                    openIndex === index && "rotate-180"
                  )}
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="px-6 pb-6 text-muted-foreground">{faq.answer}</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
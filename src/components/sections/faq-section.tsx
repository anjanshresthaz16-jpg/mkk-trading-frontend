'use client';

import { motion } from 'framer-motion';
import { faqs } from '@/lib/data';
import { fadeInUp } from '@/lib/animations';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export default function FAQSection() {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden">
      <div className="max-w-3xl mx-auto px-4 lg:px-6">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-mk-red text-sm font-semibold tracking-widest uppercase">FAQ</span>
          <h2 className="text-3xl lg:text-4xl font-bold mt-3 tracking-tight">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Accordion className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="border border-border/50 rounded-xl px-6 bg-card data-[state=open]:border-mk-red/20 data-[state=open]:shadow-lg data-[state=open]:shadow-mk-red/5 transition-all"
              >
                <AccordionTrigger className="text-left text-sm font-semibold hover:text-mk-red py-5 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm leading-relaxed pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}

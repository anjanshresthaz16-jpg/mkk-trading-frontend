'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { testimonials } from '@/lib/data';
import { fadeInUp } from '@/lib/animations';
import { Button } from '@/components/ui/button';

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="relative py-20 lg:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-mk-black via-mk-dark to-mk-black" />
      <div className="absolute top-0 right-1/3 w-96 h-96 bg-mk-red/5 rounded-full blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-4 lg:px-6">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-mk-red text-sm font-semibold tracking-widest uppercase">Testimonials</span>
          <h2 className="text-3xl lg:text-5xl font-bold text-white mt-3 tracking-tight">
            What Our <span className="gradient-text">Partners Say</span>
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="text-center"
            >
              <Quote className="w-12 h-12 text-mk-red/30 mx-auto mb-8" />
              <p className="text-xl lg:text-2xl text-white/80 leading-relaxed mb-8 font-light italic">
                &ldquo;{testimonials[current].content}&rdquo;
              </p>
              <div className="flex items-center justify-center gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < testimonials[current].rating
                        ? 'text-mk-gold fill-mk-gold'
                        : 'text-white/20'
                    }`}
                  />
                ))}
              </div>
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-mk-red/30 to-mk-gold/30 mx-auto mb-3 flex items-center justify-center text-white font-bold text-lg">
                {testimonials[current].name.charAt(0)}
              </div>
              <div className="text-white font-semibold text-lg">{testimonials[current].name}</div>
              <div className="text-white/40 text-sm">
                {testimonials[current].role} at {testimonials[current].company}
              </div>
              <div className="text-mk-gold/60 text-xs mt-1">{testimonials[current].country}</div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-10">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-white/10 text-white/60 hover:text-white hover:bg-white/5 hover:border-white/20"
              onClick={prev}
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`transition-all duration-300 rounded-full ${
                    i === current
                      ? 'w-8 h-2 bg-mk-red'
                      : 'w-2 h-2 bg-white/20 hover:bg-white/40'
                  }`}
                />
              ))}
            </div>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-white/10 text-white/60 hover:text-white hover:bg-white/5 hover:border-white/20"
              onClick={next}
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

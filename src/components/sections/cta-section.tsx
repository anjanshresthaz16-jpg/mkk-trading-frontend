'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { fadeInUp, staggerContainer, staggerItem } from '@/lib/animations';

export default function CTASection() {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-mk-red via-mk-red-dark to-mk-black" />
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/5 rounded-full blur-[200px]" />

      <div className="relative max-w-4xl mx-auto px-4 lg:px-6 text-center">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.span
            variants={staggerItem}
            className="inline-block text-white/60 text-sm font-semibold tracking-widest uppercase mb-4"
          >
            Ready to Start?
          </motion.span>
          <motion.h2
            variants={staggerItem}
            className="text-3xl lg:text-5xl xl:text-6xl font-bold text-white tracking-tight leading-tight"
          >
            Let&apos;s Build Your Global
            <br />Supply Chain Together
          </motion.h2>
          <motion.p
            variants={staggerItem}
            className="text-white/60 text-lg mt-6 max-w-2xl mx-auto leading-relaxed"
          >
            Partner with MK Trading for reliable sourcing, competitive pricing, and seamless
            international trade. Get started with a free consultation today.
          </motion.p>
          <motion.div
            variants={staggerItem}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10"
          >
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-white text-mk-red hover:bg-white/90 rounded-full px-8 h-14 text-base font-semibold shadow-2xl group"
              >
                Get a Free Quote
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full px-8 h-14 text-base font-medium border-white/30 text-white hover:bg-white/10 hover:border-white/40"
            >
              <Download className="w-4 h-4 mr-2" />
              Download Catalog
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

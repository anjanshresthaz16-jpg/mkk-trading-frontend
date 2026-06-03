'use client';

import { motion } from 'framer-motion';
import { partners } from '@/lib/data';
import { fadeInUp, staggerContainer, staggerItem } from '@/lib/animations';

export default function PartnersSection() {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-mk-red text-sm font-semibold tracking-widest uppercase">Our Network</span>
          <h2 className="text-3xl lg:text-5xl font-bold mt-3 tracking-tight">
            Trusted By <span className="gradient-text">Global Leaders</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-lg">
            We partner with industry-leading companies across 50+ countries to deliver excellence.
          </p>
        </motion.div>

        {/* Partners Marquee */}
        <div className="relative overflow-hidden py-8">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />

          <motion.div
            className="flex gap-12 items-center"
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          >
            {[...partners, ...partners].map((partner, i) => (
              <div
                key={`${partner.id}-${i}`}
                className="flex-shrink-0 flex flex-col items-center gap-3 group"
              >
                <div className="w-32 h-20 rounded-xl border border-border/50 bg-card flex items-center justify-center px-4 group-hover:border-mk-red/20 group-hover:shadow-lg group-hover:shadow-mk-red/5 transition-all duration-300">
                  <span className="text-lg font-bold text-muted-foreground/40 group-hover:text-mk-red/60 transition-colors tracking-tight">
                    {partner.name}
                  </span>
                </div>
                <span className="text-xs text-muted-foreground/40">{partner.country}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

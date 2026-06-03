'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { stats } from '@/lib/data';
import { staggerContainer, staggerItem } from '@/lib/animations';

function AnimatedCounter({ target, suffix = '', prefix = '' }: { target: number; suffix?: string; prefix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  useEffect(() => {
    if (!isInView) return;
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  );
}

export default function StatsSection() {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-mk-black via-mk-dark to-mk-black" />
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-mk-red/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-mk-gold/5 rounded-full blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-4 lg:px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              variants={staggerItem}
              className="text-center group"
            >
              <div className="relative inline-block">
                <motion.div
                  className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-2"
                  whileHover={{ scale: 1.05 }}
                >
                  <AnimatedCounter
                    target={parseInt(stat.value.replace(/,/g, ''))}
                    suffix={stat.suffix}
                    prefix={stat.prefix}
                  />
                </motion.div>
                <div className="absolute -inset-4 bg-mk-red/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
              </div>
              <div className="text-sm lg:text-base text-white/40 font-medium">{stat.label}</div>
              <motion.div
                className="w-12 h-0.5 bg-gradient-to-r from-mk-red to-mk-gold mx-auto mt-3"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + i * 0.1, duration: 0.6 }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

'use client';

import { motion } from 'framer-motion';
import { Factory, ShieldCheck, Truck, FileCheck } from 'lucide-react';
import { staggerContainer, staggerItem, fadeInUp } from '@/lib/animations';

const features = [
  {
    icon: Factory,
    title: 'Direct Factory Access',
    description: 'Bypass intermediaries and connect directly with 500+ verified Chinese manufacturers for the best pricing and product quality.',
  },
  {
    icon: ShieldCheck,
    title: 'Quality Assurance',
    description: 'Rigorous 3-stage quality inspection process following AQL standards ensures every shipment meets your exacting requirements.',
  },
  {
    icon: Truck,
    title: 'Logistics Support',
    description: 'End-to-end logistics management including freight forwarding, customs clearance, and door-to-door delivery across 50+ countries.',
  },
  {
    icon: FileCheck,
    title: 'International Compliance',
    description: 'Full compliance documentation including CE, FCC, RoHS certifications and country-specific regulatory requirements.',
  },
];

export default function FeaturesSection() {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-mk-red/[0.02] to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 lg:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <span className="text-mk-red text-sm font-semibold tracking-widest uppercase">Why Choose Us</span>
            <h2 className="text-3xl lg:text-5xl font-bold mt-3 tracking-tight leading-tight">
              Why Global Buyers{' '}
              <span className="gradient-text">Trust MK Trading</span>
            </h2>
            <p className="text-muted-foreground mt-4 text-lg leading-relaxed">
              With over two decades of experience in international trade, we provide comprehensive 
              sourcing solutions that reduce costs, ensure quality, and simplify global procurement.
            </p>

            {/* Experience badge */}
            <motion.div
              className="mt-8 inline-flex items-center gap-4 px-6 py-4 rounded-2xl bg-gradient-to-r from-mk-red/10 to-mk-gold/10 border border-mk-red/10"
              whileHover={{ scale: 1.02 }}
            >
              <div className="text-4xl font-bold gradient-text">20+</div>
              <div>
                <div className="font-semibold text-sm">Years of Excellence</div>
                <div className="text-xs text-muted-foreground">Established 2003 in Guangzhou</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right - Feature Cards */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="grid sm:grid-cols-2 gap-5"
          >
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                variants={staggerItem}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group p-6 rounded-2xl border border-border/50 bg-card hover:border-mk-red/20 transition-all duration-300 hover:shadow-xl hover:shadow-mk-red/5"
              >
                <div className="w-12 h-12 rounded-xl bg-mk-red/10 flex items-center justify-center mb-4 group-hover:bg-mk-red group-hover:text-white transition-all duration-300">
                  <feature.icon className="w-6 h-6 text-mk-red group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-bold text-base mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

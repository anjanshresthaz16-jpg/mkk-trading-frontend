'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Play, Globe, Shield, Truck, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { fadeInUp, staggerContainer, staggerItem } from '@/lib/animations';

const floatingCards = [
  { icon: Globe, label: '50+ Countries', delay: 0 },
  { icon: Shield, label: 'Verified Suppliers', delay: 0.2 },
  { icon: Truck, label: 'Global Shipping', delay: 0.4 },
  { icon: Award, label: '20+ Years', delay: 0.6 },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden hero-gradient">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-mk-red/10 rounded-full blur-[100px] animate-blob" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-mk-red/5 rounded-full blur-[120px] animate-blob animation-delay-2000" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-mk-gold/3 rounded-full blur-[150px] animate-blob animation-delay-4000" />

      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-mk-red/30 rounded-full"
          style={{
            top: `${20 + i * 15}%`,
            left: `${10 + i * 15}%`,
          }}
          animate={{
            y: [-20, 20, -20],
            x: [-10, 10, -10],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: i * 0.5,
          }}
        />
      ))}

      <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-6 py-20 lg:py-32 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left"
          >
            <motion.div variants={staggerItem} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm text-white/60 mb-6">
              <span className="w-2 h-2 rounded-full bg-mk-red animate-pulse" />
              Trusted by 500+ Global Partners
            </motion.div>

            <motion.h1
              variants={staggerItem}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] tracking-tight"
            >
              Global Trading{' '}
              <span className="relative">
                <span className="gradient-text">Solutions</span>
                <motion.span
                  className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-mk-red to-mk-gold rounded-full"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.8, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                />
              </span>
              <br />
              From China To{' '}
              <span className="gradient-text-gold">The World</span>
            </motion.h1>

            <motion.p
              variants={staggerItem}
              className="text-lg lg:text-xl text-white/50 mt-6 max-w-xl mx-auto lg:mx-0 leading-relaxed"
            >
              Reliable sourcing, wholesale supply, and international trade services.
              Connecting you with verified Chinese manufacturers for premium products at competitive prices.
            </motion.p>

            <motion.div
              variants={staggerItem}
              className="flex flex-col sm:flex-row items-center gap-4 mt-10 justify-center lg:justify-start"
            >
              <Link href="/products">
                <Button
                  size="lg"
                  className="bg-mk-red hover:bg-mk-red-dark text-white rounded-full px-8 h-14 text-base font-medium shadow-2xl shadow-mk-red/30 group"
                >
                  Explore Products
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full px-8 h-14 text-base font-medium border-white/20 text-white hover:bg-white/5 hover:border-white/30 group"
                >
                  <Play className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                  Contact Us
                </Button>
              </Link>
            </motion.div>

            {/* Trust indicators */}
            <motion.div variants={staggerItem} className="mt-12 flex items-center gap-6 justify-center lg:justify-start">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-mk-red/20 to-mk-gold/20 border-2 border-mk-black flex items-center justify-center text-xs font-bold text-white/60">
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <div className="text-left">
                <div className="text-white font-semibold text-sm">500+ Partners</div>
                <div className="text-white/40 text-xs flex items-center gap-1">
                  <span className="text-mk-gold">★★★★★</span> 4.9/5 Rating
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right - Floating Cards */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="relative hidden lg:block"
          >
            <div className="relative w-full h-[500px]">
              {/* Central globe/circle decoration */}
              <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full border border-white/5"
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
              />
              <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-60 h-60 rounded-full border border-mk-red/10"
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
              />
              <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full bg-gradient-to-br from-mk-red/20 to-mk-gold/10 blur-sm"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              />

              {/* MK Logo center */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-2xl bg-mk-red/90 backdrop-blur-sm flex items-center justify-center shadow-2xl shadow-mk-red/30">
                <span className="text-white text-3xl font-bold">MK</span>
              </div>

              {/* Floating stat cards */}
              {floatingCards.map((card, i) => {
                const positions = [
                  { top: '5%', left: '10%' },
                  { top: '5%', right: '5%' },
                  { bottom: '10%', left: '5%' },
                  { bottom: '5%', right: '10%' },
                ];
                return (
                  <motion.div
                    key={card.label}
                    className="absolute glass rounded-2xl px-5 py-4 flex items-center gap-3"
                    style={positions[i]}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 + card.delay, duration: 0.6 }}
                  >
                    <motion.div
                      animate={{ y: [-3, 3, -3] }}
                      transition={{ duration: 3 + i, repeat: Infinity, ease: 'easeInOut' }}
                    >
                      <div className="w-10 h-10 rounded-xl bg-mk-red/10 flex items-center justify-center">
                        <card.icon className="w-5 h-5 text-mk-red" />
                      </div>
                    </motion.div>
                    <span className="text-white text-sm font-medium whitespace-nowrap">{card.label}</span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}

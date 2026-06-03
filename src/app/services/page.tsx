'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Search, ShieldCheck, ClipboardCheck, Truck, BarChart3, Network, ArrowRight } from 'lucide-react';
import { services } from '@/lib/data';
import { fadeInUp, staggerContainer, staggerItem } from '@/lib/animations';
import { Button } from '@/components/ui/button';
import CTASection from '@/components/sections/cta-section';

const iconMap: Record<string, React.ElementType> = {
  Search, ShieldCheck, ClipboardCheck, Truck, BarChart3, Network
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background pt-24 pb-0 lg:pt-32">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 lg:px-6 mb-20 text-center">
        <motion.div variants={fadeInUp} initial="hidden" animate="visible">
          <span className="text-mk-red text-sm font-semibold tracking-widest uppercase mb-4 block">Our Expertise</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Comprehensive <span className="gradient-text">Trading Services</span>
          </h1>
          <p className="text-muted-foreground text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed">
            From finding the right manufacturer to delivering products to your warehouse, 
            we manage the entire supply chain so you can focus on growing your business.
          </p>
        </motion.div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 lg:px-6 mb-32">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => {
            const Icon = iconMap[service.icon] || Search;
            return (
              <motion.div
                key={service.id}
                variants={staggerItem}
                id={service.title.toLowerCase().replace(' ', '-')}
                className="group bg-card border border-border/50 rounded-3xl p-8 hover:border-mk-red/30 hover:shadow-xl hover:shadow-mk-red/5 transition-all duration-300 relative overflow-hidden flex flex-col h-full"
              >
                {/* Background Decor */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-mk-red/5 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="w-16 h-16 rounded-2xl bg-mk-red/10 flex items-center justify-center mb-6 group-hover:bg-mk-red group-hover:text-white transition-colors duration-300">
                  <Icon className="w-8 h-8 text-mk-red group-hover:text-white transition-colors" />
                </div>
                
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-8 flex-grow">
                  {service.description}
                </p>

                <div className="space-y-3 mb-8">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm font-medium">
                      <div className="w-1.5 h-1.5 rounded-full bg-mk-gold" />
                      {feature}
                    </div>
                  ))}
                </div>

                <Link href={`/contact?service=${service.id}`} className="mt-auto">
                  <Button variant="ghost" className="w-full justify-between group/btn hover:bg-mk-red/5 hover:text-mk-red border border-border/50 hover:border-mk-red/20">
                    Learn More
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Process Section */}
      <div className="bg-mk-black text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <div className="max-w-7xl mx-auto px-4 lg:px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold">How We <span className="gradient-text-gold">Work</span></h2>
            <p className="text-white/60 mt-4 max-w-2xl mx-auto">A proven methodology ensuring success at every step of the trading journey.</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 text-center relative">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gradient-to-r from-mk-red/0 via-mk-red/50 to-mk-red/0" />

            {[
              { step: '01', title: 'Consultation', desc: 'Understanding your requirements and defining sourcing strategy.' },
              { step: '02', title: 'Sourcing', desc: 'Identifying and negotiating with verified manufacturers.' },
              { step: '03', title: 'Production & QC', desc: 'Managing production timeline and rigorous quality inspections.' },
              { step: '04', title: 'Delivery', desc: 'Handling logistics, customs, and final delivery to your door.' }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="relative z-10"
              >
                <div className="w-24 h-24 mx-auto rounded-full bg-mk-black border-2 border-mk-red flex items-center justify-center text-2xl font-bold text-white mb-6 shadow-[0_0_20px_rgba(217,4,41,0.3)]">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed px-4">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <CTASection />
    </div>
  );
}

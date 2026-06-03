'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { teamMembers, timeline } from '@/lib/data';
import { fadeInUp, staggerContainer, staggerItem } from '@/lib/animations';
import { Target, Eye, Globe2, ShieldCheck, Award } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background pt-24 pb-20 lg:pt-32 lg:pb-28">
      {/* Header */}
      <div className="bg-mk-black text-white py-20 lg:py-32 relative overflow-hidden mb-20">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-mk-red/10 rounded-full blur-[150px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 lg:px-6 relative z-10">
          <div className="max-w-3xl">
            <motion.div variants={fadeInUp} initial="hidden" animate="visible">
              <span className="text-mk-red font-semibold tracking-widest uppercase mb-4 block">About MK Trading</span>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight mb-6 leading-[1.1]">
                Connecting <span className="gradient-text">Global Buyers</span> with Chinese Manufacturing
              </h1>
              <p className="text-white/60 text-lg lg:text-xl leading-relaxed">
                Since 2003, we have been the trusted bridge between international markets and China&apos;s robust manufacturing capabilities, ensuring quality, reliability, and competitive pricing for our global partners.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-card border border-border/50 p-8 lg:p-12 rounded-3xl relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-mk-red/5 rounded-bl-full transition-transform duration-500 group-hover:scale-110" />
            <Target className="w-12 h-12 text-mk-red mb-6" />
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-muted-foreground leading-relaxed text-lg">
              To simplify international trade by providing seamless, transparent, and efficient sourcing solutions. We aim to empower businesses worldwide by giving them direct access to high-quality manufacturing without the traditional complexities of cross-border procurement.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-card border border-border/50 p-8 lg:p-12 rounded-3xl relative overflow-hidden group"
          >
            <div className="absolute top-0 left-0 w-32 h-32 bg-mk-gold/5 rounded-br-full transition-transform duration-500 group-hover:scale-110" />
            <Eye className="w-12 h-12 text-mk-gold mb-6" />
            <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
            <p className="text-muted-foreground leading-relaxed text-lg">
              To be the world&apos;s most trusted and innovative global trading partner. We envision a future where borders do not limit business growth, and where sustainable, ethical trading practices set the standard for the global supply chain industry.
            </p>
          </motion.div>
        </div>

        {/* Global Presence */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold">Global <span className="gradient-text">Presence</span></h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">Operating across major continents to provide localized support and seamless logistics.</p>
          </div>
          
          <div className="relative h-[400px] lg:h-[600px] rounded-3xl bg-mk-black border border-border/50 overflow-hidden flex items-center justify-center">
            {/* Abstract Map Representation */}
            <Globe2 className="absolute text-white/5 w-full h-full scale-150 animate-pulse-glow" />
            
            {/* Location Pins */}
            <div className="absolute inset-0 max-w-5xl mx-auto relative">
              <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} className="absolute top-1/4 left-1/4 flex flex-col items-center">
                <div className="w-4 h-4 bg-mk-red rounded-full shadow-[0_0_15px_rgba(217,4,41,0.6)] mb-2" />
                <span className="text-white text-xs font-medium">Los Angeles, USA</span>
              </motion.div>
              <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="absolute top-1/3 left-1/2 flex flex-col items-center">
                <div className="w-4 h-4 bg-mk-red rounded-full shadow-[0_0_15px_rgba(217,4,41,0.6)] mb-2" />
                <span className="text-white text-xs font-medium">Hamburg, Germany</span>
              </motion.div>
              <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.4 }} className="absolute top-1/2 left-[60%] flex flex-col items-center">
                <div className="w-4 h-4 bg-mk-red rounded-full shadow-[0_0_15px_rgba(217,4,41,0.6)] mb-2" />
                <span className="text-white text-xs font-medium">Dubai, UAE</span>
              </motion.div>
              <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.6 }} className="absolute top-[45%] right-1/4 flex flex-col items-center">
                <div className="w-6 h-6 bg-mk-gold rounded-full shadow-[0_0_20px_rgba(201,168,76,0.8)] mb-2 flex items-center justify-center">
                  <div className="w-2 h-2 bg-mk-black rounded-full" />
                </div>
                <span className="text-mk-gold text-sm font-bold">Guangzhou, HQ</span>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Timeline Section */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold">Our <span className="gradient-text">Journey</span></h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">Two decades of continuous growth and commitment to excellence.</p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Center Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-mk-red/50 via-mk-gold/50 to-transparent -translate-x-1/2" />

            <div className="space-y-12">
              {timeline.map((event, index) => (
                <motion.div
                  key={event.year}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                >
                  {/* Marker */}
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-background border-4 border-mk-red -translate-x-1/2 z-10 shadow-[0_0_10px_rgba(217,4,41,0.3)]" />
                  
                  {/* Content Box */}
                  <div className={`w-full pl-12 md:pl-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 text-left md:text-right' : 'md:pl-12 text-left'}`}>
                    <div className="bg-card border border-border/50 p-6 rounded-2xl hover:border-mk-red/30 transition-colors shadow-sm">
                      <span className="text-mk-red font-bold text-xl mb-2 block">{event.year}</span>
                      <h3 className="font-bold text-lg mb-2">{event.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{event.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Team Showcase */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold">Leadership <span className="gradient-text">Team</span></h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">Meet the experts driving our global operations and ensuring your success.</p>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {teamMembers.map((member) => (
              <motion.div key={member.id} variants={staggerItem} className="group text-center">
                <div className="relative w-48 h-48 mx-auto rounded-full overflow-hidden mb-6 border-4 border-card shadow-xl">
                  <div className="absolute inset-0 bg-gradient-to-tr from-mk-red/20 to-mk-gold/20 mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  {/* Placeholder for actual image */}
                  <div className="w-full h-full bg-muted flex items-center justify-center text-4xl font-bold text-muted-foreground/20">
                    {member.name.charAt(0)}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-mk-red text-sm font-medium mb-3">{member.role}</p>
                <p className="text-muted-foreground text-sm leading-relaxed max-w-xs mx-auto">
                  {member.bio}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Certifications */}
        <div className="text-center bg-card border border-border/50 rounded-3xl p-12 lg:p-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-5" />
          <div className="relative z-10">
            <h2 className="text-2xl lg:text-3xl font-bold mb-8">Our Certifications & Standards</h2>
            <div className="flex flex-wrap justify-center gap-8 lg:gap-16">
              <div className="flex flex-col items-center opacity-70 hover:opacity-100 transition-opacity">
                <ShieldCheck className="w-12 h-12 text-foreground mb-3" />
                <span className="font-semibold">ISO 9001:2015</span>
                <span className="text-xs text-muted-foreground">Quality Management</span>
              </div>
              <div className="flex flex-col items-center opacity-70 hover:opacity-100 transition-opacity">
                <Globe2 className="w-12 h-12 text-foreground mb-3" />
                <span className="font-semibold">ISO 14001:2015</span>
                <span className="text-xs text-muted-foreground">Environmental Mgt.</span>
              </div>
              <div className="flex flex-col items-center opacity-70 hover:opacity-100 transition-opacity">
                <Award className="w-12 h-12 text-foreground mb-3" />
                <span className="font-semibold">SGS Verified</span>
                <span className="text-xs text-muted-foreground">Premium Supplier</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

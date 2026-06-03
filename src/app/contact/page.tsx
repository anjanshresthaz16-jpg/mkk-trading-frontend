'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, MessageSquare, Send, Globe2, Building2 } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { fadeInUp, staggerContainer, staggerItem } from '@/lib/animations';

export default function ContactPage() {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    setTimeout(() => setFormStatus('success'), 1500);
  };

  const offices = [
    {
      city: 'Guangzhou',
      type: 'Global Headquarters',
      address: 'MK Trading Tower, 128 Tianhe Road, Tianhe District, Guangzhou, China 510000',
      phone: '+86 20 1234 5678',
      email: 'hq@mktrading.com'
    },
    {
      city: 'Hong Kong',
      type: 'Financial Center',
      address: 'Suite 1502, International Commerce Centre, 1 Austin Road West, Kowloon, Hong Kong',
      phone: '+852 3456 7890',
      email: 'hk@mktrading.com'
    },
    {
      city: 'Los Angeles',
      type: 'US Office',
      address: '400 S Hope St, Los Angeles, CA 90071, USA',
      phone: '+1 323 555 0198',
      email: 'us@mktrading.com'
    },
    {
      city: 'Dubai',
      type: 'MENA Hub',
      address: 'Office 405, Building 3, Dubai Design District, Dubai, UAE',
      phone: '+971 4 555 1234',
      email: 'mena@mktrading.com'
    }
  ];

  return (
    <div className="min-h-screen bg-background pt-24 pb-20 lg:pt-32">
      {/* Header */}
      <div className="bg-mk-black text-white py-20 relative overflow-hidden mb-16">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-mk-red/10 to-transparent pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 lg:px-6 relative z-10 text-center">
          <motion.div variants={fadeInUp} initial="hidden" animate="visible">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
              Get in <span className="gradient-text">Touch</span>
            </h1>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Our global team is ready to assist you with sourcing, logistics, and trading inquiries.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 mb-24">
          {/* Contact Info & Offices */}
          <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="space-y-12">
            <div>
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              <div className="grid sm:grid-cols-2 gap-6">
                <motion.div variants={staggerItem} className="p-6 rounded-2xl bg-card border border-border/50 hover:border-mk-red/30 transition-colors">
                  <Mail className="w-8 h-8 text-mk-red mb-4" />
                  <div className="font-semibold mb-1">Email Us</div>
                  <a href="mailto:info@mktrading.com" className="text-muted-foreground hover:text-mk-red transition-colors">info@mktrading.com</a>
                  <div className="text-xs text-muted-foreground mt-2">Response within 24 hours</div>
                </motion.div>
                <motion.div variants={staggerItem} className="p-6 rounded-2xl bg-card border border-border/50 hover:border-mk-red/30 transition-colors">
                  <Phone className="w-8 h-8 text-mk-red mb-4" />
                  <div className="font-semibold mb-1">Call Us</div>
                  <a href="tel:+8612345678" className="text-muted-foreground hover:text-mk-red transition-colors">+86 123 4567 890</a>
                  <div className="text-xs text-muted-foreground mt-2">Mon-Fri, 9am - 6pm (GMT+8)</div>
                </motion.div>
              </div>

              {/* Action Buttons */}
              <motion.div variants={staggerItem} className="flex gap-4 mt-8">
                <Button className="flex-1 bg-[#25D366] hover:bg-[#128C7E] text-white rounded-xl h-12">
                  <MessageSquare className="w-4 h-4 mr-2" /> WhatsApp Chat
                </Button>
                <Button className="flex-1 bg-mk-black hover:bg-mk-black/80 text-white rounded-xl h-12">
                  <MessageSquare className="w-4 h-4 mr-2" /> Live Support
                </Button>
              </motion.div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Globe2 className="w-6 h-6 text-mk-gold" /> Global Offices
              </h2>
              <div className="space-y-4">
                {offices.map((office, i) => (
                  <motion.div key={i} variants={staggerItem} className="p-6 rounded-2xl bg-card border border-border/50 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-16 h-16 bg-mk-red/5 rounded-bl-full group-hover:scale-150 transition-transform duration-500" />
                    <div className="flex items-start gap-4 relative z-10">
                      <Building2 className="w-6 h-6 text-mk-red mt-1 shrink-0" />
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-bold text-lg">{office.city}</h3>
                          <span className="text-[10px] uppercase tracking-wider bg-secondary px-2 py-0.5 rounded-full text-muted-foreground">{office.type}</span>
                        </div>
                        <p className="text-sm text-muted-foreground mb-3">{office.address}</p>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm font-medium">
                          <a href={`tel:${office.phone}`} className="hover:text-mk-red transition-colors">{office.phone}</a>
                          <span className="hidden sm:inline text-border">|</span>
                          <a href={`mailto:${office.email}`} className="hover:text-mk-red transition-colors">{office.email}</a>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-card border border-border/50 rounded-3xl p-8 lg:p-10 shadow-lg relative overflow-hidden h-fit sticky top-24"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-mk-red/5 rounded-full blur-[80px]" />
            
            <h2 className="text-2xl font-bold mb-2">Send an Inquiry</h2>
            <p className="text-muted-foreground mb-8">Fill out the form below and our sourcing experts will get back to you.</p>

            {formStatus === 'success' ? (
              <div className="py-12 text-center text-emerald-500 space-y-4 animate-in fade-in zoom-in duration-500">
                <div className="w-16 h-16 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto">
                  <Send className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold">Message Sent!</h3>
                <p className="text-muted-foreground">Thank you for your inquiry. We will respond shortly.</p>
                <Button variant="outline" onClick={() => setFormStatus('idle')} className="mt-4">
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">First Name *</label>
                    <Input required className="bg-background" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Last Name *</label>
                    <Input required className="bg-background" />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Email Address *</label>
                    <Input required type="email" className="bg-background" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Phone Number</label>
                    <Input type="tel" className="bg-background" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Inquiry Type *</label>
                  <Select required>
                    <SelectTrigger className="bg-background">
                      <SelectValue placeholder="Select an option" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="sourcing">Product Sourcing</SelectItem>
                      <SelectItem value="quote">Request a Quote</SelectItem>
                      <SelectItem value="partnership">Partnership</SelectItem>
                      <SelectItem value="support">Customer Support</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Message *</label>
                  <Textarea required placeholder="How can we help you?" className="min-h-[150px] bg-background" />
                </div>

                <Button type="submit" disabled={formStatus === 'submitting'} className="w-full bg-mk-red hover:bg-mk-red-dark text-white h-12 rounded-xl text-base font-semibold">
                  {formStatus === 'submitting' ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            )}
          </motion.div>
        </div>

        {/* Abstract World Map Graphic (Decorative) */}
        <div className="rounded-3xl bg-mk-black p-8 md:p-16 text-center relative overflow-hidden border border-border/50">
           <Globe2 className="absolute text-white/5 w-full h-full scale-150 animate-pulse-glow" />
           <div className="relative z-10">
              <h2 className="text-3xl font-bold text-white mb-4">Visit Our Headquarters</h2>
              <p className="text-white/60 mb-8 max-w-lg mx-auto">We welcome clients to visit our main office in Guangzhou for face-to-face meetings and factory tours.</p>
              <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 rounded-full px-8">
                 Schedule a Visit
              </Button>
           </div>
        </div>
      </div>
    </div>
  );
}

'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Handshake, ShieldCheck, TrendingUp, Users, CheckCircle2 } from 'lucide-react';
import { partners, successStories } from '@/lib/data';
import { fadeInUp, staggerContainer, staggerItem } from '@/lib/animations';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';

export default function PartnersPage() {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handlePartnerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    setTimeout(() => setFormStatus('success'), 1500);
  };

  return (
    <div className="min-h-screen bg-background pt-24 pb-0 lg:pt-32">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 lg:px-6 mb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div variants={fadeInUp} initial="hidden" animate="visible">
            <span className="text-mk-red text-sm font-semibold tracking-widest uppercase mb-4 block">Partner Network</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Grow Your Business with <span className="gradient-text">MK Trading</span>
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Join our global network of verified suppliers and strategic distribution partners. We connect premium Chinese manufacturing with high-volume international buyers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-mk-red hover:bg-mk-red-dark text-white rounded-full h-14 px-8" onClick={() => document.getElementById('apply')?.scrollIntoView({ behavior: 'smooth' })}>
                Apply as Partner
              </Button>
              <Button size="lg" variant="outline" className="rounded-full h-14 px-8">
                View Network
              </Button>
            </div>
          </motion.div>

          {/* Benefits Grid */}
          <motion.div 
            variants={staggerContainer} 
            initial="hidden" 
            animate="visible"
            className="grid grid-cols-2 gap-4"
          >
            {[
              { icon: Users, title: 'Global Reach', desc: 'Access to buyers in 50+ countries' },
              { icon: TrendingUp, title: 'Volume Growth', desc: 'Consistent large-scale orders' },
              { icon: ShieldCheck, title: 'Secure Payments', desc: 'Guaranteed transaction safety' },
              { icon: Handshake, title: 'Long-term', desc: 'Strategic business relationships' },
            ].map((benefit, i) => (
              <motion.div key={i} variants={staggerItem} className="bg-card border border-border/50 p-6 rounded-2xl">
                <benefit.icon className="w-8 h-8 text-mk-red mb-3" />
                <h3 className="font-bold mb-1">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Partner Logos Marquee */}
      <div className="bg-mk-black text-white py-16 border-y border-border/50 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 lg:px-6 mb-8 text-center">
          <h2 className="text-xl text-white/60 font-semibold">Trusted by Global Distributors</h2>
        </div>
        <div className="relative flex">
          <motion.div
            className="flex gap-16 items-center whitespace-nowrap px-8"
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
          >
            {[...partners, ...partners].map((partner, i) => (
              <div key={i} className="text-2xl font-bold text-white/20 hover:text-white/60 transition-colors">
                {partner.name}
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Success Stories */}
      <div className="py-24 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold">Partner <span className="gradient-text">Success Stories</span></h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">Real results from our strategic partnerships across the globe.</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {successStories.map((story, i) => (
              <motion.div
                key={story.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="bg-card border border-border/50 rounded-3xl overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="aspect-video bg-muted relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-mk-red/10 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <Badge className="bg-black/50 hover:bg-black/50 text-white backdrop-blur-md border-0">
                      {story.country}
                    </Badge>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="font-bold text-xl mb-1">{story.title}</h3>
                  <div className="text-mk-red text-sm font-medium mb-4">{story.company}</div>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    {story.description}
                  </p>
                  <div className="space-y-2">
                    {story.results.map((result, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm font-medium">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                        {result}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Application Form */}
      <div id="apply" className="py-24 max-w-4xl mx-auto px-4 lg:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold">Become a <span className="gradient-text">Partner</span></h2>
          <p className="text-muted-foreground mt-4">Apply to join our verified supplier network or become a regional distributor.</p>
        </div>

        <div className="bg-card border border-border/50 rounded-3xl p-8 md:p-12 shadow-lg">
          {formStatus === 'success' ? (
            <div className="text-center py-12">
              <div className="w-20 h-20 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Handshake className="w-10 h-10 text-emerald-500" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Application Received!</h3>
              <p className="text-muted-foreground max-w-md mx-auto">
                Thank you for your interest in partnering with MK Trading. Our vendor management team will review your application and contact you within 3-5 business days.
              </p>
            </div>
          ) : (
            <form onSubmit={handlePartnerSubmit} className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-lg font-bold border-b border-border/50 pb-2">Company Details</h3>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Company Name *</label>
                    <Input required placeholder="Enter company name" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Company Website</label>
                    <Input placeholder="https://..." />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Country of Registration *</label>
                    <Input required placeholder="e.g. China, USA, Germany" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Years in Business *</label>
                    <Input required type="number" placeholder="e.g. 5" />
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-bold border-b border-border/50 pb-2">Contact Person</h3>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Full Name *</label>
                    <Input required placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Job Title *</label>
                    <Input required placeholder="Director of Sales" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Business Email *</label>
                    <Input required type="email" placeholder="john@company.com" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Phone Number *</label>
                    <Input required type="tel" placeholder="+1..." />
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-bold border-b border-border/50 pb-2">Partnership Details</h3>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Partnership Type *</label>
                  <div className="flex gap-4">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="radio" name="ptype" value="supplier" required className="w-4 h-4 text-mk-red accent-mk-red" />
                      <span className="text-sm">We want to be a Supplier</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="radio" name="ptype" value="distributor" className="w-4 h-4 text-mk-red accent-mk-red" />
                      <span className="text-sm">We want to be a Distributor</span>
                    </label>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Core Products / Industries *</label>
                  <Input required placeholder="e.g. Consumer Electronics, Industrial Machinery" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Company Overview & Value Proposition *</label>
                  <Textarea required placeholder="Tell us about your production capacity, certifications, or distribution network..." className="min-h-[120px]" />
                </div>
              </div>

              <Button type="submit" disabled={formStatus === 'submitting'} className="w-full bg-mk-red hover:bg-mk-red-dark text-white h-12 rounded-xl text-base font-semibold">
                {formStatus === 'submitting' ? 'Submitting...' : 'Submit Application'}
              </Button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, staggerItem } from '@/lib/animations';
import {
  Mail, Phone, MapPin, ArrowRight,
  Share2, MessageCircle, Video, Image, PlaySquare,
  Globe, Shield, Award
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';

const footerLinks = {
  company: [
    { label: 'About Us', href: '/about' },
    { label: 'Our Team', href: '/about#team' },
    { label: 'Careers', href: '/about#careers' },
    { label: 'News & Blog', href: '/about#news' },
    { label: 'Sustainability', href: '/about#sustainability' },
  ],
  products: [
    { label: 'Electronics', href: '/products?category=electronics' },
    { label: 'Machinery', href: '/products?category=machinery' },
    { label: 'Home & Living', href: '/products?category=home-living' },
    { label: 'Industrial', href: '/products?category=industrial' },
    { label: 'Consumer Goods', href: '/products?category=consumer' },
  ],
  services: [
    { label: 'Product Sourcing', href: '/services#sourcing' },
    { label: 'Quality Inspection', href: '/services#inspection' },
    { label: 'Logistics', href: '/services#logistics' },
    { label: 'Factory Audits', href: '/services#audits' },
    { label: 'Supply Chain', href: '/services#supply-chain' },
  ],
  support: [
    { label: 'Contact Us', href: '/contact' },
    { label: 'FAQs', href: '/contact#faq' },
    { label: 'Request Quote', href: '/contact#quote' },
    { label: 'Download Catalog', href: '#catalog' },
    { label: 'Partner Portal', href: '/partners' },
  ],
};

const socialLinks = [
  { icon: Share2, href: '#', label: 'Facebook' },
  { icon: MessageCircle, href: '#', label: 'Twitter' },
  { icon: Share2, href: '#', label: 'LinkedIn' },
  { icon: Image, href: '#', label: 'Instagram' },
  { icon: PlaySquare, href: '#', label: 'YouTube' },
];

export default function Footer() {
  return (
    <footer className="relative bg-mk-black text-white overflow-hidden">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-mk-red/3 via-transparent to-transparent pointer-events-none" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-mk-red/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Newsletter Section */}
      <div className="relative border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 lg:px-6 py-16">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col lg:flex-row items-center justify-between gap-8"
          >
            <motion.div variants={staggerItem} className="text-center lg:text-left max-w-md">
              <h3 className="text-2xl lg:text-3xl font-bold mb-2">Stay Updated</h3>
              <p className="text-white/50">
                Subscribe to our newsletter for the latest products, trade insights, and exclusive offers.
              </p>
            </motion.div>
            <motion.div variants={staggerItem} className="flex gap-3 w-full max-w-md">
              <Input
                type="email"
                placeholder="Enter your email address"
                className="bg-white/5 border-white/10 text-white placeholder:text-white/30 h-12 rounded-full px-5 flex-1 focus:border-mk-red"
              />
              <Button className="bg-mk-red hover:bg-mk-red-dark text-white rounded-full h-12 px-6 font-medium whitespace-nowrap">
                Subscribe
                <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="relative max-w-7xl mx-auto px-4 lg:px-6 py-16">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 lg:gap-8"
        >
          {/* Brand Column */}
          <motion.div variants={staggerItem} className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-mk-red flex items-center justify-center">
                <span className="text-white font-bold text-lg">MK</span>
              </div>
              <div>
                <div className="font-bold text-lg">MK Trading</div>
                <div className="text-[10px] text-white/40 tracking-[0.2em] uppercase">Global Solutions</div>
              </div>
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-6 max-w-xs">
              Connecting global buyers with trusted Chinese manufacturing. 
              Your reliable partner for international trade since 2003.
            </p>
            <div className="space-y-3 text-sm">
              <a href="mailto:info@mktrading.com" className="flex items-center gap-3 text-white/50 hover:text-mk-red transition-colors">
                <Mail className="w-4 h-4 text-mk-red" />
                info@mktrading.com
              </a>
              <a href="tel:+8612345678" className="flex items-center gap-3 text-white/50 hover:text-mk-red transition-colors">
                <Phone className="w-4 h-4 text-mk-red" />
                +86 123 4567 890
              </a>
              <div className="flex items-center gap-3 text-white/50">
                <MapPin className="w-4 h-4 text-mk-red flex-shrink-0" />
                Guangzhou, China
              </div>
            </div>
            <div className="flex items-center gap-3 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-9 h-9 rounded-full bg-white/5 hover:bg-mk-red/20 flex items-center justify-center text-white/40 hover:text-mk-red transition-all duration-300"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <motion.div key={title} variants={staggerItem}>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-white/70 mb-5">
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/40 hover:text-mk-red transition-colors duration-200 inline-flex items-center group"
                    >
                      <span className="w-0 group-hover:w-3 overflow-hidden transition-all duration-200">
                        <ArrowRight className="w-3 h-3" />
                      </span>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Trust Badges */}
      <div className="relative border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 lg:px-6 py-8">
          <div className="flex flex-wrap items-center justify-center gap-8 text-white/30 text-xs">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-mk-gold" />
              <span>ISO 9001 Certified</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-mk-gold" />
              <span>Gold Supplier</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4 text-mk-gold" />
              <span>50+ Countries</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-mk-gold" />
              <span>Trade Assurance</span>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="relative border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 lg:px-6 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/30">
            <p>© {new Date().getFullYear()} MK Trading. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <Link href="#" className="hover:text-white/60 transition-colors">Privacy Policy</Link>
              <Link href="#" className="hover:text-white/60 transition-colors">Terms of Service</Link>
              <Link href="#" className="hover:text-white/60 transition-colors">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

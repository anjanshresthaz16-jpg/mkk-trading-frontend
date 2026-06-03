'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Cpu, Cog, Home, Wrench, ShoppingBag, Package } from 'lucide-react';
import { categories } from '@/lib/data';
import { staggerContainer, staggerItem, fadeInUp } from '@/lib/animations';

const iconMap: Record<string, React.ElementType> = {
  Cpu, Cog, Home, Wrench, ShoppingBag, Package,
};

export default function CategoriesSection() {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        {/* Header */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-mk-red text-sm font-semibold tracking-widest uppercase">Our Categories</span>
          <h2 className="text-3xl lg:text-5xl font-bold mt-3 tracking-tight">
            Explore Our Product{' '}
            <span className="gradient-text">Categories</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-lg">
            Discover thousands of products across six major categories, all sourced from verified Chinese manufacturers.
          </p>
        </motion.div>

        {/* Categories Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {categories.map((category) => {
            const Icon = iconMap[category.icon] || Package;
            return (
              <motion.div key={category.id} variants={staggerItem}>
                <Link href={`/products?category=${category.id}`}>
                  <motion.div
                    className="group relative rounded-2xl border border-border/50 bg-card p-8 overflow-hidden cursor-pointer h-full"
                    whileHover={{ y: -6, scale: 1.01 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Hover gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-mk-red/0 via-mk-red/0 to-mk-red/0 group-hover:from-mk-red/5 group-hover:via-transparent group-hover:to-mk-gold/5 transition-all duration-500" />
                    
                    {/* Gradient border on hover */}
                    <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-mk-red/20" />

                    <div className="relative z-10">
                      <div className="w-14 h-14 rounded-2xl bg-mk-red/10 flex items-center justify-center mb-5 group-hover:bg-mk-red/20 transition-colors duration-300">
                        <Icon className="w-7 h-7 text-mk-red" />
                      </div>
                      <h3 className="text-xl font-bold mb-2 group-hover:text-mk-red transition-colors">
                        {category.name}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                        {category.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-muted-foreground">
                          {category.productCount.toLocaleString()}+ Products
                        </span>
                        <span className="flex items-center text-sm font-medium text-mk-red opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          Browse
                          <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                        </span>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

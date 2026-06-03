'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { products } from '@/lib/data';
import { fadeInUp } from '@/lib/animations';
import { Button } from '@/components/ui/button';
import ProductCard from '@/components/products/product-card';

export default function FeaturedProductsSection() {
  const featured = products.filter((p) => p.badge).slice(0, 6);

  return (
    <section className="relative py-20 lg:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-12 gap-4"
        >
          <div>
            <span className="text-mk-red text-sm font-semibold tracking-widest uppercase">Featured</span>
            <h2 className="text-3xl lg:text-5xl font-bold mt-3 tracking-tight">
              Top <span className="gradient-text">Products</span>
            </h2>
            <p className="text-muted-foreground mt-3 max-w-lg text-lg">
              Discover our most popular products trusted by global buyers.
            </p>
          </div>
          <Link href="/products">
            <Button variant="outline" className="rounded-full px-6 group">
              View All Products
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

'use client';

import { useState } from 'react';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ChevronRight,
  Star,
  Package,
  ShieldCheck,
  Truck,
  ArrowRight,
  Download,
  Share2
} from 'lucide-react';
import { products } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import ProductCard from '@/components/products/product-card';
import { fadeInUp, staggerContainer, staggerItem } from '@/lib/animations';
import React from 'react';

// Next.js 15 app router params
export default function ProductDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = React.use(params);
  const product = products.find((p) => p.id === resolvedParams.id);
  const [activeImage, setActiveImage] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  if (!product) {
    notFound();
  }

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isZoomed) return;
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setMousePos({ x, y });
  };

  return (
    <div className="min-h-screen bg-background pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        {/* Breadcrumb */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2 text-sm text-muted-foreground mb-8 overflow-x-auto pb-2"
        >
          <Link href="/" className="hover:text-foreground whitespace-nowrap">Home</Link>
          <ChevronRight className="w-4 h-4 flex-shrink-0" />
          <Link href="/products" className="hover:text-foreground whitespace-nowrap">Products</Link>
          <ChevronRight className="w-4 h-4 flex-shrink-0" />
          <Link href={`/products?category=${product.category}`} className="hover:text-foreground capitalize whitespace-nowrap">
            {product.category.replace('-', ' ')}
          </Link>
          <ChevronRight className="w-4 h-4 flex-shrink-0" />
          <span className="text-foreground font-medium truncate max-w-[200px] sm:max-w-none">{product.name}</span>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-20">
          {/* Image Gallery */}
          <motion.div variants={fadeInUp} initial="hidden" animate="visible" className="space-y-4">
            <div
              className="relative aspect-square rounded-2xl bg-muted border border-border/50 overflow-hidden cursor-zoom-in"
              onMouseEnter={() => setIsZoomed(true)}
              onMouseLeave={() => setIsZoomed(false)}
              onMouseMove={handleMouseMove}
            >
              <Image
                src={product.images[activeImage] || product.image}
                alt={product.name}
                fill
                className="object-cover transition-transform duration-200"
                sizes="(max-width: 1024px) 100vw, 50vw"
                style={{
                  transform: isZoomed ? 'scale(2)' : 'scale(1)',
                  transformOrigin: `${mousePos.x}% ${mousePos.y}%`
                }}
              />
            </div>

            {/* Thumbnails */}
            <div className="grid grid-cols-4 gap-4">
              {product.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImage(i)}
                  className={`relative aspect-square rounded-xl overflow-hidden border-2 transition-all ${
                    i === activeImage ? 'border-mk-red' : 'border-transparent hover:border-mk-red/50'
                  }`}
                >
                  <Image
                    src={img}
                    alt={`${product.name} thumbnail ${i + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 25vw, 10vw"
                  />
                </button>
              ))}
            </div>
          </motion.div>

          {/* Product Info */}
          <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="flex flex-col">
            <motion.div variants={staggerItem} className="flex items-center gap-3 mb-4">
              <Badge variant="secondary" className="capitalize text-xs font-medium px-3 py-1 rounded-full">
                {product.category.replace('-', ' ')}
              </Badge>
              {product.badge && (
                <Badge className="bg-mk-red text-white text-xs font-medium px-3 py-1 rounded-full border-0">
                  {product.badge}
                </Badge>
              )}
            </motion.div>

            <motion.h1 variants={staggerItem} className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4 leading-tight">
              {product.name}
            </motion.h1>

            <motion.div variants={staggerItem} className="flex items-center gap-4 mb-6 pb-6 border-b border-border/50">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.floor(product.rating)
                        ? 'text-mk-gold fill-mk-gold'
                        : 'text-muted-foreground/30'
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm font-medium">{product.rating} Rating</span>
              <span className="text-muted-foreground text-sm">({product.reviews} Reviews)</span>
              <button className="ml-auto text-muted-foreground hover:text-mk-red transition-colors">
                <Share2 className="w-5 h-5" />
              </button>
            </motion.div>

            <motion.p variants={staggerItem} className="text-lg text-muted-foreground leading-relaxed mb-8">
              {product.description}
            </motion.p>

            <motion.div variants={staggerItem} className="grid grid-cols-2 gap-4 mb-8">
              <div className="p-4 rounded-xl bg-card border border-border/50">
                <div className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Minimum Order</div>
                <div className="text-xl font-bold text-mk-red">{product.moq}</div>
              </div>
              <div className="p-4 rounded-xl bg-card border border-border/50">
                <div className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Availability</div>
                <div className="text-xl font-bold text-emerald-500">
                  {product.inStock ? 'In Stock' : 'Out of Stock'}
                </div>
              </div>
            </motion.div>

            <motion.div variants={staggerItem} className="space-y-4 mb-8">
              <div className="flex items-center gap-3 text-sm">
                <ShieldCheck className="w-5 h-5 text-mk-gold" />
                <span>Trade Assurance protection</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Package className="w-5 h-5 text-mk-gold" />
                <span>Customized packaging available</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Truck className="w-5 h-5 text-mk-gold" />
                <span>Global shipping (Air/Sea/Express)</span>
              </div>
            </motion.div>

            <motion.div variants={staggerItem} className="mt-auto flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="flex-1 bg-mk-red hover:bg-mk-red-dark text-white rounded-full h-14 text-base font-semibold shadow-lg shadow-mk-red/20">
                Contact Supplier
              </Button>
              <Button size="lg" variant="outline" className="flex-1 rounded-full h-14 text-base font-medium">
                <Download className="w-4 h-4 mr-2" />
                Product Catalog
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Tabs Section */}
        <div className="mb-20">
          <Tabs defaultValue="specifications" className="w-full">
            <TabsList className="w-full justify-start h-auto p-0 bg-transparent border-b border-border/50 rounded-none mb-8">
              <TabsTrigger
                value="specifications"
                className="rounded-none data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-mk-red text-base py-4 px-6"
              >
                Specifications
              </TabsTrigger>
              <TabsTrigger
                value="features"
                className="rounded-none data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-mk-red text-base py-4 px-6"
              >
                Key Features
              </TabsTrigger>
              <TabsTrigger
                value="inquiry"
                className="rounded-none data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-mk-red text-base py-4 px-6"
              >
                Send Inquiry
              </TabsTrigger>
            </TabsList>

            <TabsContent value="specifications" className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="grid sm:grid-cols-2 gap-x-12 gap-y-4 max-w-4xl">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key} className="flex justify-between py-3 border-b border-border/50">
                    <span className="text-muted-foreground">{key}</span>
                    <span className="font-medium text-right">{value}</span>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="features" className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <ul className="space-y-4 max-w-3xl">
                {product.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-mk-red/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-mk-red" />
                    </div>
                    <span className="text-foreground leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
            </TabsContent>

            <TabsContent value="inquiry" className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <form className="max-w-2xl space-y-6 bg-card p-6 sm:p-8 rounded-2xl border border-border/50">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Full Name *</label>
                    <Input placeholder="John Doe" className="bg-background" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Email Address *</label>
                    <Input type="email" placeholder="john@company.com" className="bg-background" />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Company Name</label>
                    <Input placeholder="Company Ltd." className="bg-background" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Order Quantity</label>
                    <Input placeholder={`Min ${product.moq}`} className="bg-background" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Message Details *</label>
                  <Textarea
                    placeholder="Please specify your requirements, shipping destination, etc."
                    className="min-h-[120px] bg-background"
                  />
                </div>
                <Button className="w-full bg-mk-red hover:bg-mk-red-dark text-white rounded-lg h-12">
                  Submit Inquiry
                </Button>
              </form>
            </TabsContent>
          </Tabs>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div>
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold">Related Products</h2>
              <Link href={`/products?category=${product.category}`}>
                <Button variant="ghost" className="text-mk-red hover:text-mk-red hover:bg-mk-red/5">
                  View More <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProducts.map((p, i) => (
                <ProductCard key={p.id} product={p} index={i} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

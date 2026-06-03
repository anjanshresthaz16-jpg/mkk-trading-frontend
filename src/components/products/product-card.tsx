'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Star, ArrowRight, Eye } from 'lucide-react';
import { Product } from '@/lib/types';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface ProductCardProps {
  product: Product;
  index?: number;
}

export default function ProductCard({ product, index = 0 }: ProductCardProps) {
  const badgeColors: Record<string, string> = {
    'Best Seller': 'bg-mk-red text-white',
    'Premium': 'bg-gradient-to-r from-mk-gold to-mk-gold-light text-mk-black',
    'Top Rated': 'bg-blue-500 text-white',
    'Hot': 'bg-orange-500 text-white',
    'New': 'bg-emerald-500 text-white',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ delay: index * 0.05, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link href={`/products/${product.id}`}>
        <motion.div
          className="group relative rounded-2xl border border-border/50 bg-card overflow-hidden h-full"
          whileHover={{ y: -6 }}
          transition={{ duration: 0.3 }}
        >
          {/* Image Area */}
          <div className="relative aspect-[4/3] bg-muted overflow-hidden">
            <Image 
              src={product.image} 
              alt={product.name}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Badge */}
            {product.badge && (
              <div className="absolute top-3 left-3 z-10">
                <Badge className={`${badgeColors[product.badge] || 'bg-mk-red text-white'} text-[10px] font-semibold px-2.5 py-0.5 rounded-full border-0`}>
                  {product.badge}
                </Badge>
              </div>
            )}

            {/* Quick view overlay */}
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileHover={{ scale: 1 }}
                className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-mk-black text-sm font-medium"
              >
                <Eye className="w-4 h-4" />
                Quick View
              </motion.div>
            </div>
          </div>

          {/* Content */}
          <div className="p-5">
            <div className="flex items-center justify-between mb-2">
              <Badge variant="secondary" className="text-[10px] font-medium capitalize rounded-full">
                {product.category.replace('-', ' & ')}
              </Badge>
              <div className="flex items-center gap-1">
                <Star className="w-3.5 h-3.5 text-mk-gold fill-mk-gold" />
                <span className="text-xs font-medium">{product.rating}</span>
                <span className="text-xs text-muted-foreground">({product.reviews})</span>
              </div>
            </div>

            <h3 className="font-semibold text-sm line-clamp-2 mb-2 group-hover:text-mk-red transition-colors leading-snug">
              {product.name}
            </h3>

            <p className="text-xs text-muted-foreground line-clamp-2 mb-4 leading-relaxed">
              {product.shortDescription}
            </p>

            <div className="flex items-center justify-between">
              <div>
                <span className="text-[10px] text-muted-foreground uppercase tracking-wider">MOQ</span>
                <div className="text-sm font-semibold text-mk-red">{product.moq}</div>
              </div>
              <Button
                size="sm"
                className="bg-mk-red/10 hover:bg-mk-red text-mk-red hover:text-white rounded-full text-xs h-8 px-4 font-medium transition-all duration-300 group/btn"
              >
                Get Quote
                <ArrowRight className="w-3 h-3 ml-1 group-hover/btn:translate-x-0.5 transition-transform" />
              </Button>
            </div>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
}

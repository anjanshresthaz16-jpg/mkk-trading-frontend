'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from 'next-themes';
import {
  Menu, X, ChevronDown, Sun, Moon, Globe, Search,
  Phone, Mail, ShoppingCart
} from 'lucide-react';
import { navLinks } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Bar */}
      <div className="hidden lg:block bg-mk-black text-white/70 text-sm">
        <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <a href="mailto:info@mktrading.com" className="flex items-center gap-1.5 hover:text-white transition-colors">
              <Mail className="w-3.5 h-3.5" />
              info@mktrading.com
            </a>
            <a href="tel:+8612345678" className="flex items-center gap-1.5 hover:text-white transition-colors">
              <Phone className="w-3.5 h-3.5" />
              +86 123 4567 890
            </a>
          </div>
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-1.5 hover:text-white transition-colors">
              <Globe className="w-3.5 h-3.5" />
              EN / 中文
            </button>
            <span className="text-white/20">|</span>
            <span className="text-mk-gold text-xs font-medium tracking-wider">
              🏆 20+ Years of Global Trading Excellence
            </span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <motion.header
        className={`sticky top-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-background/80 backdrop-blur-xl shadow-lg shadow-black/5 border-b border-border/50'
            : 'bg-background/50 backdrop-blur-md'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <nav className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-10 h-10 rounded-xl bg-mk-red flex items-center justify-center overflow-hidden">
                <span className="text-white font-bold text-lg tracking-tight">MK</span>
                <div className="absolute inset-0 bg-gradient-to-tr from-mk-red via-mk-red-light to-mk-red opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold tracking-tight leading-none">MK Trading</span>
                <span className="text-[10px] text-muted-foreground tracking-[0.2em] uppercase leading-none mt-0.5">
                  Global Solutions
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <div
                  key={link.href}
                  className="relative"
                  onMouseEnter={() => link.children && setActiveDropdown(link.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={link.href}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-1 ${
                      pathname === link.href
                        ? 'text-mk-red bg-mk-red/5'
                        : 'text-foreground/70 hover:text-foreground hover:bg-accent'
                    }`}
                  >
                    {link.label}
                    {link.children && <ChevronDown className="w-3.5 h-3.5" />}
                  </Link>

                  {/* Dropdown */}
                  <AnimatePresence>
                    {link.children && activeDropdown === link.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.96 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.96 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-1 w-56 py-2 bg-popover rounded-xl shadow-xl shadow-black/10 border border-border/50 backdrop-blur-xl"
                      >
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block px-4 py-2.5 text-sm text-foreground/70 hover:text-mk-red hover:bg-accent transition-colors"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* Right Section */}
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full"
                aria-label="Search"
              >
                <Search className="w-4.5 h-4.5" />
              </Button>

              {mounted && (
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full"
                  onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                  aria-label="Toggle theme"
                >
                  {theme === 'dark' ? <Sun className="w-4.5 h-4.5" /> : <Moon className="w-4.5 h-4.5" />}
                </Button>
              )}

              <Button
                variant="ghost"
                size="icon"
                className="rounded-full relative"
                aria-label="Inquiry cart"
              >
                <ShoppingCart className="w-4.5 h-4.5" />
                <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-mk-red text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                  0
                </span>
              </Button>

              <Link href="/contact" className="hidden lg:block">
                <Button className="bg-mk-red hover:bg-mk-red-dark text-white rounded-full px-6 h-9 text-sm font-medium shadow-lg shadow-mk-red/20">
                  Get Quote
                </Button>
              </Link>

              {/* Mobile Menu */}
              <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
                <SheetTrigger render={<Button variant="ghost" size="icon" className="rounded-full" />} className="lg:hidden">
                  <Menu className="w-5 h-5" />
                </SheetTrigger>
                <SheetContent side="right" className="w-80 p-0">
                  <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                  <div className="flex flex-col h-full">
                    <div className="p-6 border-b border-border/50">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-mk-red flex items-center justify-center">
                          <span className="text-white font-bold text-lg">MK</span>
                        </div>
                        <div>
                          <div className="font-bold">MK Trading</div>
                          <div className="text-xs text-muted-foreground">Global Solutions</div>
                        </div>
                      </div>
                    </div>
                    <div className="flex-1 overflow-y-auto py-4">
                      {navLinks.map((link) => (
                        <div key={link.href}>
                          <Link
                            href={link.href}
                            onClick={() => setMobileOpen(false)}
                            className={`flex items-center justify-between px-6 py-3.5 text-sm font-medium transition-colors ${
                              pathname === link.href
                                ? 'text-mk-red bg-mk-red/5'
                                : 'text-foreground/70 hover:text-foreground hover:bg-accent'
                            }`}
                          >
                            {link.label}
                            {link.children && <ChevronDown className="w-4 h-4" />}
                          </Link>
                          {link.children && (
                            <div className="pl-6 border-l-2 border-mk-red/20 ml-6">
                              {link.children.map((child) => (
                                <Link
                                  key={child.href}
                                  href={child.href}
                                  onClick={() => setMobileOpen(false)}
                                  className="block px-4 py-2.5 text-sm text-muted-foreground hover:text-mk-red transition-colors"
                                >
                                  {child.label}
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                    <div className="p-6 border-t border-border/50">
                      <Link href="/contact" onClick={() => setMobileOpen(false)}>
                        <Button className="w-full bg-mk-red hover:bg-mk-red-dark text-white rounded-full h-12 font-medium">
                          Get a Quote
                        </Button>
                      </Link>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </nav>
      </motion.header>
    </>
  );
}

'use client';
import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Variants } from 'framer-motion';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setActiveLink(id);
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { label: 'Services', id: 'services' },
    { label: 'About', id: 'about' },
    { label: 'Contact', id: 'contact' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
    },
  },
};

  return (
    <>
      {/* Main Navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-lg shadow-lg'
            : 'bg-gradient-to-b from-white via-white to-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo with animation */}
            <motion.a
              href="#"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-2xl font-light tracking-tight text-black relative group"
            >
              <span className="relative">
                Luminate
                <motion.div
                  className="absolute bottom-0 left-0 h-0.5 bg-black"
                  initial={{ width: 0 }}
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.3 }}
                />
              </span>
              <span className="font-bold ml-1">Systems</span>
              
              {/* Animated dot */}
              <motion.div
                className="absolute -right-4 -top-2 w-2 h-2 bg-gradient-to-r from-black to-gray-600 rounded-full"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-2">
              {/* Links with underline animation */}
              {navLinks.map((link, index) => (
                <motion.button
                  key={link.id}
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: index * 0.1 }}
                  onClick={() => scrollToSection(link.id)}
                  className="relative group px-4 py-2 text-sm font-medium text-gray-700 transition-colors"
                >
                  {link.label}
                  
                  {/* Animated underline */}
                  <motion.div
                    className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-black to-gray-600"
                    initial={{ width: 0 }}
                    whileHover={{ width: '100%' }}
                    transition={{ duration: 0.3 }}
                  />
                  
                  {/* Animated background on hover */}
                  <motion.div
                    className="absolute inset-0 bg-gray-100 rounded-lg -z-10"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileHover={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>
              ))}

              {/* CTA Button with cool hover effect */}
              <motion.button
                onClick={() => scrollToSection('contact')}
                className="relative ml-6 px-6 py-2.5 text-sm font-semibold text-white overflow-hidden rounded-xl group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Animated gradient background */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-gray-900 via-black to-gray-900"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.5 }}
                />
                
                {/* Animated background shine */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%', opacity: 0.2 }}
                  transition={{ duration: 0.8 }}
                />

                <span className="relative flex items-center gap-2">
                  Start Project
                  <motion.div
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </motion.div>
                </span>
              </motion.button>
            </div>

            {/* Mobile Menu Button with animation */}
            <motion.button
              className="md:hidden p-2.5 rounded-lg hover:bg-gray-100 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <X className="w-6 h-6 text-black" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Menu className="w-6 h-6 text-black" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>

        {/* Animated border bottom */}
        {isScrolled && (
          <motion.div
            className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          />
        )}
      </motion.nav>

      {/* Mobile Menu with sophisticated animations */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -20, backdropFilter: 'blur(0px)' }}
            animate={{ opacity: 1, y: 0, backdropFilter: 'blur(10px)' }}
            exit={{ opacity: 0, y: -20, backdropFilter: 'blur(0px)' }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 top-20 z-40 bg-white/80 backdrop-blur-md md:hidden overflow-hidden"
          >
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="max-w-7xl mx-auto px-6 py-8"
            >
              {/* Links */}
              <div className="space-y-2 mb-8">
                {navLinks.map((link) => (
                  <motion.button
                    key={link.id}
                    variants={itemVariants}
                    onClick={() => scrollToSection(link.id)}
                    className="w-full text-left text-2xl font-light text-black py-4 px-4 rounded-xl hover:bg-gray-100 transition-colors group relative overflow-hidden"
                  >
                    {/* Animated background */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-gray-50 to-transparent"
                      initial={{ x: '-100%' }}
                      whileHover={{ x: 0 }}
                      transition={{ duration: 0.5 }}
                      style={{ zIndex: -1 }}
                    />

                    <span className="relative flex items-center justify-between">
                      {link.label}
                      <motion.div
                        animate={{ x: [0, 4, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </motion.div>
                    </span>
                  </motion.button>
                ))}
              </div>

              {/* CTA Button for mobile */}
              <motion.button
                variants={itemVariants}
                onClick={() => scrollToSection('contact')}
                className="w-full relative px-6 py-4 text-lg font-semibold text-white rounded-xl overflow-hidden group"
              >
                {/* Gradient background */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-gray-900 to-black"
                  initial={{ opacity: 0.8 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />

                {/* Shine effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0"
                  animate={{ x: ['-100%', '100%'] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />

                <span className="relative flex items-center justify-center gap-2">
                  Start Your Project
                  <ArrowUpRight className="w-5 h-5" />
                </span>
              </motion.button>

              {/* Divider */}
              <motion.div
                variants={itemVariants}
                className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent mt-8"
              />

              {/* Social/Contact info */}
              <motion.div
                variants={itemVariants}
                className="mt-8 pt-8"
              >
                <p className="text-xs uppercase tracking-widest text-gray-400 mb-4">Contact</p>
                <a
                  href="tel:+13312436122"
                  className="block text-sm text-gray-700 hover:text-black transition-colors mb-3"
                >
                  +1 (331) 243-6122
                </a>
                <a
                  href="mailto:hello@luminatesystems.com"
                  className="block text-sm text-gray-700 hover:text-black transition-colors"
                >
                  contact@luminatesystems.com
                </a>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Scroll progress indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-black via-gray-700 to-black z-50"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: isScrolled ? 0.3 : 0 }}
        transition={{ duration: 0.5 }}
        style={{ transformOrigin: 'left' }}
      />
    </>
  );
}
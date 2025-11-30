'use client';
import React from 'react';
import { ArrowUpRight, Code2, Bot, Zap } from 'lucide-react';
import Button from '@/components/ui/button';
import { motion } from 'framer-motion';

export default function Hero() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-white pt-20">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-72 h-72 bg-gray-100 rounded-full blur-3xl opacity-40" />
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-gray-100 rounded-full blur-3xl opacity-40" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20">
        <div className="text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 border border-gray-200 text-gray-700 text-sm font-medium mb-10"
          >
            <Zap className="w-4 h-4" />
            Software Development Studio
          </motion.div>

          {/* Main heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-light tracking-tight text-black mb-6 leading-tight">
              Luminate<br />
              <span className="font-bold bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-transparent">
                Systems
              </span>
            </h1>
          </motion.div>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-12 font-light leading-relaxed"
          >
            We build elegant software solutions that scale. From responsive web applications to intelligent AI systems and expert debugging services—we deliver excellence.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <Button
              onClick={scrollToContact}
              className="bg-black text-white hover:bg-gray-800 px-10 py-3.5 text-base rounded-lg transition-all duration-300 group font-semibold flex items-center gap-2"
            >
              Start a Project
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Button>
            <Button
              variant="outline"
              onClick={scrollToServices}
              className="border-gray-300 text-gray-700 hover:bg-gray-50 px-10 py-3.5 text-base rounded-lg transition-all duration-300 font-semibold"
            >
              Explore Services
            </Button>
          </motion.div>

          {/* Service icons with labels */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex justify-center gap-8 md:gap-16 mt-16 mb-12 flex-wrap"
          >
            {[
              { icon: Code2, label: 'Web Development' },
              { icon: Bot, label: 'AI Chatbots' },
              { icon: Code2, label: 'Debugging' },
            ].map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center gap-3 text-gray-500 hover:text-black transition-colors duration-300 cursor-default group"
              >
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center group-hover:bg-gray-200 transition-colors">
                  <item.icon className="w-6 h-6" strokeWidth={1.5} />
                </div>
                <span className="text-xs tracking-wider uppercase font-medium">{item.label}</span>
              </div>
            ))}
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-3 gap-8 mt-20 pt-12 border-t border-gray-200"
          >
            <div>
              <p className="text-3xl md:text-4xl font-semibold text-black">50+</p>
              <p className="text-gray-600 text-sm mt-2">Projects Delivered</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-semibold text-black">30+</p>
              <p className="text-gray-600 text-sm mt-2">Satisfied Clients</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-semibold text-black">5+</p>
              <p className="text-gray-600 text-sm mt-2">Years Experience</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-2 bg-gray-400 rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
}
'use client';
import React from 'react';
import { Github, Linkedin, Twitter, Mail, Phone } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
  ];

  return (
    <footer className="bg-gray-950 text-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main footer content */}
        <div className="py-20 grid md:grid-cols-3 gap-16">
          {/* Logo & Description */}
          <div>
            <h3 className="text-2xl font-light tracking-tight mb-3">
              Luminate<span className="font-semibold">Systems</span>
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Software development studio creating elegant solutions for the web.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-sm uppercase tracking-widest text-gray-400 mb-6 font-semibold">Navigation</h4>
            <div className="space-y-3">
              {footerLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block text-gray-300 hover:text-white transition-colors text-sm"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm uppercase tracking-widest text-gray-400 mb-6 font-semibold">Get In Touch</h4>
            <div className="space-y-3">
              <a
                href="mailto:hello@luminatesystems.com"
                className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors text-sm"
              >
                <Mail className="w-4 h-4" />
                contact@luminatesystems.com
              </a>
              <a
                href="tel:+13312436122"
                className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors text-sm"
              >
                <Phone className="w-4 h-4" />
                +1 (331) 243-6122
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gray-800" />

        {/* Bottom footer */}
        <div className="py-12 flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Copyright */}
          <p className="text-gray-500 text-sm">
            © {currentYear} Luminate Systems. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                title={social.label}
                className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center justify-center transition-colors"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>

          {/* Legal Links */}
          <div className="flex gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-gray-300 transition-colors">Privacy</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
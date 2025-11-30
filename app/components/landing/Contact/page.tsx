'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Button from '@/components/ui/button';
import Input from '@/components/ui/input';
import Textarea from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    phone: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '', phone: '' });

      // Reset after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    } catch (err) {
      setError('Failed to send message. Please try again.');
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-40 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-20">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs tracking-widest uppercase text-gray-400 mb-4"
          >
            Get In Touch
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-light text-black"
          >
            Let's Create <span className="font-semibold">Something Great</span>
          </motion.h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-600 text-lg leading-relaxed mb-12">
              Have a project in mind? We'd love to hear from you. Reach out and let's discuss how we can help bring your vision to life.
            </p>

            <div className="space-y-8">
              {/* Email */}
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-gray-800" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-gray-400 mb-2">Email</p>
                  <a href="mailto:hello@luminatesystems.com" className="text-black text-lg hover:text-gray-600 transition-colors">
                    hello@luminatesystems.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-gray-800" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-gray-400 mb-2">Phone</p>
                  <a href="tel:+13312436122" className="text-black text-lg hover:text-gray-600 transition-colors">
                    +1 (331) 243-6122
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-gray-800" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-gray-400 mb-2">Location</p>
                  <p className="text-black text-lg">
                    Remote Worldwide
                  </p>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="h-px bg-gray-200 my-12" />

            {/* Response Time */}
            <div className="bg-gray-50 p-8 rounded-xl border border-gray-200">
              <p className="text-xs uppercase tracking-widest text-gray-400 mb-3">Average Response Time</p>
              <p className="text-2xl font-semibold text-black">Within 24 hours</p>
            </div>
          </motion.div>

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="bg-gray-50 p-12 rounded-2xl border border-gray-200">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-16"
                >
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-semibold text-black mb-3">Thank You!</h3>
                  <p className="text-gray-600">We've received your message and will get back to you shortly.</p>
                </motion.div>
              ) : (
                <div className="space-y-6">
                  {error && (
                    <div className="flex gap-3 p-4 bg-red-50 border border-red-200 rounded-lg">
                      <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                      <p className="text-red-700 text-sm">{error}</p>
                    </div>
                  )}

                  <div>
                    <label className="text-xs uppercase tracking-widest text-gray-600 block mb-3">Full Name</label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                      className="bg-white border-gray-300 focus:border-black focus:ring-black rounded-lg"
                    />
                  </div>

                  <div>
                    <label className="text-xs uppercase tracking-widest text-gray-600 block mb-3">Email Address</label>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                      className="bg-white border-gray-300 focus:border-black focus:ring-black rounded-lg"
                    />
                  </div>

                  <div>
                    <label className="text-xs uppercase tracking-widest text-gray-600 block mb-3">Phone (Optional)</label>
                    <Input
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 (XXX) XXX-XXXX"
                      className="bg-white border-gray-300 focus:border-black focus:ring-black rounded-lg"
                    />
                  </div>

                  <div>
                    <label className="text-xs uppercase tracking-widest text-gray-600 block mb-3">Message</label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project..."
                      required
                      rows={6}
                      className="bg-white border-gray-300 focus:border-black focus:ring-black rounded-lg resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-black text-white hover:bg-gray-800 py-3 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 font-medium"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </Button>
                </div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
'use client';
import React, { useState } from 'react';
import { Code2, Bot, Bug, ArrowUpRight, Zap, ShoppingCart, Server, Palette, CreditCard } from 'lucide-react';
import { motion } from 'framer-motion';

const coreServices = [
  {
    icon: Code2,
    title: 'Web Development',
    description: 'Custom-built websites and web applications designed for performance, scalability, and user experience.',
    features: ['React & Next.js', 'TypeScript', 'Responsive Design', 'SEO Optimized'],
  },
  {
    icon: Bot,
    title: 'AI Chatbots',
    description: 'Intelligent conversational systems that automate support, increase engagement, and improve customer satisfaction.',
    features: ['NLP Integration', '24/7 Support', 'Multi-language', 'Custom Training'],
  },
  {
    icon: Bug,
    title: 'Debugging Services',
    description: 'Expert code review and troubleshooting to identify issues, optimize performance, and ensure reliability.',
    features: ['Code Analysis', 'Performance Audit', 'Security Review', 'Full Documentation'],
  }
];

const specializedServices = [
  {
    icon: ShoppingCart,
    title: 'Shopify E-Commerce Stores',
    subtitle: 'Complete Store Development',
    description: 'We build and customize Shopify stores with seamless integrations, stunning designs, and optimized checkout flows.',
    features: [
      'Theme Customization',
      'Payment Gateway Integration',
      'Inventory Management',
      'Conversion Optimization',
      'Product Catalog Setup',
      'Analytics & Reporting'
    ],
    highlights: ['Stripe', 'PayPal', 'Xendit', 'Square'],
    badge: 'E-COMMERCE',
    bgColor: 'bg-gray-100',
    borderColor: 'border-gray-300',
    hoverBg: 'hover:bg-gray-50'
  },
  {
    icon: Server,
    title: 'POS Systems',
    subtitle: 'Point of Sale Solutions',
    description: 'Custom-built POS systems tailored for retail, restaurants, and service businesses with real-time analytics.',
    features: [
      'Real-time Inventory',
      'Sales Analytics',
      'Multi-location Support',
      'Receipt Printing',
      'Customer Management',
      'Payment Processing'
    ],
    highlights: ['Cloud-Based', 'Offline Mode', 'Mobile Ready', 'Reporting'],
    badge: 'RETAIL SOLUTIONS',
    bgColor: 'bg-gray-50',
    borderColor: 'border-gray-300',
    hoverBg: 'hover:bg-gray-100'
  },
  {
    icon: CreditCard,
    title: 'Payment Integration',
    subtitle: 'Seamless Payment Solutions',
    description: 'Integrate multiple payment gateways into your platform with secure, reliable, and user-friendly checkout experiences.',
    features: [
      'Multi-Currency Support',
      'Fraud Detection',
      'Subscription Billing',
      'Refund Management',
      'PCI Compliance',
      'Webhook Integration'
    ],
    highlights: ['Stripe', 'PayPal', 'Xendit', 'Square'],
    badge: 'PAYMENTS',
    bgColor: 'bg-gray-100',
    borderColor: 'border-gray-300',
    hoverBg: 'hover:bg-gray-50'
  },
  {
    icon: Palette,
    title: 'Design to Website',
    subtitle: 'From Mockup to Live',
    description: 'Transform your Figma designs, Adobe XD mockups, or Webflow designs into fully functional, optimized custom websites.',
    features: [
      'Pixel-Perfect Implementation',
      'Responsive Conversion',
      'Animation Integration',
      'Performance Optimization',
      'Interactive Elements',
      'SEO Implementation'
    ],
    highlights: ['Figma', 'Adobe XD', 'Webflow', 'Sketch'],
    badge: 'DESIGN CONVERSION',
    bgColor: 'bg-gray-50',
    borderColor: 'border-gray-300',
    hoverBg: 'hover:bg-gray-100'
  }
];

export default function Services() {
  const [expandedService, setExpandedService] = useState<number | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <section id="services" className="py-40 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-32">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs tracking-widest uppercase text-gray-400 mb-4"
          >
            What We Do
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-light text-black mb-6"
          >
            Our <span className="font-semibold">Services</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-600 text-lg max-w-3xl"
          >
            We deliver comprehensive software solutions tailored to your business needs. From e-commerce to POS systems, we build everything with excellence.
          </motion.p>
        </div>

        {/* Core Services Grid */}
        <div className="mb-24">
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-2xl font-semibold text-black mb-12"
          >
            Core Services
          </motion.h3>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {coreServices.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group"
              >
                <div className="h-full bg-white border border-gray-200 rounded-2xl p-10 hover:shadow-xl transition-all duration-500 hover:border-gray-300 flex flex-col">
                  {/* Icon */}
                  <div className="w-16 h-16 bg-gray-900 rounded-xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-7 h-7 text-white" strokeWidth={1.5} />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-semibold text-black mb-4 flex items-center gap-2">
                    {service.title}
                    <ArrowUpRight className="w-5 h-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed mb-8 flex-grow">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-3 pt-8 border-t border-gray-200">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-gray-400 rounded-full" />
                        <span className="text-gray-600 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Specialized Services */}
        <div className="mb-24">
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-2xl font-semibold text-black mb-12"
          >
            Specialized Solutions
          </motion.h3>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid lg:grid-cols-2 gap-8"
          >
            {specializedServices.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group"
              >
                <motion.div
                  className={`relative h-full ${service.bgColor} border ${service.borderColor} rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 overflow-hidden cursor-pointer ${service.hoverBg}`}
                  onClick={() => setExpandedService(expandedService === index ? null : index)}
                  whileHover={{ y: -5 }}
                >
                  {/* Badge */}
                  <div className="absolute top-6 right-6 inline-block px-3 py-1 bg-gray-800 text-white text-xs font-semibold rounded-full">
                    {service.badge}
                  </div>

                  <div className="relative">
                    {/* Icon */}
                    <div className="w-14 h-14 bg-gray-900 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <service.icon className="w-7 h-7 text-white" strokeWidth={1.5} />
                    </div>

                    {/* Title and Subtitle */}
                    <h3 className="text-2xl font-bold text-black mb-2">{service.title}</h3>
                    <p className="text-sm font-semibold text-gray-700 mb-4">
                      {service.subtitle}
                    </p>

                    {/* Description */}
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {service.description}
                    </p>

                    {/* Highlights */}
                    <div className="mb-6 pb-6 border-b border-gray-300">
                      <p className="text-xs uppercase tracking-widest text-gray-500 mb-3 font-semibold">
                        {service.badge === 'PAYMENTS' || service.badge === 'E-COMMERCE' ? 'Integrations' : 'Supported'}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {service.highlights.map((highlight, idx) => (
                          <span key={idx} className="px-3 py-1 rounded-full text-xs font-medium bg-gray-800 text-white">
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Features with smooth expansion */}
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{
                        opacity: expandedService === index ? 1 : 0,
                        height: expandedService === index ? 'auto' : 0,
                      }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="space-y-3">
                        {service.features.map((feature, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.05 }}
                            className="flex items-center gap-3"
                          >
                            <Zap className="w-4 h-4 text-gray-700" />
                            <span className="text-gray-700 text-sm font-medium">{feature}</span>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>

                    {/* Expand indicator */}
                    <motion.div
                      animate={{ rotate: expandedService === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="inline-block mt-4 p-2 rounded-lg bg-gray-800 text-white"
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Process Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gray-50 rounded-3xl p-12 md:p-16 border border-gray-200 mb-24"
        >
          <h3 className="text-3xl font-semibold text-black mb-12">Our Development Process</h3>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Discovery',
                description: 'We understand your business goals, target audience, and technical requirements.'
              },
              {
                step: '02',
                title: 'Design',
                description: 'Create beautiful, user-centered designs and system architecture.'
              },
              {
                step: '03',
                title: 'Development',
                description: 'Build scalable, secure, and performant solutions with clean code.'
              },
              {
                step: '04',
                title: 'Launch',
                description: 'Deploy to production with testing, monitoring, and ongoing support.'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="relative">
                  <div className="text-5xl font-light text-gray-300 mb-4">{item.step}</div>
                  <h4 className="text-xl font-semibold text-black mb-2">{item.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                  
                  {/* Connector line */}
                  {index < 3 && (
                    <motion.div
                      className="hidden md:block absolute -right-4 top-8 w-8 h-0.5 bg-gray-400"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                    />
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tech Stack Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gray-900 rounded-3xl p-12 md:p-16 text-white mb-24"
        >
          <h3 className="text-3xl font-semibold mb-12">Technology Stack</h3>
          
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                category: 'Frontend',
                techs: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion']
              },
              {
                category: 'Backend',
                techs: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'Firebase']
              },
              {
                category: 'Integrations',
                techs: ['Stripe', 'Xendit', 'Shopify API', 'PayPal', 'AWS']
              }
            ].map((stack, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <h4 className="text-lg font-semibold mb-4 text-gray-200">{stack.category}</h4>
                <div className="space-y-2">
                  {stack.techs.map((tech, idx) => (
                    <motion.div
                      key={idx}
                      className="flex items-center gap-3 text-gray-400"
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="w-1.5 h-1.5 bg-white rounded-full" />
                      <span>{tech}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white border border-gray-200 rounded-3xl p-12 md:p-16 text-center"
        >
          <h3 className="text-4xl font-bold text-black mb-4">Ready to Build Something Exceptional?</h3>
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            Let's discuss how our services can help transform your business and bring your vision to life.
          </p>
          <a
            href="#contact"
            className="inline-block bg-black text-white px-10 py-4 rounded-xl font-semibold hover:bg-gray-800 transition-all duration-300 group"
          >
            <span className="flex items-center gap-2">
              Get Started Today
              <motion.div animate={{ x: [0, 4, 0] }} transition={{ duration: 2, repeat: Infinity }}>
                <ArrowUpRight className="w-5 h-5" />
              </motion.div>
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
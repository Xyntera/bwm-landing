'use client';

import { motion } from 'framer-motion';
import { Phone, MessageCircle, Instagram, Linkedin, ArrowRight, Sparkles, Clock, Users, Award } from 'lucide-react';

export function JoinContactSection() {
  const benefits = [
    {
      icon: Clock,
      title: '8-Week Program',
      description: 'Structured journey from idea to pitch',
      color: '#3083FF'
    },
    {
      icon: Users,
      title: 'Expert Mentors',
      description: '1:1 guidance from real entrepreneurs',
      color: '#00D6C2'
    },
    {
      icon: Award,
      title: 'Real Results',
      description: 'Build MVPs that customers actually want',
      color: '#FFE600'
    }
  ];

  const contactMethods = [
    {
      id: 'builder-pass',
      title: 'Claim Your Kid\'s Builder Pass',
      description: 'Secure your spot in the next cohort',
      action: 'Claim Now',
      primary: true,
      color: '#FFE600',
      icon: Sparkles
    },
    {
      id: 'whatsapp',
      title: 'WhatsApp +91 9645490114',
      description: 'Quick questions? Chat with us instantly',
      action: 'WhatsApp Now',
      primary: false,
      color: '#00D6C2',
      icon: MessageCircle
    },
    {
      id: 'callback',
      title: 'Request a Callback',
      description: 'Schedule a personalized consultation',
      action: 'Schedule Call',
      primary: false,
      color: '#3083FF',
      icon: Phone
    }
  ];

  const socialLinks = [
    {
      name: 'Instagram',
      handle: '@Myversity',
      url: '#',
      icon: Instagram,
      color: '#E4405F'
    },
    {
      name: 'LinkedIn',
      handle: 'Myversity',
      url: '#',
      icon: Linkedin,
      color: '#0077B5'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-soft-turquoise/10 to-deep-charcoal relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-electric-yellow/20 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-bright-blue/20 blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 rounded-full bg-soft-turquoise/10 blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold font-heading text-white mb-6">
            Ready to{' '}
            <span className="bg-gradient-to-r from-electric-yellow to-soft-turquoise bg-clip-text text-transparent">
              Start Building?
            </span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Join the next generation of young entrepreneurs. Your kid&apos;s startup journey begins here.
          </p>
        </motion.div>

        {/* Benefits showcase */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1, duration: 0.4 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="glass rounded-2xl p-6 bg-white/10 backdrop-blur-sm border border-white/20 text-center group hover:bg-white/20 transition-all duration-300"
            >
              <div 
                className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                style={{ backgroundColor: `${benefit.color}20`, border: `2px solid ${benefit.color}` }}
              >
                <benefit.icon 
                  className="w-8 h-8" 
                  style={{ color: benefit.color }}
                />
              </div>
              <h3 className="text-xl font-bold font-heading text-white mb-2">
                {benefit.title}
              </h3>
              <p className="text-white/70">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Contact methods */}
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
          >
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1, duration: 0.4 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className={`glass rounded-2xl p-8 border border-white/30 group cursor-pointer transition-all duration-300 ${
                  method.primary 
                    ? 'bg-white/20 backdrop-blur-sm hover:bg-white/30' 
                    : 'bg-white/10 backdrop-blur-sm hover:bg-white/20'
                }`}
                style={{
                  boxShadow: method.primary ? `0 0 30px ${method.color}40` : undefined
                }}
              >
                <div className="text-center">
                  <div 
                    className={`w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 ${
                      method.primary ? 'animate-pulse' : ''
                    }`}
                    style={{ backgroundColor: method.color }}
                  >
                    <method.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold font-heading text-white mb-3">
                    {method.title}
                  </h3>
                  <p className="text-white/70 mb-6 leading-relaxed">
                    {method.description}
                  </p>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`inline-flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                      method.primary
                        ? 'bg-white text-deep-charcoal hover:bg-white/90'
                        : 'border-2 text-white hover:bg-white hover:text-deep-charcoal'
                    }`}
                    style={{
                      borderColor: !method.primary ? method.color : undefined
                    }}
                  >
                    <span>{method.action}</span>
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="text-center"
          >
            <h3 className="text-xl font-semibold font-heading text-white mb-6">
              Follow Our Journey
            </h3>
            <div className="flex justify-center space-x-6">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.9 + index * 0.1, duration: 0.3 }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="group"
                >
                  <div className="glass rounded-xl p-4 bg-white/10 backdrop-blur-sm border border-white/20 group-hover:bg-white/20 transition-all duration-300">
                    <social.icon 
                      className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-200" 
                    />
                  </div>
                  <div className="mt-2 text-sm text-white/70 group-hover:text-white transition-colors">
                    {social.handle}
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.6 }}
          className="text-center mt-20"
        >
          <div className="glass rounded-3xl p-12 bg-white/10 backdrop-blur-sm border border-white/20 max-w-4xl mx-auto">
            <motion.div
              animate={{ 
                scale: [1, 1.02, 1],
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <h3 className="text-3xl md:text-4xl font-bold font-heading text-white mb-6">
                The Future is Built by Young Minds
              </h3>
              <p className="text-xl text-white/80 mb-8 leading-relaxed">
                Don&apos;t wait. The entrepreneurial mindset is best developed early. 
                Give your kid the tools to build tomorrow, today.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-electric-yellow to-soft-turquoise text-deep-charcoal px-12 py-4 rounded-full font-bold text-xl transition-all duration-200 neon-glow-yellow"
              >
                Start Their Journey Now
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
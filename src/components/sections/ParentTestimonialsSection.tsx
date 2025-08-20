'use client';

import { motion } from 'framer-motion';
import { Quote, Heart, MessageCircle, Star } from 'lucide-react';

interface Testimonial {
  id: string;
  parent: string;
  child: string;
  quote: string;
  relationship: string;
  color: string;
}

const testimonials: Testimonial[] = [
  {
    id: 'priya',
    parent: 'Priya Sharma',
    child: 'Ishika',
    quote: 'I want Ishika to be an entrepreneur. This program gave her the confidence to start her puppet business.',
    relationship: 'Mother',
    color: '#FFE600', // electric-yellow
  },
  {
    id: 'ahmed',
    parent: 'Ahmed Khan',
    child: 'Muhammad Aarfeen',
    quote: 'Watching Aarfeen pitch his online course idea to real entrepreneurs was incredible. He&apos;s so much more confident now.',
    relationship: 'Father',
    color: '#3083FF', // bright-blue
  },
  {
    id: 'sarah',
    parent: 'Sarah Williams',
    child: 'Ikenna',
    quote: 'The mentorship and real-world experience helped Ikenna build Swearfy. He&apos;s learned skills I never had at his age.',
    relationship: 'Mother',
    color: '#00D6C2', // soft-turquoise
  },
  {
    id: 'raj',
    parent: 'Raj Patel',
    child: 'Anaya',
    quote: 'My daughter now thinks like an entrepreneur. She spots problems everywhere and immediately thinks of solutions!',
    relationship: 'Father',
    color: '#FFE600', // electric-yellow
  },
  {
    id: 'lisa',
    parent: 'Lisa Chen',
    child: 'Kevin',
    quote: 'The WhatsApp support and live sessions kept Kevin engaged. No boring homework - just real missions that excited him.',
    relationship: 'Mother',
    color: '#3083FF', // bright-blue
  },
];

function TestimonialCard({ testimonial, index }: { testimonial: Testimonial; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, rotateX: 10 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      whileHover={{ 
        y: -10, 
        scale: 1.02,
        rotateX: -5,
        transition: { duration: 0.2 }
      }}
      className="relative group"
    >
      <div 
        className="glass rounded-2xl p-6 bg-white/60 backdrop-blur-sm border border-white/30 relative overflow-hidden transition-all duration-300 group-hover:bg-white/80"
        style={{
          boxShadow: `0 10px 30px rgba(0,0,0,0.1), 0 0 20px ${testimonial.color}20`
        }}
      >
        {/* Background gradient */}
        <div 
          className="absolute inset-0 opacity-5 rounded-2xl"
          style={{
            background: `linear-gradient(135deg, ${testimonial.color}40, transparent)`
          }}
        />
        
        {/* Quote icon */}
        <div className="flex justify-between items-start mb-4">
          <Quote 
            className="w-8 h-8 opacity-20" 
            style={{ color: testimonial.color }}
          />
          <div className="flex space-x-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star 
                key={star}
                className="w-4 h-4 fill-current"
                style={{ color: testimonial.color }}
              />
            ))}
          </div>
        </div>

        {/* Quote text */}
        <blockquote className="text-deep-charcoal/90 leading-relaxed mb-6 relative z-10">
          &ldquo;{testimonial.quote}&rdquo;
        </blockquote>

        {/* Parent info */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div 
              className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg"
              style={{ backgroundColor: testimonial.color }}
            >
              {testimonial.parent.charAt(0)}
            </div>
            <div>
              <div className="font-semibold text-deep-charcoal font-heading">
                {testimonial.parent}
              </div>
              <div className="text-sm text-deep-charcoal/60">
                {testimonial.relationship} of {testimonial.child}
              </div>
            </div>
          </div>
          
          {/* Floating emoji decorations */}
          <div className="flex space-x-2 opacity-60">
            <motion.div
              animate={{ 
                y: [0, -5, 0],
                rotate: [0, 5, 0]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Heart className="w-4 h-4" style={{ color: testimonial.color }} />
            </motion.div>
            <motion.div
              animate={{ 
                y: [0, -3, 0],
                rotate: [0, -5, 0]
              }}
              transition={{ 
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5
              }}
            >
              <MessageCircle className="w-4 h-4" style={{ color: testimonial.color }} />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function ParentTestimonialsSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-cloud-white to-electric-yellow/5 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-16 h-16 rounded-full bg-soft-turquoise/40 blur-2xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-20 h-20 rounded-full bg-bright-blue/30 blur-2xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-electric-yellow/20 blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-deep-charcoal mb-6">
            What{' '}
            <span className="bg-gradient-to-r from-electric-yellow to-soft-turquoise bg-clip-text text-transparent">
              Parents
            </span>{' '}
            Are Saying
          </h2>
          <p className="text-xl text-deep-charcoal/80 max-w-2xl mx-auto">
            Real feedback from parents who&apos;ve watched their kids transform into confident young entrepreneurs
          </p>
        </motion.div>

        {/* Testimonials grid with staggered layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id} 
              className={`${index === 2 ? 'md:col-span-2 lg:col-span-1' : ''} ${index === 3 ? 'lg:col-start-2' : ''}`}
            >
              <TestimonialCard testimonial={testimonial} index={index} />
            </div>
          ))}
        </div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-center mt-16"
        >
          <div className="glass rounded-2xl p-8 bg-white/40 backdrop-blur-sm border border-white/30 max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              <div className="text-center">
                <div className="text-3xl font-bold text-bright-blue mb-2">250+</div>
                <div className="text-deep-charcoal/70">Young Builders</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-soft-turquoise mb-2">98%</div>
                <div className="text-deep-charcoal/70">Parent Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-electric-yellow mb-2">50+</div>
                <div className="text-deep-charcoal/70">Real MVPs Built</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
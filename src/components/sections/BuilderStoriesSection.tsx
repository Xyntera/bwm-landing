'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

interface BuilderStory {
  id: string;
  name: string;
  frontImage: string;
  frontLabel: string;
  backQuote: string;
  color: string;
}

const stories: BuilderStory[] = [
  {
    id: 'ishika',
    name: 'Ishika',
    frontImage: '/images/ishika-grandfather.webp',
    frontLabel: 'Puppet Store',
    backQuote: 'Sold 5 eco-friendly puppets. "I want Ishika to be an entrepreneur."',
    color: '#FFE600', // electric-yellow
  },
  {
    id: 'aarfeen',
    name: 'Muhammad Aarfeen',
    frontImage: '/images/aarfeen-desk.webp',
    frontLabel: 'Online Course',
    backQuote: 'Pitched an online course to real entrepreneurs.',
    color: '#3083FF', // bright-blue
  },
  {
    id: 'ikenna',
    name: 'Ikenna',
    frontImage: '/images/ikenna-session.webp',
    frontLabel: 'Swearfy App',
    backQuote: 'Built "Swearfy" to help Gen Z express clearly.',
    color: '#00D6C2', // soft-turquoise
  },
];

function BuilderCard({ story, index }: { story: BuilderStory; index: number }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2, duration: 0.6 }}
      className="relative w-full h-80 perspective-1000"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <motion.div
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
        className="relative w-full h-full transform-style-preserve-3d cursor-pointer"
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Front of card */}
        <div
          className="absolute inset-0 w-full h-full rounded-2xl shadow-2xl backface-hidden"
          style={{ 
            backfaceVisibility: 'hidden',
            boxShadow: `0 20px 40px rgba(0,0,0,0.1), 0 0 20px ${story.color}40`
          }}
        >
          <div className="relative w-full h-full rounded-2xl overflow-hidden">
            {/* Image placeholder - will be replaced with actual images */}
            <div 
              className="w-full h-2/3 bg-gradient-to-br from-cloud-white to-gray-100 flex items-center justify-center"
              style={{ background: `linear-gradient(135deg, ${story.color}20, ${story.color}10)` }}
            >
              <div className="text-center space-y-2">
                <div className="w-20 h-20 mx-auto rounded-full bg-white/80 flex items-center justify-center">
                  <span className="text-2xl font-bold" style={{ color: story.color }}>
                    {story.name.charAt(0)}
                  </span>
                </div>
                <p className="text-sm text-deep-charcoal/60">Photo placeholder</p>
              </div>
            </div>
            
            {/* Front label */}
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-white to-transparent">
              <div className="glass rounded-lg p-4 text-center">
                <h3 className="font-semibold text-deep-charcoal font-heading">
                  {story.name}
                </h3>
                <p className="text-sm mt-1" style={{ color: story.color }}>
                  {story.frontLabel}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Back of card */}
        <div
          className="absolute inset-0 w-full h-full rounded-2xl shadow-2xl backface-hidden"
          style={{ 
            transform: 'rotateY(180deg)',
            backfaceVisibility: 'hidden',
            background: `linear-gradient(135deg, ${story.color}15, ${story.color}05)`,
            boxShadow: `0 20px 40px rgba(0,0,0,0.1), 0 0 20px ${story.color}40`
          }}
        >
          <div className="flex items-center justify-center h-full p-8">
            <div className="text-center space-y-4">
              <div 
                className="w-16 h-16 mx-auto rounded-full flex items-center justify-center text-white font-bold text-xl"
                style={{ backgroundColor: story.color }}
              >
                {story.name.charAt(0)}
              </div>
              <blockquote className="text-deep-charcoal leading-relaxed font-medium">
                &ldquo;{story.backQuote}&rdquo;
              </blockquote>
              <p className="text-sm text-deep-charcoal/60">— {story.name}</p>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function BuilderStoriesSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-cloud-white to-bright-blue/5">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-deep-charcoal mb-6">
            Real Builder{' '}
            <span className="bg-gradient-to-r from-bright-blue to-soft-turquoise bg-clip-text text-transparent">
              Stories
            </span>
          </h2>
          <p className="text-xl text-deep-charcoal/80 max-w-2xl mx-auto">
            Meet the young entrepreneurs who turned their ideas into reality
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {stories.map((story, index) => (
            <BuilderCard key={story.id} story={story} index={index} />
          ))}
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-lg text-deep-charcoal/70 mb-6">
            Your kid could be next. Ready to start their journey?
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-electric-yellow hover:bg-electric-yellow/90 text-deep-charcoal px-8 py-4 rounded-lg font-semibold text-lg transition-colors neon-glow-yellow"
          >
            Join the Next Cohort
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
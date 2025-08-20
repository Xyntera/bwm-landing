'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Search, Users, Hammer, Presentation } from 'lucide-react';

interface JourneyStep {
  id: number;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
  color: string;
}

const journeySteps: JourneyStep[] = [
  {
    id: 1,
    title: 'Spot a Real Problem',
    description: 'Discover genuine issues in your community and learn to think like an entrepreneur.',
    icon: Search,
    color: '#FFE600', // electric-yellow
  },
  {
    id: 2,
    title: 'Validate with Real People',
    description: 'Talk to potential customers and validate your ideas through real conversations.',
    icon: Users,
    color: '#3083FF', // bright-blue
  },
  {
    id: 3,
    title: 'Build a Prototype (MVP)',
    description: 'Create your minimum viable product and bring your solution to life.',
    icon: Hammer,
    color: '#00D6C2', // soft-turquoise
  },
  {
    id: 4,
    title: 'Pitch to Entrepreneurs',
    description: 'Present your startup to real entrepreneurs and get valuable feedback.',
    icon: Presentation,
    color: '#FFE600', // electric-yellow
  },
];

function StepCard({ step, index }: { step: JourneyStep; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay: index * 0.2, duration: 0.6 }}
      className="relative"
    >
      <div className="glass rounded-2xl p-8 bg-white/60 backdrop-blur-sm border border-white/30 hover:bg-white/80 transition-all duration-300">
        <div className="flex items-start space-x-6">
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ delay: index * 0.2 + 0.3, duration: 0.4 }}
            className="flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center"
            style={{ 
              backgroundColor: `${step.color}20`,
              border: `2px solid ${step.color}`
            }}
          >
            <step.icon 
              className="w-8 h-8" 
              style={{ color: step.color }}
            />
          </motion.div>
          
          <div className="flex-1 space-y-3">
            <div className="flex items-center space-x-3">
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ delay: index * 0.2 + 0.4, duration: 0.3 }}
                className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm"
                style={{ backgroundColor: step.color }}
              >
                {step.id}
              </motion.div>
              <h3 className="text-xl font-bold font-heading text-deep-charcoal">
                {step.title}
              </h3>
            </div>
            <p className="text-deep-charcoal/80 leading-relaxed">
              {step.description}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function ConnectorLine({ index, isVisible }: { index: number; isVisible: boolean }) {
  return (
    <motion.div
      initial={{ scaleY: 0 }}
      animate={isVisible ? { scaleY: 1 } : {}}
      transition={{ delay: index * 0.2 + 0.5, duration: 0.6 }}
      className="absolute left-1/2 transform -translate-x-1/2 w-px h-16 bg-gradient-to-b from-bright-blue to-soft-turquoise origin-top"
    />
  );
}

export function ProgramJourneySection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-200px' });

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-b from-bright-blue/5 to-soft-turquoise/10 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-10 w-32 h-32 rounded-full bg-electric-yellow/20 blur-3xl"></div>
        <div className="absolute bottom-1/4 right-10 w-40 h-40 rounded-full bg-soft-turquoise/20 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-deep-charcoal mb-6">
            Your{' '}
            <span className="bg-gradient-to-r from-bright-blue to-soft-turquoise bg-clip-text text-transparent">
              Journey
            </span>{' '}
            to Success
          </h2>
          <p className="text-xl text-deep-charcoal/80 max-w-2xl mx-auto">
            A step-by-step path from idea to pitching real entrepreneurs
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8 relative">
          {journeySteps.map((step, index) => (
            <div key={step.id} className="relative">
              <StepCard step={step} index={index} />
              {index < journeySteps.length - 1 && (
                <ConnectorLine index={index} isVisible={isInView} />
              )}
            </div>
          ))}
        </div>

        {/* Journey completion CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="text-center mt-16"
        >
          <div className="glass rounded-2xl p-8 bg-white/40 backdrop-blur-sm border border-white/30 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold font-heading text-deep-charcoal mb-4">
              Ready to Begin the Journey?
            </h3>
            <p className="text-deep-charcoal/80 mb-6">
              Join hundreds of young entrepreneurs who&apos;ve already started building their dreams.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-bright-blue to-soft-turquoise text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 neon-glow"
            >
              Start Your Startup Journey
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
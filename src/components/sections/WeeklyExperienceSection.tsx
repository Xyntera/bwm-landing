'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Video, MessageCircle, Users, Target, Clock, Zap } from 'lucide-react';

interface ExperienceCard {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
  duration: string;
  frequency: string;
  color: string;
  details: string[];
}

const experiences: ExperienceCard[] = [
  {
    id: 'live-sessions',
    title: '1.5-hr Live Power Sessions',
    description: 'Interactive workshops with mentors and fellow builders',
    icon: Video,
    duration: '1.5 hours',
    frequency: 'Weekly',
    color: '#3083FF',
    details: [
      'Real-time problem solving',
      'Peer collaboration',
      'Expert mentor guidance',
      'Interactive workshops'
    ]
  },
  {
    id: 'whatsapp-buzz',
    title: 'Daily WhatsApp Buzz',
    description: 'Stay connected with your cohort and get daily motivation',
    icon: MessageCircle,
    duration: '10-15 mins',
    frequency: 'Daily',
    color: '#00D6C2',
    details: [
      'Daily challenges',
      'Peer support',
      'Quick wins sharing',
      'Motivation boost'
    ]
  },
  {
    id: 'mentorship',
    title: '1:1 Mentorship',
    description: 'Personal guidance from experienced entrepreneurs',
    icon: Users,
    duration: '30 mins',
    frequency: 'Bi-weekly',
    color: '#FFE600',
    details: [
      'Personalized advice',
      'Goal setting',
      'Problem solving',
      'Career guidance'
    ]
  },
  {
    id: 'real-missions',
    title: 'Real Missions (No Homework)',
    description: 'Practical challenges that build real-world skills',
    icon: Target,
    duration: 'Self-paced',
    frequency: 'Weekly',
    color: '#3083FF',
    details: [
      'Hands-on projects',
      'Real customer interviews',
      'Prototype building',
      'Market validation'
    ]
  }
];

function ExperiencePanel({ experience, isActive, onClick }: { 
  experience: ExperienceCard; 
  isActive: boolean; 
  onClick: () => void; 
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      onClick={onClick}
      className={`cursor-pointer transition-all duration-300 ${
        isActive 
          ? 'glass bg-white/80 border-2 neon-glow' 
          : 'glass bg-white/40 border border-white/30 hover:bg-white/60'
      } rounded-2xl p-6`}
      style={{ 
        borderColor: isActive ? experience.color : undefined,
        boxShadow: isActive ? `0 0 20px ${experience.color}40` : undefined
      }}
    >
      <div className="flex items-start space-x-4">
        <motion.div
          animate={{ 
            backgroundColor: isActive ? experience.color : `${experience.color}40`,
            scale: isActive ? 1.1 : 1
          }}
          className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center"
        >
          <experience.icon 
            className="w-6 h-6" 
            style={{ color: isActive ? 'white' : experience.color }}
          />
        </motion.div>
        
        <div className="flex-1 min-w-0">
          <h3 className="font-bold font-heading text-deep-charcoal mb-1">
            {experience.title}
          </h3>
          <p className="text-sm text-deep-charcoal/70 mb-3">
            {experience.description}
          </p>
          
          <div className="flex items-center space-x-4 text-xs text-deep-charcoal/60">
            <div className="flex items-center space-x-1">
              <Clock className="w-3 h-3" />
              <span>{experience.duration}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Zap className="w-3 h-3" />
              <span>{experience.frequency}</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function ExperienceDetails({ experience }: { experience: ExperienceCard }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="glass bg-white/60 rounded-2xl p-8 border border-white/30"
    >
      <div className="flex items-center space-x-4 mb-6">
        <div 
          className="w-16 h-16 rounded-2xl flex items-center justify-center"
          style={{ backgroundColor: `${experience.color}20`, border: `2px solid ${experience.color}` }}
        >
          <experience.icon 
            className="w-8 h-8" 
            style={{ color: experience.color }}
          />
        </div>
        <div>
          <h3 className="text-2xl font-bold font-heading text-deep-charcoal">
            {experience.title}
          </h3>
          <p className="text-deep-charcoal/70">
            {experience.description}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {experience.details.map((detail, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex items-center space-x-3 p-3 rounded-lg bg-white/40"
          >
            <div 
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: experience.color }}
            />
            <span className="text-deep-charcoal/80">{detail}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export function WeeklyExperienceSection() {
  const [activeExperience, setActiveExperience] = useState(experiences[0]);

  return (
    <section className="py-20 bg-gradient-to-b from-soft-turquoise/10 to-cloud-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/3 left-20 w-20 h-20 rounded-full bg-bright-blue blur-2xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-20 w-24 h-24 rounded-full bg-electric-yellow blur-2xl animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-deep-charcoal mb-6">
            Weekly{' '}
            <span className="bg-gradient-to-r from-soft-turquoise to-bright-blue bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <p className="text-xl text-deep-charcoal/80 max-w-2xl mx-auto">
            Immersive learning through live sessions, mentorship, and real missions
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Experience panels */}
            <div className="lg:col-span-2 space-y-4">
              <h3 className="text-xl font-semibold font-heading text-deep-charcoal mb-4">
                Mission Dashboard
              </h3>
              <div className="space-y-4">
                {experiences.map((experience) => (
                  <ExperiencePanel
                    key={experience.id}
                    experience={experience}
                    isActive={activeExperience.id === experience.id}
                    onClick={() => setActiveExperience(experience)}
                  />
                ))}
              </div>
            </div>

            {/* Active experience details */}
            <div className="lg:col-span-1">
              <h3 className="text-xl font-semibold font-heading text-deep-charcoal mb-4">
                Details
              </h3>
              <AnimatePresence mode="wait">
                <ExperienceDetails key={activeExperience.id} experience={activeExperience} />
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-center mt-16"
        >
          <div className="glass rounded-2xl p-8 bg-white/40 backdrop-blur-sm border border-white/30 max-w-xl mx-auto">
            <p className="text-lg text-deep-charcoal/80 mb-6">
              Experience the perfect blend of structure and flexibility
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-soft-turquoise hover:bg-soft-turquoise/90 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors neon-glow-turquoise"
            >
              See Full Curriculum
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
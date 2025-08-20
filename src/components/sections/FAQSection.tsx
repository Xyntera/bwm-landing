'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: 'program' | 'age' | 'support' | 'outcome';
}

const faqs: FAQ[] = [
  {
    id: 'age-appropriate',
    question: 'Is this really appropriate for kids aged 9-14?',
    answer: 'Absolutely! Our curriculum is specifically designed for this age group. We use age-appropriate language, gamified learning, and hands-on activities. Kids work on real problems they can understand and relate to, building confidence step by step.',
    category: 'age'
  },
  {
    id: 'no-experience',
    question: 'My child has no business experience. Will they be able to keep up?',
    answer: 'Perfect! We start from the very beginning. No prior experience needed. Our mentors guide every step, and the peer learning environment helps kids learn from each other. Many of our most successful builders started with zero experience.',
    category: 'program'
  },
  {
    id: 'time-commitment',
    question: 'How much time does the program require?',
    answer: 'Just 1.5 hours per week for live sessions, plus self-paced missions that kids actually enjoy doing. No traditional homework! The daily WhatsApp check-ins take just 5-10 minutes. It&apos;s designed to fit into busy family schedules.',
    category: 'program'
  },
  {
    id: 'what-they-build',
    question: 'What kind of things will my child actually build?',
    answer: 'Real products and services! Previous builders have created eco-friendly puppets, online courses, apps, tutoring services, and more. They start with problems they care about and build solutions that real people want to buy.',
    category: 'outcome'
  },
  {
    id: 'parent-involvement',
    question: 'Do I need to be involved as a parent?',
    answer: 'Minimal involvement required! We send weekly updates so you know what&apos;s happening. Some parents love to be part of the journey, while others prefer to just watch their kid grow. Both approaches work great.',
    category: 'support'
  },
  {
    id: 'online-safety',
    question: 'How do you ensure online safety for the kids?',
    answer: 'Safety is our top priority. All sessions are monitored by trained mentors. We use secure, kid-safe platforms. Parents receive full transparency into all activities. Our mentors are background-checked and trained in child safety.',
    category: 'support'
  },
  {
    id: 'shy-kids',
    question: 'My child is quite shy. Will this program work for them?',
    answer: 'Many of our most successful builders started shy! We create a supportive environment where kids can participate at their comfort level. Small groups, patient mentors, and gradual confidence-building activities help shy kids flourish.',
    category: 'age'
  },
  {
    id: 'cost-worth',
    question: 'Is this worth the investment?',
    answer: 'Parents consistently tell us this is the best investment they&apos;ve made in their child&apos;s future. Kids gain confidence, problem-solving skills, and an entrepreneurial mindset that benefits them far beyond the program. Plus, many kids actually make money from their projects!',
    category: 'outcome'
  }
];

const categoryColors = {
  program: '#3083FF',
  age: '#FFE600',
  support: '#00D6C2',
  outcome: '#3083FF'
};

function FAQItem({ faq, index }: { faq: FAQ; index: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.4 }}
      className="glass rounded-2xl bg-white/60 backdrop-blur-sm border border-white/30 overflow-hidden"
    >
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-6 text-left transition-all duration-200 hover:bg-white/20 focus:outline-none focus:bg-white/20"
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-start space-x-4 flex-1">
            <div 
              className="w-3 h-3 rounded-full mt-2 flex-shrink-0"
              style={{ backgroundColor: categoryColors[faq.category] }}
            />
            <h3 className="text-lg font-semibold font-heading text-deep-charcoal pr-4">
              {faq.question}
            </h3>
          </div>
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.2 }}
            className="flex-shrink-0"
          >
            {isOpen ? (
              <Minus className="w-5 h-5 text-deep-charcoal/60" />
            ) : (
              <Plus className="w-5 h-5 text-deep-charcoal/60" />
            )}
          </motion.div>
        </div>
      </motion.button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6">
              <div className="pl-7 pr-4">
                <motion.p
                  initial={{ y: -10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -10, opacity: 0 }}
                  transition={{ delay: 0.1, duration: 0.2 }}
                  className="text-deep-charcoal/80 leading-relaxed"
                >
                  {faq.answer}
                </motion.p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function FAQSection() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  
  const filteredFAQs = selectedCategory 
    ? faqs.filter(faq => faq.category === selectedCategory)
    : faqs;

  const categories = [
    { id: 'program', label: 'Program Details', color: categoryColors.program },
    { id: 'age', label: 'Age & Readiness', color: categoryColors.age },
    { id: 'support', label: 'Support & Safety', color: categoryColors.support },
    { id: 'outcome', label: 'Results & Value', color: categoryColors.outcome },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-electric-yellow/5 to-soft-turquoise/10 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 right-20 w-24 h-24 rounded-full bg-bright-blue blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-20 w-20 h-20 rounded-full bg-electric-yellow blur-2xl animate-pulse" style={{animationDelay: '1.5s'}}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-deep-charcoal mb-6">
            Frequently Asked{' '}
            <span className="bg-gradient-to-r from-bright-blue to-soft-turquoise bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <p className="text-xl text-deep-charcoal/80 max-w-2xl mx-auto mb-8">
            Get answers to common questions about the Build With Myversity program
          </p>

          {/* Category filters */}
          <div className="flex flex-wrap justify-center gap-3">
            <motion.button
              onClick={() => setSelectedCategory(null)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-200 ${
                selectedCategory === null 
                  ? 'bg-deep-charcoal text-white' 
                  : 'bg-white/60 text-deep-charcoal hover:bg-white/80'
              }`}
            >
              All Questions
            </motion.button>
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-200 ${
                  selectedCategory === category.id 
                    ? 'text-white' 
                    : 'bg-white/60 text-deep-charcoal hover:bg-white/80'
                }`}
                style={{
                  backgroundColor: selectedCategory === category.id ? category.color : undefined
                }}
              >
                {category.label}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* FAQ items */}
        <div className="max-w-4xl mx-auto space-y-4">
          <AnimatePresence mode="wait">
            {filteredFAQs.map((faq, index) => (
              <FAQItem key={faq.id} faq={faq} index={index} />
            ))}
          </AnimatePresence>
        </div>

        {/* Still have questions CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-center mt-16"
        >
          <div className="glass rounded-2xl p-8 bg-white/40 backdrop-blur-sm border border-white/30 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold font-heading text-deep-charcoal mb-4">
              Still Have Questions?
            </h3>
            <p className="text-deep-charcoal/80 mb-6">
              Chat with our team to get personalized answers about your child&apos;s journey
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-bright-blue hover:bg-bright-blue/90 text-white px-6 py-3 rounded-lg font-semibold transition-colors neon-glow"
              >
                Schedule a Call
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-soft-turquoise hover:bg-soft-turquoise/90 text-white px-6 py-3 rounded-lg font-semibold transition-colors neon-glow-turquoise"
              >
                WhatsApp Us
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
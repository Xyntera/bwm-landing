'use client';

import { motion } from 'framer-motion';
import { Users, Calendar, Video, Star, MessageCircle } from 'lucide-react';

export function HUDCard() {
  const stats = [
    { label: 'Active Cohorts', value: '4', icon: Users },
    { label: 'Next Batch', value: 'Feb 15', icon: Calendar },
  ];

  const features = [
    { label: 'Live Sessions', icon: Video },
    { label: '1:1 Mentors', icon: Star },
    { label: 'Parent Reviews', icon: MessageCircle },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.6 }}
      className="glass rounded-2xl p-6 space-y-6 bg-white/10 backdrop-blur-md border border-white/20"
    >
      {/* Header */}
      <div className="text-center space-y-2">
        <h3 className="text-xl font-semibold font-heading text-deep-charcoal">
          Program Status
        </h3>
        <div className="h-px bg-gradient-to-r from-transparent via-bright-blue to-transparent opacity-50"></div>
      </div>

      {/* Stats */}
      <div className="space-y-4">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7 + index * 0.1 }}
            className="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-white/10"
          >
            <div className="flex items-center space-x-3">
              <div className="p-2 rounded-lg bg-bright-blue/20">
                <stat.icon className="w-4 h-4 text-bright-blue" />
              </div>
              <span className="text-sm text-deep-charcoal/80">{stat.label}</span>
            </div>
            <span className="font-semibold text-deep-charcoal">{stat.value}</span>
          </motion.div>
        ))}
      </div>

      {/* Features Grid */}
      <div className="space-y-3">
        <h4 className="text-sm font-medium text-deep-charcoal/60 uppercase tracking-wide">
          What&apos;s Included
        </h4>
        <div className="grid grid-cols-1 gap-2">
          {features.map((feature, index) => (
            <motion.div
              key={feature.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.9 + index * 0.1 }}
              className="flex items-center space-x-3 p-2 rounded-lg hover:bg-white/5 transition-colors"
            >
              <div className="p-1.5 rounded-md bg-soft-turquoise/20">
                <feature.icon className="w-3.5 h-3.5 text-soft-turquoise" />
              </div>
              <span className="text-sm text-deep-charcoal/80">{feature.label}</span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Pulse indicator */}
      <div className="flex items-center justify-center space-x-2 pt-2">
        <div className="w-2 h-2 bg-electric-yellow rounded-full animate-pulse"></div>
        <span className="text-xs text-deep-charcoal/60">Live Program Running</span>
      </div>
    </motion.div>
  );
}
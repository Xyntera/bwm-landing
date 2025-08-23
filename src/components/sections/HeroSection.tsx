'use client';

import { Suspense } from 'react';
import { Button } from '@/components/ui/Button';
import { HUDCard } from '@/components/ui/HUDCard';
import Scene3D from '@/components/ui/Scene3D';

export function HeroSection() {
  return (
    <section className="min-h-screen relative overflow-hidden bg-gradient-to-br from-cloud-white via-bright-blue/5 to-soft-turquoise/10">
      {/* Background particles */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-electric-yellow rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-soft-turquoise rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-bright-blue rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="container mx-auto px-4 py-8 min-h-screen grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Column - Copy & CTAs */}
        <div className="lg:col-span-5 space-y-8 z-10">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold font-heading text-deep-charcoal leading-tight">
              <span className="bg-gradient-to-r from-bright-blue to-soft-turquoise bg-clip-text text-transparent">
                Startup?
              </span>
              <br />
              <span className="text-deep-charcoal">At This Age?</span>
              <br />
              <span className="text-electric-yellow">Absolutely.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-deep-charcoal/80 leading-relaxed max-w-2xl">
              The First Startup Experience for Kids (9–14) — an 8-week journey to spot problems, 
              build MVPs, and pitch to real entrepreneurs.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="primary" size="lg" className="neon-glow">
              See How It Works
            </Button>
            <Button variant="accent" size="lg" className="neon-glow-yellow">
              Claim a Builder Pass
            </Button>
            <Button variant="secondary" size="lg">
              Talk to a Mentor
            </Button>
          </div>
        </div>

        {/* Center Column - 3D Scene */}
        <div className="lg:col-span-4 h-96 lg:h-[600px] relative">
          <Suspense fallback={
            <div className="w-full h-full bg-gradient-to-br from-bright-blue/20 to-soft-turquoise/20 rounded-xl flex items-center justify-center">
              <div className="animate-pulse text-bright-blue">Loading 3D Experience...</div>
            </div>
          }>
            <Scene3D />
          </Suspense>
        </div>

        {/* Right Column - HUD Card */}
        <div className="lg:col-span-3">
          <HUDCard />
        </div>
      </div>
    </section>
  );
}
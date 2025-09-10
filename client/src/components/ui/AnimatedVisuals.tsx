import React from 'react';

// Custom animated visual components for the homepage
export const AnimatedVisuals = {
  // Mining & Environmental Hero Visual
  MiningHero: () => (
    <div className="relative w-full h-96 overflow-hidden rounded-lg">
      <div className="absolute inset-0 bg-gradient-to-br from-[#1E5631] via-[#30B4F2] to-[#1E5631] animate-pulse"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
      
      {/* Animated geometric shapes */}
      <div className="absolute top-4 right-4 w-16 h-16 bg-white/20 rounded-full animate-bounce"></div>
      <div className="absolute bottom-8 left-8 w-12 h-12 bg-[#30B4F2]/30 rounded-lg rotate-45 animate-spin"></div>
      <div className="absolute top-1/2 left-1/4 w-8 h-8 bg-white/10 rounded-full animate-ping"></div>
      
      {/* Content overlay */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white">
          <div className="w-20 h-20 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center animate-pulse">
            <i className="fas fa-industry text-3xl"></i>
          </div>
          <h3 className="text-2xl font-bold mb-2 animate-fade-in">Mining Excellence</h3>
          <p className="text-white/80 animate-slide-up">Sustainable Solutions</p>
        </div>
      </div>
    </div>
  ),

  // Environmental Services Visual
  EnvironmentalHero: () => (
    <div className="relative w-full h-96 overflow-hidden rounded-lg">
      <div className="absolute inset-0 bg-gradient-to-br from-[#30B4F2] via-[#1E5631] to-[#30B4F2] animate-pulse"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
      
      {/* Animated nature elements */}
      <div className="absolute top-6 left-6 w-20 h-20 bg-white/15 rounded-full animate-bounce">
        <div className="w-full h-full flex items-center justify-center">
          <i className="fas fa-leaf text-white text-2xl animate-spin"></i>
        </div>
      </div>
      <div className="absolute bottom-6 right-6 w-16 h-16 bg-[#1E5631]/40 rounded-full animate-pulse"></div>
      <div className="absolute top-1/3 right-1/3 w-6 h-6 bg-white/20 rounded-full animate-ping"></div>
      
      {/* Content overlay */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white">
          <div className="w-20 h-20 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center animate-pulse">
            <i className="fas fa-globe text-3xl"></i>
          </div>
          <h3 className="text-2xl font-bold mb-2 animate-fade-in">Environmental Care</h3>
          <p className="text-white/80 animate-slide-up">Protecting Our Planet</p>
        </div>
      </div>
    </div>
  ),

  // Training & Development Visual
  TrainingHero: () => (
    <div className="relative w-full h-96 overflow-hidden rounded-lg">
      <div className="absolute inset-0 bg-gradient-to-br from-[#1E5631] via-[#30B4F2] to-[#1E5631] animate-pulse"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
      
      {/* Animated learning elements */}
      <div className="absolute top-8 left-8 w-18 h-18 bg-white/20 rounded-full animate-bounce">
        <div className="w-full h-full flex items-center justify-center">
          <i className="fas fa-graduation-cap text-white text-2xl animate-bounce"></i>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 w-14 h-14 bg-[#30B4F2]/30 rounded-lg rotate-12 animate-spin"></div>
      <div className="absolute top-1/4 right-1/4 w-8 h-8 bg-white/15 rounded-full animate-ping"></div>
      
      {/* Content overlay */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white">
          <div className="w-20 h-20 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center animate-pulse">
            <i className="fas fa-users text-3xl"></i>
          </div>
          <h3 className="text-2xl font-bold mb-2 animate-fade-in">Professional Training</h3>
          <p className="text-white/80 animate-slide-up">Expert Development</p>
        </div>
      </div>
    </div>
  ),

  // Safety & Compliance Visual
  SafetyHero: () => (
    <div className="relative w-full h-96 overflow-hidden rounded-lg">
      <div className="absolute inset-0 bg-gradient-to-br from-[#30B4F2] via-[#1E5631] to-[#30B4F2] animate-pulse"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
      
      {/* Animated safety elements */}
      <div className="absolute top-6 right-6 w-16 h-16 bg-white/20 rounded-full animate-bounce">
        <div className="w-full h-full flex items-center justify-center">
          <i className="fas fa-shield-alt text-white text-2xl animate-pulse"></i>
        </div>
      </div>
      <div className="absolute bottom-6 left-6 w-12 h-12 bg-[#1E5631]/40 rounded-lg rotate-45 animate-spin"></div>
      <div className="absolute top-1/2 left-1/3 w-6 h-6 bg-white/20 rounded-full animate-ping"></div>
      
      {/* Content overlay */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white">
          <div className="w-20 h-20 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center animate-pulse">
            <i className="fas fa-hard-hat text-3xl"></i>
          </div>
          <h3 className="text-2xl font-bold mb-2 animate-fade-in">Safety First</h3>
          <p className="text-white/80 animate-slide-up">Workplace Protection</p>
        </div>
      </div>
    </div>
  ),

  // Innovation & Technology Visual
  InnovationHero: () => (
    <div className="relative w-full h-96 overflow-hidden rounded-lg">
      <div className="absolute inset-0 bg-gradient-to-br from-[#1E5631] via-[#30B4F2] to-[#1E5631] animate-pulse"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
      
      {/* Animated tech elements */}
      <div className="absolute top-4 left-4 w-20 h-20 bg-white/15 rounded-full animate-bounce">
        <div className="w-full h-full flex items-center justify-center">
          <i className="fas fa-cogs text-white text-2xl animate-spin"></i>
        </div>
      </div>
      <div className="absolute bottom-4 right-4 w-16 h-16 bg-[#30B4F2]/30 rounded-lg rotate-12 animate-spin"></div>
      <div className="absolute top-1/3 left-1/3 w-8 h-8 bg-white/20 rounded-full animate-ping"></div>
      
      {/* Content overlay */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white">
          <div className="w-20 h-20 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center animate-pulse">
            <i className="fas fa-lightbulb text-3xl"></i>
          </div>
          <h3 className="text-2xl font-bold mb-2 animate-fade-in">Innovation</h3>
          <p className="text-white/80 animate-slide-up">Cutting-Edge Solutions</p>
        </div>
      </div>
    </div>
  )
};

// Animated text components
export const AnimatedText = {
  // Fade in animation for headings
  FadeInHeading: ({ children, className = "" }) => (
    <h2 className={`animate-fade-in ${className}`}>
      {children}
    </h2>
  ),

  // Slide up animation for paragraphs
  SlideUpText: ({ children, className = "" }) => (
    <p className={`animate-slide-up ${className}`}>
      {children}
    </p>
  ),

  // Typewriter effect for special text
  TypewriterText: ({ text, className = "" }) => (
    <span className={`animate-typewriter ${className}`}>
      {text}
    </span>
  ),

  // Floating animation for icons
  FloatingIcon: ({ icon, className = "" }) => (
    <i className={`${icon} animate-float ${className}`}></i>
  )
};

import React, { useState, useEffect, useCallback } from 'react';
import ThreeBackground from './components/ThreeBackground';
import Navbar from './components/Navbar';
import Controls from './components/Controls';
import PresenterNotesModal from './components/PresenterNotesModal';
import SubjectAgendaModal from './components/SubjectAgendaModal';
import { sectionsMeta, presenterNotes } from './data/presentationData';

// Section components
import Section01Hero from './components/sections/Section01Hero';
import Section02Team from './components/sections/Section02Team';
import Section03Problem from './components/sections/Section03Problem';
import Section04Objectives from './components/sections/Section04Objectives';
import Section05TechStack from './components/sections/Section05TechStack';
import Section06Architecture from './components/sections/Section06Architecture';
import Section07Algorithms from './components/sections/Section07Algorithms';
import Section08HybridEngine from './components/sections/Section08HybridEngine';
import Section09LiveDemo from './components/sections/Section09LiveDemo';
import Section10NLPAssistant from './components/sections/Section10NLPAssistant';
import Section11Dataset from './components/sections/Section11Dataset';
import Section12Evaluation from './components/sections/Section12Evaluation';
import Section13Testing from './components/sections/Section13Testing';
import Section14Comparison from './components/sections/Section14Comparison';
import Section15Roadmap from './components/sections/Section15Roadmap';
import Section16Conclusion from './components/sections/Section16Conclusion';

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showNotes, setShowNotes] = useState(false);
  const [showAgenda, setShowAgenda] = useState(false);
  const totalSlides = 16;

  const handleNext = useCallback(() => {
    setCurrentSlide(prev => (prev < totalSlides - 1 ? prev + 1 : prev));
  }, [totalSlides]);

  const handlePrev = useCallback(() => {
    setCurrentSlide(prev => (prev > 0 ? prev - 1 : prev));
  }, []);

  const handleJumpToSlide = useCallback((index) => {
    if (index >= 0 && index < totalSlides) {
      setCurrentSlide(index);
    }
  }, [totalSlides]);

  // Global Keyboard Navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Ignore if focus is in an input or textarea
      if (['INPUT', 'TEXTAREA'].includes(document.activeElement?.tagName)) {
        return;
      }

      if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'PageDown') {
        e.preventDefault();
        handleNext();
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        e.preventDefault();
        handlePrev();
      } else if (e.key === 'Home') {
        e.preventDefault();
        handleJumpToSlide(0);
      } else if (e.key === 'End') {
        e.preventDefault();
        handleJumpToSlide(totalSlides - 1);
      } else if (e.key === 'n' || e.key === 'N') {
        setShowNotes(prev => !prev);
      } else if (e.key === 'o' || e.key === 'O' || e.key === 's' || e.key === 'S') {
        setShowAgenda(prev => !prev);
      } else if (e.key === 'Escape') {
        setShowNotes(false);
        setShowAgenda(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNext, handlePrev, handleJumpToSlide, totalSlides]);

  // Render active section
  const renderSlideContent = () => {
    switch (currentSlide) {
      case 0:
        return <Section01Hero onStart={() => handleJumpToSlide(1)} />;
      case 1:
        return <Section02Team />;
      case 2:
        return <Section03Problem />;
      case 3:
        return <Section04Objectives />;
      case 4:
        return <Section05TechStack />;
      case 5:
        return <Section06Architecture />;
      case 6:
        return <Section07Algorithms />;
      case 7:
        return <Section08HybridEngine />;
      case 8:
        return <Section09LiveDemo />;
      case 9:
        return <Section10NLPAssistant />;
      case 10:
        return <Section11Dataset />;
      case 11:
        return <Section12Evaluation />;
      case 12:
        return <Section13Testing />;
      case 13:
        return <Section14Comparison />;
      case 14:
        return <Section15Roadmap />;
      case 15:
        return <Section16Conclusion />;
      default:
        return <Section01Hero onStart={() => handleJumpToSlide(1)} />;
    }
  };

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-[#050509] text-slate-100 flex flex-col select-none">
      {/* 3D WebGL Three.js Particle & Neural Canvas */}
      <ThreeBackground currentSlide={currentSlide} />

      {/* Futuristic Scanlines overlay */}
      <div className="scanlines"></div>

      {/* Top Navbar */}
      <Navbar
        currentSlide={currentSlide}
        totalSlides={totalSlides}
        onJumpToSlide={handleJumpToSlide}
        onToggleNotes={() => setShowNotes(!showNotes)}
        showNotes={showNotes}
        onToggleAgenda={() => setShowAgenda(!showAgenda)}
        showAgenda={showAgenda}
        sectionsMeta={sectionsMeta}
      />

      {/* Main Presentation Stage (Slide Viewport) */}
      <main className="relative z-10 flex-1 pt-16 pb-16 px-4 md:px-8 flex items-center justify-center overflow-y-auto">
        <div 
          key={currentSlide} 
          className="w-full max-w-7xl animate-fadeIn transition-all duration-500 my-auto"
        >
          {renderSlideContent()}
        </div>
      </main>

      {/* Bottom Controls & Progress Bar */}
      <Controls
        currentSlide={currentSlide}
        totalSlides={totalSlides}
        onPrev={handlePrev}
        onNext={handleNext}
        onJumpToSlide={handleJumpToSlide}
        onToggleNotes={() => setShowNotes(!showNotes)}
      />

      {/* Presenter Defense Notes Modal */}
      <PresenterNotesModal
        isOpen={showNotes}
        onClose={() => setShowNotes(false)}
        currentSlide={currentSlide}
        notes={presenterNotes}
      />

      {/* Subject Outline & Syllabus Agenda Modal */}
      <SubjectAgendaModal
        isOpen={showAgenda}
        onClose={() => setShowAgenda(false)}
        onJumpToSlide={handleJumpToSlide}
        currentSlide={currentSlide}
      />
    </div>
  );
}

'use client';

import { useState, useEffect } from 'react';
import { CheckCircle, TrendingUp, FileText, Wrench, User, ArrowRight } from 'lucide-react';

export default function ApproachSection() {
  const [visibleSteps, setVisibleSteps] = useState<number[]>([]);
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      number: "1",
      icon: TrendingUp,
      title: "Estimation précise du bien",
      description: "Analyse du marché local et évaluation juste pour un positionnement optimal qui attire les vrais acquéreurs.",
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=400&h=200&fit=crop&auto=format&q=80",
      color: "#7384bc",
      benefits: ["Analyse marché", "Prix optimal", "Acquéreurs qualifiés"]
    },
    {
      number: "2",
      icon: FileText,
      title: "Diagnostics pris en charge",
      description: "Constitution complète du dossier technique obligatoire pour une transparence totale et un processus accéléré.",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&h=200&fit=crop&auto=format&q=80",
      color: "#fd733f",
      benefits: ["Conformité légale", "Transparence", "Gain de temps"]
    },
    {
      number: "3",
      icon: Wrench,
      title: "Anticipation des travaux",
      description: "Estimation précise des travaux nécessaires pour rassurer les acheteurs et éviter les négociations de dernière minute.",
      image: "https://images.unsplash.com/photo-1585128792020-803d29415281?w=400&h=200&fit=crop&auto=format&q=80",
      color: "#10b981",
      benefits: ["Estimation précise", "Acheteurs rassurés", "Négociations fluides"]
    },
    {
      number: "4",
      icon: User,
      title: "Expertise double unique",
      description: "Un seul interlocuteur avec double compétence immobilier + travaux pour des estimations fiables et rassurantes.",
      image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=400&h=200&fit=crop&auto=format&q=80",
      color: "#8b5cf6",
      benefits: ["Double expertise", "Contact unique", "Estimations fiables"]
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleSteps(prev => [...prev, index]);
          }
        });
      },
      { threshold: 0.3 }
    );

    const stepElements = document.querySelectorAll('.approach-step');
    stepElements.forEach(step => observer.observe(step));

    return () => observer.disconnect();
  }, []);

  // Auto-rotation des étapes actives
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep(prev => (prev + 1) % steps.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  // Fonction pour scroller vers les garanties
  const scrollToGuarantees = () => {
    const guaranteesSection = document.querySelector('.guarantees-section');
    if (guaranteesSection) {
      guaranteesSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section id="approach" className="bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 py-16 lg:py-24 relative overflow-hidden">
      {/* Éléments décoratifs */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-r from-[#7384bc]/20 to-[#fd733f]/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-gradient-to-r from-green-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* En-tête de section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#7384bc]/10 to-[#fd733f]/10 rounded-full mb-6 border border-[#7384bc]/20">
            <CheckCircle className="w-5 h-5 text-[#7384bc] mr-2" />
            <span className="text-[#7384bc] font-semibold text-sm font-architecture">NOTRE MÉTHODE EXCLUSIVE</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight font-architecture mb-6">
            <span className="text-slate-900">Notre approche </span>
            <span className="bg-gradient-to-r from-[#7384bc] to-[#fd733f] bg-clip-text text-transparent">exclusive</span>
          </h2>
          
          <p className="text-xl text-slate-600 max-w-3xl mx-auto font-architecture">
            4 étapes pour une vente rapide et au meilleur prix
          </p>
        </div>

        {/* Grille 2x2 des étapes */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            const isVisible = visibleSteps.includes(index);
            const isActive = index === activeStep;
            
            return (
              <div
                key={index}
                data-index={index}
                className={`approach-step group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-slate-200/50 overflow-hidden cursor-pointer ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                } ${isActive ? 'ring-2 ring-slate-300 scale-105' : ''}`}
                style={{ transitionDelay: `${index * 200}ms` }}
                onMouseEnter={() => setActiveStep(index)}
              >
                {/* Section Image */}
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Overlay avec gradient plus subtil */}
                  <div 
                    className="absolute inset-0 opacity-20 group-hover:opacity-10 transition-opacity duration-300"
                    style={{ 
                      background: `linear-gradient(to bottom, ${step.color}66, transparent)` 
                    }}
                  ></div>
                  
                  {/* Numéro flottant */}
                  <div className="absolute top-4 left-4">
                    <div 
                      className={`w-12 h-12 rounded-xl flex items-center justify-center shadow-xl font-bold text-white text-lg transition-all duration-300 ${
                        isActive ? 'scale-110' : ''
                      }`}
                      style={{ backgroundColor: step.color }}
                    >
                      {step.number}
                    </div>
                  </div>
                  
                  {/* Icône flottante */}
                  <div className="absolute top-4 right-4">
                    <div className="w-10 h-10 bg-white/95 backdrop-blur-sm rounded-lg flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                      <IconComponent 
                        className="w-5 h-5" 
                        style={{ color: step.color }}
                      />
                    </div>
                  </div>
                </div>

                {/* Section Contenu */}
                <div className="p-6">
                  <h3 
                    className="text-lg font-bold mb-3 group-hover:scale-105 transition-transform duration-300 font-architecture"
                    style={{ color: step.color }}
                  >
                    {step.title}
                  </h3>
                  
                  <p className="text-slate-600 leading-relaxed mb-4 font-architecture text-sm group-hover:text-slate-700 transition-colors duration-300">
                    {step.description}
                  </p>
                  
                  {/* Points clés */}
                  <div className="flex flex-wrap gap-2">
                    {step.benefits.map((benefit, benefitIndex) => (
                      <span
                        key={benefitIndex}
                        className={`px-2 py-1 rounded-full text-xs font-medium transition-all duration-300 ${
                          isActive 
                            ? 'bg-gradient-to-r from-slate-100 to-slate-200 text-slate-700 border border-slate-300' 
                            : 'bg-slate-100 text-slate-600'
                        }`}
                      >
                        {benefit}
                      </span>
                    ))}
                  </div>
                  
                  {/* Barre de progression */}
                  <div className="mt-4 w-full h-1 bg-slate-200 rounded-full overflow-hidden">
                    <div 
                      className="h-full rounded-full transition-all duration-1000"
                      style={{ 
                        background: `linear-gradient(to right, ${step.color}, ${step.color}88)`,
                        width: isVisible ? '100%' : '0%'
                      }}
                    ></div>
                  </div>
                </div>

                {/* Effet de bordure animé */}
                <div 
                  className={`absolute inset-0 rounded-2xl transition-opacity duration-300 pointer-events-none ${
                    isActive ? 'opacity-100' : 'opacity-0'
                  }`}
                  style={{ 
                    boxShadow: `0 0 20px ${step.color}60`
                  }}
                ></div>
              </div>
            );
          })}
        </div>

        {/* Section résultats */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-3xl p-12 shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-[#7384bc]/10 to-[#fd733f]/10"></div>
            
            <div className="relative z-10">
              <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6 font-architecture">
                Le résultat de cette approche ?
              </h3>
              
              <div className="grid md:grid-cols-3 gap-8 mb-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-[#7384bc] mb-2 font-architecture">3x</div>
                  <p className="text-slate-300 font-architecture">Plus rapide</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-[#fd733f] mb-2 font-architecture">+18%</div>
                  <p className="text-slate-300 font-architecture">Plus-value moyenne</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-400 mb-2 font-architecture">99%</div>
                  <p className="text-slate-300 font-architecture">Satisfaction</p>
                </div>
              </div>
              
              {/* Bouton corrigé pour scroller vers les garanties */}
              <button 
                onClick={scrollToGuarantees}
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#7384bc] to-[#fd733f] text-white font-bold rounded-xl transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1 font-architecture"
              >
                <span>Découvrir nos garanties</span>
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
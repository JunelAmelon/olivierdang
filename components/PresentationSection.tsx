'use client';

import { Check } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function PresentationSection() {
  const [typingText, setTypingText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [countersAnimated, setCountersAnimated] = useState(false);
  const [yearsCount, setYearsCount] = useState(0);
  const [clientsCount, setClientsCount] = useState(0);
  const [satisfactionCount, setSatisfactionCount] = useState(0);

  const fullText = "OLIVIER DANG";

  // Animation de typing
  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < fullText.length) {
        setTypingText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
        setTimeout(() => setShowCursor(false), 1500);
      }
    }, 150);

    return () => clearInterval(timer);
  }, []);

  // Animation des compteurs
  const animateCounter = (setter: (value: number) => void, target: number, duration: number) => {
    let start = 0;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setter(target);
        clearInterval(timer);
      } else {
        setter(Math.round(start));
      }
    }, 16);
  };

  // Observer pour déclencher les animations des compteurs
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !countersAnimated) {
          animateCounter(setYearsCount, 10, 1500);
          animateCounter(setClientsCount, 500, 2000);
          animateCounter(setSatisfactionCount, 97, 1500);
          setCountersAnimated(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('stats-section');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, [countersAnimated]);

  return (
    <section className="bg-gradient-to-br from-blue-50 to-purple-50 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* En-tête avec badge */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#7384bc] to-[#fd733f] rounded-full mb-6">
            <span className="text-white font-semibold text-sm font-architecture">✨ VOTRE EXPERT IMMOBILIER</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight font-architecture mb-8">
            <span className="text-slate-900">Rencontrez </span>
            <span className="text-[#7384bc]">{typingText}</span>
            {showCursor && <span className="text-[#fd733f] animate-pulse">|</span>}
            <br />
            <span className="text-slate-900">votre allié immobilier</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image à gauche avec effet */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-[#7384bc] to-[#fd733f] rounded-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
            <img
              src="/65284933f19f4_Group211.png"
              alt="Olivier DANG - Expert Immobilier"
              className="relative w-full h-auto object-contain rounded-3xl transition-transform duration-500 group-hover:scale-105"
            />
            
            {/* Badge flottant animé */}
            <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm px-4 py-3 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-slate-800 font-semibold text-sm font-architecture">Expert certifié</span>
              </div>
            </div>
          </div>

          {/* Contenu texte à droite */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                <p className="text-lg text-slate-600 leading-relaxed font-architecture mb-4">
                  <strong className="text-[#7384bc]">Expert en immobilier et Président d'Aximotravo</strong>
                </p>
                <div className="w-full h-1 bg-gradient-to-r from-[#7384bc] to-[#fd733f] rounded-full mb-4"></div>
                <p className="text-base text-slate-600 italic font-architecture">
                  "Un professionnel reconnu avec une double expertise unique sur le marché"
                </p>
              </div>

              <div className="space-y-4">
                <p className="text-lg text-slate-600 leading-relaxed font-architecture">
                  Avec plus de <strong className="text-[#7384bc]">10 ans d'expérience</strong> dans l'accompagnement des propriétaires, j'ai développé une méthode unique combinant expertise immobilière et maîtrise des travaux pour valoriser votre bien.
                </p>
                <p className="text-lg text-slate-600 leading-relaxed font-architecture">
                  En tant que Président d'Aximotravo, j'ai accompagné plus de <strong className="text-[#fd733f]">500 propriétaires</strong> vers une vente réussie, rapide et au meilleur prix. Ma philosophie : des résultats concrets sans stress ni mauvaises surprises.
                </p>
              </div>
            </div>

            {/* Points forts avec icônes */}
            <div className="space-y-4">
              <div className="flex items-start space-x-4 group hover:transform hover:translate-x-2 transition-all duration-300">
                <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1 group-hover:scale-110 transition-transform">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 font-architecture">Vente rapide garantie</h3>
                  <p className="text-slate-600 font-architecture">
                    Nous vendons <strong className="text-[#7384bc]">3x plus vite</strong> que la moyenne du marché.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4 group hover:transform hover:translate-x-2 transition-all duration-300">
                <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1 group-hover:scale-110 transition-transform">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 font-architecture">Valorisation optimale</h3>
                  <p className="text-slate-600 font-architecture">
                    Notre expertise travaux permet d'augmenter la valeur de votre bien de <strong className="text-[#fd733f]">+15 à +30%</strong>.
                  </p>
                </div>
              </div>
            </div>

            {/* Statistiques animées */}
            <div id="stats-section" className="grid grid-cols-3 gap-6 pt-8 border-t border-slate-200">
              <div className="text-center group">
                <div className="bg-white rounded-2xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <div className="text-3xl lg:text-4xl font-bold text-[#7384bc] mb-2 font-architecture">
                    {yearsCount}+
                  </div>
                  <p className="text-slate-600 font-medium text-sm lg:text-base font-architecture">
                    Années d'expérience
                  </p>
                </div>
              </div>
              <div className="text-center group">
                <div className="bg-white rounded-2xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <div className="text-3xl lg:text-4xl font-bold text-[#fd733f] mb-2 font-architecture">
                    {clientsCount}+
                  </div>
                  <p className="text-slate-600 font-medium text-sm lg:text-base font-architecture">
                    Propriétaires accompagnés
                  </p>
                </div>
              </div>
              <div className="text-center group">
                <div className="bg-white rounded-2xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <div className="text-3xl lg:text-4xl font-bold text-green-500 mb-2 font-architecture">
                    {satisfactionCount}%
                  </div>
                  <p className="text-slate-600 font-medium text-sm lg:text-base font-architecture">
                    Taux de satisfaction
                  </p>
                </div>
              </div>
            </div>

            {/* Bouton CTA amélioré */}
            <div className="pt-6">
              <a
                href="/contact"
                className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#7384bc] to-[#fd733f] text-white font-bold rounded-xl transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1 font-architecture"
              >
                <span>Réserver un appel avec Olivier</span>
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
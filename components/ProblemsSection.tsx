'use client';

import { useState, useEffect } from 'react';
import { Clock, TrendingDown, Users, Wrench, DollarSign, AlertTriangle } from 'lucide-react';

export default function ProblemsSection() {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);

  const problems = [
    {
      icon: Clock,
      title: "Délais interminables",
      description: "Votre bien reste des mois sur le marché sans offre concrète.",
      image: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=400&h=200&fit=crop&auto=format",
      color: "#7384bc",
      bgColor: "from-blue-50 to-indigo-50"
    },
    {
      icon: TrendingDown,
      title: "Prix décevant",
      description: "Des offres systématiquement en-dessous de vos attentes.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=200&fit=crop&auto=format",
      color: "#fd733f",
      bgColor: "from-orange-50 to-red-50"
    },
    {
      icon: Users,
      title: "Visites non qualifiées",
      description: "Temps perdu avec des visiteurs sans projet sérieux.",
      image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=400&h=200&fit=crop&auto=format&q=80",
      color: "#10b981",
      bgColor: "from-green-50 to-emerald-50"
    },
    {
      icon: Wrench,
      title: "Travaux imprévus",
      description: "Diagnostics révélant des coûts qui freinent les acheteurs.",
      image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=400&h=200&fit=crop&auto=format&q=80",
      color: "#8b5cf6",
      bgColor: "from-purple-50 to-violet-50"
    },
    {
      icon: DollarSign,
      title: "Négociations difficiles",
      description: "Acheteurs négociant systématiquement le prix à la baisse.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=200&fit=crop&auto=format",
      color: "#ef4444",
      bgColor: "from-red-50 to-pink-50"
    },
    {
      icon: AlertTriangle,
      title: "Incertitudes juridiques",
      description: "Complexité administrative créant stress et erreurs coûteuses.",
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400&h=200&fit=crop&auto=format",
      color: "#f59e0b",
      bgColor: "from-yellow-50 to-orange-50"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleCards(prev => [...prev, index]);
          }
        });
      },
      { threshold: 0.2 }
    );

    const cards = document.querySelectorAll('.problem-card');
    cards.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-gradient-to-b from-white to-slate-50 py-16 lg:py-24 relative overflow-hidden">
      {/* Éléments décoratifs */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-gradient-to-r from-red-200/30 to-orange-200/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-r from-blue-200/30 to-purple-200/30 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* En-tête de section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-red-500/10 to-orange-500/10 rounded-full mb-6 border border-red-200">
            <AlertTriangle className="w-5 h-5 text-red-500 mr-2" />
            <span className="text-red-700 font-semibold text-sm font-architecture">CE QUE VIVENT LES PROPRIÉTAIRES</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight font-architecture mb-6">
            <span className="text-slate-900">Les </span>
            <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">défis</span>
            <br />
            <span className="text-slate-900">de la vente immobilière</span>
          </h2>
          
          <p className="text-xl text-slate-600 max-w-3xl mx-auto font-architecture">
            Vendre un bien immobilier peut rapidement devenir un parcours du combattant. 
            Découvrez les principales difficultés rencontrées.
          </p>
        </div>

        {/* Grille des problèmes */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {problems.map((problem, index) => {
            const IconComponent = problem.icon;
            const isVisible = visibleCards.includes(index);
            
            return (
              <div
                key={index}
                data-index={index}
                className={`problem-card group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-slate-200/50 overflow-hidden ${
                  isVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8'
                }`}
                style={{
                  transitionDelay: `${index * 150}ms`
                }}
              >
                {/* Section Image (moitié supérieure) */}
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={problem.image}
                    alt={problem.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Overlay avec gradient */}
                  <div 
                    className="absolute inset-0 bg-gradient-to-t opacity-60 group-hover:opacity-40 transition-opacity duration-300"
                    style={{ 
                      background: `linear-gradient(to top, ${problem.color}88, transparent)` 
                    }}
                  ></div>
                  
                  {/* Icône flottante */}
                  <div className="absolute top-4 right-4">
                    <div 
                      className="w-12 h-12 rounded-xl flex items-center justify-center shadow-lg backdrop-blur-sm group-hover:scale-110 transition-transform duration-300"
                      style={{ backgroundColor: `${problem.color}20`, border: `2px solid ${problem.color}40` }}
                    >
                      <IconComponent 
                        className="w-6 h-6" 
                        style={{ color: problem.color }}
                      />
                    </div>
                  </div>
                  
                  {/* Point d'exclamation animé */}
                  <div className="absolute top-4 left-4 w-8 h-8 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center shadow-lg group-hover:animate-pulse">
                    <span className="text-white text-xs font-bold">!</span>
                  </div>
                </div>

                {/* Section Contenu (moitié inférieure) */}
                <div className="p-6 relative">
                  {/* Gradient de fond subtil */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${problem.bgColor} opacity-30 group-hover:opacity-50 transition-opacity duration-300`}></div>
                  
                  <div className="relative z-10">
                    <h3 
                      className="text-xl font-bold mb-3 group-hover:scale-105 transition-transform duration-300 font-architecture"
                      style={{ color: problem.color }}
                    >
                      {problem.title}
                    </h3>
                    
                    <p className="text-slate-600 leading-relaxed font-architecture group-hover:text-slate-700 transition-colors duration-300 text-sm">
                      {problem.description}
                    </p>
                    
                    {/* Barre de progression décorative */}
                    <div className="mt-4 w-full h-1 bg-slate-200 rounded-full overflow-hidden">
                      <div 
                        className="h-full rounded-full transition-all duration-1000 group-hover:w-full"
                        style={{ 
                          background: `linear-gradient(to right, ${problem.color}, ${problem.color}88)`,
                          width: isVisible ? '60%' : '0%'
                        }}
                      ></div>
                    </div>
                  </div>
                </div>

                {/* Effet de bordure animé au hover */}
                <div 
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{ 
                    boxShadow: `0 0 20px ${problem.color}40`
                  }}
                ></div>
              </div>
            );
          })}
        </div>

        {/* Section de transition vers la solution */}
<div className="mt-20 text-center">
  <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-3xl p-12 shadow-2xl relative overflow-hidden">
    {/* Éléments décoratifs */}
    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#7384bc]/10 to-[#fd733f]/10"></div>
    
    <div className="relative z-10">
      <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6 font-architecture">
        Et si tout cela pouvait être évité ?
      </h3>
      <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto font-architecture">
        Avec notre expertise unique <strong className="text-white">immobilier + travaux</strong>,
        nous transformons ces défis en opportunités.
      </p>
      {/* Dans la section de transition vers la solution */}
<div className="flex flex-col sm:flex-row gap-4 justify-center">
  <button
    onClick={() => {
      const approachSection = document.getElementById('approach');
      if (approachSection) {
        approachSection.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    }}
    className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#7384bc] to-[#fd733f] text-white font-bold rounded-xl transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1 font-architecture"
  >
    <span>Découvrir notre solution</span>
    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  </button>
  
  <a 
    href="/contact"
    className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-bold rounded-xl transition-all duration-300 hover:bg-white/20 border border-white/20 font-architecture"
  >
    <Clock className="w-5 h-5 mr-2" />
    Estimation gratuite en 5 min
  </a>
</div>
    </div>
  </div>
</div>
      </div>
    </section>
  );
}
'use client';

import { useState, useEffect } from 'react';
import { Shield, Clock, DollarSign, Phone, CheckCircle, ArrowRight } from 'lucide-react';

export default function GuaranteesSection() {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);

  const guarantees = [
    {
      icon: Phone,
      title: "Disponibilité 7j/7",
      description: "Accès direct à mon numéro personnel pour une réactivité maximale tout au long du processus.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop&auto=format",
      color: "#7384bc",
      commitment: "Réponse sous 2h garantie"
    },
    {
      icon: DollarSign,
      title: "Meilleur prix garanti",
      description: "Si nous ne vendons pas au prix convenu, je révise ma commission à la baisse.",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=250&fit=crop&auto=format",
      color: "#fd733f",
      commitment: "Satisfaction financière prioritaire"
    },
    {
      icon: Clock,
      title: "Délai de 90 jours maximum",
      description: "Vente garantie en 90 jours ou réduction automatique de 15% sur mes honoraires.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop&auto=format",
      color: "#10b981",
      commitment: "Moyenne actuelle : 45 jours"
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

    const cards = document.querySelectorAll('.guarantee-card');
    cards.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="guarantees" className="guarantees-section bg-gradient-to-br from-slate-50 via-purple-50 to-blue-50 py-16 lg:py-24 relative overflow-hidden">
      {/* Éléments décoratifs */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-gradient-to-r from-green-200/30 to-blue-200/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-r from-purple-200/30 to-orange-200/30 rounded-full blur-3xl"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* En-tête de section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-full mb-6 border border-green-200">
            <Shield className="w-5 h-5 text-green-600 mr-2" />
            <span className="text-green-700 font-semibold text-sm font-architecture">NOS ENGAGEMENTS FORTS</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight font-architecture mb-6">
            <span className="text-slate-900">Nos garanties </span>
            <span className="bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent">exclusives</span>
          </h2>
          
          <p className="text-xl text-slate-600 max-w-3xl mx-auto font-architecture">
            Nous nous engageons fermement pour votre tranquillité et votre satisfaction
          </p>
        </div>

        {/* Grille des garanties */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {guarantees.map((guarantee, index) => {
            const IconComponent = guarantee.icon;
            const isVisible = visibleCards.includes(index);
            
            return (
              <div
                key={index}
                data-index={index}
                className={`guarantee-card group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-slate-200/50 overflow-hidden ${
                  isVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8'
                }`}
                style={{
                  transitionDelay: `${index * 200}ms`
                }}
              >
                {/* Section Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={guarantee.image}
                    alt={guarantee.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Overlay avec gradient */}
                  <div 
                    className="absolute inset-0 opacity-60 group-hover:opacity-40 transition-opacity duration-300"
                    style={{ 
                      background: `linear-gradient(to bottom, ${guarantee.color}88, transparent)` 
                    }}
                  ></div>
                  
                  {/* Icône principale */}
                  <div className="absolute top-6 left-6">
                    <div 
                      className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg backdrop-blur-sm group-hover:scale-110 transition-transform duration-300"
                      style={{ backgroundColor: `${guarantee.color}20`, border: `2px solid ${guarantee.color}60` }}
                    >
                      <IconComponent 
                        className="w-8 h-8 text-white drop-shadow-lg" 
                      />
                    </div>
                  </div>
                  
                  {/* Badge de garantie */}
                  <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-sm px-3 py-2 rounded-xl shadow-lg">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-slate-800 font-semibold text-xs font-architecture">Garanti</span>
                    </div>
                  </div>
                  
                  {/* Engagement en bas de l'image */}
                  <div className="absolute bottom-4 left-6 right-6">
                    <div className="bg-white/90 backdrop-blur-sm rounded-lg px-4 py-2 shadow-lg">
                      <p className="text-sm font-semibold text-slate-800 font-architecture">
                        {guarantee.commitment}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Section Contenu */}
                <div className="p-6">
                  <h3 
                    className="text-xl font-bold mb-4 group-hover:scale-105 transition-transform duration-300 font-architecture"
                    style={{ color: guarantee.color }}
                  >
                    {guarantee.title}
                  </h3>
                  
                  <p className="text-slate-600 leading-relaxed font-architecture group-hover:text-slate-700 transition-colors duration-300">
                    {guarantee.description}
                  </p>
                  
                  {/* Indicateur de confiance */}
                  <div className="mt-6 flex items-center space-x-2">
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <div
                          key={i}
                          className="w-2 h-2 rounded-full transition-all duration-300"
                          style={{ 
                            backgroundColor: guarantee.color,
                            opacity: isVisible ? 1 : 0,
                            transitionDelay: `${(index * 200) + (i * 100)}ms`
                          }}
                        ></div>
                      ))}
                    </div>
                    <span className="text-sm text-slate-500 font-architecture">Engagement certifié</span>
                  </div>
                </div>

                {/* Effet de bordure animé */}
                <div 
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{ 
                    boxShadow: `0 0 30px ${guarantee.color}40`
                  }}
                ></div>
              </div>
            );
          })}
        </div>
        {/* Section testimonial de confiance */}
        <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-2xl border border-slate-200 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-200/30 to-blue-200/30 rounded-bl-full"></div>
          
          <div className="grid lg:grid-cols-2 gap-8 items-center relative z-10">
            <div>
              <div className="flex items-center space-x-4 mb-6">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&auto=format"
                  alt="Client satisfait"
                  className="w-16 h-16 rounded-full object-cover shadow-lg"
                />
                <div>
                  <h4 className="font-bold text-slate-900 font-architecture">Jean-Pierre M.</h4>
                  <p className="text-slate-600 font-architecture">Propriétaire à Paris 16e</p>
                  <div className="flex text-yellow-400 text-sm">★★★★★</div>
                </div>
              </div>
              
              <blockquote className="text-lg text-slate-700 italic leading-relaxed font-architecture mb-6">
                "Olivier a tenu toutes ses promesses. Vendu en 38 jours exactement comme annoncé, 
                au prix que nous souhaitions. Ses garanties ne sont pas du marketing, c'est du concret !"
              </blockquote>
              
              <div className="flex items-center space-x-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-500 font-architecture">38</div>
                  <div className="text-sm text-slate-600 font-architecture">Jours de vente</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-500 font-architecture">100%</div>
                  <div className="text-sm text-slate-600 font-architecture">Prix souhaité</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-500 font-architecture">0</div>
                  <div className="text-sm text-slate-600 font-architecture">Stress</div>
                </div>
              </div>
            </div>
            
            <div className="text-center lg:text-right">
              <h3 className="text-2xl font-bold text-slate-900 mb-4 font-architecture">
                Prêt à bénéficier de ces garanties ?
              </h3>
              <p className="text-slate-600 mb-6 font-architecture">
                Rejoignez les 99% de clients satisfaits qui nous font confiance
              </p>
              
              <a 
                href="/contact" 
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-500 to-blue-500 text-white font-bold rounded-xl transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1 font-architecture"
              >
                <Shield className="w-5 h-5 mr-2" />
                <span>Commencer maintenant</span>
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
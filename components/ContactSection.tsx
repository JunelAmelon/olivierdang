'use client';
import { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Clock, TrendingUp, CheckCircle, ArrowRight, Star } from 'lucide-react';

export default function ContactSection() {
  const [animatedStats, setAnimatedStats] = useState({
    satisfaction: 0,
    sales: 0,
    increase: 0
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          const animateStats = () => {
            const duration = 2000;
            const steps = 60;
            const interval = duration / steps;
            let step = 0;
            
            const timer = setInterval(() => {
              step++;
              const progress = step / steps;
              setAnimatedStats({
                satisfaction: Math.round(99 * progress),
                sales: Math.round(65 * progress),
                increase: Math.round(18 * progress)
              });
              
              if (step >= steps) {
                clearInterval(timer);
                setAnimatedStats({
                  satisfaction: 99,
                  sales: 65,
                  increase: 18
                });
              }
            }, interval);
          };
          animateStats();
        }
      },
      { threshold: 0.5 }
    );

    const statsElement = document.querySelector('.contact-stats');
    if (statsElement) observer.observe(statsElement);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-gradient-to-br from-white via-red-50 to-blue-50 py-16 lg:py-24 relative overflow-hidden">
      {/* Éléments décoratifs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-aximotravo-blue/20 to-aximotravo-red/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-aximotravo-yellow/20 to-aximotravo-blue/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="relative bg-gradient-to-br from-white/80 to-red-50/80 backdrop-blur-sm rounded-3xl overflow-hidden shadow-2xl border border-white/50">
          {/* Formes décoratives */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-aximotravo-red to-aximotravo-blue rounded-bl-full opacity-90"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-aximotravo-yellow to-aximotravo-blue rounded-tr-full opacity-60"></div>
          
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center p-8 lg:p-16">
            {/* Contenu texte à gauche */}
            <div className="space-y-8 relative z-10">
              <div className="space-y-6">
                {/* Badge d'accroche */}
                <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-aximotravo-yellow/10 to-aximotravo-blue/10 rounded-full border border-aximotravo-yellow/20">
                  <Star className="w-5 h-5 text-aximotravo-yellow mr-2" />
                  <span className="text-aximotravo-blue font-semibold text-sm font-architecture">DÉMARREZ VOTRE SUCCESS STORY</span>
                </div>
                
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight font-architecture">
                  <span className="text-slate-900">Commencez à obtenir</span>
                  <br />
                  <span className="text-slate-900">des résultats avec notre</span>
                  <br />
                  <span className="bg-gradient-to-r from-aximotravo-red to-aximotravo-blue bg-clip-text text-transparent">expertise immobilière</span>
                </h2>
                
                <p className="text-lg text-slate-600 leading-relaxed font-architecture">
                  Notre méthode unique <strong className="text-aximotravo-blue">immobilier + travaux</strong> a permis à plus de 65 propriétaires
                  de vendre rapidement et d'augmenter la valeur de leur bien de <strong className="text-aximotravo-red">+15 à +30%</strong> en moyenne.
                </p>
              </div>

              {/* Statistiques inline animées */}
              <div className="contact-stats grid grid-cols-3 gap-4 py-6">
                <div className="text-center bg-white/60 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                  <div className="text-2xl font-bold text-aximotravo-blue font-architecture">{animatedStats.satisfaction}%</div>
                  <div className="text-xs text-slate-600 font-architecture">Satisfaction</div>
                </div>
                <div className="text-center bg-white/60 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                  <div className="text-2xl font-bold text-aximotravo-yellow font-architecture">{animatedStats.sales}+</div>
                  <div className="text-xs text-slate-600 font-architecture">Ventes</div>
                </div>
                <div className="text-center bg-white/60 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                  <div className="text-2xl font-bold text-aximotravo-red font-architecture">+{animatedStats.increase}%</div>
                  <div className="text-xs text-slate-600 font-architecture">Plus-value</div>
                </div>
              </div>

              {/* Bouton CTA principal */}
              <div className="pt-4">
                <a
                  href="/contact"
                  className="group inline-flex items-center px-10 py-5 bg-gradient-to-r from-aximotravo-red to-aximotravo-red-dark text-white font-bold rounded-2xl text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-aximotravo-red/25 transform hover:-translate-y-2 font-architecture relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <Phone className="w-6 h-6 mr-3 relative z-10" />
                  <span className="relative z-10">CONTACTEZ-NOUS MAINTENANT !</span>
                  <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform relative z-10" />
                </a>
              </div>

              {/* Points forts améliorés */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6">
                <div className="flex items-center space-x-3 group hover:transform hover:translate-x-2 transition-all duration-300">
                  <div className="w-4 h-4 bg-aximotravo-blue rounded-full animate-pulse"></div>
                  <span className="text-slate-700 font-semibold font-architecture group-hover:text-aximotravo-blue">Estimation gratuite</span>
                </div>
                <div className="flex items-center space-x-3 group hover:transform hover:translate-x-2 transition-all duration-300">
                  <div className="w-4 h-4 bg-aximotravo-red rounded-full animate-pulse delay-200"></div>
                  <span className="text-slate-700 font-semibold font-architecture group-hover:text-aximotravo-red">Vente en 8-15 jours</span>
                </div>
                <div className="flex items-center space-x-3 group hover:transform hover:translate-x-2 transition-all duration-300">
                  <div className="w-4 h-4 bg-aximotravo-yellow rounded-full animate-pulse delay-400"></div>
                  <span className="text-slate-700 font-semibold font-architecture group-hover:text-aximotravo-yellow">+18% de plus-value</span>
                </div>
                <div className="flex items-center space-x-3 group hover:transform hover:translate-x-2 transition-all duration-300">
                  <div className="w-4 h-4 bg-aximotravo-blue rounded-full animate-pulse delay-600"></div>
                  <span className="text-slate-700 font-semibold font-architecture group-hover:text-aximotravo-blue">Accompagnement total</span>
                </div>
              </div>

              {/* Informations de contact rapide */}
              <div className="mt-8 space-y-3">
                <div className="flex items-center space-x-4 text-slate-600">
                  <Phone className="w-5 h-5 text-aximotravo-red" />
                  <span className="font-architecture">01 23 45 67 89</span>
                  <span className="text-sm bg-aximotravo-blue/10 text-aximotravo-blue px-2 py-1 rounded-full font-architecture">7j/7</span>
                </div>
                <div className="flex items-center space-x-4 text-slate-600">
                  <Mail className="w-5 h-5 text-aximotravo-blue" />
                  <span className="font-architecture">contact@olivierdang.fr</span>
                </div>
                <div className="flex items-center space-x-4 text-slate-600">
                  <Clock className="w-5 h-5 text-aximotravo-yellow" />
                  <span className="font-architecture">Réponse sous 2h garantie</span>
                </div>
              </div>
            </div>

            {/* Image à droite avec effets */}
            <div className="relative lg:pl-8 group">
              <div className="relative">
                <img
                  src="/image copy copy.png"
                  alt="Expert immobilier avec tablette"
                  className="w-full h-auto object-cover rounded-2xl shadow-2xl transition-transform duration-500 group-hover:scale-105"
                />
                {/* Overlay subtle au hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-aximotravo-red/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
              </div>
              
              {/* Badge flottant amélioré */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-2xl border border-slate-200 group-hover:scale-110 transition-transform duration-300">
                <div className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <Star className="w-5 h-5 text-aximotravo-yellow mr-1" />
                    <div className="text-3xl font-bold text-aximotravo-blue font-architecture">{animatedStats.satisfaction}%</div>
                  </div>
                  <div className="text-sm text-slate-600 font-architecture">Clients satisfaits</div>
                  <div className="flex justify-center mt-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 text-aximotravo-yellow fill-current" />
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Badge supplémentaire */}
              <div className="absolute top-6 right-6 bg-gradient-to-r from-aximotravo-blue to-aximotravo-red text-white px-4 py-3 rounded-xl shadow-lg font-architecture group-hover:scale-110 transition-transform duration-300">
                <div className="text-center">
                  <div className="text-xl font-bold flex items-center">
                    <CheckCircle className="w-4 h-4 mr-1" />
                    Expert
                  </div>
                  <div className="text-xs opacity-90">Certifié</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
'use client';
import { useState, useEffect } from 'react';
import { Play, ArrowRight, TrendingUp, Clock, Award } from 'lucide-react';
import EstimationPopup from './EstimationPopup';

export default function HeroSection() {
  const [isEstimationOpen, setIsEstimationOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [statsAnimated, setStatsAnimated] = useState(false);
  const [satisfactionCount, setSatisfactionCount] = useState(0);
  const [salesCount, setSalesCount] = useState(0);
  const [experienceCount, setExperienceCount] = useState(0);

  // Contenu des slides avec nouvelle palette
  const slides = [
    {
      title: "VENDEZ VOTRE BIEN IMMOBILIER AU MEILLEUR PRIX EN TEMPS RECORD",
      description: "Découvrez la méthode exclusive qui a permis à plus de 500 propriétaires de vendre à un prix optimal",
      bgImage: "/6398386d532df_heroimage1.png",
      primaryColor: "aximotravo-red"
    },
    {
      title: "MANDAT EXCLUSIF : LA CLÉ POUR UNE VENTE RÉUSSIE",
      description: "Confiez-nous l'exclusivité et bénéficiez de notre expertise complète en immobilier et travaux",
      bgImage: "/image copy copy.png",
      primaryColor: "aximotravo-blue"
    },
    {
      title: "DOUBLE EXPERTISE : IMMOBILIER ET TRAVAUX",
      description: "Notre approche unique vous garantit une valorisation optimale de votre bien",
      bgImage: "/65284933f19f4_Group211.png",
      primaryColor: "aximotravo-yellow"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

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

  useEffect(() => {
    if (!statsAnimated) {
      const timer = setTimeout(() => {
        animateCounter(setSatisfactionCount, 99, 2000);
        animateCounter(setSalesCount, 65, 2500);
        animateCounter(setExperienceCount, 10, 1500);
        setStatsAnimated(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [statsAnimated]);

  return (
    <>
      <section className="relative bg-gradient-to-br from-slate-50 via-red-50 to-blue-50 py-16 lg:py-24 overflow-hidden min-h-screen flex items-center">
        {/* Éléments décoratifs animés avec nouvelle palette */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-aximotravo-red/10 to-aximotravo-blue/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-aximotravo-blue/10 to-aximotravo-yellow/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Contenu texte */}
            <div className="space-y-8 lg:pr-8">
              {/* Badge animé */}
              <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-aximotravo-red to-aximotravo-blue rounded-full shadow-lg animate-bounce">
                <span className="text-white font-semibold text-sm font-architecture">
                  Expert Immobilier Paris
                </span>
              </div>

              {/* Titre principal avec animation */}
              <div className="space-y-6">
                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight font-architecture">
                  <span className="text-slate-900 block animate-fadeInUp">Vendez plus vite,</span>
                  <span className="text-slate-900 block animate-fadeInUp delay-200">au meilleur prix…</span>
                  <span className="bg-gradient-to-r from-aximotravo-red to-aximotravo-blue bg-clip-text text-transparent block animate-fadeInUp delay-400">
                    sans stress.
                  </span>
                </h1>

                {/* Titre dynamique du slide actuel */}
                <div className="p-4 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border-l-4 border-aximotravo-red">
                  <p className="text-lg font-bold text-slate-800 font-architecture">
                    {slides[currentSlide].title}
                  </p>
                </div>

                <p className="text-xl text-slate-600 leading-relaxed max-w-2xl font-architecture animate-fadeInUp delay-600">
                  Grâce à notre <strong className="text-aximotravo-blue">double expertise immobilier + travaux</strong>,
                  nous transformons votre bien en une opportunité irrésistible pour les acheteurs.
                  <br /><br />
                  <span className="text-aximotravo-red font-semibold">
                    Plus de visites inutiles, plus de négociations interminables
                  </span> : nous maximisons la valeur de votre propriété et accélérons sa vente.
                </p>
              </div>

              {/* Boutons CTA améliorés */}
              <div className="flex flex-col sm:flex-row gap-4 animate-fadeInUp delay-800">
                <button
                  onClick={() => setIsEstimationOpen(true)}
                  className="group px-8 py-4 bg-gradient-to-r from-aximotravo-red to-aximotravo-red-dark text-white font-bold rounded-xl transition-all duration-300 hover:shadow-2xl hover:shadow-aximotravo-red/25 transform hover:-translate-y-2 flex items-center justify-center space-x-2 font-architecture relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <TrendingUp className="w-5 h-5 relative z-10" />
                  <span className="relative z-10">Estimer mon bien gratuitement</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
                </button>

                <a
                  href="/contact"
                  className="group flex items-center gap-3 px-6 py-4 text-slate-700 font-semibold hover:text-slate-900 transition-all duration-300 hover:bg-white/60 rounded-xl font-architecture"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-aximotravo-blue-light/20 to-aximotravo-blue/20 rounded-full flex items-center justify-center shadow-md group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                    <Play className="w-5 h-5 text-aximotravo-blue ml-1" />
                  </div>
                  <span>Voir comment ça marche</span>
                </a>
              </div>

              {/* Statistiques animées - SUPPRESSION DU VERT */}
              <div className="grid grid-cols-3 gap-6 pt-8 animate-fadeInUp delay-1000">
                <div className="text-center group">
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-slate-200/50">
                    <div className="flex items-center justify-center mb-2">
                      <div className="w-3 h-3 bg-aximotravo-blue rounded-full mr-2 animate-pulse"></div>
                      <span className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-aximotravo-blue to-aximotravo-blue-dark bg-clip-text text-transparent font-architecture">
                        {satisfactionCount}%
                      </span>
                    </div>
                    <p className="text-slate-600 font-medium text-sm lg:text-base font-architecture">Clients satisfaits</p>
                  </div>
                </div>

                <div className="text-center group">
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-slate-200/50">
                    <div className="flex items-center justify-center mb-2">
                      <div className="w-3 h-3 bg-aximotravo-red rounded-full mr-2 animate-pulse"></div>
                      <span className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-aximotravo-red to-aximotravo-red-dark bg-clip-text text-transparent font-architecture">
                        {salesCount}+
                      </span>
                    </div>
                    <p className="text-slate-600 font-medium text-sm lg:text-base font-architecture">Ventes réussies</p>
                  </div>
                </div>

                <div className="text-center group">
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-slate-200/50">
                    <div className="flex items-center justify-center mb-2">
                      <div className="w-3 h-3 bg-aximotravo-yellow rounded-full mr-2 animate-pulse"></div>
                      <span className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-aximotravo-yellow to-aximotravo-yellow-dark bg-clip-text text-transparent font-architecture">
                        {experienceCount}+
                      </span>
                    </div>
                    <p className="text-slate-600 font-medium text-sm lg:text-base font-architecture">Années d'expertise</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section image avec slider */}
            <div className="relative lg:pl-8">
              <div className="relative h-[500px] lg:h-[650px] rounded-3xl overflow-hidden shadow-2xl">
                {/* Slider d'images */}
                {slides.map((slide, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-all duration-1000 ${
                      index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
                    }`}
                  >
                    <img
                      src={slide.bgImage}
                      alt={`Slide ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                  </div>
                ))}

                {/* Indicateurs de slide */}
                <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {slides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentSlide
                          ? 'bg-white scale-125 shadow-lg'
                          : 'bg-white/50 hover:bg-white/70'
                      }`}
                    />
                  ))}
                </div>

                {/* Badges flottants - SUPPRESSION DU VERT */}
                <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm px-4 py-3 rounded-xl shadow-lg animate-fadeInLeft">
                  <div className="flex items-center space-x-2">
                    <Award className="w-4 h-4 text-aximotravo-blue" />
                    <span className="text-slate-800 font-semibold text-sm font-architecture">Expert certifié</span>
                  </div>
                </div>

                <div className="absolute top-6 right-6 bg-gradient-to-r from-aximotravo-blue to-aximotravo-red text-white px-4 py-3 rounded-xl shadow-lg font-architecture animate-fadeInRight">
                  <div className="text-center">
                    <div className="text-xl font-bold flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      8-15j
                    </div>
                    <div className="text-xs opacity-90">Vente moyenne</div>
                  </div>
                </div>

                <div className="absolute bottom-6 right-6 bg-aximotravo-yellow text-white px-6 py-4 rounded-xl shadow-lg font-architecture animate-pulse">
                  <div className="text-center">
                    <div className="text-2xl font-bold">4.9★</div>
                    <div className="text-xs opacity-90">Satisfaction client</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <EstimationPopup
        isOpen={isEstimationOpen}
        onClose={() => setIsEstimationOpen(false)}
      />

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        .animate-fadeInLeft {
          animation: fadeInLeft 0.8s ease-out forwards;
        }
        .animate-fadeInRight {
          animation: fadeInRight 0.8s ease-out forwards;
        }
        .delay-200 {
          animation-delay: 0.2s;
        }
        .delay-400 {
          animation-delay: 0.4s;
        }
        .delay-600 {
          animation-delay: 0.6s;
        }
        .delay-800 {
          animation-delay: 0.8s;
        }
        .delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </>
  );
}
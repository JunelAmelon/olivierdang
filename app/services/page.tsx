'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import EstimationPopup from '@/components/EstimationPopup';
import { Home, Wrench, TrendingUp, Users, Shield, CheckCircle, ArrowRight, Star, Award, Target, Zap } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Services() {
  const [isEstimationOpen, setIsEstimationOpen] = useState(false);
  const [visibleServices, setVisibleServices] = useState<number[]>([]);

  const services = [
    {
      icon: Home,
      title: "Estimation immobilière gratuite",
      description: "Une évaluation précise et honnête de votre bien basée sur l'analyse du marché local et notre expertise de plus de 10 ans.",
      features: ["Visite gratuite sous 48h", "Rapport détaillé avec photos", "Conseils personnalisés", "Sans engagement"],
      color: "text-[#7384bc]",
      bgColor: "bg-[#7384bc]/10",
      number: "01",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=500&h=300&fit=crop&auto=format&q=80"
    },
    {
      icon: Wrench,
      title: "Valorisation par les travaux",
      description: "Nous identifions les travaux stratégiques qui maximiseront la valeur de votre bien avant la vente pour un ROI optimal.",
      features: ["Audit complet du bien", "Devis travaux inclus", "Coordination artisans", "ROI garanti +15%"],
      color: "text-[#fd733f]",
      bgColor: "bg-[#fd733f]/10",
      number: "02",
      image: "https://images.unsplash.com/photo-1585128792020-803d29415281?w=500&h=300&fit=crop&auto=format&q=80"
    },
    {
      icon: TrendingUp,
      title: "Vente rapide et optimisée",
      description: "Notre méthode éprouvée permet de vendre 3x plus vite que la moyenne du marché grâce à notre stratégie digitale.",
      features: ["Marketing digital avancé", "Home staging professionnel", "Visites qualifiées uniquement", "Négociation experte"],
      color: "text-green-600",
      bgColor: "bg-green-600/10",
      number: "03",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=500&h=300&fit=crop&auto=format&q=80"
    },
    {
      icon: Users,
      title: "Accompagnement complet",
      description: "Un suivi personnalisé de A à Z, de l'estimation jusqu'à la signature chez le notaire avec un interlocuteur unique.",
      features: ["Interlocuteur unique dédié", "Suivi hebdomadaire détaillé", "Gestion administrative complète", "Support 7j/7"],
      color: "text-purple-600",
      bgColor: "bg-purple-600/10",
      number: "04",
      image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=500&h=300&fit=crop&auto=format&q=80"
    }
  ];

  // Animation au scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleServices(prev => [...prev, index]);
          }
        });
      },
      { threshold: 0.3 }
    );

    const serviceElements = document.querySelectorAll('.service-item');
    serviceElements.forEach(service => observer.observe(service));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <main className="min-h-screen">
        <Header />
        
        {/* Hero Section amélioré */}
        <section className="bg-gradient-to-br from-white via-blue-50 to-purple-50 py-16 lg:py-32 relative overflow-hidden">
          {/* Éléments décoratifs */}
          <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-r from-[#7384bc]/20 to-blue-200/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-10 w-80 h-80 bg-gradient-to-r from-[#fd733f]/20 to-purple-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16 lg:mb-20">
              <div className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-[#7384bc]/10 to-blue-50 rounded-full mb-6 sm:mb-8">
                <Star className="w-4 h-4 sm:w-5 sm:h-5 text-[#7384bc] mr-2" />
                <span className="text-sm sm:text-base text-[#7384bc] font-semibold font-architecture">NOS SERVICES D'EXCELLENCE</span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight font-architecture mb-6 sm:mb-8">
                <span className="text-slate-900">Une expertise</span><br />
                <span className="bg-gradient-to-r from-[#7384bc] to-blue-600 bg-clip-text text-transparent">sur-mesure</span><br />
                <span className="text-slate-900">pour votre réussite</span>
              </h1>
              
              <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-4xl mx-auto font-architecture px-4">
                Notre expertise unique <strong className="text-slate-900">immobilier + travaux</strong> vous garantit une vente rapide et au meilleur prix.
                Découvrez nos 4 piliers de réussite qui ont convaincu plus de 65 propriétaires.
              </p>
            </div>
          </div>
        </section>

        {/* Services avec images */}
        <section className="bg-gradient-to-b from-gray-50 to-white py-16 lg:py-32">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-12 lg:space-y-20">
              {services.map((service, index) => {
                const isVisible = visibleServices.includes(index);
                const isEven = index % 2 === 0;
                
                return (
                  <div 
                    key={index} 
                    data-index={index}
                    className={`service-item relative transition-all duration-700 ${
                      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`}
                    style={{ transitionDelay: `${index * 200}ms` }}
                  >
                    <div className={`grid lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
                      isEven ? '' : 'lg:grid-flow-col-dense'
                    }`}>
                      
                      {/* Image */}
                      <div className={`relative group ${isEven ? '' : 'lg:col-start-2'}`}>
                        <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                          <img
                            src={service.image}
                            alt={service.title}
                            className="w-full h-64 lg:h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                          
                          {/* Overlay subtil */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300"></div>
                          
                          {/* Badge numéro */}
                          <div className="absolute top-6 left-6">
                            <div className={`w-16 h-16 bg-white/95 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300`}>
                              <span className={`text-2xl font-bold ${service.color} font-architecture`}>
                                {service.number}
                              </span>
                            </div>
                          </div>
                          
                          {/* Icône flottante */}
                          <div className="absolute top-6 right-6">
                            <div className={`w-14 h-14 ${service.bgColor} backdrop-blur-sm rounded-xl flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300`}>
                              <service.icon className={`w-7 h-7 ${service.color}`} />
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Contenu */}
                      <div className={`space-y-6 lg:space-y-8 ${isEven ? '' : 'lg:col-start-1 lg:row-start-1'}`}>
                        <div className="space-y-4">
                          <h3 className="text-2xl lg:text-4xl font-bold text-slate-900 font-architecture">
                            {service.title}
                          </h3>
                          <p className="text-lg text-slate-600 leading-relaxed font-architecture">
                            {service.description}
                          </p>
                        </div>

                        {/* Features */}
                        <div className="space-y-3">
                          <h4 className="text-xl font-bold text-slate-900 font-architecture mb-4">
                            Ce qui est inclus :
                          </h4>
                          {service.features.map((feature, idx) => (
                            <div 
                              key={idx} 
                              className="flex items-start space-x-3 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 group"
                            >
                              <CheckCircle className={`w-6 h-6 ${service.color} flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform`} />
                              <span className="text-slate-700 font-architecture font-medium">{feature}</span>
                            </div>
                          ))}
                        </div>

                        {/* CTA */}
                        <div className="pt-4">
                          <a 
                            href="/contact" 
                            className={`inline-flex items-center px-6 py-3 bg-gradient-to-r from-slate-900 to-slate-700 text-white rounded-xl hover:from-slate-800 hover:to-slate-600 transition-all duration-300 font-architecture group shadow-lg hover:shadow-xl transform hover:-translate-y-1`}
                          >
                            <span>Découvrir ce service</span>
                            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Processus en 4 étapes - Design moderne */}
        <section className="bg-white py-16 lg:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 lg:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight font-architecture mb-4 lg:mb-6">
                <span className="text-slate-900">Notre processus</span>{' '}
                <span className="bg-gradient-to-r from-[#7384bc] to-blue-600 bg-clip-text text-transparent">éprouvé</span>
              </h2>
              <p className="text-base lg:text-lg text-slate-600 max-w-3xl mx-auto font-architecture">
                Une méthode rodée en 4 étapes pour maximiser vos résultats
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {[
                {
                  step: "1",
                  title: "Estimation & Audit",
                  description: "Évaluation précise de votre bien et identification des opportunités de valorisation.",
                  icon: Target,
                  color: "bg-[#7384bc]"
                },
                {
                  step: "2",
                  title: "Travaux de valorisation",
                  description: "Réalisation des travaux stratégiques pour maximiser l'attractivité et le prix de vente.",
                  icon: Wrench,
                  color: "bg-[#fd733f]"
                },
                {
                  step: "3",
                  title: "Marketing & Vente",
                  description: "Mise en marché optimisée avec home staging, photos pro et campagne digitale ciblée.",
                  icon: Zap,
                  color: "bg-green-500"
                },
                {
                  step: "4",
                  title: "Accompagnement final",
                  description: "Négociation experte et suivi jusqu'à la signature définitive chez le notaire.",
                  icon: Award,
                  color: "bg-purple-500"
                }
              ].map((process, index) => (
                <div key={index} className="relative group">
                  <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 border border-gray-100">
                    <div className={`w-14 h-14 lg:w-16 lg:h-16 ${process.color} rounded-2xl flex items-center justify-center mx-auto mb-4 lg:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <process.icon className="w-7 h-7 lg:w-8 lg:h-8 text-white" />
                    </div>
                    <div className="text-center">
                      <div className="text-xs lg:text-sm font-bold text-slate-400 mb-2 font-architecture">ÉTAPE {process.step}</div>
                      <h3 className="text-lg lg:text-xl font-bold text-slate-900 mb-3 lg:mb-4 font-architecture group-hover:text-[#7384bc] transition-colors">
                        {process.title}
                      </h3>
                      <p className="text-sm lg:text-base text-slate-600 leading-relaxed font-architecture">
                        {process.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Flèche de connexion améliorée */}
                  {index < 3 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                      <div className="w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center">
                        <ArrowRight className="w-5 h-5 text-[#7384bc]" />
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section avec design premium */}
        <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-16 lg:py-32 text-white relative overflow-hidden">
          {/* Formes décoratives */}
          <div className="absolute top-0 right-0 w-64 h-64 lg:w-96 lg:h-96 bg-gradient-to-br from-[#7384bc]/20 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 lg:w-96 lg:h-96 bg-gradient-to-tr from-[#fd733f]/20 to-transparent rounded-full blur-3xl"></div>
          
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight font-architecture mb-6 lg:mb-8">
              Prêt à maximiser la valeur<br />
              <span className="bg-gradient-to-r from-[#7384bc] to-blue-400 bg-clip-text text-transparent">
                de votre bien ?
              </span>
            </h2>
            <p className="text-lg lg:text-xl opacity-90 mb-8 lg:mb-12 max-w-3xl mx-auto font-architecture">
              Rejoignez les 65+ propriétaires qui ont fait confiance à notre expertise unique pour vendre rapidement et au meilleur prix.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 justify-center">
              <button
                onClick={() => setIsEstimationOpen(true)}
                className="group px-8 lg:px-10 py-4 lg:py-5 bg-gradient-to-r from-[#fd733f] to-orange-500 text-white font-bold rounded-2xl transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-1 font-architecture flex items-center justify-center"
              >
                <span>Estimation gratuite</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <a
                href="/contact"
                className="group px-8 lg:px-10 py-4 lg:py-5 bg-white/10 backdrop-blur-sm text-white font-bold rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 font-architecture flex items-center justify-center"
              >
                <span>Nous contacter</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Statistiques en bas */}
            <div className="grid grid-cols-3 gap-4 lg:gap-8 mt-12 lg:mt-16 pt-12 lg:pt-16 border-t border-white/10">
              <div className="hover:scale-105 transition-transform duration-300">
                <div className="text-2xl lg:text-4xl font-bold mb-1 lg:mb-2 font-architecture">99%</div>
                <div className="text-sm lg:text-base text-white/70 font-architecture">Clients satisfaits</div>
              </div>
              <div className="hover:scale-105 transition-transform duration-300">
                <div className="text-2xl lg:text-4xl font-bold mb-1 lg:mb-2 font-architecture">9j</div>
                <div className="text-sm lg:text-base text-white/70 font-architecture">Délai moyen</div>
              </div>
              <div className="hover:scale-105 transition-transform duration-300">
                <div className="text-2xl lg:text-4xl font-bold mb-1 lg:mb-2 font-architecture">+18%</div>
                <div className="text-sm lg:text-base text-white/70 font-architecture">Plus-value moyenne</div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
      
      <EstimationPopup
        isOpen={isEstimationOpen}
        onClose={() => setIsEstimationOpen(false)}
      />
    </>
  );
}
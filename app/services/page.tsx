'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import EstimationPopup from '@/components/EstimationPopup';
import { Home, Wrench, TrendingUp, Users, Shield, CheckCircle, ArrowRight, Star, Award, Target, Zap } from 'lucide-react';
import { useState } from 'react';

export default function Services() {
  const [isEstimationOpen, setIsEstimationOpen] = useState(false);

  const services = [
    {
      icon: Home,
      title: "Estimation immobilière gratuite",
      description: "Une évaluation précise et honnête de votre bien basée sur l'analyse du marché local et notre expertise de plus de 10 ans.",
      features: ["Visite gratuite sous 48h", "Rapport détaillé avec photos", "Conseils personnalisés", "Sans engagement"],
      color: "text-[#7384bc]",
      bgColor: "bg-[#7384bc]/10",
      number: "01"
    },
    {
      icon: Wrench,
      title: "Valorisation par les travaux",
      description: "Nous identifions les travaux stratégiques qui maximiseront la valeur de votre bien avant la vente pour un ROI optimal.",
      features: ["Audit complet du bien", "Devis travaux inclus", "Coordination artisans", "ROI garanti +15%"],
      color: "text-[#fd733f]",
      bgColor: "bg-[#fd733f]/10",
      number: "02"
    },
    {
      icon: TrendingUp,
      title: "Vente rapide et optimisée",
      description: "Notre méthode éprouvée permet de vendre 3x plus vite que la moyenne du marché grâce à notre stratégie digitale.",
      features: ["Marketing digital avancé", "Home staging professionnel", "Visites qualifiées uniquement", "Négociation experte"],
      color: "text-green-600",
      bgColor: "bg-green-600/10",
      number: "03"
    },
    {
      icon: Users,
      title: "Accompagnement complet",
      description: "Un suivi personnalisé de A à Z, de l'estimation jusqu'à la signature chez le notaire avec un interlocuteur unique.",
      features: ["Interlocuteur unique dédié", "Suivi hebdomadaire détaillé", "Gestion administrative complète", "Support 7j/7"],
      color: "text-purple-600",
      bgColor: "bg-purple-600/10",
      number: "04"
    }
  ];

  return (
    <>
      <main className="min-h-screen">
        <Header />
        
        {/* Hero Section */}
        <section className="bg-white py-20 lg:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#7384bc]/10 to-blue-50 rounded-full mb-8">
                <Star className="w-5 h-5 text-[#7384bc] mr-2" />
                <span className="text-[#7384bc] font-semibold font-architecture">Nos services d'excellence</span>
              </div>
              
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight font-architecture mb-8">
                <span className="text-slate-900">Une expertise</span><br />
                <span className="bg-gradient-to-r from-[#7384bc] to-blue-600 bg-clip-text text-transparent">sur-mesure</span><br />
                <span className="text-slate-900">pour votre réussite</span>
              </h1>
              
              <p className="text-xl text-slate-600 leading-relaxed max-w-4xl mx-auto font-architecture">
                Notre expertise unique <strong className="text-slate-900">immobilier + travaux</strong> vous garantit une vente rapide et au meilleur prix. 
                Découvrez nos 4 piliers de réussite qui ont convaincu plus de 230 propriétaires.
              </p>
            </div>
          </div>
        </section>

        {/* Services en timeline verticale */}
        <section className="bg-gray-50 py-20 lg:py-32">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative">
              {/* Ligne verticale */}
              <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-[#7384bc] via-[#fd733f] via-green-500 to-purple-600 rounded-full"></div>
              
              <div className="space-y-20">
                {services.map((service, index) => (
                  <div key={index} className="relative flex items-start">
                    {/* Numéro sur la ligne */}
                    <div className="absolute left-0 w-16 h-16 bg-white rounded-full border-4 border-gray-50 flex items-center justify-center shadow-lg z-10">
                      <span className={`text-2xl font-bold ${service.color} font-architecture`}>
                        {service.number}
                      </span>
                    </div>
                    
                    {/* Contenu */}
                    <div className="ml-24 bg-white rounded-3xl p-8 lg:p-12 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 w-full">
                      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                        <div className="space-y-6">
                          <div className={`w-20 h-20 ${service.bgColor} rounded-2xl flex items-center justify-center mb-6`}>
                            <service.icon className={`w-10 h-10 ${service.color}`} />
                          </div>
                          
                          <h3 className="text-3xl font-bold text-slate-900 font-architecture">
                            {service.title}
                          </h3>
                          
                          <p className="text-lg text-slate-600 leading-relaxed font-architecture">
                            {service.description}
                          </p>
                          
                          <a href="/contact" className={`inline-flex items-center px-6 py-3 bg-gradient-to-r from-slate-900 to-slate-700 text-white rounded-xl hover:from-slate-800 hover:to-slate-600 transition-all duration-300 font-architecture group`}>
                            <span>Découvrir ce service</span>
                            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                          </a>
                        </div>
                        
                        <div className="space-y-4">
                          <h4 className="text-xl font-bold text-slate-900 font-architecture mb-6">
                            Ce qui est inclus :
                          </h4>
                          {service.features.map((feature, idx) => (
                            <div key={idx} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-xl">
                              <CheckCircle className={`w-6 h-6 ${service.color} flex-shrink-0 mt-0.5`} />
                              <span className="text-slate-700 font-architecture font-medium">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Processus en 4 étapes - Design moderne */}
        <section className="bg-white py-20 lg:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold leading-tight font-architecture mb-6">
                <span className="text-slate-900">Notre processus</span>{' '}
                <span className="bg-gradient-to-r from-[#7384bc] to-blue-600 bg-clip-text text-transparent">éprouvé</span>
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto font-architecture">
                Une méthode rodée en 4 étapes pour maximiser vos résultats
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                    <div className={`w-16 h-16 ${process.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <process.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-center">
                      <div className="text-sm font-bold text-slate-400 mb-2 font-architecture">ÉTAPE {process.step}</div>
                      <h3 className="text-xl font-bold text-slate-900 mb-4 font-architecture">
                        {process.title}
                      </h3>
                      <p className="text-slate-600 leading-relaxed font-architecture">
                        {process.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Flèche de connexion */}
                  {index < 3 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                      <ArrowRight className="w-8 h-8 text-slate-300" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section avec design premium */}
        <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20 lg:py-32 text-white relative overflow-hidden">
          {/* Formes décoratives */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#7384bc]/20 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-[#fd733f]/20 to-transparent rounded-full blur-3xl"></div>
          
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight font-architecture mb-8">
              Prêt à maximiser la valeur<br />
              <span className="bg-gradient-to-r from-[#7384bc] to-blue-400 bg-clip-text text-transparent">
                de votre bien ?
              </span>
            </h2>
            <p className="text-xl opacity-90 mb-12 max-w-3xl mx-auto font-architecture">
              Rejoignez les 230+ propriétaires qui ont fait confiance à notre expertise unique pour vendre rapidement et au meilleur prix.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button 
                onClick={() => setIsEstimationOpen(true)}
                className="group px-10 py-5 bg-gradient-to-r from-[#fd733f] to-orange-500 text-white font-bold rounded-2xl transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-1 font-architecture flex items-center justify-center"
              >
                <span>Estimation gratuite</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <a 
                href="/contact"
                className="group px-10 py-5 bg-white/10 backdrop-blur-sm text-white font-bold rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 font-architecture flex items-center justify-center"
              >
                <span>Nous contacter</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
            
            {/* Statistiques en bas */}
            <div className="grid grid-cols-3 gap-8 mt-16 pt-16 border-t border-white/10">
              <div>
                <div className="text-4xl font-bold mb-2 font-architecture">99%</div>
                <div className="text-white/70 font-architecture">Clients satisfaits</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2 font-architecture">9j</div>
                <div className="text-white/70 font-architecture">Délai moyen</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2 font-architecture">+18%</div>
                <div className="text-white/70 font-architecture">Plus-value moyenne</div>
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
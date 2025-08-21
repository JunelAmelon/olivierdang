'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SalesShowcaseSection from '@/components/SalesShowcaseSection';
import { Check, Award, Users, TrendingUp, Shield, Heart } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function APropos() {
  const [animatedStats, setAnimatedStats] = useState({
    sales: 0,
    satisfaction: 0,
    avgDays: 0,
    increase: 0
  });

  // Animation des statistiques
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
                sales: Math.round(65 * progress),
                satisfaction: Math.round(99 * progress),
                avgDays: Math.round(9 * progress),
                increase: Math.round(18 * progress)
              });
              
              if (step >= steps) {
                clearInterval(timer);
                setAnimatedStats({
                  sales: 65,
                  satisfaction: 99,
                  avgDays: 9,
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

    const statsElement = document.querySelector('.stats-numbers');
    if (statsElement) observer.observe(statsElement);

    return () => observer.disconnect();
  }, []);

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center px-4 py-2 bg-blue-50 rounded-full">
                  <span className="text-[#7384bc] font-semibold text-sm font-architecture">✨ Notre histoire</span>
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight font-architecture">
                  <span className="text-slate-900">À propos</span><br />
                  <span className="text-[#7384bc]">d'Olivier DANG</span>
                </h1>
                <p className="text-xl text-slate-600 leading-relaxed font-architecture mb-6">
                  Depuis plus de 10 ans, je transforme l'expérience de vente immobilière grâce à une approche unique alliant expertise immobilière et valorisation des biens.
                  Mon objectif est simple : permettre aux propriétaires de vendre plus vite, au meilleur prix, tout en réduisant le stress lié au processus.
                </p>
                <p className="text-xl text-slate-600 leading-relaxed font-architecture">
                  Contrairement aux méthodes classiques, j'accompagne chaque projet de manière personnalisée, en intégrant des solutions de home staging, de rénovation ciblée et une stratégie marketing sur-mesure.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="/65284933f19f4_Group211.png"
                alt="Olivier DANG - Expert Immobilier"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mon parcours */}
      <section className="bg-gray-50 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold leading-tight font-architecture mb-6">
              <span className="text-slate-900">Mon</span>{' '}
              <span className="text-[#7384bc]">parcours</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto font-architecture">
              Une expertise construite au fil des années pour vous offrir le meilleur service immobilier.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-12 h-12 bg-[#7384bc] rounded-xl flex items-center justify-center mb-6">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4 font-architecture">Formation d'excellence</h3>
              <p className="text-slate-600 font-architecture">
                Diplômé en immobilier et formé aux techniques de valorisation, j'ai acquis une double compétence unique sur le marché.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-12 h-12 bg-[#fd733f] rounded-xl flex items-center justify-center mb-6">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4 font-architecture">10+ années d'expérience</h3>
              <p className="text-slate-600 font-architecture">
                Plus de 65 ventes réussies et des milliers de clients satisfaits. Une expertise reconnue dans la région parisienne.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center mb-6">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4 font-architecture">Innovation constante</h3>
              <p className="text-slate-600 font-architecture">
                Toujours à la pointe des nouvelles techniques de vente et de valorisation pour maximiser vos résultats.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mes valeurs */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h2 className="text-4xl sm:text-5xl font-bold leading-tight font-architecture">
                  <span className="text-slate-900">Mes</span>{' '}
                  <span className="text-[#7384bc]">valeurs</span>
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed font-architecture">
                  Chaque vente est unique, chaque client mérite une attention particulière. Voici les principes qui guident mon travail au quotidien.
                </p>
              </div>
              <div className="space-y-6">
                <div className="flex items-start space-x-4 group hover:transform hover:translate-x-2 transition-all duration-300">
                  <div className="flex-shrink-0 w-6 h-6 bg-[#7384bc] rounded-full flex items-center justify-center mt-1 group-hover:scale-110 transition-transform">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 font-architecture mb-2">Transparence totale</h3>
                    <p className="text-slate-600 font-architecture">
                      Pas de surprise, pas de frais cachés. Vous savez exactement où en est votre vente à chaque étape.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 group hover:transform hover:translate-x-2 transition-all duration-300">
                  <div className="flex-shrink-0 w-6 h-6 bg-[#fd733f] rounded-full flex items-center justify-center mt-1 group-hover:scale-110 transition-transform">
                    <Shield className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 font-architecture mb-2">Engagement qualité</h3>
                    <p className="text-slate-600 font-architecture">
                      Je m'engage sur des résultats concrets : délai de vente, prix de vente, satisfaction client.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 group hover:transform hover:translate-x-2 transition-all duration-300">
                  <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1 group-hover:scale-110 transition-transform">
                    <Heart className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 font-architecture mb-2">Accompagnement humain</h3>
                    <p className="text-slate-600 font-architecture">
                      Vendre sa maison est souvent émotionnel. Je vous accompagne avec empathie et professionnalisme.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="/639846b07676a_image1.png"
                alt="Nos valeurs"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section des biens vendus */}
      <SalesShowcaseSection />

      {/* Statistiques animées */}
      <section className="bg-gradient-to-br from-[#7384bc] to-blue-600 py-16 lg:py-24 text-white relative overflow-hidden">
        {/* Éléments décoratifs */}
        <div className="absolute top-10 left-10 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold leading-tight font-architecture mb-6">
              Mes résultats en chiffres
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto font-architecture">
              Des résultats concrets qui parlent d'eux-mêmes
            </p>
          </div>
          
          <div className="stats-numbers grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <div className="text-5xl font-bold mb-4 font-architecture">{animatedStats.sales}+</div>
              <div className="text-xl opacity-90 font-architecture">Biens vendus</div>
            </div>
            <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <div className="text-5xl font-bold mb-4 font-architecture">{animatedStats.satisfaction}%</div>
              <div className="text-xl opacity-90 font-architecture">Clients satisfaits</div>
            </div>
            <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <div className="text-5xl font-bold mb-4 font-architecture">{animatedStats.avgDays}j</div>
              <div className="text-xl opacity-90 font-architecture">Vente moyenne</div>
            </div>
            <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <div className="text-5xl font-bold mb-4 font-architecture">+{animatedStats.increase}%</div>
              <div className="text-xl opacity-90 font-architecture">Plus-value moyenne</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
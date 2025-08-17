'use client';

import { useState } from 'react';
import { Play, ArrowRight } from 'lucide-react';
import EstimationPopup from './EstimationPopup';

export default function HeroSection() {
  const [isEstimationOpen, setIsEstimationOpen] = useState(false);

  return (
    <>
      <section className="bg-white py-16 lg:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Contenu texte */}
          <div className="space-y-8 lg:pr-8">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-blue-50 rounded-full">
                <span className="text-[#7384bc] font-semibold text-sm font-architecture">✨ Votre allié immobilier</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight font-architecture">
                <span className="text-slate-900">Vendez plus vite,</span><br />
                <span className="text-slate-900">au meilleur prix…</span><br />
                <span className="text-[#7384bc]">sans stress.</span>
              </h1>
              
              <p className="text-xl text-slate-600 leading-relaxed max-w-2xl font-architecture">
                Grâce à notre double expertise <strong>immobilier + travaux</strong>, nous transformons votre bien en une opportunité irrésistible pour les acheteurs. 
                <br />Plus de visites inutiles, plus de négociations interminables : nous maximisons la valeur de votre propriété et accélérons sa vente.
              </p>
            </div>

            {/* Boutons CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => setIsEstimationOpen(true)}
                className="group px-8 py-4 bg-[#fd733f] text-white font-bold rounded-xl transition-all duration-300 hover:bg-[#e5652e] hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center space-x-2 font-architecture"
              >
                <span>Estimer mon bien gratuitement</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button className="group flex items-center gap-3 px-6 py-4 text-slate-700 font-semibold hover:text-slate-900 transition-colors font-architecture">
                <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
                  <Play className="w-5 h-5 text-[#fd733f] ml-1" />
                </div>
                <span>Voir comment ça marche</span>
              </button>
            </div>

            {/* Statistiques */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-slate-100">
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <div className="w-3 h-3 bg-[#7384bc] rounded-full mr-2"></div>
                  <span className="text-3xl lg:text-4xl font-bold text-slate-900 font-architecture">99%</span>
                </div>
                <p className="text-slate-600 font-medium text-sm lg:text-base font-architecture">Clients satisfaits</p>
              </div>
              
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <div className="w-3 h-3 bg-[#fd733f] rounded-full mr-2"></div>
                  <span className="text-3xl lg:text-4xl font-bold text-slate-900 font-architecture">65+</span>
                </div>
                <p className="text-slate-600 font-medium text-sm lg:text-base font-architecture">Ventes réussies</p>
              </div>
              
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                  <span className="text-3xl lg:text-4xl font-bold text-slate-900 font-architecture">10+</span>
                </div>
                <p className="text-slate-600 font-medium text-sm lg:text-base font-architecture">Années d'expertise</p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative lg:pl-8">
            <img
              src="/6398386d532df_heroimage1.png"
              alt="Expertise immobilière Olivier DANG"
              className="w-full h-[500px] lg:h-[600px] object-cover"
            />
            
            {/* Badge flottant */}
            <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm px-4 py-3 rounded-xl shadow-lg">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-slate-800 font-semibold text-sm">Expert certifié</span>
              </div>
            </div>
            
            {/* Badge satisfaction */}
            <div className="absolute bottom-6 right-6 bg-[#fd733f] text-white px-4 py-3 rounded-xl shadow-lg font-architecture">
              <div className="text-center">
                <div className="text-2xl font-bold">4.9★</div>
                <div className="text-xs opacity-90">Satisfaction client</div>
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
    </>
  );
}

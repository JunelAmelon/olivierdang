'use client';

import { TrendingUp, CheckCircle, MapPin, Calendar, Euro, Eye, Star } from 'lucide-react';
import { useState, useEffect } from 'react';
import EstimationPopup from './EstimationPopup';

export default function SalesShowcaseSection() {
  const [isEstimationOpen, setIsEstimationOpen] = useState(false);
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const [animatedStats, setAnimatedStats] = useState({
    totalSales: 0,
    avgIncrease: 0,
    avgDays: 0,
    satisfaction: 0
  });

  const sales = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400&h=300&fit=crop&auto=format&q=80",
      title: "Appartement 3 pièces - Neuilly-sur-Seine",
      location: "Neuilly-sur-Seine, 92200",
      originalPrice: 485000,
      finalPrice: 565000,
      increase: 16.5,
      soldIn: "12 jours",
      type: "Appartement",
      surface: "75m²",
      rooms: "3 pièces",
      featured: true
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&h=300&fit=crop&auto=format&q=80",
      title: "Maison familiale - Boulogne-Billancourt",
      location: "Boulogne-Billancourt, 92100",
      originalPrice: 750000,
      finalPrice: 895000,
      increase: 19.3,
      soldIn: "8 jours",
      type: "Maison",
      surface: "120m²",
      rooms: "5 pièces",
      featured: false
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=400&h=300&fit=crop&auto=format&q=80",
      title: "Studio moderne - Paris 16ème",
      location: "Paris 16ème, 75016",
      originalPrice: 320000,
      finalPrice: 385000,
      increase: 20.3,
      soldIn: "15 jours",
      type: "Studio",
      surface: "35m²",
      rooms: "1 pièce",
      featured: false
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1560184897-ae75f418493e?w=400&h=300&fit=crop&auto=format&q=80",
      title: "Duplex avec terrasse - Levallois-Perret",
      location: "Levallois-Perret, 92300",
      originalPrice: 680000,
      finalPrice: 795000,
      increase: 16.9,
      soldIn: "10 jours",
      type: "Duplex",
      surface: "95m²",
      rooms: "4 pièces",
      featured: true
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400&h=300&fit=crop&auto=format&q=80",
      title: "Loft industriel - Issy-les-Moulineaux",
      location: "Issy-les-Moulineaux, 92130",
      originalPrice: 520000,
      finalPrice: 645000,
      increase: 24.0,
      soldIn: "6 jours",
      type: "Loft",
      surface: "85m²",
      rooms: "2 pièces",
      featured: false
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?w=400&h=300&fit=crop&auto=format&q=80",
      title: "Villa avec piscine - Saint-Cloud",
      location: "Saint-Cloud, 92210",
      originalPrice: 1200000,
      finalPrice: 1485000,
      increase: 23.8,
      soldIn: "14 jours",
      type: "Villa",
      surface: "180m²",
      rooms: "7 pièces",
      featured: true
    }
  ];

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('fr-FR', {
      style: 'currency',
      currency: 'EUR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  // Animation des cartes au scroll
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

    const cards = document.querySelectorAll('.sale-card');
    cards.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, []);

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
                totalSales: Math.round(65 * progress),
                avgIncrease: Math.round(18.5 * progress * 10) / 10,
                avgDays: Math.round(9 * progress),
                satisfaction: Math.round(99 * progress)
              });
              
              if (step >= steps) {
                clearInterval(timer);
                setAnimatedStats({
                  totalSales: 65,
                  avgIncrease: 18.5,
                  avgDays: 9,
                  satisfaction: 99
                });
              }
            }, interval);
          };
          
          animateStats();
        }
      },
      { threshold: 0.5 }
    );

    const statsElement = document.querySelector('.stats-section');
    if (statsElement) observer.observe(statsElement);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 py-16 lg:py-24 relative overflow-hidden">
      {/* Éléments décoratifs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-green-200/20 to-blue-200/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-purple-200/20 to-orange-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* En-tête */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-full mb-6 border border-green-200">
            <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
            <span className="text-green-700 font-semibold text-sm font-architecture">VENTES RÉUSSIES</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight font-architecture mb-6">
            <span className="text-slate-900">Nos dernières</span>{' '}
            <span className="bg-gradient-to-r from-[#7384bc] to-green-500 bg-clip-text text-transparent">réussites</span>
            <br />
            <span className="text-slate-900">immobilières</span>
          </h2>
          
          <p className="text-xl text-slate-600 max-w-4xl mx-auto font-architecture">
            Découvrez comment notre expertise <strong className="text-[#7384bc]">immobilier + travaux</strong> a permis à nos clients
            de vendre rapidement et d'augmenter significativement la valeur de leur bien.
          </p>
        </div>

        {/* Grille des ventes */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {sales.map((sale, index) => {
            const isVisible = visibleCards.includes(index);
            
            return (
              <div 
                key={sale.id} 
                data-index={index}
                className={`sale-card group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-slate-200/50 overflow-hidden ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                } ${sale.featured ? 'ring-2 ring-gold-300 scale-105' : ''}`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Badge featured */}
                {sale.featured && (
                  <div className="absolute -top-2 -right-2 z-20">
                    <div className="bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg flex items-center">
                      <Star className="w-3 h-3 mr-1" />
                      TOP VENTE
                    </div>
                  </div>
                )}

                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={sale.image}
                    alt={sale.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Overlay subtle */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300"></div>
                  
                  {/* Badge "VENDU" animé */}
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-full text-sm font-bold font-architecture shadow-lg group-hover:scale-110 transition-transform duration-300">
                    ✓ VENDU
                  </div>
                  
                  {/* Badge augmentation */}
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-[#fd733f] to-[#e5652e] text-white px-3 py-2 rounded-full text-sm font-bold font-architecture flex items-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <TrendingUp className="w-4 h-4 mr-1" />
                    +{sale.increase}%
                  </div>

                  {/* Badge temps de vente */}
                  <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-2 rounded-xl shadow-lg">
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4 text-[#7384bc]" />
                      <span className="text-slate-800 font-semibold text-xs font-architecture">{sale.soldIn}</span>
                    </div>
                  </div>
                </div>

                {/* Contenu */}
                <div className="p-6 space-y-4">
                  {/* Titre et localisation */}
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 font-architecture mb-2 group-hover:text-[#7384bc] transition-colors duration-300">
                      {sale.title}
                    </h3>
                    <div className="flex items-center text-slate-600 text-sm font-architecture">
                      <MapPin className="w-4 h-4 mr-1 text-[#fd733f]" />
                      {sale.location}
                    </div>
                  </div>

                  {/* Détails du bien */}
                  <div className="flex items-center justify-between text-sm bg-slate-50 rounded-lg p-3">
                    <span className="text-slate-600 font-architecture">{sale.type}</span>
                    <span className="text-slate-600 font-architecture">{sale.surface}</span>
                    <span className="text-slate-600 font-architecture">{sale.rooms}</span>
                  </div>

                  {/* Prix avec animation */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between bg-red-50 rounded-lg p-3">
                      <span className="text-sm text-red-600 font-architecture">Prix initial :</span>
                      <span className="text-sm text-red-600 line-through font-architecture font-semibold">
                        {formatPrice(sale.originalPrice)}
                      </span>
                    </div>
                    <div className="flex items-center justify-between bg-green-50 rounded-lg p-3">
                      <span className="text-sm font-semibold text-green-700 font-architecture">Prix de vente :</span>
                      <span className="text-lg font-bold text-green-600 font-architecture">
                        {formatPrice(sale.finalPrice)}
                      </span>
                    </div>
                  </div>

                  {/* Plus-value en grand */}
                  <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl p-4 text-center text-white relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-50"></div>
                    <div className="relative z-10">
                      <div className="text-sm font-architecture opacity-90">Plus-value générée</div>
                      <div className="text-2xl font-bold font-architecture flex items-center justify-center">
                        <Euro className="w-5 h-5 mr-1" />
                        +{formatPrice(sale.finalPrice - sale.originalPrice).replace('€', '')}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Effet de bordure au hover */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none border-2 border-[#7384bc]/30"></div>
              </div>
            );
          })}
        </div>

        {/* Statistiques globales animées */}
        <div className="stats-section mb-16">
          <div className="bg-white rounded-3xl p-8 shadow-2xl border border-slate-200 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-200/30 to-purple-200/30 rounded-bl-full"></div>
            
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-center text-slate-900 mb-8 font-architecture">
                Nos résultats en chiffres
              </h3>
              
              <div className="grid md:grid-cols-4 gap-8 text-center">
                <div className="group">
                  <div className="bg-gradient-to-br from-[#7384bc]/10 to-[#7384bc]/20 rounded-2xl p-6 group-hover:scale-105 transition-transform duration-300">
                    <div className="text-4xl font-bold text-[#7384bc] font-architecture mb-2">
                      {animatedStats.totalSales}+
                    </div>
                    <div className="text-slate-600 font-architecture">Biens vendus</div>
                  </div>
                </div>
                
                <div className="group">
                  <div className="bg-gradient-to-br from-green-500/10 to-green-500/20 rounded-2xl p-6 group-hover:scale-105 transition-transform duration-300">
                    <div className="text-4xl font-bold text-green-600 font-architecture mb-2">
                      +{animatedStats.avgIncrease}%
                    </div>
                    <div className="text-slate-600 font-architecture">Augmentation moyenne</div>
                  </div>
                </div>
                
                <div className="group">
                  <div className="bg-gradient-to-br from-[#fd733f]/10 to-[#fd733f]/20 rounded-2xl p-6 group-hover:scale-105 transition-transform duration-300">
                    <div className="text-4xl font-bold text-[#fd733f] font-architecture mb-2">
                      {animatedStats.avgDays}j
                    </div>
                    <div className="text-slate-600 font-architecture">Délai moyen de vente</div>
                  </div>
                </div>
                
                <div className="group">
                  <div className="bg-gradient-to-br from-purple-500/10 to-purple-500/20 rounded-2xl p-6 group-hover:scale-105 transition-transform duration-300">
                    <div className="text-4xl font-bold text-purple-600 font-architecture mb-2">
                      {animatedStats.satisfaction}%
                    </div>
                    <div className="text-slate-600 font-architecture">Clients satisfaits</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA amélioré */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-3xl p-12 shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-[#7384bc]/10 to-[#fd733f]/10"></div>
            
            <div className="relative z-10">
              <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6 font-architecture">
                Prêt à rejoindre nos clients satisfaits ?
              </h3>
              <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto font-architecture">
                Obtenez votre estimation gratuite et découvrez le potentiel de valorisation de votre bien
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => setIsEstimationOpen(true)}
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#fd733f] to-[#e5652e] text-white font-bold rounded-xl transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1 font-architecture"
                >
                  <TrendingUp className="w-5 h-5 mr-2" />
                  <span>Estimer la valeur de mon bien</span>
                </button>
                
                <a
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-bold rounded-xl transition-all duration-300 hover:bg-white/20 border border-white/20 font-architecture"
                >
                  <Eye className="w-5 h-5 mr-2" />
                  Voir plus de réussites
                </a>
              </div>
            </div>
          </div>
        </div>

        <EstimationPopup
          isOpen={isEstimationOpen}
          onClose={() => setIsEstimationOpen(false)}
        />
      </div>
    </section>
  );
}
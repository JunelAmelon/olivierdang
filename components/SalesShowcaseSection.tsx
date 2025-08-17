'use client';

import { TrendingUp, CheckCircle, MapPin, Calendar, Euro } from 'lucide-react';
import { useState } from 'react';
import EstimationPopup from './EstimationPopup';

export default function SalesShowcaseSection() {
  const [isEstimationOpen, setIsEstimationOpen] = useState(false);

  const sales = [
    {
      id: 1,
      image: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      title: "Appartement 3 pièces - Neuilly-sur-Seine",
      location: "Neuilly-sur-Seine, 92200",
      originalPrice: 485000,
      finalPrice: 565000,
      increase: 16.5,
      soldIn: "12 jours",
      type: "Appartement",
      surface: "75m²",
      rooms: "3 pièces"
    },
    {
      id: 2,
      image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      title: "Maison familiale - Boulogne-Billancourt",
      location: "Boulogne-Billancourt, 92100",
      originalPrice: 750000,
      finalPrice: 895000,
      increase: 19.3,
      soldIn: "8 jours",
      type: "Maison",
      surface: "120m²",
      rooms: "5 pièces"
    },
    {
      id: 3,
      image: "https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      title: "Studio moderne - Paris 16ème",
      location: "Paris 16ème, 75016",
      originalPrice: 320000,
      finalPrice: 385000,
      increase: 20.3,
      soldIn: "15 jours",
      type: "Studio",
      surface: "35m²",
      rooms: "1 pièce"
    },
    {
      id: 4,
      image: "https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      title: "Duplex avec terrasse - Levallois-Perret",
      location: "Levallois-Perret, 9650",
      originalPrice: 680000,
      finalPrice: 795000,
      increase: 16.9,
      soldIn: "10 jours",
      type: "Duplex",
      surface: "95m²",
      rooms: "4 pièces"
    },
    {
      id: 5,
      image: "https://images.pexels.com/photos/1571467/pexels-photo-1571467.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      title: "Loft industriel - Issy-les-Moulineaux",
      location: "Issy-les-Moulineaux, 92130",
      originalPrice: 520000,
      finalPrice: 645000,
      increase: 24.0,
      soldIn: "6 jours",
      type: "Loft",
      surface: "85m²",
      rooms: "2 pièces"
    },
    {
      id: 6,
      image: "https://images.pexels.com/photos/1571471/pexels-photo-1571471.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      title: "Villa avec piscine - Saint-Cloud",
      location: "Saint-Cloud, 92210",
      originalPrice: 1200000,
      finalPrice: 1485000,
      increase: 23.8,
      soldIn: "14 jours",
      type: "Villa",
      surface: "180m²",
      rooms: "7 pièces"
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

  return (
    <section className="bg-gray-50 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* En-tête */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-green-100 rounded-full mb-6">
            <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
            <span className="text-green-700 font-semibold text-sm font-architecture">Ventes réussies</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl font-bold leading-tight font-architecture mb-6">
            <span className="text-slate-900">Nos dernières</span>{' '}
            <span className="text-[#7384bc]">réussites</span>
            <br />
            <span className="text-slate-900">immobilières</span>
          </h2>
          
          <p className="text-lg text-slate-600 max-w-3xl mx-auto font-architecture">
            Découvrez comment notre expertise <strong>immobilier + travaux</strong> a permis à nos clients 
            de vendre rapidement et d'augmenter significativement la valeur de leur bien.
          </p>
        </div>

        {/* Grille des ventes */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sales.map((sale) => (
            <div key={sale.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={sale.image} 
                  alt={sale.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
                
                {/* Badge "VENDU" */}
                <div className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold font-architecture">
                  VENDU
                </div>
                
                {/* Badge augmentation */}
                <div className="absolute top-4 right-4 bg-[#fd733f] text-white px-3 py-1 rounded-full text-sm font-bold font-architecture flex items-center">
                  <TrendingUp className="w-4 h-4 mr-1" />
                  +{sale.increase}%
                </div>
              </div>

              {/* Contenu */}
              <div className="p-6 space-y-4">
                {/* Titre et localisation */}
                <div>
                  <h3 className="text-lg font-bold text-slate-900 font-architecture mb-2">
                    {sale.title}
                  </h3>
                  <div className="flex items-center text-slate-600 text-sm font-architecture">
                    <MapPin className="w-4 h-4 mr-1" />
                    {sale.location}
                  </div>
                </div>

                {/* Détails du bien */}
                <div className="flex items-center justify-between text-sm text-slate-600 font-architecture">
                  <span>{sale.type}</span>
                  <span>{sale.surface}</span>
                  <span>{sale.rooms}</span>
                </div>

                {/* Prix */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-500 font-architecture">Prix initial :</span>
                    <span className="text-sm text-slate-500 line-through font-architecture">
                      {formatPrice(sale.originalPrice)}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-slate-900 font-architecture">Prix de vente :</span>
                    <span className="text-lg font-bold text-green-600 font-architecture">
                      {formatPrice(sale.finalPrice)}
                    </span>
                  </div>
                </div>

                {/* Temps de vente */}
                <div className="flex items-center justify-center bg-slate-50 rounded-lg py-3">
                  <Calendar className="w-4 h-4 text-[#7384bc] mr-2" />
                  <span className="text-sm font-semibold text-slate-700 font-architecture">
                    Vendu en {sale.soldIn}
                  </span>
                </div>

                {/* Plus-value */}
                <div className="bg-green-50 rounded-lg p-3 text-center">
                  <div className="text-sm text-green-700 font-architecture">Plus-value générée</div>
                  <div className="text-xl font-bold text-green-600 font-architecture">
                    +{formatPrice(sale.finalPrice - sale.originalPrice)}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Statistiques globales */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-[#7384bc] font-architecture">65+</div>
              <div className="text-slate-600 font-architecture">Biens vendus</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 font-architecture">+18.5%</div>
              <div className="text-slate-600 font-architecture">Augmentation moyenne</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#fd733f] font-architecture">9 jours</div>
              <div className="text-slate-600 font-architecture">Délai moyen de vente</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 font-architecture">99%</div>
              <div className="text-slate-600 font-architecture">Clients satisfaits</div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <button 
            onClick={() => setIsEstimationOpen(true)}
            className="px-8 py-4 bg-[#fd733f] text-white font-bold rounded-xl transition-all duration-300 hover:bg-[#e5652e] hover:shadow-xl transform hover:-translate-y-1 font-architecture"
          >
            Estimer la valeur de mon bien
          </button>
        </div>
        
        <EstimationPopup 
          isOpen={isEstimationOpen} 
          onClose={() => setIsEstimationOpen(false)} 
        />
      </div>
    </section>
  );
}
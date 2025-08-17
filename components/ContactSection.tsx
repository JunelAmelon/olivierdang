export default function ContactSection() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-gradient-to-br from-purple-50 to-blue-50 rounded-3xl overflow-hidden">
          {/* Forme décorative en haut à droite */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#7384bc] rounded-bl-full opacity-90"></div>
          
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center p-8 lg:p-16">
            {/* Contenu texte à gauche */}
            <div className="space-y-8 relative z-10">
              <div className="space-y-6">
                <h2 className="text-4xl sm:text-5xl font-bold leading-tight font-architecture">
                  <span className="text-slate-900">Commencez à obtenir</span>
                  <br />
                  <span className="text-slate-900">des résultats avec notre</span>
                  <br />
                  <span className="text-[#7384bc]">expertise immobilière</span>
                </h2>
                
                <p className="text-lg text-slate-600 leading-relaxed font-architecture">
                  Notre méthode unique <strong>immobilier + travaux</strong> a permis à plus de 65 propriétaires 
                  de vendre rapidement et d'augmenter la valeur de leur bien de +15 à +30% en moyenne.
                </p>
              </div>

              {/* Bouton CTA */}
              <div className="pt-4">
                <a href="/contact" className="group inline-block px-10 py-5 bg-teal-500 text-white font-bold rounded-full text-lg transition-all duration-300 hover:bg-teal-600 hover:shadow-xl transform hover:-translate-y-1 font-architecture">
                  CONTACTEZ-NOUS MAINTENANT !
                </a>
              </div>

              {/* Points forts */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-slate-700 font-semibold font-architecture">Estimation gratuite</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span className="text-slate-700 font-semibold font-architecture">Vente en 8-15 jours</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                  <span className="text-slate-700 font-semibold font-architecture">+18% de plus-value</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                  <span className="text-slate-700 font-semibold font-architecture">Accompagnement total</span>
                </div>
              </div>
            </div>

            {/* Image à droite */}
            <div className="relative lg:pl-8">
              <img
                src="/image copy copy.png"
                alt="Expert immobilier avec tablette"
                className="w-full h-auto object-cover rounded-2xl shadow-2xl"
              />
              
              {/* Badge flottant */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-xl">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#7384bc] font-architecture">99%</div>
                  <div className="text-sm text-slate-600 font-architecture">Clients satisfaits</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
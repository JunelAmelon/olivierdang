import { Check } from 'lucide-react';

export default function PresentationSection() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image à gauche */}
          <div className="relative">
            <img
              src="/65284933f19f4_Group211.png"
              alt="Olivier DANG - Expert Immobilier"
              className="w-full h-auto object-contain"
            />
          </div>

          {/* Contenu texte à droite */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-4xl sm:text-5xl font-bold leading-tight font-architecture">
                <span className="text-slate-900">Rencontrez</span>{' '}
                <span className="text-[#7384bc]">Olivier DANG</span>
                <br />
                <span className="text-slate-900">votre allié immobilier</span>
              </h2>
              
              <div className="space-y-4">
                <p className="text-lg text-slate-600 leading-relaxed font-architecture">
                  <strong className="text-slate-900">« Enchanté, moi c’est Olivier DANG, Président d’Aximotravo.</strong>
                </p>
                
                <p className="text-lg text-slate-600 leading-relaxed font-architecture">
                  Depuis plus de 10 ans, j’aide les propriétaires à <strong>vendre rapidement, sereinement et au meilleur prix</strong>.
                </p>
                
                <p className="text-lg text-slate-600 leading-relaxed font-architecture">
                  Notre force ? Une <strong>double expertise en immobilier et en travaux</strong>. Nous ne nous contentons pas de mettre en vente : nous <strong>valorisons chaque bien</strong> pour en révéler tout le potentiel. C’est cette approche unique qui nous permet d’être reconnus aujourd’hui comme une référence sur le marché français. »
                </p>
              </div>
            </div>

            {/* Points forts avec icônes */}
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 font-architecture">Vente rapide garantie</h3>
                  <p className="text-slate-600 font-architecture">
                    Nous vendons <strong>3x plus vite</strong> que la moyenne du marché.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 font-architecture">Valorisation optimale</h3>
                  <p className="text-slate-600 font-architecture">
                    Notre expertise travaux permet d’augmenter la valeur de votre bien de <strong>+15 à +30%</strong>.
                  </p>
                </div>
              </div>
            </div>

            {/* Bouton CTA */}
            <div className="pt-4">
              <a 
                href="/contact"
                className="inline-block px-8 py-4 bg-[#fd733f] text-white font-bold rounded-xl transition-all duration-300 hover:bg-[#e5652e] hover:shadow-xl transform hover:-translate-y-1 font-architecture"
              >
                Contactez-nous maintenant !
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { Home, FileCheck, Wrench, Users, Shield, BarChart3, Target, Award } from 'lucide-react';

export default function AdvantagesSection() {
  const advantages = [
    {
      number: "01",
      color: "bg-[#7384bc]",
      title: "Estimation précise et honnête",
      description: "Un prix juste dès le départ = plus de visites, plus d’offres, et une vente au meilleur prix."
    },
    {
      number: "02", 
      color: "bg-[#fd733f]",
      title: "Diagnostics simplifiés",
      description: "On prend en charge les diagnostics obligatoires : gain de temps, zéro stress."
    },
    {
      number: "03",
      color: "bg-green-500",
      title: "Valorisation sur-mesure",
      description: "Nous identifions les petits travaux malins qui peuvent booster la valeur de votre bien de +15 à +30%."
    },
    {
      number: "04",
      color: "bg-teal-500",
      title: "Un seul interlocuteur, zéro perte de temps",
      description: "Immobilier + travaux : deux expertises, un contact unique, une efficacité maximale."
    },
    {
      number: "05",
      color: "bg-purple-500", 
      title: "Acheteurs qualifiés uniquement",
      description: "Fini les visites inutiles : nous ne présentons que des acheteurs sérieux et solvables."
    },
    {
      number: "06",
      color: "bg-blue-500",
      title: "Suivi transparent et régulier", 
      description: "Vous savez exactement où en est votre vente, chaque semaine, sans avoir à courir après les infos."
    },
    {
      number: "07",
      color: "bg-rose-500",
      title: "Mise en scène et négociation stratégique",
      description: "Home staging + technique de vente = plus d’offres fermes et une meilleure négociation."
    },
    {
      number: "08",
      color: "bg-amber-500",
      title: "Excellence garantie jusqu’au notaire",
      description: "Un accompagnement premium de A à Z, jusqu’à la signature finale."
    }
  ];

  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Contenu texte à gauche */}
          <div className="space-y-8">
            <div className="space-y-6">
              <p className="text-slate-600 text-lg leading-relaxed font-architecture">
                Découvrez pourquoi plus de 65 propriétaires nous ont fait confiance pour vendre leur bien immobilier.
              </p>
              
              <h2 className="text-4xl sm:text-5xl font-bold leading-tight font-architecture">
                <span className="text-slate-900">Pourquoi nous</span>
                <br />
                <span className="text-slate-900">choisir pour une</span>
                <br />
                <span className="text-slate-900">meilleure</span>
                <br />
                <span className="text-[#7384bc]">expérience ?</span>
              </h2>
            </div>

            {/* Image */}
            <div className="relative">
              <img
                src="/639846b07676a_image1.png"
                alt="Intérieur moderne avec escalier"
                className=""
              />
            </div>
          </div>

          {/* Liste des avantages à droite */}
          <div className="space-y-6">
            {advantages.map((advantage, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex items-center space-x-3">
                  {/* Petit cercle coloré */}
                  <div className={`w-4 h-4 ${advantage.color} rounded-full flex-shrink-0`}></div>
                  {/* Gros numéro */}
                  <span className="text-6xl font-bold text-slate-900 font-architecture leading-none">
                    {advantage.number}
                  </span>
                </div>
                <div className="flex-1 space-y-2 pt-2">
                  <h3 className="text-lg font-semibold text-slate-900 font-architecture">
                    {advantage.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed font-architecture">
                    {advantage.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

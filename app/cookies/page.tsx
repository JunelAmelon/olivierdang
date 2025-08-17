import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Politique des Cookies - Olivier DANG Expert Immobilier',
  description: 'Politique d\'utilisation des cookies. Types de cookies, gestion des préférences, durée de conservation et paramètres de confidentialité.',
};

export default function Cookies() {
  return (
    <main className="min-h-screen">
      <Header />
      
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight font-architecture mb-6">
              <span className="text-slate-900">Politique des</span>{' '}
              <span className="text-[#7384bc]">cookies</span>
            </h1>
            <p className="text-lg text-slate-600 font-architecture">
              Comment nous utilisons les cookies pour améliorer votre expérience sur notre site
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4 font-architecture">1. Qu'est-ce qu'un cookie ?</h2>
                <div className="bg-blue-50 p-6 rounded-xl">
                  <p className="text-slate-600 font-architecture mb-4">
                    Un cookie est un petit fichier texte déposé sur votre ordinateur, tablette ou smartphone lorsque vous visitez un site web. Il permet au site de mémoriser vos actions et préférences pendant une période donnée.
                  </p>
                  <p className="text-slate-600 font-architecture">
                    Les cookies ne peuvent pas endommager votre appareil et ne contiennent aucun virus.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4 font-architecture">2. Types de cookies utilisés</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-green-50 p-6 rounded-xl">
                    <h3 className="font-bold text-slate-900 mb-3 font-architecture">Cookies essentiels</h3>
                    <p className="text-slate-600 font-architecture mb-3">
                      Nécessaires au fonctionnement du site. Ils ne peuvent pas être désactivés.
                    </p>
                    <ul className="space-y-1 text-sm text-slate-600 font-architecture">
                      <li>• Gestion de session</li>
                      <li>• Sécurité</li>
                      <li>• Préférences de langue</li>
                    </ul>
                  </div>
                  <div className="bg-orange-50 p-6 rounded-xl">
                    <h3 className="font-bold text-slate-900 mb-3 font-architecture">Cookies analytiques</h3>
                    <p className="text-slate-600 font-architecture mb-3">
                      Nous aident à comprendre comment vous utilisez notre site.
                    </p>
                    <ul className="space-y-1 text-sm text-slate-600 font-architecture">
                      <li>• Google Analytics</li>
                      <li>• Statistiques de visite</li>
                      <li>• Amélioration du site</li>
                    </ul>
                  </div>
                  <div className="bg-purple-50 p-6 rounded-xl">
                    <h3 className="font-bold text-slate-900 mb-3 font-architecture">Cookies fonctionnels</h3>
                    <p className="text-slate-600 font-architecture mb-3">
                      Améliorent votre expérience de navigation.
                    </p>
                    <ul className="space-y-1 text-sm text-slate-600 font-architecture">
                      <li>• Mémorisation des formulaires</li>
                      <li>• Préférences utilisateur</li>
                      <li>• Chat en ligne</li>
                    </ul>
                  </div>
                  <div className="bg-red-50 p-6 rounded-xl">
                    <h3 className="font-bold text-slate-900 mb-3 font-architecture">Cookies publicitaires</h3>
                    <p className="text-slate-600 font-architecture mb-3">
                      Personnalisent les publicités selon vos intérêts.
                    </p>
                    <ul className="space-y-1 text-sm text-slate-600 font-architecture">
                      <li>• Publicités ciblées</li>
                      <li>• Réseaux sociaux</li>
                      <li>• Remarketing</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4 font-architecture">3. Cookies tiers</h2>
                <p className="text-slate-600 font-architecture mb-4">
                  Notre site utilise également des cookies provenant de services tiers :
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-xl">
                    <div className="w-12 h-12 bg-red-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-sm font-architecture">G</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 font-architecture">Google Analytics</h4>
                      <p className="text-slate-600 font-architecture text-sm">
                        Analyse du trafic et du comportement des visiteurs. Durée : 2 ans.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-xl">
                    <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-sm font-architecture">F</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 font-architecture">Facebook Pixel</h4>
                      <p className="text-slate-600 font-architecture text-sm">
                        Suivi des conversions et publicités ciblées. Durée : 90 jours.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-xl">
                    <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-sm font-architecture">C</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 font-architecture">Chat en ligne</h4>
                      <p className="text-slate-600 font-architecture text-sm">
                        Fonctionnement du système de chat. Durée : Session.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4 font-architecture">4. Gestion de vos préférences</h2>
                <div className="bg-teal-50 p-6 rounded-xl mb-6">
                  <h3 className="font-bold text-slate-900 mb-3 font-architecture">Centre de préférences</h3>
                  <p className="text-slate-600 font-architecture mb-4">
                    Vous pouvez à tout moment modifier vos préférences concernant les cookies via notre centre de préférences.
                  </p>
                  <button className="px-6 py-3 bg-teal-500 text-white rounded-xl hover:bg-teal-600 transition-colors font-architecture">
                    Gérer mes préférences
                  </button>
                </div>

                <h3 className="font-bold text-slate-900 mb-3 font-architecture">Paramètres du navigateur</h3>
                <p className="text-slate-600 font-architecture mb-4">
                  Vous pouvez également configurer votre navigateur pour :
                </p>
                <ul className="space-y-2 text-slate-600 font-architecture">
                  <li>• Accepter ou refuser tous les cookies</li>
                  <li>• Être averti avant l'installation d'un cookie</li>
                  <li>• Supprimer les cookies existants</li>
                  <li>• Bloquer les cookies tiers</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4 font-architecture">5. Instructions par navigateur</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="bg-gray-50 p-4 rounded-xl">
                      <h4 className="font-semibold text-slate-900 mb-2 font-architecture">Chrome</h4>
                      <p className="text-sm text-slate-600 font-architecture">
                        Paramètres → Confidentialité et sécurité → Cookies et autres données de sites
                      </p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-xl">
                      <h4 className="font-semibold text-slate-900 mb-2 font-architecture">Firefox</h4>
                      <p className="text-sm text-slate-600 font-architecture">
                        Options → Vie privée et sécurité → Cookies et données de sites
                      </p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-gray-50 p-4 rounded-xl">
                      <h4 className="font-semibold text-slate-900 mb-2 font-architecture">Safari</h4>
                      <p className="text-sm text-slate-600 font-architecture">
                        Préférences → Confidentialité → Cookies et données de sites web
                      </p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-xl">
                      <h4 className="font-semibold text-slate-900 mb-2 font-architecture">Edge</h4>
                      <p className="text-sm text-slate-600 font-architecture">
                        Paramètres → Cookies et autorisations de site → Cookies et données stockées
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4 font-architecture">6. Conséquences du refus</h2>
                <div className="bg-yellow-50 p-6 rounded-xl">
                  <p className="text-slate-600 font-architecture mb-4">
                    <strong>Attention :</strong> Le refus de certains cookies peut affecter le fonctionnement du site :
                  </p>
                  <ul className="space-y-2 text-slate-600 font-architecture">
                    <li>• Impossibilité de mémoriser vos préférences</li>
                    <li>• Fonctionnalités limitées (formulaires, chat)</li>
                    <li>• Expérience utilisateur dégradée</li>
                    <li>• Publicités moins pertinentes</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4 font-architecture">7. Durée de conservation</h2>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300 rounded-xl overflow-hidden">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="border border-gray-300 p-4 text-left font-architecture">Type de cookie</th>
                        <th className="border border-gray-300 p-4 text-left font-architecture">Durée</th>
                        <th className="border border-gray-300 p-4 text-left font-architecture">Finalité</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 p-4 font-architecture">Session</td>
                        <td className="border border-gray-300 p-4 font-architecture">Fin de session</td>
                        <td className="border border-gray-300 p-4 font-architecture">Fonctionnement du site</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 p-4 font-architecture">Préférences</td>
                        <td className="border border-gray-300 p-4 font-architecture">1 an</td>
                        <td className="border border-gray-300 p-4 font-architecture">Mémorisation des choix</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-4 font-architecture">Analytiques</td>
                        <td className="border border-gray-300 p-4 font-architecture">2 ans</td>
                        <td className="border border-gray-300 p-4 font-architecture">Statistiques de visite</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 p-4 font-architecture">Publicitaires</td>
                        <td className="border border-gray-300 p-4 font-architecture">90 jours</td>
                        <td className="border border-gray-300 p-4 font-architecture">Publicité ciblée</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4 font-architecture">8. Mise à jour</h2>
                <p className="text-slate-600 font-architecture mb-4">
                  Cette politique des cookies peut être mise à jour pour refléter les changements dans nos pratiques ou pour d'autres raisons opérationnelles, légales ou réglementaires.
                </p>
                <div className="bg-slate-50 p-6 rounded-xl">
                  <p className="text-slate-600 font-architecture">
                    <strong>Dernière mise à jour :</strong> Janvier 2024<br />
                    Nous vous encourageons à consulter régulièrement cette page pour rester informé de nos pratiques.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4 font-architecture">9. Contact</h2>
                <div className="bg-blue-50 p-6 rounded-xl">
                  <p className="text-slate-600 font-architecture mb-4">
                    Pour toute question concernant notre utilisation des cookies :
                  </p>
                  <p className="font-architecture mb-2"><strong>Email :</strong> contact@olivierdang.fr</p>
                  <p className="font-architecture mb-2"><strong>Téléphone :</strong> +33 1 23 45 67 89</p>
                  <p className="font-architecture"><strong>Adresse :</strong> 123 Avenue des Champs-Élysées, 75008 Paris</p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Politique de Confidentialité - Olivier DANG Expert Immobilier',
  description: 'Politique de confidentialité et protection des données personnelles. RGPD, collecte, utilisation et protection de vos informations personnelles.',
};

export default function PolitiqueConfidentialite() {
  return (
    <main className="min-h-screen">
      <Header />
      
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight font-architecture mb-6">
              <span className="text-slate-900">Politique de</span>{' '}
              <span className="text-aximotravo-yellow">confidentialité</span>
            </h1>
            <p className="text-lg text-slate-600 font-architecture">
              Comment nous collectons, utilisons et protégeons vos données personnelles
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4 font-architecture">1. Responsable du traitement</h2>
                <div className="bg-blue-50 p-6 rounded-xl">
                  <p className="font-architecture mb-2"><strong>Responsable :</strong> Olivier DANG</p>
                  <p className="font-architecture mb-2"><strong>Adresse :</strong> 123 Avenue des Champs-Élysées, 75008 Paris, France</p>
                  <p className="font-architecture mb-2"><strong>Email :</strong> contact@olivierdang.fr</p>
                  <p className="font-architecture"><strong>Téléphone :</strong> +33 1 23 45 67 89</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4 font-architecture">2. Données collectées</h2>
                <p className="text-slate-600 font-architecture mb-4">
                  Nous collectons les données personnelles suivantes :
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-red-50 p-6 rounded-xl">
                    <h3 className="font-bold text-slate-900 mb-3 font-architecture">Données d'identification</h3>
                    <ul className="space-y-2 text-slate-600 font-architecture">
                      <li>• Nom et prénom</li>
                      <li>• Adresse email</li>
                      <li>• Numéro de téléphone</li>
                      <li>• Adresse postale</li>
                    </ul>
                  </div>
                  <div className="bg-yellow-50 p-6 rounded-xl">
                    <h3 className="font-bold text-slate-900 mb-3 font-architecture">Données techniques</h3>
                    <ul className="space-y-2 text-slate-600 font-architecture">
                      <li>• Adresse IP</li>
                      <li>• Type de navigateur</li>
                      <li>• Pages visitées</li>
                      <li>• Durée de visite</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4 font-architecture">3. Finalités du traitement</h2>
                <p className="text-slate-600 font-architecture mb-4">
                  Vos données personnelles sont utilisées pour :
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-aximotravo-red rounded-full mt-3 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-slate-900 font-architecture">Gestion des demandes</h4>
                      <p className="text-slate-600 font-architecture">Traitement de vos demandes d'estimation, de contact et de renseignements</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-aximotravo-blue rounded-full mt-3 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-slate-900 font-architecture">Communication commerciale</h4>
                      <p className="text-slate-600 font-architecture">Envoi d'informations sur nos services (avec votre consentement)</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-aximotravo-yellow rounded-full mt-3 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-slate-900 font-architecture">Amélioration du service</h4>
                      <p className="text-slate-600 font-architecture">Analyse statistique pour améliorer notre site et nos services</p>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4 font-architecture">4. Base légale</h2>
                <p className="text-slate-600 font-architecture mb-4">
                  Le traitement de vos données personnelles est fondé sur :
                </p>
                <ul className="space-y-2 text-slate-600 font-architecture">
                  <li>• <strong>Votre consentement</strong> pour les communications commerciales</li>
                  <li>• <strong>L'exécution d'un contrat</strong> pour la prestation de nos services</li>
                  <li>• <strong>Notre intérêt légitime</strong> pour l'amélioration de nos services</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4 font-architecture">5. Durée de conservation</h2>
                <div className="bg-red-50 p-6 rounded-xl">
                  <p className="text-slate-600 font-architecture mb-4">
                    Nous conservons vos données personnelles pendant les durées suivantes :
                  </p>
                  <ul className="space-y-2 text-slate-600 font-architecture">
                    <li>• <strong>Données de contact :</strong> 3 ans après le dernier contact</li>
                    <li>• <strong>Données contractuelles :</strong> 10 ans après la fin du contrat</li>
                    <li>• <strong>Données de navigation :</strong> 13 mois maximum</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4 font-architecture">6. Vos droits</h2>
                <p className="text-slate-600 font-architecture mb-4">
                  Conformément au RGPD, vous disposez des droits suivants :
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded-xl">
                    <h4 className="font-semibold text-slate-900 mb-2 font-architecture">Droit d'accès</h4>
                    <p className="text-sm text-slate-600 font-architecture">Connaître les données que nous détenons sur vous</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-xl">
                    <h4 className="font-semibold text-slate-900 mb-2 font-architecture">Droit de rectification</h4>
                    <p className="text-sm text-slate-600 font-architecture">Corriger vos données inexactes</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-xl">
                    <h4 className="font-semibold text-slate-900 mb-2 font-architecture">Droit à l'effacement</h4>
                    <p className="text-sm text-slate-600 font-architecture">Supprimer vos données personnelles</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-xl">
                    <h4 className="font-semibold text-slate-900 mb-2 font-architecture">Droit d'opposition</h4>
                    <p className="text-sm text-slate-600 font-architecture">Vous opposer au traitement de vos données</p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4 font-architecture">7. Sécurité des données</h2>
                <p className="text-slate-600 font-architecture mb-4">
                  Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données :
                </p>
                <ul className="space-y-2 text-slate-600 font-architecture">
                  <li>• Chiffrement des données sensibles</li>
                  <li>• Accès restreint aux données personnelles</li>
                  <li>• Sauvegarde régulière des données</li>
                  <li>• Formation du personnel à la protection des données</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4 font-architecture">8. Cookies</h2>
                <p className="text-slate-600 font-architecture mb-4">
                  Notre site utilise des cookies pour améliorer votre expérience de navigation. Vous pouvez gérer vos préférences de cookies à tout moment.
                </p>
                <div className="bg-blue-50 p-6 rounded-xl">
                  <p className="text-slate-600 font-architecture">
                    Pour plus d'informations sur notre utilisation des cookies, consultez notre
                    <a href="/cookies" className="text-aximotravo-blue hover:underline ml-1">politique de cookies</a>.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4 font-architecture">9. Contact et réclamations</h2>
                <p className="text-slate-600 font-architecture mb-4">
                  Pour exercer vos droits ou pour toute question concernant cette politique :
                </p>
                <div className="bg-yellow-50 p-6 rounded-xl">
                  <p className="font-architecture mb-2"><strong>Email :</strong> contact@olivierdang.fr</p>
                  <p className="font-architecture mb-2"><strong>Courrier :</strong> 123 Avenue des Champs-Élysées, 75008 Paris</p>
                  <p className="font-architecture mb-4"><strong>Téléphone :</strong> +33 1 23 45 67 89</p>
                  <p className="text-sm text-slate-600 font-architecture">
                    Vous pouvez également déposer une réclamation auprès de la CNIL : www.cnil.fr
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4 font-architecture">10. Modifications</h2>
                <p className="text-slate-600 font-architecture">
                  Cette politique de confidentialité peut être modifiée à tout moment. La version en vigueur est celle publiée sur notre site web.
                  Dernière mise à jour : Janvier 2024.
                </p>
              </section>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}
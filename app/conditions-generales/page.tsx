import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Conditions Générales - Olivier DANG Expert Immobilier',
  description: 'Conditions générales d\'utilisation et de vente des services immobiliers. Modalités, tarifs, obligations, garanties et processus de vente.',
};

export default function ConditionsGenerales() {
  return (
    <main className="min-h-screen">
      <Header />
      
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight font-architecture mb-6">
              <span className="text-slate-900">Conditions</span>{' '}
              <span className="text-[#7384bc]">générales</span>
            </h1>
            <p className="text-lg text-slate-600 font-architecture">
              Conditions générales d'utilisation et de vente des services d'Olivier DANG
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4 font-architecture">1. Objet</h2>
                <p className="text-slate-600 font-architecture mb-4">
                  Les présentes conditions générales ont pour objet de définir les modalités et conditions d'utilisation des services proposés sur le site, ainsi que de définir les droits et obligations des parties dans ce cadre.
                </p>
                <div className="bg-blue-50 p-6 rounded-xl">
                  <p className="text-slate-600 font-architecture">
                    <strong>Services proposés :</strong> Estimation immobilière, vente immobilière, travaux de valorisation, conseil en immobilier, accompagnement personnalisé.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4 font-architecture">2. Acceptation des conditions</h2>
                <p className="text-slate-600 font-architecture mb-4">
                  L'utilisation du site et de ses services implique l'acceptation pleine et entière des présentes conditions générales. Ces conditions s'appliquent à l'exclusion de toute autre condition.
                </p>
                <p className="text-slate-600 font-architecture">
                  Si vous n'acceptez pas ces conditions, nous vous invitons à ne pas utiliser nos services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4 font-architecture">3. Services proposés</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gray-50 p-6 rounded-xl">
                    <h3 className="font-bold text-slate-900 mb-3 font-architecture">Services gratuits</h3>
                    <ul className="space-y-2 text-slate-600 font-architecture">
                      <li>• Estimation immobilière en ligne</li>
                      <li>• Première consultation</li>
                      <li>• Conseils généraux</li>
                      <li>• Visite d'évaluation</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-xl">
                    <h3 className="font-bold text-slate-900 mb-3 font-architecture">Services payants</h3>
                    <ul className="space-y-2 text-slate-600 font-architecture">
                      <li>• Mandat de vente exclusif</li>
                      <li>• Travaux de valorisation</li>
                      <li>• Home staging</li>
                      <li>• Accompagnement premium</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4 font-architecture">4. Modalités de commande</h2>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-[#7384bc] text-white rounded-full flex items-center justify-center text-sm font-bold font-architecture flex-shrink-0">1</div>
                    <div>
                      <h4 className="font-semibold text-slate-900 font-architecture">Prise de contact</h4>
                      <p className="text-slate-600 font-architecture">Contact initial par téléphone, email ou formulaire en ligne</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-[#fd733f] text-white rounded-full flex items-center justify-center text-sm font-bold font-architecture flex-shrink-0">2</div>
                    <div>
                      <h4 className="font-semibold text-slate-900 font-architecture">Évaluation gratuite</h4>
                      <p className="text-slate-600 font-architecture">Visite du bien et établissement d'un devis personnalisé</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold font-architecture flex-shrink-0">3</div>
                    <div>
                      <h4 className="font-semibold text-slate-900 font-architecture">Signature du mandat</h4>
                      <p className="text-slate-600 font-architecture">Signature du contrat de prestation après acceptation du devis</p>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4 font-architecture">5. Prix et paiement</h2>
                <div className="bg-orange-50 p-6 rounded-xl mb-4">
                  <h3 className="font-bold text-slate-900 mb-3 font-architecture">Tarification</h3>
                  <ul className="space-y-2 text-slate-600 font-architecture">
                    <li>• <strong>Commission de vente :</strong> Pourcentage du prix de vente (selon barème en vigueur)</li>
                    <li>• <strong>Travaux de valorisation :</strong> Devis personnalisé selon les prestations</li>
                    <li>• <strong>Services additionnels :</strong> Tarification sur mesure</li>
                  </ul>
                </div>
                <p className="text-slate-600 font-architecture mb-4">
                  <strong>Modalités de paiement :</strong>
                </p>
                <ul className="space-y-2 text-slate-600 font-architecture">
                  <li>• Commission de vente : payable à la signature de l'acte authentique</li>
                  <li>• Travaux : 30% à la commande, 70% à la réception</li>
                  <li>• Autres prestations : selon conditions particulières</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4 font-architecture">6. Obligations des parties</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gray-50 p-6 rounded-xl">
                    <h3 className="font-bold text-slate-900 mb-3 font-architecture">Nos engagements</h3>
                    <ul className="space-y-2 text-slate-600 font-architecture">
                      <li>• Mise en œuvre de tous les moyens pour la vente</li>
                      <li>• Respect des délais convenus</li>
                      <li>• Information régulière du client</li>
                      <li>• Confidentialité des informations</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-xl">
                    <h3 className="font-bold text-slate-900 mb-3 font-architecture">Vos engagements</h3>
                    <ul className="space-y-2 text-slate-600 font-architecture">
                      <li>• Fourniture d'informations exactes</li>
                      <li>• Accès au bien pour les visites</li>
                      <li>• Respect de l'exclusivité si applicable</li>
                      <li>• Paiement des honoraires convenus</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4 font-architecture">7. Droit de rétractation</h2>
                <div className="bg-green-50 p-6 rounded-xl">
                  <p className="text-slate-600 font-architecture mb-4">
                    Conformément au Code de la consommation, vous disposez d'un délai de <strong>14 jours</strong> pour exercer votre droit de rétractation à compter de la signature du contrat.
                  </p>
                  <p className="text-slate-600 font-architecture">
                    <strong>Exception :</strong> Ce droit ne s'applique pas aux prestations déjà entièrement exécutées avant la fin du délai de rétractation avec votre accord préalable exprès.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4 font-architecture">8. Responsabilité</h2>
                <p className="text-slate-600 font-architecture mb-4">
                  Notre responsabilité est limitée à l'exécution des obligations contractuelles. Nous ne saurions être tenus responsables :
                </p>
                <ul className="space-y-2 text-slate-600 font-architecture">
                  <li>• Des dommages indirects ou immatériels</li>
                  <li>• De la non-vente du bien pour des raisons indépendantes de notre volonté</li>
                  <li>• Des vices cachés du bien immobilier</li>
                  <li>• Des décisions des acquéreurs potentiels</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4 font-architecture">9. Résiliation</h2>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-slate-900 font-architecture mb-2">Résiliation par le client</h4>
                    <p className="text-slate-600 font-architecture">
                      Possible à tout moment avec préavis de 15 jours par lettre recommandée. Les prestations déjà réalisées restent dues.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 font-architecture mb-2">Résiliation par nos soins</h4>
                    <p className="text-slate-600 font-architecture">
                      En cas de manquement grave aux obligations contractuelles, après mise en demeure restée sans effet.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4 font-architecture">10. Réclamations et litiges</h2>
                <div className="bg-purple-50 p-6 rounded-xl">
                  <p className="text-slate-600 font-architecture mb-4">
                    <strong>Médiation :</strong> En cas de litige, nous nous engageons à rechercher une solution amiable. À défaut, vous pouvez recourir à la médiation de la consommation.
                  </p>
                  <p className="text-slate-600 font-architecture mb-4">
                    <strong>Médiateur compétent :</strong> Médiateur de l'immobilier - www.mediateur-immobilier.fr
                  </p>
                  <p className="text-slate-600 font-architecture">
                    <strong>Juridiction compétente :</strong> En cas d'échec de la médiation, les tribunaux de Paris sont seuls compétents.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4 font-architecture">11. Modifications</h2>
                <p className="text-slate-600 font-architecture">
                  Ces conditions générales peuvent être modifiées à tout moment. Les conditions applicables sont celles en vigueur à la date de la commande.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4 font-architecture">12. Contact</h2>
                <div className="bg-slate-50 p-6 rounded-xl">
                  <p className="font-architecture mb-2"><strong>Olivier DANG - Expert Immobilier</strong></p>
                  <p className="font-architecture mb-2">123 Avenue des Champs-Élysées, 75008 Paris</p>
                  <p className="font-architecture mb-2">Téléphone : +33 1 23 45 67 89</p>
                  <p className="font-architecture mb-2">Email : contact@olivierdang.fr</p>
                  <p className="font-architecture">Carte professionnelle CPI 7501 2023 000 012 345</p>
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
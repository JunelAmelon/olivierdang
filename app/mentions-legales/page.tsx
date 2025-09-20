import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Mentions Légales - Olivier DANG Expert Immobilier',
  description: 'Mentions légales du site Olivier DANG Expert Immobilier. Informations légales, SIRET, carte professionnelle, hébergement, propriété intellectuelle.',
};

export default function MentionsLegales() {
  return (
    <main className="min-h-screen">
      <Header />
      
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight font-architecture mb-6">
              <span className="text-slate-900">Mentions</span>{' '}
              <span className="text-aximotravo-blue">légales</span>
            </h1>
            <p className="text-lg text-slate-600 font-architecture">
              Informations légales concernant le site web d'Olivier DANG
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4 font-architecture">1. Informations légales</h2>
                <div className="bg-gray-50 p-6 rounded-xl">
                  <p className="font-architecture mb-2"><strong>Raison sociale :</strong> Olivier DANG - Expert Immobilier</p>
                  <p className="font-architecture mb-2"><strong>Forme juridique :</strong> Entreprise individuelle</p>
                  <p className="font-architecture mb-2"><strong>Adresse :</strong> 123 Avenue des Champs-Élysées, 75008 Paris, France</p>
                  <p className="font-architecture mb-2"><strong>Téléphone :</strong> +33 1 23 45 67 89</p>
                  <p className="font-architecture mb-2"><strong>Email :</strong> contact@olivierdang.fr</p>
                  <p className="font-architecture mb-2"><strong>SIRET :</strong> 123 456 789 00012</p>
                  <p className="font-architecture"><strong>Carte professionnelle :</strong> CPI 7501 2023 000 012 345 délivrée par la CCI de Paris</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4 font-architecture">2. Directeur de publication</h2>
                <p className="text-slate-600 font-architecture">
                  Le directeur de la publication du site est Monsieur Olivier DANG, en sa qualité de gérant de l'entreprise.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4 font-architecture">3. Hébergement</h2>
                <div className="bg-gray-50 p-6 rounded-xl">
                  <p className="font-architecture mb-2"><strong>Hébergeur :</strong> Vercel Inc.</p>
                  <p className="font-architecture mb-2"><strong>Adresse :</strong> 340 S Lemon Ave #4133, Walnut, CA 91789, USA</p>
                  <p className="font-architecture">Le site est hébergé sur les serveurs de Vercel, conformément aux standards de sécurité internationaux.</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4 font-architecture">4. Propriété intellectuelle</h2>
                <p className="text-slate-600 font-architecture mb-4">
                  L'ensemble du contenu de ce site (textes, images, vidéos, logos, etc.) est protégé par le droit d'auteur et appartient à Olivier DANG ou à ses partenaires.
                </p>
                <p className="text-slate-600 font-architecture">
                  Toute reproduction, distribution, modification, adaptation, retransmission ou publication de ces éléments est strictement interdite sans l'accord écrit préalable d'Olivier DANG.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4 font-architecture">5. Responsabilité</h2>
                <p className="text-slate-600 font-architecture mb-4">
                  Les informations contenues sur ce site sont aussi précises que possible et le site est périodiquement remis à jour, mais peut toutefois contenir des inexactitudes, des omissions ou des lacunes.
                </p>
                <p className="text-slate-600 font-architecture">
                  Olivier DANG ne pourra être tenu responsable des dommages directs et indirects causés au matériel de l'utilisateur, lors de l'accès au site, et résultant soit de l'utilisation d'un matériel ne répondant pas aux spécifications techniques requises, soit de l'apparition d'un bug ou d'une incompatibilité.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4 font-architecture">6. Liens hypertextes</h2>
                <p className="text-slate-600 font-architecture mb-4">
                  Le site peut contenir des liens hypertextes vers d'autres sites présents sur le réseau Internet. Les liens vers ces autres ressources vous font quitter le site.
                </p>
                <p className="text-slate-600 font-architecture">
                  Il est possible qu'un lien vers le site soit créé par un tiers. Cependant, toute création de lien hypertexte vers le site nécessite une autorisation écrite préalable d'Olivier DANG.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4 font-architecture">7. Protection des données personnelles</h2>
                <p className="text-slate-600 font-architecture mb-4">
                  Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés, vous disposez d'un droit d'accès, de rectification, de suppression et d'opposition aux données personnelles vous concernant.
                </p>
                <p className="text-slate-600 font-architecture">
                  Pour exercer ces droits ou pour toute question sur le traitement de vos données, vous pouvez nous contacter à l'adresse : contact@olivierdang.fr
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4 font-architecture">8. Droit applicable</h2>
                <p className="text-slate-600 font-architecture">
                  Les présentes mentions légales sont régies par le droit français. En cas de litige, les tribunaux français seront seuls compétents.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4 font-architecture">9. Contact</h2>
                <p className="text-slate-600 font-architecture">
                  Pour toute question concernant ces mentions légales, vous pouvez nous contacter :
                </p>
                <div className="bg-gray-50 p-6 rounded-xl mt-4">
                  <p className="font-architecture mb-2"><strong>Par email :</strong> contact@olivierdang.fr</p>
                  <p className="font-architecture mb-2"><strong>Par téléphone :</strong> +33 1 23 45 67 89</p>
                  <p className="font-architecture"><strong>Par courrier :</strong> 123 Avenue des Champs-Élysées, 75008 Paris, France</p>
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
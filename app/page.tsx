import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import PartnersSection from '@/components/PartnersSection';
import PresentationSection from '@/components/PresentationSection';
import AdvantagesSection from '@/components/AdvantagesSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import SalesShowcaseSection from '@/components/SalesShowcaseSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Olivier DANG - Expert Immobilier Paris | Vente Rapide & Valorisation',
  description: 'Vendez votre bien immobilier 3x plus vite avec notre expertise unique immobilier + travaux. Estimation gratuite, vente en 8-15 jours, +18% de plus-value moyenne. 65+ clients satisfaits.',
};

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <PartnersSection />
      <PresentationSection />
      <AdvantagesSection />
      <TestimonialsSection />
      <SalesShowcaseSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
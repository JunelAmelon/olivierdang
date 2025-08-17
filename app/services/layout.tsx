import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services Immobiliers - Estimation, Vente Rapide & Travaux | Olivier DANG',
  description: 'Services immobiliers complets : estimation gratuite, valorisation par travaux, vente rapide, accompagnement A-Z. Expertise unique immobilier + travaux pour maximiser votre vente.',
  keywords: 'services immobiliers Paris, estimation immobilière gratuite, valorisation travaux, vente rapide immobilier, accompagnement immobilier complet',
  openGraph: {
    title: 'Services Immobiliers - Estimation, Vente Rapide & Travaux | Olivier DANG',
    description: 'Services immobiliers complets : estimation gratuite, valorisation par travaux, vente rapide, accompagnement A-Z. Expertise unique immobilier + travaux.',
    type: 'website',
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
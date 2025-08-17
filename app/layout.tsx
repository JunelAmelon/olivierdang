import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Olivier DANG - Expert Immobilier & Travaux | Vente Rapide Paris',
  description: 'Expert immobilier Paris ✓ Vente rapide en 8-15 jours ✓ Valorisation par travaux +18% ✓ 230+ biens vendus ✓ Estimation gratuite ✓ Accompagnement complet A-Z',
  keywords: 'expert immobilier Paris, vente rapide immobilier, estimation gratuite, travaux valorisation, agent immobilier Paris, vendre appartement rapidement',
  authors: [{ name: 'Olivier DANG' }],
  creator: 'Olivier DANG',
  publisher: 'Olivier DANG Expert Immobilier',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://olivierdang-immobilier.com',
    title: 'Olivier DANG - Expert Immobilier & Travaux | Vente Rapide Paris',
    description: 'Expert immobilier Paris ✓ Vente rapide en 8-15 jours ✓ Valorisation par travaux +18% ✓ 230+ biens vendus ✓ Estimation gratuite',
    siteName: 'Olivier DANG Expert Immobilier',
    images: [
      {
        url: '/6398386d532df_heroimage1.png',
        width: 1200,
        height: 630,
        alt: 'Olivier DANG - Expert Immobilier Paris',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Olivier DANG - Expert Immobilier & Travaux | Vente Rapide Paris',
    description: 'Expert immobilier Paris ✓ Vente rapide en 8-15 jours ✓ Valorisation par travaux +18% ✓ Estimation gratuite',
    images: ['/6398386d532df_heroimage1.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

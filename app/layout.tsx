import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const space = Space_Grotesk({ subsets: ['latin'], variable: '--font-space' });

export const metadata: Metadata = {
  title: 'Aniket Gaikwad | Mobile-First Portfolio',
  description:
    'A premium, mobile-first portfolio experience with neon accents and modern UX.',
  openGraph: {
    title: 'Aniket Gaikwad | Mobile-First Portfolio',
    description:
      'A premium, mobile-first portfolio experience with neon accents and modern UX.',
    type: 'website',
  },
  metadataBase: new URL('https://aniketkumargaikwad.github.io/portfolio_website/'),
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${space.variable}`}>
      <body className="min-h-screen bg-night text-white">
        {children}
      </body>
    </html>
  );
}

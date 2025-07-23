import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'EduPro Scholars - Academic Excellence Made Simple | Professional Academic Services',
  description: 'Get expert help with assignments, dissertations, research papers, and more. Join 50,000+ students who trust EduPro Scholars for their academic success. 24/7 support, plagiarism-free work, money-back guarantee.',
  keywords: 'academic writing, assignment help, dissertation writing, research papers, essay writing, homework help, academic services',
  authors: [{ name: 'EduPro Scholars' }],
  openGraph: {
    title: 'EduPro Scholars - Professional Academic Services',
    description: 'Expert academic assistance for students worldwide. Quality guaranteed, confidential, and available 24/7.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EduPro Scholars - Academic Excellence Made Simple',
    description: 'Professional academic services for students worldwide. Get expert help today!',
  },
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
import Header from '@/components/header';
import Hero from '@/components/hero';
import Services from '@/components/services';
import HowItWorks from '@/components/how-it-works';
import Pricing from '@/components/pricing';
import Testimonials from '@/components/testimonials';
import FAQ from '@/components/faq';
import Contact from '@/components/contact';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <HowItWorks />
      <Pricing />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
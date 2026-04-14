/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import ProsesSertifikasi from './components/ProsesSertifikasi';
import Regulasi from './components/Regulasi';
import FatwaMUI from './components/FatwaMUI';
import Berita from './components/Berita';
import FAQ from './components/FAQ';
import Features from './components/Features';
import Stats from './components/Stats';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-stone-50 font-sans text-stone-900 selection:bg-primary-200 selection:text-primary-900">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <ProsesSertifikasi />
        <Features />
        <Regulasi />
        <FatwaMUI />
        <Stats />
        <Berita />
        <FAQ />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

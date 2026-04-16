/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
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
import AdminDashboard from './components/AdminDashboard';
import { initAuth, db, handleFirestoreError, OperationType, auth } from './firebase';
import { doc, getDoc } from 'firebase/firestore';

export default function App() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [authInitialized, setAuthInitialized] = useState(false);

  useEffect(() => {
    const unsubscribe = initAuth(async (uid) => {
      // Check if user is an admin by querying their custom user profile or email.
      // Alternatively, we use our fixed email config logic.
      const currentUser = auth.currentUser;
      let userIsAdmin = false;
      
      if (currentUser && currentUser.email === "asngad@mhs.unugha.ac.id" && currentUser.emailVerified) {
        userIsAdmin = true;
      } else if (uid) {
        try {
          const userDoc = await getDoc(doc(db, 'users', uid));
          if (userDoc.exists() && userDoc.data().role === 'admin') {
            userIsAdmin = true;
          }
        } catch (error) {
          console.warn("Unable to check admin status:", error);
        }
      }

      setIsAdmin(userIsAdmin);
      setAuthInitialized(true);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="min-h-screen bg-stone-50 font-sans text-stone-900 selection:bg-primary-200 selection:text-primary-900">
      <Navbar />
      <AdminDashboard isAdmin={isAdmin} />
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

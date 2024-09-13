/** @jsx jsx */
import { jsx } from 'theme-ui';
import React, { useEffect } from 'react';
import Header from './header/header';
import Footer from './footer/footer';
import Lenis from 'lenis';

export default function Layout({ children }) {
  useEffect(() => {
    // Initialize Lenis smooth scroll
    const lenis = new Lenis({
      duration: 1.2, // Control the speed of the scroll
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Easing function
      smooth: true, // Enable smooth scrolling
    });

    // Animation loop for Lenis
    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    // Clean up the Lenis instance when the component unmounts
    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <React.Fragment>
      <Header />
      <main
        sx={{
          variant: 'layout.main',
        }}
      >
        {children}
      </main>
      <Footer />
    </React.Fragment>
  );
}

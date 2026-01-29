import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Concept from './components/Concept';
import Benefits from './components/Benefits';
import Leaders from './components/Leaders';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import Flow from './components/Flow';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import StickyCTA from './components/StickyCTA';
import JGroup from './components/JGroup';

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Concept />
        <Leaders />
        <Benefits />
        <Testimonials />
        <Pricing />
        <Flow />
        <FAQ />
      </main>
      <Footer />
      <StickyCTA />
    </>
  );
};

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800 antialiased overflow-x-hidden selection:bg-pink-200 selection:text-pink-900">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/j-group" element={<JGroup />} />
      </Routes>
    </div>
  );
};

export default App;
import React from 'react';
import { Hero } from '../components/sections/Hero';
import { Services } from '../components/sections/Services';
import { About } from '../components/sections/About';
import { Partners } from '../components/sections/Partners';
import { Contact } from '../components/sections/Contact';

export function Home() {
  return (
    <>
      <Hero />
      <Services />
      <About />
      <Partners />
      <Contact />
    </>
  );
}
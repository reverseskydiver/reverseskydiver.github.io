import { useEffect } from 'react';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Experience } from './components/sections/Experience';
import { Architecture } from './components/sections/Architecture';
import { Philosophy } from './components/sections/Philosophy';
import { Technology } from './components/sections/Technology';
import { CareerTimeline } from './components/sections/CareerTimeline';
import { AiEasterEgg } from './components/sections/AiEasterEgg';

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => { if (entry.isIntersecting) entry.target.classList.add('visible'); }), { threshold: 0.08 });
    document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return <><Header /><main id="main"><Hero /><About /><Experience /><Architecture /><Philosophy /><Technology /><CareerTimeline /><AiEasterEgg /></main><Footer /></>;
}

export default App;

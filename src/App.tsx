import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Experience } from './components/sections/Experience';
import { Architecture } from './components/sections/Architecture';
import { Philosophy } from './components/sections/Philosophy';
import { Technology } from './components/sections/Technology';
import { CareerTimeline } from './components/sections/CareerTimeline';

function App() {
  return <><Header /><main id="main"><Hero /><About /><Experience /><Architecture /><Philosophy /><Technology /><CareerTimeline /></main><Footer /></>;
}

export default App;

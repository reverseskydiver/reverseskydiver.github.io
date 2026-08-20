import { useEffect, useState } from 'react';
import { ThemeToggle } from '../ui/ThemeToggle';

const links = [['about', 'About'], ['experience', 'Experience'], ['architecture', 'Architecture'], ['philosophy', 'Philosophy'], ['technology', 'Technology']];

export function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('about');

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible) setActive(visible.target.id);
    }, { rootMargin: '-25% 0px -60%', threshold: [0, 0.25, 0.6] });
    links.forEach(([id]) => { const el = document.getElementById(id); if (el) observer.observe(el); });
    return () => observer.disconnect();
  }, []);

  return (
    <header className="site-header">
      <nav className="nav shell" aria-label="Main navigation">
        <a className="brand" href="#top" aria-label="Jovan Tomašević, home"><span>JT</span><i /></a>
        <div id="nav-menu" className={`nav-links ${open ? 'is-open' : ''}`}>
          {links.map(([id, label]) => <a key={id} className={active === id ? 'active' : ''} href={`#${id}`} onClick={() => setOpen(false)}>{label}</a>)}
        </div>
        <div className="nav-actions">
          <ThemeToggle />
          <button className="menu-button" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="nav-menu" aria-label="Toggle navigation"><span /><span /></button>
        </div>
      </nav>
    </header>
  );
}

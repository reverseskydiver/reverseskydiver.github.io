import { useEffect, useState } from 'react';

type Theme = 'light' | 'dark' | 'system';
const options: Theme[] = ['dark', 'light', 'system'];

function resolveTheme(theme: Theme) {
  return theme === 'system' ? (matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark') : theme;
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(() => (localStorage.getItem('theme') as Theme) || 'dark');

  useEffect(() => {
    const media = matchMedia('(prefers-color-scheme: light)');
    const apply = () => { document.documentElement.dataset.theme = resolveTheme(theme); };
    apply();
    media.addEventListener('change', apply);
    return () => media.removeEventListener('change', apply);
  }, [theme]);

  const cycle = () => {
    const next = options[(options.indexOf(theme) + 1) % options.length];
    localStorage.setItem('theme', next);
    setTheme(next);
  };

  return <button className="icon-button" onClick={cycle} aria-label={`Theme: ${theme}. Change theme`} title={`Theme: ${theme}`}><span aria-hidden="true">{theme === 'light' ? '☼' : theme === 'dark' ? '◐' : '◒'}</span></button>;
}

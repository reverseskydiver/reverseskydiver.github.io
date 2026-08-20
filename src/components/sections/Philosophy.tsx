import { philosophy } from '../../data/philosophy';
import { SectionHeading } from '../ui/SectionHeading';

export function Philosophy() {
  return (
    <section className="section shell" id="philosophy">
      <SectionHeading eyebrow="04 / Philosophy" title="How I Think About Software" subtitle="Principles that guide my decisions when systems, teams and requirements get complicated." />
      <div className="philosophy-grid">{philosophy.map(([title, text], i) => <article className="philosophy-card reveal" key={title}><span>{String(i + 1).padStart(2, '0')}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
    </section>
  );
}

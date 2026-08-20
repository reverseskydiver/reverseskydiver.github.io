import { architectureCards } from '../../data/architecture';
import { Badges } from '../ui/Badge';
import { SectionHeading } from '../ui/SectionHeading';
import { CaseStudy } from '../architecture/CaseStudy';

export function Architecture() {
  return (
    <section className="section architecture-section" id="architecture">
      <div className="shell">
        <SectionHeading eyebrow="03 / Architecture" title="Selected Architecture Work" subtitle="A selection of engineering problems I've worked on, focusing on architecture, trade-offs and system evolution." />
        <CaseStudy />
        <div className="more-cases-heading"><span>More architecture work</span><i /></div>
        <div className="architecture-cards">{architectureCards.map((card, i) => <article className="architecture-card reveal" key={card.title}><span className="card-num">0{i + 2}</span><div><h3>{card.title}</h3><p>{card.description}</p><Badges items={card.tags} /></div><small>Case study coming soon</small></article>)}</div>
      </div>
    </section>
  );
}

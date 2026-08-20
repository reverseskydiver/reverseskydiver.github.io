import { SectionHeading } from '../ui/SectionHeading';

const milestones = [
  ['2016', 'Software Developer'],
  ['2017–2019', 'Enterprise Backend Development'],
  ['2019–2022', 'Microservices · Integrations · Distributed Systems'],
  ['2022–2025', 'Architecture · Cloud · DDD · CQRS · Event Sourcing · Enterprise Modernization'],
  ['2025–Present', 'Architecture · Distributed Systems · Event-Driven Systems · Enterprise Platform Modernization'],
];

export function CareerTimeline() {
  return (
    <section className="section shell career-section">
      <SectionHeading eyebrow="06 / Career evolution" title="From implementation to architecture." />
      <div className="career-timeline reveal">{milestones.map(([year, text], i) => <div className="milestone" key={year}><time>{year}</time><i><span /></i><p>{text}</p>{i < milestones.length - 1 && <b aria-hidden="true">→</b>}</div>)}</div>
    </section>
  );
}

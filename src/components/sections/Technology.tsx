import { skills } from '../../data/skills';
import { SectionHeading } from '../ui/SectionHeading';

export function Technology() {
  return (
    <section className="section technology-section" id="technology"><div className="shell">
      <SectionHeading eyebrow="05 / Technology" title="Tools in service of the system." subtitle="A working toolkit shaped by enterprise constraints, distributed workloads and long-lived software." />
      <div className="skills-table reveal">{Object.entries(skills).map(([category, items]) => <div className="skill-row" key={category}><h3>{category}</h3><div>{items.map((item) => <span key={item}>{item}</span>)}</div></div>)}</div>
    </div></section>
  );
}

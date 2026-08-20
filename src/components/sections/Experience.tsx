import { experience } from '../../data/experience';
import { ExperienceItem } from '../experience/ExperienceItem';
import { SectionHeading } from '../ui/SectionHeading';

export function Experience() {
  return (
    <section className="section shell" id="experience">
      <SectionHeading eyebrow="02 / Experience" title="A decade of building and evolving enterprise systems." subtitle="From established platforms to greenfield services — with increasing focus on architecture, domain modeling and technical direction." />
      <div className="experience-list">{experience.map((item, index) => <ExperienceItem key={item.company} item={item} index={index} />)}</div>
    </section>
  );
}

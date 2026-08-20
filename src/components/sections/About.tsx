import { aboutParagraphs } from '../../data/profile';
import { SectionHeading } from '../ui/SectionHeading';

export function About() {
  return (
    <section className="section shell" id="about">
      <SectionHeading eyebrow="01 / About" title="Engineering systems that can evolve." />
      <div className="about-grid reveal">
        <div className="about-copy">{aboutParagraphs.map((p) => <p key={p}>{p}</p>)}</div>
        <blockquote className="about-quote"><span>“</span><p>How do we implement this?</p><div>↓</div><p className="accent">What is the right model and architecture for this problem?</p></blockquote>
      </div>
    </section>
  );
}

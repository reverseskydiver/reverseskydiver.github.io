import type { Experience } from '../../data/experience';
import { Badges } from '../ui/Badge';
import { ProjectCard } from './ProjectCard';

export function ExperienceItem({ item, index }: { item: Experience; index: number }) {
  return (
    <article className={`experience-item reveal ${item.current ? 'current' : ''} ${item.compact ? 'compact' : ''}`}>
      <div className="timeline-marker"><span>{String(index + 1).padStart(2, '0')}</span></div>
      <div className="experience-card">
        <header><div><p className="company">{item.company} {item.current && <span className="current-label">Current</span>}</p><h3>{item.role}</h3></div><time>{item.period}</time></header>
        <p className="experience-description">{item.description}</p>
        {item.confidentiality && <p className="nda-note"><span aria-hidden="true">⌁</span> {item.confidentiality}</p>}
        {item.bullets && <ul className="contributions">{item.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>}
        {item.projects && <div className="projects-grid">{item.projects.map((project) => <ProjectCard key={project.title} project={project} />)}</div>}
        {item.mentoring && <div className="mentoring"><p className="overline">Mentoring & Engineering</p><ul>{item.mentoring.map((m) => <li key={m}>{m}</li>)}</ul></div>}
        {item.featured && <ProjectCard project={item.featured} featured />}
        {!!item.technologies.length && <Badges items={item.technologies} />}
      </div>
    </article>
  );
}

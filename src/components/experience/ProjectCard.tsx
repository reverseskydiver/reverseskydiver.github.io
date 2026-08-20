import type { Project } from '../../data/experience';
import { Badges } from '../ui/Badge';

export function ProjectCard({ project, featured = false }: { project: Project; featured?: boolean }) {
  return (
    <details className={`project-card ${featured ? 'featured' : ''}`} open={featured || undefined}>
      <summary><div><span className="project-domain">{project.domain}</span><h4>{project.title}</h4></div><span className="expand" aria-hidden="true">+</span></summary>
      <div className="project-content">
        {project.description && <p>{project.description}</p>}
        <ul>{project.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>
        <Badges items={project.technologies} />
      </div>
    </details>
  );
}

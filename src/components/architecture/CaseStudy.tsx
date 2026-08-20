import { caseStudy } from '../../data/architecture';
import { Badges } from '../ui/Badge';
import { ArchitectureDiagram } from './ArchitectureDiagram';

export function CaseStudy() {
  return (
    <article className="case-study reveal">
      <header className="case-header"><div><span className="case-index">CASE STUDY / 01</span><h3>{caseStudy.title}</h3><Badges items={caseStudy.tags} /></div><div className="case-status"><i /> Implemented</div></header>
      <div className="case-body">
        <section className="case-problem"><span className="case-label">01 — Problem</span><div>{caseStudy.problem.map((p) => <p key={p}>{p}</p>)}</div></section>
        <section><span className="case-label">02 — Solution</span><p className="lead-copy">{caseStudy.solution}</p></section>
        <section className="dedupe-grid"><div><span className="case-label">03 — Meaningful change detection</span><h4>Deduplication by configured state</h4><p>Each event type can define which fields are relevant for determining whether a new message represents a meaningful change.</p><p>The service calculates a hash from configured fields and compares it with the previously processed state.</p></div><ArchitectureDiagram /></section>
        <section className="capabilities-grid">
          <div><span>01</span><h4>Message sanitization</h4><p>Event types can define which fields should be included, removed or transformed before being sent downstream. When no transformation is required, the original CDC payload can be forwarded using configuration-driven field selection.</p></div>
          <div><span>02</span><h4>Integration-specific configuration</h4><p>Integration behavior is isolated through Spring profiles, allowing different third-party integrations to reuse the same processing infrastructure while defining their own event types, transformations and filtering rules.</p></div>
          <div><span>03</span><h4>Hot-reloadable configuration</h4><p>Only runtime configuration controlling event-processing behavior is refreshed, allowing changes to filtering, hashing, sanitization and integration behavior to take effect without application downtime.</p></div>
        </section>
        <section><span className="case-label">04 — Architectural impact</span><div className="outcome-grid">{caseStudy.outcomes.map((outcome, i) => <div key={outcome}><span>{String(i + 1).padStart(2, '0')}</span><p>{outcome}</p></div>)}</div></section>
      </div>
    </article>
  );
}

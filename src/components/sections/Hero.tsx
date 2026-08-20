import { profile } from '../../data/profile';
import { Badges } from '../ui/Badge';

export function Hero() {
  return (
    <section className="hero shell" id="top">
      <div className="hero-copy">
        <div className="availability"><span /> Open to meaningful engineering conversations</div>
        <p className="hero-kicker">Senior Backend Engineer <i>·</i> 10+ years</p>
        <h1>Jovan<br /><span>Tomašević</span></h1>
        <p className="hero-tagline">{profile.tagline}</p>
        <Badges items={profile.heroTechnologies} />
        <div className="hero-actions">
          <a className="button primary" href={profile.links.linkedin} target="_blank" rel="noreferrer">Connect on LinkedIn <span>↗</span></a>
          <a className="button secondary" href={profile.links.github} target="_blank" rel="noreferrer">GitHub <span>↗</span></a>
          {profile.links.email ? <a className="button ghost" href={`mailto:${profile.links.email}`}>Email <span>↗</span></a> : <span className="contact-note">Email available on request</span>}
        </div>
      </div>
      <aside className="system-card" aria-label="Engineering focus summary">
        <div className="window-bar"><span /><span /><span /><code>profile.json</code></div>
        <pre><span className="syntax-muted">{'{'}</span>{'\n'}  <span className="syntax-key">"focus"</span>: <span className="syntax-value">"architecture"</span>,{'\n'}  <span className="syntax-key">"systems"</span>: <span className="syntax-muted">[</span>{'\n'}    <span className="syntax-value">"distributed"</span>,{'\n'}    <span className="syntax-value">"event-driven"</span>{'\n'}  <span className="syntax-muted">]</span>,{'\n'}  <span className="syntax-key">"approach"</span>: <span className="syntax-value">"evolution"</span>,{'\n'}  <span className="syntax-key">"status"</span>: <span className="syntax-accent">"building"</span>{'\n'}<span className="syntax-muted">{'}'}</span></pre>
        <div className="signal"><span>01</span><p><strong>Architecture</strong><small>Systems designed for change</small></p></div>
        <div className="signal"><span>02</span><p><strong>Problem solving</strong><small>Evidence over assumptions</small></p></div>
        <div className="signal"><span>03</span><p><strong>Modernization</strong><small>Evolution over revolution</small></p></div>
      </aside>
      <a className="scroll-cue" href="#about"><span>Scroll to explore</span><i>↓</i></a>
    </section>
  );
}

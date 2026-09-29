import { profile } from '../../data/profile';
export function Hero() {
  return (
    <section className="hero shell" id="top">
      <div className="hero-copy">
        <p className="hero-kicker">Senior Backend Engineer <i>·</i> 10+ years of experience</p>
        <h1>Jovan Tomašević</h1>
        <p className="hero-tagline">{profile.tagline}</p>
        <p className="hero-technologies">{profile.heroTechnologies.join(' · ')}</p>
        <div className="hero-actions">
          <a className="button primary" href={profile.links.linkedin} target="_blank" rel="noreferrer">LinkedIn <span>↗</span></a>
          <a className="button secondary" href={profile.links.github} target="_blank" rel="noreferrer">GitHub <span>↗</span></a>
          {profile.links.email ? <a className="button ghost" href={`mailto:${profile.links.email}`}>Email <span>↗</span></a> : <span className="contact-note">Email available on request</span>}
        </div>
      </div>
      <p className="hero-note">Architecture · Problem solving · System evolution</p>
    </section>
  );
}

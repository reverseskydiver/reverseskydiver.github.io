import { profile } from '../../data/profile';

export function Footer() {
  return (
    <footer className="footer">
      <div className="shell footer-grid">
        <div><a className="footer-name" href="#top">{profile.name}</a><p>{profile.role}</p><code>Java · Spring Boot · Distributed Systems · Architecture</code></div>
        <div className="footer-links"><a href={profile.links.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a><a href={profile.links.github} target="_blank" rel="noreferrer">GitHub ↗</a>{profile.links.email && <a href={`mailto:${profile.links.email}`}>Email ↗</a>}</div>
      </div>
      <div className="shell footer-bottom"><span>© 2026 Jovan Tomašević</span><a href="#top">Back to top ↑</a></div>
    </footer>
  );
}

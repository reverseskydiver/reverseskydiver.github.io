export function ArchitectureDiagram() {
  return (
    <div className="diagram" role="img" aria-label="CDC flows to field extraction, then hash calculation. If the hash is unchanged, discard the event. If it changed, transform and publish it.">
      <div className="diagram-flow">
        <div className="node source"><small>source</small><strong>CDC Message</strong></div><span className="arrow">↓</span>
        <div className="node"><small>step 01</small><strong>Field Extraction</strong></div><span className="arrow">↓</span>
        <div className="node"><small>step 02</small><strong>Hash Calculation</strong></div><span className="arrow">↓</span>
        <div className="node decision"><small>decision</small><strong>Hash Changed?</strong></div>
        <div className="branches">
          <div><span className="branch-label">NO</span><span className="arrow">↓</span><div className="node muted"><strong>Discard</strong></div></div>
          <div><span className="branch-label yes">YES</span><span className="arrow">↓</span><div className="node accent-node"><strong>Transform</strong></div><span className="arrow">↓</span><div className="node publish"><strong>Publish</strong><i /></div></div>
        </div>
      </div>
    </div>
  );
}

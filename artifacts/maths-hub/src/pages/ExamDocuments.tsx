import { useState } from 'react';
import type { View } from '../App';
import { PROGRAMME_DOCS, type DocLink, type ProgrammeDocs } from '../data/documents';

interface Props { onNav: (v: View) => void; }

type Tab = 'all' | 'formula' | 'specification';

export function ExamDocuments({ onNav }: Props) {
  const [tab, setTab] = useState<Tab>('all');

  return (
    <div className="view-enter" style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
      <div className="pg-header">
        <div className="pg-breadcrumb">
          <a onClick={() => onNav('home')}>Home</a>
          <span>›</span>
          <span>Formulas &amp; specifications</span>
        </div>
        <div className="pg-title-row">
          <div className="pg-title">Formulas &amp; specifications</div>
          <span className="pg-chip">All programmes</span>
        </div>
      </div>

      <div className="pg-body">
        <div className="note-bar">
          <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
          Use the formula sheet for your qualification and paper. Final exam entries are confirmed by the school.
        </div>

        <div className="doc-tabs">
          <button className={`doc-tab${tab === 'all' ? ' on' : ''}`} onClick={() => setTab('all')}>All</button>
          <button className={`doc-tab${tab === 'formula' ? ' on' : ''}`} onClick={() => setTab('formula')}>Formula sheets</button>
          <button className={`doc-tab${tab === 'specification' ? ' on' : ''}`} onClick={() => setTab('specification')}>Specifications</button>
        </div>

        <div className="doc-grid">
          {PROGRAMME_DOCS.map(p => (
            <ProgrammeCard key={p.key} prog={p} tab={tab} />
          ))}
        </div>
      </div>
    </div>
  );
}

function ProgrammeCard({ prog, tab }: { prog: ProgrammeDocs; tab: Tab }) {
  const showFormula = tab === 'all' || tab === 'formula';
  const showSpec = tab === 'all' || tab === 'specification';
  const colorVar = `var(--${prog.color}-bg)`;
  const colorTxt = `var(--${prog.color}-txt)`;

  return (
    <div className="doc-card">
      <div className="doc-card-head">
        <span className="doc-card-dot" style={{ background: colorVar, color: colorTxt }}>
          <svg viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
        </span>
        <div>
          <div className="doc-card-title">{prog.title}</div>
          <div className="doc-card-sub">{prog.subtitle}</div>
        </div>
      </div>

      {showFormula && (
        <div className="doc-section">
          <div className="doc-section-label">Formula sheet</div>
          {prog.formula.map((item, i) => (
            <DocRow key={i} item={item} />
          ))}
          {prog.formulaNote && <div className="doc-row-note">{prog.formulaNote}</div>}
        </div>
      )}

      {showSpec && (
        <div className="doc-section">
          <div className="doc-section-label">Specification</div>
          {prog.specification.map((item, i) => (
            <DocRow key={i} item={item} />
          ))}
        </div>
      )}
    </div>
  );
}

function DocRow({ item }: { item: DocLink }) {
  const valid = item.url && item.url !== '#';
  return (
    <div className="doc-row">
      <div className="doc-row-text">
        <div className="doc-row-label">{item.label}</div>
        {item.note && <div className="doc-row-note">{item.note}</div>}
      </div>
      {valid ? (
        <a className="doc-row-btn" href={item.url} target="_blank" rel="noopener noreferrer">
          <svg viewBox="0 0 24 24"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
          {item.buttonLabel ?? 'Open PDF'}
        </a>
      ) : (
        <span className="doc-row-btn disabled">Coming soon</span>
      )}
    </div>
  );
}

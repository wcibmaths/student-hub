import type { View } from '../App';

interface HomeProps {
  onNav: (view: View) => void;
}

export function Home({ onNav }: HomeProps) {
  return (
    <div className="view-enter" style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
      <div className="home-hero">
        <div className="home-title">Maths Revision Hub</div>
        <div className="home-sub">Past papers, mark schemes, topic practice, notes and formula sheets for IGCSE and IAL Mathematics.</div>
        <div className="search-box">
          <svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
          <input type="text" placeholder="Search topics, unit codes, paper years…" />
        </div>
      </div>

      <div className="pg-body">
        <div className="section-label">Choose your programme</div>
        <div className="prog-grid">
          <div className="prog-card" onClick={() => onNav('igcse-4ma1')}>
            <div className="prog-icon" style={{ background: 'var(--blue-bg)', color: 'var(--blue-txt)' }}>
              <svg viewBox="0 0 24 24"><rect x="4" y="2" width="16" height="20" rx="2"/><line x1="8" y1="7" x2="16" y2="7"/><line x1="8" y1="11" x2="16" y2="11"/><line x1="8" y1="15" x2="13" y2="15"/></svg>
            </div>
            <div className="prog-card-title">IGCSE Mathematics A</div>
            <div className="prog-card-code">Edexcel · 4MA1 · Higher tier</div>
            <div className="prog-card-desc">2 papers per series · Years 10–11</div>
            <div className="prog-tags">
              <span className="prog-tag" style={{ background: 'var(--blue-bg)', color: 'var(--blue-txt)' }}>Papers</span>
              <span className="prog-tag" style={{ background: 'var(--amber-bg)', color: 'var(--amber-txt)' }}>Topic practice</span>
              <span className="prog-tag" style={{ background: 'var(--green-bg)', color: 'var(--green-txt)' }}>Mark schemes</span>
            </div>
          </div>

          <div className="prog-card" onClick={() => onNav('igcse-4pm1')}>
            <div className="prog-icon" style={{ background: 'var(--purple-bg)', color: 'var(--purple-txt)' }}>
              <svg viewBox="0 0 24 24"><line x1="12" y1="2" x2="12" y2="22"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></svg>
            </div>
            <div className="prog-card-title">IGCSE Further Pure Maths</div>
            <div className="prog-card-code">Edexcel · 4PM1 · Single tier</div>
            <div className="prog-card-desc">2 papers per series · Years 10–11</div>
            <div className="prog-tags">
              <span className="prog-tag" style={{ background: 'var(--purple-bg)', color: 'var(--purple-txt)' }}>Papers</span>
              <span className="prog-tag" style={{ background: 'var(--amber-bg)', color: 'var(--amber-txt)' }}>Topic practice</span>
              <span className="prog-tag" style={{ background: 'var(--green-bg)', color: 'var(--green-txt)' }}>Mark schemes</span>
            </div>
          </div>

          <div className="prog-card" onClick={() => onNav('ial-maths')}>
            <div className="prog-icon" style={{ background: 'var(--green-bg)', color: 'var(--green-txt)' }}>
              <svg viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
            </div>
            <div className="prog-card-title">IAL Mathematics</div>
            <div className="prog-card-code">Edexcel · 6 modules</div>
            <div className="prog-card-desc">P1–P4, S1, D1 or M1 · Years 12–13</div>
            <div className="prog-tags">
              <span className="prog-tag" style={{ background: 'var(--blue-bg)', color: 'var(--blue-txt)' }}>Pure</span>
              <span className="prog-tag" style={{ background: 'var(--green-bg)', color: 'var(--green-txt)' }}>Statistics</span>
              <span className="prog-tag" style={{ background: 'var(--amber-bg)', color: 'var(--amber-txt)' }}>Applied</span>
            </div>
          </div>

          <div className="prog-card" onClick={() => onNav('ial-fm')}>
            <div className="prog-icon" style={{ background: 'var(--amber-bg)', color: 'var(--amber-txt)' }}>
              <svg viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
            </div>
            <div className="prog-card-title">IAL Further Mathematics</div>
            <div className="prog-card-code">Edexcel · 12 modules</div>
            <div className="prog-card-desc">P1–P4, FP1, FP2, S1–S3, D1, M1–M2</div>
            <div className="prog-tags">
              <span className="prog-tag" style={{ background: 'var(--blue-bg)', color: 'var(--blue-txt)' }}>Pure</span>
              <span className="prog-tag" style={{ background: 'var(--purple-bg)', color: 'var(--purple-txt)' }}>FP</span>
              <span className="prog-tag" style={{ background: 'var(--green-bg)', color: 'var(--green-txt)' }}>Stats</span>
              <span className="prog-tag" style={{ background: 'var(--amber-bg)', color: 'var(--amber-txt)' }}>Applied</span>
            </div>
          </div>
        </div>

        <div className="section-label">Quick access</div>
        <div className="ql-grid">
          <div className="ql-card">
            <svg style={{ color: 'var(--blue-txt)' }} viewBox="0 0 24 24"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
            <div className="ql-title">All past papers</div>
            <div className="ql-sub">Every series, all programmes</div>
          </div>
          <div className="ql-card">
            <svg style={{ color: 'var(--amber-txt)' }} viewBox="0 0 24 24"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg>
            <div className="ql-title">Formula sheets</div>
            <div className="ql-sub">Hosted PDFs, per unit</div>
          </div>
          <div className="ql-card">
            <svg style={{ color: 'var(--green-txt)' }} viewBox="0 0 24 24"><path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z"/><path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z"/></svg>
            <div className="ql-title">Specifications</div>
            <div className="ql-sub">Official Edexcel syllabuses</div>
          </div>
        </div>

        <div className="section-label">Exam series</div>
        <div className="series-row">
          <div className="series-chip"><div className="series-chip-label">NEXT SERIES</div><div className="series-chip-val">January 2026</div></div>
          <div className="series-chip"><div className="series-chip-label">FOLLOWING</div><div className="series-chip-val">June 2026</div></div>
          <div className="series-chip"><div className="series-chip-label">IGCSE</div><div className="series-chip-val">4MA1 · 4PM1</div></div>
          <div className="series-chip"><div className="series-chip-label">IAL UNITS</div><div className="series-chip-val">All modules</div></div>
        </div>
      </div>
    </div>
  );
}

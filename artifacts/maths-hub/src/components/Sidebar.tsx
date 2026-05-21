import type { View } from '../App';

interface SidebarProps {
  current: View;
  onNav: (view: View) => void;
}

export function Sidebar({ current, onNav }: SidebarProps) {
  return (
    <nav className="sb">
      <div className="sb-logo">
        <img src={`${import.meta.env.BASE_URL}wellington-logo.png`} alt="Wellington College Bangkok logo" className="sidebar-logo" />
        <div className="sb-logo-text">
          <div className="sb-logo-name">Maths Hub</div>
          <div className="sb-logo-sub">Wellington College Bangkok</div>
        </div>
      </div>

      <div className={`sb-item${current === 'home' ? ' active' : ''}`} onClick={() => onNav('home')}>
        <svg viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
        Home
      </div>

      <div className="sb-divider" />
      <div className="sb-label">IGCSE</div>
      <div className={`sb-item${current === 'igcse-4ma1' ? ' active' : ''}`} onClick={() => onNav('igcse-4ma1')}>
        <svg viewBox="0 0 24 24"><rect x="4" y="2" width="16" height="20" rx="2"/><line x1="8" y1="7" x2="16" y2="7"/><line x1="8" y1="11" x2="16" y2="11"/><line x1="8" y1="15" x2="13" y2="15"/></svg>
        Mathematics A <span className="sb-badge">4MA1</span>
      </div>
      <div className={`sb-item${current === 'igcse-4pm1' ? ' active' : ''}`} onClick={() => onNav('igcse-4pm1')}>
        <svg viewBox="0 0 24 24"><rect x="4" y="2" width="16" height="20" rx="2"/><line x1="8" y1="7" x2="16" y2="7"/><line x1="8" y1="11" x2="16" y2="11"/><line x1="8" y1="15" x2="13" y2="15"/></svg>
        Further Pure <span className="sb-badge">4PM1</span>
      </div>

      <div className="sb-divider" />
      <div className="sb-label">IAL</div>
      <div className={`sb-item${current === 'ial-maths' ? ' active' : ''}`} onClick={() => onNav('ial-maths')}>
        <svg viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
        Mathematics
      </div>
      <div className={`sb-item${current === 'ial-fm' ? ' active' : ''}`} onClick={() => onNav('ial-fm')}>
        <svg viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
        Further Maths
      </div>

      <div className="sb-divider" />
      <div className="sb-label">Exam documents</div>
      <div className={`sb-item${current === 'formula-sheets' ? ' active' : ''}`} onClick={() => onNav('formula-sheets')}>
        <svg viewBox="0 0 24 24"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg>
        Formula sheets
      </div>
      <div className={`sb-item${current === 'specifications' ? ' active' : ''}`} onClick={() => onNav('specifications')}>
        <svg viewBox="0 0 24 24"><path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z"/><path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z"/></svg>
        Specifications
      </div>
      <div className={`sb-item${current === 'all-past-papers' ? ' active' : ''}`} onClick={() => onNav('all-past-papers')}>
        <svg viewBox="0 0 24 24"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
        All past papers
      </div>

      <div className="sb-divider" />
      <div className="sb-label">Tools</div>
      <div className={`sb-item${current === 'all-past-papers' ? ' active' : ''}`} onClick={() => onNav('all-past-papers')}>
        <svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
        Search all papers
      </div>

      <div className="sb-foot">
        Maths Department · 2025–26<br />
        Resources © their respective owners.
      </div>
    </nav>
  );
}

import type { View } from '../App';
import { FORMULA_SHEETS } from '../data/documents';
import { TopicLink } from '../components/PillPair';

interface Props { onNav: (v: View) => void; }

export function FormulaSheets({ onNav }: Props) {
  return (
    <div className="view-enter" style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
      <div className="pg-header">
        <div className="pg-breadcrumb">
          <a onClick={() => onNav('home')}>Home</a>
          <span>›</span>
          <span>Formula sheets</span>
        </div>
        <div className="pg-title-row">
          <div className="pg-title">Formula sheets</div>
          <span className="pg-chip">All programmes</span>
        </div>
      </div>

      <div className="pg-body">
        <div className="note-bar">
          <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
          Official formula booklets and unit-specific formula sheets. Placeholder cards are ready to receive PDF links.
        </div>

        {FORMULA_SHEETS.map(group => (
          <div key={group.title} className="mod-group">
            <div className="mod-group-hd">
              <span className="mod-group-name">{group.title}</span>
              <div className="mod-group-line" />
              {group.subtitle && <span className="strand-bar-label">{group.subtitle}</span>}
            </div>
            <div className="ch-grid">
              {group.items.map((item, i) => {
                const valid = item.url && item.url !== '#';
                return (
                  <div key={i} className="ch-card">
                    {item.code && <div className="ch-num">{item.code}</div>}
                    <div className="ch-name">{item.label}</div>
                    <div className="ch-links">
                      {valid ? (
                        <TopicLink cls={group.color === 'blue' ? 'genie' : group.color === 'purple' ? 'epp' : group.color === 'green' ? 'sme' : 'pmt'} label="Open PDF" url={item.url} />
                      ) : (
                        <span className="topic-link" style={{ opacity: .55, cursor: 'default' }}>PDF coming soon</span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

import type { View } from '../App';
import type { ModuleKey } from './ModuleDetail';

const CODES: Record<ModuleKey, string> = {
  P1:'WMA11', P2:'WMA12', P3:'WMA13', P4:'WMA14',
  FP1:'WFM01', FP2:'WFM02',
  S1:'WST01', S2:'WST02', S3:'WST03',
  D1:'WDM11', M1:'WME01', M2:'WME02',
};

interface Props {
  onNav: (v: View) => void;
  onModule: (mod: ModuleKey, parent: 'ial-maths' | 'ial-fm') => void;
}

export function IALFurtherMaths({ onNav, onModule }: Props) {
  return (
    <div className="view-enter" style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
      <div className="pg-header">
        <div className="pg-breadcrumb">
          <a onClick={() => onNav('home')}>Home</a>
          <span>›</span>
          <span>IAL Further Mathematics</span>
        </div>
        <div className="pg-title-row">
          <div className="pg-title">IAL Further Mathematics</div>
          <span className="pg-chip amber">12 modules</span>
          <span className="pg-chip">Edexcel</span>
        </div>
      </div>

      <div className="pg-body">
        <div className="note-bar">
          <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
          P1–P4 are shared with IAL Maths. FP1 and FP2 are unique to Further Maths.
        </div>

        <div className="mod-group">
          <div className="mod-group-hd"><span className="mod-group-name">Pure Mathematics — shared with IAL Maths</span><div className="mod-group-line" /></div>
          <div className="mod-cards">
            {(['P1','P2','P3','P4'] as ModuleKey[]).map(mod => (
              <div key={mod} className="mod-card pure" onClick={() => onModule(mod, 'ial-fm')}>
                <div className="mod-card-name">{mod}</div>
                <div className="mod-card-code">{CODES[mod]}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="mod-group">
          <div className="mod-group-hd"><span className="mod-group-name">Further Pure Mathematics</span><div className="mod-group-line" /></div>
          <div className="mod-cards">
            {(['FP1','FP2'] as ModuleKey[]).map(mod => (
              <div key={mod} className="mod-card fp" onClick={() => onModule(mod, 'ial-fm')}>
                <div className="mod-card-name">{mod}</div>
                <div className="mod-card-code">{CODES[mod]}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="mod-group">
          <div className="mod-group-hd"><span className="mod-group-name">Statistics</span><div className="mod-group-line" /></div>
          <div className="mod-cards">
            {(['S2','S3'] as ModuleKey[]).map(mod => (
              <div key={mod} className="mod-card stats" onClick={() => onModule(mod, 'ial-fm')}>
                <div className="mod-card-name">{mod}</div>
                <div className="mod-card-code">{CODES[mod]}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="mod-group">
          <div className="mod-group-hd"><span className="mod-group-name">Mechanics</span><div className="mod-group-line" /></div>
          <div className="mod-cards">
            <div className="mod-card applied" onClick={() => onModule('M2', 'ial-fm')}>
              <div className="mod-card-name">M2</div>
              <div className="mod-card-code">WME02</div>
            </div>
          </div>
        </div>

        <div className="mod-group">
          <div className="mod-group-hd"><span className="mod-group-name">Decision</span><div className="mod-group-line" /></div>
          <div className="mod-cards">
            <div className="mod-card applied" onClick={() => onModule('D1', 'ial-fm')}>
              <div className="mod-card-name">D1</div>
              <div className="mod-card-code">WDM11</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

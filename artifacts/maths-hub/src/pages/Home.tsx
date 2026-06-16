import type { View } from '../App';
import {
  REGION,
  LAST_CHECKED,
  SOURCES,
  getUpcomingThailandExams,
  hasVerifiedThailandExams,
  formatLastChecked,
  formatExamDay,
} from '../data/examTimetable';

interface HomeProps {
  onNav: (view: View) => void;
}

export function Home({ onNav }: HomeProps) {
  const upcoming = getUpcomingThailandExams();
  const verified = hasVerifiedThailandExams();
  const visible = upcoming.slice(0, 8);

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
        <div className="kd-card">
          <div className="kd-head">
            <div className="kd-head-left">
              <svg className="kd-cal" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
              <div>
                <div className="kd-title">Upcoming mathematics exams</div>
                <div className="kd-region">{REGION} region · Pearson International timetable</div>
              </div>
            </div>
            <div className="kd-last-checked">Last checked: {formatLastChecked()}</div>
          </div>

          {!verified && (
            <div className="kd-warn">
              <svg viewBox="0 0 24 24"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
              <div>
                <strong>Exam timetable source needs verification for {REGION} region.</strong>
                <div className="kd-warn-sub">
                  Dates below are placeholders. An admin must confirm each entry against the official
                  Pearson International timetable for Asia-Pacific that lists {REGION},
                  then mark <code>verified: true</code> in <code>src/data/examTimetable.ts</code>.
                </div>
              </div>
            </div>
          )}

          {visible.length === 0 ? (
            <div className="kd-empty">
              No exam dates have been added yet. Once an admin populates the Thailand timetable
              (see <code>src/data/examTimetable.ts</code>), upcoming exams for IGCSE 4MA1, 4PM1
              and IAL P1–P4, S1–S3, M1–M2, D1 will appear here.
            </div>
          ) : (
            <div className="kd-grid">
              {visible.map((e, i) => {
                const { day, month } = formatExamDay(e.date);
                return (
                  <div key={i} className={`kd-item${!e.verified ? ' kd-item-unverified' : ''}`}>
                    <div className="kd-date-block">
                      <div className="kd-day">{day}</div>
                      <div className="kd-month">{month}</div>
                    </div>
                    <div className="kd-item-text">
                      <div className="kd-item-title">{e.title}</div>
                      {e.subtitle && <div className="kd-item-sub">{e.subtitle}</div>}
                      <div className="kd-item-meta">
                        <span className="kd-item-code">{e.code}</span>
                        <span className="kd-item-series">· {e.series}</span>
                        {!e.verified && <span className="kd-item-flag">Unverified</span>}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          <div className="kd-foot">
            <span>Source: {SOURCES.igcse.label} · {SOURCES.ial.label}</span>
            <a href={SOURCES.igcse.url} target="_blank" rel="noopener noreferrer" className="kd-foot-link">
              View Pearson timetables ↗
            </a>
          </div>
        </div>

        <div className="section-label">Quick actions</div>
        <div className="ql-grid">
          <div className="ql-card" onClick={() => onNav('all-past-papers')} role="button" tabIndex={0}>
            <svg style={{ color: 'var(--blue-txt)' }} viewBox="0 0 24 24"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
            <div className="ql-title">All past papers</div>
            <div className="ql-sub">Every series, all programmes</div>
          </div>
          <div className="ql-card" onClick={() => onNav('exam-documents')} role="button" tabIndex={0}>
            <svg style={{ color: 'var(--amber-txt)' }} viewBox="0 0 24 24"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg>
            <div className="ql-title">Formula sheets</div>
            <div className="ql-sub">IGCSE printed · IAL booklet</div>
          </div>
          <div className="ql-card" onClick={() => onNav('exam-documents')} role="button" tabIndex={0}>
            <svg style={{ color: 'var(--green-txt)' }} viewBox="0 0 24 24"><path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z"/><path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z"/></svg>
            <div className="ql-title">Specifications</div>
            <div className="ql-sub">Official Edexcel syllabuses</div>
          </div>
        </div>

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
            <div className="prog-card-code">Pearson Edexcel · 6 units</div>
            <div className="prog-card-desc">P1–P4, S1, M1, D1 · Years 12–13</div>
            <div className="prog-tags">
              <span className="prog-tag" style={{ background: 'var(--blue-bg)', color: 'var(--blue-txt)' }}>Pure</span>
              <span className="prog-tag" style={{ background: 'var(--green-bg)', color: 'var(--green-txt)' }}>Statistics</span>
              <span className="prog-tag" style={{ background: 'var(--amber-bg)', color: 'var(--amber-txt)' }}>Mechanics</span>
              <span className="prog-tag" style={{ background: 'var(--amber-bg)', color: 'var(--amber-txt)' }}>Decision</span>
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
              <span className="prog-tag" style={{ background: 'var(--amber-bg)', color: 'var(--amber-txt)' }}>Mechanics</span>
              <span className="prog-tag" style={{ background: 'var(--amber-bg)', color: 'var(--amber-txt)' }}>Decision</span>
            </div>
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

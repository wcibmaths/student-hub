import { useState } from 'react';
import type { View } from '../App';
import { MODULE_INFO } from '../data/modules';
import { IAL_CHAPTERS } from '../data/chapters';
import { PillPair, TopicLink } from '../components/PillPair';

export type ModuleKey = 'P1' | 'P2' | 'P3' | 'P4' | 'FP1' | 'FP2' | 'S1' | 'S2' | 'S3' | 'D1' | 'M1' | 'M2';

type Tab = 'papers' | 'topics' | 'formula' | 'spec';
type SeriesFilter = 'all' | 'jan' | 'jun' | 'oct';

interface Props {
  mod: ModuleKey;
  parent: 'ial-maths' | 'ial-fm';
  onNav: (v: View) => void;
}

export function ModuleDetail({ mod, parent, onNav }: Props) {
  const [tab, setTab] = useState<Tab>('papers');
  const [seriesFilter, setSeriesFilter] = useState<SeriesFilter>('all');
  const [chSearch, setChSearch] = useState('');

  const info = MODULE_INFO[mod];
  if (!info) return null;

  const papers = info.papers.filter(r => seriesFilter === 'all' || r.s === seriesFilter);
  const chapters = (IAL_CHAPTERS[mod] || []).filter(c =>
    chSearch === '' ||
    c.name.toLowerCase().includes(chSearch.toLowerCase()) ||
    `chapter ${c.n}`.includes(chSearch.toLowerCase())
  );

  const parentLabel = parent === 'ial-fm' ? 'IAL Further Maths' : 'IAL Maths';

  return (
    <div className="view-enter" style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
      <div className="pg-header">
        <div className="pg-breadcrumb">
          <a onClick={() => onNav('home')}>Home</a>
          <span>›</span>
          <a onClick={() => onNav(parent)}>{parentLabel}</a>
          <span>›</span>
          <span>{mod}</span>
        </div>
        <div className="pg-title-row">
          <div className="pg-title">{info.title}</div>
          <span className={`pg-chip ${info.color}`}>{info.code}</span>
          <span className="pg-chip">Edexcel IAL</span>
        </div>
        <div className="tabs">
          {(['papers','topics','formula','spec'] as Tab[]).map(t => (
            <div key={t} className={`tab${tab === t ? ' active' : ''}`} onClick={() => setTab(t)}>
              {t === 'papers' ? 'Past papers' : t === 'topics' ? 'Chapter practice' : t === 'formula' ? 'Formula sheet' : 'Specification'}
            </div>
          ))}
        </div>
      </div>

      <div className="pg-body">
        {tab === 'papers' && (
          <>
            <div className="filter-row">
              <span className="filter-label">Series:</span>
              {(['all','jan','jun','oct'] as SeriesFilter[]).map(s => (
                <span key={s} className={`filter-chip${seriesFilter === s ? ' on' : ''}`} onClick={() => setSeriesFilter(s)}>
                  {s === 'all' ? 'All' : s === 'jan' ? 'January' : s === 'jun' ? 'June' : 'October'}
                </span>
              ))}
            </div>
            <div className="papers-wrap">
              <table className="papers-table" id="tbl-mod">
                <thead>
                  <tr>
                    <th style={{ width: 60 }}>Year</th>
                    <th style={{ width: 100 }}>Series</th>
                    <th>Question paper</th>
                    <th>Mark scheme</th>
                  </tr>
                </thead>
                <tbody>
                  {papers.length === 0 ? (
                    <tr>
                      <td colSpan={4} style={{ padding: '24px 10px', color: 'var(--ink3)', fontSize: 12 }}>
                        Papers for {mod} will be linked shortly. Visit <a href="https://www.paperlords.org" target="_blank" rel="noopener" style={{ color: 'var(--ink2)', textDecoration: 'underline', textUnderlineOffset: 2 }}>Paperlords</a> in the meantime.
                      </td>
                    </tr>
                  ) : (
                    papers.map((r, i) => (
                      <tr key={i}>
                        <td className="year">{r.year}</td>
                        <td className="series">{r.series}</td>
                        <td>
                          <a className="dl-pill paper" href={r.p} target="_blank" rel="noopener">
                            <svg viewBox="0 0 24 24"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                            Paper
                          </a>
                        </td>
                        <td>
                          <a className="dl-pill ms" href={r.ms} target="_blank" rel="noopener">
                            <svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>
                            Mark scheme
                          </a>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
            <div className="table-note">Sources: <a href="https://www.paperlords.org" target="_blank" rel="noopener">Paperlords</a> · Pearson Edexcel.</div>
          </>
        )}

        {tab === 'topics' && (
          <>
            <input
              className="search-topics"
              placeholder="Filter chapters…"
              value={chSearch}
              onChange={e => setChSearch(e.target.value)}
            />
            <div className="ch-grid">
              {chapters.map(c => (
                <div key={c.n} className="ch-card">
                  <div className="ch-num">Chapter {c.n}</div>
                  <div className="ch-name">{c.name}</div>
                  <div className="ch-links">
                    {c.pmt && <TopicLink cls="pmt" label="PMT" url={c.pmt} />}
                    {c.corbett && <TopicLink cls="corbett" label="ExamSolutions" url={c.corbett} />}
                    {c.sme && <TopicLink cls="sme" label="Save My Exams" url={c.sme} />}
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {tab === 'formula' && (
          <div className="note-bar">
            <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
            Upload the formula booklet for this unit and link it here.
          </div>
        )}

        {tab === 'spec' && (
          <div className="note-bar">
            <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
            Link to the official IAL specification PDF here.
          </div>
        )}
      </div>
    </div>
  );
}

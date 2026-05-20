import { useState } from 'react';
import type { View } from '../App';
import { PAPERS } from '../data/papers';
import { CHAPTERS_4PM1 } from '../data/chapters';
import { PillPair, TopicLink } from '../components/PillPair';
import { ChapterLinksRow } from '../components/TopicLinks';
import { FreqBadge } from '../components/FreqBadge';

type Tab = 'topics' | 'papers' | 'notes';
type SeriesFilter = 'all' | 'jan' | 'jun';

interface Props { onNav: (v: View) => void; }

export function IGCSE4PM1({ onNav }: Props) {
  const [tab, setTab] = useState<Tab>('topics');
  const [seriesFilter, setSeriesFilter] = useState<SeriesFilter>('all');
  const [chSearch, setChSearch] = useState('');

  const papers = PAPERS['4pm1'].filter(r => seriesFilter === 'all' || r.s === seriesFilter);
  const chapters = CHAPTERS_4PM1.filter(c =>
    chSearch === '' ||
    c.name.toLowerCase().includes(chSearch.toLowerCase()) ||
    `chapter ${c.n}`.includes(chSearch.toLowerCase())
  );

  return (
    <div className="view-enter" style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
      <div className="pg-header">
        <div className="pg-breadcrumb">
          <a onClick={() => onNav('home')}>Home</a>
          <span>›</span>
          <span>IGCSE Further Pure Maths</span>
        </div>
        <div className="pg-title-row">
          <div className="pg-title">IGCSE Further Pure Maths</div>
          <span className="pg-chip purple">4PM1</span>
          <span className="pg-chip">Edexcel</span>
          <span className="pg-chip">Single tier</span>
        </div>
        <div className="tabs">
          {(['topics','papers','notes'] as Tab[]).map(t => (
            <div key={t} className={`tab${tab === t ? ' active' : ''}`} onClick={() => setTab(t)}>
              {t === 'topics' ? 'Topic practice' : t === 'papers' ? 'Past papers' : 'Notes'}
            </div>
          ))}
        </div>
      </div>

      <div className="pg-body">
        {tab === 'topics' && (
          <>
            <input
              className="search-topics"
              placeholder="Filter chapters…"
              value={chSearch}
              onChange={e => setChSearch(e.target.value)}
            />
            <div className="freq-legend">
              <span className="freq-legend-title">Frequency in exam:</span>
              <span className="freq-legend-item"><span className="freq-dot" style={{ background: '#EF4444' }} />Very high</span>
              <span className="freq-legend-item"><span className="freq-dot" style={{ background: '#F59E0B' }} />High</span>
              <span className="freq-legend-item"><span className="freq-dot" style={{ background: '#3B82F6' }} />Medium</span>
              <span className="freq-legend-item"><span className="freq-dot" style={{ background: '#9CA3AF' }} />Low</span>
            </div>
            <div className="ch-grid">
              {chapters.map(c => (
                <div key={c.n} className="ch-card">
                  <div className="ch-card-top">
                    <div>
                      <div className="ch-num">Chapter {c.n}</div>
                      <div className="ch-name">{c.name}</div>
                    </div>
                    {c.freq && <FreqBadge freq={c.freq} />}
                  </div>
                  {c.note && <div className="topic-note" style={{ margin: 0 }}>{c.note}</div>}
                  <ChapterLinksRow links={c.links} />
                </div>
              ))}
            </div>
          </>
        )}

        {tab === 'papers' && (
          <>
            <div className="filter-row">
              <span className="filter-label">Series:</span>
              {(['all','jan','jun'] as SeriesFilter[]).map(s => (
                <span key={s} className={`filter-chip${seriesFilter === s ? ' on' : ''}`} onClick={() => setSeriesFilter(s)}>
                  {s === 'all' ? 'All' : s === 'jan' ? 'January' : 'June'}
                </span>
              ))}
            </div>
            <div className="papers-wrap">
              <table className="papers-table">
                <thead>
                  <tr>
                    <th style={{ width: 60 }}>Year</th>
                    <th style={{ width: 100 }}>Series</th>
                    <th>Paper 1</th>
                    <th>Paper 2</th>
                  </tr>
                </thead>
                <tbody>
                  {papers.map((r, i) => (
                    <tr key={i}>
                      <td className="year">{r.year}</td>
                      <td className="series">{r.series}</td>
                      <td><PillPair pUrl={r.p1} msUrl={r.ms1} /></td>
                      <td><PillPair pUrl={r.p2} msUrl={r.ms2} /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="table-note">Sources: <a href="https://www.paperlords.org/igcse" target="_blank" rel="noopener">Paperlords</a> · Pearson Edexcel.</div>
          </>
        )}

        {tab === 'notes' && (
          <>
            <div className="note-bar">
              <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
              External revision notes for IGCSE Further Pure Maths.
            </div>
            <div className="ch-grid">
              <div className="ch-card">
                <div className="ch-name">Physics &amp; Maths Tutor — 4PM1 notes</div>
                <div className="ch-links">
                  <TopicLink cls="pmt" label="Open PMT" url="https://www.physicsandmathstutor.com/maths-revision/igcse-edexcel/further-pure/" />
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

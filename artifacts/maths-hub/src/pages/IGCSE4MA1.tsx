import { useState } from 'react';
import type { View } from '../App';
import { PAPERS } from '../data/papers';
import { TOPICS_4MA1 } from '../data/topics';
import { PillPair, TopicLink } from '../components/PillPair';
import { FreqBadge } from '../components/FreqBadge';

type Tab = 'papers' | 'topics' | 'notes' | 'formula' | 'spec';
type SeriesFilter = 'all' | 'jan' | 'jun' | 'nov';

interface Props { onNav: (v: View) => void; }

export function IGCSE4MA1({ onNav }: Props) {
  const [tab, setTab] = useState<Tab>('papers');
  const [seriesFilter, setSeriesFilter] = useState<SeriesFilter>('all');
  const [topicSearch, setTopicSearch] = useState('');

  const papers = PAPERS['4ma1'].filter(r => seriesFilter === 'all' || r.s === seriesFilter);

  const filteredStrands = TOPICS_4MA1.map(strand => ({
    ...strand,
    topics: strand.topics.filter(t =>
      topicSearch === '' || t.name.toLowerCase().includes(topicSearch.toLowerCase())
    ),
  })).filter(s => s.topics.length > 0);

  return (
    <div className="view-enter" style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
      <div className="pg-header">
        <div className="pg-breadcrumb">
          <a onClick={() => onNav('home')}>Home</a>
          <span>›</span>
          <span>IGCSE Mathematics A</span>
        </div>
        <div className="pg-title-row">
          <div className="pg-title">IGCSE Mathematics A</div>
          <span className="pg-chip blue">4MA1</span>
          <span className="pg-chip">Edexcel</span>
          <span className="pg-chip">Higher tier</span>
        </div>
        <div className="tabs">
          {(['papers','topics','notes','formula','spec'] as Tab[]).map(t => (
            <div key={t} className={`tab${tab === t ? ' active' : ''}`} onClick={() => setTab(t)}>
              {t === 'papers' ? 'Past papers' : t === 'topics' ? 'Topic practice' : t === 'notes' ? 'Notes' : t === 'formula' ? 'Formula sheet' : 'Specification'}
            </div>
          ))}
        </div>
      </div>

      <div className="pg-body">
        {tab === 'papers' && (
          <>
            <div className="filter-row">
              <span className="filter-label">Series:</span>
              {(['all','jan','jun','nov'] as SeriesFilter[]).map(s => (
                <span key={s} className={`filter-chip${seriesFilter === s ? ' on' : ''}`} onClick={() => setSeriesFilter(s)}>
                  {s === 'all' ? 'All' : s === 'jan' ? 'January' : s === 'jun' ? 'June' : 'November'}
                </span>
              ))}
            </div>
            <div className="papers-wrap">
              <table className="papers-table">
                <thead>
                  <tr>
                    <th style={{ width: 60 }}>Year</th>
                    <th style={{ width: 100 }}>Series</th>
                    <th>Paper 1H</th>
                    <th>Paper 2H</th>
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

        {tab === 'topics' && (
          <>
            <input
              className="search-topics"
              placeholder="Filter topics, e.g. trigonometry, quadratic, vectors…"
              value={topicSearch}
              onChange={e => setTopicSearch(e.target.value)}
            />
            <div className="freq-legend">
              <span className="freq-legend-title">Frequency in exam:</span>
              <span className="freq-legend-item"><span className="freq-dot" style={{ background: '#EF4444' }} />Very high — guaranteed almost every paper</span>
              <span className="freq-legend-item"><span className="freq-dot" style={{ background: '#F59E0B' }} />High — most series</span>
              <span className="freq-legend-item"><span className="freq-dot" style={{ background: '#3B82F6' }} />Medium — roughly half</span>
              <span className="freq-legend-item"><span className="freq-dot" style={{ background: '#9CA3AF' }} />Low — occasional</span>
            </div>
            {filteredStrands.map(strand => (
              <div key={strand.strand} className="strand-section">
                <div className="strand-title-row">
                  <div className="strand-name">{strand.strand}</div>
                  <span className="strand-pct" style={{ background: strand.strandFill, color: strand.strandColor }}>{strand.strandPct}% of marks</span>
                </div>
                <div className="strand-bar-wrap">
                  <div className="strand-bar-bg">
                    <div className="strand-bar-fill" style={{ width: `${strand.strandPct * 2.5}%`, background: strand.strandColor }} />
                  </div>
                  <span className="strand-bar-label">~{strand.strandPct}/100 marks per paper</span>
                </div>
                <div className="strand-desc">{strand.strandDesc}</div>
                <div className="topic-grid">
                  {strand.topics.map(t => (
                    <div key={t.name} className="topic-card">
                      <div className="topic-card-top">
                        <div className="topic-name">{t.name}</div>
                        <FreqBadge freq={t.freq} pct={t.pct} />
                      </div>
                      <div className="topic-note">{t.note}</div>
                      <div className="topic-links">
                        {t.corbett && <TopicLink cls="corbett" label="Corbett" url={t.corbett} />}
                        {t.genie && <TopicLink cls="genie" label="Maths Genie" url={t.genie} />}
                        {t.epp && <TopicLink cls="epp" label="Exam Papers Practice" url={t.epp} />}
                        {t.sme && <TopicLink cls="sme" label="Save My Exams" url={t.sme} />}
                        {t.pmt && <TopicLink cls="pmt" label="PMT" url={t.pmt} />}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </>
        )}

        {tab === 'notes' && (
          <>
            <div className="note-bar">
              <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
              Upload your hosted revision notes as PDFs and link them here. External links below.
            </div>
            <div className="ch-grid">
              <div className="ch-card">
                <div className="ch-name">Physics &amp; Maths Tutor — IGCSE notes</div>
                <div className="ch-links">
                  <TopicLink cls="pmt" label="Open PMT" url="https://www.physicsandmathstutor.com/maths-revision/igcse-edexcel/" />
                </div>
              </div>
              <div className="ch-card">
                <div className="ch-name">Save My Exams — revision notes</div>
                <div className="ch-links">
                  <TopicLink cls="sme" label="Open SME" url="https://www.savemyexams.com/igcse/maths/edexcel/a/17/revision-notes/" />
                </div>
              </div>
            </div>
          </>
        )}

        {tab === 'formula' && (
          <div className="note-bar">
            <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
            Link your hosted formula sheet PDF here.
          </div>
        )}

        {tab === 'spec' && (
          <div className="ch-grid">
            <div className="ch-card">
              <div className="ch-name">Official specification (2016–)</div>
              <div className="ch-links">
                <TopicLink cls="pmt" label="Download PDF" url="https://qualifications.pearson.com/content/dam/pdf/International%20GCSE/Mathematics%20A/2016/Specification%20and%20sample%20assessments/international-gcse-in-mathematics-spec-a.pdf" />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

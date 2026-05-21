import { useMemo, useState } from 'react';
import type { View } from '../App';
import { MODULE_INFO } from '../data/modules';
import { IAL_CHAPTERS } from '../data/chapters';
import { TopicLink } from '../components/PillPair';
import { ChapterLinksRow } from '../components/TopicLinks';

export type ModuleKey = 'P1' | 'P2' | 'P3' | 'P4' | 'FP1' | 'FP2' | 'S1' | 'S2' | 'S3' | 'D1' | 'M1' | 'M2';

type Tab = 'topics' | 'papers' | 'notes';

interface Props {
  mod: ModuleKey;
  parent: 'ial-maths' | 'ial-fm';
  onNav: (v: View) => void;
}

export function ModuleDetail({ mod, parent, onNav }: Props) {
  const [tab, setTab] = useState<Tab>('topics');
  const [yearFilter, setYearFilter] = useState<'all' | number>('all');
  const [seriesFilter, setSeriesFilter] = useState<'all' | 'jan' | 'jun' | 'oct'>('all');
  const [sourceFilter, setSourceFilter] = useState<'all' | string>('all');
  const [chSearch, setChSearch] = useState('');

  const info = MODULE_INFO[mod];
  if (!info) return null;

  const allPapers = info.papers.filter(r => r.questionPaperUrl || r.markSchemeUrl);

  const years = useMemo(() => Array.from(new Set(allPapers.map(r => r.year))).sort((a, b) => b - a), [allPapers]);
  const sources = useMemo(() => Array.from(new Set(allPapers.map(r => r.source))), [allPapers]);

  const papers = allPapers.filter(r =>
    (yearFilter === 'all' || r.year === yearFilter) &&
    (seriesFilter === 'all' || r.s === seriesFilter) &&
    (sourceFilter === 'all' || r.source === sourceFilter)
  );

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
          {(['topics','papers','notes'] as Tab[]).map(t => (
            <div key={t} className={`tab${tab === t ? ' active' : ''}`} onClick={() => setTab(t)}>
              {t === 'topics' ? 'Chapter practice' : t === 'papers' ? 'Past papers' : 'Notes'}
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
            <div className="ch-grid">
              {chapters.map(c => (
                <div key={c.n} className="ch-card">
                  <div className="ch-num">Chapter {c.n}</div>
                  <div className="ch-name">{c.name}</div>
                  <ChapterLinksRow links={c.links} />
                </div>
              ))}
            </div>
          </>
        )}

        {tab === 'papers' && (
          <>
            <div className="filter-row">
              <span className="filter-label">Year:</span>
              <span className={`filter-chip${yearFilter === 'all' ? ' on' : ''}`} onClick={() => setYearFilter('all')}>All</span>
              {years.map(y => (
                <span key={y} className={`filter-chip${yearFilter === y ? ' on' : ''}`} onClick={() => setYearFilter(y)}>{y}</span>
              ))}
            </div>
            <div className="filter-row">
              <span className="filter-label">Series:</span>
              {(['all','jan','jun','oct'] as const).map(s => (
                <span key={s} className={`filter-chip${seriesFilter === s ? ' on' : ''}`} onClick={() => setSeriesFilter(s)}>
                  {s === 'all' ? 'All' : s === 'jan' ? 'January' : s === 'jun' ? 'June' : 'October'}
                </span>
              ))}
            </div>
            {sources.length > 1 && (
              <div className="filter-row">
                <span className="filter-label">Source:</span>
                <span className={`filter-chip${sourceFilter === 'all' ? ' on' : ''}`} onClick={() => setSourceFilter('all')}>All</span>
                {sources.map(src => (
                  <span key={src} className={`filter-chip${sourceFilter === src ? ' on' : ''}`} onClick={() => setSourceFilter(src)}>{src}</span>
                ))}
              </div>
            )}
            <div className="papers-wrap">
              <table className="papers-table">
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
                        No papers match the current filters.
                      </td>
                    </tr>
                  ) : (
                    papers.map((r, i) => (
                      <tr key={i}>
                        <td className="year">{r.year}</td>
                        <td className="series">{r.series}</td>
                        <td>
                          {r.questionPaperUrl ? (
                            <a className="dl-pill paper" href={r.questionPaperUrl} target="_blank" rel="noopener noreferrer">
                              <svg viewBox="0 0 24 24"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                              Question Paper
                            </a>
                          ) : null}
                        </td>
                        <td>
                          {r.markSchemeUrl ? (
                            <a className="dl-pill ms" href={r.markSchemeUrl} target="_blank" rel="noopener noreferrer">
                              <svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>
                              Mark Scheme
                            </a>
                          ) : null}
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
            <div className="table-note">
              Sources: Pearson Edexcel official PDFs where verified; Physics &amp; Maths Tutor as fallback.
              2025 series papers are not yet released publicly and have been omitted.
            </div>
          </>
        )}

        {tab === 'notes' && (
          <>
            <div className="note-bar">
              <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
              External revision notes for {mod}.
            </div>
            <div className="ch-grid">
              <div className="ch-card">
                <div className="ch-name">Physics &amp; Maths Tutor — {mod} notes</div>
                <div className="ch-links">
                  <TopicLink cls="pmt" label="Open PMT" url={`https://www.physicsandmathstutor.com/maths-revision/a-level-edexcel-international/${mod.toLowerCase()}/`} />
                </div>
              </div>
              <div className="ch-card">
                <div className="ch-name">ExamSolutions — Edexcel IAL</div>
                <div className="ch-links">
                  <TopicLink cls="corbett" label="Open ExamSolutions" url="https://www.examsolutions.net/international-exams/edexcel/" />
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

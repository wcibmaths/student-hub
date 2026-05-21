import { useMemo, useState } from 'react';
import type { View } from '../App';
import { PAPERS } from '../data/papers';
import { MODULE_INFO } from '../data/modules';

interface Props {
  onNav: (v: View) => void;
}

type Programme = 'all' | 'igcse-4ma1' | 'igcse-4pm1' | 'ial-maths' | 'ial-fm';
type SeriesKey = 'all' | 'jan' | 'jun' | 'oct' | 'nov';

interface Row {
  programme: string;
  programmeKey: Programme;
  unit: string;
  year: number;
  series: string;
  s: SeriesKey;
  qp: string;
  ms: string;
}

function flatten(): Row[] {
  const rows: Row[] = [];

  const igcseEntries: Array<{ key: 'igcse-4ma1' | 'igcse-4pm1'; label: string; code: string }> = [
    { key: 'igcse-4ma1', label: 'IGCSE Mathematics A', code: '4ma1' },
    { key: 'igcse-4pm1', label: 'IGCSE Further Pure', code: '4pm1' },
  ];
  for (const { key, label, code } of igcseEntries) {
    const papers = PAPERS[code] || [];
    for (const p of papers) {
      const unitBase = code.toUpperCase();
      rows.push({
        programme: label, programmeKey: key,
        unit: `${unitBase} Paper 1H`, year: p.year, series: p.series, s: p.s as SeriesKey,
        qp: p.p1, ms: p.ms1,
      });
      rows.push({
        programme: label, programmeKey: key,
        unit: `${unitBase} Paper 2H`, year: p.year, series: p.series, s: p.s as SeriesKey,
        qp: p.p2, ms: p.ms2,
      });
    }
  }

  const ialMathsUnits = new Set(['P1','P2','P3','P4','S1','M1','D1']);
  for (const [mod, info] of Object.entries(MODULE_INFO)) {
    const isIalMaths = ialMathsUnits.has(mod);
    for (const p of info.papers) {
      rows.push({
        programme: isIalMaths ? 'IAL Mathematics' : 'IAL Further Mathematics',
        programmeKey: isIalMaths ? 'ial-maths' : 'ial-fm',
        unit: mod, year: p.year, series: p.series, s: p.s as SeriesKey,
        qp: p.questionPaperUrl, ms: p.markSchemeUrl,
      });
    }
  }
  return rows.filter(r => r.qp || r.ms);
}

export function AllPastPapers({ onNav }: Props) {
  const allRows = useMemo(flatten, []);

  const [programme, setProgramme] = useState<Programme>('all');
  const [unit, setUnit] = useState<string>('all');
  const [year, setYear] = useState<'all' | number>('all');
  const [series, setSeries] = useState<SeriesKey>('all');
  const [q, setQ] = useState('');

  const scoped = allRows.filter(r => programme === 'all' || r.programmeKey === programme);
  const units = useMemo(() => Array.from(new Set(scoped.map(r => r.unit))).sort(), [scoped]);
  const years = useMemo(() => Array.from(new Set(allRows.map(r => r.year))).sort((a, b) => b - a), [allRows]);

  const rows = scoped.filter(r =>
    (unit === 'all' || r.unit === unit) &&
    (year === 'all' || r.year === year) &&
    (series === 'all' || r.s === series) &&
    (q === '' ||
      r.unit.toLowerCase().includes(q.toLowerCase()) ||
      String(r.year).includes(q) ||
      r.series.toLowerCase().includes(q.toLowerCase()) ||
      r.programme.toLowerCase().includes(q.toLowerCase()))
  ).sort((a, b) => {
    if (a.year !== b.year) return b.year - a.year;
    const ord = { jan: 1, jun: 2, oct: 3, nov: 4, all: 5 };
    if (a.s !== b.s) return ord[a.s] - ord[b.s];
    return a.unit.localeCompare(b.unit);
  });

  return (
    <div className="view-enter" style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
      <div className="pg-header">
        <div className="pg-breadcrumb">
          <a onClick={() => onNav('home')}>Home</a>
          <span>›</span>
          <span>All past papers</span>
        </div>
        <div className="pg-title-row">
          <div className="pg-title">All past papers</div>
          <span className="pg-chip">{allRows.length} papers</span>
        </div>
      </div>

      <div className="pg-body">
        <input
          className="search-topics"
          placeholder="Search by unit, year or series…"
          value={q}
          onChange={e => setQ(e.target.value)}
        />

        <div className="filter-row">
          <span className="filter-label">Programme:</span>
          {([
            ['all', 'All'],
            ['igcse-4ma1', 'IGCSE 4MA1'],
            ['igcse-4pm1', 'IGCSE 4PM1'],
            ['ial-maths', 'IAL Maths'],
            ['ial-fm', 'IAL Further Maths'],
          ] as [Programme, string][]).map(([k, lbl]) => (
            <span key={k} className={`filter-chip${programme === k ? ' on' : ''}`} onClick={() => { setProgramme(k); setUnit('all'); }}>{lbl}</span>
          ))}
        </div>

        <div className="filter-row">
          <span className="filter-label">Unit:</span>
          <span className={`filter-chip${unit === 'all' ? ' on' : ''}`} onClick={() => setUnit('all')}>All</span>
          {units.map(u => (
            <span key={u} className={`filter-chip${unit === u ? ' on' : ''}`} onClick={() => setUnit(u)}>{u}</span>
          ))}
        </div>

        <div className="filter-row">
          <span className="filter-label">Year:</span>
          <span className={`filter-chip${year === 'all' ? ' on' : ''}`} onClick={() => setYear('all')}>All</span>
          {years.map(y => (
            <span key={y} className={`filter-chip${year === y ? ' on' : ''}`} onClick={() => setYear(y)}>{y}</span>
          ))}
        </div>

        <div className="filter-row">
          <span className="filter-label">Series:</span>
          {([
            ['all', 'All'], ['jan', 'January'], ['jun', 'June'], ['oct', 'October'], ['nov', 'November'],
          ] as [SeriesKey, string][]).map(([k, lbl]) => (
            <span key={k} className={`filter-chip${series === k ? ' on' : ''}`} onClick={() => setSeries(k)}>{lbl}</span>
          ))}
        </div>

        <div className="papers-wrap">
          <table className="papers-table">
            <thead>
              <tr>
                <th>Programme</th>
                <th>Unit / paper</th>
                <th style={{ width: 60 }}>Year</th>
                <th style={{ width: 100 }}>Series</th>
                <th>Question paper</th>
                <th>Mark scheme</th>
              </tr>
            </thead>
            <tbody>
              {rows.length === 0 ? (
                <tr>
                  <td colSpan={6} style={{ padding: '24px 10px', color: 'var(--ink3)', fontSize: 12 }}>
                    No papers match the current filters.
                  </td>
                </tr>
              ) : (
                rows.map((r, i) => (
                  <tr key={i}>
                    <td className="series" style={{ fontSize: 11 }}>{r.programme}</td>
                    <td className="series">{r.unit}</td>
                    <td className="year">{r.year}</td>
                    <td className="series">{r.series}</td>
                    <td>
                      {r.qp ? (
                        <a className="dl-pill paper" href={r.qp} target="_blank" rel="noopener noreferrer">
                          <svg viewBox="0 0 24 24"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                          Question Paper
                        </a>
                      ) : null}
                    </td>
                    <td>
                      {r.ms ? (
                        <a className="dl-pill ms" href={r.ms} target="_blank" rel="noopener noreferrer">
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
        <div className="table-note">Showing {rows.length} of {allRows.length} available papers.</div>
      </div>
    </div>
  );
}

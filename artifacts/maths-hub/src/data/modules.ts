import type { IALPaper } from './papers';

export type ModuleColor = 'blue' | 'purple' | 'green' | 'amber';
export type ModuleType = 'pure' | 'fp' | 'stats' | 'applied';

export interface ModuleInfo {
  title: string;
  code: string;
  color: ModuleColor;
  type: ModuleType;
  papers: IALPaper[];
}

export const MODULE_INFO: Record<string, ModuleInfo> = {
  P1: { title: 'P1 — Pure Mathematics 1', code: 'WMA11', color: 'blue', type: 'pure', papers: [
    { year: 2024, series: 'January', s: 'jan', p: 'https://www.paperlords.org', ms: '#' },
    { year: 2023, series: 'October', s: 'oct', p: 'https://www.paperlords.org', ms: '#' },
    { year: 2023, series: 'June', s: 'jun', p: 'https://www.paperlords.org', ms: '#' },
    { year: 2023, series: 'January', s: 'jan', p: 'https://www.paperlords.org', ms: '#' },
    { year: 2022, series: 'October', s: 'oct', p: 'https://www.paperlords.org', ms: '#' },
    { year: 2022, series: 'June', s: 'jun', p: 'https://www.paperlords.org', ms: '#' },
    { year: 2021, series: 'October', s: 'oct', p: 'https://www.paperlords.org', ms: '#' },
    { year: 2021, series: 'June', s: 'jun', p: 'https://www.paperlords.org', ms: '#' },
    { year: 2021, series: 'January', s: 'jan', p: 'https://www.paperlords.org', ms: '#' },
  ]},
  P2: { title: 'P2 — Pure Mathematics 2', code: 'WMA12', color: 'blue', type: 'pure', papers: [] },
  P3: { title: 'P3 — Pure Mathematics 3', code: 'WMA13', color: 'blue', type: 'pure', papers: [] },
  P4: { title: 'P4 — Pure Mathematics 4', code: 'WMA14', color: 'blue', type: 'pure', papers: [] },
  FP1: { title: 'FP1 — Further Pure Mathematics 1', code: 'WFM01', color: 'purple', type: 'fp', papers: [] },
  FP2: { title: 'FP2 — Further Pure Mathematics 2', code: 'WFM02', color: 'purple', type: 'fp', papers: [] },
  S1: { title: 'S1 — Statistics 1', code: 'WST01', color: 'green', type: 'stats', papers: [] },
  S2: { title: 'S2 — Statistics 2', code: 'WST02', color: 'green', type: 'stats', papers: [] },
  S3: { title: 'S3 — Statistics 3', code: 'WST03', color: 'green', type: 'stats', papers: [] },
  D1: { title: 'D1 — Decision Mathematics 1', code: 'WDM11', color: 'amber', type: 'applied', papers: [] },
  M1: { title: 'M1 — Mechanics 1', code: 'WME01', color: 'amber', type: 'applied', papers: [] },
  M2: { title: 'M2 — Mechanics 2', code: 'WME02', color: 'amber', type: 'applied', papers: [] },
};

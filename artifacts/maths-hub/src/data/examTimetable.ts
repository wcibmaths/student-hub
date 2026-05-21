/**
 * Pearson Edexcel exam timetable, filtered to the Thailand region only.
 *
 * Source: official Pearson International timetable PDFs. Thailand is part
 * of Pearson's Asia-Pacific / International region. These PDFs publish a
 * single calendar date for every international centre; only the session
 * start time varies by timezone (see Pearson's "Examination starting times
 * for your timezone" document for Thailand-specific clock times).
 *
 * Allowed modules on this hub:
 *   IGCSE Mathematics A (4MA1) — Higher tier only
 *   IGCSE Further Pure Mathematics (4PM1)
 *   IAL: P1–P4 (WMA11–WMA14), S1–S3 (WST01–WST03), M1–M2 (WME01–WME02), D1 (WDM11)
 *
 * Do NOT add UK GCSE, UK A Level, or other domestic dates.
 *
 * To re-audit: open each PDF in SOURCES below, walk through the modules,
 * and update `verified` + `LAST_CHECKED` (ISO YYYY-MM-DD).
 */

export const REGION = 'Thailand' as const;
export const TIMETABLE_REGION = 'Asia-Pacific / International' as const;
export const LAST_CHECKED = '2026-05-21'; // ISO YYYY-MM-DD — update when audited

export const SOURCES = {
  igcse: {
    label: 'Pearson International GCSE timetable',
    url: 'https://qualifications.pearson.com/en/support/support-topics/exams/exam-timetables.html#tab-Internationalcentres',
    pdfs: [
      'int-gcse-summer-2026-final.pdf',
      'intgcse-nov-2026-final.pdf',
    ],
  },
  ial: {
    label: 'Pearson International Advanced Level timetable',
    url: 'https://qualifications.pearson.com/en/support/support-topics/exams/exam-timetables.html#tab-Internationalcentres',
    pdfs: [
      'ial-summer-2026-final.pdf',
      'ial-october2026-final.pdf',
    ],
  },
} as const;

export type ExamSource = keyof typeof SOURCES;

export interface ExamDate {
  /** YYYY-MM-DD */
  date: string;
  /** Short module code, e.g. "4MA1 1H" or "WMA11" */
  code: string;
  /** Long title, e.g. "IGCSE Maths A · Paper 1H" */
  title: string;
  /** Subtitle, e.g. "2h 00m · Higher tier" */
  subtitle?: string;
  /** Which Pearson timetable this came from */
  source: ExamSource;
  /** True if cross-checked against the official Pearson International timetable */
  verified: boolean;
  /** The series this date belongs to, e.g. "May–June 2026" */
  series: string;
}

export const ALLOWED_CODES = [
  '4MA1', '4PM1',
  'WMA11', 'WMA12', 'WMA13', 'WMA14',
  'WST01', 'WST02', 'WST03',
  'WME01', 'WME02',
  'WDM11',
] as const;

/**
 * Dates pulled from Pearson International timetable PDFs (May 2026 audit).
 * Sessions (Morning/Afternoon) are UK time — Thailand centres should consult
 * Pearson's timezone-specific starting-times document for local clock times.
 */
export const EXAM_DATES: ExamDate[] = [
  // ── May–June 2026 IGCSE ─────────────────────────────────────────────
  { date: '2026-06-03', code: '4MA1 2H', title: 'IGCSE Maths A · Paper 2H', subtitle: '2h 00m · Higher tier', source: 'igcse', verified: true, series: 'May–June 2026' },
  { date: '2026-06-04', code: '4PM1 02', title: 'IGCSE Further Pure Maths · Paper 2', subtitle: '2h 00m', source: 'igcse', verified: true, series: 'May–June 2026' },

  // ── May–June 2026 IAL ───────────────────────────────────────────────
  { date: '2026-06-02', code: 'WMA13', title: 'IAL · P3 Pure Mathematics 3', subtitle: '1h 30m', source: 'ial', verified: true, series: 'May–June 2026' },
  { date: '2026-06-03', code: 'WME02', title: 'IAL · M2 Mechanics 2', subtitle: '1h 30m', source: 'ial', verified: true, series: 'May–June 2026' },
  { date: '2026-06-05', code: 'WST02', title: 'IAL · S2 Statistics 2', subtitle: '1h 30m', source: 'ial', verified: true, series: 'May–June 2026' },
  { date: '2026-06-09', code: 'WMA14', title: 'IAL · P4 Pure Mathematics 4', subtitle: '1h 30m', source: 'ial', verified: true, series: 'May–June 2026' },
  { date: '2026-06-12', code: 'WST03', title: 'IAL · S3 Statistics 3', subtitle: '1h 30m', source: 'ial', verified: true, series: 'May–June 2026' },

  // ── October 2026 IAL ────────────────────────────────────────────────
  { date: '2026-10-09', code: 'WMA11', title: 'IAL · P1 Pure Mathematics 1', subtitle: '1h 30m', source: 'ial', verified: true, series: 'October 2026' },
  { date: '2026-10-13', code: 'WME01', title: 'IAL · M1 Mechanics 1', subtitle: '1h 30m', source: 'ial', verified: true, series: 'October 2026' },
  { date: '2026-10-15', code: 'WMA12', title: 'IAL · P2 Pure Mathematics 2', subtitle: '1h 30m', source: 'ial', verified: true, series: 'October 2026' },
  { date: '2026-10-19', code: 'WST01', title: 'IAL · S1 Statistics 1', subtitle: '1h 30m', source: 'ial', verified: true, series: 'October 2026' },
  { date: '2026-10-21', code: 'WMA13', title: 'IAL · P3 Pure Mathematics 3', subtitle: '1h 30m', source: 'ial', verified: true, series: 'October 2026' },
  { date: '2026-10-22', code: 'WME02', title: 'IAL · M2 Mechanics 2', subtitle: '1h 30m', source: 'ial', verified: true, series: 'October 2026' },
  { date: '2026-10-26', code: 'WST02', title: 'IAL · S2 Statistics 2', subtitle: '1h 30m', source: 'ial', verified: true, series: 'October 2026' },
  { date: '2026-10-28', code: 'WMA14', title: 'IAL · P4 Pure Mathematics 4', subtitle: '1h 30m', source: 'ial', verified: true, series: 'October 2026' },

  // ── November 2026 IGCSE ─────────────────────────────────────────────
  { date: '2026-10-30', code: '4PM1 01', title: 'IGCSE Further Pure Maths · Paper 1', subtitle: '2h 00m', source: 'igcse', verified: true, series: 'November 2026' },
  { date: '2026-11-04', code: '4MA1 1H', title: 'IGCSE Maths A · Paper 1H', subtitle: '2h 00m · Higher tier', source: 'igcse', verified: true, series: 'November 2026' },
  { date: '2026-11-06', code: '4MA1 2H', title: 'IGCSE Maths A · Paper 2H', subtitle: '2h 00m · Higher tier', source: 'igcse', verified: true, series: 'November 2026' },
  { date: '2026-11-10', code: '4PM1 02', title: 'IGCSE Further Pure Maths · Paper 2', subtitle: '2h 00m', source: 'igcse', verified: true, series: 'November 2026' },
];

export function getUpcomingThailandExams(now: Date = new Date()): ExamDate[] {
  const today = now.toISOString().slice(0, 10);
  return EXAM_DATES
    .filter(e => ALLOWED_CODES.some(c => e.code.startsWith(c)))
    .filter(e => e.date >= today)
    .sort((a, b) => a.date.localeCompare(b.date));
}

export function hasVerifiedThailandExams(): boolean {
  return EXAM_DATES.some(e => e.verified);
}

export function formatLastChecked(iso: string = LAST_CHECKED): string {
  const d = new Date(iso + 'T00:00:00');
  return d.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
}

export function formatExamDay(iso: string): { day: string; month: string } {
  const d = new Date(iso + 'T00:00:00');
  return {
    day: String(d.getDate()).padStart(2, '0'),
    month: d.toLocaleDateString('en-GB', { month: 'short' }).toUpperCase(),
  };
}

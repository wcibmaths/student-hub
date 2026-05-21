/**
 * Pearson Edexcel exam timetable, filtered to the Thailand region only.
 *
 * IMPORTANT — this data must come from the official Pearson "International"
 * timetable PDFs, not UK domestic timetables.
 *
 *  - International GCSE timetable (covers 4MA1, 4PM1)
 *  - International Advanced Level timetable (covers IAL P1–P4, S1–S3, M1–M2, D1)
 *
 * Thailand is part of Pearson's Asia-Pacific / International timetable region.
 * Do NOT add UK-only GCSE or UK A Level dates.
 *
 * For each entry, set `verified: true` ONLY after confirming the date against
 * the official Pearson International timetable PDF that explicitly covers
 * Thailand (Asia-Pacific region). If you cannot confirm, leave `verified: false`
 * and the UI will display the "needs verification" warning.
 *
 * To update:
 *   1. Open the relevant Pearson International timetable PDF (link below).
 *   2. Locate Thailand under the Asia-Pacific region.
 *   3. For each module in MODULES below, copy the date and set verified: true.
 *   4. Update `LAST_CHECKED` to today's date.
 */

export const REGION = 'Thailand' as const;
export const TIMETABLE_REGION = 'Asia-Pacific / International' as const;
export const LAST_CHECKED = '2026-05-21'; // ISO YYYY-MM-DD — update when audited

export const SOURCES = {
  igcse: {
    label: 'Pearson International GCSE timetable',
    url: 'https://qualifications.pearson.com/en/support/support-topics/exams/exam-timetables.html',
    file: 'international-gcse-timetable.pdf',
  },
  ial: {
    label: 'Pearson International Advanced Level timetable',
    url: 'https://qualifications.pearson.com/en/support/support-topics/exams/exam-timetables.html',
    file: 'international-advanced-level-timetable.pdf',
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
  /** Subtitle, e.g. "Morning · 2 hours" */
  subtitle?: string;
  /** Which Pearson timetable this came from */
  source: ExamSource;
  /** True if cross-checked against the official Pearson Thailand timetable */
  verified: boolean;
  /** The series this date belongs to, e.g. "May–June 2026" */
  series: string;
}

/**
 * Allowed modules — only these qualifications appear on the maths hub:
 *   IGCSE Mathematics A (4MA1)
 *   IGCSE Further Pure Mathematics (4PM1)
 *   IAL: P1–P4, S1–S3, M1–M2, D1
 */
export const ALLOWED_CODES = [
  '4MA1', '4PM1',
  'WMA11', 'WMA12', 'WMA13', 'WMA14', // P1–P4
  'WST01', 'WST02', 'WST03',          // S1–S3
  'WME01', 'WME02',                   // M1–M2
  'WDM11',                            // D1
] as const;

/**
 * EXAM_DATES — populate from the Pearson Thailand (Asia-Pacific) timetable.
 *
 * Until at least one entry is verified, the UI shows the
 * "Exam timetable source needs verification for Thailand region." warning.
 */
export const EXAM_DATES: ExamDate[] = [
  // Example shape — replace with real, verified data from Pearson PDFs.
  // {
  //   date: '2026-05-14',
  //   code: '4MA1 1H',
  //   title: 'IGCSE Maths A · Paper 1H',
  //   subtitle: 'Morning · 2 hours',
  //   source: 'igcse',
  //   verified: true,
  //   series: 'May–June 2026',
  // },
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

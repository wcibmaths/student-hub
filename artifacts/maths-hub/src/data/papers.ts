export type Series = 'jan' | 'jun' | 'nov' | 'oct';

export interface IGCSEPaper {
  year: number;
  series: string;
  s: Series;
  p1: string;
  ms1: string;
  p2: string;
  ms2: string;
}

export type IALSource = 'Pearson' | 'PMT' | 'ExamSolutions';

export interface IALPaper {
  year: number;
  series: string;
  s: Series;
  questionPaperUrl: string;
  markSchemeUrl: string;
  source: IALSource | string;
  status?: string;
}

const P = 'https://qualifications.pearson.com/content/dam/pdf/International-GCSE/Mathematics-A/2016/Exam-materials';
// 2022 papers live under the encoded-space path
const P22 = 'https://qualifications.pearson.com/content/dam/pdf/International%20GCSE/Mathematics%20A/2016/exam-materials';

export const PAPERS: Record<string, IGCSEPaper[]> = {
  '4ma1': [
    { year: 2024, series: 'November', s: 'nov',
      p1: `${P}/4ma1-1h-que-20241107.pdf`, ms1: `${P}/4ma1-1h-rms-20250123.pdf`,
      p2: `${P}/4ma1-2h-que-20241109.pdf`, ms2: `${P}/4ma1-2h-rms-20250123.pdf` },
    { year: 2024, series: 'June', s: 'jun',
      p1: `${P}/4ma1-1h-que-20240517.pdf`, ms1: `${P}/4ma1-1h-rms-20240822.pdf`,
      p2: `${P}/4ma1-2h-que-20240604.pdf`, ms2: `${P}/4ma1-2h-rms-20240822.pdf` },
    { year: 2023, series: 'November', s: 'nov',
      p1: `${P}/4ma1-1h-que-20231109.pdf`, ms1: `${P}/4ma1-1h-rms-20240125.pdf`,
      p2: `${P}/4ma1-2h-que-20231111.pdf`, ms2: `${P}/4ma1-2h-rms-20240125.pdf` },
    { year: 2023, series: 'June', s: 'jun',
      p1: `${P}/4ma1-1h-que-20230520.pdf`, ms1: `${P}/4ma1-1h-rms-20230824.pdf`,
      p2: `${P}/4ma1-2h-que-20230608.pdf`, ms2: `${P}/4ma1-2h-rms-20230824.pdf` },
    { year: 2023, series: 'January', s: 'jan',
      p1: `${P}/4ma1-1h-que-20230111.pdf`, ms1: `${P}/4ma1-1h-rms-20230302.pdf`,
      p2: `${P}/4ma1-2h-que-20230118.pdf`, ms2: `${P}/4ma1-2h-rms-20230302.pdf` },
    { year: 2022, series: 'June', s: 'jun',
      p1: `${P22}/4ma1-1h-que-20220521.pdf`, ms1: `${P22}/4ma1-1h-rms-20220825.pdf`,
      p2: `${P22}/4ma1-2h-que-20220608.pdf`, ms2: `${P22}/4ma1-2h-rms-20220825.pdf` },
    { year: 2022, series: 'January', s: 'jan',
      p1: `${P22}/4MA1_1H_que_20220112.pdf`, ms1: `${P22}/4MA1_1H_rms_20220303.pdf`,
      p2: `${P22}/4MA1_2H_que_20220119.pdf`, ms2: `${P22}/4MA1_2H_rms_20220303.pdf` },
    { year: 2020, series: 'January', s: 'jan',
      p1: '', ms1: `${P22}/4MA1_1H_rms_20200305.pdf`,
      p2: '', ms2: `${P22}/4MA1_2H_rms_20200305.pdf` },
  ],
  '4pm1': [
    { year: 2024, series: 'January', s: 'jan', p1: 'https://www.paperlords.org/igcse', ms1: '#', p2: 'https://www.paperlords.org/igcse', ms2: '#' },
    { year: 2023, series: 'June', s: 'jun', p1: 'https://www.paperlords.org/igcse', ms1: '#', p2: 'https://www.paperlords.org/igcse', ms2: '#' },
    { year: 2023, series: 'January', s: 'jan', p1: 'https://www.paperlords.org/igcse', ms1: '#', p2: 'https://www.paperlords.org/igcse', ms2: '#' },
    { year: 2022, series: 'June', s: 'jun', p1: 'https://www.paperlords.org/igcse', ms1: '#', p2: 'https://www.paperlords.org/igcse', ms2: '#' },
    { year: 2022, series: 'January', s: 'jan', p1: 'https://www.paperlords.org/igcse', ms1: '#', p2: 'https://www.paperlords.org/igcse', ms2: '#' },
    { year: 2019, series: 'June', s: 'jun', p1: 'https://www.paperlords.org/igcse', ms1: '#', p2: 'https://www.paperlords.org/igcse', ms2: '#' },
  ],
};

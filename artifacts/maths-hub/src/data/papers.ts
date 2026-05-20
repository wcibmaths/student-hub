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

export interface IALPaper {
  year: number;
  series: string;
  s: Series;
  p: string;
  ms: string;
}

export const PAPERS: Record<string, IGCSEPaper[]> = {
  '4ma1': [
    { year: 2024, series: 'January', s: 'jan', p1: 'https://www.paperlords.org/igcse', ms1: '#', p2: 'https://www.paperlords.org/igcse', ms2: '#' },
    { year: 2023, series: 'November', s: 'nov', p1: 'https://www.paperlords.org/igcse', ms1: '#', p2: 'https://www.paperlords.org/igcse', ms2: '#' },
    { year: 2023, series: 'June', s: 'jun', p1: 'https://www.paperlords.org/igcse', ms1: '#', p2: 'https://www.paperlords.org/igcse', ms2: '#' },
    { year: 2023, series: 'January', s: 'jan', p1: 'https://www.paperlords.org/igcse', ms1: '#', p2: 'https://www.paperlords.org/igcse', ms2: '#' },
    { year: 2022, series: 'November', s: 'nov', p1: 'https://www.paperlords.org/igcse', ms1: '#', p2: 'https://www.paperlords.org/igcse', ms2: '#' },
    { year: 2022, series: 'June', s: 'jun', p1: 'https://www.paperlords.org/igcse', ms1: '#', p2: 'https://www.paperlords.org/igcse', ms2: '#' },
    { year: 2022, series: 'January', s: 'jan', p1: 'https://www.paperlords.org/igcse', ms1: '#', p2: 'https://www.paperlords.org/igcse', ms2: '#' },
    { year: 2020, series: 'January', s: 'jan', p1: 'https://www.paperlords.org/igcse', ms1: '#', p2: 'https://www.paperlords.org/igcse', ms2: '#' },
    { year: 2019, series: 'November', s: 'nov', p1: 'https://www.paperlords.org/igcse', ms1: '#', p2: 'https://www.paperlords.org/igcse', ms2: '#' },
    { year: 2019, series: 'June', s: 'jun', p1: 'https://www.paperlords.org/igcse', ms1: '#', p2: 'https://www.paperlords.org/igcse', ms2: '#' },
    { year: 2019, series: 'January', s: 'jan', p1: 'https://www.paperlords.org/igcse', ms1: '#', p2: 'https://www.paperlords.org/igcse', ms2: '#' },
    { year: 2018, series: 'November', s: 'nov', p1: 'https://www.paperlords.org/igcse', ms1: '#', p2: 'https://www.paperlords.org/igcse', ms2: '#' },
    { year: 2018, series: 'June', s: 'jun', p1: 'https://www.paperlords.org/igcse', ms1: '#', p2: 'https://www.paperlords.org/igcse', ms2: '#' },
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

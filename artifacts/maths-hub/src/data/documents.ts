export interface DocEntry {
  label: string;
  code?: string;
  url: string;
}

export interface DocGroup {
  title: string;
  subtitle?: string;
  color: 'blue' | 'purple' | 'green' | 'amber';
  items: DocEntry[];
}

// Placeholder URLs — replace with hosted PDFs as they become available.
const PH = '#';

export const FORMULA_SHEETS: DocGroup[] = [
  {
    title: 'IGCSE Mathematics A', color: 'blue', subtitle: '4MA1 · Higher tier',
    items: [
      { label: 'Formula sheet (printed on the exam paper)', code: '4MA1', url: PH },
    ],
  },
  {
    title: 'IGCSE Further Pure Mathematics', color: 'purple', subtitle: '4PM1',
    items: [
      { label: 'Formula sheet (printed on the exam paper)', code: '4PM1', url: PH },
    ],
  },
  {
    title: 'IAL Mathematics', color: 'green', subtitle: 'Shared Edexcel IAL formula booklet',
    items: [
      { label: 'Edexcel IAL Mathematical Formulae and Statistical Tables', url: PH },
      { label: 'P1 — Pure 1', code: 'WMA11', url: PH },
      { label: 'P2 — Pure 2', code: 'WMA12', url: PH },
      { label: 'P3 — Pure 3', code: 'WMA13', url: PH },
      { label: 'P4 — Pure 4', code: 'WMA14', url: PH },
      { label: 'S1 — Statistics 1', code: 'WST01', url: PH },
      { label: 'D1 — Decision Mathematics 1', code: 'WDM11', url: PH },
      { label: 'M1 — Mechanics 1', code: 'WME01', url: PH },
    ],
  },
  {
    title: 'IAL Further Mathematics', color: 'amber', subtitle: 'Additional Further Maths units',
    items: [
      { label: 'FP1 — Further Pure 1', code: 'WFM01', url: PH },
      { label: 'FP2 — Further Pure 2', code: 'WFM02', url: PH },
      { label: 'S2 — Statistics 2', code: 'WST02', url: PH },
      { label: 'S3 — Statistics 3', code: 'WST03', url: PH },
      { label: 'M2 — Mechanics 2', code: 'WME02', url: PH },
    ],
  },
];

export const SPECIFICATIONS: DocGroup[] = [
  {
    title: 'IGCSE Mathematics A', color: 'blue', subtitle: '4MA1 · Higher tier',
    items: [
      { label: 'Official Edexcel specification (2016–)', code: '4MA1',
        url: 'https://qualifications.pearson.com/content/dam/pdf/International%20GCSE/Mathematics%20A/2016/Specification%20and%20sample%20assessments/international-gcse-in-mathematics-spec-a.pdf' },
    ],
  },
  {
    title: 'IGCSE Further Pure Mathematics', color: 'purple', subtitle: '4PM1',
    items: [
      { label: 'Official Edexcel specification (2016–)', code: '4PM1',
        url: 'https://qualifications.pearson.com/content/dam/pdf/International%20GCSE/Further%20Pure%20Mathematics/2016/Specification%20and%20sample%20assessments/international-gcse-in-further-pure-mathematics-spec.pdf' },
    ],
  },
  {
    title: 'IAL Mathematics', color: 'green', subtitle: 'Edexcel International Advanced Level',
    items: [
      { label: 'Official Edexcel IAL Mathematics specification', url: PH },
    ],
  },
  {
    title: 'IAL Further Mathematics', color: 'amber', subtitle: 'Edexcel International Advanced Level',
    items: [
      { label: 'Official Edexcel IAL Further Mathematics specification', url: PH },
    ],
  },
];

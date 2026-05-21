export interface DocLink {
  label: string;
  url: string;
  note?: string;
}

export interface ProgrammeDocs {
  key: 'igcse-4ma1' | 'igcse-4pm1' | 'ial-maths' | 'ial-fm';
  title: string;
  subtitle: string;
  color: 'blue' | 'purple' | 'green' | 'amber';
  formula: DocLink[];
  specification: DocLink[];
}

const PH = '#';

export const PROGRAMME_DOCS: ProgrammeDocs[] = [
  {
    key: 'igcse-4ma1',
    title: 'IGCSE Mathematics A',
    subtitle: 'Edexcel · 4MA1 · Higher tier',
    color: 'blue',
    formula: [
      { label: 'Formula sheet', url: PH, note: 'Printed inside the exam paper — no separate booklet.' },
    ],
    specification: [
      {
        label: 'Official Edexcel specification (2016–)',
        url: 'https://qualifications.pearson.com/content/dam/pdf/International%20GCSE/Mathematics%20A/2016/Specification%20and%20sample%20assessments/international-gcse-in-mathematics-spec-a.pdf',
      },
    ],
  },
  {
    key: 'igcse-4pm1',
    title: 'IGCSE Further Pure Mathematics',
    subtitle: 'Edexcel · 4PM1',
    color: 'purple',
    formula: [
      { label: 'Formula sheet', url: PH, note: 'Printed inside the exam paper — no separate booklet.' },
    ],
    specification: [
      {
        label: 'Official Edexcel specification (2016–)',
        url: 'https://qualifications.pearson.com/content/dam/pdf/International%20GCSE/Further%20Pure%20Mathematics/2016/Specification%20and%20sample%20assessments/international-gcse-in-further-pure-mathematics-spec.pdf',
      },
    ],
  },
  {
    key: 'ial-maths',
    title: 'IAL Mathematics',
    subtitle: 'Edexcel International Advanced Level',
    color: 'green',
    formula: [
      {
        label: 'Edexcel IAL Mathematical Formulae and Statistical Tables',
        url: 'https://qualifications.pearson.com/content/dam/pdf/International%20Advanced%20Level/Mathematics/2018/Specification-and-Sample-Assessment/IAL-Mathematics-Formula-Book.pdf',
        note: 'Single booklet shared across every IAL Maths and Further Maths unit (P1–P4, FP1–FP2, S1–S3, M1–M2, D1).',
      },
    ],
    specification: [
      {
        label: 'Official Edexcel IAL Mathematics specification',
        url: 'https://qualifications.pearson.com/content/dam/pdf/International%20Advanced%20Level/Mathematics/2018/Specification-and-Sample-Assessment/international-a-level-maths-spec.pdf',
      },
    ],
  },
  {
    key: 'ial-fm',
    title: 'IAL Further Mathematics',
    subtitle: 'Edexcel International Advanced Level',
    color: 'amber',
    formula: [
      {
        label: 'Uses the same IAL Mathematical Formulae and Statistical Tables booklet',
        url: 'https://qualifications.pearson.com/content/dam/pdf/International%20Advanced%20Level/Mathematics/2018/Specification-and-Sample-Assessment/IAL-Mathematics-Formula-Book.pdf',
        note: 'The IAL formula booklet covers all Further Maths units too — see IAL Mathematics above.',
      },
    ],
    specification: [
      {
        label: 'Official Edexcel IAL Further Mathematics specification',
        url: 'https://qualifications.pearson.com/content/dam/pdf/International%20Advanced%20Level/Mathematics/2018/Specification-and-Sample-Assessment/international-a-level-maths-spec.pdf',
        note: 'IAL Mathematics and IAL Further Mathematics share the same Edexcel specification document.',
      },
    ],
  },
];

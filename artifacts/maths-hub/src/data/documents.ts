import igcseFormulaSheetUrl from '../../../../attached_assets/IGCSE Formula Sheet.pdf';
import igcseFurtherPureFormulaSheetUrl from '../../../../attached_assets/IGCSE Further Pure Formula Sheet.pdf';

export interface DocLink {
  label: string;
  url: string;
  note?: string;
  buttonLabel?: string;
}

export interface ProgrammeDocs {
  key: 'igcse-4ma1' | 'igcse-4pm1' | 'ial-maths' | 'ial-fm';
  title: string;
  subtitle: string;
  color: 'blue' | 'purple' | 'green' | 'amber';
  formula: DocLink[];
  formulaNote?: string;
  specification: DocLink[];
}

export const PROGRAMME_DOCS: ProgrammeDocs[] = [
  {
    key: 'igcse-4ma1',
    title: 'IGCSE Mathematics A',
    subtitle: 'Edexcel · 4MA1 · Higher tier',
    color: 'blue',
    formula: [
      { label: 'IGCSE Mathematics A, 4MA1', url: igcseFormulaSheetUrl, buttonLabel: 'Open formula sheet' },
    ],
    formulaNote: 'Use the formula sheet for your qualification and paper. Final exam entries are confirmed by the school.',
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
      { label: 'IGCSE Further Pure Mathematics, 4PM1', url: igcseFurtherPureFormulaSheetUrl, buttonLabel: 'Open formula sheet' },
    ],
    formulaNote: 'Use the formula sheet for your qualification and paper. Final exam entries are confirmed by the school.',
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

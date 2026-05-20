export type Freq = 'very-high' | 'high' | 'medium' | 'low';

export interface Topic {
  name: string;
  freq: Freq;
  pct: string;
  note: string;
  corbett?: string;
  genie?: string;
  epp?: string;
  sme?: string;
  pmt?: string;
}

export interface Strand {
  strand: string;
  strandPct: number;
  strandColor: string;
  strandFill: string;
  strandDesc: string;
  topics: Topic[];
}

const _epp = 'https://www.exampaperspractice.co.uk/igcse-edexcel-9-1-mathematics-a-4ma1-topic-questions-higher-level/';
const _corbett = 'https://corbettmaths.com/contents/';
const _genie = 'https://www.mathsgenie.co.uk/igcse/maths/edexcel/worksheet';
const _pmt = 'https://www.physicsandmathstutor.com/maths-revision/igcse-edexcel/';

export const TOPICS_4MA1: Strand[] = [
  {
    strand: 'Number', strandPct: 22, strandColor: '#F59E0B', strandFill: '#FBF2E0',
    strandDesc: 'Roughly 22% of marks. Ratio, proportion and financial maths carry the most marks. Standard form and bounds appear almost every series.',
    topics: [
      { name: 'Ratio & proportion', freq: 'very-high', pct: '~8–10%', note: 'Real-life contexts: recipes, best buys, currency, mixing. Multi-step ratio problems appear in both papers.', corbett: _corbett, genie: _genie, epp: _epp, sme: 'https://www.savemyexams.com/igcse/maths/edexcel/a/17/topic-questions/1-number/1-3-ratio-proportion/', pmt: _pmt },
      { name: 'Percentages & financial maths', freq: 'very-high', pct: '~6–8%', note: 'Compound interest, reverse percentage, percentage change. Easy to mis-read the question.', corbett: _corbett, genie: _genie, epp: _epp, sme: 'https://www.savemyexams.com/igcse/maths/edexcel/a/17/topic-questions/1-number/1-2-fractions-decimals-percentages/', pmt: _pmt },
      { name: 'Standard form', freq: 'high', pct: '~3–4%', note: 'Usually 1–2 questions per paper. Calculating in standard form and converting.', corbett: _corbett, genie: _genie, epp: _epp, sme: 'https://www.savemyexams.com/igcse/maths/edexcel/a/17/topic-questions/1-number/1-5-standard-form/', pmt: _pmt },
      { name: 'Bounds & error intervals', freq: 'high', pct: '~2–3%', note: 'Truncation vs rounding. Upper/lower bounds in calculations. Usually 3–4 marks when it appears.', corbett: _corbett, genie: _genie, epp: _epp, sme: 'https://www.savemyexams.com/igcse/maths/edexcel/a/17/topic-questions/1-number/1-6-bounds/', pmt: _pmt },
      { name: 'Indices & surds', freq: 'high', pct: '~2–3%', note: 'Fractional and negative indices, simplifying surds, rationalising the denominator.', corbett: _corbett, genie: _genie, epp: _epp, sme: 'https://www.savemyexams.com/igcse/maths/edexcel/a/17/topic-questions/1-number/1-7-indices-surds/', pmt: _pmt },
      { name: 'Sets & Venn diagrams', freq: 'medium', pct: '~2%', note: 'Usually appears in the probability context. Union, intersection, complement.', corbett: _corbett, genie: _genie, epp: _epp, sme: 'https://www.savemyexams.com/igcse/maths/edexcel/a/17/topic-questions/', pmt: _pmt },
    ],
  },
  {
    strand: 'Algebra', strandPct: 32, strandColor: '#3B82F6', strandFill: '#EFF6FF',
    strandDesc: 'Roughly 32% of marks — the largest single strand. Quadratics, sequences and graphs are the biggest sub-topics.',
    topics: [
      { name: 'Quadratic equations', freq: 'very-high', pct: '~6–8%', note: 'Factorising, quadratic formula, completing the square. Often 6–8 marks across both papers.', corbett: _corbett, genie: _genie, epp: _epp, sme: 'https://www.savemyexams.com/igcse/maths/edexcel/a/17/topic-questions/2-algebra/2-5-quadratic-equations/', pmt: _pmt },
      { name: 'Sequences — nth term', freq: 'very-high', pct: '~4–6%', note: 'Linear and quadratic nth term. Geometric sequences (Higher). Deciding whether a term is in a sequence.', corbett: _corbett, genie: _genie, epp: _epp, sme: 'https://www.savemyexams.com/igcse/maths/edexcel/a/17/topic-questions/2-algebra/2-4-sequences/', pmt: _pmt },
      { name: 'Straight line graphs', freq: 'very-high', pct: '~4–5%', note: 'Gradient, y-intercept, equation of line through two points, parallel and perpendicular lines.', corbett: _corbett, genie: _genie, epp: _epp, sme: 'https://www.savemyexams.com/igcse/maths/edexcel/a/17/topic-questions/2-algebra/2-7-straight-line-graphs/', pmt: _pmt },
      { name: 'Simultaneous equations', freq: 'high', pct: '~3–5%', note: 'Linear × linear and linear × quadratic. Sometimes set up from a word problem.', corbett: _corbett, genie: _genie, epp: _epp, sme: 'https://www.savemyexams.com/igcse/maths/edexcel/a/17/topic-questions/2-algebra/2-6-simultaneous-equations/', pmt: _pmt },
      { name: 'Rearranging formulae', freq: 'high', pct: '~3–4%', note: 'Changing the subject, including where the variable appears twice or under a square root.', corbett: _corbett, genie: _genie, epp: _epp, sme: 'https://www.savemyexams.com/igcse/maths/edexcel/a/17/topic-questions/2-algebra/2-3-rearranging-formulae/', pmt: _pmt },
      { name: 'Expanding & factorising', freq: 'high', pct: '~3–4%', note: 'Single bracket, double bracket, difference of two squares, grouping.', corbett: _corbett, genie: _genie, epp: _epp, sme: 'https://www.savemyexams.com/igcse/maths/edexcel/a/17/topic-questions/2-algebra/2-1-expanding-factorising/', pmt: _pmt },
      { name: 'Functions', freq: 'medium', pct: '~2–3%', note: 'f(x) notation, composite functions f(g(x)), inverse functions.', corbett: _corbett, genie: _genie, epp: _epp, sme: 'https://www.savemyexams.com/igcse/maths/edexcel/a/17/topic-questions/2-algebra/2-9-functions/', pmt: _pmt },
      { name: 'Inequalities', freq: 'medium', pct: '~2%', note: 'Solving linear inequalities, representing on number line or graph, integer solutions.', corbett: _corbett, genie: _genie, epp: _epp, sme: 'https://www.savemyexams.com/igcse/maths/edexcel/a/17/topic-questions/2-algebra/2-8-inequalities/', pmt: _pmt },
      { name: 'Algebraic fractions', freq: 'medium', pct: '~1–2%', note: 'Simplifying, adding, multiplying. Often part of an equation to solve.', corbett: _corbett, genie: _genie, epp: _epp, sme: 'https://www.savemyexams.com/igcse/maths/edexcel/a/17/topic-questions/2-algebra/', pmt: _pmt },
      { name: 'Quadratic & other graphs', freq: 'medium', pct: '~1–2%', note: 'Sketching quadratic, cubic, reciprocal graphs. Reading values and intersections.', corbett: _corbett, genie: _genie, epp: _epp, sme: 'https://www.savemyexams.com/igcse/maths/edexcel/a/17/topic-questions/2-algebra/2-10-graphs-of-functions/', pmt: _pmt },
    ],
  },
  {
    strand: 'Geometry & Measures', strandPct: 30, strandColor: '#8B5CF6', strandFill: '#F5F3FF',
    strandDesc: 'Roughly 30% of marks. Trigonometry, area/volume and vectors are the heaviest hitters. Circle theorems and sine/cosine rules are reliable Higher-tier questions.',
    topics: [
      { name: 'Trigonometry — SOH CAH TOA', freq: 'very-high', pct: '~5–6%', note: 'Right-angled triangles in 2D and 3D. Almost guaranteed in every paper.', corbett: _corbett, genie: _genie, epp: _epp, sme: 'https://www.savemyexams.com/igcse/maths/edexcel/a/17/topic-questions/3-geometry/3-8-trigonometry/', pmt: _pmt },
      { name: 'Area, perimeter & volume', freq: 'very-high', pct: '~5–6%', note: 'Compound shapes, circles, sectors, cylinders, cones, spheres. Often multi-step.', corbett: _corbett, genie: _genie, epp: _epp, sme: 'https://www.savemyexams.com/igcse/maths/edexcel/a/17/topic-questions/3-geometry/3-4-area-and-perimeter/', pmt: _pmt },
      { name: 'Vectors', freq: 'high', pct: '~4–5%', note: 'Column vectors, vector paths, proving points are collinear. Often 5–8 marks at end of Paper 2.', corbett: _corbett, genie: _genie, epp: _epp, sme: 'https://www.savemyexams.com/igcse/maths/edexcel/a/17/topic-questions/3-geometry/3-11-vectors/', pmt: _pmt },
      { name: 'Circle theorems', freq: 'high', pct: '~4–5%', note: 'All 8 theorems. Usually 5–7 marks. Must state the theorem name to earn reasoning marks.', corbett: _corbett, genie: _genie, epp: _epp, sme: 'https://www.savemyexams.com/igcse/maths/edexcel/a/17/topic-questions/3-geometry/3-7-circle-theorems/', pmt: _pmt },
      { name: 'Sine rule & cosine rule', freq: 'high', pct: '~3–4%', note: 'Non-right-angled triangles. Area = ½ab sin C. Bearings problems often use these.', corbett: _corbett, genie: _genie, epp: _epp, sme: 'https://www.savemyexams.com/igcse/maths/edexcel/a/17/topic-questions/3-geometry/3-9-sine-cosine-rules/', pmt: _pmt },
      { name: 'Transformations', freq: 'high', pct: '~3–4%', note: 'Reflection, rotation, translation, enlargement (positive, negative, fractional scale factors).', corbett: _corbett, genie: _genie, epp: _epp, sme: 'https://www.savemyexams.com/igcse/maths/edexcel/a/17/topic-questions/3-geometry/3-10-transformations/', pmt: _pmt },
      { name: 'Angles & polygons', freq: 'medium', pct: '~2–3%', note: 'Interior/exterior angles, parallel line rules, bearing problems. Usually early in the paper.', corbett: _corbett, genie: _genie, epp: _epp, sme: 'https://www.savemyexams.com/igcse/maths/edexcel/a/17/topic-questions/3-geometry/3-1-angles/', pmt: _pmt },
      { name: 'Pythagoras theorem', freq: 'medium', pct: '~2%', note: 'Often embedded in trigonometry or 3D questions rather than standalone.', corbett: _corbett, genie: _genie, epp: _epp, sme: 'https://www.savemyexams.com/igcse/maths/edexcel/a/17/topic-questions/3-geometry/3-6-pythagoras/', pmt: _pmt },
      { name: 'Constructions & loci', freq: 'low', pct: '~1%', note: 'Perpendicular bisector, angle bisector, loci problems. Compass arcs are mark-bearing.', corbett: _corbett, genie: _genie, epp: _epp, sme: 'https://www.savemyexams.com/igcse/maths/edexcel/a/17/topic-questions/3-geometry/', pmt: _pmt },
    ],
  },
  {
    strand: 'Statistics & Probability', strandPct: 16, strandColor: '#10B981', strandFill: '#ECFDF5',
    strandDesc: 'Roughly 16% of marks. Tree diagrams and cumulative frequency are the most reliable topics.',
    topics: [
      { name: 'Tree diagrams', freq: 'high', pct: '~4–5%', note: 'Independent and conditional probability, with and without replacement.', corbett: _corbett, genie: _genie, epp: _epp, sme: 'https://www.savemyexams.com/igcse/maths/edexcel/a/17/topic-questions/4-statistics-probability/4-7-tree-diagrams/', pmt: _pmt },
      { name: 'Cumulative frequency & box plots', freq: 'high', pct: '~3–4%', note: 'Drawing curves, reading median/IQR, comparing box plots. Accurate plotting is the mark-getter.', corbett: _corbett, genie: _genie, epp: _epp, sme: 'https://www.savemyexams.com/igcse/maths/edexcel/a/17/topic-questions/4-statistics-probability/4-5-cumulative-frequency/', pmt: _pmt },
      { name: 'Histograms', freq: 'high', pct: '~3–4%', note: 'Frequency density on y-axis. Reading and completing histograms.', corbett: _corbett, genie: _genie, epp: _epp, sme: 'https://www.savemyexams.com/igcse/maths/edexcel/a/17/topic-questions/4-statistics-probability/4-4-histograms/', pmt: _pmt },
      { name: 'Averages & range', freq: 'medium', pct: '~2–3%', note: 'Mean from frequency table (grouped and ungrouped), median, mode, range.', corbett: _corbett, genie: _genie, epp: _epp, sme: 'https://www.savemyexams.com/igcse/maths/edexcel/a/17/topic-questions/4-statistics-probability/4-1-averages/', pmt: _pmt },
      { name: 'Scatter graphs & correlation', freq: 'medium', pct: '~2%', note: 'Plotting, line of best fit, describing correlation, making predictions.', corbett: _corbett, genie: _genie, epp: _epp, sme: 'https://www.savemyexams.com/igcse/maths/edexcel/a/17/topic-questions/4-statistics-probability/4-6-scatter-diagrams/', pmt: _pmt },
      { name: 'Basic probability', freq: 'medium', pct: '~1–2%', note: 'Single event probability, listing outcomes, sample space diagrams.', corbett: _corbett, genie: _genie, epp: _epp, sme: 'https://www.savemyexams.com/igcse/maths/edexcel/a/17/topic-questions/4-statistics-probability/4-7-probability/', pmt: _pmt },
    ],
  },
];

export type Freq = 'very-high' | 'high' | 'medium' | 'low';

export interface TopicLinks {
  corbett?: string;
  mathsGenie?: string;
  pmt?: string;
}

export interface Topic {
  name: string;
  freq: Freq;
  pct: string;
  note: string;
  links: TopicLinks;
}

export interface Strand {
  strand: string;
  strandPct: number;
  strandColor: string;
  strandFill: string;
  strandDesc: string;
  topics: Topic[];
}

const MG = 'https://www.mathsgenie.co.uk/gcse/maths/edexcel';
const YG = 'https://yesgenie.com/igcse/maths/edexcel';
const PMT = (q: string) => `https://www.physicsandmathstutor.com/?s=${encodeURIComponent(q)}`;

export const TOPICS_4MA1: Strand[] = [
  {
    strand: 'Number', strandPct: 22, strandColor: '#F59E0B', strandFill: '#FBF2E0',
    strandDesc: 'Roughly 22% of marks. Ratio, proportion and financial maths carry the most marks. Standard form and bounds appear almost every series.',
    topics: [
      { name: 'Ratio & proportion', freq: 'very-high', pct: '~8–10%',
        note: 'Real-life contexts: recipes, best buys, currency, mixing. Multi-step ratio problems appear in both papers.',
        links: { corbett: 'https://corbettmaths.com/2025/12/19/ratios-and-equations-practice-questions/', mathsGenie: `${MG}/grade-3-3-5-ratio/worksheet`, pmt: PMT('Ratio  proportion') } },
      { name: 'Percentages & financial maths', freq: 'very-high', pct: '~6–8%',
        note: 'Compound interest, reverse percentage, percentage change. Easy to mis-read the question.',
        links: { corbett: 'https://corbettmaths.com/2019/08/29/percentages-practice-questions/', mathsGenie: `${MG}/grade-4-4-1-compound-interest-and-depreciation/worksheet`, pmt: PMT('Percentages  financial maths') } },
      { name: 'Standard form', freq: 'high', pct: '~3–4%',
        note: 'Usually 1–2 questions per paper. Calculating in standard form and converting.',
        links: { corbett: 'https://corbettmaths.com/2019/08/29/standard-form-practice-questions/', mathsGenie: `${MG}/grade-5-5-4-standard-form/worksheet`, pmt: PMT('Standard form') } },
      { name: 'Bounds & error intervals', freq: 'high', pct: '~2–3%',
        note: 'Truncation vs rounding. Upper/lower bounds in calculations. Usually 3–4 marks when it appears.',
        links: { corbett: 'https://corbettmaths.com/2021/07/04/error-intervals-practice-questions/', mathsGenie: `${MG}/grade-7-7-2-bounds/worksheet`, pmt: PMT('Bounds  error intervals') } },
      { name: 'Indices & surds', freq: 'high', pct: '~2–3%',
        note: 'Fractional and negative indices, simplifying surds, rationalising the denominator.',
        links: { corbett: 'https://corbettmaths.com/2019/08/29/surds-practice-questions/', mathsGenie: `${MG}/grade-6-6-2-fractional-and-negative-indices/worksheet`, pmt: PMT('Indices  surds') } },
      { name: 'Sets & Venn diagrams', freq: 'medium', pct: '~2%',
        note: 'Usually appears in the probability context. Union, intersection, complement.',
        links: { corbett: 'https://corbettmaths.com/2019/09/02/venn-diagrams-practice-questions/', mathsGenie: `${MG}/grade-5-5-23-venn-diagrams/worksheet`, pmt: PMT('Sets  Venn diagrams') } },
    ],
  },
  {
    strand: 'Algebra', strandPct: 32, strandColor: '#3B82F6', strandFill: '#EFF6FF',
    strandDesc: 'Roughly 32% of marks — the largest single strand. Quadratics, sequences and graphs are the biggest sub-topics.',
    topics: [
      { name: 'Quadratic equations', freq: 'very-high', pct: '~6–8%',
        note: 'Factorising, quadratic formula, completing the square. Often 6–8 marks across both papers.',
        links: { corbett: 'https://corbettmaths.com/2019/09/02/quadratics-solving-practice-questions/', mathsGenie: `${MG}/grade-5-5-8-solving-quadratics/worksheet`, pmt: PMT('Quadratic equations') } },
      { name: 'Sequences — nth term', freq: 'very-high', pct: '~4–6%',
        note: 'Linear and quadratic nth term. Geometric sequences (Higher). Deciding whether a term is in a sequence.',
        links: { corbett: 'https://corbettmaths.com/2019/09/02/sequences-nth-term-practice-questions/', mathsGenie: `${MG}/grade-4-4-7-sequences-nth-term/worksheet`, pmt: PMT('Sequences  nth term') } },
      { name: 'Straight line graphs', freq: 'very-high', pct: '~4–5%',
        note: 'Gradient, y-intercept, equation of line through two points, parallel and perpendicular lines.',
        links: { corbett: 'https://corbettmaths.com/2019/08/29/straight-line-graphs-practice-questions/', mathsGenie: `${MG}/grade-5-5-15-equation-of-a-line/worksheet`, pmt: PMT('Straight line graphs') } },
      { name: 'Simultaneous equations', freq: 'high', pct: '~3–5%',
        note: 'Linear × linear and linear × quadratic. Sometimes set up from a word problem.',
        links: { corbett: 'https://corbettmaths.com/2019/09/05/simultaneous-equations-practice-questions/', mathsGenie: `${MG}/grade-5-5-11-simultaneous-equations/worksheet`, pmt: PMT('Simultaneous equations') } },
      { name: 'Rearranging formulae', freq: 'high', pct: '~3–4%',
        note: 'Changing the subject, including where the variable appears twice or under a square root.',
        links: { corbett: 'https://corbettmaths.com/2019/09/05/rearranging-formulae-practice-questions/', mathsGenie: `${MG}/grade-5-5-6-changing-the-subject-of-a-formula/worksheet`, pmt: PMT('Rearranging formulae') } },
      { name: 'Expanding & factorising', freq: 'high', pct: '~3–4%',
        note: 'Single bracket, double bracket, difference of two squares, grouping.',
        links: { corbett: 'https://corbettmaths.com/2019/08/22/factorising-practice-questions/', mathsGenie: `${MG}/grade-4-4-8-expanding-and-factorising/worksheet`, pmt: PMT('Expanding  factorising') } },
      { name: 'Functions', freq: 'medium', pct: '~2–3%',
        note: 'f(x) notation, composite functions f(g(x)), inverse functions.',
        links: { corbett: 'https://corbettmaths.com/2019/09/20/functions-practice-questions/', mathsGenie: `${MG}/grade-7-7-9-inverse-and-composite-functions/worksheet`, pmt: PMT('Functions') } },
      { name: 'Inequalities', freq: 'medium', pct: '~2%',
        note: 'Solving linear inequalities, representing on number line or graph, integer solutions.',
        links: { corbett: 'https://corbettmaths.com/2019/08/29/inequalities-practice-questions/', mathsGenie: `${MG}/grade-4-4-5-inequalities/worksheet`, pmt: PMT('Inequalities') } },
      { name: 'Algebraic fractions', freq: 'medium', pct: '~1–2%',
        note: 'Simplifying, adding, multiplying. Often part of an equation to solve.',
        links: { corbett: 'https://corbettmaths.com/2019/09/05/algebraic-fractions-practice-questions/', mathsGenie: `${MG}/grade-7-7-6-algebraic-fractions/worksheet`, pmt: PMT('Algebraic fractions') } },
      { name: 'Quadratic & other graphs', freq: 'medium', pct: '~1–2%',
        note: 'Sketching quadratic, cubic, reciprocal graphs. Reading values and intersections.',
        links: { corbett: 'https://corbettmaths.com/2019/09/05/quadratic-graphs-practice-questions/', mathsGenie: `${MG}/grade-5-5-9-drawing-quadratic-graphs/worksheet`, pmt: PMT('Quadratic  other graphs') } },
    ],
  },
  {
    strand: 'Geometry & Measures', strandPct: 30, strandColor: '#8B5CF6', strandFill: '#F5F3FF',
    strandDesc: 'Roughly 30% of marks. Trigonometry, area/volume and vectors are the heaviest hitters. Circle theorems and sine/cosine rules are reliable Higher-tier questions.',
    topics: [
      { name: 'Trigonometry — SOH CAH TOA', freq: 'very-high', pct: '~5–6%',
        note: 'Right-angled triangles in 2D and 3D. Almost guaranteed in every paper.',
        links: { corbett: 'https://corbettmaths.com/2019/08/29/trigonometry-practice-questions/', mathsGenie: `${MG}/grade-5-5-19-sohcahtoa-trigonometry/worksheet`, pmt: PMT('Trigonometry  SOH CAH TOA') } },
      { name: 'Area, perimeter & volume', freq: 'very-high', pct: '~5–6%',
        note: 'Compound shapes, circles, sectors, cylinders, cones, spheres. Often multi-step.',
        links: { corbett: 'https://corbettmaths.com/2019/08/22/area-and-perimeter-practice-questions/', mathsGenie: `${MG}/grade-4-4-13-volume-of-a-prism/worksheet`, pmt: PMT('Area, perimeter  volume') } },
      { name: 'Vectors', freq: 'high', pct: '~4–5%',
        note: 'Column vectors, vector paths, proving points are collinear. Often 5–8 marks at end of Paper 2.',
        links: { corbett: 'https://corbettmaths.com/2019/09/02/vectors-practice-questions/', mathsGenie: `${MG}/grade-5-5-21-vectors/worksheet`, pmt: PMT('Vectors') } },
      { name: 'Circle theorems', freq: 'high', pct: '~4–5%',
        note: 'All 8 theorems. Usually 5–7 marks. Must state the theorem name to earn reasoning marks.',
        links: { corbett: 'https://corbettmaths.com/2019/09/02/circle-theorems-practice-questions/', mathsGenie: `${MG}/grade-6-6-10-circle-theorems/worksheet`, pmt: PMT('Circle theorems') } },
      { name: 'Sine rule & cosine rule', freq: 'high', pct: '~3–4%',
        note: 'Non-right-angled triangles. Area = ½ab sin C. Bearings problems often use these.',
        links: { corbett: 'https://corbettmaths.com/2019/09/02/sine-rule-practice-questions/', mathsGenie: `${MG}/grade-7-7-12-the-sine-rule/worksheet`, pmt: PMT('Sine rule  cosine rule') } },
      { name: 'Transformations', freq: 'high', pct: '~3–4%',
        note: 'Reflection, rotation, translation, enlargement (positive, negative, fractional scale factors).',
        links: { corbett: 'https://corbettmaths.com/2019/08/29/transformations-practice-questions/', mathsGenie: `${MG}/grade-3-3-13-transformations/worksheet`, pmt: PMT('Transformations') } },
      { name: 'Angles & polygons', freq: 'medium', pct: '~2–3%',
        note: 'Interior/exterior angles, parallel line rules, bearing problems. Usually early in the paper.',
        links: { corbett: 'https://corbettmaths.com/2019/08/29/angles-in-polygons-practice-questions/', mathsGenie: `${MG}/grade-4-4-11-angles-in-polygons/worksheet`, pmt: PMT('Angles  polygons') } },
      { name: 'Pythagoras theorem', freq: 'medium', pct: '~2%',
        note: 'Often embedded in trigonometry or 3D questions rather than standalone.',
        links: { corbett: 'https://corbettmaths.com/2019/08/29/pythagoras-practice-questions/', mathsGenie: `${MG}/grade-4-4-9-pythagoras/worksheet`, pmt: PMT('Pythagoras theorem') } },
      { name: 'Constructions & loci', freq: 'low', pct: '~1%',
        note: 'Perpendicular bisector, angle bisector, loci problems. Compass arcs are mark-bearing.',
        links: { corbett: 'https://corbettmaths.com/2019/09/02/loci-practice-questions/', mathsGenie: `${MG}/grade-4-4-15-loci-and-construction/worksheet`, pmt: PMT('Constructions  loci') } },
    ],
  },
  {
    strand: 'Statistics & Probability', strandPct: 16, strandColor: '#10B981', strandFill: '#ECFDF5',
    strandDesc: 'Roughly 16% of marks. Tree diagrams and cumulative frequency are the most reliable topics.',
    topics: [
      { name: 'Tree diagrams', freq: 'high', pct: '~4–5%',
        note: 'Independent and conditional probability, with and without replacement.',
        links: { corbett: 'https://corbettmaths.com/2019/09/02/tree-diagrams-practice-questions/', mathsGenie: `${MG}/grade-5-5-22-probability-trees/worksheet`, pmt: PMT('Tree diagrams') } },
      { name: 'Cumulative frequency & box plots', freq: 'high', pct: '~3–4%',
        note: 'Drawing curves, reading median/IQR, comparing box plots. Accurate plotting is the mark-getter.',
        links: { corbett: 'https://corbettmaths.com/2019/09/02/cumulative-frequency-practice-questions/', mathsGenie: `${MG}/grade-6-6-11-cumulative-frequency/worksheet`, pmt: PMT('Cumulative frequency  box plots') } },
      { name: 'Histograms', freq: 'high', pct: '~3–4%',
        note: 'Frequency density on y-axis. Reading and completing histograms.',
        links: { corbett: 'https://corbettmaths.com/2019/09/02/histograms-practice-questions/', mathsGenie: `${MG}/grade-7-7-16-histograms/worksheet`, pmt: PMT('Histograms') } },
      { name: 'Averages & range', freq: 'medium', pct: '~2–3%',
        note: 'Mean from frequency table (grouped and ungrouped), median, mode, range.',
        links: { corbett: 'https://corbettmaths.com/2019/08/22/averages-practice-questions/', mathsGenie: `${YG}/grade-4-4-17-averages-from-frequency-tables/worksheet`, pmt: PMT('Averages  range') } },
      { name: 'Scatter graphs & correlation', freq: 'medium', pct: '~2%',
        note: 'Plotting, line of best fit, describing correlation, making predictions.',
        links: { corbett: 'https://corbettmaths.com/2019/08/29/scatter-graphs-practice-questions/', mathsGenie: `${MG}/grade-4-4-19-scatter-graphs/worksheet`, pmt: PMT('Scatter graphs  correlation') } },
      { name: 'Basic probability', freq: 'medium', pct: '~1–2%',
        note: 'Single event probability, listing outcomes, sample space diagrams.',
        links: { corbett: 'https://corbettmaths.com/2019/08/29/probability-practice-questions/', mathsGenie: `${MG}/grade-4-4-18-probability/worksheet`, pmt: PMT('Basic probability') } },
    ],
  },
];

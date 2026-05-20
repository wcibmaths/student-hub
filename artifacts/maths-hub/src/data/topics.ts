export type Freq = 'very-high' | 'high' | 'medium' | 'low';

export interface TopicLinks {
  corbett?: string;
  mathsGenie?: string;
  examPapersPractice?: string;
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

const EPP_4MA1 = 'https://www.exampaperspractice.co.uk/igcse-edexcel-9-1-mathematics-a-4ma1-topic-questions-higher-level/';

// Corbett search returns the topic's video/practice/worksheet pages reliably.
const corbett = (q: string) => `https://corbettmaths.com/?s=${encodeURIComponent(q)}`;
// Maths Genie has known topic pages; for others we use the resources page.
const mg = (slug: string) => `https://www.mathsgenie.co.uk/${slug}.html`;
const MG_RES = 'https://www.mathsgenie.co.uk/resources.html';
// PMT has stable strand-level pages for IGCSE Edexcel Maths A.
const PMT_NUMBER = 'https://www.physicsandmathstutor.com/maths-revision/igcse-edexcel/number/';
const PMT_ALGEBRA = 'https://www.physicsandmathstutor.com/maths-revision/igcse-edexcel/algebra/';
const PMT_GEOMETRY = 'https://www.physicsandmathstutor.com/maths-revision/igcse-edexcel/geometry/';
const PMT_STATS = 'https://www.physicsandmathstutor.com/maths-revision/igcse-edexcel/statistics/';

export const TOPICS_4MA1: Strand[] = [
  {
    strand: 'Number', strandPct: 22, strandColor: '#F59E0B', strandFill: '#FBF2E0',
    strandDesc: 'Roughly 22% of marks. Ratio, proportion and financial maths carry the most marks. Standard form and bounds appear almost every series.',
    topics: [
      { name: 'Ratio & proportion', freq: 'very-high', pct: '~8–10%',
        note: 'Real-life contexts: recipes, best buys, currency, mixing. Multi-step ratio problems appear in both papers.',
        links: { corbett: corbett('ratio'), mathsGenie: mg('ratio'), examPapersPractice: EPP_4MA1, pmt: PMT_NUMBER } },
      { name: 'Percentages & financial maths', freq: 'very-high', pct: '~6–8%',
        note: 'Compound interest, reverse percentage, percentage change. Easy to mis-read the question.',
        links: { corbett: corbett('percentages'), mathsGenie: mg('percentages'), examPapersPractice: EPP_4MA1, pmt: PMT_NUMBER } },
      { name: 'Standard form', freq: 'high', pct: '~3–4%',
        note: 'Usually 1–2 questions per paper. Calculating in standard form and converting.',
        links: { corbett: corbett('standard form'), mathsGenie: mg('standard-form'), examPapersPractice: EPP_4MA1, pmt: PMT_NUMBER } },
      { name: 'Bounds & error intervals', freq: 'high', pct: '~2–3%',
        note: 'Truncation vs rounding. Upper/lower bounds in calculations. Usually 3–4 marks when it appears.',
        links: { corbett: corbett('bounds error intervals'), mathsGenie: mg('bounds'), examPapersPractice: EPP_4MA1, pmt: PMT_NUMBER } },
      { name: 'Indices & surds', freq: 'high', pct: '~2–3%',
        note: 'Fractional and negative indices, simplifying surds, rationalising the denominator.',
        links: { corbett: corbett('surds indices'), mathsGenie: mg('surds'), examPapersPractice: EPP_4MA1, pmt: PMT_NUMBER } },
      { name: 'Sets & Venn diagrams', freq: 'medium', pct: '~2%',
        note: 'Usually appears in the probability context. Union, intersection, complement.',
        links: { corbett: corbett('venn diagrams set notation'), mathsGenie: mg('venn-diagrams'), examPapersPractice: EPP_4MA1, pmt: PMT_NUMBER } },
    ],
  },
  {
    strand: 'Algebra', strandPct: 32, strandColor: '#3B82F6', strandFill: '#EFF6FF',
    strandDesc: 'Roughly 32% of marks — the largest single strand. Quadratics, sequences and graphs are the biggest sub-topics.',
    topics: [
      { name: 'Quadratic equations', freq: 'very-high', pct: '~6–8%',
        note: 'Factorising, quadratic formula, completing the square. Often 6–8 marks across both papers.',
        links: { corbett: corbett('solving quadratics'), mathsGenie: mg('quadratics'), examPapersPractice: EPP_4MA1, pmt: PMT_ALGEBRA } },
      { name: 'Sequences — nth term', freq: 'very-high', pct: '~4–6%',
        note: 'Linear and quadratic nth term. Geometric sequences (Higher). Deciding whether a term is in a sequence.',
        links: { corbett: corbett('nth term sequences'), mathsGenie: mg('sequences'), examPapersPractice: EPP_4MA1, pmt: PMT_ALGEBRA } },
      { name: 'Straight line graphs', freq: 'very-high', pct: '~4–5%',
        note: 'Gradient, y-intercept, equation of line through two points, parallel and perpendicular lines.',
        links: { corbett: corbett('equation of a line'), mathsGenie: mg('straight-line-graphs'), examPapersPractice: EPP_4MA1, pmt: PMT_ALGEBRA } },
      { name: 'Simultaneous equations', freq: 'high', pct: '~3–5%',
        note: 'Linear × linear and linear × quadratic. Sometimes set up from a word problem.',
        links: { corbett: corbett('simultaneous equations'), mathsGenie: mg('simultaneous-equations'), examPapersPractice: EPP_4MA1, pmt: PMT_ALGEBRA } },
      { name: 'Rearranging formulae', freq: 'high', pct: '~3–4%',
        note: 'Changing the subject, including where the variable appears twice or under a square root.',
        links: { corbett: corbett('changing the subject rearranging formulae'), mathsGenie: MG_RES, examPapersPractice: EPP_4MA1, pmt: PMT_ALGEBRA } },
      { name: 'Expanding & factorising', freq: 'high', pct: '~3–4%',
        note: 'Single bracket, double bracket, difference of two squares, grouping.',
        links: { corbett: corbett('expanding brackets factorising'), mathsGenie: mg('expanding-and-factorising'), examPapersPractice: EPP_4MA1, pmt: PMT_ALGEBRA } },
      { name: 'Functions', freq: 'medium', pct: '~2–3%',
        note: 'f(x) notation, composite functions f(g(x)), inverse functions.',
        links: { corbett: corbett('functions composite inverse'), mathsGenie: mg('functions'), examPapersPractice: EPP_4MA1, pmt: PMT_ALGEBRA } },
      { name: 'Inequalities', freq: 'medium', pct: '~2%',
        note: 'Solving linear inequalities, representing on number line or graph, integer solutions.',
        links: { corbett: corbett('inequalities'), mathsGenie: mg('inequalities'), examPapersPractice: EPP_4MA1, pmt: PMT_ALGEBRA } },
      { name: 'Algebraic fractions', freq: 'medium', pct: '~1–2%',
        note: 'Simplifying, adding, multiplying. Often part of an equation to solve.',
        links: { corbett: corbett('algebraic fractions'), mathsGenie: mg('algebraic-fractions'), examPapersPractice: EPP_4MA1, pmt: PMT_ALGEBRA } },
      { name: 'Quadratic & other graphs', freq: 'medium', pct: '~1–2%',
        note: 'Sketching quadratic, cubic, reciprocal graphs. Reading values and intersections.',
        links: { corbett: corbett('quadratic graphs cubic reciprocal'), mathsGenie: mg('quadratic-graphs'), examPapersPractice: EPP_4MA1, pmt: PMT_ALGEBRA } },
    ],
  },
  {
    strand: 'Geometry & Measures', strandPct: 30, strandColor: '#8B5CF6', strandFill: '#F5F3FF',
    strandDesc: 'Roughly 30% of marks. Trigonometry, area/volume and vectors are the heaviest hitters. Circle theorems and sine/cosine rules are reliable Higher-tier questions.',
    topics: [
      { name: 'Trigonometry — SOH CAH TOA', freq: 'very-high', pct: '~5–6%',
        note: 'Right-angled triangles in 2D and 3D. Almost guaranteed in every paper.',
        links: { corbett: corbett('trigonometry SOHCAHTOA'), mathsGenie: mg('trigonometry'), examPapersPractice: EPP_4MA1, pmt: PMT_GEOMETRY } },
      { name: 'Area, perimeter & volume', freq: 'very-high', pct: '~5–6%',
        note: 'Compound shapes, circles, sectors, cylinders, cones, spheres. Often multi-step.',
        links: { corbett: corbett('area volume'), mathsGenie: mg('area'), examPapersPractice: EPP_4MA1, pmt: PMT_GEOMETRY } },
      { name: 'Vectors', freq: 'high', pct: '~4–5%',
        note: 'Column vectors, vector paths, proving points are collinear. Often 5–8 marks at end of Paper 2.',
        links: { corbett: corbett('vectors'), mathsGenie: mg('vectors'), examPapersPractice: EPP_4MA1, pmt: PMT_GEOMETRY } },
      { name: 'Circle theorems', freq: 'high', pct: '~4–5%',
        note: 'All 8 theorems. Usually 5–7 marks. Must state the theorem name to earn reasoning marks.',
        links: { corbett: corbett('circle theorems'), mathsGenie: mg('circle-theorems'), examPapersPractice: EPP_4MA1, pmt: PMT_GEOMETRY } },
      { name: 'Sine rule & cosine rule', freq: 'high', pct: '~3–4%',
        note: 'Non-right-angled triangles. Area = ½ab sin C. Bearings problems often use these.',
        links: { corbett: corbett('sine rule cosine rule'), mathsGenie: mg('sine-rule'), examPapersPractice: EPP_4MA1, pmt: PMT_GEOMETRY } },
      { name: 'Transformations', freq: 'high', pct: '~3–4%',
        note: 'Reflection, rotation, translation, enlargement (positive, negative, fractional scale factors).',
        links: { corbett: corbett('transformations'), mathsGenie: mg('transformations'), examPapersPractice: EPP_4MA1, pmt: PMT_GEOMETRY } },
      { name: 'Angles & polygons', freq: 'medium', pct: '~2–3%',
        note: 'Interior/exterior angles, parallel line rules, bearing problems. Usually early in the paper.',
        links: { corbett: corbett('angles in polygons'), mathsGenie: mg('angles'), examPapersPractice: EPP_4MA1, pmt: PMT_GEOMETRY } },
      { name: 'Pythagoras theorem', freq: 'medium', pct: '~2%',
        note: 'Often embedded in trigonometry or 3D questions rather than standalone.',
        links: { corbett: corbett('pythagoras'), mathsGenie: mg('pythagoras'), examPapersPractice: EPP_4MA1, pmt: PMT_GEOMETRY } },
      { name: 'Constructions & loci', freq: 'low', pct: '~1%',
        note: 'Perpendicular bisector, angle bisector, loci problems. Compass arcs are mark-bearing.',
        links: { corbett: corbett('constructions loci'), mathsGenie: mg('loci'), examPapersPractice: EPP_4MA1, pmt: PMT_GEOMETRY } },
    ],
  },
  {
    strand: 'Statistics & Probability', strandPct: 16, strandColor: '#10B981', strandFill: '#ECFDF5',
    strandDesc: 'Roughly 16% of marks. Tree diagrams and cumulative frequency are the most reliable topics.',
    topics: [
      { name: 'Tree diagrams', freq: 'high', pct: '~4–5%',
        note: 'Independent and conditional probability, with and without replacement.',
        links: { corbett: corbett('tree diagrams'), mathsGenie: mg('tree-diagrams'), examPapersPractice: EPP_4MA1, pmt: PMT_STATS } },
      { name: 'Cumulative frequency & box plots', freq: 'high', pct: '~3–4%',
        note: 'Drawing curves, reading median/IQR, comparing box plots. Accurate plotting is the mark-getter.',
        links: { corbett: corbett('cumulative frequency box plots'), mathsGenie: mg('cumulative-frequency'), examPapersPractice: EPP_4MA1, pmt: PMT_STATS } },
      { name: 'Histograms', freq: 'high', pct: '~3–4%',
        note: 'Frequency density on y-axis. Reading and completing histograms.',
        links: { corbett: corbett('histograms'), mathsGenie: mg('histograms'), examPapersPractice: EPP_4MA1, pmt: PMT_STATS } },
      { name: 'Averages & range', freq: 'medium', pct: '~2–3%',
        note: 'Mean from frequency table (grouped and ungrouped), median, mode, range.',
        links: { corbett: corbett('averages frequency tables'), mathsGenie: mg('averages'), examPapersPractice: EPP_4MA1, pmt: PMT_STATS } },
      { name: 'Scatter graphs & correlation', freq: 'medium', pct: '~2%',
        note: 'Plotting, line of best fit, describing correlation, making predictions.',
        links: { corbett: corbett('scatter graphs'), mathsGenie: mg('scatter-graphs'), examPapersPractice: EPP_4MA1, pmt: PMT_STATS } },
      { name: 'Basic probability', freq: 'medium', pct: '~1–2%',
        note: 'Single event probability, listing outcomes, sample space diagrams.',
        links: { corbett: corbett('probability'), mathsGenie: mg('probability'), examPapersPractice: EPP_4MA1, pmt: PMT_STATS } },
    ],
  },
];

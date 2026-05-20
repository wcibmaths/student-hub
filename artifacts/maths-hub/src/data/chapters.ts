import type { Freq } from './topics';

export interface ChapterLinks {
  pmt?: string;
  examSolutions?: string;
  examPapersPractice?: string;
}

export interface Chapter {
  n: number;
  name: string;
  freq?: Freq;
  note?: string;
  links: ChapterLinks;
}

const PMT_4PM_FP = 'https://www.physicsandmathstutor.com/maths-revision/igcse-edexcel/further-pure/';
const ES_4PM = 'https://www.examsolutions.net/international-exams/edexcel/igcse-further-pure/';
const EPP_4PM = 'https://www.exampaperspractice.co.uk/edexcel-igcse-further-pure-mathematics-4pm1-topic-questions/';

export const CHAPTERS_4PM1: Chapter[] = [
  { n: 1, name: 'Surds and Logarithmic Functions', freq: 'high',
    note: 'Surds, rationalising denominators, laws of logs, solving exponential and log equations.',
    links: { pmt: PMT_4PM_FP, examSolutions: ES_4PM, examPapersPractice: EPP_4PM } },
  { n: 2, name: 'The Quadratic Function', freq: 'very-high',
    note: 'Completing the square, discriminant, roots and coefficients, disguised quadratics.',
    links: { pmt: PMT_4PM_FP, examSolutions: ES_4PM, examPapersPractice: EPP_4PM } },
  { n: 3, name: 'Inequalities and Identities', freq: 'high',
    note: 'Solving quadratic inequalities, polynomial identities, factor and remainder theorems.',
    links: { pmt: PMT_4PM_FP, examSolutions: ES_4PM, examPapersPractice: EPP_4PM } },
  { n: 4, name: 'Sketching Polynomials', freq: 'medium',
    note: 'Sketching cubic and higher-degree curves, understanding roots and turning points.',
    links: { pmt: PMT_4PM_FP, examSolutions: ES_4PM, examPapersPractice: EPP_4PM } },
  { n: 5, name: 'Sequences and Series', freq: 'very-high',
    note: 'Arithmetic and geometric sequences, sum to n terms, sum to infinity of geometric series.',
    links: { pmt: PMT_4PM_FP, examSolutions: ES_4PM, examPapersPractice: EPP_4PM } },
  { n: 6, name: 'The Binomial Series', freq: 'high',
    note: 'Binomial expansion for positive integer powers using (a + b)ⁿ.',
    links: { pmt: PMT_4PM_FP, examSolutions: ES_4PM, examPapersPractice: EPP_4PM } },
  { n: 7, name: 'Scalar and Vector Quantities', freq: 'high',
    note: 'Vector addition, subtraction, magnitude, unit vectors, scalar product, geometric applications.',
    links: { pmt: PMT_4PM_FP, examSolutions: ES_4PM, examPapersPractice: EPP_4PM } },
  { n: 8, name: 'Rectangular Cartesian Coordinates', freq: 'high',
    note: 'Distance, midpoint, perpendicular bisector, equation of a circle, tangent and chord properties.',
    links: { pmt: PMT_4PM_FP, examSolutions: ES_4PM, examPapersPractice: EPP_4PM } },
  { n: 9, name: 'Differentiation', freq: 'very-high',
    note: 'Product, quotient and chain rules; eˣ, sin x, cos x; tangents, normals, stationary points.',
    links: { pmt: PMT_4PM_FP, examSolutions: ES_4PM, examPapersPractice: EPP_4PM } },
  { n: 10, name: 'Integration', freq: 'very-high',
    note: 'Definite and indefinite integrals, area under a curve, kinematics applications.',
    links: { pmt: PMT_4PM_FP, examSolutions: ES_4PM, examPapersPractice: EPP_4PM } },
  { n: 11, name: 'Trigonometry', freq: 'very-high',
    note: 'Radians, arc length, sector area, identities, equations in given intervals, 3D problems.',
    links: { pmt: PMT_4PM_FP, examSolutions: ES_4PM, examPapersPractice: EPP_4PM } },
];

// IAL module chapter links — PMT and ExamSolutions for IAL Edexcel Maths.
const IAL_PMT: Record<string, string> = {
  P1: 'https://www.physicsandmathstutor.com/maths-revision/a-level-edexcel-international/p1/',
  P2: 'https://www.physicsandmathstutor.com/maths-revision/a-level-edexcel-international/p2/',
  P3: 'https://www.physicsandmathstutor.com/maths-revision/a-level-edexcel-international/p3/',
  P4: 'https://www.physicsandmathstutor.com/maths-revision/a-level-edexcel-international/p4/',
  FP1: 'https://www.physicsandmathstutor.com/maths-revision/a-level-edexcel-international/fp1/',
  FP2: 'https://www.physicsandmathstutor.com/maths-revision/a-level-edexcel-international/fp2/',
  S1: 'https://www.physicsandmathstutor.com/maths-revision/a-level-edexcel-international/s1/',
  S2: 'https://www.physicsandmathstutor.com/maths-revision/a-level-edexcel-international/s2/',
  S3: 'https://www.physicsandmathstutor.com/maths-revision/a-level-edexcel-international/s3/',
  D1: 'https://www.physicsandmathstutor.com/maths-revision/a-level-edexcel-international/d1/',
  M1: 'https://www.physicsandmathstutor.com/maths-revision/a-level-edexcel-international/m1/',
  M2: 'https://www.physicsandmathstutor.com/maths-revision/a-level-edexcel-international/m2/',
};

const IAL_ES = 'https://www.examsolutions.net/international-exams/edexcel/';

function ch(n: number, name: string, mod: string): Chapter {
  return { n, name, links: { pmt: IAL_PMT[mod], examSolutions: IAL_ES } };
}

export const IAL_CHAPTERS: Record<string, Chapter[]> = {
  P1: [
    ch(1,'Algebraic Expressions','P1'), ch(2,'Quadratics','P1'), ch(3,'Equations and Inequalities','P1'),
    ch(4,'Graphs and Transformations','P1'), ch(5,'Straight Line Graphs','P1'), ch(6,'Trigonometric Ratios','P1'),
    ch(7,'Radians','P1'), ch(8,'Differentiation','P1'), ch(9,'Integration','P1'),
  ],
  P2: [
    ch(1,'Algebraic Methods','P2'), ch(2,'Coordinate Geometry in the (x, y) Plane','P2'),
    ch(3,'Exponentials and Logarithms','P2'), ch(4,'The Binomial Expansion','P2'),
    ch(5,'Sequences and Series','P2'), ch(6,'Trigonometric Identities and Equations','P2'),
    ch(7,'Differentiation','P2'), ch(8,'Integration','P2'),
  ],
  P3: [
    ch(1,'Algebraic Methods','P3'), ch(2,'Functions and Graphs','P3'), ch(3,'Trigonometric Functions','P3'),
    ch(4,'Trigonometric Addition Formulae','P3'), ch(5,'Exponentials and Logarithms','P3'),
    ch(6,'Differentiation','P3'), ch(7,'Integration','P3'), ch(8,'Numerical Methods','P3'),
  ],
  P4: [
    ch(1,'Proof','P4'), ch(2,'Partial Fractions','P4'), ch(3,'Coordinate Geometry in the (x, y) Plane','P4'),
    ch(4,'Binomial Expansion','P4'), ch(5,'Differentiation','P4'), ch(6,'Integration','P4'), ch(7,'Vectors','P4'),
  ],
  FP1: [
    ch(1,'Complex Numbers','FP1'), ch(2,'Roots of Quadratic Equations','FP1'),
    ch(3,'Numerical Solutions of Equations','FP1'), ch(4,'Coordinate Systems','FP1'),
    ch(5,'Matrices','FP1'), ch(6,'Transformations Using Matrices','FP1'), ch(7,'Series','FP1'), ch(8,'Proof','FP1'),
  ],
  FP2: [
    ch(1,'Inequalities','FP2'), ch(2,'Series','FP2'), ch(3,'Complex Numbers','FP2'), ch(4,'Further Argand Diagrams','FP2'),
    ch(5,'First-order Differential Equations','FP2'), ch(6,'Second-order Differential Equations','FP2'),
    ch(7,'Maclaurin and Taylor Series','FP2'), ch(8,'Polar Coordinates','FP2'),
  ],
  S1: [
    ch(1,'Mathematical Modelling','S1'), ch(2,'Measures of Location and Spread','S1'),
    ch(3,'Representations of Data','S1'), ch(4,'Probability','S1'),
    ch(5,'Correlation and Regression','S1'), ch(6,'Discrete Random Variables','S1'), ch(7,'The Normal Distribution','S1'),
  ],
  S2: [
    ch(1,'Binomial Distributions','S2'), ch(2,'Poisson Distributions','S2'), ch(3,'Approximations','S2'),
    ch(4,'Continuous Random Variables','S2'), ch(5,'Continuous Uniform Distribution','S2'),
    ch(6,'Sampling and Sampling Distributions','S2'), ch(7,'Hypothesis Testing','S2'),
  ],
  S3: [
    ch(1,'Combinations of Random Variables','S3'), ch(2,'Sampling','S3'),
    ch(3,'Estimation, Confidence Intervals and Tests','S3'),
    ch(4,'Goodness of Fit and Contingency Tables','S3'), ch(5,'Regression and Correlation','S3'),
  ],
  M1: [
    ch(1,'Mathematical Models in Mechanics','M1'), ch(2,'Vectors in Mechanics','M1'),
    ch(3,'Kinematics of a Particle Moving in a Straight Line','M1'),
    ch(4,'Dynamics of a Particle Moving in a Straight Line or Plane','M1'),
    ch(5,'Statics of a Particle','M1'), ch(6,'Moments','M1'),
  ],
  M2: [
    ch(1,'Projectiles','M2'), ch(2,'Variable Acceleration','M2'), ch(3,'Centres of Mass','M2'),
    ch(4,'Work and Energy','M2'), ch(5,'Impulses and Collisions','M2'), ch(6,'Statics of Rigid Bodies','M2'),
  ],
  D1: [
    ch(1,'Algorithms','D1'), ch(2,'Graphs and Networks','D1'), ch(3,'Algorithms on Graphs','D1'),
    ch(4,'Route Inspection','D1'), ch(5,'The Travelling Salesman Problem','D1'),
    ch(6,'Critical Path Analysis','D1'), ch(7,'Linear Programming','D1'),
  ],
};

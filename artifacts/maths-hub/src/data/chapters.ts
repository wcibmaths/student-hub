import type { Freq } from './topics';

export interface Chapter {
  n: number;
  name: string;
  freq?: Freq;
  note?: string;
  epp?: string;
  sme?: string;
  pmt?: string;
  corbett?: string;
  es?: string;
}

const _epp4pm = 'https://www.exampaperspractice.co.uk';
const _sme4pm = 'https://www.savemyexams.com/igcse/further-maths/edexcel/';
const _pmt4pm = 'https://www.physicsandmathstutor.com/maths-revision/igcse-edexcel/further-pure/';
const _pmt_ial = 'https://www.physicsandmathstutor.com/maths-revision/a-level-edexcel-international/';
const _es = 'https://www.examsolutions.net/international-exams/edexcel/';
const _sme_ial = 'https://www.savemyexams.com/international-a-level/maths/edexcel/';

export const CHAPTERS_4PM1: Chapter[] = [
  { n: 1, name: 'Surds and Logarithmic Functions', freq: 'high', note: 'Surds, rationalising denominators, laws of logs, solving exponential and log equations.', epp: _epp4pm, sme: _sme4pm, pmt: _pmt4pm },
  { n: 2, name: 'The Quadratic Function', freq: 'very-high', note: 'Completing the square, discriminant, roots and coefficients, disguised quadratics.', epp: _epp4pm, sme: _sme4pm, pmt: _pmt4pm },
  { n: 3, name: 'Inequalities and Identities', freq: 'high', note: 'Solving quadratic inequalities, polynomial identities, factor and remainder theorems.', epp: _epp4pm, sme: _sme4pm, pmt: _pmt4pm },
  { n: 4, name: 'Sketching Polynomials', freq: 'medium', note: 'Sketching cubic and higher-degree curves, understanding roots and turning points.', epp: _epp4pm, sme: _sme4pm, pmt: _pmt4pm },
  { n: 5, name: 'Sequences and Series', freq: 'very-high', note: 'Arithmetic and geometric sequences, sum to n terms, sum to infinity of geometric series.', epp: _epp4pm, sme: _sme4pm, pmt: _pmt4pm },
  { n: 6, name: 'The Binomial Series', freq: 'high', note: 'Binomial expansion for positive integer powers using (a + b)ⁿ.', epp: _epp4pm, sme: _sme4pm, pmt: _pmt4pm },
  { n: 7, name: 'Scalar and Vector Quantities', freq: 'high', note: 'Vector addition, subtraction, magnitude, unit vectors, scalar product, geometric applications.', epp: _epp4pm, sme: _sme4pm, pmt: _pmt4pm },
  { n: 8, name: 'Rectangular Cartesian Coordinates', freq: 'high', note: 'Distance, midpoint, perpendicular bisector, equation of a circle, tangent and chord properties.', epp: _epp4pm, sme: _sme4pm, pmt: _pmt4pm },
  { n: 9, name: 'Differentiation', freq: 'very-high', note: 'Product, quotient and chain rules; eˣ, sin x, cos x; tangents, normals, stationary points.', epp: _epp4pm, sme: _sme4pm, pmt: _pmt4pm },
  { n: 10, name: 'Integration', freq: 'very-high', note: 'Definite and indefinite integrals, area under a curve, kinematics applications.', epp: _epp4pm, sme: _sme4pm, pmt: _pmt4pm },
  { n: 11, name: 'Trigonometry', freq: 'very-high', note: 'Radians, arc length, sector area, identities, equations in given intervals, 3D problems.', epp: _epp4pm, sme: _sme4pm, pmt: _pmt4pm },
];

function ch(n: number, name: string): Chapter {
  return { n, name, pmt: _pmt_ial, corbett: _es, sme: _sme_ial };
}

export const IAL_CHAPTERS: Record<string, Chapter[]> = {
  P1: [
    ch(1,'Algebraic Expressions'), ch(2,'Quadratics'), ch(3,'Equations and Inequalities'),
    ch(4,'Graphs and Transformations'), ch(5,'Straight Line Graphs'), ch(6,'Trigonometric Ratios'),
    ch(7,'Radians'), ch(8,'Differentiation'), ch(9,'Integration'),
  ],
  P2: [
    ch(1,'Algebraic Methods'), ch(2,'Coordinate Geometry in the (x, y) Plane'),
    ch(3,'Exponentials and Logarithms'), ch(4,'The Binomial Expansion'),
    ch(5,'Sequences and Series'), ch(6,'Trigonometric Identities and Equations'),
    ch(7,'Differentiation'), ch(8,'Integration'),
  ],
  P3: [
    ch(1,'Algebraic Methods'), ch(2,'Functions and Graphs'), ch(3,'Trigonometric Functions'),
    ch(4,'Trigonometric Addition Formulae'), ch(5,'Exponentials and Logarithms'),
    ch(6,'Differentiation'), ch(7,'Integration'), ch(8,'Numerical Methods'),
  ],
  P4: [
    ch(1,'Proof'), ch(2,'Partial Fractions'), ch(3,'Coordinate Geometry in the (x, y) Plane'),
    ch(4,'Binomial Expansion'), ch(5,'Differentiation'), ch(6,'Integration'), ch(7,'Vectors'),
  ],
  FP1: [
    ch(1,'Complex Numbers'), ch(2,'Roots of Quadratic Equations'),
    ch(3,'Numerical Solutions of Equations'), ch(4,'Coordinate Systems'),
    ch(5,'Matrices'), ch(6,'Transformations Using Matrices'), ch(7,'Series'), ch(8,'Proof'),
  ],
  FP2: [
    ch(1,'Inequalities'), ch(2,'Series'), ch(3,'Complex Numbers'), ch(4,'Further Argand Diagrams'),
    ch(5,'First-order Differential Equations'), ch(6,'Second-order Differential Equations'),
    ch(7,'Maclaurin and Taylor Series'), ch(8,'Polar Coordinates'),
  ],
  S1: [
    ch(1,'Mathematical Modelling'), ch(2,'Measures of Location and Spread'),
    ch(3,'Representations of Data'), ch(4,'Probability'),
    ch(5,'Correlation and Regression'), ch(6,'Discrete Random Variables'), ch(7,'The Normal Distribution'),
  ],
  S2: [
    ch(1,'Binomial Distributions'), ch(2,'Poisson Distributions'), ch(3,'Approximations'),
    ch(4,'Continuous Random Variables'), ch(5,'Continuous Uniform Distribution'),
    ch(6,'Sampling and Sampling Distributions'), ch(7,'Hypothesis Testing'),
  ],
  S3: [
    ch(1,'Combinations of Random Variables'), ch(2,'Sampling'),
    ch(3,'Estimation, Confidence Intervals and Tests'),
    ch(4,'Goodness of Fit and Contingency Tables'), ch(5,'Regression and Correlation'),
  ],
  M1: [
    ch(1,'Mathematical Models in Mechanics'), ch(2,'Vectors in Mechanics'),
    ch(3,'Kinematics of a Particle Moving in a Straight Line'),
    ch(4,'Dynamics of a Particle Moving in a Straight Line or Plane'),
    ch(5,'Statics of a Particle'), ch(6,'Moments'),
  ],
  M2: [
    ch(1,'Projectiles'), ch(2,'Variable Acceleration'), ch(3,'Centres of Mass'),
    ch(4,'Work and Energy'), ch(5,'Impulses and Collisions'), ch(6,'Statics of Rigid Bodies'),
  ],
  D1: [
    ch(1,'Algorithms'), ch(2,'Graphs and Networks'), ch(3,'Algorithms on Graphs'),
    ch(4,'Route Inspection'), ch(5,'The Travelling Salesman Problem'),
    ch(6,'Critical Path Analysis'), ch(7,'Linear Programming'),
  ],
};

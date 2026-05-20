import type { Freq } from './topics';

export interface ChapterLinks {
  aLevelMathsRevision?: string;
  rocketRevise?: string;
  pmtSolutionBank?: string;
  examSolutions?: string;
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

export const CHAPTERS_4PM1: Chapter[] = [
  { n: 1, name: 'Surds and Logarithmic Functions', freq: 'high',
    note: 'Surds, rationalising denominators, laws of logs, solving exponential and log equations.',
    links: { pmtSolutionBank: PMT_4PM_FP, examSolutions: ES_4PM } },
  { n: 2, name: 'The Quadratic Function', freq: 'very-high',
    note: 'Completing the square, discriminant, roots and coefficients, disguised quadratics.',
    links: { pmtSolutionBank: PMT_4PM_FP, examSolutions: ES_4PM } },
  { n: 3, name: 'Inequalities and Identities', freq: 'high',
    note: 'Solving quadratic inequalities, polynomial identities, factor and remainder theorems.',
    links: { pmtSolutionBank: PMT_4PM_FP, examSolutions: ES_4PM } },
  { n: 4, name: 'Sketching Polynomials', freq: 'medium',
    note: 'Sketching cubic and higher-degree curves, understanding roots and turning points.',
    links: { pmtSolutionBank: PMT_4PM_FP, examSolutions: ES_4PM } },
  { n: 5, name: 'Sequences and Series', freq: 'very-high',
    note: 'Arithmetic and geometric sequences, sum to n terms, sum to infinity of geometric series.',
    links: { pmtSolutionBank: PMT_4PM_FP, examSolutions: ES_4PM } },
  { n: 6, name: 'The Binomial Series', freq: 'high',
    note: 'Binomial expansion for positive integer powers using (a + b)ⁿ.',
    links: { pmtSolutionBank: PMT_4PM_FP, examSolutions: ES_4PM } },
  { n: 7, name: 'Scalar and Vector Quantities', freq: 'high',
    note: 'Vector addition, subtraction, magnitude, unit vectors, scalar product, geometric applications.',
    links: { pmtSolutionBank: PMT_4PM_FP, examSolutions: ES_4PM } },
  { n: 8, name: 'Rectangular Cartesian Coordinates', freq: 'high',
    note: 'Distance, midpoint, perpendicular bisector, equation of a circle, tangent and chord properties.',
    links: { pmtSolutionBank: PMT_4PM_FP, examSolutions: ES_4PM } },
  { n: 9, name: 'Differentiation', freq: 'very-high',
    note: 'Product, quotient and chain rules; eˣ, sin x, cos x; tangents, normals, stationary points.',
    links: { pmtSolutionBank: PMT_4PM_FP, examSolutions: ES_4PM } },
  { n: 10, name: 'Integration', freq: 'very-high',
    note: 'Definite and indefinite integrals, area under a curve, kinematics applications.',
    links: { pmtSolutionBank: PMT_4PM_FP, examSolutions: ES_4PM } },
  { n: 11, name: 'Trigonometry', freq: 'very-high',
    note: 'Radians, arc length, sector area, identities, equations in given intervals, 3D problems.',
    links: { pmtSolutionBank: PMT_4PM_FP, examSolutions: ES_4PM } },
];

export const IAL_CHAPTERS: Record<string, Chapter[]> = {
  P1: [
    { n: 1, name: 'Algebraic Expressions', links: { aLevelMathsRevision: 'https://alevelmathsrevision.com/pdf-viewer/?file=%2Fdownloads%2Fquestions-by-category%2Fedexcel-ial%2Fp1-surds-and-indices.pdf&qms=true', pmtSolutionBank: 'https://www.physicsandmathstutor.com/maths-revision/solutionbanks/edexcel-ial-pure-mathematics-1/' } },
    { n: 2, name: 'Quadratics', links: { aLevelMathsRevision: 'https://alevelmathsrevision.com/pdf-viewer/?file=%2Fdownloads%2Fquestions-by-category%2Fedexcel-ial%2Fp1-the-discriminant.pdf&qms=true', pmtSolutionBank: 'https://www.physicsandmathstutor.com/maths-revision/solutionbanks/edexcel-ial-pure-mathematics-1/' } },
    { n: 3, name: 'Equations and Inequalities', links: { pmtSolutionBank: 'https://www.physicsandmathstutor.com/maths-revision/solutionbanks/edexcel-ial-pure-mathematics-1/' } },
    { n: 4, name: 'Graphs and Transformations', links: { aLevelMathsRevision: 'https://alevelmathsrevision.com/pdf-viewer/?file=%2Fdownloads%2Fquestions-by-category%2Fedexcel-ial%2Fp1-transformations-of-functions.pdf&qms=true', pmtSolutionBank: 'https://www.physicsandmathstutor.com/maths-revision/solutionbanks/edexcel-ial-pure-mathematics-1/' } },
    { n: 5, name: 'Straight Line Graphs', links: { aLevelMathsRevision: 'https://alevelmathsrevision.com/pdf-viewer/?file=%2Fdownloads%2Fquestions-by-category%2Fedexcel-ial%2Fp1-straight-lines.pdf&qms=true', pmtSolutionBank: 'https://www.physicsandmathstutor.com/maths-revision/solutionbanks/edexcel-ial-pure-mathematics-1/' } },
    { n: 6, name: 'Trigonometric Ratios', links: { aLevelMathsRevision: 'https://alevelmathsrevision.com/pdf-viewer/?file=%2Fdownloads%2Fquestions-by-category%2Fedexcel-ial%2Fp1-sine-and-cosine-rules.pdf&qms=true', pmtSolutionBank: 'https://www.physicsandmathstutor.com/maths-revision/solutionbanks/edexcel-ial-pure-mathematics-1/' } },
    { n: 7, name: 'Radians', links: { pmtSolutionBank: 'https://www.physicsandmathstutor.com/maths-revision/solutionbanks/edexcel-ial-pure-mathematics-1/' } },
    { n: 8, name: 'Differentiation', links: { aLevelMathsRevision: 'https://alevelmathsrevision.com/pdf-viewer/?file=%2Fdownloads%2Fquestions-by-category%2Fedexcel-ial%2Fp1-differentiation.pdf&qms=true', pmtSolutionBank: 'https://www.physicsandmathstutor.com/maths-revision/solutionbanks/edexcel-ial-pure-mathematics-1/' } },
    { n: 9, name: 'Integration', links: { aLevelMathsRevision: 'https://alevelmathsrevision.com/pdf-viewer/?file=%2Fdownloads%2Fquestions-by-category%2Fedexcel-ial%2Fp1-integration.pdf&qms=true', pmtSolutionBank: 'https://www.physicsandmathstutor.com/maths-revision/solutionbanks/edexcel-ial-pure-mathematics-1/' } },
  ],
  P2: [
    { n: 1, name: 'Algebraic Methods', links: { aLevelMathsRevision: 'https://alevelmathsrevision.com/pdf-viewer/?file=%2Fdownloads%2Fquestions-by-category%2Fedexcel-ial%2Fp2-factor-and-remainder-theorem.pdf&qms=true', pmtSolutionBank: 'https://www.physicsandmathstutor.com/maths-revision/solutionbanks/edexcel-ial-pure-mathematics-2/' } },
    { n: 2, name: 'Coordinate Geometry in the (x, y) Plane', links: { aLevelMathsRevision: 'https://alevelmathsrevision.com/pdf-viewer/?file=%2Fdownloads%2Fquestions-by-category%2Fedexcel-ial%2Fp2-circles.pdf&qms=true', pmtSolutionBank: 'https://www.physicsandmathstutor.com/maths-revision/solutionbanks/edexcel-ial-pure-mathematics-2/' } },
    { n: 3, name: 'Exponentials and Logarithms', links: { aLevelMathsRevision: 'https://alevelmathsrevision.com/pdf-viewer/?file=%2Fdownloads%2Fquestions-by-category%2Fedexcel-ial%2Fp2-exponentials-and-logarithms.pdf&qms=true', pmtSolutionBank: 'https://www.physicsandmathstutor.com/maths-revision/solutionbanks/edexcel-ial-pure-mathematics-2/' } },
    { n: 4, name: 'The Binomial Expansion', links: { aLevelMathsRevision: 'https://alevelmathsrevision.com/pdf-viewer/?file=%2Fdownloads%2Fquestions-by-category%2Fedexcel-ial%2Fp2-binomial-expansion.pdf&qms=true', pmtSolutionBank: 'https://www.physicsandmathstutor.com/maths-revision/solutionbanks/edexcel-ial-pure-mathematics-2/' } },
    { n: 5, name: 'Sequences and Series', links: { aLevelMathsRevision: 'https://alevelmathsrevision.com/pdf-viewer/?file=%2Fdownloads%2Fquestions-by-category%2Fedexcel-ial%2Fp2-inductive-sequences.pdf&qms=true', pmtSolutionBank: 'https://www.physicsandmathstutor.com/maths-revision/solutionbanks/edexcel-ial-pure-mathematics-2/' } },
    { n: 6, name: 'Trigonometric Identities and Equations', links: { aLevelMathsRevision: 'https://alevelmathsrevision.com/pdf-viewer/?file=%2Fdownloads%2Fquestions-by-category%2Fedexcel-ial%2Fp2-trigonometric-equations.pdf&qms=true', pmtSolutionBank: 'https://www.physicsandmathstutor.com/maths-revision/solutionbanks/edexcel-ial-pure-mathematics-2/' } },
    { n: 7, name: 'Differentiation', links: { aLevelMathsRevision: 'https://alevelmathsrevision.com/pdf-viewer/?file=%2Fdownloads%2Fquestions-by-category%2Fedexcel-ial%2Fp2-applications-of-differentiation.pdf&qms=true', pmtSolutionBank: 'https://www.physicsandmathstutor.com/maths-revision/solutionbanks/edexcel-ial-pure-mathematics-2/' } },
    { n: 8, name: 'Integration', links: { aLevelMathsRevision: 'https://alevelmathsrevision.com/pdf-viewer/?file=%2Fdownloads%2Fquestions-by-category%2Fedexcel-ial%2Fp2-definite-integrals.pdf&qms=true', pmtSolutionBank: 'https://www.physicsandmathstutor.com/maths-revision/solutionbanks/edexcel-ial-pure-mathematics-2/' } },
  ],
  P3: [
    { n: 1, name: 'Algebraic Methods', links: { aLevelMathsRevision: 'https://alevelmathsrevision.com/pdf-viewer/?file=%2Fdownloads%2Fquestions-by-category%2Fedexcel-ial%2Fp3-reduction-to-linear-form.pdf&qms=true', pmtSolutionBank: 'https://www.physicsandmathstutor.com/maths-revision/solutionbanks/edexcel-ial-pure-mathematics-3/' } },
    { n: 2, name: 'Functions and Graphs', links: { aLevelMathsRevision: 'https://alevelmathsrevision.com/pdf-viewer/?file=%2Fdownloads%2Fquestions-by-category%2Fedexcel-ial%2Fp3-functions.pdf&qms=true', pmtSolutionBank: 'https://www.physicsandmathstutor.com/maths-revision/solutionbanks/edexcel-ial-pure-mathematics-3/' } },
    { n: 3, name: 'Trigonometric Functions', links: { aLevelMathsRevision: 'https://alevelmathsrevision.com/pdf-viewer/?file=%2Fdownloads%2Fquestions-by-category%2Fedexcel-ial%2Fp3-the-form-asinx-bcosx.pdf&qms=true', pmtSolutionBank: 'https://www.physicsandmathstutor.com/maths-revision/solutionbanks/edexcel-ial-pure-mathematics-3/' } },
    { n: 4, name: 'Trigonometric Addition Formulae', links: { aLevelMathsRevision: 'https://alevelmathsrevision.com/pdf-viewer/?file=%2Fdownloads%2Fquestions-by-category%2Fedexcel-ial%2Fp3-further-trigonometric-identities.pdf&qms=true', pmtSolutionBank: 'https://www.physicsandmathstutor.com/maths-revision/solutionbanks/edexcel-ial-pure-mathematics-3/' } },
    { n: 5, name: 'Exponentials and Logarithms', links: { aLevelMathsRevision: 'https://alevelmathsrevision.com/pdf-viewer/?file=%2Fdownloads%2Fquestions-by-category%2Fedexcel-ial%2Fp3-modelling-with-exponentials.pdf&qms=true', pmtSolutionBank: 'https://www.physicsandmathstutor.com/maths-revision/solutionbanks/edexcel-ial-pure-mathematics-3/' } },
    { n: 6, name: 'Differentiation', links: { aLevelMathsRevision: 'https://alevelmathsrevision.com/pdf-viewer/?file=%2Fdownloads%2Fquestions-by-category%2Fedexcel-ial%2Fp3-differentiation-chain-product-quotient-rule.pdf&qms=true', pmtSolutionBank: 'https://www.physicsandmathstutor.com/maths-revision/solutionbanks/edexcel-ial-pure-mathematics-3/' } },
    { n: 7, name: 'Integration', links: { aLevelMathsRevision: 'https://alevelmathsrevision.com/pdf-viewer/?file=%2Fdownloads%2Fquestions-by-category%2Fedexcel-ial%2Fp3-integration.pdf&qms=true', pmtSolutionBank: 'https://www.physicsandmathstutor.com/maths-revision/solutionbanks/edexcel-ial-pure-mathematics-3/' } },
    { n: 8, name: 'Numerical Methods', links: { aLevelMathsRevision: 'https://alevelmathsrevision.com/pdf-viewer/?file=%2Fdownloads%2Fquestions-by-category%2Fedexcel-ial%2Fp3-numerical-methods.pdf&qms=true', pmtSolutionBank: 'https://www.physicsandmathstutor.com/maths-revision/solutionbanks/edexcel-ial-pure-mathematics-3/' } },
  ],
  P4: [
    { n: 1, name: 'Proof', links: { aLevelMathsRevision: 'https://alevelmathsrevision.com/pdf-viewer/?file=%2Fdownloads%2Fquestions-by-category%2Fedexcel-ial%2Fp4-proof-by-contradiction.pdf&qms=true', pmtSolutionBank: 'https://www.physicsandmathstutor.com/maths-revision/solutionbanks/edexcel-ial-pure-mathematics-4/' } },
    { n: 2, name: 'Partial Fractions', links: { pmtSolutionBank: 'https://www.physicsandmathstutor.com/maths-revision/solutionbanks/edexcel-ial-pure-mathematics-4/' } },
    { n: 3, name: 'Coordinate Geometry in the (x, y) Plane', links: { pmtSolutionBank: 'https://www.physicsandmathstutor.com/maths-revision/solutionbanks/edexcel-ial-pure-mathematics-4/' } },
    { n: 4, name: 'Binomial Expansion', links: { aLevelMathsRevision: 'https://alevelmathsrevision.com/pdf-viewer/?file=%2Fdownloads%2Fquestions-by-category%2Fedexcel-ial%2Fp4-general-binomial-expansion.pdf&qms=true', pmtSolutionBank: 'https://www.physicsandmathstutor.com/maths-revision/solutionbanks/edexcel-ial-pure-mathematics-4/' } },
    { n: 5, name: 'Differentiation', links: { aLevelMathsRevision: 'https://alevelmathsrevision.com/pdf-viewer/?file=%2Fdownloads%2Fquestions-by-category%2Fedexcel-ial%2Fp4-connected-rates-of-change.pdf&qms=true', pmtSolutionBank: 'https://www.physicsandmathstutor.com/maths-revision/solutionbanks/edexcel-ial-pure-mathematics-4/' } },
    { n: 6, name: 'Integration', links: { aLevelMathsRevision: 'https://alevelmathsrevision.com/pdf-viewer/?file=%2Fdownloads%2Fquestions-by-category%2Fedexcel-ial%2Fp4-integration-by-parts.pdf&qms=true', pmtSolutionBank: 'https://www.physicsandmathstutor.com/maths-revision/solutionbanks/edexcel-ial-pure-mathematics-4/' } },
    { n: 7, name: 'Vectors', links: { aLevelMathsRevision: 'https://alevelmathsrevision.com/pdf-viewer/?file=%2Fdownloads%2Fquestions-by-category%2Fedexcel-ial%2Fp4-vectors.pdf&qms=true', pmtSolutionBank: 'https://www.physicsandmathstutor.com/maths-revision/solutionbanks/edexcel-ial-pure-mathematics-4/' } },
  ],
  FP1: [
    { n: 1, name: 'Complex Numbers', links: { pmtSolutionBank: 'https://www.physicsandmathstutor.com/maths-revision/solutionbanks/edexcel-ial-further-pure-1/' } },
    { n: 2, name: 'Roots of Quadratic Equations', links: { pmtSolutionBank: 'https://www.physicsandmathstutor.com/maths-revision/solutionbanks/edexcel-ial-further-pure-1/' } },
    { n: 3, name: 'Numerical Solutions of Equations', links: { pmtSolutionBank: 'https://www.physicsandmathstutor.com/maths-revision/solutionbanks/edexcel-ial-further-pure-1/' } },
    { n: 4, name: 'Coordinate Systems', links: { pmtSolutionBank: 'https://www.physicsandmathstutor.com/maths-revision/solutionbanks/edexcel-ial-further-pure-1/' } },
    { n: 5, name: 'Matrices', links: { pmtSolutionBank: 'https://www.physicsandmathstutor.com/maths-revision/solutionbanks/edexcel-ial-further-pure-1/' } },
    { n: 6, name: 'Transformations Using Matrices', links: { pmtSolutionBank: 'https://www.physicsandmathstutor.com/maths-revision/solutionbanks/edexcel-ial-further-pure-1/' } },
    { n: 7, name: 'Series', links: { pmtSolutionBank: 'https://www.physicsandmathstutor.com/maths-revision/solutionbanks/edexcel-ial-further-pure-1/' } },
    { n: 8, name: 'Proof', links: { pmtSolutionBank: 'https://www.physicsandmathstutor.com/maths-revision/solutionbanks/edexcel-ial-further-pure-1/' } },
  ],
  FP2: [
    { n: 1, name: 'Inequalities', links: { pmtSolutionBank: 'https://www.physicsandmathstutor.com/maths-revision/solutionbanks/edexcel-ial-further-pure-2/' } },
    { n: 2, name: 'Series', links: { pmtSolutionBank: 'https://www.physicsandmathstutor.com/maths-revision/solutionbanks/edexcel-ial-further-pure-2/' } },
    { n: 3, name: 'Complex Numbers', links: { pmtSolutionBank: 'https://www.physicsandmathstutor.com/maths-revision/solutionbanks/edexcel-ial-further-pure-2/' } },
    { n: 4, name: 'Further Argand Diagrams', links: { pmtSolutionBank: 'https://www.physicsandmathstutor.com/maths-revision/solutionbanks/edexcel-ial-further-pure-2/' } },
    { n: 5, name: 'First-order Differential Equations', links: { pmtSolutionBank: 'https://www.physicsandmathstutor.com/maths-revision/solutionbanks/edexcel-ial-further-pure-2/' } },
    { n: 6, name: 'Second-order Differential Equations', links: { pmtSolutionBank: 'https://www.physicsandmathstutor.com/maths-revision/solutionbanks/edexcel-ial-further-pure-2/' } },
    { n: 7, name: 'Maclaurin and Taylor Series', links: { pmtSolutionBank: 'https://www.physicsandmathstutor.com/maths-revision/solutionbanks/edexcel-ial-further-pure-2/' } },
    { n: 8, name: 'Polar Coordinates', links: { pmtSolutionBank: 'https://www.physicsandmathstutor.com/maths-revision/solutionbanks/edexcel-ial-further-pure-2/' } },
  ],
  S1: [
    { n: 1, name: 'Mathematical Modelling', links: { pmtSolutionBank: 'https://www.physicsandmathstutor.com/maths-revision/solutionbanks/edexcel-ial-statistics-1/' } },
    { n: 2, name: 'Measures of Location and Spread', links: { aLevelMathsRevision: 'https://alevelmathsrevision.com/pdf-viewer/?file=%2Fdownloads%2Fquestions-by-category%2Fedexcel-ial%2Fs1-averages-and-spread.pdf&qms=true', pmtSolutionBank: 'https://www.physicsandmathstutor.com/maths-revision/solutionbanks/edexcel-ial-statistics-1/' } },
    { n: 3, name: 'Representations of Data', links: { aLevelMathsRevision: 'https://alevelmathsrevision.com/pdf-viewer/?file=%2Fdownloads%2Fquestions-by-category%2Fedexcel-ial%2Fs1-graphical-representation-of-data.pdf&qms=true', pmtSolutionBank: 'https://www.physicsandmathstutor.com/maths-revision/solutionbanks/edexcel-ial-statistics-1/' } },
    { n: 4, name: 'Probability', links: { aLevelMathsRevision: 'https://alevelmathsrevision.com/pdf-viewer/?file=%2Fdownloads%2Fquestions-by-category%2Fedexcel-ial%2Fs1-probability.pdf&qms=true', pmtSolutionBank: 'https://www.physicsandmathstutor.com/maths-revision/solutionbanks/edexcel-ial-statistics-1/' } },
    { n: 5, name: 'Correlation and Regression', links: { aLevelMathsRevision: 'https://alevelmathsrevision.com/pdf-viewer/?file=%2Fdownloads%2Fquestions-by-category%2Fedexcel-ial%2Fs1-correlation-and-regression.pdf&qms=true', pmtSolutionBank: 'https://www.physicsandmathstutor.com/maths-revision/solutionbanks/edexcel-ial-statistics-1/' } },
    { n: 6, name: 'Discrete Random Variables', links: { aLevelMathsRevision: 'https://alevelmathsrevision.com/pdf-viewer/?file=%2Fdownloads%2Fquestions-by-category%2Fedexcel-ial%2Fs1-discrete-random-variables.pdf&qms=true', pmtSolutionBank: 'https://www.physicsandmathstutor.com/maths-revision/solutionbanks/edexcel-ial-statistics-1/' } },
    { n: 7, name: 'The Normal Distribution', links: { aLevelMathsRevision: 'https://alevelmathsrevision.com/pdf-viewer/?file=%2Fdownloads%2Fquestions-by-category%2Fedexcel-ial%2Fs1-normal-distribution.pdf&qms=true', pmtSolutionBank: 'https://www.physicsandmathstutor.com/maths-revision/solutionbanks/edexcel-ial-statistics-1/' } },
  ],
  S2: [
    { n: 1, name: 'Binomial Distributions', links: { pmtSolutionBank: 'https://www.physicsandmathstutor.com/maths-revision/solutionbanks/edexcel-ial-statistics-2/' } },
    { n: 2, name: 'Poisson Distributions', links: { pmtSolutionBank: 'https://www.physicsandmathstutor.com/maths-revision/solutionbanks/edexcel-ial-statistics-2/' } },
    { n: 3, name: 'Approximations', links: { pmtSolutionBank: 'https://www.physicsandmathstutor.com/maths-revision/solutionbanks/edexcel-ial-statistics-2/' } },
    { n: 4, name: 'Continuous Random Variables', links: { pmtSolutionBank: 'https://www.physicsandmathstutor.com/maths-revision/solutionbanks/edexcel-ial-statistics-2/' } },
    { n: 5, name: 'Continuous Uniform Distribution', links: { pmtSolutionBank: 'https://www.physicsandmathstutor.com/maths-revision/solutionbanks/edexcel-ial-statistics-2/' } },
    { n: 6, name: 'Sampling and Sampling Distributions', links: { pmtSolutionBank: 'https://www.physicsandmathstutor.com/maths-revision/solutionbanks/edexcel-ial-statistics-2/' } },
    { n: 7, name: 'Hypothesis Testing', links: { pmtSolutionBank: 'https://www.physicsandmathstutor.com/maths-revision/solutionbanks/edexcel-ial-statistics-2/' } },
  ],
  S3: [
    { n: 1, name: 'Combinations of Random Variables', links: { pmtSolutionBank: 'https://www.physicsandmathstutor.com/maths-revision/solutionbanks/edexcel-ial-statistics-3/' } },
    { n: 2, name: 'Sampling', links: { pmtSolutionBank: 'https://www.physicsandmathstutor.com/maths-revision/solutionbanks/edexcel-ial-statistics-3/' } },
    { n: 3, name: 'Estimation, Confidence Intervals and Tests', links: { pmtSolutionBank: 'https://www.physicsandmathstutor.com/maths-revision/solutionbanks/edexcel-ial-statistics-3/' } },
    { n: 4, name: 'Goodness of Fit and Contingency Tables', links: { pmtSolutionBank: 'https://www.physicsandmathstutor.com/maths-revision/solutionbanks/edexcel-ial-statistics-3/' } },
    { n: 5, name: 'Regression and Correlation', links: { pmtSolutionBank: 'https://www.physicsandmathstutor.com/maths-revision/solutionbanks/edexcel-ial-statistics-3/' } },
  ],
  M1: [
    { n: 1, name: 'Mathematical Models in Mechanics', links: { pmtSolutionBank: 'https://www.physicsandmathstutor.com/maths-revision/solutionbanks/edexcel-ial-mechanics-1/' } },
    { n: 2, name: 'Vectors in Mechanics', links: { pmtSolutionBank: 'https://www.physicsandmathstutor.com/maths-revision/solutionbanks/edexcel-ial-mechanics-1/' } },
    { n: 3, name: 'Kinematics of a Particle Moving in a Straight Line', links: { pmtSolutionBank: 'https://www.physicsandmathstutor.com/maths-revision/solutionbanks/edexcel-ial-mechanics-1/' } },
    { n: 4, name: 'Dynamics of a Particle Moving in a Straight Line or Plane', links: { pmtSolutionBank: 'https://www.physicsandmathstutor.com/maths-revision/solutionbanks/edexcel-ial-mechanics-1/' } },
    { n: 5, name: 'Statics of a Particle', links: { pmtSolutionBank: 'https://www.physicsandmathstutor.com/maths-revision/solutionbanks/edexcel-ial-mechanics-1/' } },
    { n: 6, name: 'Moments', links: { pmtSolutionBank: 'https://www.physicsandmathstutor.com/maths-revision/solutionbanks/edexcel-ial-mechanics-1/' } },
  ],
  M2: [
    { n: 1, name: 'Projectiles', links: { pmtSolutionBank: 'https://www.physicsandmathstutor.com/maths-revision/solutionbanks/edexcel-ial-mechanics-2/' } },
    { n: 2, name: 'Variable Acceleration', links: { pmtSolutionBank: 'https://www.physicsandmathstutor.com/maths-revision/solutionbanks/edexcel-ial-mechanics-2/' } },
    { n: 3, name: 'Centres of Mass', links: { pmtSolutionBank: 'https://www.physicsandmathstutor.com/maths-revision/solutionbanks/edexcel-ial-mechanics-2/' } },
    { n: 4, name: 'Work and Energy', links: { pmtSolutionBank: 'https://www.physicsandmathstutor.com/maths-revision/solutionbanks/edexcel-ial-mechanics-2/' } },
    { n: 5, name: 'Impulses and Collisions', links: { pmtSolutionBank: 'https://www.physicsandmathstutor.com/maths-revision/solutionbanks/edexcel-ial-mechanics-2/' } },
    { n: 6, name: 'Statics of Rigid Bodies', links: { pmtSolutionBank: 'https://www.physicsandmathstutor.com/maths-revision/solutionbanks/edexcel-ial-mechanics-2/' } },
  ],
  D1: [
    { n: 1, name: 'Algorithms', links: { pmtSolutionBank: 'https://www.physicsandmathstutor.com/maths-revision/solutionbanks/edexcel-ial-decision-1/' } },
    { n: 2, name: 'Graphs and Networks', links: { pmtSolutionBank: 'https://www.physicsandmathstutor.com/maths-revision/solutionbanks/edexcel-ial-decision-1/' } },
    { n: 3, name: 'Algorithms on Graphs', links: { pmtSolutionBank: 'https://www.physicsandmathstutor.com/maths-revision/solutionbanks/edexcel-ial-decision-1/' } },
    { n: 4, name: 'Route Inspection', links: { pmtSolutionBank: 'https://www.physicsandmathstutor.com/maths-revision/solutionbanks/edexcel-ial-decision-1/' } },
    { n: 5, name: 'The Travelling Salesman Problem', links: { pmtSolutionBank: 'https://www.physicsandmathstutor.com/maths-revision/solutionbanks/edexcel-ial-decision-1/' } },
    { n: 6, name: 'Critical Path Analysis', links: { pmtSolutionBank: 'https://www.physicsandmathstutor.com/maths-revision/solutionbanks/edexcel-ial-decision-1/' } },
    { n: 7, name: 'Linear Programming', links: { pmtSolutionBank: 'https://www.physicsandmathstutor.com/maths-revision/solutionbanks/edexcel-ial-decision-1/' } },
  ],
};
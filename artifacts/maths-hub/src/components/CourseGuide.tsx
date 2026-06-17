import type React from 'react';

type Variant = '4ma1' | '4pm1' | 'ial-maths' | 'ial-fm';
type Tone = 'blue' | 'green' | 'amber' | 'purple' | 'red';
type Row = Record<string, React.ReactNode>;

interface CourseGuideProps {
  variant: Variant;
}

interface ResourceLink {
  label: string;
  href?: string;
}

interface CourseContent {
  overviewBadge: string;
  examBadge: string;
  overview: React.ReactNode;
  exam: React.ReactNode;
  expectations: Row[];
  success: string[];
  topTip: string;
  resources: ResourceLink[];
}

const alertLead = 'External exam results are awarded by Pearson.';
const alertRest = 'Internal grades are school judgements based on current evidence and are used to guide support, intervention, and target review.';

const helpItems = [
  'Homework takes much longer than expected.',
  'The same mistake keeps happening.',
  'Feedback is unclear.',
  'Test results are below target.',
  'You are not sure how to revise.',
  'You feel behind with the pace of the course.',
];

const internalGradeItems = [
  { label: 'CAG', text: 'Current Attainment Grade. This shows the student’s current working grade based on evidence from taught content.' },
  { label: 'LB', text: 'Learning Behaviour. This reflects preparation, effort, feedback, independence, and responsibility.' },
  { label: 'Progress Colour', text: 'Blue, Green, or Amber. This shows whether the student is on track against their target.' },
  { label: 'Mock Results', text: 'Internal exam-style assessments used to identify gaps and guide support.' },
  { label: 'Teacher Judgement', text: 'Based on evidence such as topic tests, timed assessments, classwork, prep, past-paper tasks, and mock exams.' },
];

const progressRows = [
  { Colour: <span className="colour-dot-row"><span className="colour-dot blue" />Blue</span>, Meaning: 'On track to exceed target' },
  { Colour: <span className="colour-dot-row"><span className="colour-dot green" />Green</span>, Meaning: 'On track to meet target' },
  { Colour: <span className="colour-dot-row"><span className="colour-dot amber" />Amber</span>, Meaning: 'Not currently on track to meet target' },
];

const resources = {
  pearson4ma1: 'https://qualifications.pearson.com/en/qualifications/edexcel-international-gcses/international-gcse-mathematics-a-2016.html',
  pearson4pm1: 'https://qualifications.pearson.com/en/qualifications/edexcel-international-gcses/international-gcse-further-pure-mathematics-2017.html',
  pearsonIal: 'https://qualifications.pearson.com/en/qualifications/edexcel-international-advanced-levels/mathematics-2018.html',
  pastPapers: 'https://qualifications.pearson.com/en/support/support-topics/exams/past-papers.html',
  sparx: 'https://www.sparxmaths.uk/',
  corbett: 'https://corbettmaths.com/',
  genie: 'https://www.mathsgenie.co.uk/',
  drFrost: 'https://www.drfrost.org/',
  saveMyExams: 'https://www.savemyexams.com/',
  pmt: 'https://www.physicsandmathstutor.com/',
};

const courseContent: Record<Variant, CourseContent> = {
  '4ma1': {
    overviewBadge: '4MA1',
    examBadge: 'Pearson',
    overview: <>
      <p>Students follow Pearson Edexcel International GCSE Mathematics A, Higher Tier, 4MA1. This is the main IGCSE Mathematics course for Years 10 and 11. It develops fluency, reasoning, problem solving, and exam technique across number, algebra, geometry, statistics, probability, graphs, ratio, and trigonometry.</p>
      <p>This is a linear qualification. Students sit both final papers in the same exam series.</p>
      <div className="guide-callout"><strong>When is it taken?</strong><span>Most students sit this qualification at the end of Year 11. Some accelerated students may sit it earlier, depending on school entry decisions.</span></div>
    </>,
    exam: <>
      <p><strong>External qualification:</strong> Pearson Edexcel International GCSE Mathematics A, 4MA1, Higher Tier.</p>
      <GuideTable rows={[{ Paper: 'Paper 1H', Code: '4MA1/1H', Length: '2 hours', Notes: 'Calculator allowed' }, { Paper: 'Paper 2H', Code: '4MA1/2H', Length: '2 hours', Notes: 'Calculator allowed' }]} />
      <p>Both papers assess the full Higher Tier course.</p>
    </>,
    expectations: [
      { Area: '▣ Equipment', Expectation: 'Bring calculator, ruler, pencil, protractor, compasses, pen and exercise book' },
      { Area: '▣ Prep', Expectation: 'Complete weekly Sparx or teacher-set prep' },
      { Area: '▣ Bookwork', Expectation: 'Show full working, not only final answers' },
      { Area: '▣ Revision', Expectation: 'Use topic practice, past papers and correction tasks' },
      { Area: '▣ Feedback', Expectation: 'Act on feedback after tests and mocks' },
      { Area: '▣ Independence', Expectation: 'Ask for help early when a topic is unclear' },
    ],
    success: ['Practise little and often.', 'Start revision with weaker topics.', 'Learn calculator skills early.', 'Correct every lost mark after assessments.', 'Use topic practice before full past papers.', 'Build confidence across all strands, not only algebra.'],
    topTip: 'Regular short practice is more effective than last-minute revision. Consistency builds confidence.',
    resources: [{ label: 'Pearson, IGCSE Mathematics A 4MA1', href: resources.pearson4ma1 }, { label: 'Specification', href: resources.pearson4ma1 }, { label: 'Past papers and mark schemes, Pearson', href: resources.pastPapers }, { label: 'Sparx Maths, login via school', href: resources.sparx }, { label: 'Corbett Maths', href: resources.corbett }, { label: 'Maths Genie', href: resources.genie }],
  },
  '4pm1': {
    overviewBadge: '4PM1',
    examBadge: 'Pearson',
    overview: <p>Students on the accelerated pathway study Pearson Edexcel International GCSE Further Pure Mathematics, 4PM1, alongside IGCSE Mathematics A. This is an extension qualification. It is not a second version of IGCSE Maths. It moves faster and includes more advanced algebra, calculus, trigonometry, functions, vectors, coordinate geometry, logarithms, polynomials, series, and proof-style reasoning.</p>,
    exam: <>
      <p><strong>External qualification:</strong> Pearson Edexcel International GCSE Further Pure Mathematics, 4PM1.</p>
      <GuideTable rows={[{ Paper: 'Paper 1', Code: '4PM1/01', Length: '2 hours' }, { Paper: 'Paper 2', Code: '4PM1/02', Length: '2 hours' }]} />
      <div className="guide-callout"><strong>Timing note</strong><span>On the current accelerated pathway, students usually sit IGCSE Mathematics A in November of Year 11, then sit Further Pure Mathematics in May or June of Year 11.</span></div>
    </>,
    expectations: [{ Area: '▣ Algebra', Expectation: 'Maintain strong fluency with manipulation, factorising, functions and equations' }, { Area: '▣ Prep', Expectation: 'Complete all assigned work on time' }, { Area: '▣ Correction', Expectation: 'Rework mistakes fully after tests and mock papers' }, { Area: '▣ Resilience', Expectation: 'Stay with longer problems and unfamiliar questions' }],
    success: ['Keep algebra fluent.', 'Review each new method on the same day.', 'Practise calculus, trigonometry, functions, vectors, and coordinate geometry regularly.', 'Keep an error log from mock papers.', 'Use mock papers to identify priority topics.', 'Ask for support as soon as the pace feels too fast.'],
    topTip: 'Do not let algebra errors build up. Most Further Pure topics depend on accurate algebraic manipulation.',
    resources: [{ label: 'Pearson, IGCSE Further Pure Mathematics 4PM1', href: resources.pearson4pm1 }, { label: 'Specification', href: resources.pearson4pm1 }, { label: 'Past papers and mark schemes, Pearson', href: resources.pastPapers }, { label: 'Dr Frost Maths', href: resources.drFrost }, { label: 'Save My Exams', href: resources.saveMyExams }, { label: 'Physics and Maths Tutor, where available', href: resources.pmt }],
  },
  'ial-maths': {
    overviewBadge: '6 units',
    examBadge: 'Modular',
    overview: <><p>Students follow Pearson Edexcel International Advanced Level Mathematics. This is a modular course. Students sit separate unit exams and the results combine toward the final qualification.</p><p>Year 12 students normally complete the IAS part of the course through three units. The full IAL Mathematics qualification is built from six units across Year 12 and Year 13.</p></>,
    exam: <><p><strong>External qualification:</strong> Pearson Edexcel International Advanced Level Mathematics.</p><GuideTable rows={[{ Year: 'Year 12', Units: 'P1, P2, S1' }, { Year: 'Year 13', Units: 'P3, P4, plus M1 or D1' }]} /><p>Final unit entries are confirmed by the school and may vary by cohort.</p><GuideTable rows={[{ Unit: 'P1', Name: 'Pure Mathematics 1' }, { Unit: 'P2', Name: 'Pure Mathematics 2' }, { Unit: 'P3', Name: 'Pure Mathematics 3' }, { Unit: 'P4', Name: 'Pure Mathematics 4' }, { Unit: 'S1', Name: 'Statistics 1' }, { Unit: 'M1', Name: 'Mechanics 1' }, { Unit: 'D1', Name: 'Decision Mathematics 1' }]} /><p>M1 and D1 are listed as possible applied options. Students do not normally take both for IAL Mathematics unless school entries require this.</p></>,
    expectations: [{ Area: '▣ Organisation', Expectation: 'Keep clear folders or digital notes by module' }, { Area: '▣ Practice', Expectation: 'Complete regular exam-style questions' }, { Area: '▣ Review', Expectation: 'Correct mistakes after every assessment' }, { Area: '▣ Independence', Expectation: 'Use study periods effectively' }],
    success: ['Consolidate after every lesson.', 'Practise mixed exam-style questions every week.', 'Use official mark schemes to review work.', 'Track recurring errors by unit.', 'Complete timed papers before modular exams.', 'Ask for help early with algebra, calculus, statistics, mechanics, or decision topics.'],
    topTip: 'Past papers are most useful after topic basics are secure. Use them to improve exam technique and timing.',
    resources: [{ label: 'Pearson, International A Level Mathematics', href: resources.pearsonIal }, { label: 'Specification', href: resources.pearsonIal }, { label: 'Past papers and mark schemes, Pearson', href: resources.pastPapers }, { label: 'Formula booklet', href: resources.pearsonIal }, { label: 'Module practice in this hub' }, { label: 'Dr Frost Maths', href: resources.drFrost }],
  },
  'ial-fm': {
    overviewBadge: 'Pearson Edexcel',
    examBadge: 'Modular',
    overview: <p>Students follow Pearson Edexcel International Advanced Level Further Mathematics. This is a modular course for students with strong algebra fluency, high independence, and readiness for sustained abstract problem solving. It supports students considering mathematics, engineering, physics, computer science, economics, data science, or related university pathways.</p>,
    exam: <><p><strong>External qualification:</strong> Pearson Edexcel International Advanced Level Further Mathematics.</p><p>This course uses a combination of Further Pure and applied units. Students taking Further Mathematics usually also study A Level Mathematics. Across the full pathway, students complete Mathematics units and Further Mathematics units.</p><p>Typical Further Mathematics units may include:</p><GuideTable rows={[{ Units: 'FP1, FP2, S2, M2, D1, S3, M3, or other approved units depending on the pathway.' }]} /><p>Students taking both IAL Mathematics and IAL Further Mathematics need a full set of distinct unit results across the two qualifications. Final unit entries are confirmed by the school and may vary by cohort.</p></>,
    expectations: [{ Area: '▣ Fluency', Expectation: 'Maintain strong algebra and calculus skills' }, { Area: '▣ Pace', Expectation: 'Keep up with a faster sequence of topics' }, { Area: '▣ Accuracy', Expectation: 'Present clear, logical solutions' }, { Area: '▣ Enrichment', Expectation: 'Engage with extension problems where appropriate' }],
    success: ['Review advanced topics every week.', 'Practise proof, calculus, vectors, complex numbers, matrices, and applied topics regularly.', 'Keep a separate error log for Further Mathematics.', 'Work beyond routine examples.', 'Use past papers under timed conditions.', 'Ask for help before small gaps become serious.'],
    topTip: 'Small gaps grow quickly in Further Mathematics. Fix errors early and review them often.',
    resources: [{ label: 'Pearson, International A Level Mathematics and Further Mathematics', href: resources.pearsonIal }, { label: 'Specification', href: resources.pearsonIal }, { label: 'Past papers and mark schemes, Pearson', href: resources.pastPapers }, { label: 'Formula booklet', href: resources.pearsonIal }, { label: 'Module practice in this hub' }, { label: 'Advanced extension resources, if available' }],
  },
};

function GuideAlert() {
  return <div className="guide-alert"><span className="guide-alert-icon">i</span><p><strong>{alertLead}</strong> {alertRest}</p></div>;
}

function GuideCard({ number, title, badge, tone, children, full = false }: { number: number; title: string; badge?: string; tone: Tone; children: React.ReactNode; full?: boolean }) {
  return <section className={`guide-card ${full ? 'guide-full' : ''}`}><div className="guide-card-head"><div className="guide-title-wrap"><span className={`guide-icon ${tone}`}>{iconFor(number)}</span><h2>{number}. {title}</h2></div>{badge && <span className={`guide-badge ${tone}`}>{badge}</span>}</div>{children}</section>;
}

function iconFor(number: number) {
  return ['','▤','□','⌘','▥','✓','↗','?'][number];
}

function GuideTable({ rows }: { rows: Row[] }) {
  const heads = Object.keys(rows[0] || {});
  return <div className="guide-table-wrap"><table className="guide-table"><thead><tr>{heads.map(h => <th key={h}>{h}</th>)}</tr></thead><tbody>{rows.map((r, i) => <tr key={i}>{heads.map(h => <td key={h}>{r[h]}</td>)}</tr>)}</tbody></table></div>;
}

function InternalGradesCard() {
  return <GuideCard number={4} title="Internal grades and progress" badge="School reporting" tone="purple"><div className="internal-mini-list">{internalGradeItems.map(item => <div className="internal-mini" key={item.label}><strong>{item.label}</strong><span>{item.text}</span></div>)}</div><div><h3 className="guide-subhead">Progress colour guide</h3><GuideTable rows={progressRows} /></div></GuideCard>;
}

function SuccessCard({ success, topTip }: Pick<CourseContent, 'success' | 'topTip'>) {
  return <GuideCard number={5} title="How to succeed in this course" tone="green"><ul className="success-list">{success.map(item => <li key={item}>{item}</li>)}</ul><div className="top-tip"><strong>Top tip</strong><span>{topTip}</span></div></GuideCard>;
}

function ResourcesCard({ resources: links }: { resources: ResourceLink[] }) {
  return <GuideCard number={6} title="Useful resources" tone="blue"><div className="resource-list">{links.map(link => link.href ? <a href={link.href} target="_blank" rel="noopener noreferrer" key={link.label}>{link.label}<span aria-hidden="true">↗</span></a> : <span key={link.label}>{link.label}<span aria-hidden="true">↗</span></span>)}</div></GuideCard>;
}

function HelpCard() {
  return <GuideCard number={7} title="When to ask for help" tone="red" full><p>Ask your teacher for help when:</p><div className="help-tiles">{helpItems.map(item => <div className="help-tile" key={item}><span aria-hidden="true">!</span>{item}</div>)}</div></GuideCard>;
}

export function CourseGuide({ variant }: CourseGuideProps) {
  const content = courseContent[variant];
  return <div className="guide-wrap"><GuideAlert /><GuideCard number={1} title="Course overview" badge={content.overviewBadge} tone="blue">{content.overview}</GuideCard><GuideCard number={2} title="External exam" badge={content.examBadge} tone="green">{content.exam}</GuideCard><GuideCard number={3} title="School expectations" tone="amber"><GuideTable rows={content.expectations} /></GuideCard><InternalGradesCard /><SuccessCard success={content.success} topTip={content.topTip} /><ResourcesCard resources={content.resources} /><HelpCard /><p className="guide-footer-note">Information on this page is subject to change. Final unit entries and exam timetables are confirmed by the school.</p></div>;
}

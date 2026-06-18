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

interface Fact {
  label: string;
  value: string;
}

interface GradeContent {
  intro: React.ReactNode;
  rows: Row[];
  note: React.ReactNode;
}

interface CourseContent {
  overviewBadge: string;
  examBadge: string;
  facts: Fact[];
  overview: React.ReactNode;
  exam: React.ReactNode;
  grades?: GradeContent;
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
  resultsExplained: 'https://qualifications.pearson.com/en/support/support-topics/results-certification/understanding-marks-and-grades/understanding-your-results-information-for-students/edexcel-international-advanced-level-results-explained.html',
  sparx: 'https://www.sparxmaths.uk/',
  corbett: 'https://corbettmaths.com/',
  genie: 'https://www.mathsgenie.co.uk/',
  drFrost: 'https://www.drfrost.org/',
  saveMyExams: 'https://www.savemyexams.com/',
  pmt: 'https://www.physicsandmathstutor.com/',
};

const gradeLetter = (g: string) => <span className="grade-cell">{g}</span>;

const courseContent: Record<Variant, CourseContent> = {
  '4ma1': {
    overviewBadge: '4MA1',
    examBadge: 'Pearson',
    facts: [
      { label: 'When sat', value: 'End of Year 11' },
      { label: 'Papers', value: '2 × 2 hours' },
      { label: 'Calculator', value: 'Casio fx-991ES PLUS' },
      { label: 'Type', value: 'Linear' },
    ],
    overview: <>
      <p>Students follow Pearson Edexcel International GCSE Mathematics A, Higher Tier, 4MA1. This is the main IGCSE Mathematics course for Years 10 and 11. It develops fluency, reasoning, problem solving, and exam technique across number, algebra, geometry, statistics, probability, graphs, ratio, and trigonometry.</p>
      <p>This is a linear qualification. Students sit both final papers in the same exam series.</p>
      <div className="guide-callout"><strong>When is it taken?</strong><span>Most students sit this qualification at the end of Year 11. Some accelerated students may sit it earlier, depending on school entry decisions.</span></div>
    </>,
    exam: <>
      <p><strong>External qualification:</strong> Pearson Edexcel International GCSE Mathematics A, 4MA1, Higher Tier.</p>
      <GuideTable rows={[{ Paper: 'Paper 1H', Code: '4MA1/1H', Length: '2 hours', Notes: 'Calculator allowed' }, { Paper: 'Paper 2H', Code: '4MA1/2H', Length: '2 hours', Notes: 'Calculator allowed' }]} />
      <p>Both papers assess the full Higher Tier course and are sat in the same June series at the end of Year 11. Selected students may be entered early in the November series.</p>
    </>,
    expectations: [
      { Area: '▣ Equipment', Expectation: 'Bring a Casio fx-991ES PLUS (or equivalent scientific calculator), ruler, pencil, protractor, compasses, pen and exercise book' },
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
    facts: [
      { label: 'When sat', value: 'May/June, Year 11' },
      { label: 'Papers', value: '2 × 2 hours' },
      { label: 'Calculator', value: 'Casio fx-991ES PLUS' },
      { label: 'Type', value: 'Extension' },
    ],
    overview: <p>Students on the accelerated pathway study Pearson Edexcel International GCSE Further Pure Mathematics, 4PM1, alongside IGCSE Mathematics A. This is an extension qualification. It is not a second version of IGCSE Maths. It moves faster and includes more advanced algebra, calculus, trigonometry, functions, vectors, coordinate geometry, logarithms, polynomials, series, and proof-style reasoning.</p>,
    exam: <>
      <p><strong>External qualification:</strong> Pearson Edexcel International GCSE Further Pure Mathematics, 4PM1.</p>
      <GuideTable rows={[{ Paper: 'Paper 1', Code: '4PM1/01', Length: '2 hours' }, { Paper: 'Paper 2', Code: '4PM1/02', Length: '2 hours' }]} />
      <div className="guide-callout"><strong>Timing note</strong><span>On the current accelerated pathway, students usually sit IGCSE Mathematics A in November of Year 11, then sit Further Pure Mathematics in May or June of Year 11.</span></div>
    </>,
    expectations: [{ Area: '▣ Equipment', Expectation: 'Bring a Casio fx-991ES PLUS (or equivalent scientific calculator) to every lesson and exam' }, { Area: '▣ Algebra', Expectation: 'Maintain strong fluency with manipulation, factorising, functions and equations' }, { Area: '▣ Prep', Expectation: 'Complete all assigned work on time' }, { Area: '▣ Correction', Expectation: 'Rework mistakes fully after tests and mock papers' }, { Area: '▣ Resilience', Expectation: 'Stay with longer problems and unfamiliar questions' }],
    success: ['Keep algebra fluent.', 'Review each new method on the same day.', 'Practise calculus, trigonometry, functions, vectors, and coordinate geometry regularly.', 'Keep an error log from mock papers.', 'Use mock papers to identify priority topics.', 'Ask for support as soon as the pace feels too fast.'],
    topTip: 'Do not let algebra errors build up. Most Further Pure topics depend on accurate algebraic manipulation.',
    resources: [{ label: 'Pearson, IGCSE Further Pure Mathematics 4PM1', href: resources.pearson4pm1 }, { label: 'Specification', href: resources.pearson4pm1 }, { label: 'Past papers and mark schemes, Pearson', href: resources.pastPapers }, { label: 'Dr Frost Maths', href: resources.drFrost }, { label: 'Save My Exams', href: resources.saveMyExams }, { label: 'Physics and Maths Tutor, where available', href: resources.pmt }],
  },
  'ial-maths': {
    overviewBadge: '6 units',
    examBadge: 'Modular',
    facts: [
      { label: 'Structure', value: '6 units' },
      { label: 'Exams', value: 'June, each year' },
      { label: 'Calculator', value: 'Casio fx-CG50' },
      { label: 'Grading', value: 'A* to E' },
    ],
    overview: <><p>Students follow Pearson Edexcel International Advanced Level Mathematics. This is a modular course. Students sit separate unit exams and the results combine toward the final qualification.</p><p>Year 12 students normally complete the IAS part of the course through three units. The full IAL Mathematics qualification is built from six units across Year 12 and Year 13.</p></>,
    exam: <><p><strong>External qualification:</strong> Pearson Edexcel International Advanced Level Mathematics.</p><p>Each unit is a separate written exam of 1 hour 30 minutes, and all six units carry equal weight. Units are sat in the June series at the end of each year.</p><GuideTable rows={[{ Year: 'Year 12', Units: 'P1, P2, S1', 'When sat': 'June, end of Year 12' }, { Year: 'Year 13', Units: 'P3, P4, plus M1 or D1', 'When sat': 'June, end of Year 13' }]} /><p>Internal mock exams run in January and February each year, before the summer entries. Final unit entries are confirmed by the school and may vary by cohort.</p><GuideTable rows={[{ Unit: 'P1', Name: 'Pure Mathematics 1' }, { Unit: 'P2', Name: 'Pure Mathematics 2' }, { Unit: 'P3', Name: 'Pure Mathematics 3' }, { Unit: 'P4', Name: 'Pure Mathematics 4' }, { Unit: 'S1', Name: 'Statistics 1' }, { Unit: 'M1', Name: 'Mechanics 1' }, { Unit: 'D1', Name: 'Decision Mathematics 1' }]} /><p>M1 and D1 are listed as possible applied options. Students do not normally take both for IAL Mathematics unless school entries require this.</p></>,
    grades: {
      intro: <><p>The full A Level is graded A* to E from a maximum of 600 UMS across your six units. Each unit is worth up to 100 UMS, so P3 and P4 together are worth 200.</p><p>UMS (Uniform Mark Scale) converts each unit’s raw mark to a common scale, so marks are comparable across different exam sessions.</p></>,
      rows: [
        { Grade: gradeLetter('A*'), 'Overall UMS': '480 / 600', 'Also required': 'At least 180 of 200 across P3 and P4' },
        { Grade: gradeLetter('A'), 'Overall UMS': '480 / 600', 'Also required': '—' },
        { Grade: gradeLetter('B'), 'Overall UMS': '420 / 600', 'Also required': '—' },
        { Grade: gradeLetter('C'), 'Overall UMS': '360 / 600', 'Also required': '—' },
        { Grade: gradeLetter('D'), 'Overall UMS': '300 / 600', 'Also required': '—' },
        { Grade: gradeLetter('E'), 'Overall UMS': '240 / 600', 'Also required': '—' },
      ],
      note: 'A weaker unit can be balanced by stronger ones, but the A* condition rests on your second-year pure units, P3 and P4. Banking high UMS early gives you a cushion for Year 13.',
    },
    expectations: [{ Area: '▣ Equipment', Expectation: 'Casio fx-CG50 graphical calculator required, bring it to every lesson and exam' }, { Area: '▣ Organisation', Expectation: 'Keep clear folders or digital notes by module' }, { Area: '▣ Practice', Expectation: 'Complete regular exam-style questions' }, { Area: '▣ Review', Expectation: 'Correct mistakes after every assessment' }, { Area: '▣ Independence', Expectation: 'Use study periods effectively' }],
    success: ['Consolidate after every lesson.', 'Practise mixed exam-style questions every week.', 'Use official mark schemes to review work.', 'Track recurring errors by unit.', 'Complete timed papers before modular exams.', 'Ask for help early with algebra, calculus, statistics, mechanics, or decision topics.'],
    topTip: 'Past papers are most useful after topic basics are secure. Use them to improve exam technique and timing.',
    resources: [{ label: 'Pearson, International A Level Mathematics', href: resources.pearsonIal }, { label: 'Specification', href: resources.pearsonIal }, { label: 'Past papers and mark schemes, Pearson', href: resources.pastPapers }, { label: 'How IAL grades are calculated, Pearson', href: resources.resultsExplained }, { label: 'Formula booklet', href: resources.pearsonIal }, { label: 'Dr Frost Maths', href: resources.drFrost }],
  },
  'ial-fm': {
    overviewBadge: 'Pearson Edexcel',
    examBadge: 'Modular',
    facts: [
      { label: 'Structure', value: '6 units' },
      { label: 'Exams', value: 'June, each year' },
      { label: 'Calculator', value: 'Casio fx-CG50' },
      { label: 'Taken with', value: 'A Level Maths' },
    ],
    overview: <p>Students follow Pearson Edexcel International Advanced Level Further Mathematics. This is a modular course for students with strong algebra fluency, high independence, and readiness for sustained abstract problem solving. It supports students considering mathematics, engineering, physics, computer science, economics, data science, or related university pathways.</p>,
    exam: <><p><strong>External qualification:</strong> Pearson Edexcel International Advanced Level Further Mathematics.</p><p>This course uses a combination of Further Pure and applied units. Each unit is a separate written exam of 1 hour 30 minutes. Students taking Further Mathematics usually also study A Level Mathematics, and unit results are shared across both qualifications under Pearson’s aggregation rules.</p><GuideTable rows={[{ Year: 'Year 12', Units: 'P1, P2, P3, P4, S1, M1', 'When sat': 'June, end of Year 12' }, { Year: 'Year 13', Units: 'FP1, FP2, plus three applied options', 'When sat': 'June, end of Year 13' }]} /><p>Year 13 applied options are chosen from units such as D1, S2, M2, S3 and M3, depending on the pathway. Internal mock exams run in January and February each year. Final unit entries are confirmed by the school and may vary by cohort.</p></>,
    grades: {
      intro: <><p>International A Level Further Mathematics is graded A* to E from a maximum of 600 UMS across six units. Each unit is worth up to 100 UMS.</p><p>Because most students take Further Mathematics alongside A Level Mathematics, unit results are shared across both qualifications when the final grades are worked out.</p></>,
      rows: [
        { Grade: gradeLetter('A*'), 'Overall UMS': '480 / 600', 'Also required': 'At least 270 UMS from your best three A2 (second-year) units' },
        { Grade: gradeLetter('A'), 'Overall UMS': '480 / 600', 'Also required': '—' },
        { Grade: gradeLetter('B'), 'Overall UMS': '420 / 600', 'Also required': '—' },
        { Grade: gradeLetter('C'), 'Overall UMS': '360 / 600', 'Also required': '—' },
        { Grade: gradeLetter('D'), 'Overall UMS': '300 / 600', 'Also required': '—' },
        { Grade: gradeLetter('E'), 'Overall UMS': '240 / 600', 'Also required': '—' },
      ],
      note: 'The A* depends on your strongest A2 (second-year) units, such as FP1, FP2 and your Year 13 applied options. Aim to push your best three A2 units well above 90 UMS each.',
    },
    expectations: [{ Area: '▣ Equipment', Expectation: 'Casio fx-CG50 graphical calculator required, bring it to every lesson and exam' }, { Area: '▣ Fluency', Expectation: 'Maintain strong algebra and calculus skills' }, { Area: '▣ Pace', Expectation: 'Keep up with a faster sequence of topics' }, { Area: '▣ Accuracy', Expectation: 'Present clear, logical solutions' }, { Area: '▣ Enrichment', Expectation: 'Engage with extension problems where appropriate' }],
    success: ['Review advanced topics every week.', 'Practise proof, calculus, vectors, complex numbers, matrices, and applied topics regularly.', 'Keep a separate error log for Further Mathematics.', 'Work beyond routine examples.', 'Use past papers under timed conditions.', 'Ask for help before small gaps become serious.'],
    topTip: 'Small gaps grow quickly in Further Mathematics. Fix errors early and review them often.',
    resources: [{ label: 'Pearson, International A Level Mathematics and Further Mathematics', href: resources.pearsonIal }, { label: 'Specification', href: resources.pearsonIal }, { label: 'Past papers and mark schemes, Pearson', href: resources.pastPapers }, { label: 'How IAL grades are calculated, Pearson', href: resources.resultsExplained }, { label: 'Formula booklet', href: resources.pearsonIal }, { label: 'Advanced extension resources, if available' }],
  },
};

function GuideFacts({ facts }: { facts: Fact[] }) {
  return <div className="guide-facts">{facts.map(f => <div className="guide-fact" key={f.label}><div className="guide-fact-label">{f.label}</div><div className="guide-fact-value">{f.value}</div></div>)}</div>;
}

function GuideAlert() {
  return <div className="guide-alert"><span className="guide-alert-icon">i</span><p><strong>{alertLead}</strong> {alertRest}</p></div>;
}

function GuideCard({ icon, title, badge, tone, children, full = false }: { icon: string; title: string; badge?: string; tone: Tone; children: React.ReactNode; full?: boolean }) {
  return <section className={`guide-card ${full ? 'guide-full' : ''}`}><div className="guide-card-head"><div className="guide-title-wrap"><span className={`guide-icon ${tone}`}>{icon}</span><h2>{title}</h2></div>{badge && <span className={`guide-badge ${tone}`}>{badge}</span>}</div>{children}</section>;
}

function GuideTable({ rows }: { rows: Row[] }) {
  const heads = Object.keys(rows[0] || {});
  return <div className="guide-table-wrap"><table className="guide-table"><thead><tr>{heads.map(h => <th key={h}>{h}</th>)}</tr></thead><tbody>{rows.map((r, i) => <tr key={i}>{heads.map(h => <td key={h}>{r[h]}</td>)}</tr>)}</tbody></table></div>;
}

function GradeCard({ grades }: { grades: GradeContent }) {
  return <GuideCard icon="★" title="Grade requirements" badge="UMS" tone="purple">{grades.intro}<GuideTable rows={grades.rows} /><div className="guide-callout"><strong>How to aim higher</strong><span>{grades.note}</span></div></GuideCard>;
}

function InternalGradesCard() {
  return <GuideCard icon="▥" title="Internal grades and progress" badge="School reporting" tone="purple"><div className="internal-mini-list">{internalGradeItems.map(item => <div className="internal-mini" key={item.label}><strong>{item.label}</strong><span>{item.text}</span></div>)}</div><div><h3 className="guide-subhead">Progress colour guide</h3><GuideTable rows={progressRows} /></div></GuideCard>;
}

function SuccessCard({ success, topTip }: Pick<CourseContent, 'success' | 'topTip'>) {
  return <GuideCard icon="✓" title="How to succeed" tone="green"><ul className="success-list">{success.map(item => <li key={item}>{item}</li>)}</ul><div className="top-tip"><strong>Top tip</strong><span>{topTip}</span></div></GuideCard>;
}

function ResourcesCard({ resources: links }: { resources: ResourceLink[] }) {
  return <GuideCard icon="↗" title="Useful resources" tone="blue"><div className="resource-list">{links.map(link => link.href ? <a href={link.href} target="_blank" rel="noopener noreferrer" key={link.label}>{link.label}<span aria-hidden="true">↗</span></a> : <span key={link.label}>{link.label}<span aria-hidden="true">↗</span></span>)}</div></GuideCard>;
}

function HelpCard() {
  return <GuideCard icon="?" title="When to ask for help" tone="red" full><p>Ask your teacher for help when:</p><div className="help-tiles">{helpItems.map(item => <div className="help-tile" key={item}><span aria-hidden="true">!</span>{item}</div>)}</div></GuideCard>;
}

export function CourseGuide({ variant }: CourseGuideProps) {
  const content = courseContent[variant];
  return <div className="guide-wrap">
    <GuideFacts facts={content.facts} />
    <GuideAlert />
    <GuideCard icon="▤" title="Course overview" badge={content.overviewBadge} tone="blue">{content.overview}</GuideCard>
    <GuideCard icon="□" title="External exam" badge={content.examBadge} tone="green">{content.exam}</GuideCard>
    {content.grades && <GradeCard grades={content.grades} />}
    <GuideCard icon="▣" title="School expectations" tone="amber"><GuideTable rows={content.expectations} /></GuideCard>
    <InternalGradesCard />
    <div className="guide-pair">
      <SuccessCard success={content.success} topTip={content.topTip} />
      <ResourcesCard resources={content.resources} />
    </div>
    <HelpCard />
    <p className="guide-footer-note">Information on this page is subject to change. Final unit entries and exam timetables are confirmed by the school.</p>
  </div>;
}

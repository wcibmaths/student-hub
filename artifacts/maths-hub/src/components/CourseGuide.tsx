import type React from 'react';

type Row = Record<string, string>;
type Variant = '4ma1' | '4pm1' | 'ial-maths' | 'ial-fm';

interface CourseGuideProps { variant: Variant; }

const examNote = 'External exam results are awarded by Pearson. Internal grades are school judgements based on current evidence and are used to guide support, intervention, and target review.';

function MiniTable({ rows }: { rows: Row[] }) {
  const heads = Object.keys(rows[0] || {});
  return (
    <div className="guide-table-wrap">
      <table className="guide-table">
        <thead><tr>{heads.map(h => <th key={h}>{h}</th>)}</tr></thead>
        <tbody>{rows.map((r, i) => <tr key={i}>{heads.map(h => <td key={h}>{r[h]}</td>)}</tr>)}</tbody>
      </table>
    </div>
  );
}

function Section({ title, badge, children, tone = 'plain' }: { title: string; badge?: string; children: React.ReactNode; tone?: 'plain' | 'exam' | 'school' | 'success' }) {
  return (
    <section className={`guide-card guide-card-${tone}`}>
      <div className="guide-card-head">
        <h2>{title}</h2>
        {badge && <span className="guide-badge">{badge}</span>}
      </div>
      {children}
    </section>
  );
}

function BulletList({ items }: { items: string[] }) {
  return <div className="guide-list">{items.map(item => <div key={item} className="guide-list-item">{item}</div>)}</div>;
}

function ReportingCards() {
  const items = [
    ['CAG', 'Current Attainment Grade. This shows the student’s current working grade based on evidence from taught content.'],
    ['LB', 'Learning Behaviour. This reflects preparation, effort, feedback, independence, and responsibility.'],
    ['Progress Colour', 'Blue, Green, or Amber. This shows whether the student is on track against their target.'],
    ['Mock Results', 'Internal exam-style assessments used to identify gaps and guide support.'],
    ['Teacher Judgement', 'Based on evidence such as topic tests, timed assessments, classwork, prep, past-paper tasks, and mock exams.'],
  ];
  return <div className="guide-mini-grid">{items.map(([title, text]) => <div className="guide-mini-card" key={title}><strong>{title}</strong><span>{text}</span></div>)}</div>;
}

const progressRows = [
  { Colour: 'Blue', Meaning: 'On track to exceed target' },
  { Colour: 'Green', Meaning: 'On track to meet target' },
  { Colour: 'Amber', Meaning: 'Not currently on track to meet target' },
];

const helpItems = [
  'homework takes much longer than expected',
  'the same mistake keeps happening',
  'feedback is unclear',
  'test results are below target',
  'you do not know how to revise',
  'you feel behind with the pace of the course',
];

const expectations: Record<Variant, string[]> = {
  '4ma1': ['Bring full equipment to every lesson.', 'Complete weekly Sparx or teacher-set prep.', 'Show full working, not only final answers.', 'Act on feedback after tests and mocks.', 'Use topic practice and past papers for revision.', 'Ask for help early when a topic is unclear.'],
  '4pm1': ['Keep strong algebra fluency.', 'Complete all prep and correction tasks.', 'Review class notes before each lesson.', 'Practise longer multi-step questions.', 'Rework mock paper mistakes.', 'Keep pace with the accelerated pathway.'],
  'ial-maths': ['Keep organised notes by unit.', 'Complete independent exam-style practice weekly.', 'Use official mark schemes to review work.', 'Correct mistakes after every assessment.', 'Use study periods effectively.', 'Prepare for modular exams throughout the year.'],
  'ial-fm': ['Maintain strong algebra and calculus fluency.', 'Keep up with a faster sequence of topics.', 'Review material independently outside lessons.', 'Present clear and logical solutions.', 'Work through long, unfamiliar problems.', 'Use extension and past-paper problems regularly.'],
};

const success: Record<Variant, string[]> = {
  '4ma1': ['Practise little and often.', 'Start revision with weaker topics.', 'Learn calculator skills early.', 'Correct every lost mark after assessments.', 'Use topic practice before full past papers.', 'Build confidence across all strands, not only algebra.'],
  '4pm1': ['Stay fluent with algebra.', 'Review each new method on the same day.', 'Practise calculus, trigonometry, functions, and vectors regularly.', 'Keep a list of common errors.', 'Use mock papers to identify priority topics.', 'Ask for support as soon as the pace feels too fast.'],
  'ial-maths': ['Consolidate after every lesson.', 'Practise mixed questions regularly.', 'Use mark schemes to learn exam wording.', 'Track recurring errors by unit.', 'Do full timed papers before modular exams.', 'Seek help early with algebra, calculus, statistics, mechanics, or decision topics.'],
  'ial-fm': ['Review advanced topics every week.', 'Practise proof, calculus, vectors, complex numbers, matrices, and applied topics regularly.', 'Keep a separate error log for Further Maths.', 'Work beyond routine examples.', 'Use past papers under timed conditions.', 'Ask for help before small gaps become serious.'],
};

export function CourseGuide({ variant }: CourseGuideProps) {
  const is4ma1 = variant === '4ma1';
  const is4pm1 = variant === '4pm1';
  const isIal = variant === 'ial-maths';
  const isFm = variant === 'ial-fm';

  return (
    <div className="guide-page">
      <div className="guide-note guide-note-top">{examNote}</div>
      <div className="guide-wrap">
        {is4ma1 && <>
          <Section title="Course overview" badge="4MA1">
            <p>Students follow Pearson Edexcel International GCSE Mathematics A, Higher Tier, 4MA1.</p>
            <p>This linear course builds fluency, reasoning, problem solving and exam technique across number, algebra, geometry, statistics, probability, graphs, ratio and trigonometry.</p>
          </Section>
          <Section title="External exam" badge="Pearson awarded" tone="exam">
            <p><strong>External qualification:</strong> Pearson Edexcel International GCSE Mathematics A, 4MA1, Higher Tier.</p>
            <MiniTable rows={[{ Paper: 'Paper 1H', Code: '4MA1/1H', Length: '2 hours', Notes: 'Calculator allowed' }, { Paper: 'Paper 2H', Code: '4MA1/2H', Length: '2 hours', Notes: 'Calculator allowed' }]} />
            <p>Both papers assess the full Higher Tier course.</p>
          </Section>
        </>}

        {is4pm1 && <>
          <Section title="Course overview" badge="4PM1">
            <p>Students on the accelerated pathway study Pearson Edexcel International GCSE Further Pure Mathematics, 4PM1, alongside IGCSE Mathematics A.</p>
            <MiniTable rows={[{ Course: 'IGCSE Mathematics A, Higher Tier', Board: 'Pearson Edexcel', Code: '4MA1' }, { Course: 'IGCSE Further Pure Mathematics', Board: 'Pearson Edexcel', Code: '4PM1' }]} />
          </Section>
          <Section title="External exam" badge="Pearson awarded" tone="exam">
            <p><strong>External qualification:</strong> Pearson Edexcel International GCSE Further Pure Mathematics, 4PM1.</p>
            <MiniTable rows={[{ Paper: 'Paper 1', Code: '4PM1/01', Length: '2 hours' }, { Paper: 'Paper 2', Code: '4PM1/02', Length: '2 hours' }]} />
            <p>Students on the accelerated pathway usually sit IGCSE Mathematics A first, then continue with Further Pure Mathematics preparation.</p>
            <p>Further Pure is normally sat in May or June of Year 11.</p>
          </Section>
        </>}

        {isIal && <>
          <Section title="Course overview" badge="IAL Maths">
            <p>Students follow Pearson Edexcel International Advanced Level Mathematics.</p>
            <p>This modular course supports progression into mathematical, scientific, engineering, economics and related pathways.</p>
          </Section>
          <Section title="External exam" badge="Pearson awarded" tone="exam">
            <p><strong>External qualification:</strong> Pearson Edexcel International Advanced Level Mathematics.</p>
            <p>This is a modular qualification. Students sit separate unit exams. The final qualification is built from six unit results.</p>
            <MiniTable rows={[{ Year: 'Year 12', Units: 'P1, P2, S1' }, { Year: 'Year 13', Units: 'P3, P4, plus M1 or D1' }]} />
            <p>Final unit entries are confirmed by the school and may vary by cohort.</p>
          </Section>
        </>}

        {isFm && <>
          <Section title="Course overview" badge="IAL Further Maths">
            <p>Students follow Pearson Edexcel International Advanced Level Further Mathematics.</p>
            <p>This modular course is for students who want deeper and broader mathematical study for highly mathematical university pathways.</p>
          </Section>
          <Section title="External exam" badge="Pearson awarded" tone="exam">
            <p><strong>External qualification:</strong> Pearson Edexcel International Advanced Level Further Mathematics.</p>
            <p>This is a modular qualification. Students sit a combination of Further Pure and applied units.</p>
            <p>Typical units may include FP1, FP2, S2, M2, D1, S3, M3, or other approved units depending on the pathway.</p>
            <p>Final unit entries are confirmed by the school and may vary by cohort.</p>
          </Section>
        </>}

        <Section title="School expectations" badge="In school" tone="school">
          <BulletList items={expectations[variant]} />
        </Section>

        <Section title="Internal grades and progress" badge="School reporting" tone="school">
          <p>Internal school reporting is separate from external examinations.</p>
          <ReportingCards />
          <MiniTable rows={progressRows} />
        </Section>

        <Section title="How to succeed" badge="Practical steps" tone="success">
          <BulletList items={success[variant]} />
        </Section>

        <Section title="Useful resources / When to ask for help" badge="Support">
          <div className="guide-links">
            <a href="https://qualifications.pearson.com/en/support/support-topics/exams/past-papers.html" target="_blank" rel="noopener noreferrer">Pearson past paper search</a>
            <a href={is4ma1 ? 'https://qualifications.pearson.com/en/qualifications/edexcel-international-gcses/international-gcse-mathematics-a-2016.html' : is4pm1 ? 'https://qualifications.pearson.com/en/qualifications/edexcel-international-gcses/international-gcse-further-pure-mathematics-2017.html' : 'https://qualifications.pearson.com/en/qualifications/edexcel-international-advanced-levels/mathematics-2018.html'} target="_blank" rel="noopener noreferrer">Official Pearson qualification page</a>
            <span>Use this hub for topic practice, past papers, notes and formula-booklet links.</span>
          </div>
          <div className="guide-subhead">Ask your teacher for help when:</div>
          <BulletList items={helpItems} />
        </Section>
      </div>
    </div>
  );
}

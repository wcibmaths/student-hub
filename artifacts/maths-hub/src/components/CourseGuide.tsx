import type React from 'react';
type Row = Record<string, string>;

interface CourseGuideProps {
  variant: '4ma1' | '4pm1' | 'ial-maths' | 'ial-fm';
}

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

function Section({ title, badge, children, tone = 'plain' }: { title: string; badge?: string; children: React.ReactNode; tone?: 'plain' | 'exam' | 'school' }) {
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

const progressRows = [
  { Colour: 'Blue', Meaning: 'Working beyond the current target or showing especially strong progress' },
  { Colour: 'Green', Meaning: 'On track against the current target' },
  { Colour: 'Amber', Meaning: 'Not yet secure; extra support, practice or intervention may be needed' },
];

const askHelp = [
  'A topic still feels unclear after feedback or correction work.',
  'Prep is taking much longer than expected or cannot be started independently.',
  'Mock or topic-test errors repeat across several assessments.',
  'A student is unsure which resources or past-paper questions to use next.',
];

export function CourseGuide({ variant }: CourseGuideProps) {
  const is4ma1 = variant === '4ma1';
  const is4pm1 = variant === '4pm1';
  const isIal = variant === 'ial-maths';
  const isFm = variant === 'ial-fm';

  return (
    <div className="guide-wrap">
      {is4ma1 && <>
        <Section title="Course overview" badge="4MA1">
          <p>Students follow Pearson Edexcel International GCSE Mathematics A, Higher Tier, 4MA1. This is the main IGCSE Mathematics course for Years 10 and 11, developing fluency, reasoning, problem solving and exam technique across number, algebra, geometry, statistics, probability, graphs, ratio and trigonometry.</p>
          <p>Pearson describes 4MA1 as a linear qualification, with two examinations available at Foundation and Higher Tier.</p>
        </Section>
        <Section title="External exam" badge="Pearson awarded" tone="exam">
          <p><strong>External qualification:</strong> Pearson Edexcel International GCSE Mathematics A, 4MA1, Higher Tier.</p>
          <MiniTable rows={[{ Paper: 'Paper 1H', Code: '4MA1/1H', Length: '2 hours', Notes: 'Calculator allowed' }, { Paper: 'Paper 2H', Code: '4MA1/2H', Length: '2 hours', Notes: 'Calculator allowed' }]} />
          <p>Both papers assess the full Higher Tier course.</p>
        </Section>
      </>}

      {is4pm1 && <>
        <Section title="Course overview" badge="4PM1">
          <p>Students on the accelerated pathway study Pearson Edexcel International GCSE Further Pure Mathematics, 4PM1, alongside IGCSE Mathematics A. It extends algebra, calculus, trigonometry, functions, vectors, coordinate geometry, logarithms, polynomials, series and proof-style reasoning.</p>
          <MiniTable rows={[{ Course: 'IGCSE Mathematics A, Higher Tier', Board: 'Pearson Edexcel', Code: '4MA1' }, { Course: 'IGCSE Further Pure Mathematics', Board: 'Pearson Edexcel', Code: '4PM1' }]} />
        </Section>
        <Section title="External exam" badge="Pearson awarded" tone="exam">
          <p><strong>External qualification:</strong> Pearson Edexcel International GCSE Further Pure Mathematics, 4PM1.</p>
          <MiniTable rows={[{ Paper: 'Paper 1', Code: '4PM1/01', Length: '2 hours' }, { Paper: 'Paper 2', Code: '4PM1/02', Length: '2 hours' }]} />
          <p>The current accelerated pathway is Pearson Edexcel 4MA1 plus Pearson Edexcel Further Pure Mathematics 4PM1. IGCSE Mathematics is sat in November of Year 11; Further Pure is sat in May or June of Year 11.</p>
        </Section>
        <Section title="Pathway timing" badge="Accelerated">
          <MiniTable rows={[{ Year: 'Year 10', Focus: 'IGCSE Mathematics A content plus early Further Pure content' }, { Year: 'Year 11 Michaelmas', Focus: 'Final IGCSE revision, November IGCSE exam, then deeper Further Pure calculus' }, { Year: 'Year 11 Lent', Focus: 'Further Pure trigonometry, consolidation and mock papers' }, { Year: 'Year 11 Summer', Focus: 'Final Further Pure revision and external exams' }]} />
        </Section>
      </>}

      {isIal && <>
        <Section title="Course overview" badge="IAL Maths">
          <p>Students follow Pearson Edexcel International Advanced Level Mathematics. The course is modular: students sit separate unit exams and the results combine toward the final qualification.</p>
        </Section>
        <Section title="External exam" badge="Pearson awarded" tone="exam">
          <p>IAL Mathematics normally includes P1, P2, P3, P4 and two applied units such as S1 plus M1 or D1.</p>
          <MiniTable rows={[{ Year: 'Year 12', Units: 'P1, P2, S1' }, { Year: 'Year 13', Units: 'P3, P4, plus M1 or D1' }]} />
          <MiniTable rows={[{ Unit: 'P1', Name: 'Pure Mathematics 1' }, { Unit: 'P2', Name: 'Pure Mathematics 2' }, { Unit: 'P3', Name: 'Pure Mathematics 3' }, { Unit: 'P4', Name: 'Pure Mathematics 4' }, { Unit: 'S1', Name: 'Statistics 1' }, { Unit: 'M1', Name: 'Mechanics 1' }, { Unit: 'D1', Name: 'Decision Mathematics 1' }]} />
        </Section>
      </>}

      {isFm && <>
        <Section title="Course overview" badge="IAL Further Maths">
          <p>Students follow Pearson Edexcel International Advanced Level Further Mathematics. The course is modular and supports students considering mathematics, engineering, physics, computer science, economics, data science or related university pathways.</p>
        </Section>
        <Section title="External exam" badge="Pearson awarded" tone="exam">
          <p>IAL Further Mathematics includes Further Pure units plus applied units, with final unit choices confirmed by school.</p>
          <MiniTable rows={[{ Stage: 'Core Mathematics support', Units: 'P1, P2, P3, P4, S1, M1' }, { Stage: 'Further Mathematics', Units: 'FP1, FP2, plus applied units such as S2, M2, D1, S3 or M3' }]} />
          <MiniTable rows={[{ Unit: 'FP1', Name: 'Further Pure Mathematics 1' }, { Unit: 'FP2', Name: 'Further Pure Mathematics 2' }, { Unit: 'S2/S3', Name: 'Statistics 2 or 3' }, { Unit: 'M2/M3', Name: 'Mechanics 2 or 3' }, { Unit: 'D1', Name: 'Decision Mathematics 1' }]} />
        </Section>
      </>}

      <Section title="School expectations" badge="In school" tone="school">
        <MiniTable rows={(is4ma1 ? [
          { Area: 'Equipment', Expectation: 'Bring calculator, ruler, pencil, protractor, compasses, pen and exercise book' },
          { Area: 'Prep', Expectation: 'Complete weekly Sparx or teacher-set prep' },
          { Area: 'Bookwork', Expectation: 'Show full working, not only final answers' },
          { Area: 'Revision', Expectation: 'Use topic practice, past papers and correction tasks' },
          { Area: 'Feedback', Expectation: 'Act on feedback after tests and mocks' },
        ] : is4pm1 ? [
          { Area: 'Algebra', Expectation: 'Maintain strong fluency with manipulation, factorising, functions and equations' },
          { Area: 'Prep', Expectation: 'Complete all assigned work on time' },
          { Area: 'Correction', Expectation: 'Rework mistakes fully after tests and mock papers' },
          { Area: 'Resilience', Expectation: 'Stay with longer problems and unfamiliar questions' },
        ] : isIal ? [
          { Area: 'Organisation', Expectation: 'Keep clear folders or digital notes by module' },
          { Area: 'Practice', Expectation: 'Complete regular exam-style questions' },
          { Area: 'Review', Expectation: 'Correct mistakes after every assessment' },
          { Area: 'Independence', Expectation: 'Use study periods effectively' },
        ] : [
          { Area: 'Fluency', Expectation: 'Maintain strong algebra and calculus skills' },
          { Area: 'Pace', Expectation: 'Keep up with a faster sequence of topics' },
          { Area: 'Accuracy', Expectation: 'Present clear, logical solutions' },
          { Area: 'Enrichment', Expectation: 'Engage with extension problems where appropriate' },
        ])} />
      </Section>

      <Section title="Internal grades and progress" badge="School reporting" tone="school">
        <p>Internal school reporting is separate from external examinations and is based on teacher judgement from current evidence.</p>
        <MiniTable rows={[{ Item: 'CAG', Meaning: 'Current Attainment Grade based on current evidence' }, { Item: 'LB', Meaning: 'Learning Behaviour: preparation, effort, feedback and responsibility' }, { Item: 'Progress Colour', Meaning: 'Blue, Green or Amber indication against the student target' }, { Item: 'Mock results', Meaning: 'Performance in internal exam-style conditions' }, { Item: 'Teacher judgement', Meaning: 'Uses topic tests, timed assessments, classwork, prep and past-paper evidence' }]} />
        <MiniTable rows={progressRows} />
        <div className="guide-note">{examNote}</div>
      </Section>

      <Section title="Useful resources" badge="Links">
        <div className="guide-links">
          <a href="https://qualifications.pearson.com/en/support/support-topics/exams/past-papers.html" target="_blank" rel="noopener noreferrer">Pearson past paper search</a>
          <a href={is4ma1 ? 'https://qualifications.pearson.com/en/qualifications/edexcel-international-gcses/international-gcse-mathematics-a-2016.html' : is4pm1 ? 'https://qualifications.pearson.com/en/qualifications/edexcel-international-gcses/international-gcse-further-pure-mathematics-2017.html' : 'https://qualifications.pearson.com/en/qualifications/edexcel-international-advanced-levels/mathematics-2018.html'} target="_blank" rel="noopener noreferrer">Official Pearson qualification page</a>
          <span>Use this hub for topic practice, past papers, notes and formula-booklet links.</span>
        </div>
      </Section>

      <Section title="When to ask for help" badge="Support">
        <div className="guide-list">{askHelp.map(item => <div key={item} className="guide-list-item">{item}</div>)}</div>
      </Section>
    </div>
  );
}

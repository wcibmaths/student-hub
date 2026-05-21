import { TopicLink } from './PillPair';
import type { TopicLinks as TLinks } from '../data/topics';
import type { ChapterLinks } from '../data/chapters';

function isValid(url: string | undefined | null): url is string {
  return typeof url === 'string' && url.length > 0 && url !== '#';
}

export function TopicLinksRow({ links }: { links: TLinks }) {
  return (
    <div className="topic-links">
      {isValid(links.corbett) && <TopicLink cls="corbett" label="Corbett" url={links.corbett} />}
      {isValid(links.mathsGenie) && <TopicLink cls="genie" label="Maths Genie" url={links.mathsGenie} />}
      {isValid(links.pmt) && <TopicLink cls="pmt" label="PMT" url={links.pmt} />}
    </div>
  );
}

export function ChapterLinksRow({ links }: { links: ChapterLinks }) {
  const buttons = [
    isValid(links.aLevelMathsRevision) && (
      <TopicLink key="almr" cls="almr" label="A Level Maths Revision" url={links.aLevelMathsRevision!} />
    ),
    isValid(links.rocketRevise) && (
      <TopicLink key="rr" cls="rr" label="Rocket Revise" url={links.rocketRevise!} />
    ),
    isValid(links.pmtSolutionBank) && (
      <TopicLink key="pmt" cls="pmt" label="Textbook Solutions" url={links.pmtSolutionBank!} />
    ),
    isValid(links.examSolutions) && (
      <TopicLink key="es" cls="corbett" label="ExamSolutions" url={links.examSolutions!} />
    ),
  ].filter(Boolean);

  if (buttons.length === 0) {
    return <div className="ch-links"><span className="ch-coming-soon">Links coming soon</span></div>;
  }
  return <div className="ch-links">{buttons}</div>;
}

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
      {isValid(links.examPapersPractice) && <TopicLink cls="epp" label="Exam Papers Practice" url={links.examPapersPractice} />}
      {isValid(links.pmt) && <TopicLink cls="pmt" label="PMT" url={links.pmt} />}
    </div>
  );
}

export function ChapterLinksRow({ links }: { links: ChapterLinks }) {
  return (
    <div className="ch-links">
      {isValid(links.pmt) && <TopicLink cls="pmt" label="PMT" url={links.pmt} />}
      {isValid(links.examSolutions) && <TopicLink cls="corbett" label="ExamSolutions" url={links.examSolutions} />}
      {isValid(links.examPapersPractice) && <TopicLink cls="epp" label="Exam Papers Practice" url={links.examPapersPractice} />}
    </div>
  );
}

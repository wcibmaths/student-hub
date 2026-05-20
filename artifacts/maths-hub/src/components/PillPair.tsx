const DownloadIcon = () => (
  <svg viewBox="0 0 24 24">
    <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/>
    <polyline points="7 10 12 15 17 10"/>
    <line x1="12" y1="15" x2="12" y2="3"/>
  </svg>
);

const CheckIcon = () => (
  <svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>
);

const ExtIcon = () => (
  <svg viewBox="0 0 24 24">
    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/>
    <polyline points="15 3 21 3 21 9"/>
    <line x1="10" y1="14" x2="21" y2="3"/>
  </svg>
);

interface PillPairProps {
  pUrl: string;
  msUrl: string;
  paperLabel?: string;
  msLabel?: string;
}

export function PillPair({ pUrl, msUrl, paperLabel = 'Paper', msLabel = 'MS' }: PillPairProps) {
  return (
    <div className="pill-wrap">
      <a className="dl-pill paper" href={pUrl} target="_blank" rel="noopener">
        <DownloadIcon />{paperLabel}
      </a>
      <a className="dl-pill ms" href={msUrl} target="_blank" rel="noopener">
        <CheckIcon />{msLabel}
      </a>
    </div>
  );
}

interface TopicLinkProps {
  cls: string;
  label: string;
  url: string;
}

export function TopicLink({ cls, label, url }: TopicLinkProps) {
  return (
    <a className={`topic-link ${cls}`} href={url} target="_blank" rel="noopener">
      <ExtIcon />{label}
    </a>
  );
}

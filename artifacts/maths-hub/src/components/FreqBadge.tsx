import type { Freq } from '../data/topics';

const FREQ_CLASS: Record<Freq, string> = {
  'very-high': 'freq-very-high',
  'high': 'freq-high',
  'medium': 'freq-medium',
  'low': 'freq-low',
};

const FREQ_LABEL: Record<Freq, string> = {
  'very-high': 'Very high',
  'high': 'High',
  'medium': 'Medium',
  'low': 'Low',
};

interface FreqBadgeProps {
  freq: Freq;
  pct?: string;
}

export function FreqBadge({ freq, pct }: FreqBadgeProps) {
  return (
    <span className={`freq-badge ${FREQ_CLASS[freq]}`}>
      {FREQ_LABEL[freq]}{pct ? ` · ${pct}` : ''}
    </span>
  );
}

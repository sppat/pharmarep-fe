import type { ReactNode } from 'react';
import './OverviewSummaryItem.css';

function OverviewSummaryItem({
  children,
  count,
  label,
  iconTone,
}: OverviewSummaryItemProps) {
  return (
    <div className="summary">
      <div className={`summary-icon ${iconTone}`}>{children}</div>
      <div className="summary-text">
        <span className="summary-count">{count}</span>
        <span className="summary-label">{label}</span>
      </div>
    </div>
  );
}

interface OverviewSummaryItemProps {
  children: ReactNode;
  count: number;
  label: string;
  iconTone: 'primary' | 'warning';
}

export default OverviewSummaryItem;

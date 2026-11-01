import CalendarIcon from '../../icons/CalendarIcon';
import ClockIcon from '../../icons/ClockIcon';
import OverviewSummaryItem from './OverviewSummaryItem/OverviewSummaryItem';
import './OverviewSummary.css';

const UPCOMING_VISITS = 3;
const PENDING_REQUESTS = 2;

function OverviewSummary() {
  return (
    <section className="summary-container">
      <OverviewSummaryItem
        count={UPCOMING_VISITS}
        label="Upcoming Visits"
        iconTone="primary"
      >
        <CalendarIcon />
      </OverviewSummaryItem>
      <OverviewSummaryItem
        count={PENDING_REQUESTS}
        label="Pending Requests"
        iconTone="warning"
      >
        <ClockIcon />
      </OverviewSummaryItem>
    </section>
  );
}

export default OverviewSummary;

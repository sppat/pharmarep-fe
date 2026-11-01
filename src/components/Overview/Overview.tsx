import OverviewIntro from './OverviewIntro/OverviewIntro';
import './Overview.css';
import OverviewSummary from './OverviewSummary/OverviewSummary';

function Overview() {
  return (
    <div className="overview-container">
      <OverviewIntro />
      <OverviewSummary />
    </div>
  );
}

export default Overview;

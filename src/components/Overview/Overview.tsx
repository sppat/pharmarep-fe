import Plus from '../icons/Plus';
import './Overview.css';

function Overview() {
  return (
    <div className="overview-container">
      <section className="overview-intro">
        <h1>Good Morning, John</h1>
        <button className="book-appointment-btn">
          <Plus />
          <span>Book an Appointment</span>
        </button>
      </section>
    </div>
  );
}

export default Overview;

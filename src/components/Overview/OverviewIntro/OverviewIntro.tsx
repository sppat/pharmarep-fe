import Plus from "../../icons/Plus";
import './OverviewIntro.css';

function OverviewIntro() {
    return (
      <section className="overview-intro">
        <h1>Good Morning, John</h1>
        <button className="book-appointment-btn">
          <Plus />
          <span>Book an Appointment</span>
        </button>
      </section>
    );
}

export default OverviewIntro;
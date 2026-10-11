import OverviewIcon from '../../../assets/images/navbar/overview.svg';
import AppointmentsIcon from '../../../assets/images/navbar/appointments.svg';
import NavListItem from './NavListItem/NavListItem';
import './NavList.css';

function NavList() {
  return (
    <ul className="nav-list">
      <NavListItem icon={OverviewIcon} label="Overview" />
      <NavListItem icon={AppointmentsIcon} label="My Appointments" />
    </ul>
  );
}

export default NavList;

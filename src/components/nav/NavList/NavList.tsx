import OverviewIcon from '../../icons/OverviewIcon';
import NavListItem from './NavListItem/NavListItem';
import AppointmentIcon from '../../icons/AppointmentIcon';
import './NavList.css';

function NavList() {
  return (
    <ul className="nav-list">
      <NavListItem
        icon={<OverviewIcon />}
        label="Overview"
        destination="/overview"
      />
      <NavListItem
        icon={<AppointmentIcon />}
        label="My Appointments"
        destination="/appointments"
      />
    </ul>
  );
}

export default NavList;

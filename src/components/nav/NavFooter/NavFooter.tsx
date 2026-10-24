import { NavLink } from 'react-router';
import ChevronRightIcon from '../../icons/ChevronRightIcon';
import ProfileIcon from '../../../assets/images/old-man.png';
import './NavFooter.css';

function NavFooter() {
  return (
    <div className="profile-container">
      <NavLink
        className={({ isActive }) => (isActive ? 'active' : '')}
        to="/profile"
      >
        <img src={ProfileIcon} alt="" />
        <div className="profile-info">
          <span className="profile-name">John Doe</span>
          <span className="profile-role">Medical Representative</span>
        </div>
        <ChevronRightIcon />
      </NavLink>
    </div>
  );
}

export default NavFooter;

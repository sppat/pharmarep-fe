import type { ReactNode } from 'react';
import { NavLink } from 'react-router';
import './NavListItem.css';

function NavListItem({ icon, label, destination }: NavListItemProps) {
  return (
    <li className="nav-list-item">
      <NavLink
        className={({ isActive }) => (isActive ? 'active' : '')}
        to={destination}
      >
        {icon}
        <span>{label}</span>
      </NavLink>
    </li>
  );
}

interface NavListItemProps {
  icon: ReactNode;
  label: string;
  destination: string;
}

export default NavListItem;

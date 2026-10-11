import './NavListItem.css';

function NavListItem({ icon, label }: NavListItemProps) {
  return (
    <li className="nav-list-item">
      <img src={icon} alt="" />
      <span>{label}</span>
    </li>
  );
}

interface NavListItemProps {
  icon: string;
  label: string;
}

export default NavListItem;

import Logo from '../../assets/images/pharmarep-mark.svg';
import NavList from './NavList/NavList';
import './Nav.css';

function Nav() {
  return (
    <aside className="sidebar">
      <div className="logo-container">
        <img src={Logo} alt="" />
        <span className="brand-name">PharmaRep</span>
      </div>
      <nav>
        <NavList />
      </nav>
    </aside>
  );
}

export default Nav;

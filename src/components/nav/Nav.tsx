import NavList from './NavList/NavList';
import NavFooter from './NavFooter/NavFooter';
import NavHeader from './NavHeader/NavHeader';
import './Nav.css';

function Nav() {
  return (
    <aside className="sidebar">
      <NavHeader />
      <nav>
        <NavList />
      </nav>
      <NavFooter />
    </aside>
  );
}

export default Nav;

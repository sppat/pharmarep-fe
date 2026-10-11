import Logo from '../../assets/images/pharmarep-mark.svg';
import './Nav.css';

function Nav() {
  return (
    <aside className="sidebar">
      <div className="logo-container">
        <img src={Logo} alt="" />
        <span className="brand-name">PharmaRep</span>
      </div>
      <nav>Navigation</nav>
    </aside>
  );
}

export default Nav;

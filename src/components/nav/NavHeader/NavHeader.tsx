import Logo from '../../../assets/images/pharmarep-mark.svg';
import './NavHeader.css';

function NavHeader() {
  return (
    <div className="nav-header">
      <img src={Logo} alt="" />
      <span className="brand-name">
        PharmaRep
      </span>
    </div>
  );
}

export default NavHeader;

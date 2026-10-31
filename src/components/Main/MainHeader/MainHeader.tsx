import { useLocation } from 'react-router';
import NotificationBell from '../../icons/NotificationBell';
import './MainHeader.css';

function getBreadcrumbText(location: string): string {
  const path = location.replace('/', '');
  const firstLetter = path.charAt(0);
  const firstLetterUpperCasePath =
    firstLetter.toUpperCase() + path.substring(1);

  return firstLetterUpperCasePath === ''
    ? 'Workspace'
    : `Workspace / ${firstLetterUpperCasePath}`;
}

function MainHeader() {
  const location = useLocation();
  const breadcrumbText = getBreadcrumbText(location.pathname);

  return (
    <header className="main-header">
      <div className="workspace">{breadcrumbText}</div>
      <button aria-label="Notifications" className="notification-bell-btn">
        <NotificationBell />
      </button>
    </header>
  );
}

export default MainHeader;

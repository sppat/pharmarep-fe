import { Outlet } from 'react-router';
import MainHeader from './MainHeader/MainHeader';
import './Main.css';

function Main() {
  return (
    <main>
      <MainHeader />
      <Outlet />
    </main>
  );
}

export default Main;

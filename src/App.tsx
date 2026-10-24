import { Outlet } from 'react-router';
import './App.css';
import Nav from './components/nav/Nav';

function App() {
  return (
    <>
      <Nav />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default App;

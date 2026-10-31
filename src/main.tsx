import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router';
import App from './App.tsx';
import './index.css';
import Overview from './components/Overview/Overview.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <div>Welcome</div> },
      { path: 'overview', element: <Overview /> },
      { path: 'appointments', element: <div>Appointments</div> },
      { path: 'profile', element: <div>Profile</div> },
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);

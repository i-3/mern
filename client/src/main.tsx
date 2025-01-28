// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.tsx'

// createRoot(document.getElementById('root')!).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import Record from './components/Record';
import RecordList from './components/RecordList';
import './index.css';
import VacancyList from './components/VacancyList';
import Vacancy from './components/Vacancy';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <VacancyList />,
      },
    ],
  },
  {
    path: '/edit/:id',
    element: <App />,
    children: [
      {
        path: '/edit/:id',
        element: <Vacancy />,
      },
    ],
  },
  {
    path: '/create',
    element: <App />,
    children: [
      {
        path: '/create',
        element: <Vacancy />,
      },
    ],
  },
  {
    path: '/employees',
    element: <App />,
    children: [
      {
        path: '/employees',
        element: <RecordList />,
      },
    ],
  },
  {
    path: '/employees/edit/:id',
    element: <App />,
    children: [
      {
        path: '/employees/edit/:id',
        element: <Record />,
      },
    ],
  },
  {
    path: '/employees/create',
    element: <App />,
    children: [
      {
        path: '/employees/create',
        element: <Record />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

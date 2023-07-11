import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Repositorios from './routes/Repositorios';
import './index.scss';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Pages
import Home from './routes/Home';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/repos/:username",
        element: <Repositorios />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)

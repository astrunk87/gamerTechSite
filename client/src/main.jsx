import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.jsx';
import Home from './components/pages/Home.jsx';
import Controllers from './components/pages/Controllers.jsx';
import Consoles from './components/pages/Consoles.jsx';
import NotFound from './components/pages/NotFound.jsx';
import HeadSets from './components/pages/HeadSets.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />
      }, {
        path: '/consoles',
        element: <Consoles />
      }, {
        path: '/controllers',
        element: <Controllers />
      },
      {
        path: '/headseats',
        element: <HeadSets />
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);

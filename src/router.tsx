import { createBrowserRouter } from 'react-router-dom';
import NotFound from './pages/NotFound';
import Root from './components/Root';
import React from 'react';
import Home from './pages/Home';
import Events from './pages/events/Events';
import Event from './pages/events/Event';

// const Home = React.lazy(() => import('./pages/Home'));
// const Events = React.lazy(() => import('./pages/Events'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: 'events',
        element: <Events />,
      },
      {
        path: "events/:eventId",
        element: <Event />,
      },
    ],
  },
]);

export default router;

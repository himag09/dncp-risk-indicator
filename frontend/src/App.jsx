import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { MainLayout } from './layouts/MainLayout';
import Home from './pages/Home';
import IndicatorR018 from './pages/IndicatorR018';
import IndicatorR063 from './pages/IndicatorR063';
import IndicatorR064 from './pages/IndicatorR064';
import NotFound from './pages/NotFound';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'r018', element: <IndicatorR018 /> },
      { path: 'r063', element: <IndicatorR063 /> },
      { path: 'r064', element: <IndicatorR064 /> },
      { path: '*', element: <NotFound /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

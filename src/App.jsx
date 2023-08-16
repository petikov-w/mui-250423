import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';


import { SinglePage } from './pages/SinglePage';
import { NotFoundPage } from './pages/NotFoundPage';
import { Layout } from './components/layout/Layout';
import { PremierPage } from './pages/PremierPage';
import { SerialPage } from './pages/SerialPage';
import { MultPage } from './pages/MultPage';
import { TopPage } from './pages/TopPage';

function App() {
 
  const router = createBrowserRouter(createRoutesFromElements(
      <Route path="/" element={<Layout />} >
          <Route index element={<PremierPage />} />
          <Route path="films"  element={<TopPage />} />
          <Route path="serials" element={<SerialPage />} />
          <Route path="mults" element={<MultPage />} />
          <Route path="films/:id" element={<SinglePage />} />
          <Route path="*" element={<NotFoundPage />} />
      </Route>
  ));

  return (
    <>
        <RouterProvider router={router} />
    </>
  );
}

export default App;

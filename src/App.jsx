import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

import { HomePage } from './pages/HomePage';
import { CatalogPage } from './pages/CatalogPage';
import { ContactPage } from './pages/ContactPage';
import { SinglePage } from './pages/SinglePage';
import { NotFoundPage } from './pages/NotFoundPage';
import { Layout } from './components/Layout';




function App() {

 
  const router = createBrowserRouter(createRoutesFromElements(
      <Route path="/" element={<Layout />} >
          <Route index element={<HomePage />} />
          <Route path="films" element={<CatalogPage />} />
          <Route path="contacts" element={<ContactPage />} />
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

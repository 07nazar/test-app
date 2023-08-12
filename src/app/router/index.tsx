import { createBrowserRouter } from 'react-router-dom';
import { Layout } from '../layout';
import { ProductListPage } from '../../pages/product-list-page';
import { ProductPage } from '../../pages/product';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <ProductListPage /> },
      { path: ':id', element: <ProductPage /> },
    ],
  },
]);

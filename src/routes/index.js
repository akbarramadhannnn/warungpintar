import Home from '../pages/home';
import Products from '../pages/products';
import ProductsDetail from '../pages/products/detail';

const Routes = [
  {
    path: '/',
    exact: true,
    component: Home,
  },
  {
    path: '/products',
    exact: true,
    component: Products,
  },
  {
    path: '/products/detail/:slug',
    exact: true,
    component: ProductsDetail,
  },
];

export default Routes;

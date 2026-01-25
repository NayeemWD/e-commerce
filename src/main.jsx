
import './index.css'
import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router";
import Root from './Layout/Root';
import ShopNow from './Page/ShopNow/ShopNow';
import Home from './Page/Home/Home';
import About from './Page/About/About';
import Blog from './Page/Blog/Blog';
import Contact from './Page/Contact/Contact';
import SingleProductPage from './Components/SharedComponents/SingleProductPage';
import { FilterProvider } from './Context/FilterContext';
import { Provider } from 'react-redux';
import store from './redux/store/store';
import Cart from './Page/Cart/Cart';
import Login from './Page/Auth/Login';
import Registration from './Page/Auth/Registration';
import AuthProvider from './Context/AuthProvider';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      { index: true, element: <Home></Home> },
      { path: "/shop", element: <ShopNow></ShopNow> },
      { path: "/about", element: <About></About> },
      { path: "/blog", element: <Blog></Blog> },
      { path: "/contact", element: <Contact></Contact> },
      { path: "/shop/:id", element: <SingleProductPage></SingleProductPage> },
      { path: "/cart", element: <PrivateRoute><Cart></Cart></PrivateRoute> },
      { path: "/login", element: <Login></Login> },
      { path: "/register", element: <Registration></Registration> },
    ],
  },

]);

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <Provider store={store}>
    <FilterProvider>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </FilterProvider>
  </Provider>
);


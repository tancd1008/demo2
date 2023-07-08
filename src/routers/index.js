import Cart from "../pages/cart/Cart";
import LoginPage from "../pages/auth/LoginPage";
import Register from "../pages/auth/Register";
import Home from "../pages/client/Home";
import Products from "../pages/client/Products";
import Dashboard from "../pages/admin/Dashboard";
import DetailProduct from "../pages/client/DetailProduct";

const publicRoutes = [
  {
    path: "",
    component: Home,
  },
  { path: "buger", component: Products, },
  { path: "buger/detail/:id", component: DetailProduct, },
  { path: "banhmi", component: Products },
  { path: "banhmi/detail/:id", component: DetailProduct },
  { path: "cart", component: Cart },
];
const privateRoutes = [
  {
    path: "",
    component: Dashboard,
  },
];
const authenticationRoutes = [
  {
    path: "login",
    component: LoginPage,
  },
  {
    path: "register",
    component: Register,
  },
];
export { authenticationRoutes, privateRoutes, publicRoutes };

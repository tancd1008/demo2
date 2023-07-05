import Cart from "../pages/cart/Cart";
import LoginPage from "../pages/auth/LoginPage";
import Register from "../pages/auth/Register";
import Home from "../pages/client/Home";
import Products from "../pages/client/Products";
import Dashboard from "../pages/admin/Dashboard";

const publicRoutes = [
  {
    path: "",
    component: Home,
  },
  { path: "products", 
    component: Products },
    { path: "cart", 
    component: Cart },
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

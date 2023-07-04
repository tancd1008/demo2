import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import Home from "../pages/client/Home";
import Products from "../pages/client/Products";

const publicRoutes = [
  {
    path: "",
    component: Home,
  },
  { path: "products", 
    component: Products },
];
const authenticationRoutes = [
  {
    path: "login",
    component: Login,
  },
  {
    path: "register",
    component: Register,
  },
];
const privateRoutes = [];
export { authenticationRoutes, privateRoutes, publicRoutes };

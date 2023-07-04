import Register from "../pages/auth/Register";
import Login from "../pages/auth/login";
import Home from "../pages/client/Home";

const publicRoutes = [
  {
    path: "",
    component: Home,
  },
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


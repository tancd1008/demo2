
import Login from "../pages/auth/login";
import Home from "../pages/client/Home";

const publicRoutes = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/login',
        component: Login
    }
];
const privateRoutes = [];
export { publicRoutes, privateRoutes };
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import AuthLayout from "./components/layouts/auth/AuthLayout";
import ClientLayout from "./components/layouts/client/ClientLayout.js";
import { authenticationRoutes, publicRoutes } from "./routers";

// import { ref, child, get } from "firebase/database";
// import database from './firebase-config';
function App() {
  // const dbRef = ref(database);
  // get(child(dbRef, `users`)).then((snapshot) => {
  //   if (snapshot.exists()) {
  //     console.log(snapshot.val());
  //   } else {
  //     console.log("No data available");
  //   }
  // }).catch((error) => {
  //   console.error(error);
  // });

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<ClientLayout />}>
          {publicRoutes.map((route, index) => {
            const Page = route.component;
            return <Route key={index} path={route.path} element={<Page />} />;
          })}
        </Route>
        <Route path="auth" element={<AuthLayout />}>
          {authenticationRoutes.map((route, index) => {
            const Page = route.component;
            return <Route key={index} path={route.path} element={<Page />} />;
          })}
        </Route>
      </Routes>
    </div>
  );
}

export default App;

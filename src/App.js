import "./App.css";
import { Route, Routes } from "react-router-dom";
import { publicRoutes } from "./routers";
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
      <main>
        <Routes>
          {publicRoutes.map((route,index) => {
            const Page = route.component;
            return (
              <Route key={index} path={route.path} element={<Page/>}/>
            )
          })}
        </Routes>
      </main>
    </div>
  );
}

export default App;

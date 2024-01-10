import NavBar from "./components/navBar/NavBar";
import { BrowserRouter } from "react-router-dom";
import AllRoutes from "./AllRoutes";
import { useDispatch } from "react-redux";
import { fetchAllTasks } from "./actions/task";

import "./App.css";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllTasks());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <NavBar />
      <AllRoutes />
    </BrowserRouter>
  );
}

export default App;

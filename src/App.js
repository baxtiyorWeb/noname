import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./layout/layout";
import Home from "./pages/home";

function App() {
  return (
    <Routes>
      <Route path={"/"} element={<Layout />}>
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;

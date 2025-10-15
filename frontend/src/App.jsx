import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./component/login/Login";
import Header from "./component/header/Header";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/login" element={<Login />} />
        {/* <Route path="/register" element={<Register />} /> */}
      </Routes>
    </>
  );
}

export default App;

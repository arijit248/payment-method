import LoginPage from "./feature/logIn";
// import Navbar from "./component/Navbar";
import Home from "./feature/Home";
import Contact from "./feature/Contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      {/* <LoginPage /> */}
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="home" element={<Home />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

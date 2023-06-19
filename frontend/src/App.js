import "./App.css";
import Header from "./Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Menu from "./pages/Menu";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import NewProduct from "./pages/NewProduct";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/newproduct" element={<NewProduct />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

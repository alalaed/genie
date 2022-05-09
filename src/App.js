import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNavbar from "./components/MyNavbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Product from "./components/Product";

function App() {
  return (
    <BrowserRouter>
      <div className="d-flex flex-column min-vh-100">
        <MyNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
        </Routes>
        <div className="mt-auto">
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

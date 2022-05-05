import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import MyNavbar from "./components/MyNavbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Product from "./components/Product";

function App() {
  return (
    <BrowserRouter>
      <MyNavbar />
      <Home />
      <Footer />
      <Product />
    </BrowserRouter>
  );
}

export default App;

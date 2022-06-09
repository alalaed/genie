import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { useEffect, useState } from "react";
import { Offcanvas } from "react-bootstrap";

import MyNavbar from "./components/MyNavbar";
import Home from "./pages/Home";
import Register from "./user/Register";
import Login from "./user/Login";
import Product from "./components/Product";
import Footer from "./components/Footer";
import AdminProfile from "./pages/Admin/AdminProfile";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import AdminCategory from "./pages/Admin/AdminCategory";
import ProductCreate from "./pages/Admin/ProductCreate";
import AdminAllProducts from "./pages/Admin/AdminAllProducts";
import AdminProductEdit from "./pages/Admin/AdminProductEdit";
import OffCanvas from "./components/OffCanvas";
import CategoryFilter from "./pages/CategoryFilter";
import SubcategoryFilter from "./pages/SubcategoryFilter";
import SearchPage from "./pages/SearchPage";

const App = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <BrowserRouter>
      <div className="d-flex flex-column min-vh-100">
        <MyNavbar handleShow={handleShow} />
        <ToastContainer />

        <Offcanvas
          show={show}
          onHide={handleClose}
          style={{ width: "15rem", height: "100vh", marginTop: "88px" }}
          // className="mt-5"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Filter By: </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <OffCanvas handleClose={handleClose} />
          </Offcanvas.Body>
        </Offcanvas>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:slug" element={<Product />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="/admin/profile" element={<AdminProfile />} />
          <Route path="/admin/category" element={<AdminCategory />} />
          <Route path="/admin/add-edit-products" element={<ProductCreate />} />
          <Route path="/admin/all-products" element={<AdminAllProducts />} />
          <Route path="/admin/product/:slug" element={<AdminProductEdit />} />
          <Route path="/category/:slug" element={<CategoryFilter />} />
          <Route path="/subcategory/:slug" element={<SubcategoryFilter />} />
          <Route path="/search" element={<SearchPage />} />
        </Routes>
        <div className="mt-auto">
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;

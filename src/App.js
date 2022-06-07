import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { useEffect } from "react";

import MyNavbar from "./components/MyNavbar";
import Home from "./pages/Home";
import Register from "./user/Register";
import Login from "./user/Login";
import Product from "./components/Product";
import Footer from "./components/Footer";
import AdminProfile from "./pages/Admin/AdminProfile";
import Search from "./pages/Search";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import AdminCategory from "./pages/Admin/AdminCategory";
import ProductCreate from "./pages/Admin/ProductCreate";
import AdminAllProducts from "./pages/Admin/AdminAllProducts";
import AdminProductEdit from "./pages/Admin/AdminProductEdit";

const App = () => {
  useEffect(() => {}, []);

  return (
    <BrowserRouter>
      <div className="d-flex flex-column min-vh-100">
        <MyNavbar />
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:slug" element={<Product />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/search" element={<Search />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="/admin/profile" element={<AdminProfile />} />
          <Route path="/admin/category" element={<AdminCategory />} />
          <Route path="/admin/add-edit-products" element={<ProductCreate />} />
          <Route path="/admin/all-products" element={<AdminAllProducts />} />
          <Route path="/admin/product/:slug" element={<AdminProductEdit />} />
        </Routes>
        <div className="mt-auto">
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;

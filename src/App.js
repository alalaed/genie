import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { useDispatch } from "react-redux";
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
import AdminCategoryUpdate from "./pages/Admin/AdminCategoryUpdate";
import AdminSubcategory from "./pages/Admin/AdminSubcategory";
import Openable from "./components/Openable";

const App = () => {
  useEffect(() => {}, []);

  return (
    <BrowserRouter>
      <div className="d-flex flex-column min-vh-100">
        <MyNavbar />
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/search" element={<Search />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="/admin/profile" element={<AdminProfile />} />
          <Route path="/admin/category" element={<AdminCategory />} />
          <Route path="/admin/subcategory" element={<AdminSubcategory />} />
          <Route path="/test" element={<Openable />} />
          <Route
            path="/admin/category/:slug"
            element={<AdminCategoryUpdate />}
          />
        </Routes>
        <div className="mt-auto">
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;

import FirstHeadline from "../components/FirstHeadline";
import HomeBoard from "../components/Home_Board";
import NewArrivals from "../components/NewArrivals";
import { useState, useEffect } from "react";
import { Spinner, Container } from "react-bootstrap";
import { getOrderedProducts } from "../utils/productCreate";
import BestSellers from "../components/BestSellers";
const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const loadAllProducts = () => {
    getOrderedProducts("createdAt", "desc", 5).then((res) => {
      setProducts(res.data);
    });
  };
  useEffect(() => {
    loadAllProducts();
  }, []);

  return (
    <>
      {loading ? (
        <div className=" w-100 d-flex justify-content-center align-items-center">
          <Spinner animation="border" variant="primary" />
        </div>
      ) : (
        <Container fluid>
          <FirstHeadline />
          <HomeBoard products={products} />
          <NewArrivals />
          <BestSellers />
        </Container>
      )}
    </>
  );
};

export default Home;

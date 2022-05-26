import FirstHeadline from "../components/FirstHeadline";
import SecondHeadline from "../components/SecondHeadline";
import HomeBoard from "../components/Home_Board";
import Sale from "../components/Sale";
import { useState, useEffect } from "react";
import { Spinner } from "react-bootstrap";
const Home = () => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);

  const URL = "http://localhost:3001/products/10";

  const loadPage = async () => {
    try {
      setLoading(true);
      let response = await fetch(URL, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      if (response.ok) {
        let data = await response.json();
        setLoading(false);
        setProducts(data);
      } else {
        alert("something went wrong :(");
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    loadPage();
  }, []);

  return (
    <>
      {loading ? (
        <div className=" w-100 d-flex justify-content-center align-items-center">
          <Spinner animation="border" variant="primary" />
        </div>
      ) : (
        <>
          <FirstHeadline />
          <HomeBoard products={products} />
          <SecondHeadline />
          <Sale products={products} />
        </>
      )}
    </>
  );
};

export default Home;

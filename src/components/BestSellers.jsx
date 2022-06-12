import { useEffect } from "react";
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { getOrderedProducts } from "../utils/productCreate";

const BestSellers = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = () => {
    getOrderedProducts("sold", "desc", 6).then((res) => setProducts(res.data));
  };
  return (
    <Container fluid className="mb-5 px-3">
      <h1>Best Sellers</h1>
      <Row>
        {products.map((data) => {
          return (
            <Col xs={12} md={4} lg={4} xl={2} className="mt-3 " key={data._id}>
              <Link
                to={`/product/${data.slug}`}
                style={{ textDecoration: "none" }}
              >
                <img
                  src={data.images[0].url}
                  className="salePic rounded border border-secondary px-3 shadow"
                  alt=""
                />
              </Link>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default BestSellers;

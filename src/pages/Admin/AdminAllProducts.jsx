import { useState } from "react";
import { Col, Container, Row, Spinner, ListGroup } from "react-bootstrap";
import AdminSidebar from "../../components/AdminSidebar";
import { getProducts } from "../../utils/productCreate";
import { useEffect } from "react";
import ProductsListSlot from "../../components/ProductsListSlot";

const AdminAllProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadAllProducts();
  }, []);

  const loadAllProducts = async () => {
    try {
      setLoading(true);
      getProducts(10).then((res) => {
        setProducts(res.data);
        setLoading(false);
      });
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  return (
    <Container>
      <Row>
        <Col md={2}>
          <AdminSidebar />
        </Col>
        <Col md={10}>
          <h1 className="my-3">All Products</h1>
          {loading ? (
            <Container className="d-flex w-100 justify-content-center mt-3">
              <Spinner animation="grow" className="mx-4" />
              <Spinner animation="grow" className="mx-4" />
              <Spinner animation="grow" className="mx-4" />
              <Spinner animation="grow" className="mx-4" />
            </Container>
          ) : (
            <Row>
              {products.map((p) => (
                <Col lg={3} className="mt-3">
                  <ProductsListSlot
                    title={p.title}
                    image={p.images[0].url}
                    key={p._id}
                    price={p.price}
                    description={p.description}
                  />
                </Col>
              ))}
            </Row>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default AdminAllProducts;

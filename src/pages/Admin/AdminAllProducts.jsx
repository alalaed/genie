import { useState } from "react";
import { Col, Container, Row, Spinner, ListGroup } from "react-bootstrap";
import AdminSidebar from "../../components/AdminSidebar";
import { getProducts } from "../../utils/productCreate";
import { useEffect } from "react";

const AdminAllProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadAllProducts();
  }, []);

  const loadAllProducts = async () => {
    try {
      setLoading(true);
      const res = await getProducts(10);
      if ((res.status = 200)) {
        setProducts(res.data);
        console.log(products);
        setLoading(false);
      }
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
          {loading ? (
            <Container className="d-flex w-100 justify-content-center mt-3">
              <Spinner animation="grow" className="mx-4" />
              <Spinner animation="grow" className="mx-4" />
              <Spinner animation="grow" className="mx-4" />
              <Spinner animation="grow" className="mx-4" />
            </Container>
          ) : (
            <ListGroup className="mt-3">
              <ListGroup.Item>
                <Row>
                  <Col md={3}>
                    <img
                      src={products[0].images[0].url}
                      className="image-all-products"
                      alt=""
                    />
                  </Col>
                  <Col md={9}>
                    <p className="d-inline">{products[0].title}</p>
                  </Col>
                </Row>
              </ListGroup.Item>
            </ListGroup>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default AdminAllProducts;

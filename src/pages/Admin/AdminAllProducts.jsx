import { useState } from "react";
import { Col, Container, Row, Spinner, ListGroup } from "react-bootstrap";
import AdminSidebar from "../../components/AdminSidebar";
import { getProducts } from "../../utils/productCreate";
import { useEffect } from "react";
import ProductsListSlot from "../../components/ProductsListSlot";
import { deleteProduct } from "../../utils/productCreate";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

const AdminAllProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const token = useSelector((state) => state.userReducer?.accessToken);

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

  const handleRemove = (id, token) => {
    if (window.confirm())
      deleteProduct(id, token)
        .then((res) => {
          loadAllProducts();
          toast.error(`${res.data.title} is deleted`);
        })
        .catch((err) => {
          if (err.response.status === 400) toast.error(err.response.data);
          console.log(err);
        });

    console.log(id);
  };

  return (
    <Container fluid>
      <Row>
        <Col md={2} className="px-0">
          <AdminSidebar />
        </Col>
        <Col md={10}>
          <h1 className="my-3">
            {products.length > 0 ? " All Products" : "No Products to display !"}
          </h1>
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
                <Col lg={3} className="mt-3" key={p._id}>
                  <ProductsListSlot
                    title={p.title}
                    image={p.images[0].url}
                    key={p._id}
                    price={p.price}
                    description={p.description}
                    id={p._id}
                    handleRemove={handleRemove}
                    token={token}
                    slug={p.slug}
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

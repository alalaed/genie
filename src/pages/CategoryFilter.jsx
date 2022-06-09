import { getCategory } from "../utils/category";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Container, Row, Col, Table, Spinner } from "react-bootstrap";
import ProductFilterCard from "../components/ProductFilterCard";

const CategoryFilter = () => {
  let params = useParams();

  const [category, setCategory] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getCategory(params.slug).then((c) => {
      setCategory(c.data.category[0]);
      setProducts(c.data.products);
      setLoading(false);
    });
  }, [params.slug]);

  return (
    <Table striped bordered hover>
      <tbody>
        {loading ? (
          <Container className="d-flex w-100 justify-content-center my-3">
            <Spinner animation="grow" className="mx-4" size="sm" />
            <Spinner animation="grow" className="mx-4" size="sm" />
            <Spinner animation="grow" className="mx-4" size="sm" />
            <Spinner animation="grow" className="mx-4" size="sm" />
          </Container>
        ) : (
          <Container>
            {products.length < 1 ? (
              <h4> Sorry, no products are found! </h4>
            ) : (
              <h4>
                Found {products.length}{" "}
                {products.length === 1 ? "Product" : "Products"} in "
                {category.name}".
              </h4>
            )}
            <Row>
              {products.map((p) => (
                <Col md={4} className="my-2" key={p._id}>
                  <ProductFilterCard
                    title={p.title}
                    description={p.description}
                    price={p.price}
                    slug={p.slug}
                    image={p.images[0].url}
                  />
                </Col>
              ))}
            </Row>
          </Container>
        )}
      </tbody>
    </Table>
  );
};

export default CategoryFilter;

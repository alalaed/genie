import { getFilterSubcategory } from "../utils/subcategory.js";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Container, Row, Col, Table, Spinner } from "react-bootstrap";
import ProductFilterCard from "../components/ProductFilterCard";

const SubcategoryFilter = () => {
  let params = useParams();

  const [subcategory, setSubcategory] = useState({});
  const [products, setProducts] = useState([]);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getFilterSubcategory(params.slug).then((c) => {
      setSubcategory(c.data.subCategory[0]);
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
                {subcategory.name}".
              </h4>
            )}

            <Row>
              {products.map((p) => (
                <Col md={4} className="my-2" key={p._id}>
                  <ProductFilterCard
                    product={p}
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

export default SubcategoryFilter;

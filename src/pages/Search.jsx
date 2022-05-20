import { Container, Row, Col } from "react-bootstrap";
import ProductSide from "../components/ProductSide";

const Search = () => {
  return (
    <Container className="d-flex">
      <Row>
        <Col xs={12} lg={7}>
          <img
            src="https://picsum.photos/800/400"
            className="w-100 rounded"
            alt=""
          />
        </Col>
        <Col xs={12} lg={5}>
          <ProductSide />
        </Col>
      </Row>
    </Container>
  );
};

export default Search;

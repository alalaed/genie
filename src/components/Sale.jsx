import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Sale = () => {
  return (
    <Container className="mb-5 px-3">
      <Row>
        <Col xs={12} md={4} lg={4} xl={2} className="mt-3">
          <div>
            <Link to={"/product"} style={{ textDecoration: "none" }}>
              <img
                src="https://picsum.photos/100"
                className="salePic rounded"
                alt=""
              />
            </Link>
          </div>
        </Col>
        <Col xs={12} md={4} lg={4} xl={2} className="mt-3">
          <div>
            <Link to={"/product"} style={{ textDecoration: "none" }}>
              <img
                src="https://picsum.photos/100"
                className="salePic rounded"
                alt=""
              />
            </Link>
          </div>
        </Col>
        <Col xs={12} md={4} lg={4} xl={2} className="mt-3">
          <div>
            <Link to={"/product"} style={{ textDecoration: "none" }}>
              <img
                src="https://picsum.photos/100"
                className="salePic rounded"
                alt=""
              />
            </Link>
          </div>
        </Col>
        <Col xs={12} md={4} lg={4} xl={2} className="mt-3">
          <div>
            <Link to={"/product"} style={{ textDecoration: "none" }}>
              <img
                src="https://picsum.photos/100"
                className="salePic rounded"
                alt=""
              />
            </Link>
          </div>
        </Col>
        <Col xs={12} md={4} lg={4} xl={2} className="mt-3">
          <div>
            <Link to={"/product"} style={{ textDecoration: "none" }}>
              <img
                src="https://picsum.photos/100"
                className="salePic rounded"
                alt=""
              />
            </Link>
          </div>
        </Col>
        <Col xs={12} md={4} lg={4} xl={2} className="mt-3">
          <div>
            <Link to={"/product"} style={{ textDecoration: "none" }}>
              <img
                src="https://picsum.photos/100"
                className="salePic rounded"
                alt=""
              />
            </Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Sale;

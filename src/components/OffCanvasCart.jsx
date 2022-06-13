import { Offcanvas, Row, Col, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const OffCanvasCart = () => {
  let dispatch = useDispatch();
  const drawer = useSelector((state) => state.drawerReducer);
  const cart = useSelector((state) => state.cartReducer);

  return (
    <>
      <Offcanvas
        placement="bottom"
        show={drawer}
        onHide={() => {
          dispatch({
            type: "SET_VISIBLE",
            payload: false,
          });
        }}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Row>
            {cart.map((c) => (
              <Col sm={2} key={c.slug}>
                <Card className="w-100 flex-column">
                  <Link
                    onClick={() => {
                      dispatch({
                        type: "SET_VISIBLE",
                        payload: false,
                      });
                    }}
                    to={`/cart`}
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <Card.Img
                      variant="top"
                      src={c.images[0].url}
                      className="mt-2"
                      style={{
                        width: "100%",
                        height: "50px",
                        objectFit: "scale-down",
                      }}
                    />
                    <Card.Body>
                      <Card.Title
                        className="line-clamp-title"
                        style={{ fontSize: "1rem" }}
                      >
                        {c.title}
                      </Card.Title>
                      <Card.Text
                        className="line-clamp-text"
                        style={{ fontSize: "0.7rem" }}
                      >
                        {c.description}
                      </Card.Text>
                    </Card.Body>
                    <div className="d-flex justify-content-between align-items-center px-2 py-2">
                      <p className="mb-0" style={{ fontSize: "1rem" }}>
                        {c.price}€
                      </p>
                    </div>
                  </Link>
                </Card>
              </Col>
            ))}
          </Row>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default OffCanvasCart;

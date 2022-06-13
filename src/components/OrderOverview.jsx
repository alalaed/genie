import Badge from "react-bootstrap/Badge";
import ListGroup from "react-bootstrap/ListGroup";
import { Button, Row, Col, Modal } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import LoginModal from "./LoginModal";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { userCart } from "../utils/userCart";

const OrderOverview = () => {
  const cart = useSelector((state) => state.cartReducer);
  const user = useSelector((state) => state.userReducer?.user);
  const token = useSelector((state) => state.userReducer?.accessToken);

  let dispatch = useDispatch();
  let navigate = useNavigate();

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const getTotal = () => {
    return cart.reduce((currValue, nextValue) => {
      return currValue + nextValue.count * nextValue.price;
    }, 0);
  };

  const saveOrder = () => {
    userCart(cart, token)
      .then((res) => {
        console.log("response", res);
        if (res.data) navigate("/checkout");
      })
      .catch((err) => console.log(err));
  };
  return (
    <ListGroup as="ol">
      <ListGroup.Item as="li" className="d-flex justify-content-between ">
        <div className="ms-2 me-auto">
          <h4 className="fw-bold">Summary</h4>
        </div>
      </ListGroup.Item>
      {cart.map((c, i) => (
        <ListGroup.Item
          key={i}
          as="li"
          className="d-flex justify-content-between px-0"
        >
          <Row className=" w-100 ms-2 me-auto d-flex justify-content-between">
            <Col md={7}>
              <span className="summaryTitle">{c.title}</span>
            </Col>
            <Col md={2}>
              <span>
                {c.price} x{c.count}
              </span>
            </Col>
            <Col md={3} className="d-flex flex-column align-items-end">
              <Badge bg="secondary" pill className="py-0">
                <p className="my-0 SummaryPrice">€{c.price * c.count}</p>
              </Badge>
            </Col>
          </Row>
        </ListGroup.Item>
      ))}
      <hr />
      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
      >
        <div className="ms-2 me-auto">
          <div className="fw-bold">
            <p className="my-0 SummaryPrice">Total:</p>
          </div>
        </div>
        <Badge bg="primary" pill>
          <p className="SummaryTotalPrice my-0">€ {getTotal()}</p>
        </Badge>
      </ListGroup.Item>
      <hr />

      {user ? (
        <Button onClick={saveOrder} disabled={!cart.length}>
          Proceed to CheckOut
        </Button>
      ) : (
        <Button onClick={handleShow}>Login to continue shopping</Button>
      )}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            You need to be logged in to rate this product.
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <LoginModal handleClose={handleClose} />
        </Modal.Body>
      </Modal>
    </ListGroup>
  );
};
export default OrderOverview;

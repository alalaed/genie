import { Row, Col, ListGroup, Badge, Button } from "react-bootstrap";
import { delUserCart } from "../utils/userCart";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const OrderOverviewDisabled = ({
  products,
  setProducts,
  setTotal,
  token,
  total,
  address,
  setAddressSaved,
  totalAfterDiscount,
}) => {
  let dispatch = useDispatch();
  let navigate = useNavigate();

  const emptyCart = () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("cart");
    }
    // remove from redux
    dispatch({
      type: "ADD_TO_CART",
      payload: [],
    });
    // remove from backend
    delUserCart(token).then((res) => {
      setProducts([]);
      setTotal(0);
      toast.success("Cart is empty. Continue shopping.");
    });
    navigate("/cart");
  };

  console.log(products);
  return (
    <ListGroup as="ol">
      <ListGroup.Item as="li" className="d-flex justify-content-between ">
        <div className="ms-2 me-auto">
          <h4 className="fw-bold">Summary</h4>
        </div>
      </ListGroup.Item>
      {products.map((c, i) => (
        <ListGroup.Item
          key={i}
          as="li"
          className="d-flex justify-content-between px-0"
        >
          <Row className=" w-100 ms-2 me-auto d-flex justify-content-between">
            <Col md={6}>
              <span className="summaryTitle">{c.product.title} </span>
            </Col>
            <Col md={3}>
              <span>
                €{c.product.price} x{c.count}
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
          <p className="SummaryTotalPrice my-0">€ {total}</p>
        </Badge>
      </ListGroup.Item>
      {totalAfterDiscount > 0 ? (
        <ListGroup.Item
          as="li"
          className="d-flex justify-content-between align-items-start"
        >
          <div className="ms-2 me-auto">
            <div className="fw-bold">
              <p className="my-0 SummaryPrice">After Discount:</p>
            </div>
          </div>
          <Badge bg="primary" pill>
            <p className="SummaryTotalPrice my-0">€ {totalAfterDiscount}</p>
          </Badge>
        </ListGroup.Item>
      ) : (
        <></>
      )}

      <Row>
        <Col sm={6}>
          <Button
            variant="success"
            className="w-100 mt-2"
            onClick={() => navigate("/payment")}
          >
            Place Order
          </Button>
        </Col>
        <Col sm={6}>
          <Button
            variant="danger"
            className="w-100 mt-2"
            onClick={emptyCart}
            disabled={!products.length}
          >
            Empty Cart
          </Button>
        </Col>
      </Row>
    </ListGroup>
  );
};

export default OrderOverviewDisabled;

import { Button, Col, Container, Row, InputGroup, Form } from "react-bootstrap";
import { getUserCart } from "../utils/userCart";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import OrderOverviewDisabled from "../components/OrderOverviewDisabled";

const CheckOut = () => {
  const cart = useSelector((state) => state.cartReducer);
  const user = useSelector((state) => state.userReducer?.user);
  const token = useSelector((state) => state.userReducer?.accessToken);

  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [address, setAddress] = useState("");
  const [addressSaved, setAddressSaved] = useState(false);

  useEffect(() => {
    getUserCart(token).then((res) => {
      console.log("hello there use and acrt ", user, cart);
      setProducts(res.data.products);
      setTotal(res.data.cartTotal);
    });
  }, []);

  return (
    <Container fluid className="mt-3">
      <Row>
        <Col md={6}>
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
            <Form.Control
              placeholder="Username"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <Form.Control
              placeholder="Recipient's username"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
            <InputGroup.Text id="basic-addon2">@example.com</InputGroup.Text>
          </InputGroup>
          <Form.Label htmlFor="basic-url">Your vanity URL</Form.Label>
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon3">
              https://example.com/users/
            </InputGroup.Text>
            <Form.Control id="basic-url" aria-describedby="basic-addon3" />
          </InputGroup>
          <InputGroup className="mb-3">
            <InputGroup.Text>$</InputGroup.Text>
            <Form.Control aria-label="Amount (to the nearest dollar)" />
            <InputGroup.Text>.00</InputGroup.Text>
          </InputGroup>
          <InputGroup>
            <InputGroup.Text>With textarea</InputGroup.Text>
            <Form.Control as="textarea" aria-label="With textarea" />
          </InputGroup>
          text Area
          <Button></Button>
          <hr />
          <h4> GotCoupon?</h4>
          <br />
          coupon input
        </Col>
        <Col md={6}>
          <OrderOverviewDisabled
            total={total}
            products={products}
            user={user}
            setProducts={setProducts}
            setTotal={setTotal}
            token={address}
            setAddress={setAddress}
            addressSaved={addressSaved}
            setAddressSaved={setAddressSaved}
            cart={cart}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default CheckOut;

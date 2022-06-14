import { Button, Col, Container, Row, InputGroup, Form } from "react-bootstrap";
import { getUserCart } from "../utils/userCart";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import OrderOverviewDisabled from "../components/OrderOverviewDisabled";
import { toast } from "react-toastify";
import { saveUserAddress } from "../utils/userCart";
import { applyCode } from "../utils/code";
import { useDispatch } from "react-redux";

const CheckOut = () => {
  let dispatch = useDispatch();

  const cart = useSelector((state) => state.cartReducer);
  const user = useSelector((state) => state.userReducer?.user);
  const token = useSelector((state) => state.userReducer?.accessToken);

  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [address, setAddress] = useState("");
  const [addressSaved, setAddressSaved] = useState(false);
  const [code, setCode] = useState("");
  const [totalAfterDiscount, setTotalAfterDiscount] = useState(0);
  const [discountError, setDiscountError] = useState("");

  useEffect(() => {
    getUserCart(token).then((res) => {
      console.log("hello there use and acrt ", user, cart);
      setProducts(res.data.products);
      setTotal(res.data.cartTotal);
    });
  }, []);

  const saveAddressInDb = () => {
    console.log(address);
    saveUserAddress(address, token).then((res) => {
      if (res.data.address) {
        setAddressSaved(true);
        toast.success("Address saved");
      }
    });
  };

  const sendCode = () => {
    applyCode(token, code)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          setTotalAfterDiscount(res.data.totalAfterDiscount);
          dispatch({
            type: "COUPON_APPLIED",
            payload: true,
          });
        }
        // if (res.err) {
        //   setDiscountError(res.err);
        // }
      })
      .catch((err) => {
        setDiscountError(err);
        dispatch({
          type: "COUPON_APPLIED",
          payload: false,
        });
      });
  };

  return (
    <Container fluid className="mt-3">
      <Row>
        <Col md={6}>
          <Form onSubmit={saveAddressInDb}>
            <Form.Group>
              <Form.Label>Deliver to :</Form.Label>
              <Form.Control
                type="text"
                className=""
                onChange={(e) => setAddress(e.target.value)}
                value={address}
                autoFocus
                required
              />
              <br />
              <Button onClick={saveAddressInDb} className="btn btn-primary">
                Save
              </Button>
              <hr />
            </Form.Group>
          </Form>
          <hr />
          <h4> Enter Promo Code?</h4>
          <br />
          <Form onSubmit={sendCode}>
            <Form.Group>
              <Form.Control
                type="text"
                className=""
                onChange={(e) => {
                  setCode(e.target.value);
                  setDiscountError("");
                }}
                value={code}
                required
              />
              <br />
              {discountError && <p className="bg-danger"> Invalid Code</p>}
              <Button onClick={sendCode} className="btn btn-primary">
                Apply
              </Button>
              <hr />
            </Form.Group>
          </Form>
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
            totalAfterDiscount={totalAfterDiscount}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default CheckOut;

import { Container, Row, Col, Table } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import OrderOverview from "../components/OrderOverview";
import { BsTrash } from "react-icons/bs";
import { AiFillCloseCircle } from "react-icons/ai";
import { FcShipped } from "react-icons/fc";
import { TiTick, TiDeleteOutline } from "react-icons/ti";
import SummaryTable from "../components/SummaryTable";

const Cart = () => {
  let dispatch = useDispatch();

  const user = useSelector((state) => state.userReducer?.user);
  const cart = useSelector((state) => state.cartReducer);

  return (
    <Container fluid className="mt-3">
      <Row className="py-0">
        <Col md={8}>
          {!cart.length ? (
            <p>
              No Products in cart. <Link to={"/"}>Continue Shopping</Link>
            </p>
          ) : (
            <Table hover>
              <tbody>
                <tr>
                  <Row className="py-0 ">
                    <Col
                      md={2}
                      className="d-flex
                      justify-content-center border"
                    >
                      <td className="py-0">Product</td>
                    </Col>
                    <Col
                      md={2}
                      className="d-flex
                      justify-content-center border"
                    >
                      <td>Title</td>
                    </Col>
                    <Col
                      md={2}
                      className="d-flex
                      justify-content-center border"
                    >
                      <td>Brand</td>
                    </Col>
                    <Col
                      md={2}
                      className="d-flex
                      justify-content-center border"
                    >
                      <td>Color</td>
                    </Col>
                    <Col
                      md={2}
                      className="d-flex
                      justify-content-center border"
                    >
                      <td>Qty</td>
                    </Col>
                    <Col
                      md={1}
                      className="d-flex
                      justify-content-center border"
                    >
                      <td>
                        <FcShipped />
                      </td>
                    </Col>
                    <Col
                      md={1}
                      className="d-flex
                      justify-content-center border"
                    >
                      <td>
                        <BsTrash style={{ color: "red" }} />
                      </td>
                    </Col>
                  </Row>
                </tr>
                {cart.map((c, i) => (
                  <SummaryTable c={c} i={i} />
                ))}
              </tbody>
            </Table>
          )}
        </Col>
        <Col md={4}>
          <OrderOverview />
        </Col>
      </Row>
    </Container>
  );
};

export default Cart;

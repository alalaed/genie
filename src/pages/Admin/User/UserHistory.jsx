import UserSidebar from "../../../components/UserSidebar";
import { Container, Row, Col, Table } from "react-bootstrap";
import { getUserOrders } from "../../../utils/userCart";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { TiTick, TiDeleteOutline } from "react-icons/ti";

import ShowStatusInfo from "../../../components/ShowStatusInfo";

const UserHistory = () => {
  const [orders, setOrders] = useState([]);
  const token = useSelector((state) => state.userReducer.accessToken);

  useEffect(() => {
    loadOrders();
  }, []);

  const loadOrders = () => {
    getUserOrders(token).then((res) => {
      setOrders(res.data);
      console.log(res.data);
    });
  };

  const showOrderInTable = (order) => (
    <table className="table table-bordered">
      <thead className="thead-light">
        <tr>
          <th scope="col">Title</th>
          <th scope="col">Price</th>
          <th scope="col">Brand</th>
          <th scope="col">Color</th>
          <th scope="col">Quantity</th>
          <th scope="col">Shipping</th>
        </tr>
      </thead>

      <tbody>
        {order.products.map((p, i) => (
          <tr key={i}>
            <td>
              <b>{p.product.title}</b>
            </td>
            <td>{p.product.price} €</td>
            <td>{p.product.brand}</td>
            <td>{p.color}</td>
            <td>{p.count}</td>
            <td>
              {p.product.shipping === "Yes" ? (
                <TiTick style={{ color: "green" }} />
              ) : (
                <TiDeleteOutline style={{ color: "red" }} />
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );

  const showEachOrders = () =>
    orders.map((order, i) => (
      <div key={i} className="m-5 p-3 border ">
        <ShowStatusInfo order={order} />
        {showOrderInTable(order)}
        {/* <div className="row">
          <div className="col"></div>
        </div> */}
      </div>
    ));
  return (
    <Container fluid>
      <Row>
        <Col md={2} className="d-none d-md-block px-0">
          <UserSidebar />
        </Col>
        <Col md={10}>
          {orders.length < 1 ? (
            <div className="d-flex justify-content-center align-items-center mt-5">
              <h3>
                No purchases yet!{" "}
                <Link to={"/"}>
                  <span>Continue Shopping</span>
                </Link>
              </h3>
            </div>
          ) : (
            <>
              <h3 className="mt-5 mx-5 px-3">All Purchases</h3>
              <Col md={12}>{showEachOrders()}</Col>
            </>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default UserHistory;

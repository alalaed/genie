import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { CheckCircleOutlined, CloseCircleOutlined } from "@ant-design/icons";
import ShowPaymentInfo from "../components/ShowPaymentInfo";

const Orders = ({ orders, handleStatusChange }) => {
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
        {order &&
          order.products.map((p, i) => (
            <tr key={i}>
              <td>
                <b>{p.product.title}</b>
              </td>
              <td>{p.product.price}</td>
              <td>{p.product.brand}</td>
              <td>{p.color}</td>
              <td>{p.count}</td>
              <td>
                {p.product.shipping === "Yes" ? (
                  <CheckCircleOutlined style={{ color: "green" }} />
                ) : (
                  <CloseCircleOutlined style={{ color: "red" }} />
                )}
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );

  return (
    <>
      {orders.map((order) => (
        <Row key={order._id} className="pb-5">
          <div className="bg-light border px-4 py-2">
            <Row className="">
              <Col className="d-flex align-items-center">
                <ShowPaymentInfo order={order} />
                <h5 className="ms-2">Payment Info</h5>
              </Col>
              <Col md={4} className="text-black"></Col>
              <Col md={4} className="">
                <h5>Update Delivery Status</h5>
                <select
                  onChange={(e) =>
                    handleStatusChange(order._id, e.target.value)
                  }
                  className="form-control"
                  defaultValue={order.orderStatus}
                  name="status"
                >
                  <option value="Not Processed">
                    <h5>Not Processed</h5>
                  </option>
                  <option value="Processing">Processing</option>
                  <option value="Dispatched">Dispatched</option>
                  <option value="Cancelled">Cancelled</option>
                  <option value="Completed">Completed</option>
                </select>
              </Col>
            </Row>
          </div>

          {showOrderInTable(order)}
        </Row>
      ))}
    </>
  );
};

export default Orders;

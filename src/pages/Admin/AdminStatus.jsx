import AdminSidebar from "../../components/AdminSidebar";
import { Container, Row, Col } from "react-bootstrap";
import { getOrders, changeOrderStatus } from "../../utils/admin";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import Orders from "../../components/Orders";

const AdminStatus = () => {
  const [orders, setOrders] = useState([]);
  const token = useSelector((state) => state.userReducer.accessToken);

  useEffect(() => {
    loadOrders();
  }, []);

  const loadOrders = () => {
    getOrders(token).then((res) => {
      setOrders(res.data);
      console.log(res.data);
    });
  };

  const handleStatusChange = (orderId, orderStatus) => {
    changeOrderStatus(orderId, orderStatus, token).then((res) => {
      toast.success(`Order status updated to "${orderStatus}"`);
      loadOrders();
    });
  };
  return (
    <Container fluid>
      <Row>
        <Col md={2} className="d-none d-md-block px-0">
          <AdminSidebar />
        </Col>
        <Col md={10}>
          <Container className="mt-5">
            <h3>All Orders</h3>
            <Orders orders={orders} handleStatusChange={handleStatusChange} />
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

export default AdminStatus;

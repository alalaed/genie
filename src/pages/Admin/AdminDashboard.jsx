import { Container, Row, Col } from "react-bootstrap";
import AdminSidebar from "../../components/AdminSidebar";
import Profile from "../Profile";

const AdminDashboard = () => {
  return (
    <Container>
      <Row>
        <Col md={2} className="d-none d-md-block">
          <AdminSidebar />
        </Col>
        <Col md={10}></Col>
      </Row>
    </Container>
  );
};

export default AdminDashboard;

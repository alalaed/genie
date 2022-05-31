import { Container, Row, Col } from "react-bootstrap";
import AdminSidebar from "../../components/AdminSidebar";
import Profile from "../Profile";

const AdminDashboard = () => {
  return (
    <Container fluid>
      <Row>
        <Col md={2} className="d-none d-md-block px-0">
          <AdminSidebar />
        </Col>
        <Col md={10}></Col>
      </Row>
    </Container>
  );
};

export default AdminDashboard;

import { Container, Row, Col } from "react-bootstrap";
import AdminSidebar from "../../components/AdminSidebar";
import Profile from "../Profile";

const AdminProfile = () => {
  return (
    <Container fluid>
      <Row>
        <Col md={2} className="d-none d-md-block px-0">
          <AdminSidebar />
        </Col>
        <Col md={10}>
          <Profile />
        </Col>
      </Row>
    </Container>
  );
};

export default AdminProfile;

import { Container, Row, Col } from "react-bootstrap";
import logo from "../images/logo.png";

const Footer = () => {
  return (
    <Container
      fluid
      className="bg-dark whiteText align-items-center justify-content-center "
    >
      <Row>
        <Col md={4}>
          <div className="d-flex align-items-center  ">
            <img src={logo} alt="" className="footerLogo py-1" />
            <p className=" ml-2 my-0 footerBrand">The Genie Shop</p>
          </div>
        </Col>

        <Col md={4} className="footerLink mt-2 align-items-center">
          About
        </Col>

        <Col md={4}>
          <p className="corporation align-items-center">
            The Genie Shop © 2022
          </p>
        </Col>
      </Row>
    </Container>
  );
};
export default Footer;

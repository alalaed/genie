import { Container, Row, Col } from "react-bootstrap";
import logo from "../images/logo.png";

const Footer = () => {
  return (
    <Container fluid className="bg-dark whiteText ">
      <Container>
        <div>
          <div className="d-flex align-items-center  ">
            <img src={logo} alt="" className="footerLogo py-1" />
            <p className=" ml-2 my-0 footerBrand">The Genie Shop</p>
          </div>

          <Row>
            <Col xs={6}>
              <Row>
                <Col xs={4} className="footerLink mt-2">
                  About
                </Col>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col>
              <p className="corporation mb-4">The Genie Shop © 2022</p>
            </Col>
          </Row>
        </div>
      </Container>
    </Container>
  );
};
export default Footer;

import { Container, Navbar, Form, Nav, FormControl } from "react-bootstrap";
import logo from "../images/logo.png";
import { BsPersonCircle, BsCartPlus, BsPercent } from "react-icons/bs";
import { MdOutlineLocalOffer } from "react-icons/md";

const MyNavbar = () => {
  return (
    <Navbar bg="dark" expand="sm" className="px-0 py-0" sticky="top">
      <Container>
        <Navbar.Brand href="#" className="mr-5">
          <div className="d-flex flex-column align-items-center">
            <img src={logo} alt="" className="navLogo py-1" />
            <p className="my-0 whiteText">The Genie Shop</p>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className="whiteText ml-3">
          <Nav.Link href="#action1" className="whiteText">
            <MdOutlineLocalOffer className="navIcons" />
          </Nav.Link>
          <Nav.Link href="#action2" className="whiteText">
            <BsPercent className="navIcons" />
          </Nav.Link>
          <Form className=" d-flex w-50 ml-1">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
          </Form>
        </Navbar.Collapse>
        <div className="d-flex flex-column align-items-center px-1 ml-3 ">
          <BsPersonCircle className="navIcons" />
        </div>
        <div className="d-flex flex-column align-items-center px-1 ml-3 ">
          <BsCartPlus className="navIcons" />
        </div>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;

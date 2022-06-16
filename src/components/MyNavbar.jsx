import { Container, Navbar, Nav, Badge, NavDropdown } from "react-bootstrap";
import logo from "../images/logo.png";
import { BsPersonCircle, BsCartPlus, BsPercent } from "react-icons/bs";
import { FiFilter } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Search from "./Search";

const MyNavbar = ({ handleShow }) => {
  const user = useSelector((state) => state.userReducer?.user.role);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cartReducer);
  // const token = useSelector((state) => state.userReducer.accessToken);

  console.log("cart is ", cart);

  const logOut = () => {
    // localStorage.removeItem("accessToken");
    // localStorage.removeItem("user");
    dispatch({ type: "ADD_TO_CART", payload: [] });
    localStorage.removeItem("cart");
    dispatch({ type: "LOGOUT", payload: null });
    navigate("/");
  };

  return (
    <Navbar bg="dark" expand="sm" className="px-0 pe-5" sticky="top">
      <Container fluid>
        <Navbar.Brand href="#" className="mr-5">
          <Link to={"/"} style={{ textDecoration: "none" }}>
            <div className="d-flex flex-column align-items-center">
              <img src={logo} alt="" className="navLogo py-1" />
              <p className="my-0 whiteText">The Genie Shop</p>
            </div>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className="whiteText ml-3">
          <Nav.Link href="#action1" className="whiteText">
            <FiFilter className="navIcons" onClick={handleShow} />
          </Nav.Link>
          <Nav.Link href="#action2" className="whiteText">
            <BsPercent className="navIcons" />
          </Nav.Link>
          {/*<Form className=" d-flex w-50 ml-1">
             <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            /> 
          </Form>*/}
          <Search />
        </Navbar.Collapse>

        <div className="d-flex flex-column align-items-center px-1 ml-3 position-relative ">
          {
            <Link to={"/cart"}>
              <BsCartPlus className="navIcons " />
              <Badge bg="danger" className="cartBadge">
                {cart.length}
              </Badge>
            </Link>
          }
        </div>
        <NavDropdown
          title={<BsPersonCircle className="navIcons" />}
          id="basic-nav-dropdown"
        >
          {!user && (
            <NavDropdown.Item>
              <Link to={"/login"}>Login</Link>
            </NavDropdown.Item>
          )}
          {user && (
            <>
              <NavDropdown.Item>
                {user === "User" && (
                  <Link to="/user/history" style={{ color: "black" }}>
                    Dashboard
                  </Link>
                )}

                {user === "Admin" && (
                  <Link to="/admin-dashboard" style={{ color: "black" }}>
                    Dashboard
                  </Link>
                )}
              </NavDropdown.Item>
              <NavDropdown.Item onClick={logOut}>Logout</NavDropdown.Item>
            </>
          )}
          {!user && (
            <NavDropdown.Item>
              <Link to={"/register"}>Register</Link>
            </NavDropdown.Item>
          )}
        </NavDropdown>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;

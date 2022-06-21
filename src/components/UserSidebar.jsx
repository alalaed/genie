import { ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

const UserSidebar = () => {
  return (
    <>
      <div className=" sidebar-outer bg-dark d-flex flex-column align-items-center">
        <ListGroup className="w-100">
          <ListGroup.Item className="bg-dark px-0" style={{ color: "white" }}>
            <Link
              to="/user/history"
              className="nav-link"
              style={{ color: "white" }}
            >
              History
            </Link>
          </ListGroup.Item>

          <ListGroup.Item className="bg-dark px-0" style={{ color: "white" }}>
            <Link
              to="/user/wishlist"
              className="nav-link"
              style={{ color: "white" }}
            >
              Wishlist
            </Link>
          </ListGroup.Item>
        </ListGroup>
      </div>
    </>
  );
};

export default UserSidebar;

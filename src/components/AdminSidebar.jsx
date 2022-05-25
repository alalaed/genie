import { ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

const AdminSidebar = () => {
  return (
    <>
      <div className=" sidebar-outer bg-dark d-flex flex-column align-items-center">
        <ListGroup className="w-100">
          <ListGroup.Item className="bg-dark px-0" style={{ color: "white" }}>
            <Link
              to="/admin/profile"
              className="nav-link"
              style={{ color: "white" }}
            >
              Profile
            </Link>
          </ListGroup.Item>
          <ListGroup.Item className="bg-dark px-0" style={{ color: "white" }}>
            <Link
              to="/admin/category"
              className="nav-link"
              style={{ color: "white" }}
            >
              Category
            </Link>
          </ListGroup.Item>

          <ListGroup.Item className="bg-dark px-0" style={{ color: "white" }}>
            <Link
              to="/admin/all-products"
              className="nav-link"
              style={{ color: "white" }}
            >
              All Products
            </Link>
          </ListGroup.Item>
          <ListGroup.Item className="bg-dark px-0" style={{ color: "white" }}>
            <Link
              to="/admin/add-edit-products"
              className="nav-link"
              style={{ color: "white" }}
            >
              Add / Edit Products
            </Link>
          </ListGroup.Item>
        </ListGroup>
      </div>
    </>
  );
};

export default AdminSidebar;

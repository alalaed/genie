import { Badge, Container, Spinner } from "react-bootstrap";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { getCategories } from "../utils/category";
import { getSubs } from "../utils/subcategory";
import { useNavigate } from "react-router-dom";
import { AiFillSetting } from "react-icons/ai";

const OffCanvas = ({ show, handleClose }) => {
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState([]);
  const [subcategories, setSubcategories] = useState([]);
  let navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    getCategories().then((res) => {
      setCategories(res.data);
      setLoading(false);
    });
    getSubs().then((sub) => {
      setSubcategories(sub.data);
    });
  }, []);
  const handleAdvancedFilter = () => {
    handleClose();
    navigate("/search");
  };

  return (
    <div>
      {loading ? (
        <Container className="d-flex w-100 justify-content-center my-3">
          <Spinner animation="grow" className="mx-4" size="sm" />
          <Spinner animation="grow" className="mx-4" size="sm" />
          <Spinner animation="grow" className="mx-4" size="sm" />
          <Spinner animation="grow" className="mx-4" size="sm" />
        </Container>
      ) : (
        <div>
          <h6 className="mt-3">Advanced Filtering</h6>
          <h3>
            <Badge onClick={handleAdvancedFilter}>
              <AiFillSetting />
            </Badge>
          </h3>
          <h6>Categories</h6>
          {categories.map((c) => (
            <Link to={`/category/${c.slug}`}>
              <h5>
                <Badge
                  bg="primary"
                  className="me-1"
                  key={c._id}
                  onClick={handleClose}
                >
                  {c.name}
                </Badge>
              </h5>
            </Link>
          ))}
          <hr />
          <h6 className="mt-3">Subcategories</h6>
          {subcategories.map((s) => (
            <Link to={`/subcategory/${s.slug}`}>
              <h5>
                <Badge
                  bg="primary"
                  className="me-1"
                  key={s._id}
                  onClick={handleClose}
                >
                  {s.name}
                </Badge>
              </h5>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default OffCanvas;

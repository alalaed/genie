import { Row, Col } from "react-bootstrap";
import { AiFillCloseCircle } from "react-icons/ai";
import { TiTick, TiDeleteOutline } from "react-icons/ti";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

const SummaryTable = ({ c, i }) => {
  let dispatch = useDispatch();

  const handleDelete = () => {
    // console.log(p._id, "to remove");
    let cart = [];

    if (typeof window !== "undefined") {
      if (localStorage.getItem("cart")) {
        cart = JSON.parse(localStorage.getItem("cart"));
      }
      // [1,2,3,4,5]
      cart.map((product, i) => {
        if (product._id === c._id) {
          cart.splice(i, 1);
        }
      });

      localStorage.setItem("cart", JSON.stringify(cart));
      dispatch({
        type: "ADD_TO_CART",
        payload: cart,
      });
    }
  };

  const handleCountChange = (e) => {
    // console.log("available quantity", p.quantity);
    let count = e.target.value < 1 ? 1 : e.target.value;

    if (count > c.quantity) {
      toast.error(`Max available quantity: ${c.quantity}`);
      return;
    }

    let cart = [];

    if (typeof window !== "undefined") {
      if (localStorage.getItem("cart")) {
        cart = JSON.parse(localStorage.getItem("cart"));
      }

      cart.map((product, i) => {
        if (product._id == c._id) {
          cart[i].count = count;
        }
      });

      localStorage.setItem("cart", JSON.stringify(cart));
      dispatch({
        type: "ADD_TO_CART",
        payload: cart,
      });
    }
  };

  return (
    <tr key={i}>
      <Row className="py-0">
        <Col
          md={2}
          className="d-flex
                      justify-content-center border"
        >
          <td className="py-0">
            {<img className="SummaryPic" src={c.images[0].url} alt="" />}
          </td>
        </Col>
        <Col md={2} className="d-flex justify-content-start border pt-2">
          <td>
            <p className="titleSummaryList">{c.title}</p>
          </td>
        </Col>
        <Col
          md={2}
          className="d-flex justify-content-center border align-items-center"
        >
          <td>{c.brand}</td>
        </Col>
        <Col
          md={2}
          className="d-flex justify-content-center border align-items-center"
        >
          <td>{c.color}</td>
        </Col>
        <Col
          md={2}
          className="d-flex justify-content-center border align-items-center"
        >
          <td>
            <input
              type="number"
              className="form-control"
              value={c.count}
              onChange={handleCountChange}
            />
          </td>
        </Col>
        <Col
          md={1}
          className="d-flex justify-content-center border align-items-center px-0"
        >
          <td>
            {c.shipping === "Yes" ? (
              <TiTick style={{ color: "green" }} className="summarySvg" />
            ) : (
              <TiDeleteOutline
                style={{ color: "red" }}
                className="summarySvg"
              />
            )}
          </td>
        </Col>
        <Col
          md={1}
          className="d-flex justify-content-center border align-items-center px-0"
        >
          <td>
            <AiFillCloseCircle
              className="summarySvg"
              style={{ color: "red", width: "4rem" }}
              onClick={handleDelete}
            />
          </td>
        </Col>
      </Row>
    </tr>
  );
};

export default SummaryTable;

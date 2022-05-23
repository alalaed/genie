import { Button, Collapse, ListGroup, Form, Row, Col } from "react-bootstrap";
import { useState } from "react";
import { MdModeEdit } from "react-icons/md";
import { BsTrash } from "react-icons/bs";
import { RiArrowDownSFill } from "react-icons/ri";
import { MdDone } from "react-icons/md";
import { updateCategory } from "../utils/category";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";

const AdminCategorySlot = ({
  _id,
  name,
  slug,
  handleRemove,
  loadCategories,
}) => {
  const [disabled, setDisabled] = useState(true);
  const [newName, setNewName] = useState("");
  const [open, setOpen] = useState(false);
  const token = useSelector((state) => state.userReducer?.accessToken);

  const enable = () => {
    setDisabled(!disabled);
    setOpen(!open);
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    // setLoading(true);
    updateCategory(slug, { name: newName }, token)
      .then((res) => {
        // setLoading(false);
        // setName("");
        toast.success(`"${res.data.name}" is updated !`);
        // navigate("/admin/category");
        loadCategories();
        setOpen(!open);
      })
      .catch((err) => {
        console.log(err);
        // setLoading(false);
        if (err.response.status === 400) toast.error(err.response.data);
      });
  };

  return (
    <ListGroup.Item key={_id} className="mt-3">
      <Row>
        <Col md={8}>
          <Form.Group className="mb-3 w-100">
            <Form.Control
              placeholder={name}
              disabled
              value={name}
              onChange={(e) => setNewName(e.target.value)}
            />
          </Form.Group>
        </Col>
        <Col md={4} className="pl-0">
          <Button
            variant="danger"
            onClick={() => handleRemove(slug)}
            className="float-right"
          >
            <BsTrash />
          </Button>
          <Button
            variant="warning"
            className="float-right mr-3"
            onClick={enable}
          >
            <MdModeEdit />
          </Button>
          <Button variant="primary" className="float-right mr-3">
            <RiArrowDownSFill />
          </Button>
        </Col>
        <Collapse in={open}>
          <Col md={8}>
            <Row>
              <Col md={8}>
                <Form.Group className="mb-3 w-100">
                  <Form.Control
                    className="d-inline-block"
                    placeholder={"Edit Category"}
                    disabled={disabled}
                    value={newName}
                    onChange={(e) => setNewName(e.target.value)}
                  />
                </Form.Group>
              </Col>
              <Col md={4}>
                <Button
                  variant="success"
                  className="float-left mr-3"
                  onClick={handleUpdate}
                >
                  <MdDone />
                </Button>
              </Col>
            </Row>
          </Col>
        </Collapse>
        <Col md={4} className="pl-0"></Col>
      </Row>
    </ListGroup.Item>
  );
};
export default AdminCategorySlot;

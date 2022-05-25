import { useState } from "react";
import {
  Collapse,
  Row,
  Col,
  ListGroup,
  Button,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import { MdModeEdit } from "react-icons/md";
import { BsTrash } from "react-icons/bs";
import { MdDone } from "react-icons/md";

import { deleteSubcategory, updateSubcategory } from "../utils/subcategory";
import { useSelector } from "react-redux";

const SubOpenSlot = ({ id, name, slug }) => {
  const [edit, setEdit] = useState(false);
  const token = useSelector((state) => state.userReducer?.accessToken);
  const [newSub, setNewSub] = useState("");

  const removeSub = (chosen) => {
    deleteSubcategory(chosen, token);
  };

  const enableEdit = () => {
    setEdit(!edit);
  };
  const updateSub = () => {
    updateSubcategory(slug, { name: newSub }, token);
    setNewSub("");
    setEdit(!edit);
  };

  return (
    <ListGroup.Item key={id}>
      <Col>
        <Row>
          <Col md={8}>{name}</Col>
          <Col md={4}>
            <Button
              className="float-end ms-3"
              variant="danger"
              onClick={(e) => removeSub(slug)}
            >
              <BsTrash />
            </Button>
            <Button
              className="float-end ms-3"
              variant="warning"
              onClick={enableEdit}
            >
              <MdModeEdit />
            </Button>
          </Col>
        </Row>
        <Row>
          <Col md={10}>
            <Collapse in={edit}>
              <InputGroup className="mb-3">
                <FormControl
                  placeholder="Edit Subcategory"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                  value={newSub}
                  onChange={(e) => setNewSub(e.target.value)}
                />
                <Button variant="success" onClick={updateSub}>
                  <MdDone />
                </Button>
              </InputGroup>
            </Collapse>
          </Col>
        </Row>
      </Col>
    </ListGroup.Item>
  );
};

export default SubOpenSlot;

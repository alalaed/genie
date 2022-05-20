import { Button, Collapse, ListGroup, Form, Row, Col } from "react-bootstrap";
import { useState } from "react";
import { MdModeEdit } from "react-icons/md";
import { BsTrash } from "react-icons/bs";
import { RiArrowDownSFill } from "react-icons/ri";

const Openable = ({ _id, name, slug, token, handleRemove }) => {
  const [disabled, setDisabled] = useState(true);

  const enable = () => {
    setDisabled(!disabled);
  };

  return (
    <ListGroup.Item key={_id} className="mt-3">
      <Row>
        <Col md={8}>
          <Form.Group className="mb-3 w-100">
            <Form.Control placeholder={name} disabled={disabled} />
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

          {disabled ? (
            <></>
          ) : (
            <Button variant="success" className="float-left mr-3">
              <RiArrowDownSFill />
            </Button>
          )}
        </Col>
      </Row>
    </ListGroup.Item>
  );
};
export default Openable;

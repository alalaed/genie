import { Button, Col, ListGroup, Row } from "react-bootstrap";
import { MdModeEdit } from "react-icons/md";
import { BsTrash } from "react-icons/bs";

const SubcategorySlot = (id, subName) => {
  <ListGroup.Item key={id}>
    <Col>
      <Row>
        <Col md={8}>{subName}</Col>
        <Col md={4}>
          <Button className="float-right mr-3" variant="danger">
            <BsTrash />
          </Button>
          <Button className="float-right mr-3" variant="warning">
            <MdModeEdit />
          </Button>
        </Col>
      </Row>
    </Col>
  </ListGroup.Item>;
};

export default SubcategorySlot;

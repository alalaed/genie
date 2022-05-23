import { useState } from "react";
import {
  ListGroup,
  InputGroup,
  FormControl,
  Button,
  Row,
  Col,
  Collapse,
} from "react-bootstrap";
import {
  createSubcategory,
  getSubcategories,
  deleteSubcategory,
  updateSubcategory,
} from "../utils/subcategory.js";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { MdModeEdit } from "react-icons/md";
import { BsTrash } from "react-icons/bs";
import SubOpenSlot from "./SubOpenSlot.jsx";

const SubOpen = ({ parent }) => {
  const [name, setName] = useState("");
  const [subcategories, setSubcategories] = useState([]);
  const [newSub, setNewSub] = useState("");
  const [edit, setEdit] = useState(false);

  const token = useSelector((state) => state.userReducer?.accessToken);

  const getSubs = () =>
    getSubcategories(parent).then((s) => setSubcategories(s.data));

  const addSub = () => {
    console.log("i am firing" + parent);
    createSubcategory({ name, parent }, token);
    console.log(subcategories);
    setName("");
    getSubs();
  };

  const removeSub = (chosen) => {
    deleteSubcategory(chosen, token);
  };

  const updateSub = (update, newSub, token) => {
    updateSubcategory(update, { newSub }, token);
  };

  const enableEdit = () => {
    setEdit(!edit);
  };

  useEffect(() => {
    getSubs();
  }, [subcategories]);

  return (
    <ListGroup>
      <ListGroup.Item>
        <InputGroup className="mb-3">
          <FormControl
            placeholder="Add a Subcategory."
            aria-label="Add a Subcategory."
            aria-describedby="basic-addon2"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onKey
          />
          <Button id="basic-add" className="w-25" onClick={addSub}>
            Add
          </Button>
        </InputGroup>
      </ListGroup.Item>
      <ListGroup as="ol">
        {subcategories.map((s) => (
          // <ListGroup.Item as="li">{s.name}</ListGroup.Item>
          // <SubcategorySlot subName={s.name} id={s._id} />
          // <ListGroup.Item key={s._id}>
          //   <Col>
          //     <Row>
          //       <Col md={8}>{s.name}</Col>
          //       <Col md={4}>
          //         <Button
          //           className="float-right mr-3"
          //           variant="danger"
          //           onClick={(e) => removeSub(s.slug)}
          //         >
          //           <BsTrash />
          //         </Button>
          //         <Button
          //           className="float-right mr-3"
          //           variant="warning"
          //           onClick={enableEdit}
          //         >
          //           <MdModeEdit />
          //         </Button>
          //       </Col>
          //     </Row>
          //     <Row>
          //       <Collapse in={edit}>
          //         <div>hello there</div>
          //       </Collapse>
          //     </Row>
          //   </Col>
          // </ListGroup.Item>
          <SubOpenSlot id={s._id} name={s.name} slug={s.slug} />
        ))}
      </ListGroup>
    </ListGroup>
  );
};
export default SubOpen;

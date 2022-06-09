import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { FormControl, Form } from "react-bootstrap";

const Search = () => {
  let dispatch = useDispatch();
  const { searchReducer } = useSelector((state) => ({ ...state }));
  const { text } = searchReducer;
  let navigate = useNavigate();

  const handleChange = (e) => {
    dispatch({
      type: "SEARCH_QUERY",
      payload: { text: e.target.value },
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search?${text}`);
  };

  return (
    <Form className=" d-flex w-100 ml-1" onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Control
          onChange={handleChange}
          type="search"
          value={text}
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
      </Form.Group>
    </Form>
  );
};

export default Search;

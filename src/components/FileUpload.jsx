import {
  FormControl,
  InputGroup,
  Button,
  Card,
  Row,
  Col,
  Badge,
} from "react-bootstrap";
import Resizer from "react-image-file-resizer";
import axios from "axios";
import { useSelector } from "react-redux";

const FileUpload = ({ values, setValues, setLoading }) => {
  const token = useSelector((state) => state.userReducer?.accessToken);

  const fileUploader = (e) => {
    let files = e.target.files;
    let uploaded = values.images;

    if (files) {
      setLoading(true);
      for (let i = 0; i < files.length; i++) {
        Resizer.imageFileResizer(
          files[i],
          720,
          720,
          "JPEG",
          100,
          0,
          (uri) => {
            axios
              .post(
                "http://localhost:3001/cloudinary/uploadImages",
                { image: uri },
                {
                  headers: {
                    authorization: token ? token : "",
                  },
                }
              )
              .then((res) => {
                console.log("this is the res-----" + res.data.url);
                setLoading(false);
                uploaded.push(res.data);
                console.log("this is the uploaded------" + uploaded);
                setValues({ ...values, images: uploaded });
              })
              .catch((err) => {
                setLoading(false);
                console.log("CLOUDINARY ERROR " + err);
              });
          },
          "base64"
        );
      }
    }
  };
  const handleRemove = (id) => {
    console.log("this is the id-----" + id);
    setLoading(true);
    axios
      .post(
        "http://localhost:3001/cloudinary/removeImage",
        { id },
        { headers: { authorization: token ? token : "" } }
      )
      .then((res) => {
        setLoading(false);
        const { images } = values;
        let filteredImages = images.filter((item) => {
          return item.public_id !== id;
        });
        setValues({ ...values, images: filteredImages });
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };
  return (
    <>
      <InputGroup className="mb-3">
        <FormControl
          placeholder="Recipient's username"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          type="file"
          multiple
          onChange={fileUploader}
        />
      </InputGroup>
      <Row>
        {values.images &&
          values.images.map((image) => (
            <Col sm={2} key={image.public_id}>
              <Card
                // style={{
                //   width: "10rem",
                // }}
                className="mb-3 mt-3 position-relative"
              >
                <Card.Img
                  variant="top"
                  src={image.url}
                  style={{
                    width: "8rem",
                    height: "8rem",
                    objectFit: "contain",
                  }}
                />

                <Badge bg="danger" className="delete-badge">
                  <Button
                    variant="danger"
                    className="px-0 py-0"
                    style={{ lineHeight: "0.8rem" }}
                    onClick={() => handleRemove(image.public_id)}
                  >
                    x
                  </Button>
                </Badge>
              </Card>
            </Col>
          ))}
      </Row>
    </>
  );
};

export default FileUpload;

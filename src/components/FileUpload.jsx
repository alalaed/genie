import { FormControl, InputGroup, Button, Card } from "react-bootstrap";
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
                console.log("image data" + res);
                setLoading(false);
                uploaded.push(res.data);
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
      {/* <Card style={{ width: "10rem" }}>
        <Card.Img variant="top" src={values.images[0].url} />
      </Card> */}
      {/* {values.images &&
        values.images.map((image) => (
          <Card style={{ width: "10rem" }}>
            <Card.Img variant="top" src={image.url} />
          </Card>
        ))} */}
    </>
  );
};

export default FileUpload;

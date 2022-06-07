import { Modal, Button } from "bootstrap";
import { Toast } from "bootstrap";
import { useSelector } from "react-redux";
import { useState } from "react";
import { BsStar } from "react-icons/bs";

const RatingModal = ({ children }) => {
  const user = useSelector((state) => state.userReducer?.user);
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <div onClick={() => setModalVisible(true)}>
        <BsStar />
      </div>
    </>
  );
};

export default RatingModal;

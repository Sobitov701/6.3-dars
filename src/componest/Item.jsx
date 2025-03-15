import { useState } from "react";
import Modal from "./Modal";

function Item({ t, deleteTitle }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {showModal && (
        <Modal setShowModal={setShowModal} t={t} deleteTitle={deleteTitle} />
      )}
      <li>
        <p>{t.title}</p>
        <button onClick={() => setShowModal(true)}>Delete</button>
      </li>
    </>
  );
}

export default Item;

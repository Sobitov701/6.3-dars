const Modal = ({ t, setShowModal, deleteTitle }) => {
  return (
    <div className="modal">
      <p>{t.title}</p>
      <button onClick={() => deleteTitle(t.id)}>ha</button>
      <button onClick={() => setShowModal(false)}>yoq</button>
    </div>
  );
};

export default Modal;

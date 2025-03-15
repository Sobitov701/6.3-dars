import Item from "./Item";
import Modal from "./Modal";

function TitlesList({ titles, deleteTitle }) {
  return (
    <>
      {titles.map((t) => (
        <Item key={t.id} t={t} deleteTitle={deleteTitle} />
      ))}
    </>
  );
}

export default TitlesList;

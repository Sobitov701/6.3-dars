function TitlesList({ titles, deleteTitle }) {
  return (
    <>
      {titles.map((t) => (
        <li key={t.id}>
          <p>{t.title}</p>
          <button onClick={() => deleteTitle(t.id)}>Delete</button>
        </li>
      ))}
    </>
  );
}

export default TitlesList;

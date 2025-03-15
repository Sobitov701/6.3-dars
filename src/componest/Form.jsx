function FormList({ handleSubmit, setText, text }) {
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        onChange={(e) => setText(e.target.value)}
        value={text}
      />
      <button>Add</button>
    </form>
  );
}

export default FormList;

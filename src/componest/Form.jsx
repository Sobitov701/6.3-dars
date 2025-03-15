function FormList({ handleSubmit, setText, text, error }) {
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        onChange={(e) => {
          const inputText = e.target.value;
          setText(inputText);
        }}
        value={text}
      />
      <button>Qo`shish</button>
      {error && <p>{error}</p>}
    </form>
  );
}

export default FormList;

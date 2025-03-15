import { useEffect, useState } from "react";
import TitlesList from "./componest/TitelsLIst";
import FormList from "./componest/Form";

const initalValue = () => {
  return JSON.parse(localStorage.getItem("todos") || []);
};

function App() {
  const [text, setText] = useState("");
  const [error, setError] = useState(false);
  const [titles, setTitles] = useState(initalValue);

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        setError(false);
      }, 5000);
    } else if (text) {
      setError(false);
    }
  }, [error, text]);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(titles));
  }, [titles]);

  const deleteTitle = (id) => {
    setTitles(titles.filter((t) => t.id !== id));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.length == 0) {
      setError("Birorta soz yozing !");
    } else if (text.length < 4) {
      setError("4 harf dan ko`p bo`lishi kerak");
    } else {
      if (text.trim()) {
        setTitles([...titles, { title: text, id: Math.random() }]);
        setText("");
        setError(false);
      }
    }
  };

  return (
    <div>
      <h1>Title</h1>
      <FormList
        handleSubmit={handleSubmit}
        text={text}
        setText={setText}
        error={error}
      />
      <ul>
        {!titles.length && <h2>Ma`lumotlar yoq</h2>}
        {titles.length > 0 && (
          <TitlesList titles={titles} deleteTitle={deleteTitle} />
        )}
      </ul>
    </div>
  );
}

export default App;

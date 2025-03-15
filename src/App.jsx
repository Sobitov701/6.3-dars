import { useEffect, useState } from "react";
import TitlesList from "./componest/TitelsLIst";
import FormList from "./componest/Form";
import dataList from "./data";

function App() {
  const [text, setText] = useState("");
  const [error, setError] = useState(false);
  const [titles, setTitles] = useState(dataList);

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        setError(false);
      }, 5000);
    }
  }, [error]);

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
        <TitlesList titles={titles} deleteTitle={deleteTitle} />
      </ul>
    </div>
  );
}

export default App;

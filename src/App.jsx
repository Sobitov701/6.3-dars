import { useState } from "react";
import TitlesList from "./componest/TitelsLIst";
import FormList from "./componest/form";

function App() {
  const [text, setText] = useState("");

  const [titles, setTitles] = useState([
    {
      title: "Title-1",
      id: 1,
    },
    {
      title: "Title-2",
      id: 2,
    },
    {
      title: "Title-3",
      id: 3,
    },
  ]);

  const deleteTitle = (id) => {
    setTitles(titles.filter((t) => t.id !== id));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      setTitles([...titles, { title: text, id: Math.random() }]);
      setText("");
    }
  };

  return (
    <div>
      <h1>Title</h1>
      <FormList handleSubmit={handleSubmit} text={text} setText={setText} />
      <ul>
        <TitlesList titles={titles} deleteTitle={deleteTitle} />
      </ul>
    </div>
  );
}

export default App;

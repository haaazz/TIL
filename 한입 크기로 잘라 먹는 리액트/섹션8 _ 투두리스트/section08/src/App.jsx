import "./App.css";
import { useState } from "react";

import Header from "./components/Header";
import Editor from "./components/Editor";
import List from "./components/List";

const mockData = [
  {
    id: 0,
    isDone: true,
    content: "계절학기 과제하기",
    date: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: "노래듣기",
    date: new Date().getTime(),
  },
];

function App() {
  const [todos, setTodos] = useState([mockData]);
  return (
    <div className="App">
      <Header />
      <Editor />
      <List />
    </div>
  );
}

export default App;

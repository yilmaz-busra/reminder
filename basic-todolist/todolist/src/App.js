import "./App.css";
import Header from "./Components/Header";
import { useState } from "react";
import List from "./Components/List";
import Footer from "./Components/Footer";

function App() {
  const [filtered, setFiltered] = useState("All");
  const [tasks, setTasks] = useState([
    { task: " DO HW", completed: true },
    { task: " Brush Hair", completed: false },
  ]);
  return (
    <div className="App">
      <Header tasks={tasks} setTasks={setTasks} />
      <List
        tasks={tasks}
        setTasks={setTasks}
        filtered={filtered}
        setFiltered={setFiltered}
      />
      <Footer
        filtered={filtered}
        setFiltered={setFiltered}
        tasks={tasks}
        setTasks={setTasks}
      />
    </div>
  );
}

export default App;

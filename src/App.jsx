import { useState } from "react";

import NewTask from "./components/NewTask";
import TaskList from "./components/TaskList";
import "./App.css";

function App() {
    const [tasks, setTasks] = useState([]);

    return (
        <>
            <NewTask tasks={tasks} setTasks={setTasks} />
            <TaskList tasks={tasks} setTasks={setTasks} />
        </>
    );
}

export default App;

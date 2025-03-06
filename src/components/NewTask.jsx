import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import "../styles/NewTask.css";

function NewTask({ tasks, setTasks }) {
    const [taskName, setTaskName] = useState("");
    const [deadLine, setDeadLine] = useState("");

    function handleFormSubmit(event) {
        event.preventDefault();

        setTasks((tasks) => [
            ...tasks,
            { id: uuidv4(), taskName, deadLine, status: false },
        ]);

        setTaskName("");
        setDeadLine("");
    }

    return (
        <div className="NewTask">
            <h1>New Task</h1>
            <form onSubmit={handleFormSubmit}>
                <div>
                    <label htmlFor="taskName">Task Name : </label>
                    <input
                        type="text"
                        name="taskName"
                        value={taskName}
                        onChange={(e) => {
                            setTaskName(e.target.value);
                        }}
                    />
                </div>
                <div>
                    <label htmlFor="deadline">DeadLine : </label>
                    <input
                        type="text"
                        name="deadLine"
                        value={deadLine}
                        onChange={(e) => {
                            setDeadLine(e.target.value);
                        }}
                    />
                </div>
                <button>Add Task</button>
            </form>
        </div>
    );
}

export default NewTask;

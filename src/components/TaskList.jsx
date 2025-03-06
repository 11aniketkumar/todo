import "../styles/TaskList.css";

function TaskList({ tasks, setTasks }) {
    function deleteTask(targetId) {
        setTasks((tasks) => tasks.filter((task) => task.id !== targetId));
    }

    function toggleStatus(targetId) {
        setTasks((prevTasks) =>
            prevTasks.map((task) => {
                if (task.id !== targetId) {
                    return task;
                } else {
                    return { ...task, status: !task.status };
                }
            })
        );
    }

    return (
        <>
            <table className="TaskList">
                <thead>
                    <tr>
                        <th>Task Name</th>
                        <th>DeadLine</th>
                        <th>Status</th>
                        <th>Controls</th>
                    </tr>
                </thead>
                {tasks.length === 0 ? (
                    <tbody>
                        <tr>
                            <td colSpan={4}>
                                <h3>No Tasks Found!</h3>
                            </td>
                        </tr>
                    </tbody>
                ) : (
                    <tbody>
                        {tasks.map((task) => (
                            <tr key={task.id}>
                                <td>
                                    {task.status ? (
                                        <strike>{task.taskName}</strike>
                                    ) : (
                                        task.taskName
                                    )}
                                </td>
                                <td>{task.deadLine}</td>
                                <td>{task.status ? "Done" : "Pending"}</td>
                                <td>
                                    {task.status === false ? (
                                        <i
                                            className="fa-regular fa-circle-check status_btn"
                                            onClick={() =>
                                                toggleStatus(task.id)
                                            }
                                        />
                                    ) : (
                                        <i
                                            className="fa-solid fa-circle-check status_btn"
                                            onClick={() =>
                                                toggleStatus(task.id)
                                            }
                                        />
                                    )}
                                    &nbsp; &nbsp; &nbsp;
                                    <i
                                        className="fa-solid fa-trash delete_btn"
                                        onClick={() => deleteTask(task.id)}
                                    />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                )}
            </table>
        </>
    );
}

export default TaskList;

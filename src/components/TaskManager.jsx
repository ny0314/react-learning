import { useState, useEffect } from "react";
import TaskInput from "./TaskInput";
import TaskItem from "./TaskItem";
import styles from "../styles/TaskManager.module.css";

function TaskManager() {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
        setTasks(savedTasks);
    }, []);

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);

    const addTask = (taskText) => {
        if (taskText.trim() === "") return;
        setTasks([...tasks, { text: taskText, completed: false }]);
    };

    const toggleTask = (index) => {
        setTasks(
            tasks.map((task, i) =>
                i === index ? { ...task, completed: !task.completed } : task
            )
        );
    };

    const deleteTask = (index) => {
        setTasks(tasks.filter((_, i) => i !== index));
    };

    return (
        <div className={styles.container}>
            <h1>タスク管理アプリ</h1>
            <TaskInput addTask={addTask} />
            <ul className={styles.taskList}>
                {tasks.map((task, index) => (
                    <TaskItem
                        key={index}
                        index={index}
                        task={task}
                        toggleTask={toggleTask}
                        deleteTask={deleteTask}
                    />
                ))}
            </ul>
        </div>
    );
}

export default TaskManager;

import { useState } from "react";
import styles from "../styles/TaskManager.module.css";

function TaskInput({ addTask }) {
    const [input, setInput] = useState("");

    const handleAddTask = () => {
        addTask(input);
        setInput("");
    };

    return (
        <div className={styles.inputContainer}>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className={styles.inputField}
            />
            <button onClick={handleAddTask} className={styles.addButton}>
                追加
            </button>
        </div>
    );
}

export default TaskInput;

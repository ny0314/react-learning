import styles from "../styles/TaskManager.module.css";

function TaskItem({ task, index, toggleTask, deleteTask }) {
    return (
        <li className={styles.taskItem}>
            <span onClick={() => toggleTask(index)} className={styles.taskText}>
                {task.completed ? "✅" : "🔲"} {task.text}
            </span>
            <button
                onClick={() => deleteTask(index)}
                className={styles.deleteButton}
            >
                削除
            </button>
        </li>
    );
}

export default TaskItem;

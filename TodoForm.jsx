import { useState } from "react";

export const TodoForm = ({ onAddTodo }) => {
    // Initialize inputValue as an object with the correct keys
    const [inputValue, setInputValue] = useState({ id: "", content: "", checked: false });

    const handleInputChange = (value) => {
        // Update inputValue with the new content while preserving other fields
        setInputValue({ ...inputValue, id: value, content: value });
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();

        // Don't add empty tasks
        if (!inputValue.content.trim()) return;

        onAddTodo(inputValue);

        // Reset inputValue to its initial state
        setInputValue({ id: "", content: "", checked: false });
    };

    return (
        <section className="form">
            <form onSubmit={handleFormSubmit}>
                <div>
                    <input
                        type="text"
                        className="todo-input"
                        autoComplete="off"
                        value={inputValue.content} // Correct property name
                        onChange={(event) => handleInputChange(event.target.value)}
                    />
                </div>
                <div>
                    <button type="submit" className="todo-btn">
                        Add Task
                    </button>
                </div>
            </form>
        </section>
    );
};

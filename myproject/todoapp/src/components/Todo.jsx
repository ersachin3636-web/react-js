import { useState } from "react";

export default function Todo() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();

    if (todo.trim() === "") return; // empty input prevent

    // pehle se added todos ke sath new todo add karo
    setTodos([...todos, todo]);
    setTodo(""); // input clear after add
  }

  return (
    <div style={{ maxWidth: "400px", margin: "50px auto", textAlign: "center", fontFamily: "Arial" }}>
      <h2 style={{ marginBottom: "20px", color: "#333" }}>📝 Todo App</h2>
      
      <form onSubmit={handleSubmit} style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
        <input
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          placeholder="Enter your task"
          style={{
            flex: "1",
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius: "8px",
            outline: "none"
          }}
        />
        <button
          type="submit"
          style={{
            padding: "10px 20px",
            border: "none",
            borderRadius: "8px",
            background: "#4CAF50",
            color: "white",
            cursor: "pointer"
          }}
        >
          Add
        </button>
      </form>

      <ul style={{ marginTop: "20px", textAlign: "left", listStyle: "none", padding: 0 }}>
        {todos.map((item, index) => (
          <li
            key={index}
            style={{
              background: "#f4f4f4",
              marginBottom: "10px",
              padding: "10px",
              borderRadius: "8px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center"
            }}
          >
            {item}
            <button
              onClick={() => setTodos(todos.filter((_, i) => i !== index))}
              style={{
                border: "none",
                background: "red",
                color: "white",
                borderRadius: "6px",
                padding: "5px 10px",
                cursor: "pointer"
              }}
            >
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

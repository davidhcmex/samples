import { useEffect, useState } from "react";

const data = [
  {
    id: 1,
    text: "Learn TypeScript",
    completed: false
  },
  {
    id: 2,
    text: "Learn React",
    completed: true
  },
  {
    id: 3,
    text: "Learn Go",
    completed: false
  }
]

export const TodoTableWithActions = () => {
  const [todos, setTodos] = useState(data);
  const [input, setInput] = useState("");
  const [filter, setFilter] = useState("all"); // 'all' | 'completed' | 'pending'

  const [filteredTodos, setFilteredTodos] = useState(data);


  const addTodo = () => {
    setInput("");
    setTodos((prev) => {
      const nextId = prev.length ? Math.max(...prev.map((i) => i.id)) + 1 : 1;

      const newItem = {
        id: nextId,
        text: input,
        completed: false
      };

      return [...prev, newItem];
    });
  };

  useEffect(() => {
    switch (filter) {
      case "completed":
        setFilteredTodos(todos.filter((t) => t.completed));
        break;
      case "pending":
        setFilteredTodos(todos.filter((t) => !t.completed));
        break;
      case "all":
      default:
        setFilteredTodos(todos);
        break;
    }
  }, [todos, filter]); 


  const toggleTodo = (id) => {
    setTodos((prev) =>
      prev.map((item) => {
        return item.id === id ? { ...item, completed: !item.completed } : item
      }
      )
    );
  };


  const handleChange = (e) => {
    setFilter(e.target.value); 
  };

  return (
    <>
      <table>
        <tbody>
          {filteredTodos.map((item) => {
            const decoreWith = item.completed ? 'line-through' : 'none';
            return (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td><input type="checkbox" checked={item.completed} onChange={() => toggleTodo(item.id)} /></td>
                <td style={{ textDecoration: decoreWith }}>{item.text}</td>
                <td>{item.completed ? "Completed" : "Pending"}</td>
              </tr>)
          })
          }
        </tbody>
      </table>
      <label style={{ marginRight: '20px'}} htmlFor="todoText">typing a text will make the 'add To Do' button be shown:</label>
      <input style={{borderColor:'black', borderStyle:'solid', borderWidth:'2px'}} type="text" value={input} name='todoText:' onChange={(e) => setInput(e.target.value)} />
      <tr />
      {input.trim() !== "" && <button style={{ backgroundColor: 'gray', margin: '20px' }} onClick={addTodo}>Add Todo</button>}
      <tr />
      <label style={{ marginRight: '20px' }} htmlFor="filter">Filter:</label>
      <select id="filter" name="filter" onChange={handleChange}>
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="pending">Pending</option>
      </select>
    </>
  )
};

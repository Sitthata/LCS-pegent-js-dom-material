const exampleTodos = [
  {
    id: 1,
    title: "Go to the gym",
    completed: false,
  },
  {
    id: 2,
    title: "Doing the laundry",
    completed: true,
  },
];

const API_URL = "http://localhost:3000";

const handleResponse = async (response) => {
  if (!response.ok) {
    throw new Error(`HTTP error ${response.status}`);
  }
  return await response.json();
};

const fetchTodos = async () => {
  const response = await fetch(`${API_URL}/todos`);
  try {
    const todos = await handleResponse(response);
    return todos;
  } catch (error) {
    console.error(error);
    return [];
  }
};

const createTodoLi = (todo) => {
  const li = document.createElement("li");
  li.textContent = todo.title;
  if (todo.completed) {
    li.classList.add("completed");
  }
  return li;
};

const renderTodo = async () => {
  const todos = await fetchTodos();
  const ul = document.getElementById("todo-list");
  todos.forEach((todo) => {
    const li = createTodoLi(todo);
    ul.appendChild(li);
  });
};

const main = async () => {
  renderTodo();
};

main();

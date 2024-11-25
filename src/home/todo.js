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

const handleResponse = async (response) => {};

const fetchTodos = async () => {
  try {
    const response = await fetch(`${API_URL}/todos`);
    if (!response.ok) {
      throw new Error("Todo not found");
    }
    return response.json();
  } catch (error) {
    console.error(error);
    return [];
  }
};

const createTodoLi = (todo) => {
  // <li>{{ todo.title }}</li>
  const newTodo = document.createElement("li");
  newTodo.textContent = todo.title;
  if (todo.completed) {
    newTodo.classList.add("completed");
  }
  return newTodo;
};

const renderTodo = async () => {
  const todos = await fetchTodos();
  const ul = document.getElementById("todo-list");

  todos.forEach((todo) => {
    ul.appendChild(createTodoLi(todo));
  });
};

const main = async () => {
  renderTodo();
};

main();

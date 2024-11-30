// 1. DOM Events

// 1.2 addEventListener Handlers
// Button Click
const button = document.getElementById("addListenerButton");

button.onclick = () => {
  console.log("PEGENT");
}

button.addEventListener("click", () => {
  console.log("Button clicked! (addEventListener click)");
})

// Input Change
const addListenerInput = document.getElementById("addListenerInput");
const log = document.getElementById("log");

addListenerInput.addEventListener("change", function (event) {
  log.textContent =
    "Input changed to: " + event.target.value + " (addEventListener onchange)";
});

// Mouseover
const addListenerDiv = document.getElementById("addListenerDiv");
addListenerDiv.addEventListener("mouseover", function () {
  console.log("Mouse over detected! (addEventListener onmouseover)");
});

// 2. Event Bubbling
function parentClicked() {
  console.log("Parent div clicked! (Event Bubbling)");
}

function childClicked(event) {
  console.log("Child div clicked! (Event Bubbling)");
  // Uncomment the next line to stop the event from bubbling up to the parent
  event.stopPropagation();
}

// 3. Window onload Event
window.onload = function () {
  console.log("Window loaded! (onload event)");
  // Initialize data or perform setup tasks here
};

const data = document.getElementById("data");

// Alternatively, using addEventListener for DOMContentLoaded
document.addEventListener("DOMContentLoaded", async function () {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
  const todo = await response.json()
  console.log(todo)
  console.log("DOM fully loaded and parsed (DOMContentLoaded)");
  data.textContent = todo.title;
});

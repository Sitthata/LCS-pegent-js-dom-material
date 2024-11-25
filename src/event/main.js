// 1. DOM Events

// 1.2 addEventListener Handlers
// Button Click
const addListenerButton = document.getElementById("addListenerButton");
addListenerButton.addEventListener("click", function (event) {
  //   alert("Button clicked! (addEventListener)");
  console.log(event.target);
});

// Input Change
const addListenerInput = document.getElementById("addListenerInput");
const log = document.getElementById("log");

addListenerInput.addEventListener("change", function (event) {
  log.textContent =
    "Input changed to: " + event.target.value + " (addEventListener onchange)";
  console.log(event.target);
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
  // event.stopPropagation();
}

// 3. Window onload Event
window.onload = function () {
  console.log("Window loaded! (onload event)");
  // Initialize data or perform setup tasks here
};

const data = document.getElementById("data");

// Alternatively, using addEventListener for DOMContentLoaded
document.addEventListener("DOMContentLoaded", function () {
  const exampleData = {
    name: "John Doe",
    email: "john.doe@example.com",
  };
  console.log("DOM fully loaded and parsed (DOMContentLoaded)");
  data.textContent = exampleData.name + " (" + exampleData.email + ")";
});

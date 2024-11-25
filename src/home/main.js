const getElementDemo = () => {
  const root = document;

  const example = root.getElementById("example")
  const li = example.firstElementChild.lastElementChild.lastElementChild.firstElementChild
  li.style.color = "red"
  li.textContent = "Pegent"

};

const propertiesDemo = () => {
  // HTMLCollection vs NodeList
  const container = document.getElementById("container");

  const htmlCollection = container.getElementsByClassName("btn");
  const nodeList = container.querySelectorAll(".btn");

  console.log("Before:", htmlCollection.length);
  console.log("Before:", nodeList.length);

  const button = createButton();
  container.appendChild(button);

  console.log(htmlCollection);
  console.log(nodeList);

  console.log("After:", htmlCollection.length);
  console.log("After:", nodeList.length);
};

const createButton = () => {
  /* <button class="btn">new button</button> */
  const newButton = document.createElement("button");
  newButton.textContent = "new button";
  newButton.className = "btn";
  return newButton;
};

// propertiesDemo();
// getElementDemo();

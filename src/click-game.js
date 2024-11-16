const btnNo = document.getElementById("btn-no");
const btnYes = document.getElementById("btn-yes");
const message = document.getElementById("message");

function getRandomPosition() {
  const windowHeight = window.innerHeight;
  const windowWidth = window.innerWidth;

  const randomX = Math.floor(Math.random() * (windowWidth - 100)); // subtract button width
  const randomY = Math.floor(Math.random() * (windowHeight - 40)); // subtract button height

  return { x: randomX, y: randomY };
}

function moveButton() {
  const pos = getRandomPosition();
  // Try to move the button to random position
  btnNo.style.position = "fixed";
  btnNo.style.top = `${pos.y}px`;
  btnNo.style.left = `${pos.x}px`;
}

btnNo.addEventListener("mouseover", moveButton);
// btnNo.addEventListener("click", moveButton);

btnYes.addEventListener("click", () => {
  message.textContent = "Great choice! ❤️";
});

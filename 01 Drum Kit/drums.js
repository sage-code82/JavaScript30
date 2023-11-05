function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function playSound(event) {
  const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
  const key = document.querySelector(`div[data-key="${event.keyCode}"]`);
  if (!audio) return;

  key.classList.add("playing");
  audio.currentTime = 0;
  audio.play();

  const circle = document.createElement("div");
  circle.classList.add("circle");

  const randomSize = Math.floor(Math.random() * 150) + 5;
  const randomColor = getRandomColor();
  const randomTop = Math.floor(
    Math.random() * (window.innerHeight - randomSize)
  );
  const randomLeft = Math.floor(
    Math.random() * (window.innerWidth - randomSize)
  );

  circle.style.width = `${randomSize}px`;
  circle.style.height = `${randomSize}px`;
  circle.style.backgroundColor = randomColor;
  circle.style.top = `${randomTop}px`;
  circle.style.left = `${randomLeft}px`;

  document.body.appendChild(circle);

  circle.classList.add("animate");
  setTimeout(() => {
    circle.classList.remove("animate");
    document.body.removeChild(circle);
  }, 500);
}

function removeTransition(event) {
  if (event.propertyName !== "transform") return;
  this.classList.remove("playing");
}

const keys = Array.from(document.querySelectorAll(".key"));
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));
window.addEventListener("keydown", playSound);

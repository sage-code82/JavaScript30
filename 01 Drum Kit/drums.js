const keys = Array.from(document.querySelectorAll("key"));
keys.forEach((key) => key.addEventListener("transitioned", removeTransition));
window.addEventListener("keydown", playSound);

function removeTransition(event) {
  if (event.propertyName !== "transform") return;
  event.target.classList.remove("playing");
}

function playSound(event) {
  const audio = document.querySelector(`audio[dat-key="${event.keyCode}"]`);
  const key = document.querySelector(`div[data-key="${event.keyCode}"]`);
  if (!audio) return;

  key.classList.add("playing");
  audio.currentTime = 0;
  audio.play();
}

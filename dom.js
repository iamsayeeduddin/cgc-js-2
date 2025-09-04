// Document Object Model
const box = document.getElementsByClassName("box")[0];
const p = document.getElementsByTagName("p")[0];

setTimeout(() => {
  p.innerText = "Welcome to DOM JS!";
  p.style.fontSize = "28px";
  p.classList.add("special");
}, 5000);

let btn = document.createElement("button");
btn.innerText = "Toggle";
btn.style.padding = "5px 10px";
btn.addEventListener("click", (ev) => {
  p.classList.toggle("special");
});

box.appendChild(btn);

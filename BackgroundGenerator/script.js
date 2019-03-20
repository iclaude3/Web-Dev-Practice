let css = document.querySelector("h3");
let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
let body = document.getElementById("gradient");

function changeGradient() {
  body.style.background = "linear-gradient(to right, " + color1.value + "," + color2.value + ")";

  css.textContent = body.style.background + ";";
}

color1.addEventListener("input", changeGradient);

color2.addEventListener("input", changeGradient);

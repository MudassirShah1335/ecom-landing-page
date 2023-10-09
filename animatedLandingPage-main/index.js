let Navegation = document.querySelector(".Navegation");
let menu = document.querySelector("#menu-bars");
let navbar = document.querySelector(".navbar");
let close = document.querySelector(".close");
let bars = document.querySelector(".bars");
menu.onclick = () => {
  Navegation.classList.toggle("menu-show");
  bars.classList.toggle("bar-none");
  close.classList.toggle("none");
  bars.classList.toggle("none");
  //   close.display = "block";
  //   if ((close.display = "block")) {
  //     bars.style.display = "none";
  //   } else {
  //     bars.display = "block";
  //   }
};

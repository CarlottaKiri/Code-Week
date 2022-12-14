const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  menu.classList.toggle("active");
});

document.querySelector(".show-login").addEventListener("click", function () {
  document.querySelector(".popup").classList.add("active");
});
document.querySelector(".close-login").addEventListener("click", function () {
  document.querySelector(".popup").classList.remove("active");
});

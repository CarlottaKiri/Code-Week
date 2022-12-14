const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  menu.classList.toggle("active");
});

document.querySelector(".show-login").addEventListener("click", function () {
  document.querySelector(".popup").classList.toggle("active");
});
document.querySelector(".close-login").addEventListener("click", close);
document.querySelector(".sign-in").addEventListener("click", close);

function close() {
  document.querySelector(".popup").classList.remove("active");
}

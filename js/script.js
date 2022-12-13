(function () {
  document.querySelector(".menu-button").addEventListener(
    "click",
    function () {
      this.parentNode.parentNode.classList.toggle("closed");
    },
    false
  );
})();

const bookmark = document.querySelector(".bookmark");

let bookmarked = false;

bookmark.addEventListener("click", (e) => {
  if (bookmarked) {
    bookmark.querySelectorAll("img")[0].src = "../img/bookmark.png";
    bookmarked = false;
  } else {
    bookmark.querySelectorAll("img")[0].src = "../img/bookmark-save.png";
    bookmarked = true;
  }
});

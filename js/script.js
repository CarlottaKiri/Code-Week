(function () {
  document.querySelector(".menu-button").addEventListener(
    "click",
    function () {
      this.parentNode.parentNode.classList.toggle("closed");
    },
    false
  );
})();

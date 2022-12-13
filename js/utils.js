const c = (el) => document.createElement(el);
const q = (el) => document.querySelector(el);

const BASE_URL_IMG = "https://image.tmdb.org/t/p/w500";

const createHero = (poster, name, date, vote, description) => {
  const heroContent = `
  <div class="container">
    <img
    class="hero-serie-img"
    src="${BASE_URL_IMG + poster}"
    alt="poster"
  />
  <div class="overlay">
    <div class="content">
      <button class="bookmark">
        <img
          class="bookmark-img"
          src="../img/bookmark.png"
          alt="bookmark"
        />
      </button>
      <h2 class="title">${name}</h2>
      <h4 class = "date">${date} </h4>
      <p class="vote">${vote}</p>
      <p class="description">
        ${description}
      </p>
    </div>
    </div>
  </div>`;
  const hero = q(".hero");

  hero.innerHTML = heroContent;

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
};

const genresFilter = (genres) => {
  const select = q(".genres-select");

  let options = "";
  genres.forEach((genre) => {
    options += `<option value="${genre.name}">${genre.name}</option>`;
  });
  select.innerHTML += options;
};

function createSerie(serie) {}

export { createHero, createSerie, genresFilter };

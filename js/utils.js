const c = (el) => document.createElement(el);
const q = (el) => document.querySelector(el);

const BASE_URL_HERO = "https://image.tmdb.org/t/p/w500";
const BASE_URL_CARD = "https://image.tmdb.org/t/p/w200";

const createHero = (poster, name, date, vote, description) => {
  const heroContent = `
  <div class="container">
    <img
    class="hero-serie-img"
    src="${BASE_URL_HERO + poster}"
    alt="poster"
  />
  <div class="overlay">
    <div class="content">
      <button class="hero-bookmark">
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

  const bookmark = document.querySelector(".hero-bookmark");
  console.log(bookmark);

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
    options += `<option class="option" value="${genre.id}">${genre.name}</option>`;
  });
  select.innerHTML += options;
};

const rateShow = () => {
  const rates = q(".rate-select");
  const rateArray = [1, 2, 3, 4, 5];
  let options = "";

  rateArray.forEach((rate) => {
    let stars = "";
    for (let i = 1; i <= 5; i++) {
      if (rate >= i) {
        stars += "★";
      } else {
        stars += "☆";
      }
    }
    options += `<option class="option" value="${rate}">${stars}</option>`;
  });
  rates.innerHTML += options;
};
rateShow();

const createSerie = (poster, name, date, vote, description, id) => {
  const cardsContent = `
  <div class="card-container" id="${id}">
  
    <img
    class="card-serie-img"
    src="${BASE_URL_CARD + poster}"
    alt="poster"
  />
  <div class="card-container-overlay">
    <div class="card-container-content">
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
      <a href="./tv-series.html?id=${id}"> More Info </a>
    </div>
    </div>
  
  </div>`;
  const cardContainer = q(".serie-cards");

  cardContainer.insertAdjacentHTML("beforeend", cardsContent);

  const card = document.getElementById(id);

  const bookmark = card.querySelectorAll("button.bookmark")[0];

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

// const cardButton = () => {
//   const card = document.querySelector(id);

//   const bookmark = card.querySelectorAll("button.bookmark")[0];

//   let bookmarked = false;

//   bookmark.addEventListener("click", (e) => {
//     if (bookmarked) {
//       bookmark.querySelectorAll("img")[0].src = "../img/bookmark.png";
//       bookmarked = false;
//     } else {
//       bookmark.querySelectorAll("img")[0].src = "../img/bookmark-save.png";
//       bookmarked = true;
//     }
//   });
// };

export { createHero, createSerie, genresFilter };

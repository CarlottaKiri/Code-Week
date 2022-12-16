import { createHero, createSerie, genresFilter } from "./utils.js";

const API_KEY = "c5870f565696dedbe7b9c5285226d289";

const GET = async (URL) => {
  const res = await fetch(URL);
  return await res.json();
};

// HERO GET
let hero = {};
GET(
  `https://api.themoviedb.org/3/tv/68129?api_key=${API_KEY}&language=en-US&append_to_response=videos`
).then((res) => {
  hero = res;
  createHero(
    res.videos.results[1].key,
    res.poster_path,
    res.name,
    res.first_air_date,
    res.vote_average,
    res.overview,
    res.id
  );
});

// let imageHero = "";
// const medium = window.matchMedia("(min-width: 992px)");
// medium.addListener(mediaQuery);

// function mediaQuery(x) {
//   if (imageHero == "") {
//     imageHero = document.querySelector(".hero-serie-img").outerHTML;
//   }

//   const container = document.querySelector(".container");
//   const image = document.querySelector(".hero-serie-img");
//   const videoHero = `<iframe
//   class="video"
//   width="800"
//   height="400"
//   src="https://www.youtube.com/embed/${hero.videos.results[1].key}"
//   title="YouTube video player"
//   frameborder="0"
//   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//   allowfullscreen
// ></iframe>`;
//   if (x.matches) {
//     container.insertAdjacentHTML("beforeend", videoHero);

//     container.removeChild(image);
//     console.log(x.matches);
//   } else {
//     const video = document.querySelector("iframe");
//     container.insertAdjacentHTML("beforeend", imageHero);
//     container.removeChild(video);
//     console.log(x.matches);
//   }
// }

//GENRES GET
GET(
  `https://api.themoviedb.org/3/genre/tv/list?api_key=${API_KEY}&language=en-US`
).then((res) => {
  genresFilter(res.genres);
});

//SEARCHBAR GET
const searchBar = document.querySelector(".searchbar");
const searchBarFunction = () => {
  const searchbar_value = searchBar.value;
  GET(
    `https://api.themoviedb.org/3/search/tv?api_key=${API_KEY}&language=en-US&page=${i}&query=${searchbar_value}`
  )
    .then((results) => {
      results = results.results;
      results = results.filter((serie) => {
        return serie.id && serie.poster_path;
      });

      results.map((serie) => {
        createSerie(
          serie.poster_path,
          serie.name,
          serie.first_air_date,
          serie.vote_average,
          serie.overview,
          serie.id
        );
      });
    })
    .finally(() => {
      loadButton.textContent = "Load More";
      loadButton.disabled = false;
    });
};

// TV SERIES CARDS
let i = 1;
const rateArray = [
  { vote_min: 0, vote_max: 10 },
  { vote_min: 0, vote_max: 2.4 },
  { vote_min: 2.5, vote_max: 4.4 },
  { vote_min: 4.5, vote_max: 6.4 },
  { vote_min: 6.5, vote_max: 8.4 },
  { vote_min: 8.5, vote_max: 10 },
];
const loadButton = document.querySelector(".load-button");
loadButton.textContent = "Loading...";
const loadSeries = (id_genre, stars) => {
  let url = `https://api.themoviedb.org/3/tv/top_rated?api_key=${API_KEY}&language=en-US&page=${i}`;
  if ((id_genre && id_genre !== "All") || (stars && parseInt(stars) != 0)) {
    url = `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&page=${i}&with_genres=${id_genre}&vote_average.gte=${rateArray[stars].vote_min}&vote_average.lte=${rateArray[stars].vote_max}`;
  }
  GET(url)
    .then((results) => {
      results = results.results;
      results = results.filter((serie) => {
        return serie.id && serie.poster_path;
      });

      results.map((serie) => {
        createSerie(
          serie.poster_path,
          serie.name,
          serie.first_air_date,
          serie.vote_average,
          serie.overview,
          serie.id
        );
      });
    })
    .finally(() => {
      loadButton.textContent = "Load More";
      loadButton.disabled = false;
    });
};
loadSeries();

const cardDiv = document.querySelector(".serie-cards");

const selectGenre = document.querySelector("select.genres-select");
const selectRate = document.querySelector("select.rate-select");

selectGenre.addEventListener("change", (e) => {
  i = 1;
  cardDiv.replaceChildren();
  loadSeries(selectGenre.value, selectRate.value);
});

selectRate.addEventListener("change", (e) => {
  i = 1;
  cardDiv.replaceChildren();
  loadSeries(selectGenre.value, selectRate.value);
});

loadButton.addEventListener("click", (e) => {
  i++;

  if (searchBar.value) {
    searchBarFunction();
  } else {
    loadSeries(selectGenre.value, selectRate.value);
  }
});

const searchButton = document.querySelector(".search-button");
searchBar.addEventListener("search", (e) => {
  searchButton.click();
});
searchButton.addEventListener("click", (e) => {
  cardDiv.replaceChildren();
  if (searchBar.value) {
    searchBarFunction();
  } else {
    loadSeries(selectGenre.value, selectRate.value);
  }
});
export { GET };

import { createHero, createSerie, genresFilter } from "./utils.js";

const API_KEY = "c5870f565696dedbe7b9c5285226d289";

const GET = async (URL) => {
  const res = await fetch(URL);
  return await res.json();
};

const POST = async (URL, body) => {
  return await fetch(URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
};

const DELETE = async (URL, id) => {
  return await fetch(`${URL}/${id}`, {
    method: "DELETE",
  });
};

const PATCH = async (URL, id, body) => {
  return await fetch(`${URL}/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
};
// HERO GET
GET(
  `https://api.themoviedb.org/3/tv/94997?api_key=${API_KEY}&language=en-US`
).then((res) => {
  createHero(
    res.poster_path,
    res.name,
    res.first_air_date,
    res.vote_average,
    res.overview
  );
});

//GENRES GET
GET(
  `https://api.themoviedb.org/3/genre/tv/list?api_key=c5870f565696dedbe7b9c5285226d289&language=en-US`
).then((res) => {
  genresFilter(res.genres);
});

for (let id = 1; id <= 150; id++) {
  const url = `https://api.themoviedb.org/3/tv/${id}?api_key=${API_KEY}&language=en-US`;
  promises.push(fetch(url).then((res) => res.json()));
}
Promise.all(promises).then((results) => {
  results.map((serie) => {});
});

export { GET, POST, DELETE, PATCH };

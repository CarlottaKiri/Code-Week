import { createDetail } from "./utils-details.js";

const API_KEY = "c5870f565696dedbe7b9c5285226d289";

let params = new URL(document.location).searchParams;
let id = params.get("id");

const GET = async (URL) => {
  const res = await fetch(URL);
  return await res.json();
};

GET(
  `https://api.themoviedb.org/3/tv/${id}?api_key=${API_KEY}&language=en-US&append_to_response=videos`
).then((res) => {
  createDetail(
    res.videos?.results[1]?.key,
    res.name,
    res.first_air_date,
    res.vote_average,
    res.overview,
    res.id
  );
});

export { GET };

const createDetail = (videos, name, date, vote, description, id) => {
  const detailContent = `
  <div class="container">
  <div class="video-container">
    <iframe
      class="video"
      width="360"
      height="200"
      src="https://www.youtube.com/embed/${videos}"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  </div>
  
  <div class="info-container">
  <hr>
    <h1 class="title">${name}</h1>
    <h5 class="description">Plot:<br> ${description}</h5>
    <p>Release date:<br> ${date}</p>
    <p>Average vote:<br> ${vote}</p>
  </div>
</div>`;
  const detail = document.querySelector(".details-container");

  detail.innerHTML = detailContent;
};

export { createDetail };

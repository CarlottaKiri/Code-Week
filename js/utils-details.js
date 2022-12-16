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
  <hr><h1 class="title">${name}</h1>
  <div class="info-container">
  
    
    <div class="serie-info">
    <h4 class="description">Plot:<br> ${description}</h4>
    <p>Release date:<br> ${date}</p>
    <p>Average vote:<br> ${vote}</p>
    </div>
    <div class="feedback">
    <div class="star-rating">
    <input type="radio" name="rate" id="rate-5">
    <label for="rate-5"> ★</label>
    <input type="radio" name="rate" id="rate-4">
    <label for="rate-4"> ★</label>
    <input type="radio" name="rate" id="rate-3">
    <label for="rate-3">★ </label>
    <input type="radio" name="rate" id="rate-2">
    <label for="rate-2">★ </label>
    <input type="radio" name="rate" id="rate-1">
    <label for="rate-1">★ </label>
    </div>
    </div>
  </div>
</div>`;
  const detail = document.querySelector(".details-container");

  detail.innerHTML = detailContent;
};

export { createDetail };

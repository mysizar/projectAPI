import { getData } from "./api.js";
async function apiRequest() {
  //API Laden
  try {
    const posts = await getData(
      "https://free-to-play-games-database.p.rapidapi.com/api/games"
    );
    console.log(posts[0]);
    createEl(posts);
  } catch (error) {
    console.log("Fehler im API Request- index.js:15", error);
  }
}

apiRequest();

function createEl(posts) {
  console.log(posts);
  const body = document.querySelector("body"); //Parent Div für meine Posts

  posts.forEach((i) => {
    let {
      thumbnail,
      title,
      short_description,
      genre,
      developer,
      platform,
      release_date,
      game_url,
    } = i;

    if (short_description.length > 130)
      short_description = short_description.slice(0, 130) + "...";

    //Element
    let card = document.createElement("div");
    card.style.width = "20rem";
    card.classList.add("card", "m-2");

    let img = document.createElement("img");
    img.classList.add("card-img-top");
    img.src = thumbnail;

    let cardTitle = document.createElement("h5");
    cardTitle.classList.add("card-title");
    cardTitle.append(title);

    let cardText = document.createElement("p");
    cardText.classList.add("card-text");
    cardText.style.height = "6em";
    cardText.append(short_description);

    let cardBody1 = document.createElement("div");
    cardBody1.classList.add("card-body");
    cardBody1.append(cardTitle, cardText);

    let _genre = document.createElement("li");
    _genre.classList.add("list-group-item");
    _genre.append("Genre: " + genre);

    let _developer = document.createElement("li");
    _developer.classList.add("list-group-item");
    _developer.append("Developer: " + developer);

    let _platform = document.createElement("li");
    _platform.classList.add("list-group-item");
    _platform.append("Platform: " + platform);

    let _date = document.createElement("li");
    _date.classList.add("list-group-item");
    _date.append("Release Date: " + release_date);

    let ul = document.createElement("ul");
    ul.classList.add("list-group", "list-group-flush");
    ul.append(_genre, _developer, _platform, _date);

    let link = document.createElement("a");
    link.classList.add("card-link");
    link.href = game_url;
    link.append(`Visit ${title} site`);

    let cardBody2 = document.createElement("div");
    cardBody2.classList.add("card-body");
    cardBody2.append(link);

    card.append(img, cardBody1, ul, cardBody2);
    body.append(card);
  });
}
/*
<div class="card" style="width: 18rem;">
  <img class="card-img-top" src="..." alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Cras justo odio</li>
    <li class="list-group-item">Dapibus ac facilisis in</li>
    <li class="list-group-item">Vestibulum at eros</li>
  </ul>
  <div class="card-body">
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
</div>
*/

export async function getData(apiurl) {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "aa06e82671msh75258d414723622p1429acjsn07887c189f01",
      "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
    },
  };
  let link = await fetch(apiurl, options);
  let response = await link.json();
  return response;
}

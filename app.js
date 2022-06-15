const api_key = "D9o0EeM11d7cYH6q27MyrDQ5b2NRsru7";
const limit = 9; //dk if right
const rating = "g"; //^ g
const q = " ";

const search = document.getElementById("query");
const theForm = document.getElementById("look");
const gifs = document.querySelector(".results");
const loadB = document.getElementById("load");
const submitB = document.getElementById("submit");

const url = `https://api.giphy.com/v1/gifs/search?api_key=${api_key}&limit=${limit}&rating=${rating}&q=${q}`;

param1 = 1; //not sure what to make these rn
param2 = 2;

// api.giphy.com/v1/gifs/search?api_key=D9o0EeM11d7cYH6q27MyrDQ5b2NRsru7 --> search gifs

async function getResults() {
  const response = await fetch(url);
  const data = response.json; //VS said no await needed
  return data;
}
//create new element , inner html to = it and src of url
const knownUrl = url;
const imgEl = document.createElement("img");
imgEl.src = knownUrl;
gifs.innerHTML += imgEl;

function displayResults() {
  response[index].foreach((i) => {
    response[index].images.rendition.url = src;
  });
}

function handleFormSubmit(event) {
  //   const store = search.value; //storing search term val
  const go = fetch(
    `https://api.giphy.com/v1/gifs/search?api_key=${api_key}q=${search}`
  );
  getResults();
  //display results

  //reset results
  gifs.innerHTML = null;
  search.innerText = null;
  event.preventDefault();
}

theForm.addEventListener("submit", handleFormSubmit);

window.onload = () => {
  console.log("sanity check");
};

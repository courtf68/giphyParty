const api_key = "D9o0EeM11d7cYH6q27MyrDQ5b2NRsru7";
const limit = 9; //dk if right
const rating = g; //^ g
const q = " ";

const search = document.getElementById("query");
const theForm = document.getElementById("look");
const gifs = document.querySelector(".results");
const loadB = document.getElementById("load");
const submitB = document.getElementById("submit");

param1 = 1; //not sure what to make these rn
param2 = 2;

// api.giphy.com/v1/gifs/search?api_key=D9o0EeM11d7cYH6q27MyrDQ5b2NRsru7 --> search gifs

async function getResults() {
  let response = await fetch(
    "api.giphy.com/v1/gifs/search?q=puppy&api_key=D9o0EeM11d7cYH6q27MyrDQ5b2NRsru7" //replace pups
  );
  let data = response.json; //said no await needed
  return data;
}
//create new element , inner html to = it and src of url
const knownUrl =
  "api.giphy.com/v1/gifs/search?q=puppy&api_key=D9o0EeM11d7cYH6q27MyrDQ5b2NRsru7";
const imgEl = document.createElement("img");
imgEl.src = knownUrl;
document.getElementById("results").innerHTML += imgEl;

function displayResults() {
  response[index].foreach((i) => {
    response[index].images.rendition.url = src;
  });
}

function handleFormSubmit() {}

// window.onload {

// }

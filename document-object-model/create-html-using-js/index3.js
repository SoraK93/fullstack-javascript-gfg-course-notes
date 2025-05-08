const parentElement = document.getElementById("parent-container");

const cardContainer = document.createElement("div");
cardContainer.classList.add("card-container");

// Creating card image element
const cardImageElement = document.createElement("img");
cardImageElement.classList.add("image");
cardImageElement.setAttribute(
  "src",
  "https://c8.alamy.com/comp/MR0G79/random-pictures-MR0G79.jpg"
);
cardImageElement.setAttribute("alt", "sleepy cat");


// Creating card text element
const cardTextElement = document.createElement("span");
cardTextElement.innerText =
  "The journey of a thousand sleep begins with a single purr";

// Creating a button
const cardButtonElement = document.createElement("input");
cardButtonElement.setAttribute("type", "button");
cardButtonElement.setAttribute("value", "Click Here");
cardButtonElement.classList.add("button");

cardContainer.appendChild(cardImageElement);
cardContainer.appendChild(cardTextElement);
cardContainer.appendChild(cardButtonElement);
parentElement.appendChild(cardContainer);

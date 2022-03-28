const favColor = () => {
  alert("My favorite Color is Green!");
};
const favRitual = () => {
  alert("My favorite Ritual is Praying every morning!");
};
const favPlace = () => {
  alert("My favorite Place is the Stock yards in Fort-Worth Tx.");
};
const color = document.querySelector("#color");
const place = document.querySelector("#place");
const ritual = document.querySelector("#ritual");

color.addEventListener("click", favColor);
ritual.addEventListener("click", favRitual);
place.addEventListener("click", favPlace);

console.log("hello world");

function handleSubmit(evt) {
  evt.preventDefault();

  alert("Submission was a success!");
}
const duckHover = () => {
  alert("Congration , You done it");
};

let form = document.querySelector("form#contact");
let duck = document.querySelector("img");
duck.addEventListener("mouseover", duckHover);
form.addEventListener("submit", handleSubmit);

const asd = document.querySelector(".asd");

const square_2 = document.querySelector(".square-2");

asd.addEventListener("click", () => {
  asd.classList.toggle("move");
  square_2.classList.toggle("move");
});

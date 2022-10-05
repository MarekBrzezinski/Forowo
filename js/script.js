console.log("To jest projekt strony internetowej dla FOROWO");

let button = document.querySelector(".js-main__button");
let main  = document.querySelector(".js-main__hiddenPriceOffer");

button.addEventListener("click", () => {
  main.classList.toggle("main__hiddenPriceOffer");
  button.innerText = main.classList.contains("main__hiddenPriceOffer")
    ? "Pokaż ofertę cenową"
    : "Ukryj ofertę cenową"; 
});
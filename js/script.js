console.log("To jest projekt strony internetowej dla FOROWO");

let button = document.querySelector(".js-main__button");
let main__hiddenPriceOffer = document.querySelector(".js-main__hiddenPriceOffer");

button.addEventListener("click", () => {
  main__hiddenPriceOffer.classList.toggle("main__hiddenPriceOffer");
  button.innerText = main__hiddenPriceOffer.classList.contains("main__hiddenPriceOffer")
    ? "Pokaż ofertę cenową"
    : "Ukryj ofertę cenową"; 
});a
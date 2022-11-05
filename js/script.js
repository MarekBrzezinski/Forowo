{
  const welcome = () => {
    console.log("To jest projekt strony internetowej dla FOROWO");
  };
  
  const changeNameButton = (mainElement) => {
    const buttonElement = document.querySelector(".js-main__button");

    buttonElement.innerText = mainElement.classList.contains("hidden")
        ? "Pokaż ofertę cenową"
        : "Ukryj ofertę cenową"; 
  };

  const togglePriceOffer = () => {
    const mainElement  = document.querySelector(".js-hidden");
    mainElement.classList.toggle("hidden");

    changeNameButton(mainElement);
  };
  
  const init = () => {
    const buttonElement = document.querySelector(".js-main__button");
    buttonElement.addEventListener("click",togglePriceOffer);
  
    welcome ();
  };

  init ();
}
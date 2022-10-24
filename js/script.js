{
  const welcome = () => {
    console.log("To jest projekt strony internetowej dla FOROWO");
  };
  
  const togglePriceOffer = () => {
    const mainElement  = document.querySelector(".js-main__hiddenPriceOffer");
    const buttonElement = document.querySelector(".js-main__button");
    mainElement.classList.toggle("main__hiddenPriceOffer");
    buttonElement.innerText = mainElement.classList.contains("main__hiddenPriceOffer")
      ? "Pokaż ofertę cenową"
      : "Ukryj ofertę cenową"; 
  };
  
  const init = () => {
    
    const buttonElement = document.querySelector(".js-main__button");
    
    buttonElement.addEventListener("click",togglePriceOffer);
  
    welcome ()
  };

  init ();
}
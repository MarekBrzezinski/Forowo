{
  const welcome = () => {
    console.log("To jest projekt strony internetowej dla FOROWO"); };
  
  const onChangeHiddenPriceOffer = () => {
    const main  = document.querySelector(".js-main__hiddenPriceOffer");
    const button = document.querySelector(".js-main__button");
    main.classList.toggle("main__hiddenPriceOffer");
    button.innerText = main.classList.contains("main__hiddenPriceOffer")
      ? "Pokaż ofertę cenową"
      : "Ukryj ofertę cenową"; 
  };
  
  const init = () => {
    
    const button = document.querySelector(".js-main__button");
    
    button.addEventListener("click", onChangeHiddenPriceOffer);
  
    welcome ()
  };

  init ();
}
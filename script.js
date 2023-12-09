const menu = document.querySelector(".menu");
const navContainer = document.querySelector(".nav-container");
const mainContent = document.querySelector(".main");
const btnClose = document.querySelector(".close");

menu.addEventListener("click", toggleMenu);
btnClose.addEventListener("click", toggleMenu);

function toggleMenu(){
    navContainer.style.display =  navContainer.style.display != "block" ? "block" : "none";
    toggleMainContentDisplay();

}

function toggleMainContentDisplay(){

    if(window.matchMedia("(min-width: 800px)").matches){
        mainContent.style.display = "block";
    } else {
        mainContent.style.display = navContainer.style.display === "none" ? "block" : "none";
  }
    };


    window.addEventListener("resize", () => {
        toggleMainContentDisplay();
      });







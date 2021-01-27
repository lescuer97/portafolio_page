
const burger =  document.querySelector(".burger");
const nav = document.querySelector(".nav");
const close = document.querySelector(".close")


// toggler function of the menu
const menuToggler = () => {
  nav.classList.toggle('nav-active');
  burger.classList.toggle("disapear");
  close.classList.toggle("appear");
}

const navSlide = () => {


document.addEventListener("click", (e) => {
  const isClickInside = nav.contains(e.target);
  // check if click is outside nav and if it  didn't came from the burger
  if(!isClickInside && nav.classList.contains("nav-active") && !e.target.classList.contains("burger")) {
    
    menuToggler();
    };
// toggles the menu when clicking link and checks for screen size
  if (e.target.classList.contains("link-button") && window.screen.width < 768) {
    menuToggler();
  };
  });  

burger.addEventListener('click', () => {
  //toggle nav
 menuToggler();

 
})

close.addEventListener('click', () => {
   menuToggler();
})



}

navSlide();
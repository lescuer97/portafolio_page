const navSlide = () => {
const burger =  document.querySelector(".burger");
const nav = document.querySelector(".nav");

const close = document.querySelector(".close")
const navLinks = document.querySelectorAll('.nav li');

burger.addEventListener('click', () => {
  //toggle nav
  nav.classList.toggle('nav-active');
  burger.classList.toggle("disapear");
  close.classList.toggle("appear");

         
  // navLinks.forEach((link, index) => {
  //   console.log(index);
  // })
})

close.addEventListener('click', () => {
  
    nav.classList.toggle('nav-active');
  burger.classList.toggle("disapear");
  close.classList.toggle("appear");
})
}
navSlide();
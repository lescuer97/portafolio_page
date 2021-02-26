if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("../sw_cached_pages.js")
      .then((reg) => {})
      .catch((err) => {
        console.log(`Service Worker: ${err}`);
      });
  });
}

const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav");
const closeSvg = document.querySelector(".close");

// toggler function of the menu
const menuToggler = () => {
  nav.classList.toggle("nav-active");
  burger.classList.toggle("disapear");
  closeSvg.classList.toggle("appear");
};

const navCloser = () => {
  document.addEventListener("click", (e) => {
    e.preventDefault();
    const isClickInside = nav.contains(e.target);
    console.log(isClickInside);
    // check if click is outside nav and if it  didn't came from the burger
    if (
      !isClickInside &&
      nav.classList.contains("nav-active") &&
      !e.target.classList.contains("burger")
    ) {
      console.log("click 1");
      menuToggler();
    }
    // // toggles the menu when clicking link and checks for screen size
    // if (
    //   e.target.classList.contains("link-button") &&
    //   window.screen.width < 768
    // ) {
    //   console.log("click 2");
    //   menuToggler();
    // }
  });
};
const navSlide = () => {
  burger.addEventListener("click", (e) => {
    e.preventDefault();
    //toggle nav
    menuToggler();
  });
  closeSvg.addEventListener("click", (e) => {
    e.preventDefault();
    menuToggler();
  });
};

navSlide();
navCloser();

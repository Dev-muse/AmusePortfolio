// selecting elements

const hamburgerMenu = document.querySelector(".nav-icon");
const closeMenu = document.querySelector(".close-btn");
const navContent = document.querySelector("#nav-content");
const menuLinkArray = document.querySelectorAll("#nav-content a");

// open hamburgerMenu on click and hide scrollbar
hamburgerMenu.addEventListener("click", function () {
  navContent.classList.add("show");
  document.body.style.overflow = "hidden ";
});

// close hamburgerMenu on click and show scrollbar
closeMenu.addEventListener("click", function () {
  navContent.classList.remove("show");
  document.body.style.overflow = "auto ";
});

// close hamburgerMenu on click, scroll to link section and show scrollbar
menuLinkArray.forEach((item) => {
  item.addEventListener("click", function () {
    navContent.classList.remove("show");
    document.body.style.overflow = "auto ";
  });
});

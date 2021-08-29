// selecting elements

const hamburgerMenu = document.querySelector(".nav-icon");
const closeMenu = document.querySelector(".close-btn");
const navContent = document.querySelector("#nav-content");
const menuLinkArray = document.querySelectorAll("#nav-content a");
const scrollTop = document.querySelector(".scroll-top");

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

// show scroll button on scroll

if (scrollTop) {
  window.addEventListener("scroll", function () {
    pageYOffset > window.innerHeight * 1.2
      ? (scrollTop.style.display = "flex")
      : (scrollTop.style.display = "none");
  });
  scrollTop.addEventListener("click", function () {
    window.scrollTo(0, 0);
  });
}

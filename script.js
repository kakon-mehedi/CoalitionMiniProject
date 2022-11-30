const logo1 = document.querySelector("#nav-logo-1");
const nav = document.querySelector("nav");

window.addEventListener("scroll", function () {
  logo1.classList.toggle("show-none", window.scrollY > 50);
  nav.classList.toggle("active", window.scrollY > 50);
});

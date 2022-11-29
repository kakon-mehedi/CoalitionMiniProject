const header1 = document.querySelector("#nav-logo-1");
const header2 = document.querySelector("nav");

window.addEventListener("scroll", function () {
  header1.classList.toggle("show-none", window.scrollY > 50);
  header2.classList.toggle("active", window.scrollY > 50);
});

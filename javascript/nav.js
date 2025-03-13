const parentNav = document.getElementById("parentnav");
const logo = document.getElementById("logo");
const navbar = document.getElementById("navbar");
const menu = document.getElementById("menu");
const closeButton = document.getElementById("closebutton");
const body = document.getElementById("body");

menu.addEventListener("click", () => {
  parentNav.classList.add("formob");
  logo.classList.add("moblogo");
  navbar.classList.add("mobnav");
  menu.style.display = "none";
  closeButton.classList.add("mobcross");
  body.style.overflow = "hidden";
});
closeButton.addEventListener("click", () => {
  parentNav.classList.remove("formob");
  logo.classList.remove("moblogo");
  navbar.classList.remove("mobnav");
  menu.style.display = "block";
  closeButton.classList.remove("mobcross");
  body.style.overflow = "scroll";
});

//dropdown nav code
let menu = document.querySelector("#menus");
let links = document.querySelector("#links");
let logo = document.querySelector("#logo");

//event listner for scroll
document.addEventListener("scroll", () => {
  links.className = "";
});

menu.style.cursor = "pointer";
menu.addEventListener("click", () => {
  if (getComputedStyle(links).display == "none") {
    links.className = "responsive";
  } else {
    links.className = "";
  }
});

logo.style.cursor = "pointer";
logo.addEventListener("click", () => {
  location.href = "./index.html";
});

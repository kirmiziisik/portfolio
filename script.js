const tabTitles = document.querySelector(".tab-titles");
const tabLinks = document.querySelectorAll(".tab-links");
const contents = document.querySelectorAll(".tab-contents");
const sideMenu = document.getElementById("side-menu");
const iconX = document.querySelector(".fa-xmark");
const iconBars = document.querySelector(".fa-bars");
const year = document.querySelector(".year");

tabTitles.addEventListener("click", (e) => {
  const id = e.target.dataset.id;

  if (id) {
    tabLinks.forEach((link) => {
      link.classList.remove("active-link");
    });
    e.target.classList.add("active-link");
    contents.forEach((content) => {
      content.classList.remove("active-tab");
    });
    const element = document.getElementById(id);
    element.classList.add("active-tab");
  }
});

iconBars.addEventListener("click", () => {
  sideMenu.style.right = "0";
});

iconX.addEventListener("click", () => {
  sideMenu.style.right = "-200px";
});

year.textContent = new Date().getFullYear();

const showMenu = (toggleId, navbarId, bodyId) => {
  const toggle = document.getElementById(toggleId),
    navbar = document.getElementById(navbarId),
    bodypadding = document.getElementById(bodyId);

  if (toggle && navbar) {
    toggle.addEventListener("click", () => {
      navbar.classList.toggle("expander");
      bodypadding.classList.toggle("body-pd");
    });
  }
};
showMenu("nav-toggle", "navbar", "body-pd");
// Color link
const link = document.querySelectorAll(".nav-link");

const colorLink = (e) => {
  console.log(e);
  link.forEach((l) => l.classList.remove("active"));
  e.target.classList.add("active");
};
link.forEach((l) => l.addEventListener("click", colorLink));

const submenu = document.querySelectorAll(".collapse-link");
submenu.forEach((sub) =>
  sub.addEventListener("click", (e) => {
    e.target.nextElementSibling.classList.toggle("ShowMenu");
    e.target.classList.toggle("rotate");
  })
);

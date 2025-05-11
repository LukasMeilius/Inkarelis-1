const menuIcon = document.querySelector(".menu-icon");
const offScreenMenu = document.querySelector(".off-screen-menu");
const openApieMus = document.querySelector(".open-apie-mus");
const backToMain = document.querySelector(".back-to-main");
const menuLinks = document.querySelectorAll(".off-screen-menu a");
const logo = document.querySelector(".logo");
const anchorLink = document.querySelector(".anchor");
const currentFile = window.location.pathname.split("/").pop();
const isIndexPage = currentFile === "index.html" || currentFile === "";
const links = document.querySelectorAll(".links a");

// Reset scroll and hide menu when resizing to desktop
window.addEventListener("resize", () => {
  if (window.innerWidth > 768) {
    document.body.style.overflow = "auto";
    offScreenMenu.classList.remove("active");
  }
});

// Toggle menu on mobile
menuIcon.addEventListener("click", () => {
  const isActive = offScreenMenu.classList.toggle("active");
  if (window.matchMedia("(max-width: 768px)").matches && isIndexPage) {
    document.body.style.overflow = isActive ? "hidden" : "auto";
    if (isActive) {
      anchorLink.style.display = "none";
    } else {
      anchorLink.style.display = "block";
    }
  }
});

logo.addEventListener("click", (e) => {
  if (window.matchMedia("(max-width: 768px)").matches) {
    offScreenMenu.classList.remove("active");
  }
});

document.addEventListener("DOMContentLoaded", function () {
  openApieMus.addEventListener("click", function (e) {
    e.preventDefault();
    offScreenMenu.classList.add("active-apie-mus");
  });

  backToMain.addEventListener("click", function (e) {
    e.preventDefault();
    offScreenMenu.classList.remove("active-apie-mus");
  });
});

menuLinks.forEach((link) => {
  link.addEventListener("click", function (e) {
    const href = this.getAttribute("href");
    e.preventDefault();
    setTimeout(() => {
      window.location.href = href;
    }, 300);
  });
});

if (
  window.location.pathname.endsWith("index.html") ||
  window.location.pathname === "/"
) {
  window.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector("header");
    const links = document.querySelectorAll(".links a");
    const button = header.querySelector(".header_btn");
    const logo = document.querySelector(".logo");
    const targetSection = document.querySelector("#apie_mus_section");

    if (button) {
      button.addEventListener("mouseenter", () => {
        if (header.classList.contains("scrolled")) {
          button.style.backgroundColor = "#1E1E1E";
          button.style.color = "white";
        }
      });

      button.addEventListener("mouseleave", () => {
        if (header.classList.contains("scrolled")) {
          button.style.backgroundColor = "transparent";
          button.style.color = "black";
        }
      });
    }

    window.addEventListener("scroll", function () {
      const sectionTop = targetSection.getBoundingClientRect().top;

      if (sectionTop <= 0) {
        header.style.backgroundColor = "white";
        header.classList.add("scrolled");
        if (logo) logo.src = "../images/Inkarelis 1.png";

        links.forEach((link) => {
          link.style.color = "black";
          link.style.textDecoration = "none";
        });

        if (button) {
          button.style.color = "black";
          button.style.border = "1px solid black";
        }
      } else {
        header.style.backgroundColor = "transparent";
        header.classList.remove("scrolled");
        if (logo) logo.src = "../images/Inkarelis_white 1.png";

        links.forEach((link) => {
          link.style.color = "";
          link.style.textDecoration = "";
        });

        if (button) {
          button.style.backgroundColor = "";
          button.style.color = "";
          button.style.border = "1px solid white";
        }
      }
    });
  });
}


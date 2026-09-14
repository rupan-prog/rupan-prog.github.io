// ==========================================
// RUPAN GHOSH — PERSONAL WEBSITE
// JavaScript
// ==========================================


// ------------------------------------------
// SHORT SELECTORS
// ------------------------------------------

const $ = (selector) => document.querySelector(selector);

const $$ = (selector) => document.querySelectorAll(selector);


// ------------------------------------------
// NAVIGATION
// ------------------------------------------

document.querySelectorAll("[data-go]").forEach((button) => {

  button.addEventListener("click", () => {

    const target = document.getElementById(button.dataset.go);

    if (target) {

      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });

    }

    // Close mobile menu
    const nav = $(".nav nav");

    if (nav) {
      nav.classList.remove("open");
    }

  });

});


// ------------------------------------------
// MOBILE MENU
// ------------------------------------------

const hamburger = $(".hamburger");

if (hamburger) {

  hamburger.addEventListener("click", () => {

    const nav = $(".nav nav");

    if (nav) {
      nav.classList.toggle("open");
    }

  });

}


// ------------------------------------------
// CUSTOM CURSOR
// ------------------------------------------

const cursor = $(".cursor");

if (cursor) {

  window.addEventListener("mousemove", (event) => {

    cursor.style.transform =
      `translate(${event.clientX}px, ${event.clientY}px)`;

  });

}


// ------------------------------------------
// CURSOR HOVER EFFECT
// ------------------------------------------

document
  .querySelectorAll("button, a, .pic")
  .forEach((element) => {

    element.addEventListener("mouseenter", () => {

      if (cursor) {
        cursor.classList.add("active");
      }

    });

    element.addEventListener("mouseleave", () => {

      if (cursor) {
        cursor.classList.remove("active");
      }

    });

  });


// ------------------------------------------
// SCROLL REVEAL ANIMATION
// ------------------------------------------

const revealObserver = new IntersectionObserver(

  (entries) => {

    entries.forEach((entry) => {

      if (entry.isIntersecting) {

        entry.target.classList.add("show");

      }

    });

  },

  {
    threshold: 0.12
  }

);


$$(".reveal").forEach((element) => {

  revealObserver.observe(element);

});


// ------------------------------------------
// IMAGE LIGHTBOX
// ------------------------------------------

const lightbox = $(".lightbox");

const lightContent = $(".light-content");

const closeButton = $(".close");


// Open image
$$(".pic").forEach((picture) => {

  picture.addEventListener("click", () => {

    const imagePath = picture.dataset.image;

    if (!lightbox || !lightContent) return;


    // Reset previous image
    lightContent.style.backgroundImage = "none";

    lightContent.textContent = "LOADING...";


    // Show lightbox
    lightbox.classList.add("open");


    // Check if image exists
    const image = new Image();


    image.onload = () => {

      lightContent.style.backgroundImage =
        `url("${imagePath}")`;

      lightContent.textContent = "";

    };


    image.onerror = () => {

      lightContent.style.backgroundImage = "none";

      lightContent.textContent =
        "REPLACE IMAGE FILE";

    };


    image.src = imagePath;

  });

});


// ------------------------------------------
// CLOSE LIGHTBOX
// ------------------------------------------

if (closeButton) {

  closeButton.addEventListener("click", () => {

    lightbox.classList.remove("open");

  });

}


// Click outside image to close
if (lightbox) {

  lightbox.addEventListener("click", (event) => {

    if (event.target === lightbox) {

      lightbox.classList.remove("open");

    }

  });

}


// ------------------------------------------
// ESC KEY
// ------------------------------------------

document.addEventListener("keydown", (event) => {

  if (event.key === "Escape") {

    if (lightbox) {

      lightbox.classList.remove("open");

    }

  }

});


// ------------------------------------------
// PREVENT IMAGE DRAGGING
// ------------------------------------------

document.querySelectorAll("img").forEach((image) => {

  image.addEventListener("dragstart", (event) => {

    event.preventDefault();

  });

});


// ------------------------------------------
// CONSOLE MESSAGE
// ------------------------------------------

console.log(
  "%cRUPAN GHOSH — STILL BECOMING.",
  "color:#ff5a16;font-size:18px;font-weight:bold;"
);

console.log(
  "%cClass 9 • Bordowali School • 2026",
  "color:#99938a;font-size:12px;"
);
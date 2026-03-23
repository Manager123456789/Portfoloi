// HTML & CSS progress circular bar
let htmlProgress = document.querySelector(".html-css"),
  htmlValue = document.querySelector(".html-progress");

let htmlStartValue = 0,
  htmlEndValue = 90,
  htmlspeed = 30;

let progressHtml = setInterval(() => {
  htmlStartValue++;

  htmlValue.textContent = `${htmlStartValue}%`;
  htmlProgress.style.background = `conic-gradient(#fca61f ${htmlStartValue * 3.6}deg, #ededed 0deg)`;

  if (htmlStartValue === htmlEndValue) {
    clearInterval(progressHtml);
  }
}, htmlspeed);

// JavaScript progress circular bar
let javascriptProgress = document.querySelector(".javascript"),
  javascriptValue = document.querySelector(".javascript-progress");

let javascriptStartValue = 0,
  javascriptEndValue = 75,
  jsspeed = 30;

let progressJs = setInterval(() => {
  javascriptStartValue++;

  javascriptValue.textContent = `${javascriptStartValue}%`;
  javascriptProgress.style.background = `conic-gradient(#7d2ae8 ${javascriptStartValue * 3.6}deg, #ededed 0deg)`;

  if (javascriptStartValue === javascriptEndValue) {
    clearInterval(progressJs);
  }
}, jsspeed);

// C Language progress circular bar (75%)
let cLanguageProgress = document.querySelector(".c-language"),
  cLanguageValue = document.querySelector(".c-language-progress");

let cLanguageStartValue = 0,
  cLanguageEndValue = 75,
  cspeed = 30;

let progressC = setInterval(() => {
  cLanguageStartValue++;

  cLanguageValue.textContent = `${cLanguageStartValue}%`;
  cLanguageProgress.style.background = `conic-gradient(#20c997 ${cLanguageStartValue * 3.6}deg, #ededed 0deg)`;

  if (cLanguageStartValue === cLanguageEndValue) {
    clearInterval(progressC);
  }
}, cspeed);

// C++ progress circular bar (50%)
let cppProgress = document.querySelector(".cpp"),
  cppValue = document.querySelector(".cpp-progress");

let cppStartValue = 0,
  cppEndValue = 50,
  cppSpeed = 30;

let progressCpp = setInterval(() => {
  cppStartValue++;

  cppValue.textContent = `${cppStartValue}%`;
  cppProgress.style.background = `conic-gradient(#3f396d ${cppStartValue * 3.6}deg, #ededed 0deg)`;

  if (cppStartValue === cppEndValue) {
    clearInterval(progressCpp);
  }
}, cppSpeed);

// jQuery filter functionality
$(document).ready(function () {
  $(".filter-item").click(function () {
    const value = $(this).attr("data-filter");
    if (value === "all") {
      $(".post").show("1000");
    } else {
      $(".post").not("." + value).hide("1000");
      $(".post").filter("." + value).show("1000");
    }
  });
});

// Smooth scroll for "See My Work" link
document.addEventListener("DOMContentLoaded", function () {
  const seeMyWorkLink = document.querySelector(".link");

  if (seeMyWorkLink) {
    seeMyWorkLink.addEventListener("click", function (event) {
      event.preventDefault(); // Prevent default anchor behavior

      const targetSection = document.querySelector("#portfolio");
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  }

  // Contact form submission event
  // Show contact section
const contactBtn = document.getElementById("contact-btn");
const contactSection = document.getElementById("contact");

contactBtn.addEventListener("click", function () {
    contactSection.classList.remove("hidden");
});

// Form submit
const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    let successMessage = document.createElement("p");
    successMessage.textContent = "Successfully Submitted!";
    successMessage.classList.add("success-message");

    contactForm.appendChild(successMessage);

    setTimeout(() => {
        successMessage.remove();
    }, 3000);
});
  // "Hire Me" Modal Functionality
  const hireMeBtn = document.getElementById("hire-me-btn");
  const hireMeContainer = document.getElementById("hire-me-container");
  const closeBtn = document.getElementById("close-btn");

  if (hireMeBtn && hireMeContainer && closeBtn) {
    hireMeBtn.addEventListener("click", () => {
      hireMeContainer.style.display = "block"; // Show modal
    });

    closeBtn.addEventListener("click", () => {
      hireMeContainer.style.display = "none"; // Hide modal
    });

    // Hide modal when clicking outside the modal box
    window.addEventListener("click", (event) => {
      if (event.target === hireMeContainer) {
        hireMeContainer.style.display = "none";
      }
    });
  }
});

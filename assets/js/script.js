// Header Nav Toggle
const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});
// Header Nav Toggle End

// Scroll Reveal
const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

const scrollRevealOption2 = {
  distance: "1000px",
  origin: "bottom",
  duration: 100,
};

ScrollReveal().reveal(".form__container", {
  ...scrollRevealOption,
  origin: "right",
  delay: 250,
});
ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".header__content p", {
  ...scrollRevealOption,
  delay: 750,
});
ScrollReveal().reveal(".header__links", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".header__links__buttons", {
  ...scrollRevealOption,
  delay: 1250,
});
ScrollReveal().reveal(".header__sub__title__container", {
  ...scrollRevealOption2,
  origin: "left",
});
// End Scroll Reveal

// ScrollToTop button
const btnScrollToTop = document.querySelector("#btnScrollToTop");

btnScrollToTop.addEventListener("click", function () {
  btnScrollToTop.classList.add("hide");
  $("html, body").animate({ scrollTop: 0 }, "fast");
});

window.onscroll = () => {
  scrollFunction();
};

function scrollFunction() {
  if (window.scrollY > 200) {
    // btnScrollToTop.style.display = "block";
    btnScrollToTop.classList.add("show");
  } else {
    // btnScrollToTop.style.display = "none";
    btnScrollToTop.classList.remove("show");
  }
}
// End ScrollToTop button

// Type Writer
var typed = new Typed(".auto-type", {
  strings: ["PROFESSIONAL", "COMMERCIAL", "CONTRACTORS!"],
  typeSpeed: 100,
  backSpeed: 100,
  loop: true
})
// End Type Writer


// Form Validation
const formSubmit = document.getElementById("submit");
const formNameInput = document.querySelector('input[name="name"]');
const formPhone = document.querySelector('input[name="tel"]');
const formEmail = document.querySelector('input[name="email"]');
const formMessage = document.querySelector('textarea[name="message"]');
const errorMessagesDiv = document.getElementById("error__message");

const inputs = [formNameInput, formPhone, formEmail, formMessage];

isFormValid = false;

const removeError = (e) => {
  e.classList.remove("invalid");
};

const addError = (e) => {
  e.classList.add("invalid");
};

const addErrorMessage = (e) => {
  errorMessagesDiv.style.display = "block";
  e.classList.add("error__message");
};

const removeErrorMessage = (e) => {
  errorMessagesDiv.style.display = "none";
  e.classList.remove("error__message");
};

const validateInputs = () => {
  isFormValid = true;
  inputs.forEach(removeError);
  removeErrorMessage(errorMessagesDiv);

  if (!formNameInput.value) {
    addError(formNameInput);
    isFormValid = false;
    addErrorMessage(errorMessagesDiv);
  }

  if (!formPhone.value) {
    isFormValid = false;
    addError(formPhone);
    addErrorMessage(errorMessagesDiv);
  }

  if (!formEmail.value) {
    isFormValid = false;
    addError(formEmail);
    addErrorMessage(errorMessagesDiv);
  }

  if (!formMessage.value) {
    isFormValid = false;
    addError(formMessage);
    addErrorMessage(errorMessagesDiv);
  } else {
    // removeErrorMessage(errorMessagesDiv);
  }
};

formSubmit.addEventListener("click", (e) => {
  // e.preventDefault();
  validateInputs();
  console.log("here");
});

inputs.forEach((input) => {
  input.addEventListener("input", () => {
    validateInputs();
  });
});


// Pop Up
const popup = document.getElementById("popup");
const blur = document.getElementById("blur");

function openPopup() {
  popup.classList.add("open-popup");
  blur.classList.add("blur__container");
}
function closePopup() {
  popup.classList.remove("open-popup");
  blur.classList.remove("blur__container");
}

// Web3form
const form = document.getElementById("my__form");
const result = document.getElementById("result");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const formData = new FormData(form);
  const object = Object.fromEntries(formData);
  const json = JSON.stringify(object);
  result.innerHTML = "Please wait...";

  fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: json,
  })
    .then(async (response) => {
      let json = await response.json();
      if (response.status == 200) {
        result.innerHTML = json.message;
      } else {
        console.log(response);
        result.innerHTML = json.message;
      }
    })
    .catch((error) => {
      console.log(error);
      result.innerHTML = "Something went wrong!";
    })
    .then(function () {
      form.reset();
      setTimeout(() => {
        result.style.display = "none";
      }, 3000);
    });
});
// Header Nav Toggle
const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");
const navHeader = document.querySelector("nav__header");

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
  strings: ["PROFESSIONAL.", "COMMERCIAL.", "CONTRACTORS!"],
  typeSpeed: 100,
  backSpeed: 100,
  loop: true,
});
// End Type Writer

// Form Validation
// Form 1 variables
const formSubmit = document.getElementById("submit");

const formNameInput = document.querySelector(
  "form[name='form__1'] input[name='name']"
);
const formPhone = document.querySelector(
  "form[name='form__1'] input[name='tel']"
);
const formEmail = document.querySelector(
  "form[name='form__1'] input[name='email']"
);
const formMessage = document.querySelector(
  "form[name='form__1'] textarea[name='message']"
);
const errorMessagesDiv = document.getElementById("error__message");

// Form 2 variables
const form2submit = document.getElementById("form__submit2");

const formNameInput2 = document.querySelector(
  "form[name='form__2'] input[name='name']"
);
const formPhone2 = document.querySelector(
  "form[name='form__2'] input[name='tel']"
);
const formEmail2 = document.querySelector(
  "form[name='form__2'] input[name='email']"
);
const formMessage2 = document.querySelector(
  "form[name='form__2'] textarea[name='message']"
);
const errorMessagesDiv2 = document.getElementById("error__message2");

// form 1 inputs
const inputs = [formNameInput, formPhone, formEmail, formMessage];

// form 2 inputs
const inputs2 = [formNameInput2, formPhone2, formEmail2, formMessage2];
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

const addErrorMessage2 = (e) => {
  errorMessagesDiv2.style.display = "block";
  e.classList.add("error__message");
};

const removeErrorMessage2 = (e) => {
  errorMessagesDiv2.style.display = "none";
  e.classList.remove("error__message");
};

// Form 1
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
  }
};
inputs.forEach((input) => {
  input.addEventListener("input", () => {
    validateInputs();
  });
});
formSubmit.addEventListener("click", (e) => {
  // e.preventDefault();
  validateInputs();

  // insert captcha here

  const Captcha = form.querySelector(
    "textarea[name=g-recaptcha-response]"
  ).value;
  if (!Captcha) {
    e.preventDefault();
    alert("Please fill out captcha field");
    throw new Error("Captcha not complete");
    return;
  }

  // End insert captcha here
  console.log("here");
});
// Validations for the form inside of html
const url =
  "https://script.google.com/macros/s/AKfycbxz9UNNvg8LvVohEuWdzEe8Rc_zxHgz1r9VYRXaJazDhoRbI5dNMQ05d2nsBBTsXO00/exec";
const form = document.getElementById("my__form");

form.addEventListener("submit", submitter);
function submitter(e) {
  console.log("submitted");
  e.preventDefault();
  let message = "";
  if (formNameInput.value.length < 3) {
    message += `<br>- Name needs to be more than 3 characters.`;
  }
  if (formEmail.value.length < 5) {
    message += `<br>- Email needs to be a valid email.`;
  }
  if (formPhone.value.length < 11) {
    message += `<br>- Phone needs to be a valid UK Number.`;
  }
  if (formMessage.value.length < 20) {
    message += `<br>- Message needs to be greater than 20 characters`;
  }
  if (message) {
    const div = document.createElement("div");
    div.innerHTML = message;
    div.style.color = "red";
    div.style.display = "inline";
    form.prepend(div);
    setTimeout(() => div.remove(), 5000);
  } else {
    const formObj = {
      name: formNameInput.value,
      email: formEmail.value,
      phone: formPhone.value,
      message: formMessage.value,
    };
    addSendMail(formObj);
    openPopup();
  }
}
// sending the form data.
function addSendMail(data) {
  console.log(data);
  fetch(url, {
    method: "POST",
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((json) => {
      console.log(json);
    });
}
// retreiving the form data.
function addSendMailGET(data) {
  const url1 = url + "?id=100";
  fetch(url1)
    .then((res) => res.json())
    .then((json) => {
      console.log(json);
    });
}

// Form 2
const form2 = document.getElementById("form__2");
form2.addEventListener("submit", submitter2);
const validateInputs2 = () => {
  isFormValid = true;
  inputs2.forEach(removeError);
  removeErrorMessage2(errorMessagesDiv2);

  if (!formNameInput2.value) {
    addError(formNameInput2);
    isFormValid = false;
    addErrorMessage2(errorMessagesDiv2);
  }

  if (!formPhone2.value) {
    isFormValid = false;
    addError(formPhone2);

    addErrorMessage2(errorMessagesDiv2);
  }

  if (!formEmail2.value) {
    isFormValid = false;
    addError(formEmail2);

    addErrorMessage2(errorMessagesDiv2);
  }

  if (!formMessage2.value) {
    isFormValid = false;
    addError(formMessage2);

    addErrorMessage2(errorMessagesDiv2);
  }
};
inputs2.forEach((input) => {
  input.addEventListener("input", () => {
    validateInputs2();
  });
});
form2submit.addEventListener("click", (e) => {
  // e.preventDefault();
  validateInputs2();

  // insert captcha here

  const Captcha = form2.querySelector(
    "textarea[name=g-recaptcha-response]"
  ).value;
  if (!Captcha) {
    e.preventDefault();
    alert("Please fill out captcha field");
    throw new Error("Captcha not complete");
    return;
  }

  // End insert captcha here
  console.log("here");
});

function submitter2(e) {
  console.log("submitted");
  e.preventDefault();
  let message = "";
  if (formNameInput2.value.length < 3) {
    message += `<br>- Name needs to be more than 3 characters.`;
  }
  if (formEmail2.value.length < 5) {
    message += `<br>- Email needs to be a valid email.`;
  }
  if (formPhone2.value.length < 11) {
    message += `<br>- Phone needs to be a valid UK Number.`;
  }
  if (formMessage2.value.length < 20) {
    message += `<br>- Message needs to be greater than 20 characters`;
  }
  if (message) {
    const div = document.createElement("div");
    div.innerHTML = message;
    div.style.color = "red";
    div.style.display = "inline";
    form2.prepend(div);
    setTimeout(() => div.remove(), 5000);
  } else {
    const formObj = {
      name: formNameInput2.value,
      email: formEmail2.value,
      phone: formPhone2.value,
      message: formMessage2.value,
    };
    addSendMail(formObj);
    openPopup();
  }
}

// End Form Validation

// Pop Up For User Upon Submission
const popup = document.getElementById("popup");
const blur = document.getElementById("blur");

function openPopup() {
  popup.classList.add("open-popup");
  blur.classList.add("blur__container");
}
function closePopup() {
  popup.classList.remove("open-popup");
  blur.classList.remove("blur__container");
  location.reload();
}

// End Pop Up For User Upon Submission

// Web3form API
// const form = document.getElementById("my__form");
// const result = document.getElementById("result");

// form.addEventListener("submit", function (e) {
//   e.preventDefault();
//   const formData = new FormData(form);
//   const object = Object.fromEntries(formData);
//   const json = JSON.stringify(object);
//   result.innerHTML = "Please wait...";

//   fetch("https://api.web3forms.com/submit", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       Accept: "application/json",
//     },
//     body: json,
//   })
//     .then(async (response) => {
//       let json = await response.json();
//       if (response.status == 200) {
//         result.innerHTML = json.message;
//       } else {
//         console.log(response);
//         result.innerHTML = json.message;
//       }
//     })
//     .catch((error) => {
//       console.log(error);
//       result.innerHTML = "Something went wrong!";
//     })
//     .then(function () {
//       form.reset();
//       setTimeout(() => {
//         result.style.display = "none";
//       }, 3000);
//     });
// });
// End Web3form API

// FORM DATA (Version of forms without WEB3)

// Connecting to google app script for POST AND GET and validations.

// SCALE RECAPTCHA
function scaleCaptcha() {
  const captchaWidth = 1000;
  const containerWidth = $(".g-recaptcha").width();
  if (captchaWidth > containerWidth) {
    var captchaScale = (containerWidth / captchaWidth) * 2;
    $(".g-recaptcha").css({
      transform: `scale(${captchaScale})`,
    });
  }
}
scaleCaptcha();
$(window).resize(scaleCaptcha);
// End SCALE RECAPTCHA

// SWIPER JS
const swiper = new Swiper(".swiper", {
  loop: true,
  spaceBetween: 30,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    730: {
      slidesPerView: 4,
      spaceBetween: 30,
    },

    540: {
      slidesPerView: 3,
      spaceBetween: 30,
    },

    340: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
  },
});
// SWIPER JS

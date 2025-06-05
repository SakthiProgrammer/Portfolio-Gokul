let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });

  let header = document.querySelector("header");

  header.classList.toggle("sticky", window.scrollY > 100);

  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};

ScrollReveal({
  reset: true,
  distance: "90px",
  duration: 1020,
  delay: 100,
});

ScrollReveal().reveal(".home-content,.heading", { origin: "top" });
ScrollReveal().reveal(".home-img,.about-img,.service-container,.contact form", {
  origin: "bottom",
});

ScrollReveal().reveal(".home-content h1,.about-content h3", { origin: "left" });
ScrollReveal().reveal(".home-content p,.about-content p", { origin: "right" });

function sendemail() {
  var email = document.getElementById("email").value;
  var from_name = document.getElementById("name").value;
  var message = document.getElementById("message").value;
  var number = document.getElementById("number").value;
  var subject = document.getElementById("sub").value;

  if (validate(email, from_name, message, number, subject)) {
    // Process the email only if validation is successful
    processMail(message, email, from_name, number, subject);
  }
}

function validate(email, from_name, message, number, subject) {
  if (
    email === "" ||
    from_name === "" ||
    message === "" ||
    number === "" ||
    subject === ""
  ) {
    Swal.fire({
      title: "Error!",
      text: "Please fill all the fields.",
      icon: "error",
    });
    return false;
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    Swal.fire({
      title: "Error!",
      text: "Please enter a valid email address.",
      icon: "error",
    });
    return false;
  }

  if (!/^\d{10}$/.test(number)) {
    Swal.fire({
      title: "Error!",
      text: "Please enter a valid phone number.",
      icon: "error",
    });
    return false;
  }

  return true;
}

function processMail(message, email, from_name, number, subject) {
  var templateParams = {
    email: email,
    subject: subject,
    to_name: from_name,
    from_name: from_name,
    phone: number,
    message: message,
  };

  emailjs
    .send("service_tt8yrbd", "template_foonw0f", templateParams)
    .then(function (response) {
      Swal.fire({
        title: "Success!",
        text: "Email sended successfully !",
        icon: "success",
      });
    });
}

function downloadResume() {
  const filePath = "images/Gokula_Kannan_Resume.pdf";

  // Open in new tab
  window.open(filePath, "_blank");

  // Download
  const link = document.createElement("a");
  link.href = filePath;
  link.download = "Gokula_Kannan_Resume.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

ScrollReveal().reveal(".skill-animate-left", {
  origin: "left",
  distance: "80px",
  duration: 700,
  delay: 200,
  easing: "ease-in-out",
  opacity: 0,
  reset: true,
});

ScrollReveal().reveal(".skill-animate-right", {
  origin: "right",
  distance: "80px",
  duration: 700,
  delay: 200,
  easing: "ease-in-out",
  opacity: 0,
  reset: true,
});

ScrollReveal().reveal(".skill-animate-top", {
  origin: "top",
  distance: "60px",
  duration: 700,
  delay: 200,
  opacity: 0,
  easing: "ease-in-out",
  reset: true,
});

ScrollReveal().reveal(".skill-animate-bottom", {
  origin: "bottom",
  distance: "60px",
  duration: 700,
  delay: 200,
  opacity: 0,
  easing: "ease-in-out",
  reset: true,
});

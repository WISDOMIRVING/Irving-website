// Buttons
const navButtons = document.querySelectorAll(".nav-btn");
const homeBtn = document.getElementById("homeBtn");
const aboutBtn = document.getElementById("aboutBtn");
const contactBtn = document.getElementById("contactBtn");

// Pages
const homePage = document.getElementById("homePage");
const aboutPage = document.getElementById("aboutPage");
const contactPage = document.getElementById("contactPage");

function showPage(page, activeBtn) {
  // Hide all pages
  document.querySelectorAll(".page").forEach((p) => p.classList.remove("active"));

  // Show chosen page
  page.classList.add("active");

  // Remove highlight from all buttons
  navButtons.forEach((btn) => btn.classList.remove("active-nav"));

  // Highlight current button
  activeBtn.classList.add("active-nav");
}

// Button click events
homeBtn.addEventListener("click", () => showPage(homePage, homeBtn));
aboutBtn.addEventListener("click", () => showPage(aboutPage, aboutBtn));
contactBtn.addEventListener("click", () => showPage(contactPage, contactBtn));

// Contact form validation
const form = document.getElementById("contactForm");
const success = document.getElementById("success-message");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  // Clear errors and success message
  document.querySelectorAll(".error").forEach((e) => (e.textContent = ""));
  success.textContent = "";

  // Input values
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const subject = document.getElementById("subject").value.trim();
  const message = document.getElementById("message").value.trim();

  let valid = true;

  if (!name) {
    document.getElementById("error-name").textContent = "Name is required.";
    valid = false;
  }

  if (!email) {
    document.getElementById("error-email").textContent = "Email is required.";
    valid = false;
  } else if (!/^[^ ]+@[^ ]+\.[a-z]{2,3}$/.test(email)) {
    document.getElementById("error-email").textContent = "Please enter a valid email.";
    valid = false;
  }

  if (!subject) {
    document.getElementById("error-subject").textContent = "Subject is required.";
    valid = false;
  }

  if (!message) {
    document.getElementById("error-message").textContent = "Message is required.";
    valid = false;
  } else if (message.length < 10) {
    document.getElementById("error-message").textContent = "Message must be at least 10 characters.";
    valid = false;
  }

  if (valid) {
    success.textContent = "✅ Your message has been sent successfully!";
    form.reset();
  }
});
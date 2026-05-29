// Select the hamburger button and the navigation links
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

// Toggle the 'active' class when the hamburger is clicked
hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// dark mode button
const toggleButton = document.createElement("button");
toggleButton.innerText = "🌙";
toggleButton.className = "dark-toggle";
document.body.appendChild(toggleButton);

toggleButton.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// navigation highlught script
const navLinks = document.querySelectorAll(".nav-links a");
const currentPage = window.location.pathname.split("/").pop();

navLinks.forEach(link => {
  if (link.getAttribute("href") === currentPage) {
    link.classList.add("active");
  }
});




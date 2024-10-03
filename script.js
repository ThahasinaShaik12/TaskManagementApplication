const toggleButton = document.getElementById("toggle-mode");
const modeIcon = document.getElementById("mode-icon");
const bodyElement = document.body;

toggleButton.addEventListener("click", () => {
  const currentTheme = bodyElement.getAttribute("data-bs-theme");

  if (currentTheme === "dark") {
    bodyElement.setAttribute("data-bs-theme", "light");
    modeIcon.src = "moon.png"; // Switch to moon icon
  } else {
    bodyElement.setAttribute("data-bs-theme", "dark");
    modeIcon.src = "sun.png"; // Switch to sun icon
  }
});

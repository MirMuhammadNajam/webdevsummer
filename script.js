// Toggle Sidebar
function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  sidebar.classList.toggle("open");
}

// Toggle Dark Mode with Local Storage
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
  const isDark = document.body.classList.contains("dark-mode");
  localStorage.setItem("dark-mode", isDark ? "enabled" : "disabled");
}

// Load dark mode preference on page load
window.onload = () => {
  if (localStorage.getItem("dark-mode") === "enabled") {
    document.body.classList.add("dark-mode");
  }
};

// Simulate closing the website
function closeWebsite() {
  window.open('', '_self');
  window.close();
}

// Open multiple tabs (fun effect)
function openMultipleTabs() {
  for (let i = 0; i < 3; i++) {
    setTimeout(() => {
      window.open(window.location.href, '_blank');
    }, i * 100);
  }
}

// Optional: Close sidebar when clicking outside
document.addEventListener("click", function (event) {
  const sidebar = document.getElementById("sidebar");
  const toggleButton = event.target.closest(".menu-toggle");

  if (
    sidebar.classList.contains("open") &&
    !sidebar.contains(event.target) &&
    !toggleButton
  ) {
    sidebar.classList.remove("open");
  }
})


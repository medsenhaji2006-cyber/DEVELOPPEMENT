const greeting = document.getElementById("greeting");
const logoutBtn = document.getElementById("logoutBtn");

const currentUserEmail = localStorage.getItem("currentUser");
const users = JSON.parse(localStorage.getItem("users")) || [];
const user = users.find(u => u.email === currentUserEmail);

if (!user) {
  window.location.href = "login.html";
} else {
  greeting.textContent = `Bienvenue ${user.firstName} ${user.lastName} !`;
}

logoutBtn.addEventListener("click", function() {
  localStorage.removeItem("currentUser");
  window.location.href = "index.html";
});

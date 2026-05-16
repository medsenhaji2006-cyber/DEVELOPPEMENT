const loginEmail = document.getElementById("email");
const loginPassword = document.getElementById("password");
const loginBtn = document.getElementById("loginBtn");

loginBtn.addEventListener("click", function() {
  const emailValue = loginEmail.value.trim();
  const passwordValue = loginPassword.value;

  if (!emailValue || !passwordValue) {
    alert("Veuillez remplir tous les champs !");
    return;
  }

  const users = JSON.parse(localStorage.getItem("users")) || [];
  const user = users.find(u => u.email === emailValue && u.password === passwordValue);

  if (!user) {
    alert("Utilisateur introuvable ou mot de passe incorrect.");
    return;
  }

  localStorage.setItem("currentUser", emailValue);
  window.location.href = "home.html";
});

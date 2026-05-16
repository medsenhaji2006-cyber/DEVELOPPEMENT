const nom = document.getElementById("firstName");
const prenom = document.getElementById("lastName");
const email = document.getElementById("email");
const password = document.getElementById("password");
  
const btn = document.getElementById("btn");

btn.addEventListener("click", function() {
  const nomValue = nom.value.trim();
  const prenomValue = prenom.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value;

  if (!nomValue || !prenomValue || !emailValue || !passwordValue) {
    alert("Veuillez remplir tous les champs !");
    return;
  }

  const users = JSON.parse(localStorage.getItem("users")) || [];
  const existingUser = users.find(u => u.email === emailValue);

  if (existingUser) {
    alert("Cet utilisateur existe déjà. Veuillez vous connecter.");
    return;
  }

  users.push({
    firstName: nomValue,
    lastName: prenomValue,
    email: emailValue,
    password: passwordValue
  });

  localStorage.setItem("users", JSON.stringify(users));
  localStorage.setItem("currentUser", emailValue);
  window.location.href = "home.html";
});


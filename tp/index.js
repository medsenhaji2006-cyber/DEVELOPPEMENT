const nom = document.getElementById("firstName");
const prenom = document.getElementById("lastName");
const email = document.getElementById("email");
const password = document.getElementById("password");

const btn = document.getElementById("btn");

btn.addEventListener("click", function() {
  if (nom.value === "" || prenom.value === "" || email.value === "" || password.value === "") {
    alert("Veuillez remplir tous les champs.");
  } else {
    alert("Inscription réussie ! " + nom.value + " " + prenom.value + " " + email.value + " " + password.value);
  }
});
const users = JSON.parse(localStorage.getItem("users")) || [];
users.push({
  firstName: nom.value,
  lastName: prenom.value,
  email: email.value,
  password: password.value
});
localStorage.setItem("users", JSON.stringify(users));
alert("Inscription réussie ! " + nom.value + " " + prenom.value + " " + email.value + " " + password.value);


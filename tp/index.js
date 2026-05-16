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
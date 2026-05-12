console.log("Hello, World!");
const btnMessage = document.getElementById("btnMessage");
const message = document.getElementById("message");

btnMessage.addEventListener("click", function () {
  message.textContent = "Button clicked!";
});
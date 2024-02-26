// Récupérez bouton et paragraphe
const bouton = document.getElementById("bouton1");
const messageParagraphe = document.getElementById("message");

// Ecouter l'événement au clic du bouton
bouton.addEventListener("click", function () {
  // Changez le texte du paragraphe
  messageParagraphe.textContent = "Hello World !";
});

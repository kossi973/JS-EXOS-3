// identification des éléments du formulaire
const form = document.getElementById("frmContact");
const nom = document.getElementById("lastName");
const prenom = document.getElementById("firstName");
const dateNaissance = document.getElementById("birthDay");
const lieuNaissance = document.getElementById("birthPlace");
const email = document.getElementById("email");
const tel = document.getElementById("telephone");
const msg = document.getElementById("userMsg");

// à la soumission du formulaire, vérifier la validité des champs
form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (validation()) {
    UserMessage("Le formulaire a été validé !", "green");
    setTimeout(() => {
      form.submit();
    }, 2000);
  }
});

// vérifier la validité des champs du formulaire
function validation() {
  msg.innerHTML = ""; // effacer zone d'affichage des messages d'erreur

  let charAllow = /^[a-zA-Z]+[a-zA-Z '-]+$/; // définir les caractères autorisés pour le nom et le prénom

  // vérifier que seuls les caractères autorisés sont présents dans le nom
  if (!charAllow.test(nom.value)) {
    UserMessage("Vérifier le nom : format non valide !", "red");
    return false;
  }

  // vérifier que seuls les caractères autorisés sont présents dans le prénom
  if (!charAllow.test(prenom.value)) {
    UserMessage("Vérifier le prénom : format non valide !", "red");
    return false;
  }

  charAllow = /^[0-9]{4}-[0-9]{2}-[0-9]{2}$/; // définir le format autorisé pour la date de naissance

  // vérifier la date de naissance
  if (!charAllow.test(dateNaissance.value)) {
    UserMessage("Renseigner la date :  !", "red");
    return false;
  }

  charAllow = /^[a-zA-Z0-9 '-]{2,}$/; // définir les caractères autorisés pour le lieu de naissance

  // vérifier le lieu de naissance
  if (!charAllow.test(lieuNaissance.value)) {
    UserMessage("Renseigner le lieu de naissance !", "red");
    return false;
  }

  charAllow = /^[a-zA-Z0-9-_]+@[a-zA-Z0-9-_]+\.[a-z]{2,}$/; // définir les caractères autorisés pour l'email

  // vérifier l'email
  if (!charAllow.test(email.value)) {
    UserMessage("Vérifier l'email : format non valide !", "red");
    return false;
  }

  charAllow = /^[+]?[0-9]+$/; // définir les caractères autorisés pour le téléphone

  // vérifier le n° de téléphone (non obligatoire)
  if (tel.value != "") {
    if (!charAllow.test(tel.value)) {
      UserMessage("Vérifier le n° de téléphone : format non valide !", "red");
      return false;
    }
  }

  return true;
}

// afficher le message utilisateur
function UserMessage(message, couleur) {
  msg.innerHTML = message;
  msg.style.color = couleur;
  msg.style.fontSize = "20px";
}

// // vérifier la présence d'au moins une lettre [a-Z] dans le nom
// if (nom.value.search(/^[a-zA-Z]+$/) == -1) {
//   UserMessage("Vérifier le nom : lettres [a-Z] manquantes !");
//   return false;
// }

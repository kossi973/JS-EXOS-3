// créer une div + texte
const myDiv = document.createElement("div");
myDiv.innerHTML = "Survolez-moi !";
document.body.appendChild(myDiv);

// appliquer style au survol
myDiv.addEventListener("mouseover", () => {
  myDiv.innerHTML = "Cliquez-moi !";
  myDiv.style.color = "red";
  myDiv.style.backgroundColor = "yellow";
});

// appliquer style au click
myDiv.addEventListener("click", () => {
  myDiv.innerHTML = "Survolez-moi !";
  myDiv.style.color = "blue";
  myDiv.style.fontSize = "40px";
});

// sélectionner et appliquer un style
const myStyle = document.getElementById("choixStyles");
myStyle.addEventListener("change", () => {
  const selectedValue = myStyle.value;
  applyStyle(selectedValue);
});

function applyStyle(myStyles) {
  switch (myStyles) {
    case "option1":
      myDiv.style.color = "orange";
      break;
    case "option2":
      myDiv.style.fontWeight = "bold";
      break;
    case "option3":
      myDiv.style.background = "lightgreen";
      break;
    case "option4":
      myDiv.style.fontSize = "50px";
      break;

    default:
      break;
  }
}

// Liste interactive
const checkboxes = document.querySelectorAll('input[type="checkbox"]');
checkboxes.forEach((checkbox) => {
  checkbox.addEventListener("change", () => {
    if (checkbox.checked) {
      checkbox.parentElement.style.textDecoration = "line-through";
      checkbox.parentElement.style.fontStyle = "italic";
      checkbox.parentElement.style.color = "green";
      checkbox.parentElement.style.fontWeight = "bold";
    } else {
      checkbox.parentElement.style.textDecoration = "none";
      checkbox.parentElement.style.fontStyle = "normal";
      checkbox.parentElement.style.color = "black";
      checkbox.parentElement.style.fontWeight = "normal";
    }
  });
});

// Supprimer tâches
const btnSup = document.querySelectorAll(`button[type="button"]`);

btnSup.forEach((button, index) => {
  button.addEventListener("click", () => {
    let idLi = "tache" + `${index + 1}`;
    const li = document.getElementById(idLi);
    li.parentNode.removeChild(li);
  });
});

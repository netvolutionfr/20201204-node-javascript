const bouton = document.getElementById("bouton");
const liste = document.getElementById("liste");
const saisie = document.getElementById("saisie");

bouton.addEventListener("click", function() {
   console.log("Cliqué");
   const texteSaisi = saisie.value;
   const element = document.createElement("li");
   const texteElement = document.createTextNode(texteSaisi);

   element.appendChild(texteElement);

   liste.appendChild(element);
   saisie.value = "";
});


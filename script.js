console.log("Script lancé");

const paragraphe = document.getElementById("paragraphe");

setTimeout(
    function () {
        paragraphe.innerText = "Texte après 2 secondes";
    }, 2000
);

paragraphe.innerText = "Texte remplacé";

const bouton = document.getElementById("bouton");
bouton.addEventListener("click", function() {
    setTimeout(function() {
        paragraphe.innerText = "Bouton cliqué";
    }, 1000);
});

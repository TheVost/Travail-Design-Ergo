window.onload = function () {
    var formulaire = document.formulaire;
    
    formulaire.addEventListener("click", apparaitre);

}

function apparaitre() {

    if (document.formulaire.alle.value == "retour") {
        document.getElementById("retour").style.display = "block";
    }
    if (document.formulaire.alle.value == "simple") {
        document.getElementById("retour").style.display = "none";
    }
}

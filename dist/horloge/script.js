var heuresDiv = document.querySelector('.heures');
var dateDiv = document.querySelector('.date');

var affichageHeure = function () {
    var today, annee, listeMois, mois, listeJours, jourNumero, jourNom, heures, minutes, seconde, deuxchiffres;
    today = ne Date();


    listeMois = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];
    mois = listeJours[today.getMonth()];
    jourNumero = today.getDate();
    listeJours = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];

    jourNom = listeJours[today.getDay()];

    deuxchiffres = function (element) {
        if (element < 10) {
            return element = "0" + element;
        } else {
            return element;
        }
    }

    heures = deuxchiffres(today.getHours());

    minutes = deuxchiffres(today.getMinutes());

    seconde = deuxchiffres(today.getSeconds());

    heuresDiv.textContent = heures + ":" + minutes + ":" + seconde;
    dateDiv.textContent = jourNom + "," + jourNumero + " " + mois + " " + annee;

    setTimeout(affichageHeure, 1000);


}
affichageHeure();
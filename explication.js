//Afficher HELLO HOGI 30fois

//On peut utiliser la boucle While

let i = 0;
while (i < 30) {
    console.log("HELLO HOGI:" + i++);
}




// on peut utiliser la boucle for

let i = 0;
for (i = 0; i < 30; i++) {
    console.log("HELLO HOGI");
}

const employes = [{
    nom: "NIYONKURU",
    prenom: "Alexis",
    age: "38",
    service: "Statisticien",
    salaire: "500000"
},
{
    nom: "BUKURU",
    prenom: "Anicet",
    age: "36",
    service: "Informaticien",
    salaire: "600000"
},
{
    nom: "HAKIZIMANA",
    prenom: "Ange",
    age: "25",
    service: "Economiste",
    salaire: "350000"
},
{
    nom: "KARENZO",
    prenom: "PAUL",
    age: "28",
    service: "Economiste",
    salaire: "360000"
}

];

employes.forEach(element => {
    console.log(element.nom + " " + element.prenom);
});


let AjoutSalaire = employes.map(element => {
    return element.salaire * 2;
})
console.log(AjoutSalaire);

let filtre = employes.filter(element => {
    return element.service == "Economiste";
})
console.log(filtre);


let filtreSalaire = employes.filter(element => {
    return element.salaire < 400000;
})
console.log(filtreSalaire);




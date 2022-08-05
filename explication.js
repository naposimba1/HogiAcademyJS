//Afficher HELLO HOGI 30fois

//On peut utiliser la boucle While

let i = 0;
while (i < 30) {
    console.log("HELLO HOGI:" + i++);
}


let i = 0;
do {
    console.log("HELLO HOGI");
}

while (i < 30)
i++;


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
    salaire: 500000
},
{
    nom: "BUKURU",
    prenom: "Anicet",
    age: "36",
    service: "Informaticien",
    salaire: 600000
},
{
    nom: "HAKIZIMANA",
    prenom: "Ange",
    age: "25",
    service: "Economiste",
    salaire: 350000
},
{
    nom: "KARENZO",
    prenom: "PAUL",
    age: "28",
    service: "Economiste",
    salaire: 360000
}

];

employes.forEach(element => {
    console.log(element.nom + " " + element.prenom);
});


let AjoutSalaire = employes.map(element => {
    return element.salaire + 50000;
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



<script>
    var min= Number.MIN_VALUE;
    var max= Number.MAX_VALUE;
    var infneg= Number.NEGATIVE_INFINITY;
    var infpos= Number.POSITIVE_INFINITY;
    var notnumber= Number.NaN;

    {/* alert ('Min : ' + min +
    '\nMax': + max +
    '\nInfini négatif:' + infneg +
    '\nInfini positif : ' + infpos +
    '\nPAs un nombre:' + notnumber +
    ); */}
    console.log("Min :" + min, "Max :" + max, "Infini négatif :"+ infneg, "Infini positif :" + infneg, "Infini positif :" +infpos, "Pas un nombre :" +notnumber);


    var prenom = ['Pierre', 'Victor', 'Julia', 'Claire'], p='';
    {/* alert (prenom[0]); */}
    console.log("Notre tableau contient :" + prenom.length
    + "éléments");
    var taille= = prenompush('Napoléon','Pivoine');

    for (var i=0; i<prenom.length; i++){
        p += 'Prénom n°' + (i + 1) + ':' + prenom[i] + '\n'; 
    }

    console.log("Le tableau contient :" + taille + "éléments");
    for (var cleffs in prenom){
        p += clefs + ':' + prenom[clefs] + '\n';
    }
    alert(p);



</script>
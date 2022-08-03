//1. Expliquer while et do while
//2.TP: utiliser la boucle FOR ... IN pour afficher toutes les valeurs qui sont dans l'objet CNI
//3. Savoir comment utiliser la boucle  FOR OFF


//1. Expliquer while et do while
La boucle while est utilisée pour répéter une instruction ou un groupe d'instructions lorsqu'une condition donnée est vraie.Il vérifie la condition avant d'exécuter les instructions à l'intérieur de la boucle. 

La boucle do while est similaire à la boucle while.Mais la condition est vérifiée à la fin de l'exécution des instructions à l'intérieur de la boucle.le différence clé entre la boucle while et la boucle while est que, While loop vérifie la condition avant d'exécuter les instructions dans la boucle While do While boucle vérifie la condition après l'exécution des instructions dans la boucle.




//2.TP: utiliser la boucle FOR ... IN pour afficher toutes les valeurs qui sont dans l'objet CNI

const CNI = [
    {
        NOM: "SIMBANDUMWE",
        PRENOM: "Napoléon",
        SEXE: "M",
        NOmPERE: "SIMBANDUMWE SEVERIN",
        NOMMERE: "NTAKARUTIMANA VIRGINIE",
        DATENAISSANCE: "34",
        LIEU_Naissance: "Bujumbura Marie MUKAZA BUYENZI",
        //LIEU_Naissance: {id: 24, name:"K"Bujumbura Marie MUKAZA BUYENZI"} 
        Etat_civil: "Marié",
        Fonction: "Informaticien",
        NUMCNI: "0201/324.126 Délivrée le 19/06/2017",
        // fullName: function () {
        //     return this.NOM + " " + this.PRENOM + " " + this.DATENAISSANCE;
        // }
    },
    {
        NOM: "MUKUNDENTE",
        PRENOM: "Peace",
        SEXE: "F",
        NOmPERE: "NIYONKURU ONESPHORE",
        NOMMERE: "NTAWUYAMARA VENANTIE",
        DATENAISSANCE: "22",
        LIEU_Naissance: "Bujumbura Marie NTAHANGWA NGAGARA",
        //LIEU_Naissance: {id: 24, name:"K"Bujumbura Marie MUKAZA BUYENZI"} 
        Etat_civil: "CELIBATAIRE",
        Fonction: "Informaticienne",
        NUMCNI: "0201/150.320 Délivrée le 11/02/2019",
        // fullName: function () {
        //     return this.NOM + " " + this.PRENOM + " " + this.DATENAISSANCE;
        // }
    },
    {
        NOM: "NDIKUMANA",
        PRENOM: "CABREL",
        SEXE: "M",
        NOmPERE: "NDIKUMANA DEO",
        NOMMERE: "KAMPAYANO PASCALINE",
        DATENAISSANCE: "35",
        LIEU_Naissance: "Bujumbura Marie NTAHANGWA KAMENGE",
        //LIEU_Naissance: {id: 24, name:"K"Bujumbura Marie MUKAZA BUYENZI"} 
        Etat_civil: "Marié",
        Fonction: "CHAUFFEUR",
        NUMCNI: "0201/531.128 Délivrée le 08/12/2015",
        // fullName: function () {
        //     return this.NOM + " " + this.PRENOM + " " + this.DATENAISSANCE;
        // }
    }
];

CNI.forEach(element => {
    console.log(element.NOM);
});


let identite = CNI.map(element => {
    return element.NOM;
})
console.log(identite);

let age = CNI.filter(element => {
    return element.DATENAISSANCE > 30;
})
console.log(age);

let CABREL = CNI.find(element => {
    return element.PRENOM === "Cabrel";
})
console.log(CABREL);

let date = CNI.some(element => {
    return element.DATENAISSANCE > 50;
})

console.log(date);








var keys = Object.keys(CNI);
var getKeys = function (obj) {
    var keys = [];
    for (var key in obj) {
        keys.push(key);
    }
    return keys;
}




var keys = CNI.keys(obj);

for (var i = 0; i < keys.length; i++) {
    var val = obj[keys[i]];
    // use val
}

// for(var key in CNI) {
//     var value = CNI[key];
// }


const tableau = [52, 12, 35, 26, 10, 2, 8, 30, 7, 81, 90, 20, 17, 13, 19];
const doubleArr = someArr.map(e => e * 2);


console.log(doubleArr);


const listTab = [
    { name: "Napoléon", sexe: "M", salaire: "200000" },
    { name: "Alain", sexe: "M", salaire: "300000" },
    { name: "Pivoine", sexe: "F", salaire: "400000" },
    { name: "Marc", sexe: "M", salaire: "450000" },
    { name: "Aline", sexe: "F", salaire: "250000" },
];

let sex = listTab.filter(element => {
    return element.sexe == 'M';
})
console.log(sex);

if (sex == true) {
    let Ajout = listTab.map(element => {
        return element.Ajout += 200000;
    })
    console.log(Ajout);
}
else {
    console.log("Aurevoir");
}
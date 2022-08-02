let i = 10
do {
    document.write("Peace and love");
    i++
} while (i < 11)


// for (var i = 5; i != 0; i -= 2) {
//     document.write("bonjour");
// }

var x = 5;
while (x == 5) {
    console.log("Yambu");
}



// objet doit avoir une clé et une valeur
const CNI = {
    NOm: "SIMBANDUMWE",
    PRENOM: "Napoléon",
    SEXE: "M",
    NOmPERE: "SIMBANDUMWE SEVERIN",
    NOMMERE: "NTAKARUTIMANA VIRGINIE",
    DATENAISSANCE: "1er Juin 1988",
    LIEU_Naissance: "Bujumbura Marie MUKAZA BUYENZI",
    Etat_civil: "Marié",
    Fonction: "Informaticien",
    NUMCNI: "0201/324.126 Délivrée le 19/06/2017"
};
//Pour récupérer les valeurs d'un objet, on fait    CNI.NOM et la machine affiche le nom

const CNI = {
    NOM: "SIMBANDUMWE",
    PRENOM: "Napoléon",
    SEXE: "M",
    NOmPERE: "SIMBANDUMWE SEVERIN",
    NOMMERE: "NTAKARUTIMANA VIRGINIE",
    DATENAISSANCE: "1er Juin 1988",
    LIEU_Naissance: "Bujumbura Marie MUKAZA BUYENZI",
    //LIEU_Naissance: {id: 24, name:"K"Bujumbura Marie MUKAZA BUYENZI"} 
    Etat_civil: "Marié",
    Fonction: "Informaticien",
    NUMCNI: "0201/324.126 Délivrée le 19/06/2017",
    fullName: function () {
        return this.NOM + " " + this.PRENOM + " " + this.DATENAISSANCE;
    }
    // on peut utiliser aussi CNI à la place de this  EX:  fullName: function () {
    //     return CNI.NOM + " " + this.PRENOM + " " +this.DATENAISSANCE;   // on peut utiliser aussi CNI à la place de this  EX: 
    // }

};
// Expliquer while et do while
//2.TP: utiliser la boucle FOR ... IN pour afficher toutes les valeurs qui sont dans l'objet CNI
//3. Savoir comment utiliser la boucle  FOR OFF




//Pour afficher les valeurs d'une fonction, on fait CNI.fullname()


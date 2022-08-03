//les tableaux  
// Un tableau est une variable spéciale, qui peut contenir plusieurs valeurs: Exemple: Let cars =["Saab", "Volvo","BMW"]
// tableau idufasha kubika ama valeurs menshi. let cars= ("Volvo","BMW");
// Ukenee kubika ibintu vyinshi de même valeur uca u declara tableau.;
// let cars= "Volvo","BMw","Saab";
// Syntaxe pour déclarer un tableau:    let array_name= [] ex: let eleves = ["Napoléon", "Peace", "Prosper"]
// Dans un tableau,  on compte les indices en commençant par 0
// let xy = [];
// xy:length;  //pour compter la taille du tableau
// xy[10]= "Holla"
// xy.length;  //donne 11

// let b = [1,2,3,4,5,6,7,8,9,10]
// b[0];

// b.pop(9)
// la méthode pop ni io gukuramwo ikintu canyuma muri tableau
// b.push(45) la méthode push ni io gushiramwo ikintu ca nyuma muri tableau


for (let i = 0, i<= 50, i++) {
    console.log("Hello hogi");
}

//Devoir
// Exercice java script
//Exercice java script tableau
// Kuraba ayandi ma méthode ari applicable dans un tableau en java script
//kwiha tableau nini iri desordonné hama ukai tria selon les méthodes applicables ya tableau hama uka ordonna.
//Explorer les méthodes appliquées au tableau en js


const tableau = [52, 12, 35, 26, 10, 2, 8, 30, 7, 81, 90, 20, 17, 13, 19];
function Even(item) {
    return item % 2 == 0;
}
console.log(tableau.filter(Even));


// int i = 0;
// const Paire[];
// const Impaire[];
// for (i = 0; i < tableau.length; i++) {
//     if (tableau[i] % 2 == 0) {
//         Paire.add(i);
//     }
//     else {
//         Impaire.add(i);
//     }
// }

// int MonTableau[] = {1,5,13,9,12,69,48,37,96,25,11,28,112,36,53,47,85,62,32,7,4,158,32,65,91,19,37,73,54,83};
//     int TablPaire[];
//     int TablImpaire[];

//         public void TrierTableau(int MonTableau[])
//     {
//         for(int i=0; i<MonTableau.length; i++)
//         {

//             if(MonTableau[i]%2 == 0)// Si pair
//             {
//                 TablPaire.add(i);
//             }
//             else// si impair
//             {
//                 TablImpaire.add(i);   
//             }






const comparer = (a, b) => b - a;  //Décroissant     a-b ordre décroissant
tableau.sort(comparer);

const min = tableau => tableau.reduce((c, d) => Math.min(c, d));
const max = tableau => tableau.reduce((c, d) => Math.max(c, d));


console.log("Min:", min(tableau));
console.log("Max:", max(tableau));



// for (let i = 0; i < tableau.length; i++) {
//     if (tableau[i] < maxVal)
//         maxVal = tableau[i];
//     if (tableau[i] > minVal)
//         minVal = tableau[i];
// }

// const numbers = [45, 4, 9, 16, 25];
// let sum = numbers.reduce(myFunction);

// document.getElementById("demo").innerHTML = "The sum is " + sum;

// function myFunction(total, value, index, array) {
//     return total + value;
// }


//
function check() {
    var i;
    const TablPaire = [];
    const TablImpaire = [];
    const nbr = [1, 5, 7, 12, 13, 4, 21, 27, 25];
    nbr[i] = Number(document.getElementById("entier").value);
    for (i = 0; i < nbr.length; i++) {
        if (nbr[i] % 2 == 0) {
            console.log("Nombre pair :" + TablPaire[i]);


        }
        else {
            console.log("Nombre impair:" + TablImpaire[i]);

        }
    }
}

// let a = prompt("Entrer la nombre à vérifier:"+a);
//       <button onclick="check()">Vérifier</button>



/* sfsfbnfp
fbdfkbd^b

*/
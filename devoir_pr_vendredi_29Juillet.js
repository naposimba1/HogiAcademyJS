//D A D POUR vendredi


//1. Déterminer le max entre  let a = 10; let b = 20; let c = 30;


let a = prompt("donner la valeur de a");
let b = prompt("donner la valeur de b");
let c = prompt("donner la valeur de c");

if (a > b && b < c) {
    console.log("a est max");

} else {
    if (c > a && a < b) {
        console.log("c est max");
    }
    else {
        if (b > c && c < a) {
            console.log("b est max");
        }
    }
}



let a = prompt("donner la valeur de a");
let b = prompt("donner la valeur de b");
let c = prompt("donner la valeur de c");
if (a > b && b < c) {
    console.log("a est max");

} else {
    if (c > a && a < b) {
        console.log("c est max");
    }
    else {
        if (b > c && c < a) {
            console.log("b est max");
        }
    }
}



//2. Ecrire("Hello hogi") 50fois
let i = 0;

while (i < 50) {
    console.log("Hello hogi:", +i++);






    // 3. Expliquer pourquoi l'un est infinity et l'autre false

    let b = true;
    let result = b && (1 / 0);
    console.log(result);  donne Infinity comme résultat
 //Explication
 L_opérateur logique AND(&&)(conjonction logique) pour un ensemble d_opérandes booléens sera vrai si et seulement si tous les opérandes sont vrais.Dans le cas contraire, il sera faux.

 Plus généralement, l_opérateur renvoie la valeur de la première opérande fausse rencontrée lors de l_évaluation de gauche à droite, ou la valeur de la dernière opérande si elles sont toutes vraies.Donc, comme b2 a été attribué une valeur vraie, le résultat doit être infini car on ne peut pas diviser un nombre par 0.

    let b2 = false;
    let result2 = b2 && (1 / 0);
    console.log(result2);     donne false

//Explication
L_opérateur logique AND(&&)(conjonction logique) pour un ensemble d_opérandes booléens sera vrai si et seulement si tous les opérandes sont vrais.Dans le cas contraire, il sera faux.

Plus généralement, l_opérateur renvoie la valeur de la première opérande fausse rencontrée lors de l_évaluation de gauche à droite, ou la valeur de la dernière opérande si elles sont toutes vraies.Donc, comme b2 a été attribué une valeur fausse, le résultat doit être fausse quelque soit les conditions.


    // 4. Résoudre l'équation du secon de degré du type ax**2+bx+c=0; a=10, b=8, c=1;

    let a = prompt("Donner la valeur de a");
    let b = prompt("Donner la valeur de b");
    let c = prompt("Donner la valeur de c");

    let delta = b * b - 4 * (a * c);
    if (delta > 0) {
        y = Math.sqrt(delta);
        // x1= (-b+y)/2
        // x2=(-b-y)/2
        let x1 = (-b + y) / 2;
        let x2 = (-b - y) / 2;
        console.log("X1 : " + x1);
        console.log("X2 : " + x2);
    }
    else {
        if (delta == 0) {

            let resultat = -b / 2
            console.log("X1=X2 est :" + resultat);
        }
        else {
            console.log("Pas de réponse car Delta ne peut pas être négatif");
        }

    }
let age = 20;
if (age >= 18) {
    console.log("Vous pouvez entrer");
}
else {
    console.log("Sortez, vous êtes encore mineur");
}


// nombre pair ou impair
var x = 21;
if (x % 2 == 0) {
    console.log("le nombre est pair");
}
else {
    console.log("le nombre est impair");
}



var x = 20;
if (x % 2 == 0) {
    console.log("le nombre est pair");
}
else {
    console.log("le nombre est impair");
}


let x = 17;
if (x / x & x / 1) {
    console.log("le nombre est premier")
}
else {
    console.log("le nombre n\'est pas premier")
}

a = false;
b = false;
a && b;

//A savoir pourquoi l'un est infinity et l'autre false
let b = true;
let result = b && (1 / 0);
console.log(result);

let b2 = false;
let result2 = b2 && (1 / 0);
console.log(result2);

let y = null;
if (y) { console.log('LA valeur de y existe'); }
else { console.log("la valeur de y nexiste pas"); }


let a = 10;
let b = 20;

if (a > b) {
    console.log("le max est a");
}
else {
    console.log("le max est b");
}


let a = 30;
let b = 20;

if (a > b) {
    console.log("le max est a");
}
else {
    console.log("le max est b");
}
//D A D POUR vendredi

1. Déterminer le max entre  let a = 10; let b = 20; let c = 30;
2. Ecrire("Hello hogi") 50fois
3. Expliquer pourquoi l'un est infinity et l'autre false

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




4. Résoudre l'équation du secon de degré du type ax**2+bx+c=0; a=10, b=8, c=1;





let a = 40; let b = 60; let c = 80;
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



let a = 40; let b = 20; let c = 41;
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


//Calcul d'une fonction
let a = 5;
let b = 2;
let c = 5;
let delta = b * b - 4 * (a * c);
if (delta > 0) {
    y = Math.sqrt(delta);
    let x1 = (b + y) / 2;
    let x2 = (b - y) / 2;
    document.write("X1 : " + x1 + "<br />");
    document.write("X2 : " + x2);
}
else {
    if (delta == 0) {

        let resultat = b / 2
        console.log("X1=X2 est :" + resultat);
    }
    else {
        console.log("Pas de réponse car Delta ne peut être négatif");
    }

}



let i = 0;

while (i < 51) {
    console.log("Hello hogi:", +i++);

}


let i = 0;
for (1 = 0, i < 51, i++) {
    console.log("Hello hogi");
}


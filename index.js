






//1. Déterminer le max entre  let a = 10; let b = 20; let c = 30;

let a = prompt("Donner la valeur de a");
let b = prompt("Donner la valeur de b");
let c = prompt("Donner la valeur de c");
if (a > b && b < c) {
    console.log("a est max")
}
else {
    if (b > c && c < a) {
        console.log("B est max");
    }
    else {
        if (c > a && a < b) {
            console.log("C est max");
        }
    }
}



let a = 0;
while (a < 50) {
    console.log("HELLO HOGI:", +a++);
}

// 4. Equation aX**2+bx+c=0

let a = prompt("Donner la valeur de a");
let b = prompt("Donner la valeur de b");
let c = prompt("Donner la valeur de c");

let delta = b * b - 4 * (a * c);
console.log("Delta est :" + delta);

if (delta > 0) {
    y = Math.sqrt(delta);
    let X1 = (-b + y) / 2;
    let X2 = (-b - y) / 2;
    console.log("X1 est:" + X1);
    console.log("X2 est:" + X2);
}
else {
    if (delta == 0) {
        let v = -b / 2;
        console.log("X1 et X2 est:" + v);
    }
    else {
        console.log("Pas de réponse car Delta ne peut pas être négatif");
    }
}






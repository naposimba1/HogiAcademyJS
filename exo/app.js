let nbQuestions = 3;
console.log(nbQuestions);
let quizBegin = true;
console.log(quizBegin);
alert("Bienvenu sur ce quiz! " + " \n " + nbQuestions + "3 questions seront posées");
for (let i = 0; i <= 3; i++) {
    let result = prompt(`Question 1/3
Quel est l'âge du capitaine?
1. 42
2. 101
3. 18`);
    let trueResult = 1;
    console.log(result);

    if (result == trueResult) {
        console.log("T'as gagné");
    }
    else {
        console.log("T'as échoué!!");
    }
}
//


let result = prompt(`Question 2/3
Quel est la capitale de France?
1. Londres
2. Paris
3. Berlin`);
let trueResult = 1;
console.log(result);

if (result == trueResult) {
    console.log("T'as gagné");
}
else {
    console.log("T'as échoué!!");
}




let result = prompt(`Question 3/3
Qu'est ce qui est jaune et qui attend'?
1. Jonathan
2. Homer Simpson
3. Un citron pressé`);
let trueResult = 1;
console.log(result);

if (result == trueResult) {
    console.log("T'as gagné");
}
else {
    console.log("Oups!!! T'as échoué!!");
}





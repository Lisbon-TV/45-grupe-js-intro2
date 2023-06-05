console.clear();
// ARRAY -sarasas, matrica, masyvas, arejus, listas

// array - deklaruoja naujas reiksmes
// masyvas turi buti monogeniskas, jei su skaiciais pradejai, tai ir toliau naudoti


const abc = ['a', 'b', 'c', 'd', 'e', 'f'];
console.log(abc);

console.log();

const studs = ['Jonas', 'Maryte', 'Martynas', 'Aliona'];
console.log(studs);

console.log();

function suma(masyvas) {
    return masyvas[0] + masyvas[1] + masyvas[2];
}

const a1 = [1, 2, 3];
const s1 = suma(a1);

const a2 = [9, 10, 8];
const s2 = suma(a2);

const a3 = [5, 5, 5];
const s3 = suma(a3);

console.log(s1, '->', 6);
console.log(s2, '->', 27);
console.log(s3, '->', 15);


console.log();

// Jonas: paskutinis pazymys yra 8.
// Maryte: paskutinis pazymys yra 8.
// Petras: paskutinis pazymys yra 7.
// Ona: paskutinis pazymys yra 5.

const stud1 = 'Jonas';
const marks1 = [10, 2, 8, 2, 8, 2, 8];
const stud2 = 'Maryte';
const marks2 = [10, 9, 8];
const stud3 = 'Petras';
const marks3 = [5, 6, 7];
const stud4 = 'Ona';
const marks4 = [5, 5, 5, 5, 5, 5, 5, 5];


function studentIntro(name, marks) {
    const lastIndex = marks.length - 1;
    const lastMark = marks[lastIndex];
    return `${name}: paskutinis pazymys yra ${lastMark}.`;
}

console.log(studentIntro(stud1, marks1));
console.log(studentIntro(stud2, marks2));
console.log(studentIntro(stud3, marks3));
console.log(studentIntro(stud4, marks4));

console.log();

//Excercise: array with strings

const animal1 = 'cat'; 
const food1 = ['grass', 'meat', 'berries'];

const animal2 = 'dog';
const food2 = ['bone', 'meat', 'apple', 'water'];

const animal3 = 'parrot';
const food3 = ['seed', 'water', 'worms'];

function supper(animal, meal) {
    const lastIndex = meal.length - 1;
    const lastMeal = meal[lastIndex];
    return `The last supper of the ${animal} was ${lastMeal}!`
}

console.log(supper(animal1, food1));
console.log(supper(animal2, food2));
console.log(supper(animal3, food3));


console.clear();
// ARRAY -sarasas, matrica, masyvas, arejus, listas

// array - deklaruoja naujas reiksmes
// masyvas turi buti monogeniskas, jei su skaiciais pradejai, tai ir toliau naudoti

/*
const abc = [a, b, c, d, e, f];
console.log(abc);
*/

/*
const students = ['Jonas', 'Maryte', 'Martynas', 'Aliona'];
console.log(studens);
*/

/*
function suma(masybas) {
    return masyvas[0] + masyvas[2] + masyvas[3];
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
*/

console.clear();

// Jonas: pask. pazymys 8.
// Maryte: pask. pazymys 8.
// Petras: pask. pazymys 7.
// Ona: pask. pazymys 5.

const stud1 = 'Jonas';
const marks1 = [10, 2, 8, 2, 8, 2, 8];

const stud2 = 'Maryte';
const marks2 = [10, 9, 8];

const stud3 = 'Petras';
const marks3 = [5, 6, 7];

const stud4 = 'Ona';
const marks4 = [5, 5, 5, 5, 5, 5, 5, 5];

function studentIntro (vardas, paskPazymys) {
    return '$[studentas] paskutinis pazymys yra $[paskPazymys.length-1].'
}

console.log(studentIntro('Jonas', paskPazymys.length -1));
console.log(studentIntro('Maryte', paskPazymys.lenght-1));
console.log(studentIntro('Petras', paskPazymys.lenght-1));
console.log(studentIntro('Ona', paskPazymys.lenght-1));




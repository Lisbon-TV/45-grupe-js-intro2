/* teorija

STRING - tekstiniu simboliu grandinele, aka tekstas
Iniciavimo budai:
- viengubos kabutes ('')
- dvygubos kabutes ("")
*/

const vardas = 'Jonas';
const vardas2 = "Maryte";

console.log(vardas);
console.log(vardas2)

/*
//eg.1.1. result: Ona Onaityte (su tarpu)

const firstName = 'Ona ';   // tarpas pries kabutis, taciau nelabai naudotinas!
const lastName = 'Onaityte';
const fullName = firstName + lastName;
console.log(fullName);
*/

//eg.1.2. result: Ona Onaityte (su tarpu)

const firstName = 'Ona';  // be tarperlio
const lastName = 'Onaityte';
const fullName = firstName + ' ' + lastName; // tarpelis su ''
console.log(fullName);

// Sveiki, as esu Ona!
// Sveiki, as esu Jonas!
// Sveiki, as esu Maryte!
const rekiam = 'Sveiki, as esu ' + firstName + '!'; // musu pvz Ona
console.log(rekiam);

//KABUTES


console.log('---------------------------'); // bruksnys for visibility purposes only!

// Vienguba kabute (').
const kabute1 = "Vienguba kabute (').";
console.log(kabute1);

// Dviguba kabute (").
const kabute2 = 'Dviguba kabute (").';
console.log(kabute2);

// Vienguba (') ir dviguba (") kabutes.
// Vienguba (') ir dvi
// guba (") kabutes.
const kabute12 = "Vienguba (') ir dvi" + 'guba (") kabutes.';
console.log(kabute12);

// Vienguba (') ir dviguba (") kabutes. Backslash position: (\) pries ignoruoja funkcijas
const kabute12_1 = 'Vienguba (\') ir dviguba (") kabutes.';
const kabute12_2 = "Vienguba (') ir dviguba (\") kabutes.";
const kabute12_3 = "Vienguba (\') ir dviguba (\") kabutes.";
const kabute12_4 = 'Vienguba (\') ir dviguba (\") kabutes.';
console.log(kabute12_1);
console.log(kabute12_2);
console.log(kabute12_3);
console.log(kabute12_4);

// Vienguba (') ir dviguba (") kabutes.
const kabute3 = `Vienguba (') ir dviguba (") kabutes.`;
console.log(kabute3);

// Vienguba ('), dviguba (") ir backtick (`) kabutes. - Panaudojam backslash (\)

const kabute4 = `Vienguba ('), dviguba (") ir backtick (\`) kabutes.`;
console.log(kabute4);


// Komentaras (//). 
const comment1 = 'Komentaras (//).';
const comment2 = "Komentaras (//).";
console.log(comment1);
console.log(comment2);

// Backslash (\). Dvigubinam!
const back1 = 'Backslash (\\).';
const back2 = "Backslash (\\\\).";
console.log(back1);
console.log(back2);

/*............ Isdestymas stulpeliu:.........


Labas
rytas,
Lietuva!


\n - new line (slenkasi eilute zemyn, bet lieka X-asyje (ten pat), kaip eglute!)
\r - return (grizta i tos pacios eilutes prieki) suploja kaip sumustini!
\t - tab
*/

// eg....

const labas = 'Labas\n\
rytas,\n\
Lietuva!';
console.log(labas);

/* const backtickHTML = `\ <--- cia bus is naujos eilutes
\tab\<header>

*/

console.clear();

//final exc. and eg..

const name = 'Martynas';
const age = 99;
const iLike1 = 'masinos';
const iLike2 = 'gamta';
const iLike3 = 'oro balionai';

console.clear();

// Sveiki, mano vardas [VARDAS], man yra [METAI] metai ir man labai patinka [KAS PATINKA], [KAS PATINKA] ir [KAS PATINKA]!

// su ""
const martynas = "Sveiki, mano vardas " + name + ", man yra " + age + " metai ir man labai patinka " + iLike1 + ", " + iLike2 + " ir " + iLike3 + "!";
console.log(martynas);

// su ` , vietoj + naudojam ${}
const martis = `Sveiki, mano vardas ${name}, man yra ${age} metai ir man labai patinka ${iLike1}, ${iLike2} ir ${iLike3}!`;
console.log(martis);





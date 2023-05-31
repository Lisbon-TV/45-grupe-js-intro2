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






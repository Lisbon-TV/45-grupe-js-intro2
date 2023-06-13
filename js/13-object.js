console.clear();

const user1 = ['Jonas', 99, true];
const user2 = ['Maryte', 88, false];
const user3 = ['Petras', 77, false];
const user4 = ['Ona', 66, true];


const user1Name = 'Jonas';
const user1Age = 99;
const user1IsMarried = true;


const user2Name = 'Maryte';
const user2Age = 88;
const user2IsMarried = false;


const user3Name = 'Petras';
const user3Age = 77;
const user3IsMarried = false;

const user4Name = 'Ona';
const user4Age = 66;
const user4IsMarried = true;


const users = [user1, user2, user3, user4];
console.log(users);

const users2 = [
    ['Jonas', 99, true], 
    user2,
    user3, 
    user4];
console.log(users);

// const userIndex = 0;
// const user = users[userIndex};
//     console.log(user);

    const userIndex = 0;
const user = users[1];
    console.log(user);

const userName = user1[0];
const userAge = user1[1];
const userIsMarried = user1[2];

console.log(userName);
console.log(userAge);
console.log(userIsMarried);


// Sveiki mano VARDAS yra XX metu ir as esu VEDES/NEVEDES

// let vedybinisTekstas = '';

// if (userIsMarried) {
//     // vedes
//     vedybinisTekstas = 'vedes';
//     } else {
//         // nevedes
//     vedybinisTekstas = 'nevedes';
//     }

// let vedybinisTekstas2 = 'vedes';

// if (!userIsMarried) {
//     vedybinisTekstas2 = 'nevedes';
//     } 

let vedybinisTekstas3 = '';   // nesigauna!

    if (!userIsMarried) {
        vedybinisTekstas3 = 'ne';
        } 

    
let hi = `Sveiki mano ${userName} yra ${userAge} metu ir as esu ${vedybinisTekstas3}.`;

console.log(hi);


// if (userIsMarried) {
//     hi2
// }   paskaitoje paziurek... 

////////



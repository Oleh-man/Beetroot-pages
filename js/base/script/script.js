//min

const MY_NAME = 'Oleh';
const TEACHER_NAME = 'Ros';
let studentName = 'Petro';
const BRO_NAME = 'Andriy';


/*
const 4MY_NAME = 'Helo';
const TEACHER NAME = 'Sor';
let @studentName = 'Ortep';
const --BRO-NAME = 'Yirdna';
*/

let camelCase;
let snake_case;



// normal

// 1
let yourName = prompt('Enter Your Name!');
alert(`Hello, ${yourName}`);

// 2
let birthYear = prompt ('Enter year of your birth');
const yourAge = 2022 - birthYear;
alert(`You are ${yourAge} or ${yourAge - 1} years old.`);

// 3
let sqrSide = prompt("Enter a number and i'll multiply it by 4!");
alert(`OMG it's ${sqrSide * 4} O_O`);


// maximum

// 1
let circleRadius = prompt('Enter radius of a circle');
alert(`Yours circle area is about ${Math.round(2 * Math.PI * Math.pow(circleRadius, 2))}`);

// 2
let distance = prompt('Enter distance between two cities');
let time = prompt("Enter time you'ld like to get from one to another");
alert(`Than, your speed will be about ${Math.round(distance / time)} km/h`);

// 3
let dollars = prompt(`Enter sum in dollars`);
const eruoToUsd = 0.89;
let yourMoney = Math.round(((dollars * eruoToUsd) + Number.EPSILON) * 100) / 100;           //thx to stackOwerflow
alert(`You'll receive ${yourMoney} EUR`)

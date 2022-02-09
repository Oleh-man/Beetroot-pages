// min

//1
let userAge = +prompt('Enter your age');
if (0 < userAge && userAge <= 11){
    alert('You are a child');
}else if(12 <= userAge && userAge <= 17){
    alert('You are a teenager');
}else if(18 <= userAge && userAge <= 59){
    alert('You are an adult');
}else if(60 <= userAge && userAge <= 100){
    alert('You are retired');
}else if(userAge > 100){
    alert('You are a ghost :)');
}else {
    alert('Enter correct value');
}

// 2
let numberOfSymbol = +prompt('Enter a number from "0" to "9"');
switch (numberOfSymbol){
    case 1:
        alert('Your symbol is "!"');
        break;
    case 2:
        alert('Your symbol is "@"');
        break;
    case 3:
        alert('Your symbol is "#"');
        break;
    case 4:
        alert('Your symbol is "$"');
        break;
    case 5:
        alert('Your symbol is "%"');
        break;
    case 6:
        alert('Your symbol is "^"');
        break;
    case 7:
        alert('Your symbol is "&"');
        break;
    case 8:
        alert('Your symbol is "*"');
        break;
    case 9:
        alert('Your symbol is "("');
        break;
    case 0:
        alert('Your symbol is ")"');
        break;
    default:
        alert('Refresh page and try enter a NUMBER from "0" to "9"');
}

// 3
let fromUserNum = +prompt('Enter start number of range');
let toUserNum = +prompt('Enter end number of range');
let rangeSum = 0;
for(let i = fromUserNum; i <= toUserNum; i++){
    rangeSum += i;
}
alert(rangeSum);

// 4
let firstDiv = +prompt('Enter first number');
let secondDiv = +prompt('Enter second number');
if(firstDiv > secondDiv){
    while((firstDiv % secondDiv) != 0){
        secondDiv = firstDiv % secondDiv;
    }
    alert(secondDiv);
}else if(firstDiv < secondDiv){
    while((secondDiv % firstDiv) != 0){
        firstDiv = secondDiv % firstDiv;
    }
    alert(firstDiv);
}

// 5
const DIVIDED_NUM = +prompt('Enter a number');
for(i = 0; i <= DIVIDED_NUM; i++){
    if ((DIVIDED_NUM % i) === 0){
        alert(`your divisor is ${i}`);
    }
}


// normal

// 1
const isPalindrome = prompt('Enter five-digit number');
let firstPalDig = +isPalindrome % 10;
let secondPalDig = Math.floor(+isPalindrome / 10) % 10;
let thirdPalDig = Math.floor(+isPalindrome / 100) % 10;
let fourthPalDig = Math.floor(+isPalindrome / 1000) % 10;
let fifthPalDig = Math.floor(+isPalindrome /10000);
let truePalindrome = `${firstPalDig}${secondPalDig}${thirdPalDig}${fourthPalDig}${fifthPalDig}`;
if(+isPalindrome === (+truePalindrome)){
    alert(`${isPalindrome} is a Palindrome`);
}else if(+isPalindrome !== (+truePalindrome)){
    alert(`${isPalindrome} is not a Palindrome`);
}

// 2
const purchaseAmount = +prompt('Enter your purchase amount');
let withDiscount = 0;
if(purchaseAmount >= 200 && purchaseAmount < 300){
    withDiscount = purchaseAmount - (purchaseAmount * 0.03);
    alert(withDiscount.toFixed(2));
}else if(purchaseAmount >= 300 && purchaseAmount < 500){
    withDiscount = purchaseAmount - (purchaseAmount * 0.05);
    alert(withDiscount.toFixed(2));
}else if(purchaseAmount >= 500){
    withDiscount = purchaseAmount - (purchaseAmount * 0.07);
    alert(withDiscount.toFixed(2));
}else{
    alert(purchaseAmount);
}

// 3
let positives = 0;
let negatives = 0;
let zeros = 0;
let odds = 0;
let evens = 0;
let numString = '';
for(let i = 0; i < 10; i++) {
    let num = +prompt('Enter a number');
    if(num > 0){
        positives++;
    }
    if(num < 0){
        negatives++;
    }
    if(num === 0){
        zeros++;
    }
    if(num % 2 === 0){
        evens++;
    }
    if(num % 2 != 0){
        odds++;
    }
    numString += num + '; ';
}
alert(
    `Your input is "${numString}":
    ${positives} positive numbers
    ${negatives} negative numbers
    ${zeros} zeros
    ${evens} even numbers
    ${odds} odd numbers`
);
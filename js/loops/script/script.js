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
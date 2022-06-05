// minimum

// 1
// Function declaration
function funcName1(par1, par2) {
    // some code
}

// Function expression
let varName1 = function funcName2() {
    // some code
}

// Anonymous function
(function (){
    // some code
})

// Arrow function
let varName2 = () => {
    // some code
}

// 2
function argsNum() {
    return arguments.length;
}

// 3
let equality = (num1, num2) => {
    if(num1 < num2) {
        return -1;
    }else if(num1 > num2) {
        return 1;
    }else if (num1 = num2) {
        return 0;
    }else{
        return 'Oops, something went wrong';
    }
}

// 4
let factorial = (factNum) => {
    let result = 1;
    if(factNum < 0) {
        return -1;
    }else {
        for (let i = 1; i <= factNum; i++) {
            result = result * i;
        }
    }
    return result;
}

// 5
let threeNums = (num1, num2, num3) => {
    return Number(`${num1}${num2}${num3}`)
}

// 6
let area = (width, height) => {
    if(height === undefined) {
        return width * width;
    }else{
        return width * height;
    }
}

// medium

// 1
let ifPerfect = (num) => {
    let calc = 0;
    for(i = 1; i < num; i++) {
        if ((num % i) === 0) {
            calc = calc + i;
        }
    }
    
    if(num === calc){
        return 'It is a Perfect number';
    }else {
        return 'It is NOT a Perfect number';
    }

}

// 2

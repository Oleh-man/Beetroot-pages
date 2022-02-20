//MIN
const shoppingList = [
     {
        name: 'Bread',
        count: 0,
        bought: false,
        prise: 10,
        sum: 0
    },

    {
        name: 'Cola',
        count: 0,
        bought: true,
        prise: 20,
        sum: 0
    },

    {
        name: 'Beer',
        count: 0,
        bought: false,
        prise: 30,
        sum: 0
    }
];

// 1 Show Shop list 
let showList = () => {
    let items = [];
    for (let i = 0; i < shoppingList.length; i++) {
        if (shoppingList[i].bought === false) {
            items.unshift(shoppingList[i]);
        } else {
            items.push(shoppingList[i]);
        };
    };
    console.log(items);
};

// 2 Buy produts
let buyItem = (itemName) => {
    shoppingList.find((item) =>{
        if(item.name === itemName && item.bought === false){
            item.bought = true;
            console.log(`You just bought ${itemName}`);
        };
    });
};

// 3 Lists of (un) purchased products
let purchasedList = () => {
    let items = [];
    for (let i = 0; i < shoppingList.length; i++) {
        if (shoppingList[i].bought === true) {
            items.push(shoppingList[i]);
        };
    };
    console.log(items);
};

let unPurchasedList = () => {
    let items = [];
    for (let i = 0; i < shoppingList.length; i++) {
        if (shoppingList[i].bought === false) {
            items.push(shoppingList[i]);
        };
    };
    console.log(items);
};

// NORMAL

// 1 Delete product
let deleteItem = (name) => {
    let newList = shoppingList.map((item) => item);
    for(let i = 0; i < newList.length; i++){
        if(newList[i].name === name){
            newList.splice(i, 1);
        };
    };
    return newList;
};

// 2 Add Product
let addItem = (name) => {
    for(let i = 0; i < shoppingList.length; i++){
        if(shoppingList[i].name === name){
            shoppingList[i].sum += shoppingList[i].prise;
            shoppingList[i].count++;
        };
    };
};

// MAXIMUM

// 1
let sumAll = () =>{
    let sum = 0;
    let count = 0;
    for(let i = 0; i < shoppingList.length; i++){
        sum += shoppingList[i].sum;
        count += shoppingList[i].count;
    };
    return `You want to bought ${count} items for ${sum}$`;
};

let unPurchasedSum = () => {
    let sum = 0;
    for(let i = 0; i < shoppingList.length; i++){
        if (shoppingList[i].bought === false){
            sum += shoppingList[i].sum;
        };
    };
    return `You have some unpurchased products on ${sum}$`;
}

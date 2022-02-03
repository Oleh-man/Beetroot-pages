// min

//1
alert((0.1 + 0.2).toFixed(1));

//2
let one = '1';
let two = 2;
alert(+one + two);

//3
let userFdd = +prompt('Tell me size of your FDD');
userFdd *= 1024;
alert(`Your FDD can contain file, that have size of 820Mb, ${Math.floor(userFdd / 820)} times`);

//norm

//1
let wallet = prompt('How much money do you have in your wallet');
let chocoPrice = prompt('How much is chocolate cost');
alert(`You can buy ${Math.floor(wallet / chocoPrice)} chocolates`);
alert(`...and than you'll have ${wallet % chocoPrice} hryvnшas`)
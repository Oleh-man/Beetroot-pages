const main = document.getElementById('main');
const city = document.querySelector('.border');

main.addEventListener('click', function (e) {
    chosenCity = e.target.children[0].textContent; //get city name (str)
    
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${chosenCity}&appid=21edd3c2f4e30b2f7d738b8251326cc5`)
    .then((result) => (result.json()))
    .then(data => {
        console.dir(data);
        getDegrees(data);
        e.target.children[1].children[0].innerHTML = `${Math.floor(data.main.temp - 272.15)} &degС;`
    });
});

function getDegrees(data) {
    
}
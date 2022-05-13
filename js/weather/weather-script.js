const main = document.getElementById('main');
const city = document.querySelector('.border');

main.addEventListener('click', function (e) {
    // console.dir(e);
    let chosenCity = e.path[3].children[0].textContent;
    // console.log(chosenCity)
    
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${chosenCity}&appid=21edd3c2f4e30b2f7d738b8251326cc5`)
    .then((result) => (result.json()))
    .then(data => {
        console.dir(data);
        getDegrees(data);
        e.path[1].innerHTML = `${Math.floor(data.main.temp - 272.15)} &degС;`
    });
});

function getDegrees(data) {
    
}
// MINIMUM
const playList = [
    {
        author: "LED ZEPPELIN",
        song: "STAIRWAY TO HEAVEN"
    },

    {
        author: "QUEEN",
        song: "BOHEMIAN RHAPSODY"
    },

    {
        author: "LYNYRD SKYNYRD",
        song: "FREE BIRD"
    },

    {
        author: "DEEP PURPLE",
        song: "SMOKE ON THE WATER"
    },

    {
        author: "JIMI HENDRIX",
        song: "ALL ALONG THE WATCHTOWER"
    },

    {
        author: "AC/DC",
        song: "BACK IN BLACK"
    },

    {
        author: "QUEEN",
        song: "WE WILL ROCK YOU"
    },

    {
        author: "METALLICA",
        song: "ENTER SANDMAN"
    }

];

const songList = document.getElementById('song-list');
(function () {
    for (let i = 0; i <= playList.length - 1; i++) {
        const song = document.createElement('li');
        song.textContent = `${playList[i].author} - ${playList[i].song}`;
        songList.append(song);
    }

})()

//NORMAL
const showModal = document.getElementById('show-modal');
const modal = document.getElementById('modal-body');
const closeModal = document.getElementById('close-modal');
modal.style.display = "none";
showModal.addEventListener('click', function () {
    modal.style.display = "block";
});
closeModal.addEventListener('click', function(){
    modal.style.display = "none";
});

// MAX
let lightBtn = document.getElementById("traffic-btn");
let redLight = document.getElementById('red');
let yellowLight = document.getElementById('yellow');
let greenLight = document.getElementById('green');

let clearLights = () => { 
    redLight.style.backgroundColor = 'gray';
    yellowLight.style.backgroundColor = 'gray';
    greenLight.style.backgroundColor = 'gray';
}
redLight.style.backgroundColor = 'red';

lightBtn.addEventListener('click', event => {
    if(redLight.style.backgroundColor == 'red'){
        clearLights();
        yellowLight.style.backgroundColor = 'yellow';
    }else if(yellowLight.style.backgroundColor == 'yellow'){
        clearLights();
        greenLight.style.backgroundColor = 'green';
    }else if(greenLight.style.backgroundColor = 'green'){
        clearLights();
        redLight.style.backgroundColor = 'red';
    }
});




// 1
const body = document.getElementById('body');
const text = document.getElementById('text');
const input = document.getElementById('input');


body.addEventListener('keydown', function (event) {
    if (event.code == 'KeyE' && (event.ctrlKey || event.metaKey)) {
        event.preventDefault();
        text.style.display = 'none'
        input.style.display = 'block';
        input.focus();      //autofocus
        input.textContent = text.textContent;
        input.selectionStart = input.value.length; // focus on the end of the line
    }else if ((event.code == 'Equal shiftKey' || event.code == 'NumpadAdd') && (event.ctrlKey || event.metaKey)) {
        event.preventDefault();
        text.style.display = 'block';
        input.style.display = 'none';
        text.textContent = input.value;
    }
});

const block = document.getElementById('resizeBlock');
const mover = document.getElementById('clickArea');

let blockWidht = block.clientWidth;
let blockHeight = block.clientHeight;


mover.addEventListener('mousedown', (e) => {
    let currPosDwnX = e.clientX;
    let currPosDwnY = e.clientY;
    
    
    console.dir(typeof(currPosDwnY))
    console.log(blockHeight, blockWidht)

})
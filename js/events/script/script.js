// 1
const body = document.getElementById('body');
const text = document.getElementById('text');
const input = document.getElementById('input');


body.addEventListener('keydown', function (event) {
    if (event.code == 'KeyE' && (event.ctrlKey || event.metaKey)) {
        event.preventDefault();
        text.style.display = 'none';
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


//2
const block = document.getElementById('resizeBlock');
const mover = document.getElementById('clickArea');

mover.addEventListener('mousedown', clickOnMover = (e) => {
    e.preventDefault();
    let currPosDwnX = e.clientX;
    let currPosDwnY = e.clientY;

    const rect = block.getBoundingClientRect();
    
    window.addEventListener('mousemove', moveCursor = (e) => {
        let newX = e.clientX - currPosDwnX;
        let newY = e.clientY - currPosDwnY;
        
        block.style.width = `${rect.width + newX}px`;
        block.style.height = `${rect.height + newY}px`;
    });
        
    window.addEventListener('mouseup', mouseup = () => {
    window.removeEventListener('mousemove', moveCursor);
    window.removeEventListener('mouseup', mouseup);
    });
});

// 1
const body = document.getElementById('body');
const text = document.getElementById('text');
const input = document.getElementById('input');


body.addEventListener('keydown', function (event) {
    if (event.code == 'KeyE' && (event.ctrlKey || event.metaKey)) {
        event.preventDefault();
        text.style.display = 'none'
        input.style.display = 'block';
        input.focus();
        input.textContent = text.textContent;
        input.selectionStart = input.value.length; // focus on the end of the line
    }else if ((event.code == 'Equal shiftKey' || event.code == 'NumpadAdd') && (event.ctrlKey || event.metaKey)) {
        event.preventDefault();
        text.style.display = 'block';
        input.style.display = 'none';
        text.textContent = input.value;
    }
});
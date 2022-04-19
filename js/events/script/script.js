// 1
const body = document.getElementById('body');
const text = document.getElementById('text');
const input = document.getElementById('input');


body.addEventListener('keydown', function (event) {
    if (event.code == 'KeyE' && (event.ctrlKey || event.metaKey)) {
        event.preventDefault();
        text.style.display = 'none'
        input.style.display = 'block';
    }
});
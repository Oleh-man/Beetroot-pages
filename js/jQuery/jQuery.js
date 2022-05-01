$(document).ready(() => {
    $('body').prepend('<button id = "btn">Change</button>');
    $('#block').css({'width': 50, 'height': 50, 'background-color': 'red'});
    $('#btn').on('click', () => {
        $('#block').animate({width: '100px',height: '100px', 'background-color': 'blue'}, () => {
            $('#block').css('background-color', 'green');
        });
    })
})


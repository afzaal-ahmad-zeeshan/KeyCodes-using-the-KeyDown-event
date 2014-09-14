$(document).ready(function () {
    $('#body').css({
        height: screen.height - 200
    })

    $('body').keydown(function () {
        $('#result').text(event.keyCode);
    });
});
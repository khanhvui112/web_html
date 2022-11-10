$(document).ready(function () {
    $('.btn-default').on('click', function () {
        $('body > article').remove();
        $('.btn-left').remove();
    });
})
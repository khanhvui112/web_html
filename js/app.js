$(document).ready(function () {
    $('.btn-reset').on('click', function () {
        $('body > article').remove();
        $('body').attr('style','background: black');
        $('.btn-left').remove();
    });
    $('.btn-change-text').on('click', function () {
        let text = $('#name').val();
        $('body > article').remove();
        $('.title > h1').text(text);
    });
    
})
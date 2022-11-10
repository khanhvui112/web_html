$(document).ready(function () {
    $('.btn-reset').on('click', function () {
        alert('Chào')
        $('body > article').remove();
        $('.btn-left').remove();
    });
    $('.btn-change-text').on('click', function () {
        alert('Chào2')
        let text = $('#name').val();
        $('body > article').remove();
        $('.title > h1').text(text);
    });
    
})
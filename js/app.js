$(document).ready(function () {
    $('.btn-reset').on('click', function () {
        $('body > article').remove();
        $('body').attr('style','background: black');
        $('.btn-left').remove();
    });
    $('.btn-change-text').on('click', function () {
        let text = $('#name').val().toString();
        $('.text-change').text(text+''.toUpperCase());
    });
    $('.btn-hide').on('click', function () {
        $('.btn-left').remove()
    });
    $('.btn-bg-black').on('click', function () {
        $('body').attr('style','background: black');
    });
    
    
    
})
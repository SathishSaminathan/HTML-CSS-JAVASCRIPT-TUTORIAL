$(document).ready(function(){
    $('.settings').addClass('active');
    $('.settings-icon').click(function(){
        $('.settings').addClass('active');
    })
    $('.close-btn').click(function(){
        $('.settings').removeClass('active');
    })
    $('.switch').click(function(){
        $(this).toggleClass('active-btn');
    })
})
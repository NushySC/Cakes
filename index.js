$(document).ready(function(){
    $('.toggle').click(changeNav);

    function changeNav(){
        $('.links').toggle(2000);
        $('.toggle').toggleClass('turn');
    }
})
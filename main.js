
$(document).ready(function() {
    $('#carousel-imagens').slick({
        autoplay: true, 
});

$('.menu-hamburguer').click(function(){ //ao clicar no menu hamburguer teremos o slideToggle//
    $('nav').slideToggle();// essa função espande e recolhe o menu ao segundo click//
})


});

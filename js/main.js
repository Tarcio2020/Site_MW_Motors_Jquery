
$(document).ready(function() {
    $('#carousel-imagens').slick({
        autoplay: true, 
});

$('.menu-hamburguer').click(function(){ //ao clicar no menu hamburguer teremos o slideToggle//
    $('nav').slideToggle();// essa função espande e recolhe o menu ao segundo click//
})


$('#telefone').mask('(00) 00000-0000',{
    placeholder: '(00) 00000-0000'
})
    
//$('#telefone').mask('00/00/0000', {
    
//  placeholder: '__/__/____'<<<<
$('form').validate({
    rules: {
        nome: {
            required: true
            },
        email: {
            required: true,
            email: true
        },
        telefone: {
            required: true
        },
        menssagem: {
            required: true,
        },
        veiculoDeinteresse: {
            required: false
        }

    },
    menssagens: {
        nome: 'Por favor, insira o seu nome'
    },
    submitHandler: function(form) {
        console.log(form)
    },
    invalidHandler: function(evento, validador) {
        let camposIncorretos = validador.numberOfInvalids();
        if(camposIncorretos){
            alert(`Existem ${camposIncorretos} campos incorretos`)
        }
    }
})


$('.lista-de-veiculos button').click(function() {
    const destino = $('#contato');
    const nomeVeiculo = $(this).parent().find('h3').text();
    
    $('#veiculo-interesse').val(nomeVeiculo);

    $('html').animate({
        scrollTop: destino.offset().top
    }, 1000)

})

});

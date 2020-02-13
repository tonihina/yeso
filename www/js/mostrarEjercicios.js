$(document).ready(function() {
    $.ajax({
            type: "POST",
            url: "https://andreaconeche.000webhostapp.com/MostrarEjerciciosPrincipiantes.php",
            cache: false,
            success: function(response)
            {
                $('#principiantes').html(response).fadeIn();
            }
    });

});

$(document).ready(function() {
    $.ajax({
            type: "POST",
            url: "https://andreaconeche.000webhostapp.com/mostrarEjerciciosIntermedios.php",
            cache: false,
            success: function(response)
            {
                $('#intermedios').html(response).fadeIn();
            }
    });

});

$(document).ready(function() {
    $.ajax({
            type: "POST",
            url: "https://andreaconeche.000webhostapp.com/mostrarEjerciciosAvanzados.php",
            cache: false,
            success: function(response)
            {
                $('#avanzados').html(response).fadeIn();
            }
    });

});

$(document).ready(function() {
  
    $.ajax({
            type: "POST",
            url: "https://andreaconeche.000webhostapp.com/mostrarEjerciciosMuyPrincipiante.php",
            cache: false,
            success: function(response)
            {
                $('#muyPrincipiantes').html(response).fadeIn();
                
            }
    });

});

function mp(pagina){
    window.location.replace(pagina);
}
$(document).ready(function() {
    
    $.ajax({
            type: "POST",
            url: "https://andreaconeche.000webhostapp.com/buscarEjercicios.php",
            cache: false,
            
            success: function(response)
            {
                $('#muestaEjerciciosMP').html(response).fadeIn();
               
            }
    });

});

$(document).ready(function() {
    
    $.ajax({
            type: "POST",
            url: "https://andreaconeche.000webhostapp.com/buscarEjerciciosPrincipiante.php",
            cache: false,
            
            success: function(response)
            {
                $('#muestraEjerciciosP').html(response).fadeIn();
               
            }
    });

});

$(document).ready(function() {
    
    $.ajax({
            type: "POST",
            url: "https://andreaconeche.000webhostapp.com/buscarEjerciciosInter.php",
            cache: false,
            
            success: function(response)
            {
                $('#muestraEjerciciosInter').html(response).fadeIn();
               
            }
    });

});


$(document).ready(function() {
    
    $.ajax({
            type: "POST",
            url: "https://andreaconeche.000webhostapp.com/buscarEjerciciosAvanzados.php",
            cache: false,
            
            success: function(response)
            {
                $('#muestraEjerciciosAvan').html(response).fadeIn();
               
            }
    });

});

function regresar(pagina){
    window.location.replace(pagina);
}

    $('#presionar').keypress(function() {
        setTimeout('mostrarBusqueda()', 500);
        
      });
      $('#presionar1').keypress(function() {
        setTimeout('mostrarBusqueda()', 500);
        
      });
      $('#presionar2').keypress(function() {
        setTimeout('mostrarBusqueda()', 500);
        
      });
      $('#presionar3').keypress(function() {
        setTimeout('mostrarBusqueda()', 500);
        
      });


function aparece(){
  
  
}

function mostrarBusqueda(){
    var aparece=document.getElementById('muestaEjerciciosMP');
    aparece.style.visibility="visible";
    var aparecer=document.getElementById('muestraEjerciciosP');
    aparecer.style.visibility="visible";
    var aparecerInter=document.getElementById('muestraEjerciciosInter');
    aparecerInter.style.visibility="visible";
    var aparecerAvan=document.getElementById('muestraEjerciciosAvan');
    aparecerAvan.style.visibility="visible";
}
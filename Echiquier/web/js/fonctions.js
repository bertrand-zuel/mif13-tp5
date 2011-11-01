$(document).ready(function()
{   
   // Premier redimensionnement de l'échiquier
   $('#echiquier').attr('width', $(window).width()/2.5).attr('height', $(window).width()/2.5);
  
 
    // Redimensionnement quand on change la taille de la fenêtre
    $(window).resize(function() {
            var taille = $(window).width()/2.5;
            $('#echiquier').attr('width', taille).attr('height', taille);

    });

});
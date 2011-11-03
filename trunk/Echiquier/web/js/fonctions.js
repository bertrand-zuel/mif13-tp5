$(document).ready(function()
{   
   // Premier redimensionnement de l'échiquier
   $('#echiquier').attr('width', $(window).width()/2).attr('height', $(window).width()/2);
   mettreEnPlace();
   
    $("#tn1").droppable({
      drop: function() { alert('dropped'); }
    });
    
    // Redimensionnement quand on change la taille de la fenêtre
    $(window).resize(function() {
        var taille = $(window).width()/2;
        $('#echiquier').attr('width', taille).attr('height', taille);
        mettreEnPlace();
    }); 
});

function mettreEnPlace()
{
	// Taille d'une cellule : 10% de chaque côté
	var largeurCellule = $('#echiquier').attr('width') * 0.085;
	var hauteurCellule = $('#echiquier').attr('height') * 0.085;
	
        $("img").each(function(){
            $(this).attr('width', largeurCellule).attr('height', hauteurCellule).draggable({containment:"#echiquier", scroll: false});
        });
        
        $("td").each(function(){
            $(this).droppable({
                drop: function(event,ui){
                    $(this).html(' ');
                    ui.draggable.appendTo($(this)).css({left: '0px', top:  '0px'})
                }
            })
        });  
        
}
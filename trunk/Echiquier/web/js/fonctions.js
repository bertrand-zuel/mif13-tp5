$(document).ready(function()
{   
   // Premier redimensionnement de l'échiquier ( en fonction de la taille de la fenêtre de l'utilisateur
   $('#echiquier').attr('width', $(window).width()/2).attr('height', $(window).width()/2);
   // On place les pieces
   mettreEnPlace();
    
    // Redimensionnement quand on change la taille de la fenêtre
    $(window).resize(function() {
        var taille = $(window).width()/2;
        $('#echiquier').attr('width', taille).attr('height', taille);
        mettreEnPlace();
    }); 
});

function mettreEnPlace(XMLDoc)
{
        // Décommente si tu veux voir la gueule du XML en alert, sinon tu peux aller sur http://localhost:8080/Echiquier/gestion/tour.jsp
        //alert((new XMLSerializer()).serializeToString(XMLDoc));
	// Taille d'une image en fonction de la taille de notre échiquier
	var largeurCellule = $('#echiquier').attr('width') * 0.085;
	var hauteurCellule = $('#echiquier').attr('height') * 0.085;
	
        // On définit la taille de chaque image avec les valeurs ci-dessus et on rajouter l'attribut draggable pour qu'elles puissent être déplacées
        $("img").each(function(){
            $(this).attr('width', largeurCellule).attr('height', hauteurCellule).draggable({containment:"#echiquier", scroll: false});
        });
        
        //On parcourt toutes les balises td et on les rend droppable (peuvent recevoir des pieces) 
        $("td").each(function(){
            $(this).droppable({
                drop: function(event,ui){
                    //On vide le td avant d'y placer la nouvelle image -> sinon regroupement familial
                    $(this).html(' ');
                    //On rajoute la nouvelle image
                    ui.draggable.appendTo($(this)).css({left: '0px', top:  '0px'})
                }
            })
        });
}
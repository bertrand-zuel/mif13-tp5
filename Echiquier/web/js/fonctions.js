$(document).ready(function()
{   
   // Premier redimensionnement de l'échiquier
   $('#echiquier').attr('width', $(window).width()/2.5).attr('height', $(window).width()/2.5);
  
    var pionPlaces = false;
    
    // Redimensionnement quand on change la taille de la fenêtre
    $(window).resize(function() {
            var taille = $(window).width()/2.5;
            $('#echiquier').attr('width', taille).attr('height', taille);
            if(pionPlaces)
                mettreEnPlace();

    });
    
    $("#echiquier").draggable();
    
    $('#btnInit').click(function() {
        mettreEnPlace();  			
        pionPlaces = true;
    });

});

function mettreEnPlace()
{
	// Taille d'une cellule : 10% de chaque côté
	var largeurCellule = $('#echiquier').attr('width') * 0.1;
	var hauteurCellule = $('#echiquier').attr('height') * 0.1;
        alert (largeurCellule);
	
	// Position du plateau + coordonnées des pions
	var $positionPlateau = $('#echiquier').position();
	var coordX = $positionPlateau.left + $('#echiquier').attr('width') * 0.1;
	var coordY = $positionPlateau.top;
		
	// Première ligne noire
	$('#tn1').attr('width', largeurCellule).attr('height', hauteurCellule).css('top', coordY).css('left', coordX).show();
	$('#cn1').attr('width', largeurCellule).attr('height', hauteurCellule).css('top', coordY).css('left', coordX + largeurCellule).show();
	$('#fn1').attr('width', largeurCellule).attr('height', hauteurCellule).css('top', coordY).css('left', coordX + largeurCellule * 2).show();
	$('#dn').attr('width', largeurCellule).attr('height', hauteurCellule).css('top', coordY).css('left', coordX + largeurCellule * 3).show();
	$('#rn').attr('width', largeurCellule).attr('height', hauteurCellule).css('top', coordY).css('left', coordX + largeurCellule * 4).show();
	$('#fn2').attr('width', largeurCellule).attr('height', hauteurCellule).css('top', coordY).css('left', coordX + largeurCellule * 5).show();
	$('#cn2').attr('width', largeurCellule).attr('height', hauteurCellule).css('top', coordY).css('left', coordX + largeurCellule * 6).show();
	$('#tn2').attr('width', largeurCellule).attr('height', hauteurCellule).css('top', coordY).css('left', coordX + largeurCellule * 7).show();
  	
	// Pions noirs	
	for(var i = 0 ; i < 8 ; ++i)
		$('#pn'+(i+1)).attr('width', largeurCellule).attr('height', hauteurCellule).css('top', coordY + hauteurCellule).css('left', coordX + largeurCellule * i).show();
  			
  	// Première ligne blanche		
	$('#tb1').attr('width', largeurCellule).attr('height', hauteurCellule).css('top', coordY + hauteurCellule * 7).css('left', coordX).show();
	$('#cb1').attr('width', largeurCellule).attr('height', hauteurCellule).css('top', coordY + hauteurCellule * 7).css('left', coordX + largeurCellule).show();
	$('#fb1').attr('width', largeurCellule).attr('height', hauteurCellule).css('top', coordY + hauteurCellule * 7).css('left', coordX + largeurCellule * 2).show();
	$('#rb').attr('width', largeurCellule).attr('height', hauteurCellule).css('top', coordY + hauteurCellule * 7).css('left', coordX + largeurCellule * 3).show();
	$('#db').attr('width', largeurCellule).attr('height', hauteurCellule).css('top', coordY + hauteurCellule * 7).css('left', coordX + largeurCellule * 4).show();
	$('#fb2').attr('width', largeurCellule).attr('height', hauteurCellule).css('top', coordY + hauteurCellule * 7).css('left', coordX + largeurCellule * 5).show();
	$('#cb2').attr('width', largeurCellule).attr('height', hauteurCellule).css('top', coordY + hauteurCellule * 7).css('left', coordX + largeurCellule * 6).show();
	$('#tb2').attr('width', largeurCellule).attr('height', hauteurCellule).css('top', coordY + hauteurCellule * 7).css('left', coordX + largeurCellule * 7).show();
  	
	// Pions blancs
	for(var i = 0 ; i < 8 ; ++i)
		$('#pb'+(i+1)).attr('width', largeurCellule).attr('height', hauteurCellule).css('top', coordY + hauteurCellule * 6).css('left', coordX + largeurCellule * i).show();
}
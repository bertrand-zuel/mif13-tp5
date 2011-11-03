$(document).ready(function()
{   
   // Premier redimensionnement de l'échiquier
   $('#echiquier').attr('width', $(window).width()/2).attr('height', $(window).width()/2);
   mettreEnPlace();

    
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
	var largeurCellule = $('#echiquier').attr('width') * 0.1;
	var hauteurCellule = $('#echiquier').attr('height') * 0.1;
	
	// Position du plateau + coordonnées des pions
	//var $positionPlateau = $('#echiquier').position();
	//var coordX = $positionPlateau.left + $('#echiquier').attr('width') * 0.1;
	//var coordY = $positionPlateau.top;
		
	// Première ligne noire
	$('#tn1').attr('width', largeurCellule).attr('height', hauteurCellule);
	$('#cn1').attr('width', largeurCellule).attr('height', hauteurCellule);
	$('#fn1').attr('width', largeurCellule).attr('height', hauteurCellule);
	$('#dn').attr('width', largeurCellule).attr('height', hauteurCellule);
	$('#rn').attr('width', largeurCellule).attr('height', hauteurCellule);
	$('#fn2').attr('width', largeurCellule).attr('height', hauteurCellule);
	$('#cn2').attr('width', largeurCellule).attr('height', hauteurCellule);
	$('#tn2').attr('width', largeurCellule).attr('height', hauteurCellule);
  	
	// Pions noirs	
	for(var i = 0 ; i < 8 ; ++i)
		$('#pn'+(i+1)).attr('width', largeurCellule).attr('height', hauteurCellule);
  			
  	// Première ligne blanche		
	$('#tb1').attr('width', largeurCellule).attr('height', hauteurCellule);
	$('#cb1').attr('width', largeurCellule).attr('height', hauteurCellule);
	$('#fb1').attr('width', largeurCellule).attr('height', hauteurCellule);
	$('#rb').attr('width', largeurCellule).attr('height', hauteurCellule);
	$('#db').attr('width', largeurCellule).attr('height', hauteurCellule);
	$('#fb2').attr('width', largeurCellule).attr('height', hauteurCellule);
	$('#cb2').attr('width', largeurCellule).attr('height', hauteurCellule);
	$('#tb2').attr('width', largeurCellule).attr('height', hauteurCellule);
  	
	// Pions blancs
	for(var x = 0 ; x < 8 ; ++x)
            $('#pb'+(x+1)).attr('width', largeurCellule).attr('height', hauteurCellule).draggable({containement:"#echiquier", scroll: false});
        
}
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
    traiteXML(XMLDoc);

    //On parcourt toutes les balises td et on les rend droppable (peuvent recevoir des pieces) 
    $("td").each(function(){
        var classeCible;
        var classeSource;
        $(this).droppable({
            drop: function(event,ui){
                //On vide le td avant d'y placer la nouvelle image -> sinon regroupement familial
               // if ($(this).children('img').attr('class').substring(0,10) == NULL)
                if ($(this).children('img').attr('class') == null)
                    classeCible = "vide";
                else classeCible = $(this).children('img').attr('class').substring(0,10);
                classeSource = ui.draggable.attr('class').substring(0,10);
                if(classeSource != classeCible)
                {
                    $(this).html(' ');
                    //On rajoute la nouvelle image
                    ui.draggable.appendTo($(this)).css({left: '0px', top:  '0px'})
                    var caseCible = $(this).attr('id');
                    var idPieceDep = $(this).children('img').attr('id'); 
                }
                else                
                    ui.draggable.draggable({revert:true});               
            }
        })
    });
        
    $("th").each(function(){
        $(this).droppable({
            drop: function(event,ui){
                ui.draggable.draggable({revert:true});
            }
        })
    });
    //Pour le rafraichissement
    //rafraichissement();
}

function traiteXML(XMLDoc)
{  
    var pseudo = XMLDoc.getElementsByTagName("joueur")[0].firstChild.nodeValue;
    var peutJouer = XMLDoc.getElementsByTagName("peutjouer")[0].firstChild.nodeValue;
    var echiquier = XMLDoc.getElementsByTagName("echiquier");
    var couleur = XMLDoc.getElementsByTagName("couleur")[0].firstChild.nodeValue;
    var nbCases = echiquier[0].childNodes.length;
    for(var i = 0; i < nbCases; i++)
    {
       idPiece = '';
       if(echiquier[0].childNodes[i].hasChildNodes())
           idPiece = echiquier[0].childNodes[i].firstChild.nodeValue;

       if (idPiece != ''){
            //$('#'+idPiece).
       }
       idCase = echiquier[0].childNodes[i].getAttribute("id");
       if (idPiece != '')
        $('#'+idCase).append(tableauImages[idPiece]);

    }
   // Taille d'une image en fonction de la taille de notre échiquier
    var largeurCellule = $('#echiquier').attr('width') * 0.085;
    var hauteurCellule = $('#echiquier').attr('height') * 0.085;

    // On définit la taille de chaque image avec les valeurs ci-dessus et on rajouter l'attribut draggable pour qu'elles puissent être déplacées
    $("img").each(function(){
        $(this).attr('width', largeurCellule).attr('height', hauteurCellule);
        
        if (peutJouer== ' true' && $(this).attr('class').substring(5,10) == couleur.substring(1,6))
            $(this).draggable({containment:"#echiquier", scroll: false});
    });
}

function rafraichissement()
{
    setTimeout("loadXMLAsynchroneously('POST', '../gestion/tour.jsp', null, null);", 1000);
}


// Tableau associatif contenant l'ensemble des images !
var tableauImages = new Object();
for(var i = 1 ; i < 9 ; ++i)
{
    tableauImages["pb"+i] = '<img class="pieceBlanc" src="./images/Pion_blanc.png" alt="Pion Blanc '+i+'" id="pb'+i+'" />';
    tableauImages["pn"+i] = '<img class="pieceNoire" src="./images/Pion_noir.png" alt="Pion Noir '+i+'" id="pn'+i+'" />';
}

tableauImages["tn1"]= '<img class="pieceNoire" src="./images/Tour_noir.png" alt="Tour Noir 1" id="tn1" /> ';                 
tableauImages["cn1"]= '<img class="pieceNoire" src="./images/Canasson_noir.png" alt="Canasson Noir 1" id="cn1" />';                     
tableauImages["fn1"]= '<img class="pieceNoire"  src="./images/Fou_noir.png" alt="Fou Noir 2" id="fn1" />';                       
tableauImages["dn"]= '<img class="pieceNoire" src="./images/Dame_noir.png" alt="Dame Noir" id="dn" /> ';                   
tableauImages["rn"]= '<img class="pieceNoire" src="./images/Roi_noir.png" alt="Roi Noir" id="rn" /> ';                      
tableauImages["fn2"]= '<img class="pieceNoire" src="./images/Fou_noir.png" alt="Fou Noir 2" id="fn2" />';            
tableauImages["cn2"]= '<img class="pieceNoire" src="./images/Canasson_noir.png" alt="Canasson Noir 2" id="cn2" />';
tableauImages["tn2"]= '<img class="pieceNoire" src="./images/Tour_noir.png" alt="Tour Noir 2" id="tn2" /> '; 

tableauImages["tb1"]= '<img class="pieceBlanc" src="./images/Tour_blanc.png" alt="Tour Blanc 1" id="tb1" /> ';                 
tableauImages["cb1"]= '<img class="pieceBlanc" src="./images/Canasson_blanc.png" alt="Canasson Blanc 1" id="cb1" />';                     
tableauImages["fb1"]= '<img class="pieceBlanc"  src="./images/Fou_blanc.png" alt="Fou Blanc 2" id="fb1" />';                       
tableauImages["db"]= '<img class="pieceBlanc" src="./images/Dame_blanc.png" alt="Dame Blanc" id="db" /> ';                   
tableauImages["rb"]= '<img class="pieceBlanc" src="./images/Roi_blanc.png" alt="Roi Blanc" id="rb" /> ';                      
tableauImages["fb2"]= '<img class="pieceBlanc" src="./images/Fou_blanc.png" alt="Fou Blanc 2" id="fb2" />';            
tableauImages["cb2"]= '<img class="pieceBlanc" src="./images/Canasson_blanc.png" alt="Canasson Blanc 2" id="cb2" />';
tableauImages["tb2"]= '<img class="pieceBlanc" src="./images/Tour_blanc.png" alt="Tour Blanc 2" id="tb2" /> '; 
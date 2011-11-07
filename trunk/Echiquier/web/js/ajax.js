//BilbliothËque de fonctions AJAX permettant l'envoi de requÍtes au serveur de maniËre asynchrone 
//et le traitement (ajout au corpos du document appelant) de rÈponses en XML conformes ‡ la structure dÈcrite dans l'ÈnoncÈ du devoir.

//--------------------Fonctions principales---------------------

//fonction principale, qui envoie la  requÍte au serveur de faÁon asynchrone et positionne la fonction qui va traiter les donnÈes
function loadXMLAsynchroneously(method, request, parameters, id)
{
    //initialisation de l'objet XMLXhttpRequest
    var xhr = initRequete ();

    //spÈcification de la fonction de traitement ‡ appeler au retour serveur (car chargement asynchrone)
	var XMLDoc = null;
    xhr.onreadystatechange = function() {getXMLDocument(xhr, XMLDoc, id);};
    
    //envoi de la requÍte de chargement du fichier XML au serveur
	//le dernier paramËtre est true ; le chargement du fichier se fera en asynchrone
    xhr.open(method, request, true);
    //encodage des paramËtres dans la requÍte, si la mÈthode est post
	if(parameters && (method == "post" || method == "POST"))
		xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
    xhr.send(parameters);
}

//autre fonction principale, plus simple, qui envoie la requÍte au serveur de faÁon asynchrone et ne se prÈoccupe pas de la rÈponse
//remarque : l'utilisation de cette fonction n'est pas nÈcessaire pour rÈaliser le devoir.
function sendRequestAsynchroneously(method, request, parameters)
{
    //initialisation de l'objet XMLXhttpRequest
    var xhr = initRequete ();

    //envoi de la requÍte de chargement du fichier XML au serveur
	//le dernier paramËtre est true ; le chargement du fichier se fera en asynchrone
    xhr.open(method, request, true);
    //encodage des paramËtres dans la requÍte, si la mÈthode est post
	if(parameters && (method == "post" || method == "POST"))
		xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
	xhr.send(parameters);
}

//--------------------------fonctions secondaires---------------------------

//fonction appelÈe lors de la rÈception de la rÈponse, si la fonction principale loadXMLAsynchroneously() a ÈtÈ utilisÈe.
function getXMLDocument(xhr, XMLDoc, id)
{
    // teste si la rÈponse est disponible
	if (xhr.readyState==4) {
		// teste si la rÈponse est arrivÈe et contient des donnÈes (code HTTP = 200 : OK)
		if (xhr.status == 200) {
			// teste si la rÈponse est arrivÈe en XML ou en texte (peut arriver pour certaines configurations d'Apache)
			if (xhr.responseXML != null) {
				XMLDoc= xhr.responseXML;
			} else if (xhr.responseText != null) {
				//si la rÈponse est en texte, transformation en XML (voir fonction faÁade plus bas)
				XMLDoc= parseFromString(xhr.responseText);
			}
			//DÈcommentez la ligne suivante pour voir le contenu XML obtenu (ne marche qu'avec FF)
			//alert((new XMLSerializer()).serializeToString(XMLDoc));
			
			//appel de la fonction de traitement qui va ajouter les donnÈes au corps de la page (‡ Ècrire)
			mettreEnPlace(XMLDoc);
		
		//teste si le code de statut est autre que le code renvoyÈ en cas d'absence de nouveaux messages.
		//Remarque : le code 1223 provient d'un bug avec IE : http://trac.dojotoolkit.org/ticket/2418
		} else if (xhr.status != 204 && xhr.status != 1223) {
		   alert("Un problËme est survenu avec la requÍte : ");
        }
	}
}

//----------------------Fonctions faÁades----------------------------
//permettent de masquer les diffÈrences entre les navigateurs
//remarque : ces fonctions ont uniquement ÈtÈ testÈes avec FF et IE7

//fonction faÁade qui teste le type de navigateur et renvoie un objet capable de se charger de l'envoi de la requÍte.
function initRequete()
{
    var xhr = null;
    if (window.XMLHttpRequest) { 
        xhr = new XMLHttpRequest();
    }
    else if (window.ActiveXObject) 
    {
        xhr = new ActiveXObject("Microsoft.XMLHTTP");
    }
	return xhr;
}

//fonction faÁade qui reÁoit une chaÓne de caractËres et la parse en XML pour renvoyer un objet DOM.
//remarque : le XML doit Ítre bien formÈ, sans quoi l'erreur de parsing bloque l'exÈcution du script.
function parseFromString (docTXT) {
	// code for IE
	if (window.ActiveXObject)
  	{
		var XMLDoc=new ActiveXObject("Microsoft.XMLDOM");
		XMLDoc.async="false";
		XMLDoc.loadXML(docTXT);
	}
	// code for Mozilla, Firefox, Opera, etc.
	else
  	{
		var parser=new DOMParser();
		var XMLDoc=parser.parseFromString(docTXT,"text/xml");
	}
	return XMLDoc;
}

//fonction faÁade qui renvoie le texte contenu dans un ÈlÈment XML
function getXMLTextContent(source)
{
	if (source.textContent != null) {
		//Gecko
		return source.textContent;
	} else {
		//IE
		return source.text;
	}
}

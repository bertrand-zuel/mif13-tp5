<%@page import="Modele.Joueur"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<jsp:useBean id="cP" scope="application" class="Controleur.ControlePartie"/>
<jsp:useBean id="echiquier" scope="application" class="Modele.Echiquier"/>
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
    <head>
	<link rel="stylesheet" href="css/echiquier.css" />
        <script src="js/jQuery.js"></script>
        <script src="js/fonctions.js"></script>
        <script src="js/jquery-ui-1.8.16.custom.min.js"></script>
        <script src="js/ajax.js"></script>
	<title>Echiquier</title>	
    </head>
    <body onload="loadXMLAsynchroneously('POST', 'gestion/tour.jsp', null, null);">
	<!-- Construction de l'échiquier -->
        <div id="bandeauTitre"><h1>Jeu d'échecs</h1></div>         
	<div id ="divechiquier">
            <table id="echiquier">
                <tr class="pair">
                    <th>8</th>
                    <td id="A8" class="caseBlanche"></td>
                    <td id="B8" class="caseGrise"></td>
                    <td id="C8" class="caseBlanche"></td>
                    <td id="D8" class="caseGrise"></td>
                    <td id="E8" class="caseBlanche"></td>
                    <td id="F8" class="caseGrise"></td>
                    <td id="G8" class="caseBlanche"></td>
                    <td id="H8" class="caseGrise"></td>
                </tr>
                <tr class="impair">
                    <th>7</th>
                    <td id="A7" class="caseGrise"></td>
                    <td id="B7" class="caseBlanche"></td>
                    <td id="C7" class="caseGrise"></td>
                    <td id="D7" class="caseBlanche"></td>
                    <td id="E7" class="caseGrise"></td>
                    <td id="F7" class="caseBlanche"></td>
                    <td id="G7" class="caseGrise"></td>
                    <td id="H7" class="caseBlanche"></td>
                </tr>
                <tr>
                    <th>6</th>
                    <td id="A6" class="caseBlanche"></td>
                    <td id="B6" class="caseGrise"></td>
                    <td id="C6" class="caseBlanche"></td>
                    <td id="D6" class="caseGrise"></td>
                    <td id="E6" class="caseBlanche"></td>
                    <td id="F6" class="caseGrise"></td>
                    <td id="G6" class="caseBlanche"></td>
                    <td id="H6" class="caseGrise"></td>
                </tr>
                <tr>
                    <th>5</th>
                    <td id="A5" class="caseGrise"></td>
                    <td id="B5" class="caseBlanche"></td>
                    <td id="C5" class="caseGrise"></td>
                    <td id="D5" class="caseBlanche"></td>
                    <td id="E5" class="caseGrise"></td>
                    <td id="F5" class="caseBlanche"></td>
                    <td id="G5" class="caseGrise"></td>
                    <td id="H5" class="caseBlanche"></td>
                </tr>
                <tr>
                    <th>4</th>
                    <td id="A4" class="caseBlanche"></td>
                    <td id="B4" class="caseGrise"></td>
                    <td id="C4" class="caseBlanche"></td>
                    <td id="D4" class="caseGrise"></td>
                    <td id="E4" class="caseBlanche"></td>
                    <td id="F4" class="caseGrise"></td>
                    <td id="G4" class="caseBlanche"></td>
                    <td id="H4" class="caseGrise"></td>
                </tr>
                <tr>
                    <th>3</th>
                    <td id="A3" class="caseGrise"></td>
                    <td id="B3" class="caseBlanche"></td>
                    <td id="C3" class="caseGrise"></td>
                    <td id="D3" class="caseBlanche"></td>
                    <td id="E3" class="caseGrise"></td>
                    <td id="F3" class="caseBlanche"></td>
                    <td id="G3" class="caseGrise"></td>
                    <td id="H3" class="caseBlanche"></td>
                </tr>
                <tr>
                    <th>2</th>
                    <td id="A2" class="caseBlanche"></td>
                    <td id="B2" class="caseGrise"></td>
                    <td id="C2" class="caseBlanche"></td>
                    <td id="D2" class="caseGrise"></td>
                    <td id="E2" class="caseBlanche"></td>
                    <td id="F2" class="caseGrise"></td>
                    <td id="G2" class="caseBlanche"></td>
                    <td id="H2" class="caseGrise"></td>
                </tr>
                <tr>
                    <th>1</th>
                    <td id="A1"  class="caseGrise"></td>
                    <td id="B1" class="caseBlanche"></td>
                    <td id="C1" class="caseGrise"></td>
                    <td id="D1" class="caseBlanche"></td>
                    <td id="E1" class="caseGrise"></td>
                    <td id="F1" class="caseBlanche"></td>
                    <td id="G1" class="caseGrise"></td>
                    <td id="H1" class="caseBlanche"></td>
                </tr>
                <tr>
                    <th></th>
                    <th>A</th>
                    <th>B</th>
                    <th>C</th>
                    <th>D</th>
                    <th>E</th>
                    <th>F</th>
                    <th>G</th>
                    <th>H</th>
                </tr>
            </table>                     
        </div>
        
        <div id="info">
            <%  out.println("Votre pseudo : "+session.getAttribute("pseudo")+"<br />");
                out.println("Votre couleur : "+session.getAttribute("couleur")+"<br />");
                Joueur moi = cP.getJoueur((String)session.getAttribute("pseudo"));
                out.println("Je peux jouer? "+cP.peutJouer(moi));
            %>
        </div>
    </body>
</html>

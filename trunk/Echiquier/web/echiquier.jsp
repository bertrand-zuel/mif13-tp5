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
                
	<div id ="draggable">
            <table id="echiquier">
                <tr class="pair">
                    <th>8</th>
                    <td id="A8" class="caseBlanche">
                        <img class="piece" src="./images/Tour_noir.png" alt="Tour Noir 1" id="tn1" />
                    </td>
                    <td id="B8" class="caseGrise">
                        <img class="piece" src="./images/Canasson_noir.png" alt="Canasson Noir 1" id="cn1" />
                    </td>
                    <td id="C8" class="caseBlanche">
                        <img class="piece" src="./images/Fou_noir.png" alt="Fou Noir 2" id="fn1" />
                    </td>
                    <td id="D8" class="caseGrise">
                        <img class="piece" src="./images/Dame_noir.png" alt="Dame Noir" id="dn" />
                    </td>
                    <td id="E8" class="caseBlanche">     
                        <img class="piece" src="./images/Roi_noir.png" alt="Roi Noir" id="rn" />
                    </td>
                    <td id="F8" class="caseGrise">
                        <img class="piece" src="./images/Fou_noir.png" alt="Fou Noir 2" id="fn2" />
                    </td>
                    <td id="G8" class="caseBlanche">
                        <img class="piece" src="./images/Canasson_noir.png" alt="Canasson Noir 2" id="cn2" />
                    </td>
                    <td id="H8" class="caseGrise">
                        <img class="piece" src="./images/Tour_noir.png" alt="Tour Noir 2" id="tn2" />
                    </td>
                </tr>
                <tr class="impair">
                    <th>7</th>
                    <td id="A7" class="caseGrise">
                        <img class="piece" src="./images/Pion_noir.png" alt="Pion Noir 1" id="pn1"/>
                    </td>
                    <td id="B7" class="caseBlanche">
                        <img class="piece" src="./images/Pion_noir.png" alt="Pion Noir 2" id="pn2"/>
                    </td>
                    <td id="C7" class="caseGrise">
                        <img class="piece" src="./images/Pion_noir.png" alt="Pion Noir 3" id="pn3"/>
                    </td>
                    <td id="D7" class="caseBlanche">
                        <img class="piece" src="./images/Pion_noir.png" alt="Pion Noir 4" id="pn4"/>
                    </td>
                    <td id="E7" class="caseGrise">
                        <img class="piece" src="./images/Pion_noir.png" alt="Pion Noir 5" id="pn5"/>
                    </td>
                    <td id="F7" class="caseBlanche">
                        <img class="piece" src="./images/Pion_noir.png" alt="Pion Noir 6" id="pn6"/>
                    </td>
                    <td id="G7" class="caseGrise">
                        <img class="piece" src="./images/Pion_noir.png" alt="Pion Noir 7" id="pn7"/>
                    </td>
                    <td id="H7" class="caseBlanche">
                        <img class="piece" src="./images/Pion_noir.png" alt="Pion Noir 8" id="pn8"/>
                    </td>
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
                    <td id="A2" class="caseBlanche">
                        <img class="piece" src="./images/Pion_blanc.png" alt="Pion Blanc 1" id="pb1" />
                    </td>
                    <td id="B2" class="caseGrise">
                        <img class="piece" src="./images/Pion_blanc.png" alt="Pion Blanc 2" id="pb2" />
                    </td>
                    <td id="C2" class="caseBlanche">
                        <img class="piece" src="./images/Pion_blanc.png" alt="Pion Blanc 3" id="pb3" />
                    </td>
                    <td id="D2" class="caseGrise">
                        <img class="piece" src="./images/Pion_blanc.png" alt="Pion Blanc 4" id="pb4" />
                    </td>
                    <td id="E2" class="caseBlanche">
                        <img class="piece" src="./images/Pion_blanc.png" alt="Pion Blanc 5" id="pb5" />
                    </td>
                    <td id="F2" class="caseGrise">
                        <img class="piece" src="./images/Pion_blanc.png" alt="Pion Blanc 6" id="pb6" />
                    </td>
                    <td id="G2" class="caseBlanche">
                        <img class="piece" src="./images/Pion_blanc.png" alt="Pion Blanc 7" id="pb7" />
                    </td>
                    <td id="H2" class="caseGrise">
                        <img class="piece" src="./images/Pion_blanc.png" alt="Pion Blanc 8" id="pb8" />
                    </td>
                </tr>
                <tr>
                    <th>1</th>
                    <td id="A1"  class="caseGrise">
                        <img class="piece" src="./images/Tour_blanc.png" alt="Tour Blanc 1" id="tb1"/>
                    </td>
                    <td id="B1" class="caseBlanche">
                        <img class="piece" src="./images/Canasson_blanc.png" alt="Canasson Blanc 1" id="cb1"/>
                    </td>
                    <td id="C1" class="caseGrise">
                        <img class="piece" src="./images/Fou_blanc.png" alt="Fou Blanc 1" id="fb1"/>
                    </td>
                    <td id="D1" class="caseBlanche">
                        <img class="piece" src="./images/Dame_blanc.png" alt="Dame Blanc" id="db"/>
                    </td>
                    <td id="E1" class="caseGrise">
                        <img class="piece" src="./images/Roi_blanc.png" alt="Roi Blanc" id="rb"/>
                    </td>
                    <td id="F1" class="caseBlanche">
                        <img class="piece" src="./images/Fou_blanc.png" alt="Fou Blanc 2" id="fb2"/>
                    </td>
                    <td id="G1" class="caseGrise">
                        <img class="piece" src="./images/Canasson_blanc.png" alt="Canasson Blanc 2" id="cb2"/>
                    </td>
                    <td id="H1" class="caseBlanche">
                        <img class="piece" src="./images/Tour_blanc.png" alt="Tour Blanc 2" id="tb2"/>
                    </td>
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

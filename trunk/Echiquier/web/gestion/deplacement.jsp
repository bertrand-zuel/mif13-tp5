<%@page import="Modele.Joueur"%>
<jsp:useBean id="cP" scope="application" class="Controleur.ControlePartie"/>
<jsp:useBean id="Ec" scope="application" class="Modele.Echiquier"/>

<%
    String idPiece = request.getParameter("idPiece");
    String idCaseCible = request.getParameter("idCaseCible");
    cP.deplacement();
    Ec.deplacement(idPiece, idCaseCible);
%>
<%@page contentType="application/xml" pageEncoding="UTF-8"%>
<%@page import="Modele.Joueur"%>
<jsp:useBean id="cP" scope="application" class="Controleur.ControlePartie"/>
<jsp:useBean id="Ec" scope="application" class="Modele.Echiquier"/>

<% Joueur moi = cP.getJoueur((String)session.getAttribute("pseudo")); %>

<tour>
    <peutjouer> <% out.print(cP.peutJouer(moi)); %></peutjouer>
    <joueur> <% out.print(session.getAttribute("pseudo"));%> </joueur>
    <% out.print(Ec.echiquierToXml());  %>
</tour>
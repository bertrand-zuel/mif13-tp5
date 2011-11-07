<%@page import="Modele.Joueur"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<jsp:useBean id="cP" scope="application" class="Controleur.ControlePartie"/>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Jouer une partie</title>
    </head>
    <body>
    <%
        String couleur = null;
        String pseudo = null;
        int nbJoueurs = cP.getNbJoueurs();

    
        if(request.getMethod().equalsIgnoreCase("post"))
        {
            pseudo = request.getParameter("pseudo");
            couleur = request.getParameter("couleur");
            
            if(couleur != null && couleur != "" && nbJoueurs < 2)
            {
                Joueur joueur = new Joueur(pseudo, couleur);
                cP.ajouterJoueur(joueur);
                session.setAttribute("pseudo", pseudo);
                session.setAttribute("couleur", couleur);
                response.sendRedirect("echiquier.jsp");
            }
            else
            {
                response.sendRedirect("index.jsp");
            }
        } 
       
        String couleurChoisie = null;
        Joueur joueur1 = null;

        if(nbJoueurs == 1)
        {
            joueur1 = cP.getJoueur(0);
            couleurChoisie = joueur1.getCouleur();
        }
    %> 
    <h1>Jouer aux echecs</h1>
    <% if(nbJoueurs != 2){%>
    <div id="formulaire">
            <form action="index.jsp" method="POST">
                <label for="pseudo">Entrez votre Pseudo : </label>
                <input type="text" name="pseudo" id="pseudo"/>
                <br /> <br />
                <% if(nbJoueurs == 0){%>
                    <label for="couleur">Quelle couleur voulez-vous?</label>
                    <select name="couleur" id="couleur">
                        <option value="Blanche">Blanche</option>
                        <option value="Noire">Noire</option>
                    </select>
                    <br /> <br />
                    <input type="submit" value="Demarrer une nouvelle partie"/>
                <%}%>
                <% if(nbJoueurs == 1){%>
                    <label for="couleur">Quelle couleur voulez-vous?</label>
                    <% if(couleurChoisie.equals("blanche")){%>
                    <select name="couleur" id="couleur">
                        <option value="noire">Noire</option>
                    </select>
                    <%}else{%>
                        <select name="couleur" id="couleur">
                            <option value="blanche">Blanche</option>
                        </select>
                    <%}%>
                    <br /> <br />
                    <input type="submit" value="Rejoindre la partie"/>
                <%}%>
            </form>
        </div>
        <%}else{%>
            2 joueurs sont déjà dans la partie, Veuillez revenir plus tard.
        <%}%>
    </body>
</html>

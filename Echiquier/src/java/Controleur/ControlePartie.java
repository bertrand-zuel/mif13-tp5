package Controleur;

import Modele.Joueur;
import java.util.ArrayList;

public class ControlePartie{
    private ArrayList<Joueur> joueurs = new ArrayList<Joueur>();
    private int tourJeu;
    
    public ControlePartie()
    {
        this.tourJeu = 0;
    }
    
    public boolean ajouterJoueur(Joueur joueur){
        if(joueurs.size() >= 2)
        {
            return false;
        }
        this.joueurs.add(joueur);
        
        return true;
    }
    
    public Joueur getJoueur(int i)
    {
        return this.joueurs.get(i);
    }
    
    public Joueur getJoueur(String pseudo)
    {
        for(int i=0; i<2; i++)
        {
            if(this.joueurs.get(i).getPseudo().equalsIgnoreCase(pseudo))
                return this.joueurs.get(i);
        }
        
        return null;
    }
    
    public int getNbJoueurs(){
        return this.joueurs.size();
    }
    
    public boolean peutJouer(Joueur joueur){
        boolean peutJouer = false;
        String couleur = joueur.getCouleur();
        
        if(couleur.equalsIgnoreCase("blanche") && this.tourJeu == 0)
            peutJouer = true;
        else if(couleur.equalsIgnoreCase("noire") && this.tourJeu == 1)
            peutJouer = true;
        
        return peutJouer;
    }
    
    public void deplacement(){
        if(this.tourJeu == 0)
            this.tourJeu = 1;
        else
            this.tourJeu = 0;
    }
    
    public int getTourJeu(){
        return this.tourJeu;
    }
}

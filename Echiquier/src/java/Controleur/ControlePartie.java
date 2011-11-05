package Controleur;

import Modele.Joueur;
import java.util.ArrayList;

public class ControlePartie{
    private ArrayList<Joueur> joueurs = new ArrayList<Joueur>();
    
    public ControlePartie(){}
    
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
    
    public int getNbJoueurs(){
        return this.joueurs.size();
    }
}

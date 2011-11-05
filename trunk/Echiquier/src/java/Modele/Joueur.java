/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package Modele;

public class Joueur {
    private String couleur;
    private String pseudo;
    
    public Joueur(String pseudo, String couleur){
        this.pseudo = pseudo;
        this.couleur = couleur;
    }
    
    public String getPseudo(){
        return this.pseudo;
    }
    
    public String getCouleur(){
        return this.couleur;
    }
}

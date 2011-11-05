package Modele;

public class Case {
    private int occupee; /* 0 non occupée, 1 occupée */
    private char couleurPiece; /* Si pièce dessus, b ou n */
    private String idCase;
    private String idPiece;
    
    public Case(String idCase, int occupee){
        this.idCase = idCase;
        this.occupee = occupee;
    }
    
    public String getIdCase(){
        return this.idCase;
    }
    
    public String getIdPiece(){
        return this.idPiece;
    }
}

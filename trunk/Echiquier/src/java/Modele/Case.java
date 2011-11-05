package Modele;

public class Case {
    private int occupee; /* 0 non occupée, 1 occupée */
    private char couleurPiece; /* Si pièce dessus, b ou n */
    private int x;
    private int y;
    
    public Case(int x, int y, int occupee)
    {
        this.x = x;
        this.y = y;
        this.occupee = occupee;
    }
    
    public int getX(){
        return this.x;
    }
    
    public int getY(){
        return this.y;
    }
}

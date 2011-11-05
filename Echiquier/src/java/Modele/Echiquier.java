package Modele;


public class Echiquier {
    private Case[][] plateau = new Case[8][8];
    
    public Echiquier(){
        // A faire
    }
    
    public void deplacer(String idCaseSource, String idCaseCible){
        // A faire
    }
    
    public Position getCoordonnees(String idCase)
    {
        Position coord = new Position (-1, -1);;
        for (int y=0; y<8; y++)
        {
            for (int x=0; x<8;x++)
            {
                if (plateau[x][y].getIdCase().equals(idCase))
                    coord.setPosition (x, y);
            }
        }
        return coord;
    }
}

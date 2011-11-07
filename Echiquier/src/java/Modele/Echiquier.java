package Modele;


public class Echiquier {
    private Case[][] plateau = new Case[8][8];
    
    public Echiquier(){
        char[] abcisse = {'X', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'};
        char[] ordonnee = {'X', '8', '7', '6', '5', '4', '3', '2', '1'};
        
        for(int y=1; y<9; y++)
        {
            for(int x=1; x<9; x++)
            {
                String idCase = String.valueOf(abcisse[x])+String.valueOf(ordonnee[y]);
                String idPiece = "";
                
                if(idCase.equals("A8"))
                    idPiece = "tn1";
                else if(idCase.equals("B8"))
                    idPiece = "cn1";
                else if(idCase.equals("C8"))
                    idPiece = "fn1";
                else if(idCase.equals("D8"))
                    idPiece = "dn";
                else if(idCase.equals("E8"))
                    idPiece = "rn";
                else if(idCase.equals("F8"))
                    idPiece = "fn2";
                else if(idCase.equals("G8"))
                    idPiece = "cn2";
                else if(idCase.equals("H8"))
                    idPiece = "tn2";
                else if(idCase.equals("A7"))
                    idPiece = "pn1";
                else if(idCase.equals("B7"))
                    idPiece = "pn2";
                else if(idCase.equals("C7"))
                    idPiece = "pn3";
                else if(idCase.equals("D7"))
                    idPiece = "pn4";
                else if(idCase.equals("E7"))
                    idPiece = "pn5";
                else if(idCase.equals("F7"))
                    idPiece = "pn6";
                else if(idCase.equals("G7"))
                    idPiece = "pn7";
                else if(idCase.equals("H7"))
                    idPiece = "pn8";
                else if(idCase.equals("A1"))
                    idPiece = "tb1";
                else if(idCase.equals("B1"))
                    idPiece = "cb1";
                else if(idCase.equals("C1"))
                    idPiece = "fb1";
                else if(idCase.equals("D1"))
                    idPiece = "db";
                else if(idCase.equals("E1"))
                    idPiece = "rb";
                else if(idCase.equals("F1"))
                    idPiece = "fb2";
                else if(idCase.equals("G1"))
                    idPiece = "cb2";
                else if(idCase.equals("H1"))
                    idPiece = "tb2";
                else if(idCase.equals("A2"))
                    idPiece = "pb1";
                else if(idCase.equals("B2"))
                    idPiece = "pb2";
                else if(idCase.equals("C2"))
                    idPiece = "pb3";
                else if(idCase.equals("D2"))
                    idPiece = "pb4";
                else if(idCase.equals("E2"))
                    idPiece = "pb5";
                else if(idCase.equals("F2"))
                    idPiece = "pb6";
                else if(idCase.equals("G2"))
                    idPiece = "pb7";
                else if(idCase.equals("H2"))
                    idPiece = "pb8";
                    
                Case newCase = new Case(idCase, idPiece);
                
                if(!idPiece.equals(""))
                {
                    if(y == 1 || y == 2)
                       newCase.setCouleurPiece("blanche");
                    else
                        newCase.setCouleurPiece("noire");
                }
                
                this.plateau[x-1][y-1] = newCase;
            }
        }
    }
    
    public void deplacer(String idCaseSource, String idCaseCible){
        // A faire
    }
    
    public Case getCase(int x, int y){
        return this.plateau[x][y];
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
    
    public String echiquierToXml(){
        String echiquierXml = "<echiquier>";
        for(int y=0; y<8; y++)
        {
            for(int x=0; x<8; x++)
            {
                echiquierXml += this.plateau[x][y].caseToXml();
            }
        }
        echiquierXml += "</echiquier>";
        
        return echiquierXml;
    }
    
    public Position getCasedePiece(String idPiece)
    {
        Position coord = new Position (-1, -1);;
        for (int y=0; y<8; y++)
        {
            for (int x=0; x<8;x++)
            {
                if (plateau[x][y].getIdPiece().equals(idPiece))
                    coord.setPosition (x, y);
            }
        }
        return coord;
    }
    
    public void deplacement(String idPiece, String idCaseCible){
        Position positionCible = getCoordonnees(idCaseCible);
        Position positionDepart = getCasedePiece(idPiece);
        
        this.plateau[positionDepart.getX()][positionDepart.getY()].setIdPiece("");
        this.plateau[positionCible.getX()][positionCible.getY()].setIdPiece(idPiece);
    }
}

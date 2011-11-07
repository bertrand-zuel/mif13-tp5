package Modele;

public class Case {
    private String couleurPiece; /* Si pièce dessus, b ou n */
    private String idCase;
    private String idPiece;
    
    public Case(String idCase, String idPiece){
        this.idCase = idCase;
        this.idPiece = idPiece;
    }
    
    public String getIdCase(){
        return this.idCase;
    }
    
    public String getIdPiece(){
        return this.idPiece;
    }
    
    public String getCouleurPiece(){
        return this.couleurPiece;
    }
    
    public void setCouleurPiece(String couleur){
        this.couleurPiece = couleur;
    }
    
    public String caseToXml(){
        return "<case id=\""+this.idCase+"\">"+this.idPiece+"</case>";
    }
    
    public void setIdPiece(String idPiece){
        this.idPiece = idPiece;
    }
}

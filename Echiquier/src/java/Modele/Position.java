/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package Modele;

/**
 *
 * @author mizho
 */
class Position {
    
    private int x;
    private int y;
    
    Position (int x, int y)
    {
        this.x = x;
        this.y = y;
    }
    
    public void setPosition (int x, int y){
        this.x = x;
        this.y = y;
    }
    
    public int getX(){return this.x;}
    
    public int getY(){return this.y;}
    
}

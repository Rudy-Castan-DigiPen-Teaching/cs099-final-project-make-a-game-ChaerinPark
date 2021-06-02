// Name       : Chaerin Park
// Assignment : final_project - make_a_game
// Course     : CS099
// Spring 2021


class PianoKeys
{
    constructor(x, y)
    {
        this.x = x;
        this.y = y;
    }

    draw()
    {
        for(let column = 0; column < 7; column++)
        {
            rectMode(CENTER);
            strokeWeight(2);
            strokeJoin(ROUND);
            stroke(0);
            fill(255);        
            rect(x, y + (key_width*column+1), key_width, key_height);
        }
    }

}
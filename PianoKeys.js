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

    update()
    {
        
    }

    draw_whiteKey(x, y)
    {
        for(let column = 0; column < 7; column++)
        {
            push();
            strokeWeight(2);
            strokeJoin(ROUND);
            stroke(0);
            fill(255);        
            rect(x + (white_key_width*column+1), y, white_key_width, white_key_height);
            pop();
        }
    }

    draw_blackKey(x, y)
    {
        for(let column = 0; column < 6; column++)
        {
            if(column !== 2)
            {
                push();
                strokeWeight(2);
                strokeJoin(ROUND);
                stroke(0);
                fill(0);        
                rect(x + ((black_key_width + black_key_interval)*column+1), y, black_key_width, black_key_height);    
                pop();
            }
        }
    }

}
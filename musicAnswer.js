// Name       : Chaerin Park
// Assignment : final_project - make_a_game
// Course     : CS099
// Spring 2021


//draw player's keys
//when key is pressed, color of key is changed from white or black to hot pink.
class musicAnswer
{
    constructor(x, y)
    {
        this.x = x;
        this.y = y;
    }

    draw_player_whiteKey(x, y)
    {
        push();
        strokeWeight(2);
        strokeJoin(ROUND);
        stroke(0);
        for(let column=0; column < 7; column++)
        {
            fill(255);        
            rect(x + (white_key_width*column+1), y, white_key_width, white_key_height);
            textSize(60);
            text(What_Key_W[column], x + white_key_width/2 + (white_key_width*column), y + white_key_height*6/7);
        }
        if(keyIsPressed === true)
        {
            push();
            fill(255, 90, 110);
            if(key === 'z')
            {
                rect(x+1, y, white_key_width, white_key_height);
            } else if(key === 'x')
            {
                rect(x + white_key_width+1, y, white_key_width, white_key_height);
            } else if(key === 'c')
            {
                rect(x + (white_key_width*2+1), y, white_key_width, white_key_height);
            } else if(key === 'v')
            {
                rect(x + (white_key_width*3+1), y, white_key_width, white_key_height);
            } else if(key === 'b')
            {
                rect(x + (white_key_width*4+1), y, white_key_width, white_key_height);
            } else if(key === 'n')
            {
                rect(x + (white_key_width*5+1), y, white_key_width, white_key_height);
            } else if(key === 'm')
            {
                rect(x + (white_key_width*6+1), y, white_key_width, white_key_height);
            }
            pop();
            for(let column=0; column < 7; column++)
            {
                fill(255);        
                text(What_Key_W[column], x + white_key_width/2 + (white_key_width*column), y + white_key_height*6/7);
            }
        }
        pop();
    }

    draw_player_blackKey(x, y)
    {
        push();
        strokeWeight(2);
        strokeJoin(ROUND);
        stroke(0);
        for(let column = 0; column < 6; column++)
        {
            if(column !== 2)
            {
                fill(0);        
                rect(x + ((black_key_width + black_key_interval)*column+1), y, black_key_width, black_key_height);    
                fill(255);
                textSize(55);
                text(What_Key_B[column], x + + black_key_width/2 + ((black_key_width+black_key_interval)*column), y + black_key_height*5/6);
            }
        }

        if(keyIsPressed === true)
        {
            push();
            fill(255, 90, 110);
            if(key === 's')
            {
                rect((x+1), y, black_key_width, black_key_height);    
            } else if(key === 'd')
            {
                rect((x + (black_key_width + black_key_interval)+1), y, black_key_width, black_key_height);    
            } else if(key === 'g')
            {
                rect((x + (black_key_width + black_key_interval)*3+1), y, black_key_width, black_key_height);    
            } else if(key === 'h')
            {
                rect((x + (black_key_width + black_key_interval)*4+1), y, black_key_width, black_key_height);    
            } else if(key === 'j')
            {
                rect((x + (black_key_width + black_key_interval)*5+1), y, black_key_width, black_key_height);    
            }
            pop();
            for(let column = 0; column < 6; column++)
            {
                if(column !== 2)
                {
                    fill(255);
                    text(What_Key_B[column], x + + black_key_width/2 + ((black_key_width+black_key_interval)*column), y + black_key_height*5/6);
                }
            }
        }
        pop();
    }
}

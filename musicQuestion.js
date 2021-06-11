// Name       : Chaerin Park
// Assignment : final_project - make_a_game
// Course     : CS099
// Spring 2021

let musicQ;
let code;

class musicQuestion
{
    constructor()
    {
        musicQ = [];
        code = [pianoC, pianoCs, pianoD, pianoDs, pianoE, pianoF, pianoFs, pianoG, pianoGs, pianoA, pianoAs, pianoB];
    }

    update_Lv1()
    {
        musicQ.push(random(code));
        musicQ.push(random(code));
        musicQ.push(random(code));
        for(let i=0; i<4; i++)
        {
            musicQ[i].play(i);
        }
    }

    draw_character_whiteKey(x, y)
    {
        push();
        strokeWeight(2);
        strokeJoin(ROUND);
        stroke(0);
        for(let column=0; column < 7; column++)
        {
            fill(255);        
            rect(x + ((white_key_width*0.5)*column+1), y, (white_key_width*0.5), (white_key_height*0.5));
        }
        pop();
    }

    draw_character_blackKey(x, y)
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
                rect(x + (((black_key_width + black_key_interval)*0.5)*column+1), y, (black_key_width*0.5), (black_key_height*0.5));    
                pop();
            }
        }
    }
}

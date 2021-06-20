// Name       : Chaerin Park
// Assignment : final_project - make_a_game
// Course     : CS099
// Spring 2021

let musicQ_sound = [];
let musicQ = [];
let PianoCode = [];
let CelestaCode = [];
let AccordionCode = [];

class musicQuestion
{
    constructor(x, y)
    {
        this.x = x;
        this.y = y;
        PianoCode = [pianoC, pianoCs, pianoD, pianoDs, pianoE, pianoF, pianoFs, pianoG, pianoGs, pianoA, pianoAs, pianoB];
        CelestaCode = [celestaC, celestaCs, celestaD, celestaDs, celestaE, celestaF, celestaFs, celestaG, celestaGs, celestaA, celestaAs, celestaB]
        AccordionCode = [accordionC, accordionCs, accordionD, accordionDs, accordionE, accordionF, accordionFs, accordionG, accordionGs, accordionA, accordionAs, accordionB]
    }

    draw_character_whiteKey(x, y)
    {
        push();
        strokeWeight(2);
        strokeJoin(ROUND);
        stroke(0);
        textSize(30);
        for(let column=0; column < 7; column++)
        {
            fill(255);        
            rect(x + ((white_key_width*0.5)*column+1), y, (white_key_width*0.5), (white_key_height*0.5));
        }
        fill(255, 90, 110);
        if(pianoC.isPlaying() === true || celestaC.isPlaying() === true || accordionC.isPlaying() === true)
        {
            rect(x+1, y, (white_key_width*0.5), (white_key_height*0.5));
        }
        if(pianoD.isPlaying() === true || celestaD.isPlaying() === true || accordionD.isPlaying() === true)
        {
            rect(x + ((white_key_width*0.5)+1), y, (white_key_width*0.5), (white_key_height*0.5));
        }
        if(pianoE.isPlaying() === true || celestaE.isPlaying() === true || accordionE.isPlaying() === true)
        {
            rect(x + ((white_key_width*0.5)*2+1), y, (white_key_width*0.5), (white_key_height*0.5));
        }
        if(pianoF.isPlaying() === true || celestaF.isPlaying() === true || accordionF.isPlaying() === true)
        {
            rect(x + ((white_key_width*0.5)*3+1), y, (white_key_width*0.5), (white_key_height*0.5));
        }
        if(pianoG.isPlaying() === true || celestaG.isPlaying() === true || accordionG.isPlaying() === true)
        {
            rect(x + ((white_key_width*0.5)*4+1), y, (white_key_width*0.5), (white_key_height*0.5));
        }
        if(pianoA.isPlaying() === true || celestaA.isPlaying() === true || accordionA.isPlaying() === true)
        {
            rect(x + ((white_key_width*0.5)*5+1), y, (white_key_width*0.5), (white_key_height*0.5));
        }
        if(pianoB.isPlaying() === true || celestaB.isPlaying() === true || accordionB.isPlaying() === true)
        {
            rect(x + ((white_key_width*0.5)*6+1), y, (white_key_width*0.5), (white_key_height*0.5));
        }
        for(let column=0; column < 7; column++)
        {
            fill(255);        
            text(What_Key_W[column], x + ((white_key_width*0.5)*column+35), y + white_key_height*5/12);    
        }
        pop();
    }

    draw_character_blackKey(x, y)
    {
        push();
        strokeWeight(2);
        strokeJoin(ROUND);
        stroke(0);
        textSize(30);
        for(let column = 0; column < 6; column++)
        {
            if(column !== 2)
            {
                fill(0);        
                rect(x + (((black_key_width + black_key_interval)*0.5)*column+1), y, (black_key_width*0.5), (black_key_height*0.5));
            }
        }
        fill(255, 90, 110);
        if(pianoCs.isPlaying() === true || celestaCs.isPlaying() === true || accordionCs.isPlaying === true)
        {
        rect(x+1, y, (black_key_width*0.5), (black_key_height*0.5));    
        }
        if(pianoDs.isPlaying() === true || celestaDs.isPlaying() === true || accordionDs.isPlaying === true)
        {
        rect(x + (((black_key_width + black_key_interval)*0.5)+1), y, (black_key_width*0.5), (black_key_height*0.5));    
        }
        if(pianoFs.isPlaying() === true || celestaFs.isPlaying() === true || accordionFs.isPlaying === true)
        {
        rect(x + (((black_key_width + black_key_interval)*0.5)*3+1), y, (black_key_width*0.5), (black_key_height*0.5));    
        }
        if(pianoGs.isPlaying() === true || celestaGs.isPlaying() === true || accordionGs.isPlaying === true)
        {
        rect(x + (((black_key_width + black_key_interval)*0.5)*4+1), y, (black_key_width*0.5), (black_key_height*0.5));    
        }
        if(pianoAs.isPlaying() === true || celestaAs.isPlaying() === true || accordionAs.isPlaying === true)
        {
        rect(x + (((black_key_width + black_key_interval)*0.5)*5+1), y, (black_key_width*0.5), (black_key_height*0.5));    
        }

        for(let column = 0; column < 6; column++)
        {
            if(column !== 2)
            {
                fill(255);
                text(What_Key_B[column], x + (((black_key_width + black_key_interval)*0.5)*column+25), y + black_key_height*5/12);    
            }
        }
        pop();
    }
}

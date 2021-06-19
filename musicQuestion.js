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
        for(let i=0; i<musicQ_sound.length; i++)
        {
            fill(255, 90, 110);
            if((musicQ_sound[i] == pianoC || musicQ_sound[i] == celestaC || musicQ_sound[i] == accordionC) && musicQ_sound[musicQ_sound.length-2].isPlaying() === true)
            {
                rect(x+1, y, (white_key_width*0.5), (white_key_height*0.5));
            } else if((musicQ_sound[i] == pianoD || musicQ_sound[i] == celestaD || musicQ_sound[i] == accordionD) && musicQ_sound[musicQ_sound.length-2].isPlaying() === true)
            {
                rect(x + ((white_key_width*0.5)+1), y, (white_key_width*0.5), (white_key_height*0.5));
            } else if((musicQ_sound[i] == pianoE || musicQ_sound[i] == celestaE || musicQ_sound[i] == accordionE) && musicQ_sound[musicQ_sound.length-2].isPlaying() === true)
            {
                rect(x + ((white_key_width*0.5)*2+1), y, (white_key_width*0.5), (white_key_height*0.5));
            } else if((musicQ_sound[i] == pianoF || musicQ_sound[i] == celestaF || musicQ_sound[i] == accordionF) && musicQ_sound[musicQ_sound.length-2].isPlaying() === true)
            {
                rect(x + ((white_key_width*0.5)*3+1), y, (white_key_width*0.5), (white_key_height*0.5));
            } else if((musicQ_sound[i] == pianoG || musicQ_sound[i] == celestaG || musicQ_sound[i] == accordionG) && musicQ_sound[musicQ_sound.length-2].isPlaying() === true)
            {
                rect(x + ((white_key_width*0.5)*4+1), y, (white_key_width*0.5), (white_key_height*0.5));
            } else if((musicQ_sound[i] == pianoA || musicQ_sound[i] == celestaA || musicQ_sound[i] == accordionA) && musicQ_sound[musicQ_sound.length-2].isPlaying() === true)
            {
                rect(x + ((white_key_width*0.5)*5+1), y, (white_key_width*0.5), (white_key_height*0.5));
            } else if((musicQ_sound[i] == pianoB || musicQ_sound[i] == celestaB || musicQ_sound[i] == accordionB) && musicQ_sound[musicQ_sound.length-2].isPlaying() === true)
            {
                rect(x + ((white_key_width*0.5)*6+1), y, (white_key_width*0.5), (white_key_height*0.5));
            }
            for(let column=0; column < 7; column++)
            {
                fill(255);        
                text(What_Key_W[column], x + ((white_key_width*0.5)*column+35), y + white_key_height*5/12);    
            }
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

        for(let i=0; i<musicQ_sound.length; i++)
        {
            fill(255, 90, 110);
            if((musicQ_sound[i] == pianoCs || musicQ_sound[i] == celestaCs || musicQ_sound[i] == accordionCs) && musicQ_sound[musicQ_sound.length-2].isPlaying() === true)
            {
                rect(x+1, y, (black_key_width*0.5), (black_key_height*0.5));    
            } else if((musicQ_sound[i] == pianoDs || musicQ_sound[i] == celestaDs || musicQ_sound[i] == accordionDs) && musicQ_sound[musicQ_sound.length-2].isPlaying() === true)
            {
                rect(x + (((black_key_width + black_key_interval)*0.5)+1), y, (black_key_width*0.5), (black_key_height*0.5));    
            } else if((musicQ_sound[i] == pianoFs || musicQ_sound[i] == celestaFs || musicQ_sound[i] == accordionFs) && musicQ_sound[musicQ_sound.length-2].isPlaying() === true)
            {
                rect(x + (((black_key_width + black_key_interval)*0.5)*3+1), y, (black_key_width*0.5), (black_key_height*0.5));    
            } else if((musicQ_sound[i] == pianoGs || musicQ_sound[i] == celestaGs || musicQ_sound[i] == accordionGs) && musicQ_sound[musicQ_sound.length-2].isPlaying() === true)
            {
                rect(x + (((black_key_width + black_key_interval)*0.5)*4+1), y, (black_key_width*0.5), (black_key_height*0.5));    
            } else if((musicQ_sound[i] == pianoAs || musicQ_sound[i] == celestaAs || musicQ_sound[i] == accordionAs) && musicQ_sound[musicQ_sound.length-2].isPlaying() === true)
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
        }
        pop();
    }
}


function timer(x, y, size)
{
    let timeLimit = 5;
    textSize(size);
    text("TIME " + timeLimit, x, y);
    if(frameCount % 60 == 0 && timeLimit > 0)
    {
        timeLimit--;
    }
    if(timeLimit == 0)
    {
        //라이프 감소
        wrong_SFX.play();
        image(sad, 980, 220, 350, 350);
        musicQ.splice(0, musicQ.length-1);
        musicA.splice(0, musicA.length-1);
    }
}
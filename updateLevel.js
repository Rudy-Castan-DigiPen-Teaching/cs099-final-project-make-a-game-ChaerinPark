// Name       : Chaerin Park
// Assignment : final_project - make_a_game
// Course     : CS099
// Spring 2021

function updateLevel1()
{
    if(current_instrument === "PIANO")
    {
        musicQ_sound.push(random(PianoCode));
        musicQ_sound.push(random(PianoCode));
        musicQ_sound.push(random(PianoCode));
        make_musicQ_array();    
    } else if(current_instrument === "CELESTA")
    {
        musicQ_sound.push(random(CelestaCode));
        musicQ_sound.push(random(CelestaCode));
        musicQ_sound.push(random(CelestaCode));
        make_musicQ_array();    
    } else if(current_instrument === "ACCORDION")
    {
        musicQ_sound.push(random(AccordionCode));
        musicQ_sound.push(random(AccordionCode));
        musicQ_sound.push(random(AccordionCode));
        make_musicQ_array();    
    }
}


function updateLevel2()
{
    if(current_instrument === "PIANO")
    {
        musicQ_sound.push(random(PianoCode));
        musicQ_sound.push(random(PianoCode));
        musicQ_sound.push(random(PianoCode));
        musicQ_sound.push(random(PianoCode));
        musicQ_sound.push(random(PianoCode));
        make_musicQ_array();    
    } else if(current_instrument === "CELESTA")
    {
        musicQ_sound.push(random(CelestaCode));
        musicQ_sound.push(random(CelestaCode));
        musicQ_sound.push(random(CelestaCode));
        musicQ_sound.push(random(CelestaCode));
        musicQ_sound.push(random(CelestaCode));
        make_musicQ_array();   
    } else if(current_instrument === "ACCORDION")
    {
        musicQ_sound.push(random(AccordionCode));
        musicQ_sound.push(random(AccordionCode));
        musicQ_sound.push(random(AccordionCode));
        musicQ_sound.push(random(AccordionCode));
        musicQ_sound.push(random(AccordionCode));
        make_musicQ_array();   
    }
}



function updateLevel3()
{
    if(current_instrument === "PIANO")
    {
        musicQ_sound.push(random(PianoCode));
        musicQ_sound.push(random(PianoCode));
        musicQ_sound.push(random(PianoCode));
        musicQ_sound.push(random(PianoCode));
        make_musicQ_array();    
    } else if(current_instrument === "CELESTA")
    {
        musicQ_sound.push(random(CelestaCode));
        musicQ_sound.push(random(CelestaCode));
        musicQ_sound.push(random(CelestaCode));
        musicQ_sound.push(random(CelestaCode));
        make_musicQ_array();   
    } else if(current_instrument === "ACCORDION")
    {
        musicQ_sound.push(random(AccordionCode));
        musicQ_sound.push(random(AccordionCode));
        musicQ_sound.push(random(AccordionCode));
        musicQ_sound.push(random(AccordionCode));
        make_musicQ_array();   
    }
}



function updateLevel4()
{
    if(current_instrument === "PIANO")
    {
        musicQ_sound.push(random(PianoCode));
        musicQ_sound.push(random(PianoCode));
        musicQ_sound.push(random(PianoCode));
        musicQ_sound.push(random(PianoCode));
        musicQ_sound.push(random(PianoCode));
        musicQ_sound.push(random(PianoCode));
        make_musicQ_array();    
    } else if(current_instrument === "CELESTA")
    {
        musicQ_sound.push(random(CelestaCode));
        musicQ_sound.push(random(CelestaCode));
        musicQ_sound.push(random(CelestaCode));
        musicQ_sound.push(random(CelestaCode));
        musicQ_sound.push(random(CelestaCode));
        musicQ_sound.push(random(CelestaCode));
        make_musicQ_array();   
    } else if(current_instrument === "ACCORDION")
    {
        musicQ_sound.push(random(AccordionCode));
        musicQ_sound.push(random(AccordionCode));
        musicQ_sound.push(random(AccordionCode));
        musicQ_sound.push(random(AccordionCode));
        musicQ_sound.push(random(AccordionCode));
        musicQ_sound.push(random(AccordionCode));
        make_musicQ_array();   
    }
}


function judgement()
{
    for(let i = 0; i < musicQ.length; i++)
    {
        if(musicA.length === i+1 && musicQ[i] !== musicA[i])
        {
            wrong_SFX.play();
            image(awkward, 980, 220, 350, 350);
            musicQ_sound.splice(0, musicQ_sound.length);
            musicQ.splice(0, musicQ.length);
            musicA.splice(0, musicA.length);
        }
    
        if(musicA.length == musicQ.length && musicQ[musicQ.length-1] == musicA[musicA.length-1])
        {
            right_SFX.play();
            image(happy, 980, 220, 350, 350);
            musicQ_sound.splice(0, musicQ_sound.length);
            musicQ.splice(0, musicQ.length);
            musicA.splice(0, musicA.length);
        }
    }
}


function make_musicQ_array()
{
    for(let i=0; i< musicQ_sound.length; i++)
    {
        musicQ_sound[i].play(i);
        
        if(musicQ_sound[i] == pianoC || musicQ_sound[i] == celestaC || musicQ_sound[i] == accordionC)
        {
            musicQ.push("codeC");
        } else if(musicQ_sound[i] == pianoCs || musicQ_sound[i] == celestaCs || musicQ_sound[i] == accordionCs)
        {
            musicQ.push("codeCs");
        } else if(musicQ_sound[i] == pianoD || musicQ_sound[i] == celestaD || musicQ_sound[i] == accordionD)
        {
            musicQ.push("codeD");
        } else if(musicQ_sound[i] == pianoDs || musicQ_sound[i] == celestaDs || musicQ_sound[i] == accordionDs)
        {
            musicQ.push("codeDs");
        } else if(musicQ_sound[i] == pianoE || musicQ_sound[i] == celestaE || musicQ_sound[i] == accordionE)
        {
            musicQ.push("codeE");
        } else if(musicQ_sound[i] == pianoF || musicQ_sound[i] == celestaF || musicQ_sound[i] == accordionF)
        {
            musicQ.push("codeF");
        } else if(musicQ_sound[i] == pianoFs || musicQ_sound[i] == celestaFs || musicQ_sound[i] == accordionFs)
        {
            musicQ.push("codeFs");
        } else if(musicQ_sound[i] == pianoG || musicQ_sound[i] == celestaG || musicQ_sound[i] == accordionG)
        {
            musicQ.push("codeG");
        } else if(musicQ_sound[i] == pianoGs || musicQ_sound[i] == celestaGs || musicQ_sound[i] == accordionGs)
        {
            musicQ.push("codeGs");
        } else if(musicQ_sound[i] == pianoA || musicQ_sound[i] == celestaA || musicQ_sound[i] == accordionA)
        {
            musicQ.push("codeA");
        } else if(musicQ_sound[i] == pianoAs || musicQ_sound[i] == celestaAs || musicQ_sound[i] == accordionAs)
        {
            musicQ.push("codeAs");
        } else if(musicQ_sound[i] == pianoB || musicQ_sound[i] == celestaB || musicQ_sound[i] == accordionB)
        {
            musicQ.push("codeB");
        }
    }
}

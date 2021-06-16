// Name       : Chaerin Park
// Assignment : final_project - make_a_game
// Course     : CS099
// Spring 2021

function updateLevel1()
{
    musicQ_sound.push(random(code));
    musicQ_sound.push(random(code));
    musicQ_sound.push(random(code));
    make_musicQ_array();
}


function updateLevel2()
{
    musicQ_sound.push(random(code));
    musicQ_sound.push(random(code));
    musicQ_sound.push(random(code));
    musicQ_sound.push(random(code));
    musicQ_sound.push(random(code));
    make_musicQ_array();
    judgement();
}



function updateLevel3()
{
    musicQ_sound.push(random(code));
    musicQ_sound.push(random(code));
    musicQ_sound.push(random(code));
    musicQ_sound.push(random(code));
    make_musicQ_array();
    judgement();
}



function updateLevel4()
{
    musicQ_sound.push(random(code));
    musicQ_sound.push(random(code));
    musicQ_sound.push(random(code));
    musicQ_sound.push(random(code));
    musicQ_sound.push(random(code));
    musicQ_sound.push(random(code));
    make_musicQ_array();
    judgement();
}



function make_musicQ_array()
{
    for(let i=0; i< musicQ_sound.length; i++)
    {
        musicQ_sound[i].play(i);
        
        if(musicQ_sound[i] == pianoC)
        {
            musicQ.push("codeC");
        } else if(musicQ_sound[i] == pianoCs)
        {
            musicQ.push("codeCs");
        } else if(musicQ_sound[i] == pianoD)
        {
            musicQ.push("codeD");
        } else if(musicQ_sound[i] == pianoDs)
        {
            musicQ.push("codeDs");
        } else if(musicQ_sound[i] == pianoE)
        {
            musicQ.push("codeE");
        } else if(musicQ_sound[i] == pianoF)
        {
            musicQ.push("codeF");
        } else if(musicQ_sound[i] == pianoFs)
        {
            musicQ.push("codeFs");
        } else if(musicQ_sound[i] == pianoG)
        {
            musicQ.push("codeG");
        } else if(musicQ_sound[i] == pianoGs)
        {
            musicQ.push("codeGs");
        } else if(musicQ_sound[i] == pianoA)
        {
            musicQ.push("codeA");
        } else if(musicQ_sound[i] == pianoAs)
        {
            musicQ.push("codeAs");
        } else if(musicQ_sound[i] == pianoB)
        {
            musicQ.push("codeB");
        }
    }
}

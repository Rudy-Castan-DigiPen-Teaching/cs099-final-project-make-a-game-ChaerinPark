// Name       : Chaerin Park
// Assignment : final_project - make_a_game
// Course     : CS099
// Spring 2021


function Button(x, y, WIDTH, HEIGHT, TEXT)
{
    push();
    rectMode(CENTER);
    fill(255);
    stroke(200, 120, 120);
    strokeWeight(3);
    strokeJoin(ROUND);
    rect(x, y, WIDTH, HEIGHT);

    //Change the buttons' color
    if(mouseX > x - WIDTH/2 && mouseX < x + WIDTH/2
        && mouseY > y - HEIGHT/2 && mouseY < y + HEIGHT/2)
    {
        fill(255, 230, 230);
        rect(x, y, WIDTH, HEIGHT);

        if(mouseIsPressed == true)
        {
            stroke(180, 100, 100);
            fill(240, 160, 160);
            rect(x, y, WIDTH, HEIGHT);
        }
    }
    pop();

    push();
    fill(180, 100, 100);
    textSize(50);
    text(TEXT, x, y+2);
    if(mouseX > x - WIDTH/2 && mouseX < x + WIDTH/2
        && mouseY > y - HEIGHT/2 && mouseY < y + HEIGHT/2)
    {
        if(mouseIsPressed == true)
        {
            fill(255);
            text(TEXT, x, y+3);
        }
    }
    pop();
}


function HomeMark(x, y)
{
    push();
    rectMode(CENTER);
    stroke(200, 120, 120);
    fill(200, 120, 120);
    rect(x, y+5, 20, 18);
    rect(x+9, y-9, 5, 10);
    triangle(x-17, y, x+17, y, x, y-15);
    pop();
}


function speechBubble(current_level)
{
    push();
    rectMode(CENTER);
    fill(255, 160);
    noStroke();
    rect(400, 200, 700, 360);
    triangle(750, 262, 812, 265, 750, 327);
    fill(180, 130, 130, 180);
    textSize(25);
    text(current_level, 700, 360);
    fill(180, 130, 130);
    textSize(40);
    text(NOTICE, 400, 90);
    if(wrong_SFX.isPlaying() === true)
    {
        NOTICE = "It's wrong! \n Press Enter to next question";
    } else if(right_SFX.isPlaying() === true && count_correctAnswer % 10 !== 0)
    {
        NOTICE = "Right! \n Press Enter to next question";
    } else if(keyCode === ENTER)
    {
        NOTICE = "♬";
    } else if(current_life>0 && count_correctAnswer % 10 == 0 && count_correctAnswer !== 0)
    {
        NOTICE = "Level Clear! \n If you want continue, Press Enter";
        count_correctAnswer = 0;
    } else if(current_life == 0)
    {
        NOTICE = "YOU LOSE! \n If you want retry, Press Enter"
    }
    pop();
}

function playing_character()
{
    if(second()%2 == 0)
    {
        image(chara, 980, 220, 350, 350);
    } else if(second()%2 == 1)
    {
        image(chara_1, 980, 220, 350, 350);
    }
    if(wrong_SFX.isPlaying() === true)
    {
        image(awkward, 980, 220, 350, 350);
    } else if(right_SFX.isPlaying() === true)
    {
        image(happy, 980, 220, 350, 350);
    } else if(current_life == 0)
    {
        image(sad, 980, 220, 350, 350);
    } else if(current_life>0 && count_correctAnswer % 10 == 0 && count_correctAnswer !== 0)
    {
        image(clear, 980, 220, 350, 350);
    }
}

function explanation_box(x, y, width, height, about)
{
    push();
    stroke(255, 210, 210);
    fill(255, 170);
    rect(x, y, width, height);
    fill(180, 100, 100);
    textSize(35);
    text(about, x + width/2, y + height/2);
    pop();
}

function life(x, y)
{
    push();
    stroke(255, 200, 200);
    strokeWeight(5);
    textSize(30);
    fill(0);
    text("LIFE", x+55, y-30);
    fill('red');
    for(let i = 0; i<current_life; i++)
    {
        text("♥", x + 30*i, y);
    }
    pop();
}

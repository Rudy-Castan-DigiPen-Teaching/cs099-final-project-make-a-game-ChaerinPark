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
    text(TEXT, x, y+5);
    if(mouseX > x - WIDTH/2 && mouseX < x + WIDTH/2
        && mouseY > y - HEIGHT/2 && mouseY < y + HEIGHT/2)
    {
        if(mouseIsPressed == true)
        {
            fill(255);
            text(TEXT, x, y+8);
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
    rect(400, 250, 700, 260);
    triangle(750, 262, 812, 265, 750, 327);
    fill(180, 130, 130, 180);
    textSize(25);
    text(current_level, 700, 360);
    fill(180, 130, 130);
    textSize(40);
    text("press the same key as her!", 350, 90);
    pop();
}

function playing_character()
{
    if(second()%2 == 0)
    {
        image(chara, 980, 220, 350, 350);
    } else{
        image(chara_1, 980, 220, 350, 350);
    }
    if(wrong_SFX.isPlaying() === true)
    {
        image(sad, 980, 220, 350, 350);
    } else if(right_SFX.isPlaying() === true)
    {
        image(happy, 980, 220, 350, 350);
    }
}

function explanation_box(x, y, about)
{
    push();
    stroke(255, 210, 210);
    fill(255, 170);
    rect(x, y, explanation_box_width, explanation_box_height);
    fill(180, 100, 100);
    textSize(35);
    text(about, x + explanation_box_width/2, y + explanation_box_height/8);
    pop();
}
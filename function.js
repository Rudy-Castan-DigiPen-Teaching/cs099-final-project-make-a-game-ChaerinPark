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
// Name       : Chaerin Park
// Assignment : final_project - make_a_game
// Course     : CS099
// Spring 2021


function setup()
{
    createCanvas( 1200, 800 );
}

function draw()
{
    background( 255, 200, 200 );
    textAlign(CENTER, CENTER);


    switch(CurrentPage)
    {
        case (Main):
            {
                Button(width/2, height * 4/7, Main_button_width, Main_button_height, "START");
                Button(width/2, height * 5/7, Main_button_width, Main_button_height, "How to Play");
                Button(width/2, height * 6/7, Main_button_width, Main_button_height, "Credit")
            } break;

        case (SelectLevel):
            {
                Button(width-50, 50, GoToMain_button, GoToMain_button);
                HomeMark(width-50, 50);
                push();
                fill(255);
                strokeWeight(3);
                stroke(180, 100, 100);
                textSize(60);
                text("Select Level", width/6, 120);
                pop();
                Button(width/6, height * 2/7 +10, Level_button_width, Level_button_height, "Lv. 1");
                Button(width/6, height * 3/7 +20, Level_button_width, Level_button_height, "Lv. 2");
                Button(width/6, height * 4/7 +30, Level_button_width, Level_button_height, "Lv. 3");
                Button(width/6, height * 5/7 +40, Level_button_width, Level_button_height, "Lv. 4");

            } break;
        
        case (HowToPlay):
            {
                text("How to play page", width/2, height/2);
                Button(width-50, 50, GoToMain_button, GoToMain_button);
                HomeMark(width-50, 50);

            } break;
        
        case(credit):
            {
                text("Credit page", width/2, height/2);
                Button(width-50, 50, GoToMain_button, GoToMain_button);
                HomeMark(width-50, 50);
            } break;

        case(Lv1):
            {
                text("Level 1", width/2, height/2);
            } break;

        case(Lv2):
            {
                text("Level 2", width/2, height/2);
            } break;
        case(Lv3):
            {
                text("Level 3", width/2, height/2);
            } break;
        case(Lv4):
            {
                text("Level 4", width/2, height/2);
            } break;


    }
}


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



function mouseReleased()
{
    switch(CurrentPage)
    {
        case(Main):     //setting buttons in Main page
        {
            if(mouseX > width/2 - Main_button_width/2 && mouseX < width/2 + Main_button_width/2
                && mouseY > height * 4/7 - Main_button_height/2 && mouseY < height * 4/7 + Main_button_height/2)
            {
                CurrentPage = SelectLevel;  //press START button, go to Select level Page
            } else if(mouseX > width/2 - Main_button_width/2 && mouseX < width/2 + Main_button_width/2
                && mouseY > height * 5/7 - Main_button_height/2 && mouseY < height * 5/7 + Main_button_height/2)
            {
                CurrentPage = HowToPlay;    //press How to Play button, go to Explain Page
            } else if(mouseX > width/2 - Main_button_width/2 && mouseX < width/2 + Main_button_width/2
                && mouseY > height * 6/7 - Main_button_height/2 && mouseY < height * 6/7 + Main_button_height/2)
            {
                CurrentPage = credit;       //press Credit button, go to Credit Page
            }
        } break;

        case(HowToPlay):
        case(credit):
        {
            if(mouseX > width-50 - GoToMain_button/2 && mouseX < width-50 + GoToMain_button/2
                && mouseY > 50 - GoToMain_button/2 && mouseY < 50 + GoToMain_button/2)
                {
                    CurrentPage = Main;
                }
        } break;

        case(SelectLevel):
        {
            if(mouseX > width-50 - GoToMain_button/2 && mouseX < width-50 + GoToMain_button/2
                && mouseY > 50 - GoToMain_button/2 && mouseY < 50 + GoToMain_button/2)
                {
                    CurrentPage = Main;
                }

            if(mouseX > width/6 - Level_button_width/2 && mouseX < width/6 + Level_button_width
                && mouseY > height * 2/7 - Level_button_height/2 && mouseY < height * 2/7 + Level_button_height)
            {
                CurrentPage = Lv1;
            } else if(mouseX > width/6 - Level_button_width/2 && mouseX < width/6 + Level_button_width
            && mouseY > height * 3/7 +20 - Level_button_height/2 && mouseY < height * 3/7 +20 + Level_button_height)
            {
                CurrentPage = Lv2;
            } else if(mouseX > width/6 - Level_button_width/2 && mouseX < width/6 + Level_button_width
                && mouseY > height * 4/7 +30 - Level_button_height/2 && mouseY < height * 4/7 +30 + Level_button_height)
            {
                CurrentPage = Lv3;
            } else if(mouseX > width/6 - Level_button_width/2 && mouseX < width/6 + Level_button_width
                && mouseY > height * 5/7 +40 - Level_button_height/2 && mouseY < height * 5/7 +40 + Level_button_height)
            {
                CurrentPage = Lv4;
            }
        } break;
    }



}
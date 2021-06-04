// Name       : Chaerin Park
// Assignment : final_project - make_a_game
// Course     : CS099
// Spring 2021


function preload()
{
    //sound
    click_SFX = loadSound('media/sound/click.wav');

    //pictures
    chara = loadImage('media/picture/chara1.png');
    chara_1 = loadImage('media/picture/chara1-1.png');
    happy = loadImage('media/picture/chara_happy.png');
    clear = loadImage('media/picture/chara_clear.png');
    sad = loadImage('media/picture/chara_sad.png');
    awkward = loadImage('media/picture/chara_awkward.png');
}

function setup()
{
    createCanvas( 1200, 800 );
    player_piano = new PianoKeys(110, height-380);
    character_piano = new PianoKeys(85, 200);
    click_SFX.setVolume(0.4);
}

function draw()
{
    background( 255, 200, 200 );
    textAlign(CENTER, CENTER);
    imageMode(CENTER);


    switch(CurrentPage)
    {
        case (Main):
            {
                Button(width/2, height * 4/8, Main_button_width, Main_button_height, "START");
                Button(width/2, height * 5/8, Main_button_width, Main_button_height, "Shop");
                Button(width/2, height * 6/8, Main_button_width, Main_button_height, "How to Play");
                Button(width/2, height * 7/8, Main_button_width, Main_button_height, "Credit")
            } break;

        case (Shop):
            {
                Button(width-50, 50, GoToMain_button, GoToMain_button);
                HomeMark(width-50, 50);

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

                if(mouseX > width/6 - Level_button_width/2 && mouseX < width/6 + Level_button_width/2
                    && mouseY > height * 2/7 - Level_button_height/2 && mouseY < height * 2/7 + Level_button_height/2)
                {
                    push();
                    stroke(255, 210, 210);
                    fill(255, 170);
                    rect(530, 130, 500, 600);
                    fill(180, 100, 100);
                    textSize(35);
                    text("explanation about \n Level 1", 790, 380);
                    pop();
                } else if(mouseX > width/6 - Level_button_width/2 && mouseX < width/6 + Level_button_width/2
                    && mouseY > height * 3/7 +20 - Level_button_height/2 && mouseY < height * 3/7 +20 + Level_button_height/2)
                {
                    push();
                    stroke(255, 210, 210);
                    fill(255, 170);
                    rect(530, 130, 500, 600);
                    fill(180, 100, 100);
                    textSize(35);
                    text("explanation about \n Level 2", 790, 380);
                    pop();
                } else if(mouseX > width/6 - Level_button_width/2 && mouseX < width/6 + Level_button_width/2
                        && mouseY > height * 4/7 +30 - Level_button_height/2 && mouseY < height * 4/7 +30 + Level_button_height/2)
                {
                    push();
                    stroke(255, 210, 210);
                    fill(255, 170);
                    rect(530, 130, 500, 600);
                    fill(180, 100, 100);
                    textSize(35);
                    text("explanation about \n Level 3", 790, 380);
                    pop();
                } else if(mouseX > width/6 - Level_button_width/2 && mouseX < width/6 + Level_button_width/2
                    && mouseY > height * 5/7 +40 - Level_button_height/2 && mouseY < height * 5/7 +40 + Level_button_height/2)
                {
                    push();
                    stroke(255, 210, 210);
                    fill(255, 170);
                    rect(530, 130, 500, 600);
                    fill(180, 100, 100);
                    textSize(35);
                    text("explanation about \n Level 4", 790, 380);
                    pop();
                }
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
                speechBubble("Level 1");
                playing_character();
                player_piano.draw_whiteKey(110, height-380, 1);
                player_piano.draw_blackKey(205, height-380, 1);
                character_piano.draw_whiteKey(240, 320, 0.5);
                character_piano.draw_blackKey(336, 320, 0.5);
            } break;

        case(Lv2):
            {
                speechBubble("Level 2");
                playing_character();
                player_piano.draw_whiteKey(110, height-380, 1);
                player_piano.draw_blackKey(205, height-380, 1);
                character_piano.draw_whiteKey(240, 320, 0.5);
                character_piano.draw_blackKey(336, 320, 0.5);
            } break;
        case(Lv3):
            {
                speechBubble("Level 3");
                playing_character();
                player_piano.draw_whiteKey(110, height-380, 1);
                player_piano.draw_blackKey(205, height-380, 1);
                character_piano.draw_whiteKey(240, 320, 0.5);
                character_piano.draw_blackKey(336, 320, 0.5);
            } break;
        case(Lv4):
            {
                speechBubble("Level 4");
                playing_character();
                player_piano.draw_whiteKey(110, height-380, 1);
                player_piano.draw_blackKey(205, height-380, 1);
                character_piano.draw_whiteKey(240, 320, 0.5);
                character_piano.draw_blackKey(336, 320, 0.5);
            } break;


    }
}


function mouseReleased()
{
    switch(CurrentPage)
    {
        case(Main):     //setting buttons in Main page
        {
            if(mouseX > width/2 - Main_button_width/2 && mouseX < width/2 + Main_button_width/2
                && mouseY > height * 4/8 - Main_button_height/2 && mouseY < height * 4/8 + Main_button_height/2)
            {
                click_SFX.play();
                CurrentPage = SelectLevel;  //press START button, go to Select level Page
            } else if(mouseX > width/2 - Main_button_width/2 && mouseX < width/2 + Main_button_width/2
                && mouseY > height * 5/8 - Main_button_height/2 && mouseY < height * 6/8 + Main_button_height/2)
            {
                click_SFX.play();
                CurrentPage = Shop;    //press Shop button, go to Shop Page
            } else if(mouseX > width/2 - Main_button_width/2 && mouseX < width/2 + Main_button_width/2
                && mouseY > height * 6/8 - Main_button_height/2 && mouseY < height * 6/8 + Main_button_height/2)
            {
                click_SFX.play();
                CurrentPage = HowToPlay;    //press How to Play button, go to Explain Page
            } else if(mouseX > width/2 - Main_button_width/2 && mouseX < width/2 + Main_button_width/2
                && mouseY > height * 7/8 - Main_button_height/2 && mouseY < height * 7/8 + Main_button_height/2)
            {
                click_SFX.play();
                CurrentPage = credit;       //press Credit button, go to Credit Page
            }
        } break;

        case(Shop):
        {
            if(mouseX > width-50 - GoToMain_button/2 && mouseX < width-50 + GoToMain_button/2
                && mouseY > 50 - GoToMain_button/2 && mouseY < 50 + GoToMain_button/2)
                {
                    click_SFX.play();
                    CurrentPage = Main;
                }

        } break;
        case(HowToPlay):
        case(credit):
        {
            if(mouseX > width-50 - GoToMain_button/2 && mouseX < width-50 + GoToMain_button/2
                && mouseY > 50 - GoToMain_button/2 && mouseY < 50 + GoToMain_button/2)
                {
                    click_SFX.play();
                    CurrentPage = Main;
                }
        } break;

        //width/6, height * 2/7 +10, Level_button_width, Level_button_height

        case(SelectLevel):
        {
            if(mouseX > width-50 - GoToMain_button/2 && mouseX < width-50 + GoToMain_button/2
                && mouseY > 50 - GoToMain_button/2 && mouseY < 50 + GoToMain_button/2)
                {
                    click_SFX.play();
                    CurrentPage = Main;
                }

            if(mouseX > width/6 - Level_button_width/2 && mouseX < width/6 + Level_button_width/2
                && mouseY > height * 2/7 - Level_button_height/2 && mouseY < height * 2/7 + Level_button_height/2)
            {
                click_SFX.play();
                CurrentPage = Lv1;
            } else if(mouseX > width/6 - Level_button_width/2 && mouseX < width/6 + Level_button_width/2
            && mouseY > height * 3/7 +20 - Level_button_height/2 && mouseY < height * 3/7 +20 + Level_button_height/2)
            {
                click_SFX.play();
                CurrentPage = Lv2;
            } else if(mouseX > width/6 - Level_button_width/2 && mouseX < width/6 + Level_button_width/2
                && mouseY > height * 4/7 +30 - Level_button_height/2 && mouseY < height * 4/7 +30 + Level_button_height/2)
            {
                click_SFX.play();
                CurrentPage = Lv3;
            } else if(mouseX > width/6 - Level_button_width/2 && mouseX < width/6 + Level_button_width/2
                && mouseY > height * 5/7 +40 - Level_button_height/2 && mouseY < height * 5/7 +40 + Level_button_height/2)
            {
                click_SFX.play();
                CurrentPage = Lv4;
            }
        } break;
    }


}


function mousePressed()
{
    console.log(mouseX, mouseY);
}
// Name       : Chaerin Park
// Assignment : final_project - make_a_game
// Course     : CS099
// Spring 2021


function preload()
{
    //sound effects
    click_SFX = loadSound('media/sound/SFX/click.wav');
    right_SFX = loadSound('media/sound/SFX/right.wav');
    wrong_SFX = loadSound('media/sound/SFX/wrong.wav');

    //piano
    pianoC = loadSound('media/sound/piano/pianoC.mp3');
    pianoCs = loadSound('media/sound/piano/pianoCs.mp3');
    pianoD = loadSound('media/sound/piano/pianoD.mp3');
    pianoDs = loadSound('media/sound/piano/pianoDs.mp3');
    pianoE = loadSound('media/sound/piano/pianoE.mp3');
    pianoF = loadSound('media/sound/piano/pianoF.mp3');
    pianoFs = loadSound('media/sound/piano/pianoFs.mp3');
    pianoG = loadSound('media/sound/piano/pianoG.mp3');
    pianoGs = loadSound('media/sound/piano/pianoGs.mp3');
    pianoA = loadSound('media/sound/piano/pianoA.mp3');
    pianoAs = loadSound('media/sound/piano/pianoAs.mp3');
    pianoB = loadSound('media/sound/piano/pianoB.mp3');

    //celesta
    celestaC = loadSound('media/sound/celesta/celestaC.mp3');
    celestaCs = loadSound('media/sound/celesta/celestaCs.mp3');
    celestaD = loadSound('media/sound/celesta/celestaD.mp3');
    celestaDs = loadSound('media/sound/celesta/celestaDs.mp3');
    celestaE = loadSound('media/sound/celesta/celestaE.mp3');
    celestaF = loadSound('media/sound/celesta/celestaF.mp3');
    celestaFs = loadSound('media/sound/celesta/celestaFs.mp3');
    celestaG = loadSound('media/sound/celesta/celestaG.mp3');
    celestaGs = loadSound('media/sound/celesta/celestaGs.mp3');
    celestaA = loadSound('media/sound/celesta/celestaA.mp3');
    celestaAs = loadSound('media/sound/celesta/celestaAs.mp3');
    celestaB = loadSound('media/sound/celesta/celestaB.mp3');

    //accordion
    accordionC = loadSound('media/sound/accordion/accordionC.mp3');
    accordionCs = loadSound('media/sound/accordion/accordionCs.mp3');
    accordionD = loadSound('media/sound/accordion/accordionD.mp3');
    accordionDs = loadSound('media/sound/accordion/accordionDs.mp3');
    accordionE = loadSound('media/sound/accordion/accordionE.mp3');
    accordionF = loadSound('media/sound/accordion/accordionF.mp3');
    accordionFs = loadSound('media/sound/accordion/accordionFs.mp3');
    accordionG = loadSound('media/sound/accordion/accordionG.mp3');
    accordionGs = loadSound('media/sound/accordion/accordionGs.mp3');
    accordionA = loadSound('media/sound/accordion/accordionA.mp3');
    accordionAs = loadSound('media/sound/accordion/accordionAs.mp3');
    accordionB = loadSound('media/sound/accordion/accordionB.mp3');    

    //pictures
    chara = loadImage('media/picture/chara1.png');
    chara_1 = loadImage('media/picture/chara1-1.png');
    happy = loadImage('media/picture/chara_happy.png');
    clear = loadImage('media/picture/chara_clear.png');
    sad = loadImage('media/picture/chara_sad.png');
    awkward = loadImage('media/picture/chara_awkward.png');
    gold = loadImage('media/picture/gold.png');
    grandPiano = loadImage('media/picture/illust_piano.png');
    accordion = loadImage('media/picture/illust_accordion.png');
    celesta = loadImage('media/picture/illust_celesta.png');
}

function setup()
{
    createCanvas( 1200, 800 );
    character = new musicQuestion(140, 160);
    player = new musicAnswer(110, height-380);
    current_instrument = "PIANO";
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
                Button(width/2, height * 5/8, Main_button_width, Main_button_height, "Option");
                Button(width/2, height * 6/8, Main_button_width, Main_button_height, "How to Play");
                Button(width/2, height * 7/8, Main_button_width, Main_button_height, "Credit")
            } break;

        case (Option):
            {
                Button(width-50, 50, GoToMain_button, GoToMain_button);
                HomeMark(width-50, 50);
                push();
                noStroke();
                fill(255, 120);
                rectMode(CENTER);
                rect(width/6, height/3+50, 280, 280);
                rect(width/2, height/3+50, 280, 280);
                rect(width*5/6, height/3+50, 280, 280);
                textSize(40);
                text("NOW: " + current_instrument, width*2/3, height/8);
                fill(180, 100, 100);
                pop();
                image(grandPiano, width/6, height/3+50, 250, 250);
                image(celesta, width/2, height/3+50, 250, 250);
                image(accordion, width*5/6, height/3+50, 250, 250);
                Button(width/6, height*2/3-20, Option_button_width, Option_button_height*3/4, "▶");
                Button(width/6, height*2/3+50, Option_button_width, Option_button_height, "Select");
                Button(width/2, height*2/3-20, Option_button_width, Option_button_height*3/4, "▶");
                Button(width/2, height*2/3+50, Option_button_width, Option_button_height, "Select");
                Button(width*5/6, height*2/3-20, Option_button_width, Option_button_height*3/4, "▶");
                Button(width*5/6, height*2/3+50, Option_button_width, Option_button_height, "Select");
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
                    explanation_box(530, 130, explanation_box_width, explanation_box_height, "explanation about \n Level 1");
                } else if(mouseX > width/6 - Level_button_width/2 && mouseX < width/6 + Level_button_width/2
                    && mouseY > height * 3/7 +20 - Level_button_height/2 && mouseY < height * 3/7 +20 + Level_button_height/2)
                {
                    explanation_box(530, 130, explanation_box_width, explanation_box_height, "explanation about \n Level 2");
                } else if(mouseX > width/6 - Level_button_width/2 && mouseX < width/6 + Level_button_width/2
                        && mouseY > height * 4/7 +30 - Level_button_height/2 && mouseY < height * 4/7 +30 + Level_button_height/2)
                {
                    explanation_box(530, 130, explanation_box_width, explanation_box_height, "explanation about \n Level 3");
                } else if(mouseX > width/6 - Level_button_width/2 && mouseX < width/6 + Level_button_width/2
                    && mouseY > height * 5/7 +40 - Level_button_height/2 && mouseY < height * 5/7 +40 + Level_button_height/2)
                {
                    explanation_box(530, 130, explanation_box_width, explanation_box_height, "explanation about \n Level 4");
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
                character.draw_character_whiteKey(140, 160);
                character.draw_character_blackKey(185, 160);
                playing_character();
                player.draw_player_whiteKey(110, height-380);
                player.draw_player_blackKey(205, height-380);
                life(800, 110);
            } break;

        case(Lv2):
            {
                speechBubble("Level 2");
                playing_character();
                player.draw_player_whiteKey(110, height-380);
                player.draw_player_blackKey(205, height-380);
                character.draw_character_whiteKey(140, 160);
                character.draw_character_blackKey(185, 160);
                life(800, 110);
            } break;
        case(Lv3):
            {
                speechBubble("Level 3");
                playing_character();
                player.draw_player_whiteKey(110, height-380);
                player.draw_player_blackKey(205, height-380);
                character.draw_character_whiteKey(140, 160);
                character.draw_character_blackKey(185, 160);
                life(800, 110);
            } break;
        case(Lv4):
            {
                speechBubble("Level 4");
                playing_character();
                player.draw_player_whiteKey(110, height-380);
                player.draw_player_blackKey(205, height-380);
                character.draw_character_whiteKey(140, 160);
                character.draw_character_blackKey(185, 160);
                life(800, 110);
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
                && mouseY > height * 5/8 - Main_button_height/2 && mouseY < height * 5/8 + Main_button_height/2)
            {
                click_SFX.play();
                CurrentPage = Option;    //press Option button, go to Option Page
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

        case(Option):
        {
            let sample_piano = [pianoC, pianoD, pianoE, pianoF, pianoG];
            let sample_celesta = [celestaC, celestaD, celestaE, celestaF, celestaG];
            let sample_accordion = [accordionC, accordionD, accordionE, accordionF, accordionG];

            //go to main page
            if(mouseX > width-50 - GoToMain_button/2 && mouseX < width-50 + GoToMain_button/2
                && mouseY > 50 - GoToMain_button/2 && mouseY < 50 + GoToMain_button/2)
                {
                    click_SFX.play();
                    CurrentPage = Main;
                }

            //sample sound play
            if(mouseX > width/6 - Option_button_width/2 && mouseX < width/6 + Option_button_width/2
                && mouseY > height*2/3-20 - Option_button_height*3/8 && mouseY < height*2/3-20 + Option_button_height*3/8)
            {
                for(let i = 0; i < sample_piano.length; i++)
                {
                    sample_piano[i].play(i/4);
                }
            }
            if(mouseX > width/2 - Option_button_width/2 && mouseX < width/2 + Option_button_width/2
                && mouseY > height*2/3-20 - Option_button_height*3/8 && mouseY < height*2/3-20 + Option_button_height*3/8)
            {
                for(let i = 0; i < sample_celesta.length; i++)
                {
                    sample_celesta[i].play(i/4);
                }
            }
            if(mouseX > width*5/6 - Option_button_width/2 && mouseX < width*5/6 + Option_button_width/2
                && mouseY > height*2/3-20 - Option_button_height*3/8 && mouseY < height*2/3-20 + Option_button_height*3/8)
            {
                for(let i = 0; i < sample_piano.length; i++)
                {
                    sample_accordion[i].play(i/4);
                }
            }

            //select instrument
            if(mouseX > width/6 - Option_button_width/2 && mouseX < width/6 + Option_button_width/2
                && mouseY > height*2/3+50 - Option_button_height*3/8 && mouseY < height*2/3+50 + Option_button_height*3/8)
            {
                click_SFX.play();
                current_instrument = "PIANO";
            }
            if(mouseX > width/2 - Option_button_width/2 && mouseX < width/2 + Option_button_width/2
                && mouseY > height*2/3+50 - Option_button_height*3/8 && mouseY < height*2/3+50 + Option_button_height*3/8)
            {
                click_SFX.play();
                current_instrument = "CELESTA";
            }
            if(mouseX > width*5/6 - Option_button_width/2 && mouseX < width*5/6 + Option_button_width/2
                && mouseY > height*2/3+50 - Option_button_height*3/8 && mouseY < height*2/3+50 + Option_button_height*3/8)
            {
                click_SFX.play();
                current_instrument = "ACCORDION";
            }
            storeItem(current_instrument, current_instrument);

        } break;
        case(HowToPlay):
        case(credit):
        {
            //go to main page
            if(mouseX > width-50 - GoToMain_button/2 && mouseX < width-50 + GoToMain_button/2
                && mouseY > 50 - GoToMain_button/2 && mouseY < 50 + GoToMain_button/2)
                {
                    click_SFX.play();
                    CurrentPage = Main;
                }
        } break;


        case(SelectLevel):
        {
            //go to main page
            if(mouseX > width-50 - GoToMain_button/2 && mouseX < width-50 + GoToMain_button/2
                && mouseY > 50 - GoToMain_button/2 && mouseY < 50 + GoToMain_button/2)
                {
                    click_SFX.play();
                    CurrentPage = Main;
                }
            //select Level
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


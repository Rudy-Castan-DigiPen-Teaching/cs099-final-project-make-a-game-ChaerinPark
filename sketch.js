// Name       : Chaerin Park
// Assignment : final_project - make_a_game
// Course     : CS099
// Spring 2021


function preload()
{
    //background music
    BGM = loadSound('media/sound/BGM.mp3');
    BGM2 = loadSound('media/sound/BGM2.mp3');

    //sound effects
    click_SFX = loadSound('media/sound/SFX/click.wav');
    right_SFX = loadSound('media/sound/SFX/right.wav');
    wrong_SFX = loadSound('media/sound/SFX/wrong.wav');
    clap_SFX = loadSound('media/sound/SFX/clap.mp3');
    fail_SFX = loadSound('media/sound/SFX/fail.mp3');

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
    chara = loadImage('media/picture/game/chara1.png');
    chara_1 = loadImage('media/picture/game/chara1-1.png');
    happy = loadImage('media/picture/game/chara_happy.png');
    clear = loadImage('media/picture/game/chara_clear.png');
    sad = loadImage('media/picture/game/chara_sad.png');
    awkward = loadImage('media/picture/game/chara_awkward.png');
    gold = loadImage('media/picture/game/gold.png');
    grandPiano = loadImage('media/picture/game/illust_piano.png');
    accordion = loadImage('media/picture/game/illust_accordion.png');
    celesta = loadImage('media/picture/game/illust_celesta.png');
    HowToPlay_image = loadImage('media/picture/game/HowToPlay.png');
    credit_image = loadImage('media/picture/game/credit.png');
}

function setup()
{
    createCanvas( 1200, 800 );
    BGM.setVolume(0.2);
    BGM2.setVolume(0.05);
    wrong_SFX.setVolume(0.5);
    right_SFX.setVolume(0.7);
    clap_SFX.setVolume(0.7);
    fail_SFX.setVolume(0.6);
    BGM.loop();
    character = new musicQuestion(140, 160);
    player = new musicAnswer(110, height-380);
    current_instrument = "PIANO";
    count_correctAnswer = 0;
}

function draw()
{
    background( 255, 200, 200 );
    textAlign(CENTER, CENTER);
    imageMode(CENTER);

    for(let Particle of particleStar)
    {
        Particle.update();
        Particle.draw();
    }

    for(let i = particleStar.length-1; i>=0; --i)
    {
        let particle = particleStar[i];
        if(particle.position.x > width || particle.position.x<0 || particle.position.y > height)
        {
            particleStar.splice(i, 1);
        }
    }

    switch(CurrentPage)
    {
        case (Main):
            {
                BGM2.stop();
                Button(width/2, height * 4/8, Main_button_width, Main_button_height, "START");
                Button(width/2, height * 5/8, Main_button_width, Main_button_height, "Shop");
                Button(width/2, height * 6/8, Main_button_width, Main_button_height, "How to Play");
                Button(width/2, height * 7/8, Main_button_width, Main_button_height, "Credit");
                count_correctAnswer = 0;
                NOTICE = "Press Enter to start!";
            } break;

        case (Shop):
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
                text(current_gold, width/4-30, height/8+5);
                pop();
                image(gold, width/6, height/8, 72, 72);
                image(grandPiano, width/6, height/3+50, 250, 250);
                image(celesta, width/2, height/3+50, 250, 250);
                image(accordion, width*5/6, height/3+50, 250, 250);
                Button(width/6, height*2/3-20, Shop_button_width, Shop_button_height*3/4, "▶");
                Button(width/6, height*2/3+50, Shop_button_width, Shop_button_height, "Select");
                Button(width/2, height*2/3-20, Shop_button_width, Shop_button_height*3/4, "▶");
                Button(width/2, height*2/3+50, Shop_button_width, Shop_button_height, buy_celesta);
                Button(width*5/6, height*2/3-20, Shop_button_width, Shop_button_height*3/4, "▶");
                Button(width*5/6, height*2/3+50, Shop_button_width, Shop_button_height, buy_accordion);
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
                    explanation_box(530, 130, explanation_box_width, explanation_box_height,
                        "In Level 1, \n play three codes randomly. \n You can press the keys \n after look piano keys \n next to character. \n on these keys, \n write alphabets of keys. \n\n number of clear \n " + clearLv1);
                } else if(mouseX > width/6 - Level_button_width/2 && mouseX < width/6 + Level_button_width/2
                    && mouseY > height * 3/7 +20 - Level_button_height/2 && mouseY < height * 3/7 +20 + Level_button_height/2)
                {
                    explanation_box(530, 130, explanation_box_width, explanation_box_height,
                        "In Level 2, \n play four codes randomly \n faster little bit \n than Level 1. \n You can also press \n like Level 1. \n Difference of \n Level 1 and Level 2 is \n not big. \n\n number of clear \n " + clearLv2);
                } else if(mouseX > width/6 - Level_button_width/2 && mouseX < width/6 + Level_button_width/2
                        && mouseY > height * 4/7 +30 - Level_button_height/2 && mouseY < height * 4/7 +30 + Level_button_height/2)
                {
                    explanation_box(530, 130, explanation_box_width, explanation_box_height,
                        "In level 3, \n play five code randomly. \n But now, \n no alphabet on keys so \n you should remember \n code to listen \n or position to see. \n\n number of clear \n " + clearLv3);
                } else if(mouseX > width/6 - Level_button_width/2 && mouseX < width/6 + Level_button_width/2
                    && mouseY > height * 5/7 +40 - Level_button_height/2 && mouseY < height * 5/7 +40 + Level_button_height/2)
                {
                    explanation_box(530, 130, explanation_box_width, explanation_box_height,
                        "In Level 4, \n play four codes randomly \n faster than other Level. \n and no alphabets on the keys \n like Level 3. \n Most difficult level. \n\n number of clear \n " + clearLv4);
                }
            } break;
        
        case (HowToPlay):
            {
                image(HowToPlay_image, width/2, height/2);
                Button(width-50, 50, GoToMain_button, GoToMain_button);
                HomeMark(width-50, 50);

            } break;
        
        case(credit):
            {
                image(credit_image, width/2, height/2);
                Button(width-50, 50, GoToMain_button, GoToMain_button);
                HomeMark(width-50, 50);
            } break;

        case(Lv1):
            {
                BGM.stop();
                Button(width-50, 50, GoToMain_button, GoToMain_button);
                HomeMark(width-50, 50);
                speechBubble("Level 1");
                character.draw_character_whiteKey(140, 160);
                character.draw_character_blackKey(185, 160);
                playing_character();
                player.draw_player_whiteKey(110, height-380);
                player.draw_player_blackKey(205, height-380);
                life(800, 110);
                star_particle_effect(1000, 130);
            } break;

        case(Lv2):
            {
                BGM.stop();
                Button(width-50, 50, GoToMain_button, GoToMain_button);
                HomeMark(width-50, 50);
                speechBubble("Level 2");
                playing_character();
                player.draw_player_whiteKey(110, height-380);
                player.draw_player_blackKey(205, height-380);
                character.draw_character_whiteKey(140, 160);
                character.draw_character_blackKey(185, 160);
                life(800, 110);
                star_particle_effect(1000, 130);
            } break;
        case(Lv3):
            {
                BGM.stop();
                Button(width-50, 50, GoToMain_button, GoToMain_button);
                HomeMark(width-50, 50);
                speechBubble("Level 3");
                playing_character();
                player.draw_player_whiteKey(110, height-380);
                player.draw_player_blackKey(205, height-380);
                character.draw_character_whiteKey(140, 160);
                character.draw_character_blackKey(185, 160);
                life(800, 110);
                star_particle_effect(1000, 130);
            } break;
        case(Lv4):
            {
                BGM.stop();
                Button(width-50, 50, GoToMain_button, GoToMain_button);
                HomeMark(width-50, 50);
                speechBubble("Level 4");
                playing_character();
                player.draw_player_whiteKey(110, height-380);
                player.draw_player_blackKey(205, height-380);
                character.draw_character_whiteKey(140, 160);
                character.draw_character_blackKey(185, 160);
                life(800, 110);
                star_particle_effect(1000, 130);
            } break;
    }
}

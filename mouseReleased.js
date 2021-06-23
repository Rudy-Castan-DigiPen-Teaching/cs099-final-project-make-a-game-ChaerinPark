// Name       : Chaerin Park
// Assignment : final_project - make_a_game
// Course     : CS099
// Spring 2021


function mouseReleased()
{
    switch (CurrentPage)
    {
        case (Main):     //setting buttons in Main page
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

        case (Shop):
        {
            //instruments' sample sound (codeC ~ code G)
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
            if(mouseX > width/6 - Shop_button_width/2 && mouseX < width/6 + Shop_button_width/2
                && mouseY > height*2/3-20 - Shop_button_height*3/8 && mouseY < height*2/3-20 + Shop_button_height*3/8)
            {
                BGM.pause();
                BGM.play(2);
                for(let i = 0; i < sample_piano.length; i++)
                {
                    sample_piano[i].play(i/4);
                }
            }
            if(mouseX > width/2 - Shop_button_width/2 && mouseX < width/2 + Shop_button_width/2
                && mouseY > height*2/3-20 - Shop_button_height*3/8 && mouseY < height*2/3-20 + Shop_button_height*3/8)
            {
                BGM.pause();
                BGM.play(2);
                for(let i = 0; i < sample_celesta.length; i++)
                {
                    sample_celesta[i].play(i/4);
                }
            }
            if(mouseX > width*5/6 - Shop_button_width/2 && mouseX < width*5/6 + Shop_button_width/2
                && mouseY > height*2/3-20 - Shop_button_height*3/8 && mouseY < height*2/3-20 + Shop_button_height*3/8)
            {
                BGM.pause();
                BGM.play(2);
                for(let i = 0; i < sample_piano.length; i++)
                {
                    sample_accordion[i].play(i/4);
                }
            }

            //buy and select instrument
            if(mouseX > width/6 - Shop_button_width/2 && mouseX < width/6 + Shop_button_width/2
                && mouseY > height*2/3+50 - Shop_button_height*3/8 && mouseY < height*2/3+50 + Shop_button_height*3/8)
            {
                click_SFX.play();
                current_instrument = "PIANO";
            }
            if(mouseX > width/2 - Shop_button_width/2 && mouseX < width/2 + Shop_button_width/2
                && mouseY > height*2/3+50 - Shop_button_height*3/8 && mouseY < height*2/3+50 + Shop_button_height*3/8)
            {
                click_SFX.play();
                if(current_gold >= 50)
                {
                    if(buy_celesta === "Buy")
                    {
                        current_gold -= 50;
                        buy_celesta = "Select";    
                    }
                }
                if(buy_celesta === "Select")
                {
                    current_instrument = "CELESTA";
                }
            }
            if(mouseX > width*5/6 - Shop_button_width/2 && mouseX < width*5/6 + Shop_button_width/2
                && mouseY > height*2/3+50 - Shop_button_height*3/8 && mouseY < height*2/3+50 + Shop_button_height*3/8)
            {
                click_SFX.play();
                if(current_gold >= 50)
                {
                    if(buy_accordion === "Buy")
                    {
                        current_gold -= 50;
                        buy_accordion = "Select"; 
                    }
                }
                if(buy_accordion === "Select")
                {
                    current_instrument = "ACCORDION";
                }
            }

        } break;
        case (HowToPlay):
        case (credit):
        {
            //go to main page
            if(mouseX > width-50 - GoToMain_button/2 && mouseX < width-50 + GoToMain_button/2
                && mouseY > 50 - GoToMain_button/2 && mouseY < 50 + GoToMain_button/2)
                {
                    click_SFX.play();
                    CurrentPage = Main;
                }
        } break;


        case (SelectLevel):
        {
            current_life = 5;

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
                BGM2.play();
                BGM2.loop();
            } else if(mouseX > width/6 - Level_button_width/2 && mouseX < width/6 + Level_button_width/2
            && mouseY > height * 3/7 +20 - Level_button_height/2 && mouseY < height * 3/7 +20 + Level_button_height/2)
            {
                click_SFX.play();
                if(clearLevel == "clear1" || clearLevel == "clear2" || clearLevel == "clear3")
                {
                    CurrentPage = Lv2;
                    BGM2.play();
                    BGM2.loop();
                }
            } else if(mouseX > width/6 - Level_button_width/2 && mouseX < width/6 + Level_button_width/2
                && mouseY > height * 4/7 +30 - Level_button_height/2 && mouseY < height * 4/7 +30 + Level_button_height/2)
            {
                click_SFX.play();
                if(clearLevel == "clear2" || clearLevel == "clear3")
                {
                    CurrentPage = Lv3;
                    BGM2.play();
                    BGM2.loop();
                }
            } else if(mouseX > width/6 - Level_button_width/2 && mouseX < width/6 + Level_button_width/2
                && mouseY > height * 5/7 +40 - Level_button_height/2 && mouseY < height * 5/7 +40 + Level_button_height/2)
            {
                click_SFX.play();
                if(clearLevel == "clear3")
                {
                    CurrentPage = Lv4;
                    BGM2.loop();
                }
            }
        } break;

        case (Lv1):
        case (Lv2):
        case (Lv3):
        case (Lv4):
        {
        //go to main page
        if(mouseX > width-50 - GoToMain_button/2 && mouseX < width-50 + GoToMain_button/2
            && mouseY > 50 - GoToMain_button/2 && mouseY < 50 + GoToMain_button/2)
            {
                click_SFX.play();
                CurrentPage = Main;
                BGM2.stop();
                BGM.play();
            }
        } break;
    }
}

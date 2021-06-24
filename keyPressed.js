// Name       : Chaerin Park
// Assignment : final_project - make_a_game
// Course     : CS099
// Spring 2021


let musicA = [];    //an array for judgement players' answer

//play keyboard sound and push answer in musicA array
//and play next question(<<Enter key)
function keyPressed()
{
    switch(CurrentPage)
    {
        case Lv1:
        case Lv2:
        case Lv3:
        case Lv4:
            if(key === 'z')
            {
                musicA.push("codeC");
                if(current_instrument === "PIANO")
                {
                    pianoC.play();
                } else if(current_instrument === "CELESTA")
                {
                    celestaC.play();
                } else if(current_instrument === "ACCORDION")
                {
                    accordionC.play();
                }
            } else if(key === 'x')
            {
                musicA.push("codeD");
                if(current_instrument === "PIANO")
                {
                    pianoD.play();
                } else if(current_instrument === "CELESTA")
                {
                    celestaD.play();
                } else if(current_instrument === "ACCORDION")
                {
                    accordionD.play();
                }
            } else if(key === 'c')
            {
                musicA.push("codeE");
                if(current_instrument === "PIANO")
                {
                    pianoE.play();
                } else if(current_instrument === "CELESTA")
                {
                    celestaE.play();
                } else if(current_instrument === "ACCORDION")
                {
                    accordionE.play();
                }
            } else if(key === 'v')
            {
                musicA.push("codeF");
                if(current_instrument === "PIANO")
                {
                    pianoF.play();
                } else if(current_instrument === "CELESTA")
                {
                    celestaF.play();
                } else if(current_instrument === "ACCORDION")
                {
                    accordionF.play();
                }
            } else if(key === 'b')
            {
                musicA.push("codeG");
                if(current_instrument === "PIANO")
                {
                    pianoG.play();
                } else if(current_instrument === "CELESTA")
                {
                    celestaG.play();
                } else if(current_instrument === "ACCORDION")
                {
                    accordionG.play();
                }
            } else if(key === 'n')
            {
                musicA.push("codeA");
                if(current_instrument === "PIANO")
                {
                    pianoA.play();
                } else if(current_instrument === "CELESTA")
                {
                    celestaA.play();
                } else if(current_instrument === "ACCORDION")
                {
                    accordionA.play();
                }
            } else if(key === 'm')
            {
                musicA.push("codeB");
                if(current_instrument === "PIANO")
                {
                    pianoB.play();
                } else if(current_instrument === "CELESTA")
                {
                    celestaB.play();
                } else if(current_instrument === "ACCORDION")
                {
                    accordionB.play();
                }
            } else if(key === 's')
            {
                musicA.push("codeCs");
                if(current_instrument === "PIANO")
                {
                    pianoCs.play();
                } else if(current_instrument === "CELESTA")
                {
                    celestaCs.play();
                } else if(current_instrument === "ACCORDION")
                {
                    accordionCs.play();
                }
            } else if(key === 'd')
            {
                musicA.push("codeDs");
                if(current_instrument === "PIANO")
                {
                    pianoDs.play();
                } else if(current_instrument === "CELESTA")
                {
                    celestaDs.play();
                } else if(current_instrument === "ACCORDION")
                {
                    accordionDs.play();
                }
            } else if(key === 'g')
            {
                musicA.push("codeFs");
                if(current_instrument === "PIANO")
                {
                    pianoFs.play();
                } else if(current_instrument === "CELESTA")
                {
                    celestaFs.play();
                } else if(current_instrument === "ACCORDION")
                {
                    accordionFs.play();
                }
            } else if(key === 'h')
            {
                musicA.push("codeGs");
                if(current_instrument === "PIANO")
                {
                    pianoGs.play();
                } else if(current_instrument === "CELESTA")
                {
                    celestaGs.play();
                } else if(current_instrument === "ACCORDION")
                {
                    accordionGs.play();
                }
            } else if(key === 'j')
            {
                musicA.push("codeAs");
                if(current_instrument === "PIANO")
                {
                    pianoAs.play();
                } else if(current_instrument === "CELESTA")
                {
                    celestaAs.play();
                } else if(current_instrument === "ACCORDION")
                {
                    accordionAs.play();
                }
            }
            judgement();

            if(keyCode === ENTER)
            {
                if(current_life == 0)
                {
                    current_life = 5;
                    BGM2.loop();
                }
                switch (CurrentPage)
                {
                    case (Lv1):
                    {
                        musicQ_sound.splice(0, musicQ_sound.length);
                        musicQ.splice(0, musicQ.length);
                        musicA.splice(0, musicA.length);
                        updateLevel1();
                        if(count_correctAnswer == 10)
                        {
                            count_correctAnswer = 0;
                        }
                    } break;
                    case (Lv2):
                    {
                        musicQ_sound.splice(0, musicQ_sound.length);
                        musicQ.splice(0, musicQ.length);
                        musicA.splice(0, musicA.length);
                        updateLevel2();
                        if(count_correctAnswer == 10)
                        {
                            count_correctAnswer = 0;
                        }
                    } break;
                    case (Lv3):
                    {
                        musicQ_sound.splice(0, musicQ_sound.length);
                        musicQ.splice(0, musicQ.length);
                        musicA.splice(0, musicA.length);
                        updateLevel3();
                        if(count_correctAnswer == 10)
                        {
                            count_correctAnswer = 0;
                        }
                    } break;
                    case (Lv4):
                    {
                        musicQ_sound.splice(0, musicQ_sound.length);
                        musicQ.splice(0, musicQ.length);
                        musicA.splice(0, musicA.length);
                        updateLevel4();
                        if(count_correctAnswer == 10)
                        {
                            count_correctAnswer = 0;
                        }
                    }
                }
            }
    }
}

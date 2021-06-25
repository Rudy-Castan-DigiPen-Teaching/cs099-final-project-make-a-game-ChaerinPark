## 1. Shapes
 Use for draw buttons, keyboards, and particles.
 ```
button <- rect, triangle(to make Home mark)
keyboards <- rect
speech bubble <- rect, triangle(will draw no stroke)
explanation box <- rect
particle <- vertex(to draw star. I'll use particle class that I made before.)
 ```

----

## 2. Colors
Basically I'll use **pink and red color**.
```
I want to give off a soft, warm and bright feeling.
And I didn't used colors that hurt my eyes.

(RGB)
background pink: (255, 200, 200)

               default       curser is on the button       button is pressed
button color:   (255)    ->      (255, 230, 230)      ->    (240, 160, 160)

                           default           button is pressed
button stroke color:   (200, 120, 120)   ->   (180, 100, 100)

particle color: (255, random(155-255), random(155-255))
        => It return like pink, yellow, golden sand, pastel magenta, and white.

explanation box color: (255, 170)
explanation box stroke color: (255, 210, 210)

                  default        button is clicked   'LIFE' text color
text color:   (180, 100, 100),         (255),               (0)

                  white / black   if code is play
keyboard color:   (255),   (0),   (255, 90, 110)
```
----

## 3. Variables
 - for load images
     - title & image to explain
    ```
        - title
        - HowToPlay_image
        - credit_image
    ```
     - character 
    ```
        - chara
        - chara_1
        - happy
        - clear
        - sad
        - awkward
    ```
     - gold

     - instrument
    ```
        - grandPiano
        - celesta
        - accordion
    ```


 - for load sound files
    - background music
    ```
        - BGM
           : It played Main, SelectLevel, Shop, How to play and Option/Credit page.
        - BGM2
           : It played only play game(in stage).
    ```
    - sound effect
    ```
        - click_SFX
        - right_SFX
        - wrong_SFX
        - clap_SFX
        - fail_SFX
    ```
    - instrument sound
        - piano
        ```
            - pianoC
            - pianoCs
            - pianoD
            - pianoDs
            - pianoE
            - pianoF
            - pianoFs
            - pianoG
            - pianoGs
            - pianoA
            - pianoAs
            - pianoB
        ```
        - celesta

        ```
            - celestaC
            - celestaCs
            - celestaD
            - celestaDs
            - celestaE
            - celestaF
            - celestaFs
            - celestaG
            - celestaGs
            - celestaA
            - celestaAs
            - celestaB
        ```

        - accordion
        ```
            - accordionC
            - accordionCs
            - accordionD
            - accordionDs
            - accordionE
            - accordionF
            - accordionFs
            - accordionG
            - accordionGs
            - accordionA
            - accordionAs
            - accordionB
        ```
 - for change current page
```
    Main = 0
    SelectLevel = 1
    HowToPlay = 2
    credit = 3
    Lv1 = 4
    Lv2 = 5
    Lv3 = 6
    Lv4 = 7
    Shop = 8
    CurrentPage = Main
```
 change page use ***switch case***.

 - for change sentences when player play each Level
    - NOTICE
    ```
      before start level
        "Press Enter to start!"

      If you press wrong answer
        "It's wrong! Press Enter to next question"

      If you press correct answer
        "Right! Press Enter to next question"
    
      If you clear Level (to answer 10 questions correctly)
        "Level Clear! If you want continue, Press Enter"
    
      If you fail (when the rest of life goes to 0, before you success to answer to 10 question)
        "YOU LOSE! If you want retry, Press Enter"
    ```
 - for draw keyboards and various function
    ```
    explanation_box_width = 500;
    explanation_box_height = 600;

    Main_button_width = 440;
    Main_button_height = 80;
    GoToMain_button = 50;
    Level_button_width = 300;
    Level_button_height = 100;
    Shop_button_width = 250;
    Shop_button_height = 70;

    white_key_width = 140;
    white_key_height = 370;
    black_key_width = 90;
    black_key_height = 225;
    black_key_interval = 50;
    ```
 - for create new class
    ```
    player
      : class musicAnswer
    character
      : class musicQuestion
    ```

 - for particle effect
    ```
    particleStar
      : make a new array
    
    star_number = 5
      : number of particle at 1 frame
    ```

 - for write alphabet of key with for loop
    ```
    What_Key_B = ["S", "D", "", "G", "H", "J"]
    What_Key_W = ["Z", "X", "C", "V", "B", "N", "M"]
    ```
 - for set sound to each level
    ```
    current_instrument
      : draw on the screen what current instrument is.
      : and set question and player keyboard's sound to that instrument

    buy_celesta = "Buy"
    buy_accordion = "Buy"
      : Before buy that instrument, there is a "Buy" button.
      : After buy, that text changed to "Select."
    ```

 - count things related to the Level
    ```
    current_gold
      : count gold now player have

    current_life = 5
      : count lives now player have
      : If current life is 0, game over.

    count_correctAnswer
      : count correct answer
      : If count_correctAnswer is 10, clear level, and get gold.

    clearLevel
      : Indicates what level the player has cleared
      : If clearLevel is "clear1", player can choose between level1 and level2.
        If clearLevel is "clear2", can choose among level1, level2, and level3.

    clearLv1
    clearLv2
    clearLv3
    clearLv4
      : count the number of times the level is cleared.

    ```


----


## 4. Conditional Statements

- function Button (function.js | line 18-30)
```
    If your curser is on the button,
    button color changed from white to pale pink.
```
```
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
```

- SelectLevel page (sketch.js | line 173-193)
```
    If your curser is on the button of level,
    the explanation box about each stage is appeared on right screen.
```
```
        if(mouseX > width/6 - Level_button_width/2 && mouseX < width/6Level_button_width/2
        && mouseY > height * 2/7 - Level_button_height/2 && mouseY < height *7 + Level_button_height/2)
        {
        explanation_box(530, 130, explanation_box_width, explanation_box_height,
            "In Level 1, \n play three codes randomly. \n You can press the ke\n after look piano keys \n next to character. \n on these keys, write alphabets of keys. \n\n number of clear \n " + clearLv1);
        }

    like this.
```

- function speechBubble (function.js | line 77-95)
```
    If you press the key, text in speech bubble changed.
    (3. Variables - NOTICE)
```
```
    if(wrong_SFX.isPlaying() === true)
    {
        NOTICE = "It's wrong! \n Press Enter to next question";
    }

    like this.
```

- function playing_character (function.js | line 101-120)
```
    character's arm is moving every time.
    And character's face changes depending on the your answer.
```
```
    if(second()%2 == 0)
    {
        image(chara, 980, 220, 350, 350);
    } else if(second()%2 == 1)
    {
        image(chara_1, 980, 220, 350, 350);
    }

    like this.
```

- function star_particle_effect (function.js | line 154-160)
```
    If you clear level, star particles are drawn.
```
```
    if(clap_SFX.isPlaying())
    {
        for(let i = 0; i<star_number; ++i)
        {
            particleStar.push(new Particle(x, y));
        }
    }
```

- function keyPressed (keyPressed.js | line 19-175, 178-232)
```
    If you press key [Z S X D C V G B H N J M],
    plays each code and push the code in musicA array.

    If you press Enter key, new question is made.
    Arrays of previous question is all reset.

    And If you fail the level, press Enter key, you can retry that level.
```
```
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

    like this.
```

- function mouseReleased (mouseReleased.js)
```
    If you click button, click SFX is played, changed current page,
    and buttons' color changed from pale pink to dried rose color.

    In Shop page, if click play button("▶"), sample sound of each instrument is played.
    At that time, background music is paused.
    After sample sound is end, background music is played again.
    And if you have more than 50 golds, you can buy celesta or accordion sound.
    If you have less than 50 golds, you can click buy button but can't buy. Just SFX played.

    Like buy button on shop page, you can't select another level before clear previous level.
```
```
    if(mouseX > width/2 - Main_button_width/2 && mouseX < width/2 + Main_button_width/2
        && mouseY > height * 4/8 - Main_button_height/2 && mouseY < height * 4/8 + Main_button_height/2)
    {
        click_SFX.play();
        CurrentPage = SelectLevel;
    }


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

    like these.
```

- class musicQuestion (musicQuestion.js | line 39-66, 92-96, 99-118, 126-130)
```
    If code sound is playing, the corresponding color of the key
    changed from white or black to hot pink.

    And case of black keys, third space is no key,
    so draw black keys without third key with for loop and conditional statement.
```
```
    if(pianoC.isPlaying() === true || celestaC.isPlaying() === true || accordionC.isPlaying() === true)
    {
        rect(x+1, y, (white_key_width*0.5), (white_key_height*0.5));
    }


    for(let column = 0; column < 6; column++)
    {
        if(column !== 2)
        {
            fill(0);        
            rect(x + (((black_key_width + black_key_interval)*0.5)*column+1), y, (black_key_width*0.5), (black_key_height*0.5));
        }
    }

    like these.
```


- class musicAnswer (musicAnswer.js | line 30-62, 74-81, 84-103, 107-111)
```
    If you press the keys of piano keyboard, the corresponding color of the key
    changed from white or black to hot pink.

    And likewise class musicQuestion, draw black keys without third key
    with for loop and conditional statement.
```
```
    if(keyIsPressed === true)
    {
        if(key === 'z')
        {
            rect(x+1, y, white_key_width, white_key_height);
        }
    }


    if(column !== 2)
    {
        fill(0);        
        rect(x + ((black_key_width + black_key_interval)*column+1), y, black_key_width, black_key_height);    
        fill(255);
        textSize(55);
        text(What_Key_B[column], x + + black_key_width/2 + ((black_key_width+black_key_interval)*column), y + black_key_height*5/6);
    }

    like these.
```


 - function updateLevel 1-4 (updateLevel.js | line 10-25, 34-52, 61-82, 91-115)
 ```
    To use conditional statement, apply to play the sound of the selected instrument.
 ```
 ```
     if(current_instrument === "PIANO")
    {
        musicQ_sound.push(random(PianoCode));
        musicQ_sound.push(random(PianoCode));
        musicQ_sound.push(random(PianoCode));
    } else if(current_instrument === "CELESTA")
    {
        musicQ_sound.push(random(CelestaCode));
        musicQ_sound.push(random(CelestaCode));
        musicQ_sound.push(random(CelestaCode));
    } else if(current_instrument === "ACCORDION")
    {
        musicQ_sound.push(random(AccordionCode));
        musicQ_sound.push(random(AccordionCode));
        musicQ_sound.push(random(AccordionCode));
    }

    like this.
 ```


 - function make_musicQ_array (updateLevel.js | line 232-268)
 ```
    For compare question and your answer, make question's array to use conditional statement.
    Array musicQ_sound is an array of sound files, so can't compare.
    So make another array to compare.
 ```
 ```
    if(musicQ_sound[i] == pianoC || musicQ_sound[i] == celestaC || musicQ_sound[i] == accordionC)
    {
        musicQ.push("codeC");
    }

    like this.
 ```


 - function judgement (updateLevel.js | line 134-141, 143-147, 153-167, 171-185, 190-204, 209-222)
 ```
    To use conditional statement, compare musicQ array and musicA array.

    If correspond that arrays, count_correctAnswer is increases 1, and played right_SFX.
    And if clear that level(count_correctAnswer is 10),
    particles are drawn, played clap_SFX, and you get golds.

    If not correspond, life is decreases 1, and played wrong_SFX.
 ```
 ```
    if(musicA.length === i+1 && musicQ[i] !== musicA[i])
    {
        wrong_SFX.play();
        musicQ_sound.splice(0, musicQ_sound.length);
        musicQ.splice(0, musicQ.length);
        musicA.splice(0, musicA.length);
        current_life--;
    }

    like this.
 ```

 - to remove particles (sketch.js | line 109-112)
 ```
    If star particles goes out to canvas, remove particles,
    to reduce the amount of data occupied.
 ```
 ```
    if(particle.position.x > width || particle.position.x<0 || particle.position.y > height)
    {
        particleStar.splice(i, 1);
    }
 ```

----

## 5. Loops
I used only for loop to coding shortly and simply.
  - to draw and remove particle
  ```
    for(let Particle of particleStar)                       //sketch.js | line 100
    for(let i = particleStar.length-1; i>=0; --i)           //sketch.js | line 106
  ```
  - to draw keyboard (both character's and player's)        
  ```
    for(let column=0; column < 7; column++) //white key
    for(let column = 0; column < 6; column++) //black key

    //musicQuestion.js | line 33, 71, 90, 124
    //musicAnswer.js | line 23, 57, 72, 105
  ```
  - to play question sound and sample sound of instrument
  ```
    for(let i=0; i< musicQ_sound.length; i++)               //updateLevel.js | line 123
    for(let i = 0; i < sample_piano.length; i++)            //mouseReleased.js | line 57

    like these.
  ```

----

## 6. Functions
 - Button (function.js | line 7-47)
 ```
    Button function has the parameters of button's size and text.
    So it can use when I made any button anywhere.
 ```

 - HomeMark (function.js | line 50-60)
 ```
    It only used 'go to main page' button.
    It drawn on the button.
 ```

 - speechBubble (function.js | line 63-97)
 ```
    It is a function to draw speech bubble and texts in that each level.
    It drawn under the character's keyboard.
 ```

 - playing_character (function.js | line 99-121)
 ```
    Character's arms are move once a second, like playing instrument.
    And the face changes depending on the result.
    There is no particular function, just to decorate the screen,
    and in order to provide visual familiarity.
 ```

 - explanation_box (function.js | line 123-133)
 ```
    In SelectLevel page, if your mouse curser is on the level button,
    explanation box is drawn.
    Because the descriptions vary each level, so added the parameter about text.
 ```

 - life (function.js | line 135-149)
 ```
    It draw life you have as heart shape.
    If you press wrong code, life is decrease 1.
 ```

 - star_particle_effect (function.js | line 152-161)
 ```
    If you clear level, particles of star shape are drawn.
    The color of particles is random(red, white, pink, yellow, pastel purple...)
 ```


----

## 7. Classes
 - To draw particle effect
    - Vec2 (to drop the particles)
    - Particle (to draw colorful star shape particle)

    I reuse Vec2 class and Particle class I made when I did exercise.

    To inform players that they have cleared the stage through visual effects other than text.

 - To draw keyboards
    - musicQuestion (character's keyboard)
    - musicAnswer (player's keyboard)

    I thought it is better to use class to draw than function.
    Because in needs
    ```
    Arrays
        - musicQ_sound
        - musicQ
        - PianoCode
        - CelestaCode
        - AccordionCode
    ```
----

## 8. Arrays
 - To draw alphabets on the keyboard
    ```
    What_Key_B = ["S", "D", "", "G", "H", "J"];
    What_Key_W = ["Z", "X", "C", "V", "B", "N", "M"];
    ```
    I want to don't hard coding. So I made array, and use for loop so draw that alphabets with simple code.
 - To draw particles
    ```
    particleStar = [];
    ```
 - To play sound
    ```
    * sample sound
        sample_piano = [pianoC, pianoD, pianoE, pianoF, pianoG];
        sample_celesta = [celestaC, celestaD, celestaE, celestaF, celestaG];
        sample_accordion = [accordionC, accordionD, accordionE, accordionF, accordionG];


    * question sound
        musicQ_sound = [];
          : push codes randomly every level, every question.

        PianoCode
          = [pianoC, pianoCs, pianoD, pianoDs, pianoE, pianoF, pianoFs, pianoG, pianoGs, pianoA, pianoAs, pianoB];

        CelestaCode
          = [celestaC, celestaCs, celestaD, celestaDs, celestaE, celestaF, celestaFs, celestaG, celestaGs, celestaA, celestaAs, celestaB];

        AccordionCode
          = [accordionC, accordionCs, accordionD, accordionDs, accordionE, accordionF, accordionFs, accordionG, accordionGs, accordionA, accordionAs, accordionB];
    ```
    If I made a game with particular songs, the capacity would have become too large.

    So I change the game
    >play particular songs -> play some codes randomly .

    For minimize capacity, I made sound files by code.

    And I thought, the sample sound should be the same note, to compare the sound of each instrument.
    It shouldn't play randomly. So I made arrays for sample sound.
    ```
    sample_piano  /  sample_celesta  /  sample_accordion
    ```
    And for play codes randomly, I should use random().

    So I should that sound files put together.

 - To compare question and answer, and judgement
    ```
        musicQ = [];
          : push codes randomly every level, every question.

        musicA = [];
          : if you press keyboard, push corresponding codes every level, every question.
    ```
    I can't use musicQ_sound array. Because in that array, there are sound files.
    So can't be compared.

    So I made another array to use text only. 
# The Pastel Jukebox :radio:
![The Pastel Jukebox Game](https://github.com/jyennnn/the-pastel-jukebox/blob/main/images/readme/ThePastelJukebox-StartMenu2.png?raw=true)


## Concept 
A minimalistic and aesthetically pleasing rhythm beat game. <br>
Play and discover a curated collection of local music from <strong>Singapore</strong>.<br>
While our local music may not be widely recognized, this game aims to bring awareness of Singaporean music to the world by combining engaging visuals and enjoyable gameplay.</p>


<strong>Experience the game here: </strong> https://jyennnn.github.io/
</br>
</br>


## Game Walkthrough 
<strong>1. Start Menu</strong></br>
Begin the game by clicking the "Start" button.

<strong>2. Song Selction Menu</strong> </br>
Explore a diverse range of songs and select a song you wish to try.</br>
Click "Play" when you're ready.
![The Pastel Jukebox Song Menu](https://github.com/jyennnn/the-pastel-jukebox/blob/main/images/readme/ThePastelJukebox-SongMenu2.png?raw=true)

<strong>3. Game Instructions</strong></br>
Access the instruction menu by clicking the "i" icon located at the top left corner.</br></br>
![The Pastel Jukebox Info Menu](https://github.com/jyennnn/the-pastel-jukebox/blob/main/images/readme/ThePastelJukebox-InfoMenu2.png?raw=true)
<em><strong>There are 5 main keys representing different colored balls:</strong></em></br>
Press <em><strong>'S'</strong></em> for the green ball.</br>
Press <em><strong>'D'</strong></em> for the blue ball.</br>
Press the <em><strong>spacebar</strong></em> for the pink ball.</br>
Press <em><strong>'K'</strong></em> for the yellow ball.</br>
Press <em><strong>'L'</strong></em> for the purple ball.</br>

Hit the corresponding keys based on the color of the falling balls.</br>
The balls fall in sync with the rhythm and melodies of the song.</br>
Aim for accurate timing to achieve higher grades and scores.

<strong>4. Scoring System</strong></br>
There are four types of scores for each ball:</br>
<em><strong>"Perfect"</em></strong>, <em><strong>"Great"</em></strong>, <em><strong>"Poor"</em></strong>, and <em><strong>"Miss"</em></strong></br>

![The Pastel Jukebox Gameplay](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExN2pnbWxjeHlsYm9hbTY4aTg5bXkwd2xxa3pqeWd5bXM2MzJveWQ5ZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/tMg4vRyBz1tUXFKmNJ/giphy.gif)

Points awarded for each score type:</br>
<em><strong>Perfect + 1500 points</br>
Great + 1000 points</br>
Poor + 500 points</br>
Miss - 500 points</em></strong></br>

<strong>5. Combos</strong></br>
Hitting consecutive balls without missing increases your combo counter.</br>
<em>*Additional benefits for combos will be included.
For example, reaching a 100 combo will double the score per ball.</em>


## Game Creation Process

### Technologies Utilized

This game is built with Javascript, HTML & CSS. 

### Approach Taken

###### HTML
> There are 4 main menus
> - Start
> - Song Select
> - Information 
> - Gameplay 

Imagine these menus as different pages of a book. </br>
Page 1 is the <em>Start Menu</em>.</br>
Flip to the next page - <em>Song Menu</em>.</br>
<em>Info Menu</em> is like a sticky note that can be removed and placed on any page.</br>
<em>Game Menu</em> is the last page where all the magic happens.</br>

>This thought process allowed me to visualise the game in layers, hiding and revealing the pages.</br>
The same approach was applied to the song player.

###### CSS

Primarily utilized for styling the game, including key-press-triggered animations.</br>

>During the styling process, I gained insights on using <code>"position: absolute"</code> & <code>"transform: translate(-50%, -50%)"</code>.</br> 
This was helpful with centering items especially when resizing the browser.</br>

###### Javascript

For Javascript, it was divided into six layers:
>- <strong>Layer 1 - Main Purple Background</strong>

> - <strong>Layer 2 - Start Menu</strong>

Clicking "start" initiates the preview of the first song, progressing to the song menu.

>- <strong>Layer 3 - Song Menu</strong>

The song player's core logic revolves around storing each song as an object within an array.</br> 
Song selection is achieved using array indexes and conditional statements.

> - <strong>Layer 4 - Score System</strong>

A variable was used to store and update the score, misses, and other relevant details in each function.</br>
The updated score was then displayed using <code>innerHTML.</code>

>- <strong>Layer 5 - Gameplay layer (stationary objects)</strong>

Canvas and classes were used to draw circles and lines, while event listeners were used for the key light-ups.

>- <strong>Layer 6 - Gameplay layer (song #1)</strong>

<strong>Two main logics controlled this layer:</strong><br>
1. Creation of balls 
2. Removal the balls</br> 

Each ball was created with a delay set according to the beat/melody of the song.</br>
Each ball was removed by splicing them out of the array to stop the animations</br> 
Conditional statements and Y-axis adjustments were mostly utilized.

>- <em><strong>*Layer 7 & more - Gameplay layer (song #xx)</em></strong>

</br> 

### Challenges Faced 

- <strong>Low quality and blurry canvas</strong></br>
Initially, the drawings on the canvas appeared blurry.</br>
To fix this, the canvas was configured at the start to enhance its quality.

</br>

- <strong>Detecting beats</strong></br>
In the beginning, efforts were made to detect a beat using JavaScript and release balls randomly in sync with the beat.</br> 
However, balls released on the beat would no longer align with it when reaching the bottom.</br>
Incorporating a delay posed an additional challenge since beat detection needed to occur before ball release.
</br> Ultimately, this idea was abandoned.

</br> 

- <strong>Animation &  Javascript Logic</br></strong>
Creating animations on the canvas involved redrawing circles multiple times based on the X and Y axes.</br> Initially, removing balls upon key presses involved reducing the radius to 0.</br> Although visually acceptable, this method resulted in numerous unnecessary radius removals, impacting the score calculation.</br> To resolve this, newly created circles were stored in an array, allowing for their removal.


### Current Bugs to be Fixes 

- <strong>Only works on full screen</strong></br>
The game can only be played in fullscreen mode. While the first two menus (start and song menu) were styled with CSS and can be resized, the gameplay screen is currently fixed. Therefore, starting with a small screen will result in cut-off elements.

</br>

- <strong>Only 1 song</strong></br>
Currently, only the Jyen - Guy song is playable, while others are not yet ready for gameplay.

</br>

- <strong>Animations not very smooth</strong></br>
The hits animation could be improved for smoother visual effects.

</br>

- <strong>Some balls positioned too closely</strong></br>
Some falling balls are positioned too closely, resulting in multiple balls being hit simultaneously.

</br>

- <strong>CSS</strong></br>
CSS contains redundant styles that could be further optimized.

### Additional Features to be added 
- Return to the song menu
- Add combo benefits
- Add songs
- Add a grading system <em>(eg: A, B, C, D, FAIL)</em>
- Add an audio wave visualizer in the background
- Add database of highscores
# The Pastel Jukebox :radio:
![The Pastel Jukebox Game](https://github.com/jyennnn/the-pastel-jukebox/blob/main/images/readme/ThePastelJukebox-StartMenu2.png?raw=true)


## Concept 
A minimalistic and aesthetically pleasing rhythm beat game. <br>
Play and discover a curated collection of local music from <strong>Singapore</strong>.<br>
While our local music may not be widely recognized, this game aims to bring awareness of Singaporean music to the world by combining engaging visuals and enjoyable gameplay.</p>


<strong>Experience the game here: </strong> LINK 
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

##### Technologies Used 

This game is built with Javascript, HTML & CSS. 

##### Approach Taken

There are 4 main menus - 
Start Menu, Song Menu, Info Menu & Game Menu

In HTML, I built these menus like pages. 
Page 1 is the Start Menu. 
You flip to the next page, you see the song Menu. 
The Info Menu is like a post it note, you can remove it and paste it on a page whenever you like. 
The Game Menu is the last page where the magic happens. 

With this thought process, I am able to visualise the game in layers where I can hide and reveal the pages that I require. 

I used the same method for the song player as well. 

For CSS, it was used mainly to style the game and some simple animations that get triggered by key presses. Some things I learnt from styling this is - 
Since everything is on a single page, at different locations, not like a flex column or row. I had to use position - absolute in order to place the items at their exact position. Using "transform: translate(-50%, -50%)" help to centralise items to their parent container. especially when resizing the browser. 

For Javascript, I split them up into 6 layers. 
Layer 1 - Main purple Background 

Layer 2 - Start Menu 
once I click start, the song preview of the first song starts. and we go to the song menu. 

Layer 3 - Song Menu 
the main logic for this is the song player. 
I saved each song in an object so that I can save different details of each song. 
This object is pushed into an array which browse through. 
I used the array indexes of each object, and if / else statements. 

Layer 4 - Score System 
The main logic used for this is creating a variable to store the score/misses/etc and adding/subtracting to it when each function is ran. 
Once I get the new score, i would replace the innerHTML value. 

Layer 5 - Gameplay layer (stationary object that will not change)
I used simple canvas and classes to create the objects here. 
Some simple event listeners for the key light ups.

Layer 6 - Gameplay Song Layer 
There are 2 main logics here - 
creating the balls 
removing the balls and calling the score functions. 

Creating the balls - 
I used setTimeout to add a delay to each ball. Hence these balls will be created at different times according to the beats i create. Using garage band, I note out all the timestamps I would like the ball to be created.

Removing the balls - 
If the ball is within range, I splice them out of their array so they stop animating. When this happens, a score is also added. I used  a lot of if and else and played around with the ball's y axis. 

Layer 7..... - the layers onwards will each be for a different song. 


##### Challenges Faced 

On the canvas, my drawings were initially very blur. Hence, I found a way to configure my canvas at the start to increase the quality of the canvas. 

At the start I was looking for a way for Javascript to detect a beat and release balls randomly to the beat. I managed to do this, however, it would release the balls on the beat, and when it reaches the bottom, it wouldn't be on the beat anymore. I was also unable to set a delay, as it needs to detect the beat first before releasing the balls. 
This idea was scraped in the end.

In order to create an animation on canvas, i would have to draw the circle many times according to the x & y axis. My first way of removing the balls when the keys are pressed is making the radius to 0. this is fine visually, however, internally javascript is removing this radius a whole lot of times. 
I was using this to measure the score at the start. and instead of increasing the score by 1 it increase by 300. 

In order to fix this, I had to put the new circles i created in an array. And remove this circle from the array. 



##### Current Bugs to be Fixes 
The game can only be played on a full screen. 
the first two menus - start & song menu has been styled with CSS and are able to be resized. However, the gameplay screen is currently fixed. You have to start with a big screen. if you start with a small screen. things will get cut off. 

Currently, only Jyen - Guy is playable. The rest are not ready to be played. 

The hits animation is not working the best, can make the animation smoother. 

some falling balls are too close to each other, causing multiple balls to be hit at the same time.

CSS has many repeated styles, I can reduce it more. 

##### Additional Features to be added 
- be able to go back to song menu 
- add combo benfits 
- add more songs 
- add a grading like "A, B, C, D, Fail" 
- add animation to the background each time a ball is hit
- add a audio wave visualiser to the background which visualises the song
- add more interesting animations to the key light ups 
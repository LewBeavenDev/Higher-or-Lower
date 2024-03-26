# Higher or Lower Game

## Milestone Project 2 - Interactive Front-End Site

<img src="assets\images\mockup.png">

Higher or Lower is a card game where you guess whether the next card is higher or loer than the one you are shown. The player can bet points to try and get the highest score possible.

## Live Project

[Live Site Link](https://lewbeavendev.github.io/Higher_or_Lower/)

## Repository

[View The Repository Here](https://github.com/LewBeavenDev/Higher_or_Lower?tab=readme-ov-file)

## Site Owner Goals

- To provide the user with a fun mini game.
- To allow the user to keep track of a points total.
- To allow the user to bet different amounts of points to potentially win more points.
- To package the game within an aesthetically pleasing, modern looking page that is easy to use and fun to play.
- To make the game fully in vanilla JavaScript to grow my foundation of knowledge. 

## User goals

- An easily useable UI with intuitive design
- All rules of game are clearly explained

## Design Choices

### Color Scheme


<img src="assets\images\higher_or_lower_palette.png">

- The color palette of the page is inspired by casino/online poker tables. Dark background with a bright green felt color table keeping the users eyes on what is important. Bright differently colored buttons to highlight to the user the difference and function. 

- overall the color scheme is simple but pops and draws the users eyes to what is important. 

### Typography

- I have used the Open Sans font for the whole page as it is easily readable and keeps the pages looking clean and simple. 

### Aesthetics 

- The overall aesthetics reflect the table of a card game. The smooth edges and pastel buttons are easy on the eyes and clearly redable. 
- The eyes naturally focus on the card in the center as it sits in its own seperate compartment. 

## Wireframes 

<img src="assets\images\higherOrLowerWireFrame.png">

- My wireframe was made in Figma

## Features

## Landing/Welcome Page

<img src="assets\images\landingPage.png">

- The landing page instantly welcomes you to the page and explains the rules of the game and how it works.
- Due to there only being one page on the website the site doesnt have a traditional nav bar, instead a header that functions as a button which resets the page for the user. 
- The Play button has a tactile hover and active effect alongside a birght but soft color to clearly navigate the user to the game. 
- The button has a tactile click sound upon press to give a pleasing sensory feel to it. 

## Game Page Features

<img src="assets\images\gamePage.png">

- The play area has the main card area showing the user the card drawn. This is generated through various arrays and properly shuffled and the result is assigned the corresponding card .svg to show the user the card drawn. 
- Underneath are the user interface buttons. Both sides are differently colored so the user subconsciously understands the two pairs of buttons are for different things. 
- The increase and decrease bet buttons are placed above and below the bet size so the user intuitively knows what to expect upon pressing the buttons. 
- The users total score is placed in the middle as that is the key score the user wants to keep track of. 
- The higher/lower and increase/decrease buttons are placed with the higher on top and lower below to further make the interface feel intuitive. 

## Lose Screen Features

<img src="assets\images\lossScreen.png">

- The game loss screen is clearly colored red to show to the user that they have lost.
- Underneath the title it explains why the user lost in case they didnt understand.
- At the bottom is a play game button which redirects the user to play again.

## Win Screen Features

<img src="assets\images\winScreen.png">

- The game win screen is colored blue to reflect the game loss sceen. 
- The game win screen shows the users score so they can keep track of how well they have done. 
- At the bottom is a play game button which redirects the user to play again.


## Future Features 

## Gameplay 

- The first thing I would implement is a card counter to tell the user how many cards are left 
- I would implement an openable discard pile which gives the user the ability to physically see all the discarded cards to inform themselves on the likelihood of the next card being higher or lower. 
- I would implement the ability to hold the increase/decrease buttons to make betting larger and smaller amounts later into the game easier.
- I would like the sound of chips landing to play when the user was correct and a negative sound to play when the user is wrong.
- I would also like to implement a leaderboard or the ability for the user to log in and compete against other players. 


## Samples

- [Button click sound](https://pixabay.com/sound-effects/ui-click-43196/)

## Resources Used

- [Mockup images](https://techsini.com/multi-mockup/index.php)
  - This was used to capture the images showing responsiveness across platforms and devices. 
- [Color palette](https://coolors.co/)
  - This was used to combine and show all the colors used designing the page in an easy to see way.
- [Github](https://github.com/)
  - Github was used to host the repository.
- [Visual Studio Code](https://code.visualstudio.com/)
  - VSCode was used for all the code writing and version control within the project. This is linked to my Github. 

## Languages Used

- [HTML 5](https://en.wikipedia.org/wiki/HTML5)
- [CSS3](https://en.wikipedia.org/wiki/CSS)
- [JavaScript](https://en.wikipedia.org/wiki/JavaScript)

## Frameworks and Libraries

- No Javascript or CSS libraries or frameworks were used in this project as to further develop my understanding of the fundamentals. 
- [Google Fonts](https://fonts.google.com/)
  - Google fonts was used to import one font 'Open sans'.
- [Figma](https://www.figma.com/)
  - Figma was used for the wireframes. 
- [Firefox Developer Tools](https://firefox-source-docs.mozilla.org/devtools-user/)
  - Firefox developer tools was used to debug and test responsiveness through development. The console was also used to debug the JavaScript through development. 

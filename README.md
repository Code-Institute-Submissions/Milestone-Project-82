# Simon Memory Game #
## Interactive Front-End Milestone Project - Code Institue ##

A memory game based on the popular Simon game, made with HTML, CSS and JS and with
the aesthetic of an arcade stick.This game is build to be played in landscape mode on devices. I
have been experimenting with a way to only load the website in landscape but have not implimented
that function yet.  
The goal of this project was to show a better understanding of HTML amd CSS
and an understanding of the basics of JS.
  
[Live Website](ttps://james-stewart110.github.io/Milestone-Project-2/)

## UX ## 
![UX display](assets/images/simon-game-ux.png)

## Users ##
Expected users of this website include anyone with some time to challenge
their memory, possibly also other students that are learning to code.

## User Stories ##
1. The first user of this game missed the power switch and tried to start the game,
they wanted the instructions to be clearer so that the game was easier to understand.
2. Another user of the game enjoyed the functionality but found the sound effects to become
tedious after prolonged use, they wanted to have the choice to turn off sound.

## Design ##
#### Overall Design ####
The design of this game is based on a arcade stick. I chose this design as i am a big fan of the retro style and
and i belive its an original design.
* Colours
    * Heading 
        * Black with Whitesmoke outline - Stands out well and is easy to read against wood background.
    * Game Body Colour
        * #3b3535 - Darkish grey - nice flat colour for all other details to stand out against.
    * Text Colour
        * Whitesmoke - slightly off-white colour, stands out well but not as sharp as white.
    * Control Buttons
        * I used a [metallic background](https://simurai.com/lab/2011/08/21/brushed-metal) for the control buttons
        to give them a brushed metal look.
    * Start Button
        * The start button is supposed to be the top down view of the joystick.
        * Background - Crimson - Similar colour to many real joysticks.
        * Border - 2px black - Adds a thicker outline to the button giving it some added depth.
        * Box shadow - I used box-shadow to also try to give the button some extra depth.
        * Text - START in the center of the button in contrasting black so that players know instantly
        what the button does.
    * Game Buttons
        * Red - #cc2900
        * Green - #00b300
        * Blue - #0000cc
        * Yellow - #ffcc00
        * Button flash - #ffffff - went with white instead of lighter/darker shade of same colour
        as i thought white was more eye catching.
        * Border - 2px black - Adds a thicker outline to buttons giving them some added depth.
        * Box shadow - I used box-shadow to also try to give the buttons some extra depth.
* Font
    * 'Original Surfer - Imported from Google Fonts. I went with this font as its a nice playful font that's 
    rounded edges work well with the rounded edges of the game.
* Icons  
    All icons are from [Font Awesome](https://fontawesome.com/)
    * On Button
        * I went with a widely accepted icon for the on button as its
        easily recognisable to most people.
    * Mute Button
        * I went with a widely accepted icon the mute button as its
        easily recognisable to most people.
    * Strict Button
        * The strict button was a difficult one for me to find an icon for, i decided
        to use text instead of an icon for all screen sizes apart from small mobile, where there was not enough
        space for text. I went with the warning icon to warn players that this is a harder mode.
    * How To Play Button
        * The HTP button is only an icon on the small screen size(width < 375px). An open book icon
        and a heading telling players what the icon means appears. On larger screen sizes 'How To Play' is displayed
        in the button, so players can tell what the button does instantly.
    * Mute Display Light
        * Volume mute icon.
        * I went for a different icon for the display light than the button as i thought having the display light
        start in an off state with a sound on icon next to it, players would think the game started with mute on.
* Background
    * Wooden background, nice contrast from main body, meant to simulate a tabletop.
## Mockups ##
* [Mobile](https://www.figma.com/file/gx5vF479DgluyrWyXAh3Dt/Untitled?node-id=0%3A1)
* [Laptop](https://www.figma.com/file/1zp1vfMXCdszE00pfBrUZx/Simon-Wireframe?node-id=0%3A1)

## Features ##
### Planned Features ###
* Power button
* Mute button
* Strict button
* Start button
* Round counter
* Clickable buttons
* Flashing buttons
* Way to lock screen to landscape
* Click counter
* Responsive Design - Mobile first
* Deployed - Hosted on GitHub pages

### Implimented Features ###
* Power button
* Mute button
* Strict button
* Start button
* Round counter
* Clickable buttons
* Flashing buttons
* Responsive Design - Mobile first
* Deployed - Hosted on GitHub pages
<!--* Way to lock screen to landscape-->
<!--* Click counter-->

### Technologies Used ###

* [HTML](https://www.w3schools.com/html/)
    * HTML for core structure
* [CSS](https://www.w3schools.com/css/)
    * CSS for Styling
* [JS](https://www.w3schools.com/js/default.asp)
    * JS for programming behavior
* [Github](https://github.com/)
    * Github for hosting Repositories
* [Github pages](https://pages.github.com/)
    * Github Pages for hosting deployed website
* [Gitpod](https://www.gitpod.io/)
    * Gitpod for writing and editing code
* [Google](https://www.google.com/)
    * Google used for research
* [Chrome Dev Tools](https://www.google.co.uk/chrome/?brand=CHBD&gclid=CjwKCAjwmMX4BRAAEiwA-zM4JtckdMsWqMj45TMg2IdTSsaqZ5cnBYjWqGPGPgjICIwBtUYuaLbFrhoC4bwQAvD_BwE&gclsrc=aw.ds)
    * Google Chrome Dev tools for checking and real-time editing code
* [Google Fonts](https://fonts.google.com/)
    * Font stylings
* [Bootstrap](https://getbootstrap.com/docs/4.5/getting-started/introduction/)
    * Bootstrap for HTML and CSS framework
* [Font Awesome](https://fontawesome.com/)
    * Font Awesome for button icons
* [W3C Code Validator](https://validator.w3.org/)
    * For checking markup
* [Am I Responsive](http://ami.responsivedesign.is/)
    * Used to check responsiveness over mutiple screen sizes
* [Figma](http://figma.com/)
    * Figma for creating mockups
* [W3school](https://www.w3schools.com/)
    * w3schools for tutorials and HTML colour picker
<!--* <a src="https://en.wikipedia.org/wiki/Jasmine_(JavaScript_testing_framework)">Jasmine Testing</a>
    * Jasmine used to test JS code-->

## Testing ##
### Manual Testing ###
    * This project was manually tested by me and my family using chrome dev tools at each standard screen size.
    * Responsive Design - The look of the game does not change much between screen sizes, only the icons appearing
    on mobile and the game buttons getting bigger for larger screens.
* Mobile
    * Responsiveness - This project was made with mobile first development in mind so was continually tested throughout development.
    * Buttons - Cannot press any buttons ( apart from how to play ) while game is off, once on all buttons work correctly.
    * Display 
        * Mobile(min-width < 375px) Icons appear correctly on the control buttons and the instructions heading appears to direct 
        players to it.
        * Mobile(min-width > 375px) The icon of the how to play button are replaced with 'How To Play' correctly and the 
        instructions heading disappears. The size of the display lights also increases.
* Tablet
    * Responsiveness - Game becomes 70% of viewport width and 80% height taking up most of the screen.
    * Buttons - Cannot press any buttons ( apart from how to play ) while game is off, once on all buttons work correctly.
    * Display - Strict button icon replaced with 'STRICT'.
* Laptop
    * Responsiveness -  Game becomes 70% of viewport width and 80% height taking up most of the screen.
    * Buttons - Cannot press any buttons ( apart from how to play ) while game is off, once on all buttons work correctly.
    * Display - START  button and the coloured play buttons increase in size to fit larger container.
* Desktop
    * Responsiveness -  Game becomes 70% of viewport width and 80% height taking up most of the screen.
    * Buttons - Cannot press any buttons ( apart from how to play ) while game is off, once on all buttons work correctly.
    * Display - START  button and the coloured play buttons increase in size to fit larger container.
### Cross Browser Testing ###
* Google Chrome
    * This project was developed using Google Chrome and Chrome dev tools.
    * Base Functionality
        * The base functionality of the game works perfectly for this browser.
    * Design
        * The design looks as intended on all sizes.
        * Icons all appear and are properly sized.
    *  Responsiveness
        * Design is fluid and fits most screen sizes nicely.
* Microsoft Edge
    * Base Functionality
        * Tested through multiple games at each standard screen size - Game works well as intended.
    * Design
        * The design looks as intended on all sizes.
        * Icons all appear and are properly sized.
        * Imported font 'Original surfer' is properly loaded.
    *  Responsiveness
        * Design is fluid and fits most screen sizes nicely.
            * Tested manually using dev tools to check each standard screen size individually.

### W3C Code Validator ###
I used [W3C Code Validator](https://validator.w3.org/) to check the markup of my project.  
This process involved:

* Selecting all of the HTML code you want to check and copying it.
* Going to https://validator.w3.org/ and clicking the "Validate by direct input" tab.
* Then pasting your code into the text box and and pressing the check button below the text box.
* Any errors in your code will then be revealed.
#### HTML ####  
I had one error when i validated my code, all i had to do to fix it was move the 'title' tag further up the page
above the 'audio' tags.
#### CSS ####
I also only had one error with my css validation, it was a parse error. I had missed
a closing bracket on the mobile-medium media query
## Deployment ##
The live site is deployed on [GitHub pages](https://james-stewart110.github.io/Milestone-Project-2/).</a>

The process involved:

* Host a git repository on GitHub. [Explained here](https://kbroman.org/github_tutorial/pages/init.html).<br>
* The root folder contains README.md and index.html files<br>
* On GitHub repository settings page move to GitHub Pages section<br>
* Change source to master branch. (Or any desired branch)<br>
* Provided link will be your projects home (index) page.<br>

To deploy your own version of the website:<br>

* Have git installed<br>
* Visit the repository<br>
* Click 'Clone or download' and copy the code for http<br>
* Open your chosen IDE (Gitpod, VS Code, etc.)<br>
* Open a terminal in your root directory<br>
* Type 'git clone ' followed by the code taken from github repository<br>
  * git clone https://github.com/James-Stewart110/milestone-project-2.git<br>
* When this completes you have your own version of the website<br>
* The website can be run by opening one of the HTML files within a web browser<br>
* Visit the link provided<br>
* Your website with any made changes will appear<br>
* Saved changes to the website will appear here after refreshing the page<br>
* The benefits of hosting your website on GitHub pages is that any pushed changes to your project will automatically update the website. Development branches can be created and merged to the master when complete.<br>

It may take a moment for changes to appear on the hosted website.<br>

## Credits ##
* [Freecodecamp](https://www.freecodecamp.org/)
    * As this was my first project with JS, with the limited knowledge i have
    on the subject and also having learned to not try to re-invent the wheel, i decided
    to use code available to me online and fit it to my needs.
* [Instructions](https://www.hasbro.com/common/instruct/Simon.PDF)
    * Instructions from hasbro website
* [Background](https://www.toptal.com/designers/subtlepatterns/)
    * Background from subtlepatterns
* [Metallic background for buttons](https://simurai.com/lab/2011/08/21/brushed-metal)
### Media ###
* Audio for button sound effects from
    * [freecodecamp](https://www.freecodecamp.org/)

## Acknowledgements ##
Thanks to:
* [Owonikoko Oluwaseun](https://www.linkedin.com/in/oluwaseun-owonikoko-190318135/)
* Code Institue
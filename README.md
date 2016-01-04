# Akvanta
## A currently ASCII-based rougelike RPG written in Javascript.
Also, the first HTML5 project I've actually tried to write.
### Map Objects
The map displays as a 15x15 grid in the top left hand segment of the screen. So far, the app has only been tested for iPhone 5 and 6. Other screen sizes probably won't work without some modifications to the CSS. The player can only see objects immediately around them, and can only interact with objects they can currently see. 
The current characters that stand for objects are:
X - The player.
! - A trap.
o - An item.
1-5 - An enemy. Higher numbers mean higher difficulty to beat.
^ - Healing item.
$ - Gold
@ - Armor
& - Weapon


### TODO
* Comment all of the JavaScript.
* Write the Wiki.
* Deal with enemy actions.
* Add actions to the buttons.
* Basic game logic.
* Add regions/rooms/areas.
* Add an equipment screen.
* Add an inventory screen.
* Keep data persistent.
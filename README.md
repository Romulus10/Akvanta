# Akvanta
## A currently ASCII-based small-map dungeon-crawler written in Javascript.
Also, the first HTML5 project I've actually tried to write.
### Map Objects
The map displays as a 15x15 grid in the top left hand segment of the screen. So far, the app has only been tested for iPhone 5 and 6. Other screen sizes probably won't work without some modifications to the CSS. The player can only see objects immediately around them, and can only interact with objects they can currently see.  
The current characters that stand for objects are:   
X - The player.   
! - A trap.   
o - An item.    
1-3 - An enemy. Higher numbers mean higher difficulty to beat.   
^ - Healing item.   


### TODO
* Add regions/rooms/areas.
* Add an equipment screen.
* Add an inventory screen.
* Keep data persistent.
* Improve code efficiency- it's probably abysmal at the moment.
* Implement further game items and events.

# Version History
* *0.1.1* Optimized for smaller screens. Bugfixes including- Double death alert, no health potion stats refresh, enemies dying as soon as they're revealed, player not leveling up.
* *0.1.0* Initial Prerelease
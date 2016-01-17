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
$ - A coin.


### TODO
* Add an equipment screen.
* Add an inventory screen.
* Keep data persistent.
* Improve code efficiency- it's probably abysmal at the moment.
* Implement further game items and events.
* A merchant system- buy stat buffs.

# Version History
* *0.3.2* UI revisions. Started work on better support for smaller screens.
* *0.3.1* Minor changes.
* *0.3.0* Added a new spell, corrected small code problems, documentation updated. 
* *0.2.0* Large changes to the application core. Several bugs were addressed, including the wall stick bug. A manifest file for a Firefox OS application package was added, and a system for progressing through maps as earlier maps are cleared was implemented. As the player defeats maps, the maximum health of the enemies increases and their own level increases. The map level a player has reached is now displayed at the bottom of the stats display.
* *0.1.1* Optimized for smaller screens. Bugfixes including- Double death alert, no health potion stats refresh, enemies dying as soon as they're revealed, player not leveling up.
* *0.1.0* Initial Prerelease

# Feel free to file issues and pull requests- please file pull requests against the branch the change is related to.
* dev - Core game changes.
* UI Changes - Changes to the visual game- buttons, display, readouts, etc.
* Graphics - Adding graphics to the game itself.
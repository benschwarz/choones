#Choones

Growl "Music Video" style messaging for web applications

##About


Sending messages back to the user is often something that uses some strange
design pattern of adding a box to the top of a page, that pushes down the content or;
  Even worse, thrown into a 'lightbox'.

"Choones" is a jQuery plugin, with a little markup and some styles that mimics [Growl's](http://growl.info/)
"Music video" theme (pop up, from the bottom - its like watching rage/mtv)

##Usage

Messages can be sent with either a 'success' or 'failure' context, that is; the icon changes.

Sending a regular message can be done like this:

    $.choones("AC/DC", "Thunderstruck");
  
Perhaps you only want to set a title?

    $.choones("Akka Dacca");
    
Or you want them to dissapear a little bit quicker? (3 seconds in the example below)

    $.choones("AC/DC", "Dirty Deeds Done Dirt Cheap", {display_time: 3000});

Setting a 'failure' message

    $.choones("Megadeath", "Sad, sad sad", {type: 'failure'});
    
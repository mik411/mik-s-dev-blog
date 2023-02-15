/*
#TODO
Playing with inputs and jQuery selectors
Create a button that allows text to be changed from "Help Me" 
To **"Hello Interactive Developers"**

https://api.jquery.com/click/
https://www.w3schools.com/jquery/event_click.asp
https://api.jquery.com/on/
*/
$(document).ready(function(){
    //insert your own code
    $("button").click(function(){
      $("p.help").text("Hello Interactive Developers");
    });
  });//eof
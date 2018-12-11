$(document).ready(function(){

    var topics = ['Gentle Giants', 'Floofy Doggos', 'Silent Hunters'];

   

    for (i = 0; i < topics.length; i++){

        var gifButton = $("<button>");

       
        gifButton.text(topics[i]);
        $("#button").append(gifButton);
    }

    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + elephant + "&api_keyFiNQYJ3gkPlRMs1mDNZ93hgjtmVyZbDYlimit=10"
    
    $.ajax({
       url: queryURL,
       method: "GET"
    }).then(function(response){

        console.log(response);
    })
})
$(document).ready(function () {

    

    var topics = ['Dog', 'Cat', 'Elephant'];
   
    
    //For loop to make button for each item in the topics array
    for (i = 0; i < topics.length; i++) {  
        var gifButton = $("<button type=button,data-toggle=button, aria-pressed=false>");
        gifButton.attr("data-topic", topics[i]);
        gifButton.text(topics[i]);
        gifButton.addClass('buttons btn btn-secondary');
        $("#button-div").append(gifButton);
        console.log(gifButton);
        
}

//On click event for buttons 

$(document).on('click', 'button', function () {
    event.preventDefault();
   
    var picture = $(this).attr("data-topic");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + picture + "&api_key=FiNQYJ3gkPlRMs1mDNZ93hgjtmVyZbDY&limit=10";
    
    //giphy API URL call
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(queryURL);
        console.log(response);
        var results = response.data;

        // For loop to append giph pics from data of button
        for (i = 0; i < results.length; i++) {  
            var giphyPics = $('<div>');
            var topicPic = $('<img>');
            topicPic.attr("src", results[i].images.fixed_height.url);
            var p = $('<p style=font-family:cursive>').text("Rating: " + results[i].rating);
            $("#giphyPics").append(topicPic,p);    
        }  
    })   
})
//Function to create new button and add it to DOM
function newButtons(){
    
    $('#new-button').on('click', function(){
        event.preventDefault();
        var nButton = $("#newButton").val();
        var newButton = $("<button type=button,data-toggle=button, aria-pressed=false>");
        newButton.text(nButton);
        newButton.addClass('buttons btn btn-secondary');
        $("#button-div").append(newButton);
        
        //Push new button value to topics array
        topics.push(nButton);
        $("#button-div").empty();

        // For loop to create new button from user input
            for (i = 0; i < topics.length; i++) {
                var nGiph = $("<button type=button,data-toggle=button, aria-pressed=false>");
                nGiph.attr("data-topic", topics[i]);
                nGiph.text(topics[i]);
                nGiph.addClass('buttons btn btn-secondary');
                $("#button-div").append(nGiph);                
            }
        })
    }
    newButtons();
    
})

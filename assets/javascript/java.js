$(document).ready(function () {

    

    var topics = ['Dog', 'Cat', 'Elephant'];
   
    
    //For loop to make button for each item in the topics array
    for (i = 0; i < topics.length; i++) {
        
        var gifButton = $("<button>");
        gifButton.attr("data-topic", topics[i]);
        gifButton.text(topics[i]);
        $("#button-div").append(gifButton);
        console.log(gifButton);
       
}


    //On click event for buttons 

    $('button').on('click', function () {
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
            
            for (i = 0; i < results.length; i++) {

                var giphyPics = $('<div>');
                var p = $('<p>').text("Rating: " + results[i].rating);
                var topicPic = $('<img>');
                topicPic.attr("src", results[i].images.fixed_height.url);
                
                // $(giphyPics).append(p, topicPic);
                $("#giphyPics").append(p,topicPic);
                
                // console.log(button)
                
            }
           
            function newButtons(){
                
                $('#new-button').on('click', function(){
                    event.preventDefault();
                    var nButton = $("#newButton").val();
                     var newButton = $("<button>");
                     newButton.attr("data-topic", topics[i]);
                     newButton.text(nButton);
                    $("#button-div").append(newButton);
                    topics.push(nButton);
                    
                    console.log(nButton);
                    console.log(topics);
                    console.log( newButton);
               })
               
            }
            newButtons();
            
        })
       
    })
    
})

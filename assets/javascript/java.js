$(document).ready(function () {

    var topics = ['Dog', 'Cat', 'Elephant'];

    $("#gifButton").empty(); 

    //For loop to make button for each item in the topics array
    for (i = 0; i < topics.length; i++) {

        var gifButton = $("<button>");
        gifButton.attr("data-topic", topics[i]);
        gifButton.text(topics[i]);
        $("#button-div").append(gifButton);
    }
    //On click event for buttons 
    $('#gifButton').on('click', function () {
        event.preventDefault();
        var picture = $(this).attr("data-topic");
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + picture + "&api_key=FiNQYJ3gkPlRMs1mDNZ93hgjtmVyZbDY&limit=10";
        //giphy API URL call
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {

            var results = response.data;

    for (i = 0; i < results.length; i++) {

        var giphyPics = $('<div>');
        var p = $('<p>');
        var topicPic = $('<img>');
        topicPic.attr("src", results[i].images.fixed_height.url);
        $(giphyPics).append(p, picture);
        $("#giphyPics").append(topicPics);
        console.log(results);

    }
        })
    })
    
})

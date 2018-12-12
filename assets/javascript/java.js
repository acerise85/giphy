$(document).ready(function () {

    var topics = ['Dog', 'Cat', 'Elephant'];
    $("#button").empty();
    for (i = 0; i < topics.length; i++) {
        
        var gifButton = $("<button>");

        gifButton.text(topics[i]);
        $("#button").append(gifButton);
    }
    $('#button').on('click', function () {

        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + topics + "&api_key=FiNQYJ3gkPlRMs1mDNZ93hgjtmVyZbDY&limit=10";
        
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {

            console.log(response);
       
            var results = response.data;

            for (i = 0; i < results.length; i++){

                var topicDiv = $('<div>');
                var s = $('<span>');
                var topicPic = $('<img>');

                topicPic.attr("src", results[i].images.fixed_height.url);
                $(topicDiv).append(s,topicPic );
                $("#giphy-pics").append(topicDiv);
            }
       
       
        })
    })
})
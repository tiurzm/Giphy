var disney = ["Tinker Bell","Evil Queen", "Mickey Mouse", "Pocahontas", "Mother Gothel", "Pascal", "Mowgli", "Violet Parr", "Megara", "Simba", "Robin Hood", "James P. Sullivan", "Marie", "Dory", "Nick Wilde", "Bing Bong"]; 
    
    for(var i = 0; i < disney.length; i++){
        var newButton = $("<button>");
        newButton.attr("data-character", disney[i])
        newButton.text(disney[i]);
        $("#character-button").append(newButton);
    }
    

    $("button").on("click", function(event){
        event.preventDefault();
        var character = $(this).attr("data-character");
        var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + character + "&api_key=VVy1qq3CVz412GDiIaDHXKBkxXzX14kh&limit=10";
    
        $.ajax({
            url: queryURL,
            method: "GET"
        }) .then(function(response){
            for (var j = 0; j < response.data.length; j++) {
                var url = response.data[j].images.fixed_height.url
                var rating =response.data[j].rating
                var p = $("<p>");
                p.addClass("left");
                p.text("Rating: " + rating);
                var image = $("<img>");
                image.attr("src", url);
                $("#animate").prepend(p, image);
            }
        });
        $("#animate").empty();
    });

    $("#add-character").on("click", function(event){
        event.preventDefault();
        var value = $(".character-input").val().trim();
        console.log(value);
    });

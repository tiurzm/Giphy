var disney = ["Tinker Bell","Evil Queen", "Mickey Mouse", "Pocahontas", "Pascal", "Princess Jasmine","Mowgli", "Violet Parr", "Megara", "Simba", "Robin Hood", "James P. Sullivan", "Marie", "Dory", "Nick Wilde", "Mother Gothel"]; 
    function addNew(){
        for(var i = 0; i < disney.length; i++){
            var newButton = $("<button>");
            newButton.attr("data-character", disney[i])
            newButton.text(disney[i]);
            $("#character-button").append(newButton);
        }
    };
    addNew();
   
    function addImage(){
        $("button").on("click", function(event){
        event.preventDefault();
        var character = $(this).attr("data-character");
        // var still = $(this).attr("data-still");
        // var animate
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + character + "&api_key=VVy1qq3CVz412GDiIaDHXKBkxXzX14kh&limit=10";
    
        $.ajax({
            url: queryURL,
            method: "GET"
        }) .then(function(response){
            console.log(response.data);
            for (var j = 0; j < response.data.length; j++) {
                var url = response.data[j].images.fixed_height.url
                console.log(url);
                var still = response.data[j].images.fixed_height_still.url
                console.log(still);
                var rating =response.data[j].rating
                var p = $("<p>");
                p.text("Rating: " + rating);
                p.addClass("text");
                var image = $("<img>");
                image.addClass("gif");
                image.attr("src", still)
                image.attr("src", url);
                image.attr("name", [j]);
                $("#animate").append(p, image);
            }
        });
        $("#animate").empty();
        });
    }
    addImage();
    

    $("#add-character").on("click", function(event){
        event.preventDefault();
        var value = $("#character-input").val().trim();
        disney.push(value);
        console.log(disney);
        $("#character-button").empty();
        addNew();
        addImage();
    });

    $(".gif").on("click", function() {
        var state = $(this).attr("data-state");
        if (state === "animate") {
            $(this).attr("src", $(this).attr("data-still"));
            $(this).attr("data-state", "still");
        } else {
            $(this).attr("src", $(this).attr("data-animate"));
            $(this).attr("data-state", "animate");
        }
    });

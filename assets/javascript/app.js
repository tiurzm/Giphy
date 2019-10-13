var disney = ["Tinker Bell","Evil Queen", "Mickey Mouse", "Pocahontas", "Pascal", "Princess Jasmine","Mowgli", "Violet Parr", "Megara", "Simba", "Robin Hood", "James P. Sullivan", "Marie", "Dory", "Nick Wilde", "Mother Gothel"]; 
    $("#animate").hide();
    function addAray(){
        for(var i = 0; i < disney.length; i++){
            var newButton = $("<button>");
            newButton.addClass("m-1");
            newButton.addClass("btn");
            newButton.addClass("btn-outline-success");
            newButton.css("color", "black");
            newButton.attr("data-character", disney[i])
            newButton.text(disney[i]);
            $("#character-button").append(newButton);
        }
    };
    addAray();
   
    function addImage(){
        $("button").on("click", function(event){
        event.preventDefault();
        $("#animate").show();
        var character = $(this).attr("data-character");
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + character + "&api_key=VVy1qq3CVz412GDiIaDHXKBkxXzX14kh&limit=10";
    
        $.ajax({
            url: queryURL,
            method: "GET"
        }) .then(function(response){
            console.log(response)
            for (var j = 0; j < response.data.length; j++) {
                var move = response.data[j].images.fixed_height.url
                // console.log(move);
                var notMove = response.data[j].images.fixed_height_still.url
                // console.log(notMove);
                var rating =response.data[j].rating
                // var newDiv = $("<div>");
                // newDiv.addClass("div");
                // newDiv.css("border", "2px solid red");
                // $("#animate").append(newDiv);
                var p = $("<p>");
                p.text("Rating: " + rating);
                p.addClass("text");
                p.addClass("m-3");
                p.addClass("float-left");
                var image = $("<img>");
                image.addClass("gif");
                image.addClass("m-3");
                image.addClass("float-left");
                image.addClass("port-image");
                image.attr("data-animate", move);
                image.attr("data-state", "still")
                image.attr("data-still", notMove);
                image.attr("src", notMove);
                $("#animate").append(p, image);   
            }
            
            $(".gif").on("click",function(event){
                event.preventDefault();
                var state = $(this).attr("data-state");
                if (state === "still") {
                    $(this).attr("src", $(this).attr("data-animate"));
                    $(this).attr("data-state", "animate");
                  } else {
                    $(this).attr("src", $(this).attr("data-still"));
                    $(this).attr("data-state", "still");
                  }
            })
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
        addAray();
        addImage();
        $("#character-input").val('');
    });

